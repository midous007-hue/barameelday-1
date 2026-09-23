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
function selectRunner(key){ if(!CHARACTERS.includes(key)) return; sessionStorage.setItem('barameelRunner',key); }
function go(url){document.body.classList.add('flash'); setTimeout(()=>location.href=url,120)}
function flash(){document.body.classList.remove('flash'); void document.body.offsetWidth; document.body.classList.add('flash')}
function toast(msg){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(t._tm);t._tm=setTimeout(()=>t.classList.remove('show'),1500)}

let audioCtx;
function audio(){audioCtx ||= new (window.AudioContext||window.webkitAudioContext)(); if(audioCtx.state==='suspended') audioCtx.resume(); return audioCtx}
function tone(freq,dur=.12,type='square',gain=.22,when=0){const c=audio(),o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.setValueAtTime(freq,c.currentTime+when);g.gain.setValueAtTime(0.0001,c.currentTime+when);g.gain.exponentialRampToValueAtTime(Math.max(.0002,gain),c.currentTime+when+.012);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+when+dur);o.connect(g);g.connect(c.destination);o.start(c.currentTime+when);o.stop(c.currentTime+when+dur+.02)}
function selectSound(key){
  const seq={rookie:[392,523],skater:[330,494,659],brona:[440,554,659],racer:[330,494,784],chiller:[262,330,392],dreamer:[392,494,587]}[key]||[440,554];
  seq.forEach((f,i)=>tone(f,.13,i%2?'triangle':'square',.34,i*.07));
}
function confirmSound(){[523,659,784,1047].forEach((f,i)=>tone(f,.12,'triangle',.34,i*.07))}
function scanSound(){[440,660,880].forEach((f,i)=>tone(f,.12,'sine',.28,i*.08))}
function errorSound(){tone(180,.16,'sawtooth',.25);tone(120,.18,'sawtooth',.22,.08)}

function preloadAll(){
  const files=['./assets/screen01.png'];
  CHARACTERS.forEach(c=>['screen02','screen03','screen04'].forEach(s=>files.push(`./assets/${s}-${c}.png`)));
  files.forEach(src=>{const im=new Image();im.src=src});
}
preloadAll();
window.BR={CHARACTERS,RUNNERS,selected,selectRunner,go,flash,toast,selectSound,confirmSound,scanSound,errorSound};
