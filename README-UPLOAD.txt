BARAMEEL RUN — UPDATE v3

WHAT THIS UPDATE FIXES
1) Responsive full-screen artwork: keeps the complete portrait artwork visible on different phone aspect ratios instead of cropping the sides.
2) Louder character-specific selection sounds: each runner has a distinct sound sequence. Sounds start after a tap, so mobile browser autoplay rules are respected.
3) Runner traits are rebuilt as animated colored bars on Screen 03.
   - SPEED = orange/red
   - JUMP = yellow
   - COIN BOOST = cyan
   - SPECIAL/ENERGY = green
   Runner values are different for each character.
4) Screen 05 is now a real camera-scanning screen. It uses the supplied retro Alexandria checkpoint artwork as the visual background, but the QR area is replaced by the live device camera. No fake/static QR is used.
5) QR auto-detection uses the browser BarcodeDetector API when available. Camera access requires HTTPS (GitHub Pages) and user permission.

GITHUB UPLOAD
A) Replace these files in the repository ROOT:
   index.html
   screen02.html
   screen03.html
   screen04.html
   screen05.html
   app.js
   styles.css
   README-UPLOAD.txt

B) Inside the repository ROOT, open the folder named assets.
   Make sure ALL image assets are INSIDE assets (not in the repository root):
   screen01.png
   screen02-brona.png
   screen02-chiller.png
   screen02-dreamer.png
   screen02-racer.png
   screen02-rookie.png
   screen02-skater.png
   screen03-brona.png
   screen03-chiller.png
   screen03-dreamer.png
   screen03-racer.png
   screen03-rookie.png
   screen03-skater.png
   screen04-brona.png
   screen04-chiller.png
   screen04-dreamer.png
   screen04-racer.png
   screen04-rookie.png
   screen04-skater.png
   screen05-bg.png   <-- NEW file included in this update

C) Do NOT rename the files. Names are case-sensitive.

D) After upload/commit, wait for GitHub Pages to redeploy, then open the normal game URL.

IMPORTANT
Do not delete the existing character images. If they are currently at the repository ROOT, move/upload them into assets so the final paths are exactly ./assets/<filename>.
