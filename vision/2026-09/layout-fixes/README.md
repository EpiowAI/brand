# Workspace OS layout fixes (2026-09)

These are before and after screenshots from the live-site layout audit of the Workspace OS on epiow.com. The fixes are structural. The visual restyle belongs to a separate lane.

- **Before:** 2026-09-27, before the fixes.
- **After:** 2026-09-28 01:50 UTC, after EpiowAI/epiow#1995 and #1996 went live.

| # | Surface | Defect (before) | Fix |
|---|---|---|---|
| 01 | Demo presenter menu, 1440 | The menu fell into the status bar's flow and pushed the whole bar to the middle of the screen | epiow#1995: glass card `position: relative` no longer overrides `absolute` |
| 02 | Demo presenter menu, 390 | Same fault on a phone, with the bar shoved off the left edge | epiow#1995 |
| 03 | User menu, 1440 | See-through menu: desktop icons drawn over its text | epiow#1995: the minifier had dropped `backdrop-filter`, and the status bar was a backdrop root |
| 04 | Guided tour card, 1440 | Card text mixed with the widget under it | epiow#1995 (blur restored) |
| 05 | Notifications, 390 | Panel see-through over the desktop | epiow#1995 |
| 06 | Status bar, 1280 | Org name ran under the demo badge; Exit and Search overlapped | epiow#1995: actions column keeps its content width |
| 07 | Desktop, 768 | Widgets silently dropped (one card left) | epiow#1995: items kept until hidden widgets close up |
| 08 | Desktop, 360 | App icons squashed and labels cut | epiow#1996 (tiles), epiow#2020 (icons after compaction), after shot follows |
| 09 | Settings filter chip, 1440 | The × wrapped onto a second line; 4 px strip between the status bar and the window | epiow#1996 (chip), epiow#1995 (44 px status bar) |
| 10 | Status bar, 1024 | Exit and Search buttons drawn over each other | epiow#1995 |

App windows that could not scroll (People showed 8 of 47 rows) are fixed in epiow#2007. The React #418 hydration error on every OS load is fixed in epiow#1995.
