# Epiow logo

## Status

Decided — see **Current (shipping)** below. Option folders are archive.

## Generations

| Gen | Path | Notes |
|-----|------|--------|
| **v3 (preferred)** | [`options-v3/`](./options-v3/) | Enterprise-referenced G1–G15 + AI mood refs |
| v2 | [`options-v2/`](./options-v2/) | F1–F6 vector; demoted after critique |
| v1 archive | [`options/`](./options/) | 0 + A–E exploratory |

## Current (shipping)

`current/` holds **Bracket and signal** (decided 2026-09-23 — see
[`docs/logo-decision.md`](../docs/logo-decision.md)): `mark.svg`, `favicon.svg`,
`lockup-light.svg`, `lockup-dark.svg`, `logo.svg`, `icon-512.png`,
`icon-1024.png`, `icon-maskable-512.png`. These are copies of the files the
product generates from `EpiowAI/epiow` `apps/web/src/brand/`; change the
geometry there, then re-copy.

The retired E-Orbit set lives in `archive/e-orbit-2026-07/`.

## Rules

- Prefer **vector SVG** for final shipping marks  
- AI raster is for selection mood only  
- No four-square “app grid” placeholder ever returns as official  

## Reverse-engineered vectors (v0)

**Added:** complete SVG pack derived from existing rasters / masters.

logo.svg (canonical) + wordmark.svg lockup

See `reverse/README.md` for method and accuracy disclaimer.
Primary shipping vectors live in `current/*.svg` with PNG previews `*-from-svg.png` / `*-512.png`.

## Recraft vectorize (FAL)

Primary clean SVG from raster via `fal-ai/recraft/vectorize`:

- `*-recraft.svg` — Recraft output (preferred reverse vector)
- `*-recraft-512.png` / preview PNGs
- Previous drafts kept as `*.pre-recraft` / potrace / vision where present

Epiow: `icon-recraft.svg` is an alternate; **canonical master remains `logo.svg`**.
