# Epiow brand

The brand home for **Epiow** (Epiow Limited): the company, the Epiow product
(epiow.com), Epiow Legacy and the Epiow chatbot. Every surface takes its
logo, icons, colours and type from this repository and keeps no redrawn copy
(SylphxAI/owner `standards/experience.md`, "Brand home"). A redesign lands
here first; the surfaces follow.

Product code lives in [`EpiowAI/epiow`](https://github.com/EpiowAI/epiow).

![Epiow lockup](./logo/current/lockup-light.svg)

## What is here

| | |
|--|--|
| **Name rules** | [below](#name) |
| **Logo masters, icons, usage sheet, provenance** | [`logo/README.md`](./logo/README.md) |
| **Generator** | [`scripts/build-brand.mjs`](./scripts/build-brand.mjs) (`--check` runs in CI) |
| **Tokens** (colour roles, type, radius, motion) | [`tokens/brand.tokens.json`](./tokens/brand.tokens.json) |
| **Trademark status and similarity check** | [`docs/trademarks.md`](./docs/trademarks.md) |
| **Where the brand ships, and open follow-ups** | [`docs/surfaces.md`](./docs/surfaces.md) |
| **Logo decision log** | [`docs/logo-decision.md`](./docs/logo-decision.md) |
| **Brand manual** (story, voice, logo, colour, type) | [`docs/brand-manual/BRAND-MANUAL.md`](./docs/brand-manual/BRAND-MANUAL.md) |
| **Company facts** | [`COMPANY.md`](./COMPANY.md) |
| **Copy kit** | [`docs/copy/`](./docs/copy/) |

## Name

- The brand is **Epiow**: always a capital E and the rest lower case, in
  every language and in running text ("Epiow", "Epiow Legacy").
- Never "EPIOW", except in a card statement descriptor, where the card
  networks print capitals.
- Never "epiow" as display text. The domain (epiow.com), handles and code
  identifiers stay lower case.
- The company is **Epiow Limited** (legal name, contracts, footers, terms).
- The product is "Epiow", not "Epiow AI" or "Epiow OS".
- Where the logo is meant, use a logo file, not the name typed in a font.

## Colour, in one line

Forest carries the brand; lime is the signal. Forest-900 `#0C3B2E` is the app
tile and the primary colour; green-500 `#1FAD6B` is the second shape of the
mark. Lime `#D4FF5A` is only the lens of the mark, agent activity, and at most
one key call to action per surface. Text on lime is always forest ink
(10.9:1), never white (1.2:1), and lime is never text on a light ground. Type:
Bricolage Grotesque (display, wordmark), Plus Jakarta Sans (text), JetBrains
Mono (code, numerals). Radius: control 8px, card 12px, panel 16px, window
12px; app icons are the n = 5 superellipse. Full roles for light and dark are
in [`tokens/brand.tokens.json`](./tokens/brand.tokens.json) (5.0.0, 2026-11-17).

**Rollout:** the "Overlap" identity was chosen on 2026-11-17 and replaces
"Bracket and signal" (indigo and ember). Each surface still ships the old
identity until its own change lands: [`docs/surfaces.md`](./docs/surfaces.md).
The Workspace OS tokens v4 proposal
([#11](https://github.com/EpiowAI/brand/pull/11)) was drawn on the old palette
and needs re-basing on this one.

## Trademark

Unregistered; nothing is filed, per company policy for a small, self-funded
company (SylphxAI/owner#781). Similarity check and nearest marks:
[`docs/trademarks.md`](./docs/trademarks.md).

## Layout

```
brand/
  logo/
    construction/   epiow-logo.spec.json (geometry), construction drawing
    current/        SVG masters: mark, lockups, wordmarks, one-ink, glyph, favicon
    icons/          favicons 16/32/48 + ICO, apple-touch 180, PWA 192/512 (+ maskable), 1024
    sheet/          usage sheet
    SHA256SUMS      hashes of every file above and the tokens
    options*/ reverse/ archive/   earlier explorations (archive)
  tokens/brand.tokens.json
  scripts/build-brand.mjs
  docs/             manual, decision log, surfaces, trademarks, copy
  vision/           vision images (added by their own PRs)
```
