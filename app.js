/* APP.JS - data.js se saare pages banata hai. Normal editing ke liye is file ko chhune ki zarurat nahi. */
(()=>{
const S=window.SITE,P=S.products,d=document,$=(s,r=d)=>r.querySelector(s),$$=(s,r=d)=>[...r.querySelectorAll(s)];
const E=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const page=d.body.dataset.page,q=new URLSearchParams(location.search);
const abs=u=>/^https?:/.test(u)?u:S.url+'/'+String(u).replace(/^\//,'');
const pUrl=p=>'product.html?p='+encodeURIComponent(p.slug);
const tel='tel:+'+S.whatsapp;
d.documentElement.classList.add('js');

/* ---------- SEO ---------- */
function seo(title,desc,img,ld,path){
  d.title=title;
  const set=(sel,attr,v)=>{let m=$(sel);if(!m){m=d.createElement(sel.startsWith('link')?'link':'meta');const[k,val]=sel.match(/\[(.+?)="(.+?)"\]/).slice(1);m.setAttribute(k,val);d.head.appendChild(m)}m.setAttribute(attr,v)};
  set('meta[name="description"]','content',desc);
  set('meta[property="og:title"]','content',title);
  set('meta[property="og:description"]','content',desc);
  set('meta[property="og:type"]','content','website');
  set('meta[name="twitter:card"]','content','summary_large_image');
  if(img)set('meta[property="og:image"]','content',abs(img));
  set('link[rel="canonical"]','href',S.url+'/'+path);
  [].concat(ld||[]).forEach(o=>{const s=d.createElement('script');s.type='application/ld+json';s.textContent=JSON.stringify(o);d.head.appendChild(s)});
}
let path='';
const org={"@context":"https://schema.org","@type":"Organization",name:S.name,url:S.url,logo:abs(S.hero.image),email:S.email,telephone:'+'+S.whatsapp,sameAs:S.social.map(s=>s.url)};

/* ---------- shared parts ---------- */
const links=[['Products','products.html','products'],['Solutions','solutions.html','solutions'],['Docs',S.docsUrl,''],['Support','support.html','support'],['About','about.html','about'],['Contact','contact.html','contact']];
const cur=l=>(l[2]&&(page===l[2]||(l[2]==='products'&&page==='product')))?' aria-current="page"':'';
const header=`<header><div class="wrap nav"><a class="logo" href="index.html">${E(S.short)}<small>${E(S.tagline)}</small></a>
<nav aria-label="Main">${links.map(l=>`<a href="${E(l[1])}"${cur(l)}>${l[0]}</a>`).join('')}</nav>
<div class="hbar"><a class="btn" href="contact.html">Get a quote</a><button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="menu"><i></i><i></i><i></i></button></div></div></header>
<div class="menu" id="menu">${[['Home','index.html']].concat(links.map(l=>[l[0],l[1]])).map(l=>`<a class="m" href="${E(l[1])}">${l[0]}</a>`).join('')}
<div class="mf">Talk to our engineers<a href="${tel}">${E(S.phone)}</a></div></div>`;
const footer=`<footer><div class="wrap"><div><a href="solutions.html">Solutions</a><a href="support.html">Support</a><a href="about.html">About</a><a href="${E(S.careersUrl)}">Careers</a><a href="${E(S.docsUrl)}">Documents</a>${S.social.map(s=>`<a href="${E(s.url)}">${E(s.label)}</a>`).join('')}<a href="sitemap.xml">Sitemap</a></div><div>&copy; ${S.year} ${E(S.name)}</div></div></footer>
<div class="dock" id="dock"><a class="btn o" href="${tel}">Call us</a><a class="btn" href="contact.html">Get a quote</a></div>`;

const card=p=>`<a class="card rv" href="${pUrl(p)}">${p.status==='soon'?'<span class="tag">Coming soon</span>':''}<div class="ph"><img loading="lazy" src="${E(p.image)}" alt="${E(p.name)}"></div><div class="b"><span class="cat">${E(p.category)}</span><h3>${E(p.name)}</h3><p>${E(p.short)}</p></div></a>`;

/* ---------- pages ---------- */
const pages={
home(){
  path='';
  seo(`${S.name} | ${S.tagline}`,S.hero.text,S.hero.image,org,'');
  const feat=P.filter(p=>p.featured);const list=(feat.length?feat:P).slice(0,8);
  const cats=S.categories.filter(c=>P.some(p=>p.category===c));
  const tk=S.ticker.concat(S.ticker).map(t=>`<span>${E(t)}</span>`).join('');
  const words=S.manifesto.split(' ').map(w=>`<span>${E(w)}</span>`).join(' ');
  const mts=[[640,210,0],[960,210,1],[640,490,1],[960,490,0]].map(([x,y,r])=>`<g transform="translate(${x} ${y})"><circle r="98" class="dsh"/><circle r="66" class="thn"/><g class="pr${r?' b':''}"><ellipse rx="94" ry="8"/><ellipse rx="94" ry="8" transform="rotate(90)"/></g><circle r="22" class="fl"/><circle r="7" class="wh"/></g>`).join('');
  const hbg=`<div class="hbg" aria-hidden="true"><svg viewBox="0 0 1200 700" preserveAspectRatio="xMaxYMid slice"><defs><pattern id="gp" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" class="gl"/></pattern><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
<rect width="1200" height="700" fill="url(#gp)"/>
<circle cx="800" cy="350" r="320" class="dsh rot"/><circle cx="800" cy="350" r="250" class="thn"/><path d="M480 350H1120M800 30V670" class="thn" stroke-dasharray="2 8"/>
<g class="dr"><path d="M800 350L640 210M800 350L960 210M800 350L640 490M800 350L960 490" class="arm"/><path d="M800 350L640 210M800 350L960 210M800 350L640 490M800 350L960 490" class="arm2"/>${mts}
<rect x="736" y="296" width="128" height="108" rx="16" class="fl"/><rect x="758" y="316" width="84" height="68" rx="6" class="thn"/><path d="M770 334h20M770 350h44M770 366h30" class="thn"/><circle cx="830" cy="334" r="7" class="wh"/><circle cx="745" cy="305" r="3" class="led"/><circle cx="855" cy="395" r="3" class="led" style="animation-delay:.5s"/></g>
<path d="M862 332H1030M862 368H1030M985 196L1030 168" class="thn"/><text x="1038" y="336">FC / AAZMUTH</text><text x="1038" y="372">GPS / NAVSATE</text><text x="1038" y="170">ESC / AM32</text>
<path d="M640 610H960M640 602v16M960 602v16" class="thn"/><text x="800" y="598" text-anchor="middle">WHEELBASE 320 mm</text>
<path d="M560 80h-30v30M1150 80h30v30M560 640h-30v-30M1150 640h30v-30" class="thn"/><text id="tel" x="560" y="668">ALT 120.0 m | SPD 12.0 m/s | BAT 22.4 V</text><text x="560" y="72">R&amp;D TEST RIG / REV 04</text>
<rect class="scn" width="1200" height="140" fill="url(#sg)"/></svg></div>`;
  const hs=(c,x,y,r)=>`<g class="pt" data-c="${c}">${r}</g>`;
  const mot=[[90,90],[310,90],[90,310],[310,310]].map(([x,y])=>`<g class="pt" data-c="ESCs"><circle cx="${x}" cy="${y}" r="12"/><g class="rot" style="transform-origin:${x}px ${y}px"><path d="M${x-48} ${y}h96M${x} ${y-48}v96"/></g></g>`).join('');
  return `<main><div class="hero"><canvas id="cv" aria-hidden="true"></canvas>${hbg}<div class="wrap"><h1>${S.hero.title.split(' ').map((w,i)=>`<span class="w"><i style="animation-delay:${.2+i*.13}s">${E(w)}</i></span>`).join(' ')}</h1><p>${E(S.hero.text)}</p>
<div class="cta"><a class="btn" href="products.html">Explore products</a><a class="btn o" href="${E(S.docsUrl)}">Documentation</a></div></div><a class="scue" href="#stack" aria-label="Scroll down"><i></i></a></div>
<div class="tick" aria-hidden="true"><div>${tk}</div></div>
<div class="stats"><div class="wrap">${S.stats.map(s=>`<div><b data-n="${s.n}" data-s="${E(s.s)}">${s.n}${E(s.s)}</b><span>${E(s.l)}</span></div>`).join('')}</div></div>
<section id="stack"><div class="wrap"><h2>The whole flight stack</h2><p class="lead">Brain, power, position and link. Hover a part of the drone.</p>
<div class="sx"><svg viewBox="0 0 400 400" aria-hidden="true"><path d="M200 200L90 90M310 90L200 200M90 310L200 200M200 200L310 310"/>${mot}<g class="pt" data-c="Flight controllers"><rect x="168" y="168" width="64" height="64" rx="6"/><path d="M184 184h32v32h-32z"/></g><g class="pt" data-c="GPS"><circle cx="200" cy="118" r="18"/><circle cx="200" cy="118" r="7"/></g><g class="pt" data-c="Transmitters"><path d="M200 232v58"/><circle cx="200" cy="300" r="8"/></g></svg>
<div class="sl">${cats.map(c=>`<a class="si" data-c="${E(c)}" href="products.html"><h3>${E(c)}</h3><small>${P.filter(p=>p.category===c).map(p=>E(p.name)).join(', ')}</small></a>`).join('')}</div></div></div></section>
<section class="alt"><div class="wrap"><h2>Technology solutions</h2><p class="lead">Every part of the flight stack, from one team.</p>
<div class="grid">${list.map(card).join('')}</div><div class="more"><a class="btn o" href="products.html">See all ${P.length} products</a></div></div></section>
<section><div class="wrap"><h2>Built for real work</h2><p class="lead">Where our boards fly today.</p><div class="apps">${S.apps.map(a=>`<a class="app rv" href="solutions.html"><h3>${E(a.t)}</h3><p>${E(a.x)}</p></a>`).join('')}</div></div></section>
<section class="alt"><div class="wrap"><h2>From bench to sky</h2><p class="lead">How a board gets from our desk to your drone.</p><div class="proc">${S.process.map((s,i)=>`<div class="st"><b>${i+1}</b><h3>${E(s.t)}</h3><p class="mute">${E(s.x)}</p></div>`).join('')}</div></div></section>
<section class="mfs"><div class="wrap"><p class="mf2">${words}</p></div></section>
${S.partners.length?`<section class="alt"><div class="wrap"><h2>Our partners</h2><p class="lead">Strategic collaborations that drive our mission.</p></div><div class="wrap"><div class="marq"><div class="logos">${S.partners.map(p=>`<div><img loading="lazy" src="${E(p.logo)}" alt="${E(p.name)}"></div>`).join('')}</div></div></div></section>`:''}
<section><div class="wrap join" style="margin:0 auto"><div><h3>Talk to our engineers</h3><p>Share your build and we will suggest the right parts.</p></div><a class="btn" href="contact.html">Get a quote</a></div></section></main>`;
},
products(){
  path='products.html';
  seo(`Products | ${S.name}`,`Flight controllers, ESCs, GPS modules and more from ${S.name}.`,P[0]&&P[0].image,[org,{"@context":"https://schema.org","@type":"ItemList",itemListElement:P.map((p,i)=>({"@type":"ListItem",position:i+1,url:S.url+'/'+pUrl(p),name:p.name}))}],path);
  const cats=S.categories.filter(c=>P.some(p=>p.category===c));
  return `<main><section><div class="wrap"><h1 class="cn" style="font-size:clamp(40px,7vw,72px)">Products</h1><p class="lead">Flight controllers, ESCs, GPS and more. Tap a product for details.</p>
<div class="filters" role="group" aria-label="Filter by category">${['All'].concat(cats).map(c=>`<button type="button" aria-pressed="${c==='All'}" data-c="${E(c)}">${E(c)}</button>`).join('')}</div>
<div class="grid" id="pg"></div></div></section></main>`;
},
product(){
  const p=P.find(x=>x.slug===q.get('p'));
  if(!p){path='products.html';seo(`Product not found | ${S.name}`,'This product does not exist.',null,null,path);
    return `<main><section><div class="wrap"><h1 class="cn" style="font-size:clamp(40px,7vw,72px)">Product not found</h1><p class="lead">Check the link or browse all products.</p><a class="btn" href="products.html">All products</a></div></section></main>`}
  path=pUrl(p);const imgs=[p.image].concat(p.gallery||[]).filter(Boolean);const soon=p.status==='soon';
  seo(`${p.name} | ${S.name}`,p.short||p.description,p.image,[org,{"@context":"https://schema.org","@type":"Product",name:p.name,image:imgs.map(abs),description:p.description,category:p.category,brand:{"@type":"Brand",name:S.short}}],path);
  const rel=P.filter(x=>x.slug!==p.slug&&x.category===p.category).concat(P.filter(x=>x.slug!==p.slug&&x.category!==p.category)).slice(0,4);
  return `<main><section><div class="wrap"><p class="crumb"><a href="index.html">Home</a> / <a href="products.html">Products</a> / ${E(p.name)}</p>
<div class="pd"><div><div class="main-img"><img id="mi" src="${E(imgs[0])}" alt="${E(p.name)}" fetchpriority="high"></div>
${imgs.length>1?`<div class="thumbs">${imgs.map((u,i)=>`<button type="button" data-i="${i}" aria-label="Photo ${i+1}"${i?'':' aria-current="true"'}><img src="${E(u)}" alt=""></button>`).join('')}</div>`:''}</div>
<div><span class="cat">${E(p.category)}${soon?' &middot; Coming soon':''}</span><h1>${E(p.name)}</h1><p class="d">${E(p.description)}</p>
${p.features&&p.features.length?`<h3>Highlights</h3><ul>${p.features.map(f=>`<li>${E(f)}</li>`).join('')}</ul>`:''}
${p.specs&&p.specs.length?`<h3>Specifications</h3><table>${p.specs.map(s=>`<tr><td>${E(s[0])}</td><td>${E(s[1])}</td></tr>`).join('')}</table>`:''}
${p.docs&&p.docs.length?`<h3>Documentation</h3><div class="docs">${p.docs.map(x=>`<a href="${E(x.url)}">${E(x.label)}</a>`).join('')}</div>`:''}
<div class="cta"><a class="btn" href="contact.html?product=${encodeURIComponent(p.slug)}">${soon?'Ask about launch':'Get a quote'}</a>${p.buyUrl&&!soon?`<a class="btn o" href="${E(p.buyUrl)}">View in store</a>`:''}</div></div></div></div></section>
${rel.length?`<section class="alt"><div class="wrap"><h2>More products</h2><p class="lead"></p><div class="grid">${rel.map(card).join('')}</div></div></section>`:''}</main>`;
},
about(){
  const A=S.about;path='about.html';
  seo(`About | ${S.name}`,A.text,S.hero.image,org,path);
  const tk=S.ticker.concat(S.ticker).map(t=>`<span>${E(t)}</span>`).join('');
  const cats=S.categories.filter(c=>P.some(p=>p.category===c));
  const co=['19.25\u00b0 N, 72.86\u00b0 E','20.00\u00b0 N, 73.79\u00b0 E'];
  const words=S.manifesto.split(' ').map(w=>`<span>${E(w)}</span>`).join(' ');
  const nav=[['who','Who'],['build','Build'],['story','Story'],['markets','Markets'],['process','Process'],['find','Find us']];
  return `<main class="ax"><nav class="sn" aria-label="Sections">${nav.map(n=>`<a href="#${n[0]}"><i></i><span>${n[1]}</span></a>`).join('')}</nav>
<section class="abh"><canvas id="wp" aria-hidden="true"></canvas><div class="radar" aria-hidden="true"><i class="bl" style="top:28%;left:62%"></i><i class="bl" style="top:64%;left:30%;animation-delay:.9s"></i><i class="bl" style="top:46%;left:78%;animation-delay:1.7s"></i></div>
<div class="wrap"><span class="eye">About us \u00b7 Since ${E(A.timeline[0]?A.timeline[0].year:S.year)}</span><h1 class="scr" data-t="${E(A.title)}">${E(A.title)}</h1><p>${E(A.text)}</p><div class="cta"><a class="btn" href="products.html">See what we build</a><a class="btn o" href="#who">Who we are</a></div></div><a class="scue" href="#who" aria-label="Scroll down"><i></i></a></section>
<div class="tick" aria-hidden="true"><div>${tk}</div></div>
<div class="stats"><div class="wrap">${S.stats.map(s=>`<div><b data-n="${s.n}" data-s="${E(s.s)}">${s.n}${E(s.s)}</b><span>${E(s.l)}</span></div>`).join('')}</div></div>
<section id="who"><div class="wrap"><h2>Who we are</h2><div class="mv"><p class="mf2">${words}</p><div class="mvc"><div class="mc rv"><span>Mission</span><p>${E(A.mission||A.text)}</p></div><div class="mc rv"><span>Vision</span><p>${E(A.vision||S.tagline)}</p></div></div></div></div></section>
${A.values.length?`<section class="alt"><div class="wrap"><h2>How we work</h2><p class="lead">Habits we refuse to give up.</p><div class="tiles">${A.values.map((v,i)=>`<div class="tile rv"><b>0${i+1}</b><h3>${E(v.title)}</h3><p class="mute">${E(v.text)}</p></div>`).join('')}</div></div></section>`:''}
<section id="build"><div class="wrap"><h2>What we engineer</h2><p class="lead">The full flight stack, designed and supported by one team.</p><div class="caps">${cats.map((c,i)=>{const ps=P.filter(p=>p.category===c);return `<a class="cap rv" href="products.html"><span class="n">0${i+1}</span><h3>${E(c)}</h3><p>${ps.map(p=>E(p.name)).join(' \u00b7 ')}</p><em>${ps.length}</em><i class="bar"></i></a>`}).join('')}</div></div></section>
${A.timeline.length?`<section id="story" class="alt"><div class="wrap"><h2>Our story</h2><p class="lead">From a garage bench to a production line, one board at a time.</p><div class="fl"><div class="spine"><i></i><em></em></div>${A.timeline.map((t,i)=>`<div class="ti2 rv${i%2?' r':''}"><span class="yr2">${E(t.year)}</span><h3>${E(t.title)}</h3><p>${E(t.text)}</p></div>`).join('')}</div></div></section>`:''}
<section id="markets"><div class="wrap"><h2>Markets we serve</h2><p class="lead">Where our boards fly today.</p><div class="apps">${S.apps.map(x=>`<a class="app rv" href="solutions.html"><h3>${E(x.t)}</h3><p>${E(x.x)}</p></a>`).join('')}</div></div></section>
<section id="process" class="alt"><div class="wrap"><h2>From bench to sky</h2><p class="lead">How a board gets from our desk to your drone.</p><div class="proc">${S.process.map((x,i)=>`<div class="st"><b>${i+1}</b><h3>${E(x.t)}</h3><p class="mute">${E(x.x)}</p></div>`).join('')}</div></div></section>
${S.partners.length?`<section><div class="wrap"><h2>Our partners</h2><p class="lead">Strategic collaborations that drive our mission.</p></div><div class="wrap"><div class="marq"><div class="logos">${S.partners.map(p=>`<div><img loading="lazy" src="${E(p.logo)}" alt="${E(p.name)}"></div>`).join('')}</div></div></div></section>`:''}
${A.team.length?`<section class="alt"><div class="wrap"><h2>The people</h2><p class="lead"></p><div class="cols4">${A.team.map(t=>`<div class="person"><div class="pic">${t.photo?`<img loading="lazy" src="${E(t.photo)}" alt="${E(t.name)}">`:`<b>${E(t.name.split(' ').map(w=>w[0]).slice(0,2).join(''))}</b>`}</div><h3>${E(t.name)}</h3><p class="mute" style="margin:0;font-size:14px">${E(t.role)}</p><p class="q">${E(t.note)}</p></div>`).join('')}</div></div></section>`:''}
${A.gallery.length?`<section><div class="wrap"><h2>Inside the workshop</h2><p class="lead"></p><div class="gal">${A.gallery.map(g=>`<figure><img loading="lazy" src="${E(g.src)}" alt="${E(g.caption)}"><figcaption>${E(g.caption)}</figcaption></figure>`).join('')}</div></div></section>`:''}
<section id="find" class="alt"><div class="wrap"><h2>Find us</h2><p class="lead">Two cities, one team.</p><div class="offs">${A.offices.map((o,i)=>`<div class="of rv"><h3>${E(o.city)}</h3><p class="mute" style="margin:0">${E(o.role)}</p><p>${E(o.address)}</p><p class="mute" style="font-size:13px;letter-spacing:.08em;margin:0 0 6px">${co[i%2]}</p><span class="clk live"></span></div>`).join('')}</div></div></section>
<section><div class="wrap"><h2>Work with us</h2><p class="lead">Partners, distributors, builders and engineers: start here.</p><div class="tiles">
<a class="tile go rv" href="contact.html"><b>\u2197</b><h3>Partner with us</h3><p class="mute">OEM, distribution and integration enquiries.</p></a>
<a class="tile go rv" href="${E(S.careersUrl)}"><b>\u2197</b><h3>Join the team</h3><p class="mute">Hardware, firmware and flight-test roles.</p></a>
<a class="tile go rv" href="${E(S.docsUrl)}"><b>\u2197</b><h3>Read the docs</h3><p class="mute">Pinouts, calibration and setup guides.</p></a></div></div></section>
<section class="fin alt"><div class="wrap"><h2>Hardware that flies</h2><p class="lead" style="margin-inline:auto">Designed in India. Tested in the air.</p><a class="btn o" href="#">Back to top</a></div></section></main>`;
},
solutions(){
  path='solutions.html';
  seo(`Solutions | ${S.name}`,'Drone electronics for agriculture, survey, defense, FPV and research.',S.hero.image,org,path);
  return `<main><section style="border-bottom:1px solid var(--line)"><div class="wrap"><h1 class="cn" style="font-size:clamp(38px,9vw,104px);max-width:9em">Parts for every kind of flight</h1><p class="lead" style="color:var(--hi);font-size:19px;margin-bottom:0">Pick your use case and see the boards we suggest.</p></div></section>
${S.apps.map((a,i)=>`<section class="${i%2?'alt':''}"><div class="wrap"><h2>${E(a.t)}</h2><p class="lead">${E(a.x)}</p><div class="grid">${a.p.map(s=>P.find(x=>x.slug===s)).filter(Boolean).map(card).join('')}</div></div></section>`).join('')}
<section><div class="wrap join" style="margin:0 auto"><div><h3>Not sure what fits?</h3><p>Describe your build and we will pick the parts.</p></div><a class="btn" href="contact.html">Get a quote</a></div></section></main>`;
},
support(){
  path='support.html';
  seo(`Support | ${S.name}`,'Docs, answers and direct contact for Space and Tech Engineering products.',S.hero.image,[org,{"@context":"https://schema.org","@type":"FAQPage",mainEntity:S.faq.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}],path);
  return `<main><section style="border-bottom:1px solid var(--line)"><div class="wrap"><h1 class="cn" style="font-size:clamp(38px,9vw,104px);max-width:9em">Help from the people who built it</h1></div></section>
<section><div class="wrap"><div class="cols3"><div class="val"><h3>Call</h3><p><a href="${tel}">${E(S.phone)}</a></p></div><div class="val"><h3>WhatsApp</h3><p><a href="https://wa.me/${E(S.whatsapp)}">Message us</a></p></div><div class="val"><h3>Email</h3><p><a href="mailto:${E(S.email)}">${E(S.email)}</a></p></div></div></div></section>
<section class="alt"><div class="wrap"><h2>Documentation</h2><p class="lead">Pinouts, calibration and setup guides.</p><div class="docs"><a href="${E(S.docsUrl)}">All documentation</a>${P.filter(p=>p.docs&&p.docs.length).map(p=>p.docs.map(x=>`<a href="${E(x.url)}">${E(p.name)}: ${E(x.label)}</a>`).join('')).join('')}</div></div></section>
<section><div class="wrap"><h2>Common questions</h2><p class="lead"></p>${S.faq.map(f=>`<details><summary>${E(f.q)}</summary><p>${E(f.a)}</p></details>`).join('')}</div></section></main>`;
},
contact(){
  path='contact.html';
  seo(`Contact | ${S.name}`,`Call, email or message ${S.name} to get a quote for your build.`,S.hero.image,[org,{"@context":"https://schema.org","@type":"ContactPage",url:S.url+'/'+path}],path);
  const sel=q.get('product')||'';
  return `<main><section><div class="wrap contact"><div><h1 class="cn" style="font-size:clamp(40px,7vw,72px)">Talk to our engineers</h1><p class="lead">Share your build and we will suggest the right parts.</p>
<a class="big" href="${tel}">${E(S.phone)}</a><a class="big" href="mailto:${E(S.email)}">${E(S.email)}</a><a class="big" href="https://wa.me/${E(S.whatsapp)}">WhatsApp</a>
<div style="margin-top:26px">${S.about.offices.map(o=>`<div class="off" style="margin-bottom:12px"><h3 style="font-size:26px">${E(o.role)}</h3><p>${E(o.address)}</p></div>`).join('')}</div></div>
<form id="f"><label>Your name<input name="n" required autocomplete="name"></label><label>Phone<input name="p" type="tel" required autocomplete="tel"></label>
<label>Product<select name="s"><option value="">Not sure yet</option>${P.map(p=>`<option value="${E(p.name)}"${p.slug===sel?' selected':''}>${E(p.name)}</option>`).join('')}</select></label>
<label>Message<textarea name="m" placeholder="Tell us about your build and quantity"></textarea></label><button class="btn" type="submit">Send by email</button><p class="mute" style="font-size:13px;margin:0">This opens your email app with the message ready to send.</p></form></div></section></main>`;
}};

/* ---------- render ---------- */
d.body.innerHTML=header+(pages[page]||pages.home)()+footer;

/* menu */
const burger=$('.burger'),menu=$('#menu');
const setMenu=o=>{menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu');d.body.classList.toggle('lock',o)};
burger.onclick=()=>setMenu(!menu.classList.contains('open'));
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
matchMedia('(min-width:901px)').addEventListener('change',e=>e.matches&&setMenu(false));

/* products filter */
const pg=$('#pg');
if(pg){const show=c=>{const l=P.filter(p=>c==='All'||p.category===c);pg.innerHTML=l.length?l.map(card).join(''):'<div class="empty">No products in this category yet.</div>';reveal()};
$$('.filters button').forEach(b=>b.onclick=()=>{$$('.filters button').forEach(x=>x.setAttribute('aria-pressed',x===b));show(b.dataset.c)});show('All')}

/* product gallery */
$$('.thumbs button').forEach(b=>b.onclick=()=>{const i=+b.dataset.i,u=[P.find(x=>x.slug===q.get('p')).image].concat(P.find(x=>x.slug===q.get('p')).gallery||[]);$('#mi').src=u[i];$$('.thumbs button').forEach(x=>x.toggleAttribute('aria-current',x===b))});

/* contact form -> mailto */
const f=$('#f');
if(f)f.onsubmit=e=>{e.preventDefault();const v=Object.fromEntries(new FormData(f));
location.href='mailto:'+S.email+'?subject='+encodeURIComponent('Quote request'+(v.s?': '+v.s:''))+'&body='+encodeURIComponent(`Name: ${v.n}\nPhone: ${v.p}\nProduct: ${v.s||'-'}\n\n${v.m||''}`)};

/* reveal, counters, marquee */
const rm=false;
function reveal(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});$$('.rv:not(.in)').forEach(el=>io.observe(el))}
$$('section h2,.val,.person,.off,.ti,.gal figure,.stats div').forEach(el=>el.classList.add('rv'));reveal();
if(!rm)$$('[data-n]').forEach(el=>{const n=+el.dataset.n,s=el.dataset.s||'';el.textContent='0'+s;
new IntersectionObserver((es,o)=>es.forEach(e=>{if(!e.isIntersecting)return;o.disconnect();const t0=performance.now();const f=t=>{const p=Math.min((t-t0)/1500,1);el.textContent=Math.round(n*(1-Math.pow(1-p,4)))+s;if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}),{threshold:.6}).observe(el)});
const lg=$('.logos');if(lg&&!rm)[...lg.children].forEach(n=>{const c=n.cloneNode(true);c.setAttribute('aria-hidden','true');lg.appendChild(c)});else if(lg)lg.style.animation='none';

/* hide dock on contact page */
if(page==='contact')$('#dock').style.display='none';
})();
