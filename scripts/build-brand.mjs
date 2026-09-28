#!/usr/bin/env node
/**
 * Build every Epiow logo file from one construction.
 *
 *   node scripts/build-brand.mjs          write SVG masters, render PNGs and the ICO
 *                                         with headless Chromium, update SHA256SUMS
 *   node scripts/build-brand.mjs --check  fail when an SVG master drifted from the
 *                                         spec or a file no longer matches SHA256SUMS
 *                                         (no browser needed; CI runs this)
 *
 * Inputs:  logo/construction/epiow-logo.spec.json (geometry)
 *          tokens/brand.tokens.json (colours)
 * Outputs: logo/current/*.svg, logo/icons/*, logo/sheet/usage.png, logo/SHA256SUMS
 *
 * The 64-unit SVG masters are byte-identical to what epiow.com serves
 * (EpiowAI/epiow apps/web/src/brand), so this script and the product agree.
 * Set CHROMIUM to pick a browser binary (default: chromium).
 */

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");
const spec = JSON.parse(readFileSync(join(root, "logo/construction/epiow-logo.spec.json"), "utf8"));
const tokens = JSON.parse(readFileSync(join(root, "tokens/brand.tokens.json"), "utf8"));

const hex = (name) => tokens.palette[name].hex;
const C = {
  tile: hex(tokens.logo.colours.tile),
  paper: hex(tokens.logo.colours.bracket),
  signal: hex(tokens.logo.colours.signal),
  night: hex("night"),
  black: "#000000",
  white: "#FFFFFF",
};

// ---- geometry -------------------------------------------------------------

const G = spec.grid;
const fmt = (v) => Number(v.toFixed(spec.tile.decimals)).toString();

/** Superellipse tile; same algorithm and rounding as the product's squircle.ts. */
function tilePath(size) {
  const { exponent: n, segments } = spec.tile;
  const half = size / 2;
  const parts = [];
  for (let i = 0; i < segments; i += 1) {
    const t = (i / segments) * Math.PI * 2;
    const cos = Math.cos(t);
    const sin = Math.sin(t);
    const x = half + half * Math.sign(cos) * Math.abs(cos) ** (2 / n);
    const y = half + half * Math.sign(sin) * Math.abs(sin) ** (2 / n);
    parts.push(`${i === 0 ? "M" : "L"}${fmt(x)} ${fmt(y)}`);
  }
  return `${parts.join(" ")} Z`;
}

const TILE = tilePath(G);
const BRACKET = spec.bracket_path;
const DOT = spec.signal;
const W = spec.wordmark;
const circlePath = ({ cx, cy, r }) => `M${cx - r} ${cy}A${r} ${r} 0 1 0 ${cx + r} ${cy}A${r} ${r} 0 1 0 ${cx - r} ${cy}Z`;

function lockupMetrics(markSize) {
  const capHeight = markSize * spec.lockup.cap_height_ratio;
  const scale = capHeight / (W.baseline - W.cap_top);
  const gap = markSize * spec.lockup.gap_ratio;
  const wordmarkTop = markSize / 2 - capHeight / 2 - W.cap_top * scale;
  return { scale, gap, wordmarkTop, width: markSize + gap + W.width * scale };
}

// ---- SVG masters (markup matches React's renderToStaticMarkup) ------------

const open = (w, h, vb) =>
  `<svg width="${w}" height="${h}" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Epiow">`;
const dot = (fill, d = DOT) => `<circle cx="${d.cx}" cy="${d.cy}" r="${d.r}" fill="${fill}"></circle>`;
const markBody = `<path d="${TILE}" fill="${C.tile}"></path><path d="${BRACKET}" fill="${C.paper}"></path>${dot(C.signal)}`;
/** One-colour mark: the tile with the bracket and the dot cut out. */
const monoMarkBody = (fill) =>
  `<path d="${TILE} ${BRACKET} ${circlePath(DOT)}" fill="${fill}" fill-rule="evenodd"></path>`;
const wordBody = (letters, tittle) =>
  `<path d="${W.ink_path}" fill="${letters}"></path><circle cx="${W.tittle.cx}" cy="${W.tittle.cy}" r="${W.tittle.r}" fill="${tittle}"></circle>`;

function mark(size = G) {
  return `${open(size, size, `0 0 ${G} ${G}`)}${markBody}</svg>\n`;
}
function markMaskable() {
  return `${open(G, G, `0 0 ${G} ${G}`)}<rect width="${G}" height="${G}" fill="${C.tile}"></rect><path d="${BRACKET}" fill="${C.paper}"></path>${dot(C.signal)}</svg>\n`;
}
function glyph(fill) {
  return `${open(G, G, `0 0 ${G} ${G}`)}<path d="${BRACKET}" fill="${fill}"></path>${dot(C.signal)}</svg>\n`;
}
function monoMark(fill) {
  return `${open(G, G, `0 0 ${G} ${G}`)}${monoMarkBody(fill)}</svg>\n`;
}
function wordmark(letters, tittle, height = G) {
  const width = (W.width / W.height) * height;
  return `${open(width, height, `0 0 ${W.width} ${W.height}`)}${wordBody(letters, tittle)}</svg>\n`;
}
function lockup(letters, { mono = null, markSize = G } = {}) {
  const m = lockupMetrics(markSize);
  const markScale = markSize / G;
  const body = mono ? monoMarkBody(mono) : markBody;
  return `${open(m.width, markSize, `0 0 ${m.width} ${markSize}`)}<g transform="scale(${markScale})">${body}</g><g transform="translate(${markSize + m.gap} ${m.wordmarkTop}) scale(${m.scale})">${wordBody(letters, mono ?? C.signal)}</g></svg>\n`;
}

