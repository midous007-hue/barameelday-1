BARAMEEL RUN — UPDATE v9 / DYNAMIC CHECKPOINT REWARD SCREEN

UPLOAD / REPLACE THESE ROOT FILES:
index.html
screen02.html
screen03.html
screen04.html
screen05.html
screen06.html
app.js
styles.css
sw.js
checkpoints.js   <-- NEW

KEEP YOUR EXISTING /assets FOLDER AND ALL RUNNER ARTWORK.

REPLACE / ADD THESE ASSETS:
assets/screen06-base.png   <-- NEW approved Screen 06 artwork
assets/checkpoint-ego.jpg  <-- current Salon EGO test image

The screen is now one reusable dynamic Screen 06. Do NOT create one HTML page per partner.

HOW TO ADD A PARTNER LATER:
1) Put the partner image in /assets, e.g. assets/checkpoint-02.jpg
2) Open checkpoints.js.
3) Add one object under CHECKPOINTS, for example:
   cafe02: {
     id:'cafe02',
     name:'PARTNER NAME',
     tagline:'TAGLINE',
     image:'./assets/checkpoint-02.jpg',
     points:'100,000',
     socials:{
       instagram:'https://...',
       facebook:'https://...',
       tiktok:'https://...',
       website:'https://...'
     }
   }
4) Print a QR that points to:
   https://midous007-hue.github.io/barameel2/screen06.html?checkpoint=cafe02

QR FLOW:
SCREEN 04 -> SCREEN 05 QR CAMERA -> QR DETECTED -> strong arcade coin/jackpot reward sound -> SCREEN 06.
The raw QR value is passed as ?qr=... and Screen 06 extracts the checkpoint ID from it.

For the current Salon EGO test, use:
https://midous007-hue.github.io/barameel2/screen06.html?checkpoint=ego

SOCIALS:
Each partner can have Instagram, Facebook, TikTok and/or Website. Empty links are disabled automatically.

IMPORTANT:
- Screen 06 has no extra generic logo layer or old v7 placeholder.
- The partner photo and name are dynamic content inside the approved artwork.
- Screen 02/03/04 artwork and trait bars are not modified.
- Screen 06 does not play reward sound when opened directly; the reward sound is triggered after successful QR detection.
- Service worker cache is v9 and HTML/JS/CSS are network-first to reduce stale-phone issues.
