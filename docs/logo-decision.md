# Logo decision log

## Status

**Decided — "Overlap".**
Date: 2026-11-17
Shipping assets: [`logo/current/`](../logo/current/) · construction: [`logo/construction/epiow-mark-construction.svg`](../logo/construction/epiow-mark-construction.svg)

| Field | Value |
|-------|--------|
| **Chosen** | Overlap (hand-authored geometric mark: circle + rounded square + lens) + "Epiow" wordmark in Bricolage Grotesque |
| **Date** | 2026-11-17, by Kyle, from seven candidate directions |
| **Replaces** | Bracket and signal (indigo tile, paper bracket, ember dot) — archived in `logo/archive/bracket-and-signal-2026-09/` |
| **Source of truth** | This repository: `logo/construction/epiow-logo.spec.json` + `tokens/brand.tokens.json`, built by `scripts/build-brand.mjs` |
| **Shipping surfaces** | None yet. Rollout per surface: [`surfaces.md`](./surfaces.md) |

## Why this mark

Kyle asked for a new identity, not tied to the previous one, that is
fresh and modern.

"Overlap":

- **The circle** is the people of the organization; **the rounded square** is
  the work: the window, the app, the task.
- **The lens**, where the two overlap, is the shared workspace. It is the only
  lime in the mark, the same rule the colour system follows (lime = signal:
  agent activity, the single key call to action).
- **The wordmark** is set in Bricolage Grotesque Bold (SIL OFL 1.1) and
  outlined. Always a capital E.
- **Small sizes**: favicons use a larger glyph whose edges land on whole
  pixels at 16, 32 and 48 px (see `logo/README.md`, Small sizes).
- **Same tile as the apps**: the app icon keeps the n = 5 superellipse.
- **No gradients** anywhere in the mark.

Known trade-off: at 16 px the lens is about 5 px wide, so the mark reads as
"light circle over green square" more than as three shapes.

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
| 2026-11-17 | **Decided:** "Overlap" replaces Bracket and signal; palette moves from indigo and ember to forest, green and lime (tokens 5.0.0); wordmark moves from Sora to Bricolage Grotesque. Brand home first; surfaces follow |

Earlier explorations (`logo/options*`) remain as archive.
