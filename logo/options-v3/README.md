# Logo options v3 — enterprise-referenced redesign

## Why earlier sets felt weak

| Set | Issue |
|-----|--------|
| v1 A–E | Soft AI raster, dual metaphors, sticker energy |
| v2 F1–F6 | Flatter but still generic icon-pack / hamburger / seal |

## What big modern cos actually do

From Linear brand practice + Stripe/Notion/Slack/Vercel/Rippling/Feishu-class patterns:

1. **One silhouette** — black/white reversible  
2. **App icon** = mark in padded rounded square  
3. **Monochrome master**; color is a token  
4. **16px favicon test** is a kill gate  
5. Letter-as-architecture **or** pure abstract — not both fighting  
6. No 3D / glow / fake material on the master mark  
7. Wordmark carries the name; icon carries recognition  

## Vector ship candidates (prefer these)

Contact sheet: [`_sheet-vector.png`](./_sheet-vector.png)

| ID | Concept | School |
|----|---------|--------|
| **G1** | Optical capital E | Notion/Stripe monogram |
| **G2** | EO ligature fused | OpenAI continuous geometry |
| **G3** | E in white disc | Apple reduction |
| **G4** | Modular bars + node | Slack + Rippling |
| **G5** | Progressive bars | Rippling motion |
| **G6** | Portal arch | Vercel reduction |
| **G7** | Nested open arcs | Linear abstract |
| **G8** | Geometric lowercase e | Stripe friendliness |
| **G9** | Chevron E | Linear motion |
| **G10** | Block E | Brutalist SaaS |
| **G11** | Constructed rounded E | Equal-weight letter |
| **G12** | E + single arc | Epiow story (one accent) |
| **G13** | Nested outline E | Vectorized from AI1 |
| **G14** | Custom tapered E | Vectorized from AI7 |
| **G15** | EO stroke monogram | Vectorized from AI2 |

**First look:** G2 · G14 · G11 · G13 · G8 · G9

## AI refs (mood only)

Contact sheet: [`_sheet-ai.png`](./_sheet-ai.png)

Generated with OpenRouter:

- `google/gemini-3-pro-image` — AI1–AI5, AI8  
- `openai/gpt-5.4-image-2` — AI6, AI7  

| File | Direction |
|------|-----------|
| AI1 | Nested bold E |
| AI2 | EO line monogram |
| AI3 | Abstract OS mark |
| AI4 | Portal |
| AI5 | Modular bars |
| AI6 | Geometric e |
| AI7 | Custom premium E |
| AI8 | Workplace OS abstract |

**Do not ship raw AI PNG** as official logo without SVG redraw (G13–G15 already capture strongest AI directions).

## FAL

No `FAL_KEY` on this host at generation time; OpenRouter covered image models. Re-run with FAL later if you want Flux-family variants.

## How to choose

1. Open `_sheet-vector.png` (and optionally `_sheet-ai.png`)  
2. Squint / 16px test  
3. Record in `docs/logo-decision.md`  

```md
Chosen ID: G2
Rationale: ...
```
