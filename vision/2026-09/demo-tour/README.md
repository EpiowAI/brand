# Epiow demo: presentation mode and guided tour (2026-09-28)

Screenshots of every guided-tour step on the live demo at https://epiow.com, one set per sector, at 1440×900 (desktop) and 390×844 (phone). Captured 2026-09-28 01:00–01:15 UTC after EpiowAI/epiow#1984 (presentation mode and tour) and #1991 (post-deploy fixes).

Open a sector with `https://epiow.com/demo?sector=business|school|ngo|government|family`. Add `&tour=managed` for the tender and investor path. The presenter menu in the status bar restarts the tour, switches sector, or resets the demo.

## Check results

| Sector | Width | Steps | Card over its target | LCP (ms) |
| --- | --- | --- | --- | --- |
| Business | 1440 | 8 | none | 220 |
| Business | 390 | 7 | none | 180 |
| School | 1440 | 8 | none | 252 |
| School | 390 | 7 | none | 108 |
| NGO | 1440 | 8 | none | 304 |
| NGO | 390 | 7 | none | 124 |
| Government | 1440 | 8 | none | 324 |
| Government | 390 | 7 | none | 1320 |
| Managed tour | 1440 | 9 | none | 112 |
| Managed tour | 390 | 8 | none | 132 |
| Family | 1440 | 6 | none | 112 |
| Family | 390 | 6 | none | 108 |

- Every step's card sat beside its target, inside the screen, with keyboard focus in the card. There was no horizontal scroll at either width.
- At 390 the workforce sectors skip the live-widgets step. Their widgets sit below the first screen, and a step whose target is not on screen is left out.
- The family tour has no approvals or app step, because the product cannot show a household's data in an app yet.
- Known at capture time: at 1440 the workspace name in the status bar runs under the demo badge. EpiowAI/epiow#2016 fixes this, and the 1440 set will be retaken after it deploys.
- LCP is the largest contentful paint of the workspace page once the visitor pass exists (headless Chromium, no throttling).

## Business (Harbourline Group), 1440

**1. desktop**

![business 1440 step 1 desktop](business-1440-01-desktop.webp)

**2. widgets**

![business 1440 step 2 widgets](business-1440-02-widgets.webp)

**3. launcher**

![business 1440 step 3 launcher](business-1440-03-launcher.webp)

**4. app**

![business 1440 step 4 app](business-1440-04-app.webp)

**5. approvals**

![business 1440 step 5 approvals](business-1440-05-approvals.webp)

**6. settings**

![business 1440 step 6 settings](business-1440-06-settings.webp)

**7. wallpaper**

![business 1440 step 7 wallpaper](business-1440-07-wallpaper.webp)

**8. finish**

![business 1440 step 8 finish](business-1440-08-finish.webp)

## Business (Harbourline Group), 390

**1. desktop**

![business 390 step 1 desktop](business-390-01-desktop.webp)

**2. launcher**

![business 390 step 2 launcher](business-390-02-launcher.webp)

**3. app**

![business 390 step 3 app](business-390-03-app.webp)

**4. approvals**

![business 390 step 4 approvals](business-390-04-approvals.webp)

**5. settings**

![business 390 step 5 settings](business-390-05-settings.webp)

**6. wallpaper**

![business 390 step 6 wallpaper](business-390-06-wallpaper.webp)

**7. finish**

![business 390 step 7 finish](business-390-07-finish.webp)

## School (Harbourview College), 1440

**1. desktop**

![school 1440 step 1 desktop](school-1440-01-desktop.webp)

**2. widgets**

![school 1440 step 2 widgets](school-1440-02-widgets.webp)

**3. launcher**

![school 1440 step 3 launcher](school-1440-03-launcher.webp)

**4. app**

![school 1440 step 4 app](school-1440-04-app.webp)

**5. approvals**

![school 1440 step 5 approvals](school-1440-05-approvals.webp)

**6. settings**

![school 1440 step 6 settings](school-1440-06-settings.webp)

**7. wallpaper**

![school 1440 step 7 wallpaper](school-1440-07-wallpaper.webp)

**8. finish**

![school 1440 step 8 finish](school-1440-08-finish.webp)

## School (Harbourview College), 390

**1. desktop**

![school 390 step 1 desktop](school-390-01-desktop.webp)

**2. launcher**

![school 390 step 2 launcher](school-390-02-launcher.webp)

**3. app**

![school 390 step 3 app](school-390-03-app.webp)

**4. approvals**

![school 390 step 4 approvals](school-390-04-approvals.webp)

**5. settings**

![school 390 step 5 settings](school-390-05-settings.webp)

**6. wallpaper**

![school 390 step 6 wallpaper](school-390-06-wallpaper.webp)

**7. finish**

![school 390 step 7 finish](school-390-07-finish.webp)

## NGO (Walk Together Care Association), 1440

**1. desktop**

![ngo 1440 step 1 desktop](ngo-1440-01-desktop.webp)

**2. widgets**

![ngo 1440 step 2 widgets](ngo-1440-02-widgets.webp)

**3. launcher**

![ngo 1440 step 3 launcher](ngo-1440-03-launcher.webp)

**4. app**

![ngo 1440 step 4 app](ngo-1440-04-app.webp)

**5. approvals**

![ngo 1440 step 5 approvals](ngo-1440-05-approvals.webp)

**6. settings**

![ngo 1440 step 6 settings](ngo-1440-06-settings.webp)

