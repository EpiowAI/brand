# Where the logo ships

| Surface | Repo / path | Notes |
|---------|-------------|--------|
| Product source of truth | `EpiowAI/epiow` `apps/web/src/brand/` | geometry + colours; `bun run brand:generate` writes favicon.svg/ico, PWA icons (any + maskable), apple-touch icon, logo.svg; `brand:check` fails CI on drift |
| Marketing site | `EpiowAI/epiow` `apps/web` | header/footer lockup, OG/Twitter card, structured-data logo |
| Console | `EpiowAI/epiow` `apps/web` | login + lock screen lockup, OS console header, manifest (`name: Epiow`, theme `#25205B`) |
| Brand SSOT | **this repo** | decision log, manual, tokens, copies of shipping assets in `logo/current/` |
| Personal portfolio | `shtse8/portfolio-website` | company card only |
| GitHub org | github.com/EpiowAI | avatar (manual upload of `logo/current/icon-512.png`) |

Change the geometry in the product source first, regenerate, then copy the
outputs here and record the change in `docs/logo-decision.md`.
