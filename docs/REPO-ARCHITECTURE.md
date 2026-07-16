# What belongs in a brand repository

A **brand repo** is the **semantic SSOT for identity and narrative** — not the website codebase, not the product monorepo.

## Core principle

| Lives in **brand** | Lives in **product / marketing site repo** |
|--------------------|--------------------------------------------|
| Who we are, why we exist | Page layout, components, CMS wiring |
| Approved story & messaging | Feature changelogs, release notes |
| Logo, color, type, usage rules | Pixel-perfect UI implementation |
| About **company** narrative | About **product** deep feature pages (may *pull* brand copy) |
| Legal naming, trademark stance | Contracts, privacy policy legal text (link out) |
| Voice samples & copy kit | A/B experiments, seasonal campaigns (derive from brand) |

**About us / About the company: yes — belongs here** as approved narrative.  
The website `about` *page* should **consume** this copy (or a short projection of it), not invent a second story.

**About me** (founder personal): belongs in **personal portfolio / personal brand**, not the company brand repo — unless the company *is* a personal brand (then label it clearly).

---

## Recommended layout (this fleet)

```
brand/
  README.md                 # map of the repo
  COMPANY.md                # facts table (legal, domain, status)
  docs/
    REPO-ARCHITECTURE.md    # this file (or link to fleet template)
    brand-brief.md          # strategy one-pager
    brand-manual/           # visual + full brand system
    copy/                   # verbal assets (SSOT for words)
      README.md             # index + how to use
      about.md              # About us / company story (site-ready)
      messaging.md          # elevator, pillars, one-liners, FAQ tone
      website.md            # hero, sections, CTAs, meta descriptions
      voice.md              # voice rules + long samples
    trademarks.md           # when applicable
    surfaces.md             # where brand ships
  logo/                     # marks, construction, recraft sidecars
  tokens/                   # machine-readable color/logo tokens
  guidelines/               # optional legacy / extended visual rules
```

---

## Copy layers (what “done” means for words)

| Layer | Purpose | Audience |
|-------|---------|----------|
| **Elevator (15–30s)** | Who + what + why care | Anyone |
| **One-liner / tagline** | Memory hook | Ads, nav, decks |
| **About us** | Origin, mission, substance | Website About, investors, talent |
| **Pillars** | 3–5 message houses | Marketing, sales, product marketing |
| **Website blocks** | Hero, problem, solution, CTA | Site implementation |
| **Voice** | How we sound + examples | Every writer |
| **Do not say** | Forbidden frames | Legal + brand safety |

Product feature lists stay **product-owned**; brand copy **frames** them, does not version every feature.

---

## What not to dump here

- Full Next.js / marketing site source  
- Pricing tables that change weekly (link product)  
- Screenshots of every release  
- Secrets, credentials  
- Unapproved AI spam drafts without `status: draft`  

---

## Governance

1. Brand repo is **authority** for story + visual identity.  
2. Site/app may project copy; if conflict, **brand wins** until brand is updated.  
3. Material public-claim changes (trademark ®, “first in HK”, metrics) require **evidence** in `COMPANY.md` or `trademarks.md`.  
