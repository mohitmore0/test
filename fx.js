/* FX.JS - saari animations (canvas, tilt, magnetic buttons, scroll effects). Normal editing me chhuna nahi. */
(()=>{const d=document,$=(s,r=d)=>r.querySelector(s),$$=(s,r=d)=>[...r.querySelectorAll(s)],
rm=false, /* reduce-motion ignore: animations hamesha chalengi */
fine=matchMedia('(hover:hover)').matches||matchMedia('(any-hover:hover)').matches||matchMedia('(pointer:fine)').matches||matchMedia('(any-pointer:fine)').matches;
const bar=d.createElement('i');bar.id='pb';d.body.appendChild(bar);
const gl=d.createElement('div');gl.id='gl';if(fine&&!rm)d.body.appendChild(gl);
const words=$$('.mf2 span'),hi=$('.hero>.hbg');
const sc=()=>{const h=d.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${h>0?scrollY/h:0})`;
if(hi&&!rm&&scrollY<900)hi.style.translate=`0 ${scrollY*.18}px`;
if(!rm)words.forEach(s=>{const t=(innerHeight*.9-s.getBoundingClientRect().top)/(innerHeight*.45);s.style.opacity=Math.max(.15,Math.min(1,t))})};
addEventListener('scroll',sc,{passive:true});addEventListener('resize',sc);sc();

/* hero bg: drone blueprint parallax + live telemetry */
const hb=$('.hbg');
if(hb){const sv=$('svg',hb),hero=hb.parentElement,tel=$('#tel',hb);let t=0;
hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();sv.style.translate=((e.clientX-r.left)/r.width-.5)*-30+'px '+((e.clientY-r.top)/r.height-.5)*-20+'px'},{passive:true});
hero.addEventListener('pointerleave',()=>sv.style.translate='');
setInterval(()=>{t++;tel.textContent='ALT '+(120+Math.sin(t/9)*6).toFixed(1)+' m | SPD '+(12+Math.sin(t/5)*2.5).toFixed(1)+' m/s | BAT '+(22.4-t*.0004).toFixed(1)+' V'},150)}
/* hero: network pattern canvas - sirf black/white/gray. Mouse paas aaye to dots door bhagte hain aur lines chamakti hain */
const cv=$('#cv');let mx=-9999,my=-9999;
if(cv){const x=cv.getContext('2d');let W=0,H=0,N=[],run=false,raf=0;
const R=190,LINK=130;
const mk=()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6,s:1+Math.random()*1.6,near:0});
const fit=()=>{const w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return;if(w===W&&h===H&&N.length)return;
const r=Math.min(devicePixelRatio||1,2),n=Math.min(150,Math.max(20,Math.round(w*h/9000)));
W=w;H=h;cv.width=Math.round(W*r);cv.height=Math.round(H*r);x.setTransform(r,0,0,r,0,0);
while(N.length<n)N.push(mk());N.length=n;N.forEach(p=>{p.x=Math.min(p.x,W);p.y=Math.min(p.y,H)})};
const draw=()=>{raf=0;if(!run)return;if(!N.length)fit();x.clearRect(0,0,W,H);
for(const a of N){a.x+=a.vx;a.y+=a.vy;
if(a.x<0){a.x=0;a.vx=Math.abs(a.vx)}else if(a.x>W){a.x=W;a.vx=-Math.abs(a.vx)}
if(a.y<0){a.y=0;a.vy=Math.abs(a.vy)}else if(a.y>H){a.y=H;a.vy=-Math.abs(a.vy)}
const dx=a.x-mx,dy=a.y-my,dm=Math.hypot(dx,dy);
if(dm<R&&dm>.1){const f=(1-dm/R)*2.2;a.x+=dx/dm*f;a.y+=dy/dm*f}
a.near=dm<R?1-dm/R:0}
for(let i=0;i<N.length;i++){const a=N[i];
for(let j=i+1;j<N.length;j++){const b=N[j],l=Math.hypot(a.x-b.x,a.y-b.y);
if(l<LINK){const g=Math.min(1,(1-l/LINK)*.45+Math.max(a.near,b.near)*.5);x.strokeStyle='rgba(255,255,255,'+g.toFixed(3)+')';x.lineWidth=1;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}}
for(const a of N){x.fillStyle='rgba(255,255,255,'+(.55+a.near*.45).toFixed(2)+')';x.beginPath();x.arc(a.x,a.y,a.s+a.near*2,0,6.2832);x.fill()}
if(mx>-9000){x.strokeStyle='rgba(255,255,255,.18)';x.lineWidth=1;x.beginPath();x.arc(mx,my,R,0,6.2832);x.stroke()}
raf=requestAnimationFrame(draw)};
const start=()=>{if(!raf){run=true;fit();raf=requestAnimationFrame(draw)}};
const hero=cv.parentElement;
fit();
/* re-fit whenever hero size changes (fonts/image/layout settling) */
if('ResizeObserver'in window)new ResizeObserver(()=>{fit();if(run&&!raf)start()}).observe(cv);else addEventListener('resize',fit);
addEventListener('load',()=>{fit();if(run)start()});
if(d.fonts&&d.fonts.ready)d.fonts.ready.then(()=>{fit()});
d.addEventListener('visibilitychange',()=>{if(d.hidden){run=false}else if(vis){start()}});
let vis=true;
hero.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top},{passive:true});
hero.addEventListener('pointerleave',()=>{mx=my=-9999});
new IntersectionObserver(([e])=>{vis=e.isIntersecting;if(vis&&!d.hidden)start();else run=false}).observe(hero);
start()}

/* about page: scramble title, warp stars (scroll = speed), flight line, spotlight, live clock */
const abh=$('.abh');
if(abh){const h=$('.scr',abh),T=h.dataset.t,G='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&';let f=0;h.style.minHeight=h.offsetHeight+'px';
const tk=()=>{h.textContent=[...T].map((c,i)=>c===' '||f>i*1.2+6?c:G[Math.random()*G.length|0]).join('');f++;if(f<T.length*1.2+8)setTimeout(tk,35);else h.textContent=T};tk();
const c=$('#wp'),g=c.getContext('2d');let W,H,S=[],v=0,last=scrollY,px=0,py=0,on=true;
const fit=()=>{const r=Math.min(devicePixelRatio||1,2);W=c.clientWidth;H=c.clientHeight;c.width=W*r;c.height=H*r;g.setTransform(r,0,0,r,0,0);S=Array.from({length:Math.round(W*H/5500)},()=>({x:(Math.random()-.5)*W*2,y:(Math.random()-.5)*H*2,z:Math.random()*W}))};
fit();addEventListener('resize',fit);
abh.addEventListener('pointermove',e=>{px=e.clientX/innerWidth-.5;py=e.clientY/innerHeight-.5},{passive:true});
new IntersectionObserver(([e])=>on=e.isIntersecting).observe(abh);
const loop=()=>{if(on){v+=(Math.min(Math.abs(scrollY-last),70)-v)*.1;last=scrollY;const sp=2+v*1.6,ox=W/2-px*70,oy=H/2-py*70;g.clearRect(0,0,W,H);
for(const s of S){const pz=s.z;s.z-=sp;if(s.z<=1){s.x=(Math.random()-.5)*W*2;s.y=(Math.random()-.5)*H*2;s.z=W;continue}
const k=W*.5/s.z,k0=W*.5/pz,a=1-s.z/W;g.strokeStyle='rgba(255,255,255,'+a.toFixed(2)+')';g.lineWidth=Math.max(.6,a*1.8);g.beginPath();g.moveTo(ox+s.x*k0,oy+s.y*k0);g.lineTo(ox+s.x*k,oy+s.y*k);g.stroke()}}
requestAnimationFrame(loop)};loop()}
const fl=$('.fl');
if(fl){const up=()=>{const r=fl.getBoundingClientRect();fl.style.setProperty('--p',Math.max(0,Math.min(1,(innerHeight*.6-r.top)/r.height)))};addEventListener('scroll',up,{passive:true});up()}
const sn=$$('.sn a');
if(sn.length){const mp=new Map(sn.map(a=>[a.getAttribute('href').slice(1),a]));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){sn.forEach(x=>x.classList.remove('on'));const a=mp.get(e.target.id);a&&a.classList.add('on')}}),{rootMargin:'-45% 0px -50% 0px'});
mp.forEach((a,id)=>{const el=d.getElementById(id);el&&io.observe(el)})}
$$('.tile').forEach(t=>t.addEventListener('pointermove',e=>{const r=t.getBoundingClientRect();t.style.setProperty('--mx',e.clientX-r.left+'px');t.style.setProperty('--my',e.clientY-r.top+'px')},{passive:true}));
const ck=$$('.clk');if(ck.length){const tm=()=>{const s=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Kolkata'});ck.forEach(e=>e.textContent=s+' IST')};tm();setInterval(tm,1000)}

/* tilt cards + magnetic buttons + cursor glow */
if(fine&&!rm){
addEventListener('pointermove',e=>{gl.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
const c=e.target.closest('.card');if(c){const r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
c.style.setProperty('--mx',px*100+'%');c.style.setProperty('--my',py*100+'%');c.style.transform=`perspective(800px) rotateY(${(px-.5)*10}deg) rotateX(${(.5-py)*10}deg) translateY(-4px)`}
const b=e.target.closest('.btn');if(b){const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`}},{passive:true});
addEventListener('pointerout',e=>{const c=e.target.closest('.card,.btn');if(c&&!c.contains(e.relatedTarget))c.style.transform=''})}

