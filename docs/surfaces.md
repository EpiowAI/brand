# Where the brand ships

This repository is the source of truth for Epiow’s logo, icons, and tokens.
Change the brand here first, then update the products that use it.

[Overlap](https://github.com/EpiowAI/brand/pull/19) replaced “Bracket and
signal” on 2026-11-17. Use `logo/current/`, `logo/icons/`, and
`tokens/brand.tokens.json` (v5.0.0) for new updates. The previous identity is
archived in `logo/archive/bracket-and-signal-2026-09/`.

Rollout snapshot (2026-11-17 UTC). A merged PR does not by itself establish
what is serving in production. Live claims below cover only the routes checked.

| Surface | Repository | Rollout status | Follow-up |
|---------|------------|----------------|-----------|
| [epiow.com](https://epiow.com) (marketing, sign-in, lock screen, OS console, PWA, OG card) | `EpiowAI/epiow` · `apps/web` | Overlap merged in [#2556](https://github.com/EpiowAI/epiow/pull/2556); live brand parity not confirmed in this snapshot. | [#2021](https://github.com/EpiowAI/epiow/issues/2021) tracks broader alignment, including email, the new-joiner layout, and widgets. |
| Epiow Legacy (demo and HKSPC surface) | `EpiowAI/epiow-legacy` | Pending. The live sign-in still uses the previous identity. | [Overlap rollout #260](https://github.com/EpiowAI/epiow-legacy/pull/260) |
| [Epiow chatbot](https://chatbot.epiow.com) | `EpiowAI/chatbot-mvp` | Overlap live on the public landing page at `f70cea7130cc03c3f726865f648b0352a5e60c93` ([#98](https://github.com/EpiowAI/chatbot-mvp/pull/98)). Both header lockups, SVG and ICO favicons, and Apple touch icon match the canonical files byte for byte. | [Landing-page copy #99](https://github.com/EpiowAI/chatbot-mvp/pull/99) merged separately; the landing page serves that revision. |
| [Epiow Minutes](https://minutes.epiow.com) | `EpiowAI/epiow-minutes` | Pending. The public site still references its previous mark at `/assets/mark.svg`. | Update the public theme, icons, and share image to Overlap. |
| [GitHub org avatar](https://github.com/EpiowAI) | — | Manual upload | Use `logo/icons/icon-512.png`. |
| Personal portfolio | `shtse8/portfolio-website` | Company card only | — |
