
const CHARACTERS = ["rookie","skater","brona","racer","chiller","dreamer"];
const state = {
  selected: sessionStorage.getItem("barameelSelected") || "brona",
  audio: true
};

const A = "./assets/";
const imgCache = new Map();

function preload(path){
  if(imgCache.has(path)) return imgCache.get(path);
  const im = new Image();
  im.src = path;
  imgCache.set(path, im);
  return im;
}

function preloadAll(){
  ["screen01.png",...CHARACTERS.flatMap(c=>[`screen02-${c}.png`,`screen03-${c}.png`,`screen04-${c}.png`])].forEach(f=>preload(A+f));
}
preloadAll();

let audioCtx;
function audioReady(){
  if(!state.audio) return;
  audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();
  if(audioCtx.state==="suspended") audioCtx.resume();
}
function tone(freq=440,dur=.08,type="sine",gain=.035,delay=0){
  if(!state.audio) return;
  audioReady();
  const o=audioCtx.createOscillator(), g=audioCtx.createGain();
  o.type=type; o.frequency.value=freq;
  g.gain.setValueAtTime(0,audioCtx.currentTime+delay);
  g.gain.linearRampToValueAtTime(gain,audioCtx.currentTime+delay+.008);
  g.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+delay+dur);
  o.connect(g).connect(audioCtx.destination); o.start(audioCtx.currentTime+delay); o.stop(audioCtx.currentTime+delay+dur+.02);
}
function clickSound(){tone(420,.055,"square",.025);tone(620,.065,"square",.018,.035)}
function selectSound(){tone(280,.07,"triangle",.03);tone(520,.12,"triangle",.035,.06);tone(760,.16,"sine",.02,.13)}
function confirmSound(){tone(330,.08,"square",.025);tone(495,.09,"square",.03,.08);tone(660,.16,"triangle",.04,.17)}
function scanSound(){tone(180,.18,"sine",.03);tone(360,.2,"triangle",.025,.14)}

function flash(){
  const f=document.getElementById("flash"); if(!f)return;
  f.classList.remove("on"); void f.offsetWidth; f.classList.add("on");
}
function toast(msg){
  let t=document.querySelector(".toast");
  if(!t){t=document.createElement("div");t.className="toast";document.body.appendChild(t)}
  t.textContent=msg;t.classList.add("show");clearTimeout(toast.t);
  toast.t=setTimeout(()=>t.classList.remove("show"),1200);
}

function selected(){return sessionStorage.getItem("barameelSelected") || state.selected || "brona"}
function setSelected(c){
  if(!CHARACTERS.includes(c)) return;
  state.selected=c;sessionStorage.setItem("barameelSelected",c);
  selectSound(); flash();
}

function go(url, sound=true){
  if(sound) {clickSound(); flash()}
  document.body.classList.add("leaving");
  setTimeout(()=>location.href=url,170);
}

window.BR = {CHARACTERS,setSelected,selected,go,preloadAll,clickSound,selectSound,confirmSound,scanSound,toast,flash,A};
