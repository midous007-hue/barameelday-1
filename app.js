const CHARACTERS=['rookie','skater','brona','racer','chiller','dreamer'];
const RUNNERS={
  rookie:{name:'THE ROOKIE',speed:2,jump:2,coin:3,energy:5,special:'LUCKY START',effect:'Starts each run with a short bonus to collected marks.'},
  skater:{name:'THE SKATER',speed:4,jump:5,coin:2,energy:4,special:'FLOW MODE',effect:'Successful jumps briefly improve movement speed.'},
  brona:{name:'BRONA',speed:4,jump:3,coin:5,energy:4,special:'MAGNET MOOD',effect:'Attracts more coins for a short time.'},
  racer:{name:'THE RACER',speed:5,jump:4,coin:2,energy:3,special:'TURBO RUSH',effect:'Activates a short burst of extra running speed.'},
  chiller:{name:'THE CHILLER',speed:3,jump:2,coin:4,energy:5,special:'EASY VIBES',effect:'Energy drains more slowly during the run.'},
  dreamer:{name:'THE DREAMER',speed:3,jump:3,coin:5,energy:4,special:'DISCOVERY BOOST',effect:'Gets extra marks from newly discovered route spots.'}
};

function selected(){return sessionStorage.getItem('barameelRunner')||'brona'}
function selectRunner(key){if(!CHARACTERS.includes(key))return;sessionStorage.setItem('barameelRunner',key);}
function go(url){document.body.classList.add('flash');setTimeout(()=>location.href=url,150)}
function flash(){document.body.classList.remove('flash');void document.body.offsetWidth;document.body.classList.add('flash')}
function toast(msg){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(t._tm);t._tm=setTimeout(()=>t.classList.remove('show'),1700)}

/* Loud retro arcade audio — intentionally distinct per runner. */
let audioCtx,master,compressor;
function audio(){
  audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();
  if(!master){
    master=audioCtx.createGain(); master.gain.value=.95;
    compressor=audioCtx.createDynamicsCompressor();
    compressor.threshold.value=-18; compressor.knee.value=8; compressor.ratio.value=8; compressor.attack.value=.003; compressor.release.value=.12;
    master.connect(compressor); compressor.connect(audioCtx.destination);
  }
  if(audioCtx.state==='suspended') audioCtx.resume();
  return audioCtx;
}
function tone(freq,dur=.11,type='square',gain=.32,when=0,slide=0){
  const c=audio(),o=c.createOscillator(),g=c.createGain();
  o.type=type;o.frequency.setValueAtTime(freq,c.currentTime+when);
  if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(40,freq+slide),c.currentTime+when+dur);
  g.gain.setValueAtTime(.0001,c.currentTime+when);
  g.gain.exponentialRampToValueAtTime(Math.max(.0003,gain),c.currentTime+when+.008);
  g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+when+dur);
  o.connect(g);g.connect(master);o.start(c.currentTime+when);o.stop(c.currentTime+when+dur+.025);
}
function noise(dur=.08,gain=.12,when=0){
  const c=audio(),buffer=c.createBuffer(1,c.sampleRate*dur,c.sampleRate),data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*Math.pow(1-i/data.length,2);
  const s=c.createBufferSource(),g=c.createGain();s.buffer=buffer;g.gain.setValueAtTime(gain,c.currentTime+when);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+when+dur);s.connect(g);g.connect(master);s.start(c.currentTime+when);
}
const ARCADE={
 rookie:[392,523,659], skater:[494,659,988], brona:[440,554,659,880], racer:[330,494,784,988], chiller:[262,330,392], dreamer:[392,494,587,784]
};
function selectSound(key){
  const seq=ARCADE[key]||ARCADE.brona;
  seq.forEach((f,i)=>tone(f,.105,'square',.58,i*.055,i===seq.length-1?120:0));
  noise(.045,.09,.0);
}
function confirmSound(){
  [523,659,784,1047,1319].forEach((f,i)=>tone(f,.09,'square',.62,i*.055, i===4?180:0));
  noise(.08,.13,.02);
}
function scanSound(){[660,880,1175,1568].forEach((f,i)=>tone(f,.075,'square',.55,i*.065));noise(.05,.1,.02)}
function errorSound(){tone(180,.16,'sawtooth',.5,0,-70);tone(110,.2,'square',.42,.09,-30);noise(.08,.14,.04)}
function backSound(){tone(440,.06,'square',.5,0,-80);tone(330,.08,'square',.48,.055,-60);noise(.035,.08,.02)}
/* Original retro reward jingle — arcade-style, not a copy of any specific game sound. */
function rewardSound(){
  /* BIG CHECKPOINT JACKPOT — original 8-bit arcade fanfare, ~3.2s, rising and celebratory. */
  const c=audio();
  master.gain.cancelScheduledValues(c.currentTime);
  master.gain.setValueAtTime(1.12,c.currentTime);
  const rise=[523,659,784,988,1175,1397,1568,1760,2093,2349,2637,3136];
  rise.forEach((f,i)=>{
    tone(f,.15,'square',.92,i*.085,i<rise.length-1?90:240);
    tone(f/2,.11,'triangle',.26,i*.085+.018,120);
  });
  /* rapid coin cascade */
  [1319,1568,1760,2093,2349,2637,3136,3520].forEach((f,i)=>
    tone(f,.12,'square',.78,1.12+i*.075,i===7?260:80)
  );
  /* final jackpot chord */
  [1047,1319,1568,2093,2637,3136].forEach((f,i)=>{
    tone(f,.78,'square',.82,1.78+i*.018,i===5?260:0);
    tone(f/2,.68,'triangle',.30,1.78+i*.018,0);
  });
  noise(.16,.34,.02);
  noise(.12,.24,1.10);
  noise(.22,.30,1.78);
  master.gain.setValueAtTime(1.12,c.currentTime+2.25);
  master.gain.exponentialRampToValueAtTime(.82,c.currentTime+3.25);
}

