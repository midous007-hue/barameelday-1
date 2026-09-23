const CACHE='barameel-run-shell-v6';
const SHELL=['./','./index.html','./screen02.html','./screen03.html','./screen04.html','./screen05.html','./app.js','./styles.css','./sw.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('barameel-run-shell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url); if(u.origin!==location.origin)return;
  const isImage=/\.(png|jpg|jpeg|webp)$/i.test(u.pathname);
  if(isImage){
    e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return r}).catch(()=>cached)));
  }else{
    e.respondWith(fetch(e.request).then(r=>{if(r.ok&&(/\.(html|js|css)$/i.test(u.pathname))){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return r}).catch(()=>caches.match(e.request)));
  }
});
