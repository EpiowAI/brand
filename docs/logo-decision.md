# Logo decision log

## Status

**Decided — "Bracket and signal".**
Date: 2026-09-23
Shipping assets: [`logo/current/`](../logo/current/) · construction: [`logo/construction/epiow-mark-construction.svg`](../logo/construction/epiow-mark-construction.svg)

| Field | Value |
|-------|--------|
| **Chosen** | Bracket and signal (new, hand-authored geometric mark) + "Epiow" wordmark |
| **Date** | 2026-09-23 |
| **Replaces** | E-Orbit (indigo→violet gradient tile, E + two orbit arcs) — archived in `logo/archive/e-orbit-2026-07/` |
| **Source of truth** | This repository since 2026-09-28: `logo/construction/epiow-logo.spec.json` + `tokens/brand.tokens.json`, built by `scripts/build-brand.mjs`. First drawn in `EpiowAI/epiow` `apps/web/src/brand/` (moving to consume this home: EpiowAI/epiow#2021) |
| **Shipping surfaces** | epiow.com header/footer · login + lock screen · OS console header · favicon (SVG + ICO) · PWA icons (any + maskable) · apple-touch icon · Open Graph / Twitter card · structured-data logo |

## Why this mark

The product was unreleased, so the brand could change freely. The E-Orbit mark
had four problems: the gradient did not belong to the product palette (the UI is
indigo ink + ember signal, not violet), it collapsed to a smudge at 16px, the
wordmark was set in an Arial clone, and the orbit arcs said "platform" without
saying anything Epiow-specific.

"Bracket and signal":

- **The bracket** is the capital E of Epiow and the frame of the organization's
  workspace — the lockable shell that holds the apps.
- **The dot** is the signal: the person or agent doing granted work inside it.
  It is the only ember in the mark, which is exactly the rule the product's
  colour system follows (ember = agent activity, the single key CTA, the logo).
- **The wordmark** is set in Sora SemiBold (SIL OFL 1.1 — the product's display
  face) and outlined. The i's tittle is redrawn as a true circle in ember, so
  the wordmark carries the same signal as the mark.
- **Built for 16px**: 64-unit grid in 4-unit steps, so the bracket lands on whole
  pixels (2px strokes). The dot does not at 16 and 48 px, so those sizes have
  pixel-snapped versions (see `logo/README.md`, Small sizes). The glyph sits in the central 50%, inside the
  80% maskable safe zone, so one geometry serves favicon, PWA "any", PWA
  "maskable" and the 1024px store icon.
- **Same tile as the apps**: the tile is the n = 5 superellipse every Epiow app
  icon uses (launcher, dock, App Center, PWA), so the brand and the apps read as
  one family.
- **No gradients** anywhere in the mark.

## History

| Date | Event |
|------|--------|
| 2026-07-16 | Seeded options 0–E; 0 (E-Orbit) temporary live mark |
| 2026-07-16 | v2 shortlist F1–F6; A–E demoted |
| 2026-07-16 | v3 G1–G15 + OpenRouter AI refs |
| 2026-07-16 | Brand brief accepted; Direction W then W3 |
| 2026-07-16 | **Parked:** keep current; no new official adoption |
| 2026-09-23 | **Decided:** "Bracket and signal" replaces E-Orbit; product and brand repo updated together |
| 2026-09-28 | Brand home rebuilt from live epiow.com: generator, one-ink and wordmark masters, pixel-snapped favicons (16 px glyph on the pixel grid, 48 px dot snapped), hashes, light and dark colour roles, type tokens, trademark check. Geometry and colours unchanged |

Earlier explorations (`logo/options*`) remain as archive.
