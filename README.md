# Epiow Brand

**Company brand SSOT** for [Epiow](https://epiow.com) — logo candidates, current mark, and company materials.

> Not the product monorepo. Product code lives in [`EpiowAI/epiow`](https://github.com/EpiowAI/epiow).

## Quick links

| | |
|--|--|
| **Company facts** | [COMPANY.md](./COMPANY.md) |
| **Logo (decided)** | [logo/current/](./logo/current/) · [logo/README.md](./logo/README.md) |
| **Decision log** | [docs/logo-decision.md](./docs/logo-decision.md) |
| **Where it ships** | [docs/surfaces.md](./docs/surfaces.md) |

## Logo — decided 2026-09-23: "Bracket and signal"

![Epiow lockup](./logo/current/lockup-light.svg)

- Shipping assets: [`logo/current/`](./logo/current/) (mark, favicon, light/dark lockups, 512/1024 icons, maskable icon)
- Construction: [`logo/construction/epiow-mark-construction.svg`](./logo/construction/epiow-mark-construction.svg)
- Decision and rationale: [`docs/logo-decision.md`](./docs/logo-decision.md)
- Product source of truth: `EpiowAI/epiow` → `apps/web/src/brand/` — every product surface (favicon, PWA, OG, header, lock screen) is generated from it

The explorations below are archive.

## Logo options at a glance (v1 archive)

Open these files in the repo (or download the ZIP):

| ID | Preview file | One-liner |
|----|--------------|-----------|
| **0** (current) | [`logo/options/0-current-e-orbit.png`](./logo/options/0-current-e-orbit.png) | E + dual arcs — live today |
| **A** | [`logo/options/A-portal-E.png`](./logo/options/A-portal-E.png) | E+O portal monogram |
| **B** | [`logo/options/B-gateway-e.png`](./logo/options/B-gateway-e.png) | Gateway “e” linework |
| **C** | [`logo/options/C-bars-node.png`](./logo/options/C-bars-node.png) | Module bars + core node |
| **D** | [`logo/options/D-hex-E.png`](./logo/options/D-hex-E.png) | Hex system + E |
| **E** | [`logo/options/E-orbit-dot.png`](./logo/options/E-orbit-dot.png) | Orbit / organization core |

### How to choose

1. Clone or browse this repo on **your** machine  
2. Open `logo/options/` and compare  
3. Comment on an issue, or edit `docs/logo-decision.md` with **A/B/C/D/E/0**  
4. We promote the winner → `logo/current/` → epiow.com + portfolio

```bash
git clone https://github.com/EpiowAI/brand.git
open brand/logo/options   # macOS
# or: xdg-open brand/logo/options
```

## Layout

```
brand/
  COMPANY.md           # company narrative SSOT
  logo/
    options/           # candidates for selection
    current/           # shipping assets (Bracket and signal, 2026-09-23)
    archive/           # retired marks (E-Orbit)
    README.md
  docs/
    logo-decision.md
    surfaces.md
```

## Product

- App / platform: https://github.com/EpiowAI/epiow  
- Live: https://epiow.com  

## Brand manual

[Brand Manual](./docs/brand-manual/BRAND-MANUAL.md) · [Branding elements map](./docs/branding-elements.md) · [Construction](./logo/construction/)


## Copy kit (verbal SSOT)

Brand story, About us, website blocks, and voice samples:

- [`docs/copy/`](./docs/copy/)
- Architecture: [`docs/REPO-ARCHITECTURE.md`](./docs/REPO-ARCHITECTURE.md) (what belongs in this repo)