**7. wallpaper**

![ngo 1440 step 7 wallpaper](ngo-1440-07-wallpaper.webp)

**8. finish**

![ngo 1440 step 8 finish](ngo-1440-08-finish.webp)

## NGO (Walk Together Care Association), 390

**1. desktop**

![ngo 390 step 1 desktop](ngo-390-01-desktop.webp)

**2. launcher**

![ngo 390 step 2 launcher](ngo-390-02-launcher.webp)

**3. app**

![ngo 390 step 3 app](ngo-390-03-app.webp)

**4. approvals**

![ngo 390 step 4 approvals](ngo-390-04-approvals.webp)

**5. settings**

![ngo 390 step 5 settings](ngo-390-05-settings.webp)

**6. wallpaper**

![ngo 390 step 6 wallpaper](ngo-390-06-wallpaper.webp)

**7. finish**

![ngo 390 step 7 finish](ngo-390-07-finish.webp)

## Government (Harbourfront District Office), 1440

**1. desktop**

![government 1440 step 1 desktop](government-1440-01-desktop.webp)

**2. widgets**

![government 1440 step 2 widgets](government-1440-02-widgets.webp)

**3. launcher**

![government 1440 step 3 launcher](government-1440-03-launcher.webp)

**4. app**

![government 1440 step 4 app](government-1440-04-app.webp)

**5. approvals**

![government 1440 step 5 approvals](government-1440-05-approvals.webp)

**6. settings**

![government 1440 step 6 settings](government-1440-06-settings.webp)

**7. wallpaper**

![government 1440 step 7 wallpaper](government-1440-07-wallpaper.webp)

**8. finish**

![government 1440 step 8 finish](government-1440-08-finish.webp)

## Government (Harbourfront District Office), 390

**1. desktop**

![government 390 step 1 desktop](government-390-01-desktop.webp)

**2. launcher**

![government 390 step 2 launcher](government-390-02-launcher.webp)

**3. app**

![government 390 step 3 app](government-390-03-app.webp)

**4. approvals**

![government 390 step 4 approvals](government-390-04-approvals.webp)

**5. settings**

![government 390 step 5 settings](government-390-05-settings.webp)

**6. wallpaper**

![government 390 step 6 wallpaper](government-390-06-wallpaper.webp)

**7. finish**

![government 390 step 7 finish](government-390-07-finish.webp)

## Managed workspace tour (`?tour=managed`, government), 1440

**1. managed**

![government-managed 1440 step 1 managed](government-managed-1440-01-managed.webp)

**2. desktop**

![government-managed 1440 step 2 desktop](government-managed-1440-02-desktop.webp)

**3. widgets**

![government-managed 1440 step 3 widgets](government-managed-1440-03-widgets.webp)

**4. launcher**

![government-managed 1440 step 4 launcher](government-managed-1440-04-launcher.webp)

**5. app**

![government-managed 1440 step 5 app](government-managed-1440-05-app.webp)

**6. approvals**

![government-managed 1440 step 6 approvals](government-managed-1440-06-approvals.webp)

**7. settings**

![government-managed 1440 step 7 settings](government-managed-1440-07-settings.webp)

**8. wallpaper**

![government-managed 1440 step 8 wallpaper](government-managed-1440-08-wallpaper.webp)

**9. finish**

![government-managed 1440 step 9 finish](government-managed-1440-09-finish.webp)

## Managed workspace tour (`?tour=managed`, government), 390

**1. managed**

![government-managed 390 step 1 managed](government-managed-390-01-managed.webp)

**2. desktop**

![government-managed 390 step 2 desktop](government-managed-390-02-desktop.webp)

**3. launcher**

![government-managed 390 step 3 launcher](government-managed-390-03-launcher.webp)

**4. app**

![government-managed 390 step 4 app](government-managed-390-04-app.webp)

**5. approvals**

![government-managed 390 step 5 approvals](government-managed-390-05-approvals.webp)

**6. settings**

![government-managed 390 step 6 settings](government-managed-390-06-settings.webp)

**7. wallpaper**

![government-managed 390 step 7 wallpaper](government-managed-390-07-wallpaper.webp)

**8. finish**

![government-managed 390 step 8 finish](government-managed-390-08-finish.webp)

## Family (the Chan family), 1440

**1. desktop**

![family 1440 step 1 desktop](family-1440-01-desktop.webp)

**2. widgets**

![family 1440 step 2 widgets](family-1440-02-widgets.webp)

**3. launcher**

![family 1440 step 3 launcher](family-1440-03-launcher.webp)

**4. settings**

![family 1440 step 4 settings](family-1440-04-settings.webp)

**5. wallpaper**

![family 1440 step 5 wallpaper](family-1440-05-wallpaper.webp)

**6. finish**

![family 1440 step 6 finish](family-1440-06-finish.webp)

## Family (the Chan family), 390

**1. desktop**

![family 390 step 1 desktop](family-390-01-desktop.webp)

**2. widgets**

![family 390 step 2 widgets](family-390-02-widgets.webp)

**3. launcher**

![family 390 step 3 launcher](family-390-03-launcher.webp)

**4. settings**

![family 390 step 4 settings](family-390-04-settings.webp)

**5. wallpaper**

![family 390 step 5 wallpaper](family-390-05-wallpaper.webp)

**6. finish**

![family 390 step 6 finish](family-390-06-finish.webp)