function preload(src,priority='high'){if(!src)return;const im=new Image();im.decoding='async';im.loading='eager';if('fetchPriority' in im)im.fetchPriority=priority;im.src=src;return im}
function preloadNext(srcs=[]){srcs.filter(Boolean).forEach(preload)}
function setArt(id,src,next=[]){
  const img=document.getElementById(id);if(!img)return;
  document.body.classList.add('art-loading');
  img.classList.remove('art-ready');
  img.decoding='async';
  img.loading='eager';
  if('fetchPriority' in img)img.fetchPriority='high';
  img.onload=()=>{img.classList.add('art-ready');document.body.classList.remove('art-loading');img.decode?.().catch(()=>{});setTimeout(()=>preloadNext(next),40)};
  img.onerror=()=>{document.body.classList.remove('art-loading');toast('Image could not be loaded. Check the assets folder.')};
  img.src=src;
}

/* Warm the next screen in the background instead of making the user wait after tapping. */
function warmCurrentFlow(){
  const p=location.pathname.split('/').pop()||'index.html',key=selected();
  if(p==='index.html')preload('./assets/screen02-brona.png');
  if(p==='screen02.html')preload(`./assets/screen03-${key}.png`,'high');
  if(p==='screen03.html')preload(`./assets/screen04-${key}.png`);
  if(p==='screen04.html')preload('./assets/screen05-brona.png');
  if(p==='screen05.html'){preload('./assets/screen06-base.png');preload('./assets/checkpoint-ego.jpg');}
  if(p==='screen06.html')preload('./assets/checkpoint-logo.png');
}

function boot(){
  warmCurrentFlow();
  document.querySelectorAll('button.hotspot').forEach(b=>b.addEventListener('touchstart',()=>{}, {passive:true}));
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
if('serviceWorker' in navigator && location.protocol==='https:'){navigator.serviceWorker.register('./sw.js?v=14').catch(()=>{});}

window.BR={CHARACTERS,RUNNERS,selected,selectRunner,go,flash,toast,selectSound,confirmSound,scanSound,errorSound,backSound,rewardSound,preload,setArt,preloadNext};
