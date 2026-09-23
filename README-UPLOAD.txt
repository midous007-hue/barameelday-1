BARAMEEL RUN — UPDATE v4

Replace these files in the repository root:
index.html
screen02.html
screen03.html
screen04.html
screen05.html
app.js
styles.css
sw.js

Keep ALL existing runner PNGs inside /assets with their exact filenames.
Add/keep:
assets/screen01.png
assets/screen05-bg.png

Important fixes in v4:
- Hotspot buttons are fully transparent; no white browser rectangles.
- Current artwork waits for its image to finish loading, then fades in cleanly.
- The next screen's main artwork is warmed in the background to reduce transition waits.
- Runtime caching is enabled for repeat visits.
- Arcade-style louder square-wave character sounds are distinct per runner.
- Screen 03 traits remain color-coded and animate on entry.
- Screen 05 requests the rear camera and QR-only BarcodeDetector format when supported; it does not request generic barcode formats.
- Rear-camera preview is not mirrored.

GitHub Pages should remain on main / (root).
