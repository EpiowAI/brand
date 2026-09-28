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

Indigo carries the brand; ember is the signal. Indigo-700 `#25205B` is the
logo tile and the primary colour. Ember `#F98C10` is only the logo's dot, the
wordmark's tittle, agent activity, and at most one key call to action per
surface. Text on ember is always dark ink (`#291600`, 7.3:1), never white
(2.4:1). Type: Sora (display, wordmark), Plus Jakarta Sans (text),
JetBrains Mono (code, numerals). Radius: control 8px, card 12px, panel 16px,
window 12px; app icons are the n = 5 superellipse. Full roles for light and
dark are in [`tokens/brand.tokens.json`](./tokens/brand.tokens.json), read
back from live epiow.com on 2026-09-28.

**Pending:** the Workspace OS redesign proposes tokens v4
([#11](https://github.com/EpiowAI/brand/pull/11)). They replace these tokens
only after Kyle approves #11; until then the tokens here are the live ones.

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
