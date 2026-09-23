BARAMEEL RUN — UPDATE v7 / CHECKPOINT REWARD SCREEN

UPLOAD / REPLACE ONLY THESE ROOT FILES:
index.html
screen02.html
screen03.html
screen04.html
screen05.html
screen06.html   <-- NEW
app.js
styles.css
sw.js

KEEP YOUR EXISTING /assets FOLDER AND ALL RUNNER ARTWORK.

NEW ASSETS INCLUDED:
assets/screen06-base.png       checkpoint artwork with the green placeholder removed

IMPORTANT FOR THE PARTNER LOGO:
1) Later, take the partner/shop logo image supplied by the user.
2) Rename it EXACTLY:
   checkpoint-logo.png
3) Upload it into:
   assets/checkpoint-logo.png

No HTML change is needed for a normal logo replacement.

FLOW:
SCREEN 04 -> SCREEN 05 QR CAMERA -> QR DETECTED -> original arcade reward jingle -> SCREEN 06 CHECKPOINT FOUND.

The QR raw value is passed as ?qr=... for future routing, but Screen 06 currently uses the single partner logo asset.

Screen 06 does NOT play a sound when opened directly. The reward sound is triggered by the successful QR scan in Screen 05.

v7 also bumps the service-worker cache and keeps HTML/JS/CSS network-first so old cached screens are less likely to remain on a phone.
