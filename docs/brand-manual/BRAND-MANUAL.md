# Epiow Brand Manual

**Version:** 1.0 · **Status:** Working SSOT (logo selection parked — current E-Orbit ships)  
**Legal entity:** Epiow Limited · **Product:** epiow.com · **GitHub:** EpiowAI  

Machine tokens: [`tokens/brand.tokens.json`](../../tokens/brand.tokens.json)  
Construction drawing: [`logo/construction/epiow-construction.svg`](../../logo/construction/epiow-construction.svg)  
Master SVG: [`logo/current/logo.svg`](../../logo/current/logo.svg)

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
| **Never** | EPIOW as default display; “Epiow AI” as product name |
| **Tagline** | Your Organization's Operating System |
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

## 4. Logo system

### 4.1 Master artboard

| Property | Value |
|----------|--------|
| **File** | `logo/current/logo.svg` |
| **viewBox** | `0 0 128 128` |
| **Units** | SVG user units (px at 1×) |
| **Background** | Rounded rect full bleed |
| **Corner radius** | `rx = 30` (= **23.4375%** of side) |
| **Mark color** | `#FFFFFF` on gradient field |

### 4.2 Field gradient (exact)

| Stop | Offset | Hex |
|------|--------|-----|
| Start | 0% | `#4338CA` |
| Mid | 45% | `#5B5BD6` |
| End | 100% | `#7C3AED` |

**Gradient vector:** `(x1,y1)=(12,10)` → `(x2,y2)=(116,118)` · `gradientUnits="userSpaceOnUse"`

### 4.3 Letter E geometry (exact)

| Element | x | y | w | h | rx |
|---------|---|---|---|---|-----|
| Stem | 30 | 34 | 10 | 60 | 3 |
| Top bar | 30 | 34 | 36 | 10 | 3 |
| Middle bar | 30 | 59 | **26** | 10 | 3 |
| Bottom bar | 30 | 84 | 36 | 10 | 3 |

**Notes**

- Middle bar is **shorter** (optical E) — do not equalize to 36.  
- All bar thickness **10**; stem width **10**.  
- Corner round on E pieces: **rx=3**.

### 4.4 Orbit arcs (exact paths)

**Outer**

- Path: `M76 36c18 0 32 14 32 28s-14 28-32 28`  
- `stroke="#FFFFFF"` · `stroke-width="9"` · `stroke-linecap="round"` · fill none  

**Inner**

- Path: `M76 46c12 0 22 9 22 18s-10 18-22 18`  
- `stroke-width="7"` · same cap/color  

Arcs open toward the E (organization continuity / OS aperture).

### 4.5 Clear space

| Rule | Value |
|------|--------|
| **Minimum clear space** | **16** master units on every side (= 1/8 of 128) |
| **Scaled** | Always `0.125 × rendered side length` |

No type, photos, or UI chrome inside the clear-space box.

### 4.6 Minimum sizes

| Context | Minimum |
|---------|---------|
| Digital UI | **24×24** CSS px |
| Favicon / PWA | **16×16** (use `favicon.svg` / generated icons) |
| Print | **8 mm** side |

### 4.7 Approved variants

| Variant | Use |
|---------|-----|
| Full color app icon (gradient) | Default product, marketing |
| Mono white mark on dark | Dark UI chrome when gradient field omitted |
| Mono ink on light | Documents; only if full icon unsuitable |

### 4.8 Misuse (do not)

1. Change gradient stops or invent new purple.  
2. Stretch non-uniformly.  
3. Recreate E with four equal bars.  
4. Drop arcs or add third rings.  
5. Place on busy photography without scrim.  
6. Rotate, bevel, or add drop shadows to the master.  
7. Replace with four-square app-grid placeholder.  

---

## 5. Color system

| Token | Hex | RGB | Role |
|-------|-----|-----|------|
| `primary.start` | `#4338CA` | 67, 56, 202 | Gradient start |
| `primary.mid` | `#5B5BD6` | 91, 91, 214 | Gradient mid |
| `primary.end` | `#7C3AED` | 124, 58, 237 | Gradient end |
| `on.primary` | `#FFFFFF` | 255, 255, 255 | Logo mark |
| `ink` | `#0B1020` | 11, 16, 32 | Text on light |
| `surface` | `#F8FAFC` | 248, 250, 252 | Light bg |

**Print (approximate CMYK — always proof):**

| Hex | CMYK (approx) |
|-----|----------------|
| `#4338CA` | C75 M80 Y0 K0 |
| `#7C3AED` | C60 M75 Y0 K0 |

---

## 6. Typography

| Role | Spec |
|------|------|
| Product UI | System / product stack (match epiow.com) |
| Marketing EN | Clean grotesque (Inter or product equivalent) |
| Marketing ZH | System CJK — match site |
| Code | JetBrains Mono / ui-monospace |

**Logo type:** the mark is **graphic**, not live text. Do not typeset “Epiow” inside the icon.

Wordmark exploration (parked) lives under `logo/options-w3/` — **not** shipping.

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
| Logo construction | ✅ measured SVG |
| Clear space / min size | ✅ |
| Color tokens JSON | ✅ |
| Typography | ✅ provisional |
| Voice & pillars | ✅ |
| Photography style | ✅ directional |
| Motion | ⬜ define when motion system ships |
| Illustration system | ⬜ not primary |
| Iconography set | ⬜ product icons separate |
| Templates (deck, social) | ⬜ |
| Trademark register | ⬜ add when filed |

---

## 9. Governance

- Changes via PR/commit to this repo.  
- Logo geometry changes require product + brand owner approval.  
- Sister brands: see `COMPANY.md`.  
