BARAMEEL RUN — UPDATE v5

Replace in repository root:
index.html
screen02.html
screen03.html
screen04.html
screen05.html
app.js
styles.css
sw.js

Keep the existing /assets folder and its runner artwork exactly as named.

Fixes in v5:
- Removed the duplicate trait overlay from Screen 03; the approved artwork already contains the correctly positioned color-coded bars and labels.
- Screen 02 now recolors only the printed trait-bar area with animated color fills; no duplicate labels/card overlay.
- Added audible BACK button sound.
- Added a visible BACK fallback on Screens 03 and 04 so it remains available even if a runner artwork variant has no printed BACK button.
- Screen 02 preloads all Screen 03 runner artworks to reduce first transition delay.
- Service-worker cache version bumped and HTML/JS/CSS use network-first behavior so stale screens do not remain stuck on one phone.