/* flight stack explorer: hover/auto highlight + click par text popup (halki blue glow) */
const sx=$('.sx');
if(sx){const svg=$('svg',sx),all=$$('[data-c]',sx),set=c=>all.forEach(el=>el.classList.toggle('on',el.dataset.c===c));
const order=['Flight controllers','ESCs','GPS','Transmitters'];let k=0,hold=false,open=null;
const info={};$$('.si',sx).forEach(a=>{info[a.dataset.c]={n:$('small',a).textContent,h:a.getAttribute('href')}});
const wrap=d.createElement('div');wrap.className='sv';svg.parentNode.insertBefore(wrap,svg);wrap.appendChild(svg);
const pop=d.createElement('div');pop.className='pop';pop.setAttribute('role','status');wrap.appendChild(pop);
const hide=()=>{open=null;pop.classList.remove('show');hold=false};
const show=(el)=>{const c=el.dataset.c,i=info[c]||{n:'',h:'products.html'};open=c;hold=true;set(c);
pop.innerHTML='<b></b><span></span><a></a>';$('b',pop).textContent=c;$('span',pop).textContent=i.n;const a=$('a',pop);a.textContent='View products';a.href=i.h;
const wr=wrap.getBoundingClientRect(),r=el.getBoundingClientRect();
pop.classList.add('show');const pw=pop.offsetWidth,ph=pop.offsetHeight;
let L=r.left-wr.left+r.width/2-pw/2,T=r.top-wr.top-ph-14;if(T<0)T=r.bottom-wr.top+14;
L=Math.max(0,Math.min(wr.width-pw,L));pop.style.left=L+'px';pop.style.top=T+'px'};
$$('.pt',svg).forEach(el=>{el.setAttribute('tabindex','0');el.setAttribute('role','button');el.setAttribute('aria-label',el.dataset.c);
el.addEventListener('click',e=>{e.stopPropagation();open===el.dataset.c?hide():show(el)});
el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open===el.dataset.c?hide():show(el)}})});
d.addEventListener('click',e=>{if(open&&!pop.contains(e.target))hide()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&open)hide()});
all.forEach(el=>{el.addEventListener('pointerenter',()=>{if(!open){hold=true;set(el.dataset.c)}});el.addEventListener('focus',()=>{if(!open){hold=true;set(el.dataset.c)}})});
sx.addEventListener('pointerleave',()=>{if(!open)hold=false});
if(!rm)setInterval(()=>{if(!hold&&!open)set(order[k++%order.length])},2200);else set(order[0])}
})();
