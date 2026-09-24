BARAMEEL RUN — UPDATE v11

UPLOAD / REPLACE IN GITHUB ROOT
--------------------------------
Replace these root files:
  index.html
  screen02.html
  screen03.html
  screen04.html
  screen05.html
  screen06.html
  app.js
  styles.css
  sw.js
  checkpoints.js

ASSETS
------
Keep the existing assets folder and all existing runner artwork.
Replace/add:
  assets/screen05-brona.png

The new Screen 05 artwork is the approved Brona QR-scan composition supplied for this update.
The visible BACK arrow is already part of the artwork. HTML provides only an invisible touch hotspot over it.
The camera UI remains functional and is layered only inside the printed scan panel.

SCREEN 05
---------
- New Brona artwork.
- Rear camera, not mirrored.
- QR-only detection when BarcodeDetector supports qr_code.
- No fake QR is used for detection.
- Transparent hotspot over the artwork's BACK button.
- Transparent hotspot over the artwork's OPEN CAMERA & SCAN QR button.
- Existing scan/error/back sounds retained.

CHECKPOINT REWARD AUDIO
-----------------------
The checkpoint success sound was upgraded to a much stronger original arcade-style JACKPOT:
- longer coin cascade
- higher/larger pitch climb
- bright victory chord
- stronger compressed output
- deliberately louder than navigation sounds
- navigation to Screen 06 is delayed so the reward sound has time to play

SCREEN 06
---------
For EGO specifically, the approved Screen 06 artwork already contains the EGO photo, name and tagline.
This update prevents a second HTML photo/name layer from being placed over that artwork.
The reusable photo/name slots remain available for future checkpoints.

MOBILE / CACHE
--------------
Service-worker cache is now v11.
Close the old GitHub Pages tab and reopen the page after upload so the new cache can activate.