const svgs = {
  "logo/current/mark.svg": mark(),
  "logo/current/favicon.svg": mark(32),
  "logo/current/mark-maskable.svg": markMaskable(),
  "logo/current/glyph-on-light.svg": glyph(C.tile),
  "logo/current/glyph-on-dark.svg": glyph(C.paper),
  "logo/current/wordmark-light.svg": wordmark(C.tile, C.signal),
  "logo/current/wordmark-dark.svg": wordmark(C.paper, C.signal),
  "logo/current/lockup-light.svg": lockup(C.tile),
  "logo/current/lockup-dark.svg": lockup(C.paper),
  "logo/current/mark-black.svg": monoMark(C.black),
  "logo/current/mark-white.svg": monoMark(C.white),
  "logo/current/wordmark-black.svg": wordmark(C.black, C.black),
  "logo/current/wordmark-white.svg": wordmark(C.white, C.white),
  "logo/current/lockup-black.svg": lockup(C.black, { mono: C.black }),
  "logo/current/lockup-white.svg": lockup(C.white, { mono: C.white }),
};

// ---- small sizes ------------------------------------------------------------

/** 16 px: tile as vector, glyph drawn on the pixel grid from the spec. */
function snapped16() {
  const rows = spec.small_sizes["16"].glyph_pixels;
  const fills = { P: C.paper, S: C.signal };
  const rects = [];
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; ) {
      const ch = row[x];
      let end = x;
      while (end < row.length && row[end] === ch) end += 1;
      if (fills[ch]) rects.push(`<rect x="${x}" y="${y}" width="${end - x}" height="1" fill="${fills[ch]}"></rect>`);
      x = end;
    }
  });
  return `${open(16, 16, "0 0 16 16")}<g transform="scale(${16 / G})"><path d="${TILE}" fill="${C.tile}"></path></g><g shape-rendering="crispEdges">${rects.join("")}</g></svg>\n`;
}

/** 48 px: the vector mark with the dot snapped to whole pixels. */
function snapped48() {
  const r = (spec.small_sizes["48"].signal_r_px * G) / 48;
  return `${open(48, 48, `0 0 ${G} ${G}`)}<path d="${TILE}" fill="${C.tile}"></path><path d="${BRACKET}" fill="${C.paper}"></path>${dot(C.signal, { ...DOT, r })}</svg>\n`;
}

// ---- rendering --------------------------------------------------------------

const chromium = process.env.CHROMIUM || "chromium";
let work;

function render(svg, width, height, out, { scale = 1, background = "transparent" } = {}) {
  const html = join(work, "page.html");
  writeFileSync(
    html,
    `<!doctype html><html><head><style>html,body{margin:0;padding:0;background:${background};overflow:hidden}svg,img{display:block}</style></head><body>${svg}</body></html>`,
  );
  execFileSync(
    chromium,
    [
      "--headless=new",
      "--no-sandbox",
      "--hide-scrollbars",
      "--disable-gpu",
      "--font-render-hinting=none",
      "--default-background-color=00000000",
      `--force-device-scale-factor=${scale}`,
      `--window-size=${width},${height}`,
      `--screenshot=${join(root, out)}`,
      `file://${html}`,
    ],
    { stdio: "ignore" },
  );
}

/** Re-size an SVG's outer width/height (the viewBox keeps the geometry). */
const sized = (svg, w, h) => svg.replace(/^<svg width="[^"]*" height="[^"]*"/, `<svg width="${w}" height="${h}"`);

/** Minimal ICO holding PNG frames (read by every current browser). */
function ico(frames) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(frames.length, 4);
  let offset = 6 + frames.length * 16;
  const entries = frames.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size, 0);
    e.writeUInt8(size, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...frames.map((f) => f.data)]);
}

