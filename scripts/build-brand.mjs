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
 * Outputs: logo/current/*.svg, logo/icons/*, logo/construction/epiow-mark-construction.{svg,png},
 *          logo/sheet/usage.png, logo/SHA256SUMS
 *
 * This repository is the source: surfaces copy these files and keep no redrawn copy.
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
const LC = tokens.logo.colours;
const C = {
  tile: hex(LC.tile),
  forest: hex(LC.circle_on_light),
  paper: hex(LC.circle_on_dark),
  green: hex(LC.square),
  lime: hex(LC.lens),
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
const W = spec.wordmark;

/** The three shapes of the glyph as paths: circle, rounded square, and their overlap (the lens). */
function glyphPaths({ circle: c, square: q }) {
  const circle = `M${fmt(c.cx - c.r)} ${fmt(c.cy)}A${c.r} ${c.r} 0 1 0 ${fmt(c.cx + c.r)} ${fmt(c.cy)}A${c.r} ${c.r} 0 1 0 ${fmt(c.cx - c.r)} ${fmt(c.cy)}Z`;
  const x2 = q.x + q.size;
  const y2 = q.y + q.size;
  const r = q.r;
  const square = `M${fmt(q.x + r)} ${fmt(q.y)}H${fmt(x2 - r)}A${r} ${r} 0 0 1 ${fmt(x2)} ${fmt(q.y + r)}V${fmt(y2 - r)}A${r} ${r} 0 0 1 ${fmt(x2 - r)} ${fmt(y2)}H${fmt(q.x + r)}A${r} ${r} 0 0 1 ${fmt(q.x)} ${fmt(y2 - r)}V${fmt(q.y + r)}A${r} ${r} 0 0 1 ${fmt(q.x + r)} ${fmt(q.y)}Z`;
  // The square's left edge and top edge leave the circle at the same distance from its corner.
  const reach = Math.sqrt(c.r ** 2 - (q.x - c.cx) ** 2);
  const edgeY = c.cy + reach;
  const edgeX = c.cx + Math.sqrt(c.r ** 2 - (q.y - c.cy) ** 2);
  const lens = `M${fmt(q.x)} ${fmt(edgeY)}V${fmt(q.y + r)}A${r} ${r} 0 0 1 ${fmt(q.x + r)} ${fmt(q.y)}H${fmt(edgeX)}A${c.r} ${c.r} 0 0 1 ${fmt(q.x)} ${fmt(edgeY)}Z`;
  return { circle, square, lens };
}

const STD = glyphPaths(spec.glyph);
const SMALL = glyphPaths(spec.small);
const BOX = spec.glyph.box;

function lockupMetrics(glyphSize) {
  const capHeight = glyphSize * spec.lockup.cap_height_ratio;
  const scale = capHeight / (W.baseline - W.cap_top);
  const gap = glyphSize * spec.lockup.gap_ratio;
  const wordmarkTop = glyphSize / 2 - capHeight / 2 - W.cap_top * scale;
  const height = Math.max(glyphSize, wordmarkTop + W.height * scale);
  return { scale, gap, wordmarkTop, width: glyphSize + gap + W.width * scale, height };
}

// ---- SVG masters ------------------------------------------------------------

const open = (w, h, vb) =>
  `<svg width="${fmt(w)}" height="${fmt(h)}" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Epiow">`;
/** The glyph in colour. `circle` is forest on light grounds and paper on dark grounds and on the tile. */
const glyphBody = (circle, g = STD) =>
  `<path d="${g.circle}" fill="${circle}"></path><path d="${g.square}" fill="${C.green}"></path><path d="${g.lens}" fill="${C.lime}"></path>`;
/** One-colour glyph: the circle and the square in one ink, the lens cut out. */
const monoGlyphBody = (fill, g = STD) => `<path d="${g.circle} ${g.square}" fill="${fill}" fill-rule="evenodd"></path>`;
const wordBody = (letters) => `<path d="${W.ink_path}" fill="${letters}"></path>`;
const boxView = `${BOX.x} ${BOX.y} ${BOX.size} ${BOX.size}`;

function mark(size = G, g = STD) {
  return `${open(size, size, `0 0 ${G} ${G}`)}<path d="${TILE}" fill="${C.tile}"></path>${glyphBody(C.paper, g)}</svg>\n`;
}
function markMaskable() {
  return `${open(G, G, `0 0 ${G} ${G}`)}<rect width="${G}" height="${G}" fill="${C.tile}"></rect>${glyphBody(C.paper)}</svg>\n`;
}
function glyph(circle) {
  return `${open(BOX.size, BOX.size, boxView)}${glyphBody(circle)}</svg>\n`;
}
function monoMark(fill) {
  return `${open(BOX.size, BOX.size, boxView)}${monoGlyphBody(fill)}</svg>\n`;
}
function wordmark(letters, height = G) {
  const width = (W.width / W.height) * height;
  return `${open(width, height, `0 0 ${W.width} ${W.height}`)}${wordBody(letters)}</svg>\n`;
}
function lockup(letters, circle, { mono = null, glyphSize = BOX.size } = {}) {
  const m = lockupMetrics(glyphSize);
  const k = glyphSize / BOX.size;
  const body = mono ? monoGlyphBody(mono) : glyphBody(circle);
  return `${open(m.width, m.height, `0 0 ${fmt(m.width)} ${fmt(m.height)}`)}<g transform="scale(${k}) translate(${-BOX.x} ${-BOX.y})">${body}</g><g transform="translate(${fmt(glyphSize + m.gap)} ${fmt(m.wordmarkTop)}) scale(${m.scale})">${wordBody(letters)}</g></svg>\n`;
}

