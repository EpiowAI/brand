# Epiow Brand Manual

**Version:** 3.0 · **Status:** Working SSOT (logo decided 2026-11-17 — "Overlap")  
**Legal entity:** Epiow Limited · **Product:** epiow.com · **GitHub:** EpiowAI  

Machine tokens: [`tokens/brand.tokens.json`](../../tokens/brand.tokens.json)  
Construction drawing: [`logo/construction/epiow-mark-construction.svg`](../../logo/construction/epiow-mark-construction.svg)  
Master files, icons, usage sheet and provenance: [`logo/README.md`](../../logo/README.md)  
Source of truth: this repository (`logo/construction/epiow-logo.spec.json`, `tokens/brand.tokens.json`); every product surface consumes it

---

## 0. How to use this manual

This document is the **rulebook** for anyone shipping Epiow-facing design.  
If copy, color, or logo usage conflicts with this file, **this file wins** until revised in git.

| Layer | What it governs |
|-------|-----------------|
| Story & strategy | Why we exist; who we serve |
| Verbal | Name, tagline, voice |
| Logo | Geometry, clear space, min size, misuse |
| Color | Exact codes + roles |
| Type | Font stack |
| UI / imagery | Product surfaces |
| Evidence | What is measured vs provisional |

---

## 1. Brand story

### Origin

Hong Kong organizations still stitch leave, payroll, MPF, CRM, and ops across tools that were never designed for **local employment law**. Global HR suites bolt on “locale packs.” Spreadsheets and WhatsApp fill the gaps.

**Epiow** was founded to be the **organization’s operating system**: one login, a modular app catalog, and workflows that treat Hong Kong Employment Ordinance & MPF as **native**, not afterthoughts.

### Narrative arc

1. **Fragmentation** — every department owns a different tool; data doesn’t compound.  
2. **Platform** — a single workspace OS with isolated, catalog-backed apps.  
3. **Intelligence** — AI that understands the organization across apps (capability, not costume).  
4. **Trust** — enterprise seriousness for people who run real payroll and compliance.

### Mission

Give every organization a **clear, modular, grounded** digital OS — starting with Hong Kong.

### Vision

The default workplace operating system for organizations that need **local law + modern product craft**.

### Promise

*One place to run the organization — modular apps, local rules, serious infrastructure.*

### Personality

| We are | We are not |
|--------|------------|
| Clear, structured, calm | Hype AI theater |
| Modular and precise | Monolithic ERP nostalgia |
| Locally serious (HK) | Generic global template |

---

## 2. Strategy snapshot

| Item | Definition |
|------|------------|
| **Category** | B2B enterprise workspace / Organization OS |
| **Primary audience** | HK SME & mid-market HR, ops, founders |
| **Frame** | 釘釘 / 飛書 / Teams *class* — modular catalog — with HK-native depth |
| **Differentiation** | MPF / EO-native workflows + platform OS architecture |
| **Attributes** | Clear · Modular · Grounded |

---

## 3. Verbal identity

| Element | Spec |
|---------|------|
| **Legal name** | Epiow Limited |
| **Brand name** | Epiow |
| **Pronunciation aid** | *EP-ee-oh* (internal aid; do not force phonetic spelling in UI) |
| **Never** | “EPIOW” (only exception: a card statement descriptor) or lowercase “epiow” as display text (domain, handles and code identifiers excepted); “Epiow AI” as product name |
| **Tagline** | Your organization's AI-native workspace |
| **ZH product line** | 香港首個專為本地勞工法例設計的模組化商業應用平台 |

### Voice

- **Tone:** composed, competent, bilingual-ready  
- **Do:** short sentences, concrete product nouns (leave, payroll, catalog)  
- **Don’t:** crypto hype, “synergy,” or over-promising AGI  

### Messaging pillars

1. **One OS** — single workspace, modular apps  
2. **Local native** — HK labour & MPF  
3. **Built to operate** — not a demo dashboard  

---

## 4. Logo system — "Overlap"

### 4.1 The mark

A circle and a rounded square overlap. The circle is the people of the
organization; the square is the work; the lens where they overlap is the
shared workspace, and the only lime in the mark. No gradients.

| Property | Value |
|----------|--------|
| **Grid** | 64 × 64 units |
| **Circle** | Centre (27, 27), r = 15 |
| **Rounded square** | From (25, 25), side 27, corner radius 7.5 |
| **Lens** | The area shared by the circle and the square |
| **Glyph box** | 12–52 × 12–52 (62.5%) — inside the 80% maskable safe zone |
| **Small sizes** | Favicons use the larger `small` glyph (75% of the tile), on whole pixels at 16/32/48 px |
| **Tile** | Superellipse \|x\|⁵ + \|y\|⁵ = 1 spanning the full box — the same tile every Epiow app icon uses |
| **Colours** | Light grounds: circle `#0C3B2E` forest · square `#1FAD6B` green · lens `#D4FF5A` lime. Dark grounds and the tile: circle `#F1F6EF` paper. Tile `#0C3B2E` |

### 4.2 The wordmark

"Epiow" set in **Bricolage Grotesque Bold (700, opsz 48)** (SIL Open Font
License 1.1), tracking −30/1000, converted to outlines. Letters are forest on
light grounds and paper on dark grounds. Always capital E.