function usageSheet() {
  const L = (letters, opts) => lockup(letters, { markSize: 48, ...opts });
  const pad = 12; // clear space = 0.25 x tile (48 px tile)
  const cell = (bg, content, label, fg = C.tile) =>
    `<div style="background:${bg};padding:28px;border-radius:12px;display:flex;flex-direction:column;gap:16px;align-items:flex-start"><div>${content}</div><div style="font:500 12px/1.2 sans-serif;color:${fg};opacity:.8">${label}</div></div>`;
  const zoom = (file, px) =>
    `<div style="display:flex;flex-direction:column;align-items:center;gap:8px"><img src="${join(root, file)}" width="${px * 4}" height="${px * 4}" style="image-rendering:pixelated"><img src="${join(root, file)}" width="${px}" height="${px}"><span style="font:500 12px sans-serif;color:${C.tile}">${px} px</span></div>`;
  const clear = `<div style="position:relative;padding:${pad}px;outline:1px dashed ${C.signal};background:repeating-linear-gradient(45deg,#F9731622 0 4px,transparent 4px 8px)"><div style="background:${C.paper}">${L(C.tile)}</div></div>`;
  return `<div style="width:1200px;padding:40px;box-sizing:border-box;background:#FFFFFF;font-family:sans-serif;display:grid;grid-template-columns:1fr 1fr;gap:20px">
  ${cell(C.paper, L(C.tile), "lockup-light.svg on paper #FCFBFA")}
  ${cell(C.night, L(C.paper), "lockup-dark.svg on night #0F0E15", C.paper)}
  ${cell("#FFFFFF", L(C.black, { mono: C.black }), "lockup-black.svg (one ink)")}
  ${cell(C.tile, L(C.white, { mono: C.white }), "lockup-white.svg (one ink)", C.paper)}
  ${cell(C.paper, clear, "Clear space: 0.25 x tile on every side (hatched)")}
  ${cell(C.paper, `<div style="display:flex;gap:28px;align-items:flex-end">${zoom("logo/icons/favicon-16.png", 16)}${zoom("logo/icons/favicon-32.png", 32)}${zoom("logo/icons/favicon-48.png", 48)}</div>`, "Pixel-snapped favicons, 4x and 1x")}
</div>`;
}

// ---- hashes -----------------------------------------------------------------

const HASHED_DIRS = ["logo/current", "logo/icons", "logo/sheet", "logo/construction"];
const HASHED_FILES = ["tokens/brand.tokens.json"];
const sha = (buf) => createHash("sha256").update(buf).digest("hex");

function hashedFiles() {
  const files = [...HASHED_FILES];
  for (const dir of HASHED_DIRS) {
    for (const name of readdirSync(join(root, dir)).sort()) files.push(`${dir}/${name}`);
  }
  return files.sort();
}

function sums() {
  return `${hashedFiles()
    .map((f) => `${sha(readFileSync(join(root, f)))}  ${f}`)
    .join("\n")}\n`;
}

// ---- main -------------------------------------------------------------------

if (check) {
  const problems = [];
  for (const [file, content] of Object.entries(svgs)) {
    let current = "";
    try {
      current = readFileSync(join(root, file), "utf8");
    } catch {}
    if (current !== content) problems.push(`${file} differs from the spec (run node scripts/build-brand.mjs)`);
  }
  const expected = sums();
  const recorded = readFileSync(join(root, "logo/SHA256SUMS"), "utf8");
  if (expected !== recorded) {
    const want = new Set(recorded.split("\n"));
    for (const line of expected.split("\n")) if (line && !want.has(line)) problems.push(`hash mismatch or unlisted: ${line.split("  ")[1]}`);
    const have = new Set(expected.split("\n"));
    for (const line of recorded.split("\n")) if (line && !have.has(line)) problems.push(`listed but changed or missing: ${line.split("  ")[1]}`);
  }
  if (problems.length) {
    console.error(problems.join("\n"));
    process.exit(1);
  }
  console.log(`ok: ${Object.keys(svgs).length} SVG masters match the spec; ${hashedFiles().length} files match logo/SHA256SUMS`);
} else {
  work = mkdtempSync(join(tmpdir(), "epiow-brand-"));
  try {
    for (const dir of ["logo/current", "logo/icons", "logo/sheet"]) mkdirSync(join(root, dir), { recursive: true });
    for (const [file, content] of Object.entries(svgs)) writeFileSync(join(root, file), content);

    const tile = svgs["logo/current/mark.svg"];
    const full = svgs["logo/current/mark-maskable.svg"];
    render(snapped16(), 16, 16, "logo/icons/favicon-16.png");
    render(sized(tile, 32, 32), 32, 32, "logo/icons/favicon-32.png");
    render(snapped48(), 48, 48, "logo/icons/favicon-48.png");
    for (const s of [192, 512, 1024]) render(sized(tile, s, s), s, s, `logo/icons/icon-${s}.png`);
    for (const s of [192, 512]) render(sized(full, s, s), s, s, `logo/icons/icon-maskable-${s}.png`);
    render(sized(full, 180, 180), 180, 180, "logo/icons/apple-touch-icon-180.png");
    writeFileSync(
      join(root, "logo/icons/favicon.ico"),
      ico([16, 32, 48].map((size) => ({ size, data: readFileSync(join(root, `logo/icons/favicon-${size}.png`)) }))),
    );

    const sheet = usageSheet();
    render(sheet, 1200, 720, "logo/sheet/usage.png", { scale: 2, background: "#FFFFFF" });

    writeFileSync(join(root, "logo/SHA256SUMS"), sums());
    const version = execFileSync(chromium, ["--version"]).toString().trim();
    console.log(`wrote ${Object.keys(svgs).length} SVG masters, icons and the usage sheet with ${version}`);
    console.log(`files hashed: ${relative(root, join(root, "logo/SHA256SUMS"))}`);
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
}