const svgs = {
  "logo/current/mark.svg": mark(),
  "logo/current/favicon.svg": mark(32, SMALL),
  "logo/current/mark-maskable.svg": markMaskable(),
  "logo/current/glyph-on-light.svg": glyph(C.forest),
  "logo/current/glyph-on-dark.svg": glyph(C.paper),
  "logo/current/wordmark-light.svg": wordmark(C.forest),
  "logo/current/wordmark-dark.svg": wordmark(C.paper),
  "logo/current/lockup-light.svg": lockup(C.forest, C.forest),
  "logo/current/lockup-dark.svg": lockup(C.paper, C.paper),
  "logo/current/mark-black.svg": monoMark(C.black),
  "logo/current/mark-white.svg": monoMark(C.white),
  "logo/current/wordmark-black.svg": wordmark(C.black),
  "logo/current/wordmark-white.svg": wordmark(C.white),
  "logo/current/lockup-black.svg": lockup(C.black, null, { mono: C.black }),
  "logo/current/lockup-white.svg": lockup(C.white, null, { mono: C.white }),
};

/** Construction drawing: the 64-unit grid, the safe zone, the glyph box and the three shapes. */
function construction() {
  const lines = [];
  for (let i = 0; i <= G; i += 4) {
    lines.push(`<path d="M${i} 0V${G}M0 ${i}H${G}" stroke="#0C3B2E" stroke-opacity="${i % 16 === 0 ? 0.28 : 0.1}" stroke-width="0.12"></path>`);
  }
  const safe = G * 0.1;
  return `<svg width="640" height="640" viewBox="0 0 ${G} ${G}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Epiow mark construction"><rect width="${G}" height="${G}" fill="#FFFFFF"></rect>${lines.join("")}<path d="${TILE}" fill="none" stroke="#0C3B2E" stroke-width="0.25"></path><rect x="${safe}" y="${safe}" width="${G - 2 * safe}" height="${G - 2 * safe}" fill="none" stroke="#0E7A50" stroke-width="0.2" stroke-dasharray="1 1"></rect><rect x="${BOX.x}" y="${BOX.y}" width="${BOX.size}" height="${BOX.size}" fill="none" stroke="#0C3B2E" stroke-width="0.2" stroke-dasharray="0.6 0.6"></rect><g fill-opacity="0.82">${glyphBody(C.forest)}</g><circle cx="${spec.glyph.circle.cx}" cy="${spec.glyph.circle.cy}" r="0.6" fill="#FFFFFF"></circle></svg>\n`;
}
svgs["logo/construction/epiow-mark-construction.svg"] = construction();

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
  const L = (letters, circle, opts) => lockup(letters, circle, { glyphSize: 48, ...opts });
  const pad = 12; // clear space = 0.25 x glyph (48 px glyph)
  const cell = (bg, content, label, fg = C.forest) =>
    `<div style="background:${bg};padding:28px;border-radius:12px;display:flex;flex-direction:column;gap:16px;align-items:flex-start"><div>${content}</div><div style="font:500 12px/1.2 sans-serif;color:${fg};opacity:.8">${label}</div></div>`;
  const zoom = (file, px) =>
    `<div style="display:flex;flex-direction:column;align-items:center;gap:8px"><img src="${join(root, file)}" width="${px * 4}" height="${px * 4}" style="image-rendering:pixelated"><img src="${join(root, file)}" width="${px}" height="${px}"><span style="font:500 12px sans-serif;color:${C.forest}">${px} px</span></div>`;
  const clear = `<div style="position:relative;padding:${pad}px;outline:1px dashed ${C.green};background:repeating-linear-gradient(45deg,#1FAD6B33 0 4px,transparent 4px 8px)"><div style="background:${C.paper}">${L(C.forest, C.forest)}</div></div>`;
  return `<div style="width:1200px;padding:40px;box-sizing:border-box;background:#FFFFFF;font-family:sans-serif;display:grid;grid-template-columns:1fr 1fr;gap:20px">
  ${cell(C.paper, L(C.forest, C.forest), `lockup-light.svg on paper ${C.paper}`)}
  ${cell(C.night, L(C.paper, C.paper), `lockup-dark.svg on night ${C.night}`, C.paper)}
  ${cell("#FFFFFF", L(C.black, null, { mono: C.black }), "lockup-black.svg (one ink)")}
  ${cell(C.forest, L(C.white, null, { mono: C.white }), "lockup-white.svg (one ink)", C.paper)}
  ${cell(C.paper, clear, "Clear space: 0.25 x the glyph on every side (hatched)")}
  ${cell(C.paper, `<div style="display:flex;gap:28px;align-items:flex-end">${zoom("logo/icons/favicon-16.png", 16)}${zoom("logo/icons/favicon-32.png", 32)}${zoom("logo/icons/favicon-48.png", 48)}</div>`, "Favicons on the pixel grid, 4x and 1x")}
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
    const small = svgs["logo/current/favicon.svg"];
    const full = svgs["logo/current/mark-maskable.svg"];
    for (const s of [16, 32, 48]) render(sized(small, s, s), s, s, `logo/icons/favicon-${s}.png`);
    for (const s of [192, 512, 1024]) render(sized(tile, s, s), s, s, `logo/icons/icon-${s}.png`);
    for (const s of [192, 512]) render(sized(full, s, s), s, s, `logo/icons/icon-maskable-${s}.png`);
    render(sized(full, 180, 180), 180, 180, "logo/icons/apple-touch-icon-180.png");
    render(svgs["logo/construction/epiow-mark-construction.svg"], 640, 640, "logo/construction/epiow-mark-construction.png", { background: "#FFFFFF" });
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
