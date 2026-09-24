BARAMEEL RUN — UPDATE v15

ارفع محتويات هذا المجلد إلى ROOT في GitHub بنفس الأسماء.

استبدل ملفات ROOT:
index.html
screen02.html
screen03.html
screen04.html
screen05.html
screen06.html
screen07.html
app.js
checkpoints.js
styles.css
sw.js

وفي assets:
- استبدل screen05-brona.png
- استبدل screen06-base.png (استخدم الصورة المرفقة الجديدة فقط)
- أضف screen07.png (شاشة GO TO BARAMEEL الجديدة)
- احتفظ checkpoint-ego-qr.png (الـ QR المستخدم لنقطة EGO)
- احتفظ checkpoint-ego.jpg كأصل المكان المرجعي
- لا ترفع صور الشخصيات القديمة مرة أخرى إذا كانت موجودة بالفعل.

ما تم إصلاحه في v14:
1) QR الحقيقي:
   checkpoint-ego-qr.png يفك إلى رابط اللعبة مع checkpoint=ego، و index.html أصبح يحوّل هذا الرابط مباشرة إلى شاشة Checkpoint Found.
   لذلك مسح الـ QR بكاميرا الهاتف العادية يفتح شاشة الشيك بوينت، وليس الصفحة الرئيسية فقط.

2) شاشة Scan:
   - منطقة الضغط OPEN CAMERA & SCAN QR أصبحت فوق الزر المطبوع نفسه بدقة.
   - الكاميرا الخلفية فقط.
   - الفيديو غير معكوس.
   - إطار المعاينة داخل منطقة QR المطبوعة وبإطار كامل واضح، مع زوايا كاملة.
   - الكشف QR فقط عند توفر BarcodeDetector.
   - لا يوجد Barcode/scan عام.

3) توقيت الجائزة:
   - صوت Jackpot لا يعمل أثناء شاشة المسح.
   - يظهر مع شاشة النقاط بعد الوصول إلى Checkpoint Found.
   - صوت أصلي 8-bit/arcade طويل نسبيًا (~3.2 ثوانٍ)، تصاعدي، أعلى وأقوى من أصوات التنقل، مع final jackpot chord.

4) شاشة Checkpoint Found:
   - صورة EGO والنص والنقاط وNICE ONE كلها داخل artwork واحد؛ لا توجد طبقات photo/name فوق الصورة.
   - رفع دقة screen05-brona وscreen06-base إلى 2× مع إعادة أخذ عينات عالية الجودة وشحذ خفيف للحفاظ على التفاصيل عند العرض على الهاتف.
   - مناطق الضغط على Instagram / Facebook / TikTok / Location مضبوطة فوق الأيقونات نفسها.
   - زر Back فوق زر الرجوع المطبوع بالضبط.
   - زر NICE ONE / Continue فوق الزر المطبوع بالضبط.

5) روابط EGO:
   - Facebook: صفحة EGO Salon الموجودة بالمصدر.
   - Instagram/TikTok: روابط بحث مباشرة عن EGO Salon Alexandria بدل روابط فارغة.
   - أيقونة Globe تفتح موقع/خريطة EGO Salon في محرم بك بالإسكندرية.

6) الكاش:
   - Service Worker أصبح v14.
   - HTML/JS/CSS network-first، والصور cache-first.

بعد الرفع:
- افتح الموقع مرة مع الإنترنت.
- اقفل التبويب القديم وافتحه من جديد.
- لو الهاتف ما زال يعرض النسخة القديمة، اعمل Reload مرة أخرى مع الإنترنت.


7) Screen 07 — GO TO BARAMEEL:
   - Destination ثابتة: 31.190587, 29.920598.
   - GPS الحالي يحسب المسافة التقريبية بخوارزمية Haversine.
   - زمن المشي التقريبي = المسافة / 75 متر في الدقيقة.
   - WALK THERE يفتح Google Maps مباشرة على Walking Directions إلى BARAMEEL.
   - الرقمين يتم وضعهما فوق مجموعتي المربعات المطبوعة في artwork بدون تغيير التصميم.

8) Reward audio v15:
   - صوت الجائزة يبدأ بعد ظهور شاشة Checkpoint Found.
   - تم استبداله بفانفار أركيد أصلي أقصر وأقوى: صعود سريع + cascade + final victory chord، حوالي 2.45 ثانية.
