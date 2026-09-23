BARAMEEL RUN — CLEAN BUILD / UPLOAD PACKAGE
================================================

FLOW
----
index.html       = SCREEN 01 (approved master artwork)
screen02.html    = SCREEN 02 runner selection
screen03.html    = SCREEN 03 runner confirmation
screen04.html    = SCREEN 04 player dashboard / Scan QR
screen05.html    = SCREEN 05 live camera QR scanner

ASSETS
------
The HTML expects these exact files inside ./assets/:

screen01.png

screen02-rookie.png
screen02-skater.png
screen02-brona.png
screen02-racer.png
screen02-chiller.png
screen02-dreamer.png

screen03-rookie.png
screen03-skater.png
screen03-brona.png
screen03-racer.png
screen03-chiller.png
screen03-dreamer.png

screen04-rookie.png
screen04-skater.png
screen04-brona.png
screen04-racer.png
screen04-chiller.png
screen04-dreamer.png

The 18 character-specific images are intentionally referenced by filename and are NOT recreated or modified by this package.

IMPORTANT
---------
- All character images are preloaded when the app starts, so switching runners does not wait for a new page/image download.
- The selected runner is stored in sessionStorage and carried from Screen 02 -> Screen 03 -> Screen 04.
- Screen 01 is the actual game start. There is no extra intro screen.
- Screen 05 is not a static phone mockup. It requests the device camera and places the live camera feed inside the red/cream scan frame.
- Camera requires HTTPS (GitHub Pages satisfies this) and browser permission.
- QR decoding uses the browser BarcodeDetector API when available. If a browser does not expose BarcodeDetector, the live camera still opens; a dedicated QR decoding library can be added later without changing the screen flow.
- UI sounds/effects are generated locally with Web Audio, so no sound files are required.
- No external fonts, libraries, CDNs, or network dependencies are used.

UPLOAD
------
Upload the contents of this folder into a new GitHub Pages folder, for example:

barameel-run-2/

Then place the 18 character images in that folder's assets/ directory using the exact names above.

The current package includes screen01.png so the approved master opening screen is preserved.