### 4.3 Lockup

Glyph + wordmark: wordmark cap height = 0.72 × the glyph; gap = 0.3 × the
glyph; the cap-height band is centred on the glyph. The lockup carries no tile.

### 4.4 Variants

| Variant | Use |
|---------|-----|
| **Lockup light / dark** (default) | Marketing header and footer, documents, OS console header |
| **Glyph on light / on dark** (no tile) | Wherever the mark stands alone inside a layout |
| **Tile** | Favicon, app icon, lock screen, social cards |
| **Maskable** (full-bleed forest square) | PWA `purpose: maskable`, apple-touch icon (the OS applies its own mask) |
| **One ink** (lens cut out) | Print, engraving, photos, colour grounds |

### 4.5 Clear space and minimum size

| Rule | Value |
|------|--------|
| Clear space | 0.25 × the glyph on every side |
| Minimum (digital) | 16 × 16 CSS px (tile; below 24 px use the favicon files); lockup 24 px tall |
| Print | lockup 6 mm tall |

### 4.6 Misuse (do not)

1. Add gradients, glows, bevels or drop shadows to the mark.
2. Recolour any of the three shapes or add a second lime element.
3. Put white text on lime (1.2:1 — fails) or lime text on a light ground (1.1:1 — fails).
4. Swap which shape is in front, separate the shapes, or outline them.
5. Stretch, rotate, or set the wordmark in live text or another typeface.
6. Write the name as "epiow" or "EPIOW" in display.
7. Re-draw the tile as a rounded rectangle — it is the superellipse.

---

## 5. Colour system

Three roles, one rule: **forest carries the brand, lime is the signal.**

| Role | Token (product) | Hex | Use |
|------|-----------------|-----|-----|
| **Primary** | `--primary` = forest-900 | `#0C3B2E` | App tile, primary buttons, headings, links |
| **Brand green** | green-500 | `#1FAD6B` | The square of the mark; illustration and large shapes (2.6:1 on paper: never body text) |
| **Signal** | `--signal` = lime-300 | `#D4FF5A` | Agent activity, the single key CTA per surface, the lens |
| **Signal ink** | `--signal-foreground` | `#0C3B2E` | Text on signal (10.9:1). Never white on lime |
| **Signal text** | `--signal-text` = green-700 | `#0E7A50` | Signal-coloured text on light grounds (5.1:1). Lime is never text on a light ground |
| **Accent (hover tint)** | `--accent` = green-100 | `#E3F4EA` | Outline/ghost hover, menu and select highlight, toggles — a quiet green tint, never lime |
| **Paper** | paper | `#F1F6EF` | The logo's light ground; brand surfaces |
| **Mist** | `--background` | `#F7FAF5` | Light app background |
| **Night** | dark `--background` | `#06140F` | Dark ground |

Dark mode has its own roles (primary green-300 `#8FE3B0`, signal lime-300,
background night). Every palette step and every light and dark role is in
[`tokens/brand.tokens.json`](../../tokens/brand.tokens.json). Every text pair
the product renders is asserted ≥ 4.5:1 by `app/styles/__tests__/contrast.test.ts`
in the product repo.

**App icons** use one family hue per product family (12 hues, each ≥ 4.5:1
under a white glyph) on the same superellipse tile, with the app's own Lucide
glyph — generated from one source for the launcher, dock, App Center and PWA.

---

## 6. Typography

| Role | Spec |
|------|------|
| Display / logo | **Bricolage Grotesque** (OFL) — wordmark outlined from Bricolage Grotesque Bold |
| Product UI + marketing text | Plus Jakarta Sans; CJK falls back to the platform's Hong Kong faces |
| Numerals / code | JetBrains Mono |

---

### 6.1 Shape and motion

| Token | Value |
|-------|-------|
| Radius | control 8px · card 12px · panel 16px · window 12px · app icon = superellipse |
| Motion | micro 90ms · control 160ms · entrance 240ms · hero ≤ 400ms · ease-out `cubic-bezier(0.22, 1, 0.36, 1)`; reduced-motion honoured at every runtime root |

---

## 7. Imagery & product UI

- Prefer real product UI, calm neutrals, forest and green accents.  
- Avoid stock “handshake in glass office” as brand hero.  
- Screenshots: light & dark modes; no fake data that implies wrong jurisdiction.

---

## 8. Brand elements checklist (full stack)

| Element | Status |
|---------|--------|
| Story / mission / vision | ✅ this manual |
| Strategy / audience | ✅ |
| Verbal identity | ✅ |
| Logo construction | ✅ 64-unit grid drawing |
| Clear space / min size | ✅ |
| Color tokens JSON | ✅ |
| Typography | ✅ tokens (`type`) |
| Voice & pillars | ✅ |
| Photography style | ✅ directional |
| Motion | ✅ §6.1 |
| Illustration system | ⬜ not primary |
| Iconography set | ⬜ product icons separate |
| Templates (deck, social) | ⬜ |
| Trademark | ✅ status and similarity check: [`docs/trademarks.md`](../trademarks.md) (unregistered; nothing filed) |

---

## 9. Governance

- Changes via PR/commit to this repo.  
- Logo geometry changes require product + brand owner approval.  
- Sister brands: see `COMPANY.md`.  
