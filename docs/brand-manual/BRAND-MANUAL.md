# Epiow Brand Manual

**Version:** 2.0 · **Status:** Working SSOT (logo decided 2026-09-23 — "Bracket and signal")  
**Legal entity:** Epiow Limited · **Product:** epiow.com · **GitHub:** EpiowAI  

Machine tokens: [`tokens/brand.tokens.json`](../../tokens/brand.tokens.json)  
Construction drawing: [`logo/construction/epiow-mark-construction.svg`](../../logo/construction/epiow-mark-construction.svg)  
Master SVGs: [`logo/current/mark.svg`](../../logo/current/mark.svg) · [`logo/current/lockup-light.svg`](../../logo/current/lockup-light.svg) · [`logo/current/lockup-dark.svg`](../../logo/current/lockup-dark.svg)  
Product source of truth: `EpiowAI/epiow` → `apps/web/src/brand/` (every product asset is generated from it)

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
| **Never** | EPIOW or lowercase “epiow” as display text (domain and handles excepted); “Epiow AI” as product name |
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

## 4. Logo system — "Bracket and signal"

### 4.1 The mark

An open bracket in paper on an indigo ink tile holds one ember dot. The bracket
is the capital E of Epiow and the frame of the organization's workspace; the dot
is the signal — the person or agent doing granted work. The dot is the only
ember in the mark. No gradients.

| Property | Value |
|----------|--------|
| **Grid** | 64 × 64 units, 4-unit steps (16px favicon = whole-pixel 2px strokes) |
| **Tile** | Superellipse \|x\|⁵ + \|y\|⁵ = 1 spanning the full box — the same tile every Epiow app icon uses |
| **Bracket** | 8-unit stroke expanded to a filled outline; outer radius 14, inner radius 6; arms at y 16–24 and 40–48; round terminals centred at x = 44 |
| **Bracket path** | `M44 16H30A14 14 0 0 0 16 30V34A14 14 0 0 0 30 48H44A4 4 0 0 0 44 40H30A6 6 0 0 1 24 34V30A6 6 0 0 1 30 24H44A4 4 0 0 0 44 16Z` |
| **Signal dot** | Circle, centre (36, 32), r = 6 |
| **Glyph box** | 16–48 × 16–48 (50%) — inside the 80% maskable safe circle |
| **Colours** | Tile `#25205B` ink · bracket `#FCFBFA` paper · dot `#F98C10` signal |

### 4.2 The wordmark

"Epiow" set in **Sora SemiBold (600)** (SIL Open Font License 1.1 — the
product's display face), tracking −12/1000, converted to outlines. The i's
tittle is redrawn as a true circle in signal ember. Letters are ink on light
grounds and paper on dark grounds. Always capital E.

### 4.3 Lockup

Mark + wordmark on one baseline system: wordmark cap height = 0.5 × tile size;
gap = 0.3 × tile size; the cap-height band is centred on the tile.

### 4.4 Variants

| Variant | Use |
|---------|-----|
| **Tile** (default) | Favicon, app icon, header, lock screen, social cards |
| **Maskable** (full-bleed ink square) | PWA `purpose: maskable`, apple-touch icon (the OS applies its own mask) |
| **Glyph** (bracket in current text colour + ember dot, no tile) | Monochrome contexts, dense UI |
| **Lockup light / dark** | Marketing header and footer, documents, OS console header |

### 4.5 Clear space and minimum size

| Rule | Value |
|------|--------|
| Clear space | 0.25 × tile size on every side |
| Minimum (digital) | 16 × 16 CSS px (mark); lockup with 24px tile |
| Print | 6 mm tile |

### 4.6 Misuse (do not)

1. Add gradients, glows, bevels or drop shadows to the mark.
2. Recolour the dot (it is always signal ember) or add a second ember element.
3. Put white text on ember anywhere in the brand system (2.4:1 — fails).
4. Close the bracket, add a middle bar, or swap the dot for a square.
5. Stretch, rotate, or set the wordmark in live text or another typeface.
6. Write the name as "epiow" or "EPIOW" in display.
7. Re-draw the tile as a rounded rectangle — it is the superellipse.

---

## 5. Colour system

Three roles, one rule: **ink carries the brand, ember is the signal.**

| Role | Token (product) | Hex | Use |
|------|-----------------|-----|-----|
| **Primary / ink** | `--primary` = `--indigo-700` (245 48% 24%) | `#25205B` | Logo tile, primary buttons, headings, links |
| **Signal** | `--signal` = `--ember-500` (32 95% 52%) | `#F98C10` | Agent activity, the single key CTA per surface, the logo dot |
| **Signal ink** | `--signal-foreground` (32 100% 8%) | `#291600` | Text on signal (7.3:1). Never white on ember |
| **Signal text** | `--signal-text` = `--ember-700` (22 90% 34%) | `#A54209` | Ember-coloured text on paper / ember-100 (≥ 5.7:1) |
| **Accent (hover tint)** | `--accent` (245 60% 95%) | `#ECEBFA` | Outline/ghost hover, menu and select highlight, toggles — a quiet indigo tint, never ember |
| **Paper** | `--paper` / `--background` | `#FCFBFA` | Light ground |
| **Night** | dark `--background` (245 20% 7%) | `#0F0E15` | Dark ground |

Scales: indigo 100/300/500/600/700/900, ember 100/500/600/700 — see
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
| Display / logo | **Sora** (OFL) — wordmark outlined from Sora SemiBold |
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

- Prefer real product UI, calm neutrals, indigo accents.  
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
| Typography | ✅ provisional |
| Voice & pillars | ✅ |
| Photography style | ✅ directional |
| Motion | ✅ §6.1 |
| Illustration system | ⬜ not primary |
| Iconography set | ⬜ product icons separate |
| Templates (deck, social) | ⬜ |
| Trademark register | ⬜ add when filed |

---

## 9. Governance

- Changes via PR/commit to this repo.  
- Logo geometry changes require product + brand owner approval.  
- Sister brands: see `COMPANY.md`.  
