# Where the brand ships

Every surface takes the logo, icons and tokens from this repository. The
table records what each surface does today (audited 2026-09-28) and the
issue that brings it in line. Change the brand here first, then the
surfaces.

| Surface | Repository | Today | Follow-up |
|---------|------------|-------|-----------|
| epiow.com (marketing, sign-in, lock screen, OS console, PWA, OG card) | `EpiowAI/epiow` `apps/web` | Matches this home: `/favicon.svg`, `/brand/*.svg`, `/logo.svg` are byte-identical to `logo/current/`; CSS tokens equal `tokens/brand.tokens.json`. But it keeps its own source (`apps/web/src/brand/epiow-brand.ts`, `variables.css`), its ICO is not pixel-snapped, and emails, the new-joiner layout and some widgets use off-brand text logos or colours | [EpiowAI/epiow#2021](https://github.com/EpiowAI/epiow/issues/2021) |
| Epiow Legacy (demo and HKSPC surface) | `EpiowAI/epiow-legacy` | Different marks: a node-graph favicon/app icon on `#0f172a`, a 4-square glyph on a `#667eea`→`#764ba2` gradient in the header, lowercase "epiow" text; manifest theme `#0f172a` | [EpiowAI/epiow-legacy#196](https://github.com/EpiowAI/epiow-legacy/issues/196) (after the 2026-09-29 10:00Z demo freeze) |
| Epiow chatbot | `EpiowAI/chatbot-mvp` | Speech-bubble icon on violet `#7c3aed`, Tailwind indigo `#6366F1` as primary, name "Epiow AI" | [EpiowAI/chatbot-mvp#72](https://github.com/EpiowAI/chatbot-mvp/issues/72) (after the demo freeze) |
| GitHub org avatar | github.com/EpiowAI | manual upload | upload `logo/icons/icon-512.png` |
| Personal portfolio | `shtse8/portfolio-website` | company card only | — |
