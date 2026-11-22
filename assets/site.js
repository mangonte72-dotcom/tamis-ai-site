/* Tamis AI Solutions – shared behaviour for every page */
(function(){
"use strict";
var T = window.TAMIS_T;
var $ = function(s,r){ return (r||document).querySelector(s); };
var $$ = function(s,r){ return Array.prototype.slice.call((r||document).querySelectorAll(s)); };

/* ================= Icons ================= */
var ICON = {
  map:'<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
  shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0"/><path d="M16 4.5a3.5 3.5 0 010 7M18 14a6 6 0 013.5 6"/>',
  pulse:'<path d="M3 12h4l2-6 4 12 2-6h6"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  web:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
  store:'<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9v11h16V9"/><path d="M4 9a2.7 2.7 0 005.3 0 2.7 2.7 0 005.4 0 2.7 2.7 0 005.3 0"/>',
  factory:'<path d="M3 20V10l5 3V10l5 3V6h5l1 14z"/><path d="M7 17h2M12 17h2"/>',
  landmark:'<path d="M3 21h18M5 18h14M12 3l8 5H4z"/><path d="M6 10v8M10 10v8M14 10v8M18 10v8"/>',
  briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 13h18"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  coins:'<ellipse cx="9" cy="7" rx="6" ry="3"/><path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7"/><path d="M9 15v2c0 1.7 2.7 3 6 3s6-1.3 6-3v-5c0-1.7-2.7-3-6-3"/>',
  trend:'<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  hourglass:'<path d="M6 3h12M6 21h12M7 3c0 5 10 5 10 9s-10 4-10 9M17 3c0 5-10 5-10 9"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z"/>',
  layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  link:'<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
  list:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
  check:'<path d="M5 12l4 4 10-10"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>'
};
var SVC_ICONS = ["map","shield","compass","users","pulse","mail","web"];
var ILL = {
  scale:'<svg viewBox="0 0 160 160" aria-hidden="true"><path class="s" d="M80 28v104M52 132h56"/><circle class="f" cx="80" cy="28" r="6"/><g class="beam"><path class="s" d="M30 46h100"/><path class="s" d="M30 46l-16 34h32zM130 46l-16 34h32z"/><path class="r" d="M14 80h32"/><path class="s" d="M114 80h32"/></g></svg>',
  bias:'<svg viewBox="0 0 160 160" aria-hidden="true"><path class="s" d="M24 132h116M24 132V28"/><rect class="f" x="36" y="96" width="16" height="36" rx="3"/><rect class="f" x="62" y="84" width="16" height="48" rx="3"/><rect class="fr badbar" x="88" y="40" width="16" height="92" rx="3"/><rect class="f" x="114" y="90" width="16" height="42" rx="3"/><g class="mag"><circle class="s" cx="0" cy="0" r="17" style="fill:rgba(0,12,25,.55)"/><path class="s" d="M12 12l14 14"/></g></svg>',
  doc:'<svg viewBox="0 0 160 160" aria-hidden="true"><rect class="s" x="38" y="20" width="76" height="104" rx="8"/><path class="s" d="M70 46h32M70 70h32M70 94h24" style="opacity:.6"/><path class="s tick" d="M50 46l5 5 9-10"/><path class="s tick t2" d="M50 70l5 5 9-10"/><path class="s tick t3" d="M50 94l5 5 9-10"/><g class="seal"><circle cx="118" cy="118" r="20" style="fill:#1F5FD6"/><path d="M109 118l6 6 12-13" style="fill:none;stroke:#fff;stroke-width:3.5;stroke-linecap:round;stroke-linejoin:round"/></g></svg>',
  cost:'<svg viewBox="0 0 160 160" aria-hidden="true"><path class="s" d="M24 132h116M24 132V28" style="opacity:.6"/><path class="r trend" d="M30 40l28 22 24-8 26 38 26 26"/><path class="r" d="M124 106l12 12-16 2" style="opacity:.9"/><g><ellipse class="s coin" cx="52" cy="122" rx="16" ry="5"/><ellipse class="s coin c2" cx="52" cy="112" rx="16" ry="5"/><ellipse class="s coin c3" cx="52" cy="102" rx="16" ry="5"/></g></svg>',
  shield:'<svg viewBox="0 0 160 160" aria-hidden="true"><circle class="glow" cx="80" cy="80" r="62" style="fill:rgba(61,220,132,.25)"/><path class="g" d="M80 22l46 18v34c0 30-20 52-46 62-26-10-46-32-46-62V40z" style="fill:rgba(0,12,25,.6)"/><path class="g chk" d="M60 82l14 14 28-30"/></svg>'
};
function svg(k,s){ s=s||26; return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+ICON[k]+'</svg>'; }
function esc(s){ return String(s).replace(/[&<>"]/g,function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function pad(n){ return String(n).padStart(2,"0"); }

/* ================= Language ================= */
var lang = "fr";
try{ var saved = localStorage.getItem("tamis-lang"); if(saved==="en"||saved==="fr") lang = saved; else if((navigator.language||"").slice(0,2)==="en") lang="en"; }catch(e){}

function renderLines(el,lines){
  el.innerHTML = lines.map(function(l){
    return '<span class="line"><span>'+esc(l[0])+(l[1]?'<em class="accent" style="font-style:normal">'+esc(l[1])+'</em>':'')+'</span></span>';
  }).join("");
  el.setAttribute("aria-label", lines.map(function(l){ return l.join(""); }).join(" "));
}
function fill(id,html){ var el=document.getElementById(id); if(el) el.innerHTML = html; return el; }

function render(){
  var t = T[lang], n = t.svc.length;
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(function(el){ var v=t[el.getAttribute("data-i18n")]; if(typeof v==="string") el.textContent=v; });
  $$("[data-lines]").forEach(function(el){ renderLines(el, t[el.getAttribute("data-lines")]); });
  $$(".lang button").forEach(function(b){ b.setAttribute("aria-pressed", String(b.dataset.lang===lang)); });

  /* Home */
  var man = document.getElementById("manText");
  if(man){
    var words=function(txt,cls){ return txt.split(" ").map(function(w){ return '<span class="w'+(cls?' '+cls:'')+'">'+esc(w)+'</span>'; }).join(" "); };
    var segs=t["man.seg"], out=[], ki=0;
    for(var si=0;si<segs.length;si++){
      var sg=segs[si], nx=segs[si+1], punct=(nx&&/^[,.;:]$/.test(nx[0]))?nx[0]:"";
      if(sg[1]==="k"){ out.push('<span class="kwrap"><span class="kw" data-k="'+(ki++)+'"><span class="kw-bg" aria-hidden="true"></span>'+words(sg[0])+'</span>'+(punct?'<span class="w">'+punct+'</span>':'')+'</span>'); if(punct) si++; }
      else if(sg[1]==="a") out.push('<span class="accw">'+words(sg[0],"acc")+'</span>');
      else out.push(words(sg[0]));
    }
    man.innerHTML=out.join(" ");
  }
  var stage=document.getElementById("stage");
  if(stage){
    stage.innerHTML=t.cards.map(function(c,i){
      return '<article class="card3d'+(i===t.cards.length-1?' ok':'')+'" data-i="'+i+'"><div class="ill">'+ILL[c[0]]+'</div><div class="txt"><small>'+esc(c[1])+'</small><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p></div></article>';
    }).join("");
    var dots=document.getElementById("stageDots"); if(dots) dots.innerHTML=t.cards.map(function(){ return "<i></i>"; }).join("");
  }
  var rot=document.getElementById("rot");
  if(rot) rot.innerHTML=t.svc.map(function(x,i){ return '<span'+(i?' aria-hidden="true"':'')+'>'+esc(x[1])+'</span>'; }).join("");
  /* split section titles into words that rise from a mask */
  $$("h2[data-i18n]").forEach(function(h){ var txt=h.textContent; h.innerHTML=txt.split(" ").map(function(w){ return '<span class="wm"><span>'+esc(w)+'</span></span>'; }).join(" "); h.setAttribute("aria-label",txt); });
  fill("track", t.svc.map(function(s,i){
    return '<a class="svc" href="services.html#'+t.svcIds[i]+'"><div class="svc-top"><div class="svc-ic">'+svg(SVC_ICONS[i])+'</div><span class="svc-n">'+pad(i+1)+' / '+pad(n)+'</span></div>'+
      '<h3>'+esc(s[1])+'</h3><p>'+esc(s[2])+'</p><span class="svc-more">'+esc(t.more)+svg("arrow",16)+'</span></a>';
  }).join("") + '<a class="svc all" href="services.html"><div class="svc-top"><div class="svc-ic" style="background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.3);color:#fff">'+svg("list")+'</div></div><h3>'+esc(t["svc.all.title"])+'</h3><p>'+esc(t["svc.all.text"])+'</p><span class="svc-more">'+esc(t.more)+svg("arrow",16)+'</span></a>');
  fill("clGrid", t.cl.map(function(c){ return '<article class="cl"><div class="cl-ic">'+svg(c[0],24)+'</div><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></article>'; }).join(""));
  fill("creds", t["f.creds"].map(function(c){ return '<div class="cred"><dt>'+esc(c[0])+'</dt><dd>'+esc(c[1])+'</dd></div>'; }).join(""));
  fill("tvTags", t["tv.tags"].map(function(x){ return "<span>"+esc(x)+"</span>"; }).join(""));

  /* About */
  fill("pillars", t.mi.map(function(c){ return '<article class="pillar"><div class="cl-ic">'+svg(c[0],24)+'</div><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></article>'; }).join(""));
  fill("pathSteps", t.pa.map(function(c,i){ return '<div class="step'+(i===t.pa.length-1?' now':'')+'"><span>'+esc(c[0])+'</span><b>'+esc(c[1])+'</b><p>'+esc(c[2])+'</p></div>'; }).join(""));
  fill("roles", t.ro.map(function(c){ return '<article class="role"><div class="cl-ic">'+svg(c[0],24)+'</div><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></article>'; }).join(""));
  fill("principles", t.pr.map(function(c,i){ return '<div class="pr"><em>'+pad(i+1)+'</em><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'; }).join(""));

  /* Services page */
  fill("svcNav", t.svc.map(function(s,i){ return '<a href="#'+t.svcIds[i]+'" data-sid="'+t.svcIds[i]+'"><em>'+pad(i+1)+'</em>'+esc(s[1])+'</a>'; }).join(""));
  fill("svcDetail", t.svc.map(function(s,i){
    return '<article class="sd" id="'+t.svcIds[i]+'"><div class="sd-top"><div class="svc-ic">'+svg(SVC_ICONS[i])+'</div><span class="svc-n">'+pad(i+1)+' / '+pad(n)+'</span></div>'+
      '<h2>'+esc(s[1])+'</h2><p class="lead">'+esc(s[2])+'</p>'+
      '<div class="sd-cols"><div class="box"><h3>'+esc(t["sv.del"])+'</h3><ul>'+t.svcDel[i].map(function(d){ return '<li>'+svg("check",18)+'<span>'+esc(d)+'</span></li>'; }).join("")+'</ul></div>'+
      '<div class="box"><h3>'+esc(t["sv.for"])+'</h3><p>'+esc(t.svcFor[i])+'</p><div class="tags" style="margin-top:auto">'+s[3].map(function(x){ return '<span>'+esc(x)+'</span>'; }).join("")+'</div></div></div></article>';
  }).join(""));
  fill("how", t.how.map(function(c,i){ return '<article class="pstep"><em>'+(i+1)+'</em><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></article>'; }).join(""));
  var topic=document.getElementById("f-topic");
  if(topic){ var cur=topic.selectedIndex; topic.innerHTML=t["ct.topics"].map(function(x){ return "<option>"+esc(x)+"</option>"; }).join(""); topic.selectedIndex=Math.max(0,cur); }
  var LIVE=/netlify\.app$|(the-tamis-ai-solutions|thetamisaiconsulting)\.com$/.test(location.hostname);
  var sendLbl=document.querySelector('#contactForm [data-i18n="ct.send"]'); if(sendLbl&&LIVE) sendLbl.textContent=t["ct.sendLive"];
  var msgPh=document.getElementById("f-msg"); if(msgPh) msgPh.placeholder=t["ct.msgPh"];
  fill("pricing", t.pz.map(function(c,i){ return '<article class="price'+(i===1?' hl':'')+'"><h3>'+esc(c[0])+'</h3><p class="amt">'+esc(c[1])+'</p><p>'+esc(c[2])+'</p></article>'; }).join(""));

  bindHover();
}

/* ================= Clocks ================= */
function clocks(){
  var o={hour:"2-digit",minute:"2-digit",hour12:false};
  try{
    var us=new Intl.DateTimeFormat("fr-FR",Object.assign({timeZone:"America/New_York"},o)).format(new Date());
    var fr=new Intl.DateTimeFormat("fr-FR",Object.assign({timeZone:"Europe/Paris"},o)).format(new Date());
    $$("[data-clock='us']").forEach(function(e){ e.textContent=us; });
    $$("[data-clock='fr']").forEach(function(e){ e.textContent=fr; });
  }catch(e){}
}
clocks(); setInterval(clocks,15000);

/* ================= Copy buttons ================= */
document.addEventListener("click",function(e){
  var b=e.target.closest("[data-copy]"); if(!b) return;
  var el=document.getElementById(b.dataset.copy), txt=el.textContent;
  function done(){ b.textContent=T[lang].copied; setTimeout(function(){ b.textContent=T[lang].copy; },1600); }
  function fallback(){ var r=document.createRange(); r.selectNodeContents(el); var s=getSelection(); s.removeAllRanges(); s.addRange(r); }
  try{ navigator.clipboard.writeText(txt).then(done,fallback); }catch(err){ fallback(); }
});

/* ================= Contact form ================= */
var form=document.getElementById("contactForm");
if(form){
  form.addEventListener("submit",function(e){
    e.preventDefault();
    var t=T[lang], out=document.getElementById("formMsg");
    var v=function(id){ return document.getElementById(id).value.trim(); };
    var name=v("f-name"), mail=v("f-email"), msg=v("f-msg");
    var okMail=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail);
    document.getElementById("f-name").setAttribute("aria-invalid",String(!name));
    document.getElementById("f-email").setAttribute("aria-invalid",String(!okMail));
    document.getElementById("f-msg").setAttribute("aria-invalid",String(!msg));
    out.hidden=false;
    if(!name||!okMail||!msg){ out.className="fmsg err"; out.textContent=t["ct.err"]; return; }
    var subject="[Tamis AI] "+v("f-topic")+" – "+name;
    var body=[t["ct.name"]+" : "+name, t["ct.company"]+" : "+v("f-company"), t["ct.email"]+" : "+mail, t["ct.phone"]+" : "+v("f-phone"), t["ct.topic"]+" : "+v("f-topic"), "", msg].join("\n");
    function mailtoFallback(){
    out.className="fmsg ok";
    out.innerHTML='<span>'+esc(t["ct.ok"])+'</span><pre id="mailBody">'+esc("Objet / Subject : "+subject+"\n\n"+body)+'</pre><button type="button" class="btn btn-primary" data-copy="mailBody">'+esc(t["ct.copyMsg"])+'</button>';
    try{ window.location.href="mailto:moise@thetamisaiconsulting.com?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body); }catch(err){}
    }
    /* On the live site (Netlify), send the form directly; elsewhere prepare an email */
    if(/netlify\.app$/.test(location.hostname)){
      var btn=form.querySelector("button[type=submit]"); btn.disabled=true;
      out.className="fmsg ok"; out.textContent=t["ct.sending"];
      fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(new FormData(form)).toString()})
        .then(function(r){ if(!r.ok) throw new Error(r.status); out.className="fmsg ok"; out.textContent=t["ct.sent"]; form.reset(); })
        .catch(function(){ mailtoFallback(); })
        .then(function(){ btn.disabled=false; });
    }else{ mailtoFallback(); }
  });
}

/* ================= Hover micro-interactions ================= */
var fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function bindHover(){
  if(!fine) return;
  $$(".svc").forEach(function(c){
    c.addEventListener("pointermove",function(e){ var r=c.getBoundingClientRect(); c.style.setProperty("--mx",(e.clientX-r.left)+"px"); c.style.setProperty("--my",(e.clientY-r.top)+"px"); });
  });
  if(reduce) return;
  $$(".cl, .pillar").forEach(function(c){
    c.addEventListener("pointermove",function(e){ var r=c.getBoundingClientRect(); var x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      c.style.transform="perspective(900px) rotateX("+(-y*7)+"deg) rotateY("+(x*9)+"deg) translateY(-4px)"; });
    c.addEventListener("pointerleave",function(){ c.style.transform=""; });
  });
}

/* ================= Mobile menu ================= */
var menuBtn = $(".menu-btn");
function setMenu(open){
  document.body.classList.toggle("menu-open",open);
  if(menuBtn) menuBtn.setAttribute("aria-expanded",String(open));
  if(lenis){ open ? lenis.stop() : lenis.start(); }
}
if(menuBtn){
  menuBtn.addEventListener("click",function(){ setMenu(!document.body.classList.contains("menu-open")); });
  $$(".mnav a").forEach(function(a){ a.addEventListener("click",function(){ setMenu(false); }); });
  document.addEventListener("keydown",function(e){ if(e.key==="Escape") setMenu(false); });
}

/* ================= Network canvas (heroes) ================= */
var cv=document.getElementById("net"), heroVisible=true;
if(cv){
  var ctx=cv.getContext("2d"), W=0,H=0,DPR=Math.min(window.devicePixelRatio||1,2),nodes=[],pulses=[],mouse={x:-9999,y:-9999,tx:-9999,ty:-9999},par={x:0,y:0};
  var density = +(cv.dataset.density||14000), LINK=150;
  var sizeCanvas=function(){
    var r=cv.getBoundingClientRect(); W=r.width; H=r.height;
    cv.width=W*DPR; cv.height=H*DPR; ctx.setTransform(DPR,0,0,DPR,0,0);
    var count=Math.round(Math.min(110,Math.max(36,W*H/density)));
    nodes=[];
    for(var i=0;i<count;i++) nodes.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,r:Math.random()*1.6+.6,z:Math.random()*.8+.2});
  };
  var spawnPulse=function(){
    var a=nodes[(Math.random()*nodes.length)|0], best=null, bd=1e9;
    nodes.forEach(function(b){ var d=Math.hypot(a.x-b.x,a.y-b.y); if(b!==a&&d<160&&d<bd&&d>40){ bd=d; best=b; } });
    if(best) pulses.push({a:a,b:best,t:0});
  };
  var draw=function(){
    ctx.clearRect(0,0,W,H);
    mouse.x+=(mouse.tx-mouse.x)*.08; mouse.y+=(mouse.ty-mouse.y)*.08;
    var i,j,n,a,b,d,dx,dy;
    for(i=0;i<nodes.length;i++){
      n=nodes[i];
      if(!reduce){ n.x+=n.vx; n.y+=n.vy; }
      if(n.x<-20) n.x=W+20; if(n.x>W+20) n.x=-20; if(n.y<-20) n.y=H+20; if(n.y>H+20) n.y=-20;
      dx=n.x-mouse.x; dy=n.y-mouse.y; d=Math.hypot(dx,dy)||1;
      n.px=n.x+par.x*n.z*30+(d<180?dx/d*(180-d)*.18:0);
      n.py=n.y+par.y*n.z*30+(d<180?dy/d*(180-d)*.18:0);
    }
    for(i=0;i<nodes.length;i++){ a=nodes[i];
      for(j=i+1;j<nodes.length;j++){ b=nodes[j]; d=Math.hypot(a.px-b.px,a.py-b.py);
        if(d<LINK){ ctx.strokeStyle="rgba(92,155,255,"+((1-d/LINK)*.22*Math.min(a.z,b.z)*1.4)+")"; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(a.px,a.py); ctx.lineTo(b.px,b.py); ctx.stroke(); }
      }
    }
    for(i=0;i<nodes.length;i++){ n=nodes[i]; ctx.fillStyle="rgba(180,205,255,"+(.35+n.z*.55)+")"; ctx.beginPath(); ctx.arc(n.px,n.py,n.r*n.z+.4,0,6.283); ctx.fill(); }
    for(i=pulses.length-1;i>=0;i--){ var p=pulses[i]; p.t+=.018; if(p.t>=1){ pulses.splice(i,1); continue; }
      var x=p.a.px+(p.b.px-p.a.px)*p.t, y=p.a.py+(p.b.py-p.a.py)*p.t, g=ctx.createRadialGradient(x,y,0,x,y,10);
      g.addColorStop(0,"rgba(130,180,255,.95)"); g.addColorStop(1,"rgba(92,155,255,0)"); ctx.fillStyle=g; ctx.beginPath(); ctx.arc(x,y,10,0,6.283); ctx.fill(); }
    if(!reduce&&Math.random()<.06&&pulses.length<14) spawnPulse();
  };
  var loop=function(){ if(heroVisible) draw(); if(!reduce) requestAnimationFrame(loop); };
  sizeCanvas(); draw(); loop();
  var rt; window.addEventListener("resize",function(){ clearTimeout(rt); rt=setTimeout(function(){ sizeCanvas(); if(reduce) draw(); },150); });
  var host=cv.parentElement;
  host.addEventListener("pointermove",function(e){ var r=cv.getBoundingClientRect(); mouse.tx=e.clientX-r.left; mouse.ty=e.clientY-r.top; par.x=e.clientX/window.innerWidth-.5; par.y=e.clientY/window.innerHeight-.5; });
  host.addEventListener("pointerleave",function(){ mouse.tx=-9999; mouse.ty=-9999; });
}


/* ================= 3D risk globe (AI locates a risk and cuts it by 99%) ================= */
(function(){
  var fig=document.getElementById("riskGlobe"); if(!fig) return;
  var cvs=fig.querySelector("canvas"), c=cvs.getContext("2d");
  var elState=fig.querySelector('[data-risk="state"]'), elPct=fig.querySelector('[data-risk="pct"]'), elBar=fig.querySelector('[data-risk="bar"]');
  var S=0, DPR=Math.min(window.devicePixelRatio||1,2), pts=[], N=340, visible=true, t0=performance.now(), lastPhase="";
  for(var i=0;i<N;i++){ var y=1-(i/(N-1))*2, r=Math.sqrt(1-y*y), th=i*2.39996; pts.push([Math.cos(th)*r,y,Math.sin(th)*r]); }
  /* meridians / parallels for the wireframe */
  var rings=[]; for(var k=-2;k<=2;k++){ var lat=k*0.5, ring=[]; for(var a=0;a<=64;a++){ var ang=a/64*6.283; ring.push([Math.cos(ang)*Math.cos(lat),Math.sin(lat),Math.sin(ang)*Math.cos(lat)]); } rings.push(ring); }
  for(var m=0;m<6;m++){ var lon=m/6*3.1416, ring2=[]; for(var b=0;b<=64;b++){ var an=b/64*6.283; ring2.push([Math.cos(an)*Math.cos(lon),Math.sin(an),Math.cos(an)*Math.sin(lon)]); } rings.push(ring2); }
  var HOT=[0.32,0.28,0.9]; /* fixed front-right point where the risk sits */
  var hl=Math.hypot(HOT[0],HOT[1],HOT[2]); HOT=[HOT[0]/hl,HOT[1]/hl,HOT[2]/hl];
  function size(){ var w=cvs.getBoundingClientRect().width; if(!w) return; S=w; cvs.width=w*DPR; cvs.height=w*DPR; c.setTransform(DPR,0,0,DPR,0,0); }
  size(); window.addEventListener("resize",size);
  function rot(p,ay,ax){ var x=p[0]*Math.cos(ay)+p[2]*Math.sin(ay), z=-p[0]*Math.sin(ay)+p[2]*Math.cos(ay), y=p[1]*Math.cos(ax)-z*Math.sin(ax); z=p[1]*Math.sin(ax)+z*Math.cos(ax); return [x,y,z]; }
  function proj(p,R){ var f=2.6/(2.6-p[2]); return [S/2+p[0]*R*f, S/2-p[1]*R*f, p[2]]; }
  function lerp(a,b,t){ return a+(b-a)*t; }
  function ease(t){ return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2; }
  function setHud(phase,pct){
    var t=T[lang]; if(phase!==lastPhase){ elState.textContent=t["risk."+phase]; lastPhase=phase; fig.classList.toggle("safe",phase==="done"); }
    elPct.textContent=Math.round(pct)+" %"; elBar.style.transform="scaleX("+Math.max(.01,pct/100)+")";
  }
  window.__riskHud=function(){ lastPhase=""; };
  var CYCLE=9;
  function frame(now){
    if(visible&&S){
      var t=reduce?7:((now-t0)/1000)%CYCLE;
      var ay=reduce?0.6:(now-t0)/1000*0.45, ax=-0.35, R=S*0.3;
      /* phases */
      var phase, pct, lock=0, cut=0, scan=0;
      if(t<2.4){ phase="scan"; pct=100; scan=t/2.4; }
      else if(t<3.6){ phase="lock"; pct=100; lock=ease((t-2.4)/1.2); scan=1; }
      else if(t<6.4){ phase="cut"; lock=1; cut=ease((t-3.6)/2.8); pct=lerp(100,1,cut); }
      else { phase="done"; lock=1; cut=1; pct=1; }
      setHud(phase,pct);
      c.clearRect(0,0,S,S);
      /* halo */
      var g=c.createRadialGradient(S/2,S/2,R*.2,S/2,S/2,R*1.35); g.addColorStop(0,"rgba(31,95,214,.10)"); g.addColorStop(1,"rgba(31,95,214,0)");
      c.fillStyle=g; c.fillRect(0,0,S,S);
      /* AI agent: orbits the globe, then flies to the risk and holds it in its beam */
      var oa=(now-t0)/1000*0.8, orb=[Math.cos(oa)*1.2,Math.sin(oa)*0.4,Math.sin(oa)*1.15];
      var HO=[HOT[0]*1.42,HOT[1]*1.42+0.12,HOT[2]*1.42], k=phase==="scan"?0:lock;
      var A3=[lerp(orb[0],HO[0],k),lerp(orb[1],HO[1],k),lerp(orb[2],HO[2],k)], A=proj(A3,R);
      var al=Math.hypot(A3[0],A3[1],A3[2]), tgt=phase==="scan"?proj([A3[0]/al,A3[1]/al,A3[2]/al],R):proj(HOT,R);
      var beamCol=phase==="scan"?"92,155,255":(cut>=1?"30,158,90":(cut>0?"92,155,255":"217,45,32"));
      function orbitPath(){ c.setLineDash([2,5]); c.strokeStyle="rgba(31,95,214,.22)"; c.lineWidth=1; c.beginPath();
        for(var o=0;o<=72;o++){ var aa=o/72*6.283, q=proj([Math.cos(aa)*1.2,Math.sin(aa)*0.4,Math.sin(aa)*1.15],R); if(o===0) c.moveTo(q[0],q[1]); else c.lineTo(q[0],q[1]); }
        c.stroke(); c.setLineDash([]); }
      function drawAgent(){
        var front=A[2]>=0||k>0.5, a0=front?1:.45;
        /* beam */
        if(front){ var dx=tgt[0]-A[0], dy=tgt[1]-A[1], dl=Math.hypot(dx,dy)||1, nx=-dy/dl, ny=dx/dl, w=phase==="scan"?R*.22:R*.12;
          var bg=c.createLinearGradient(A[0],A[1],tgt[0],tgt[1]); bg.addColorStop(0,"rgba("+beamCol+",.55)"); bg.addColorStop(1,"rgba("+beamCol+",.06)");
          c.fillStyle=bg; c.beginPath(); c.moveTo(A[0],A[1]); c.lineTo(tgt[0]+nx*w,tgt[1]+ny*w); c.lineTo(tgt[0]-nx*w,tgt[1]-ny*w); c.closePath(); c.fill(); }
        /* body: a small AI bot head */
        var sz=Math.max(9,S*0.036)*(0.85+0.15*((A[2]+1.4)/2.8));
        var pr2=(now/1000*1.4)%1;
        c.strokeStyle="rgba(92,155,255,"+((1-pr2)*.6*a0)+")"; c.lineWidth=1.5; c.beginPath(); c.arc(A[0],A[1],sz*1.25+pr2*sz*1.4,0,6.283); c.stroke();
        c.globalAlpha=a0;
        c.fillStyle="#0B1424"; c.strokeStyle="#5C9BFF"; c.lineWidth=2;
        var rw=sz*1.15, rh=sz*0.95, rx=A[0]-rw, ry=A[1]-rh, rr=sz*.45;
        c.beginPath(); c.moveTo(rx+rr,ry); c.lineTo(rx+2*rw-rr,ry); c.quadraticCurveTo(rx+2*rw,ry,rx+2*rw,ry+rr); c.lineTo(rx+2*rw,ry+2*rh-rr); c.quadraticCurveTo(rx+2*rw,ry+2*rh,rx+2*rw-rr,ry+2*rh); c.lineTo(rx+rr,ry+2*rh); c.quadraticCurveTo(rx,ry+2*rh,rx,ry+2*rh-rr); c.lineTo(rx,ry+rr); c.quadraticCurveTo(rx,ry,rx+rr,ry); c.closePath(); c.fill(); c.stroke();
        c.beginPath(); c.moveTo(A[0],ry); c.lineTo(A[0],ry-sz*.55); c.stroke();
        c.fillStyle="rgb("+beamCol+")"; c.beginPath(); c.arc(A[0],ry-sz*.62,sz*.18,0,6.283); c.fill();
        var blink=((now/1000)%3.2)<0.12?0.15:1;
        c.fillStyle="#9EC2FF"; c.beginPath(); c.ellipse(A[0]-sz*.42,A[1],sz*.17,sz*.22*blink,0,0,6.283); c.ellipse(A[0]+sz*.42,A[1],sz*.17,sz*.22*blink,0,0,6.283); c.fill();
        c.globalAlpha=1;
      }
      orbitPath();
      if(A[2]<0&&k<0.5) drawAgent();
      /* wireframe */
      c.lineWidth=1;
      rings.forEach(function(ring){
        c.beginPath();
        ring.forEach(function(p,idx){ var q=proj(rot(p,ay,ax),R); if(idx===0) c.moveTo(q[0],q[1]); else c.lineTo(q[0],q[1]); });
        c.strokeStyle="rgba(31,95,214,.10)"; c.stroke();
      });
      /* points, back to front */
      var pr=pts.map(function(p){ return proj(rot(p,ay,ax),R); }).sort(function(a,b){ return a[2]-b[2]; });
      var H=proj(HOT,R), heat=1-cut;
      pr.forEach(function(q){
        var depth=(q[2]+1)/2, d=Math.hypot(q[0]-H[0],q[1]-H[1])/R;
        var infected = d<0.55 && q[2]>0 ? (1-d/0.55)*heat : 0;
        var rr=Math.round(lerp(31,217,infected)), gg=Math.round(lerp(95,45,infected)), bb=Math.round(lerp(214,32,infected));
        c.fillStyle="rgba("+rr+","+gg+","+bb+","+(0.18+depth*0.75)+")";
        c.beginPath(); c.arc(q[0],q[1],(0.8+depth*1.7)*(1+infected*.6),0,6.283); c.fill();
      });
      /* scanning plane */
      if(phase==="scan"){
        var yy=S/2+R*lerp(-1.05,1.05,scan);
        var sg=c.createLinearGradient(0,yy-18,0,yy+18); sg.addColorStop(0,"rgba(92,155,255,0)"); sg.addColorStop(.5,"rgba(92,155,255,.35)"); sg.addColorStop(1,"rgba(92,155,255,0)");
        c.fillStyle=sg; c.fillRect(S/2-R*1.1,yy-18,R*2.2,36);
        c.strokeStyle="rgba(31,95,214,.7)"; c.beginPath(); c.ellipse(S/2,yy,R*Math.sqrt(Math.max(0,1-Math.pow((yy-S/2)/R,2)))*1.05,R*.12,0,0,6.283); c.stroke();
      }
      /* hotspot pulse */
      var pulse=(now/1000*1.6)%1;
      if(heat>0.02){
        c.fillStyle="rgba(217,45,32,"+(0.9*heat)+")"; c.beginPath(); c.arc(H[0],H[1],lerp(3,7,heat),0,6.283); c.fill();
        c.strokeStyle="rgba(217,45,32,"+((1-pulse)*0.7*heat)+")"; c.lineWidth=2; c.beginPath(); c.arc(H[0],H[1],8+pulse*R*.35*heat,0,6.283); c.stroke();
      }else{
        c.fillStyle="#1E9E5A"; c.beginPath(); c.arc(H[0],H[1],4,0,6.283); c.fill();
        c.strokeStyle="rgba(30,158,90,.5)"; c.lineWidth=2; c.beginPath(); c.arc(H[0],H[1],10,0,6.283); c.stroke();
      }
      /* targeting brackets */
      if(lock>0){
        var box=lerp(R*1.1,R*.2,lock), col=cut>=1?"30,158,90":(cut>0?"31,95,214":"217,45,32");
        c.strokeStyle="rgba("+col+","+(0.25+lock*.75)+")"; c.lineWidth=2;
        var L=box*.35;
        [[-1,-1],[1,-1],[1,1],[-1,1]].forEach(function(s2){
          var cx=H[0]+s2[0]*box, cy=H[1]+s2[1]*box;
          c.beginPath(); c.moveTo(cx,cy-s2[1]*L); c.lineTo(cx,cy); c.lineTo(cx-s2[0]*L,cy); c.stroke();
        });
        c.setLineDash([3,4]); c.strokeStyle="rgba("+col+",.45)"; c.lineWidth=1;
        c.beginPath(); c.moveTo(H[0]-box*1.5,H[1]); c.lineTo(H[0]+box*1.5,H[1]); c.moveTo(H[0],H[1]-box*1.5); c.lineTo(H[0],H[1]+box*1.5); c.stroke(); c.setLineDash([]);
      }
      if(!(A[2]<0&&k<0.5)) drawAgent();
    }
    if(!reduce) requestAnimationFrame(frame);
  }
  if("IntersectionObserver" in window){ new IntersectionObserver(function(e){ visible=e[0].isIntersecting; },{rootMargin:"100px"}).observe(fig); }
  requestAnimationFrame(frame);
})();

/* ================= Rotating service names in the teaser ================= */
(function(){
  var box=document.getElementById("rot"); if(!box||reduce||!window.gsap) return;
  var i=0;
  function prep(){ var it=box.children; if(!it.length) return; gsap.set(it,{yPercent:110,opacity:1}); if(it[0]) gsap.set(it[0],{yPercent:0}); }
  prep();
  setInterval(function(){
    var items=box.children; if(items.length<2) return;
    var cur=items[i%items.length], nxt=items[(i+1)%items.length]; i++;
    cur.setAttribute("aria-hidden","true"); nxt.removeAttribute("aria-hidden");
    gsap.to(cur,{yPercent:-110,duration:.7,ease:"power3.inOut"});
    gsap.fromTo(nxt,{yPercent:110},{yPercent:0,duration:.7,ease:"power3.inOut"});
  },2200);
  window.__rotReset=function(){ i=0; prep(); };
})();

/* ================= Language switch ================= */
var anim=null, lenis=null;
$$(".lang button").forEach(function(b){
  b.addEventListener("click",function(){
    if(b.dataset.lang===lang) return;
    lang=b.dataset.lang; try{ localStorage.setItem("tamis-lang",lang); }catch(e){}
    if(anim) anim.teardown();
    render();
    if(window.__riskHud) window.__riskHud();
    if(window.__rotReset) window.__rotReset();
    if(anim) anim.setup(false);
  });
});

render();
if(window.__rotReset) window.__rotReset();

/* jump to a hash target that only exists after render (e.g. services.html#risques) */
function jumpToHash(){
  var h=location.hash; if(!h||h.length<2) return;
  var t=document.getElementById(h.slice(1)); if(!t) return;
  setTimeout(function(){ if(lenis) lenis.scrollTo(t,{offset:-90,immediate:true}); else t.scrollIntoView(); if(window.ScrollTrigger) window.ScrollTrigger.refresh(); },60);
}

var hdr=$("#hdr");
window.addEventListener("scroll",function(){ hdr.classList.toggle("scrolled",window.scrollY>40); },{passive:true});

/* ================= GSAP ================= */
var G=window.gsap, ST=window.ScrollTrigger;
if(!G||!ST||reduce){ jumpToHash(); return; }
G.registerPlugin(ST);
document.documentElement.classList.add("js-anim");

if(window.Lenis){
  try{
    lenis=new window.Lenis({duration:1.15,smoothWheel:true});
    lenis.on("scroll",ST.update);
    G.ticker.add(function(t){ lenis.raf(t*1000); });
    G.ticker.lagSmoothing(0);
    document.addEventListener("click",function(e){
      var a=e.target.closest('a[href^="#"]'); if(!a) return;
      var id=a.getAttribute("href"); var t=id==="#top"?0:document.querySelector(id); if(t===null) return;
      e.preventDefault(); lenis.scrollTo(t,{offset:id==="#top"?0:-90}); if(a.classList.contains("skip")){ var m=document.getElementById("top"); if(m){ m.setAttribute("tabindex","-1"); m.focus({preventScroll:true}); } }
    });
  }catch(e){ lenis=null; }
}

if(fine){
  $$(".magnetic").forEach(function(btn){
    var xTo=G.quickTo(btn,"x",{duration:.5,ease:"power3"}), yTo=G.quickTo(btn,"y",{duration:.5,ease:"power3"});
    btn.addEventListener("pointermove",function(e){ var r=btn.getBoundingClientRect(); xTo((e.clientX-r.left-r.width/2)*.3); yTo((e.clientY-r.top-r.height/2)*.4); });
    btn.addEventListener("pointerleave",function(){ xTo(0); yTo(0); });
  });
}

var track=document.getElementById("marquee");
if(track){
  var mx=0, speed=1, dir=1;
  G.ticker.add(function(){ var w=track.firstElementChild.offsetWidth; if(!w) return; mx-=(.6*speed)*dir; if(mx<=-w) mx+=w; if(mx>0) mx-=w; G.set(track,{x:mx}); speed+=(1-speed)*.05; });
  ST.create({onUpdate:function(s){ var v=s.getVelocity(); dir=v<0?-1:1; speed=Math.min(8,1+Math.abs(v)/300); }});
}

/* ---------- Entrance ---------- */
function heroEntrance(){
  var tl=G.timeline();
  tl.from(".hero-title .line>span",{yPercent:115,rotate:4,duration:1.25,ease:"expo.out",stagger:.09})
    .from(".hero-fade",{y:28,opacity:0,duration:1,ease:"power3.out",stagger:.1},"-=.9");
  if(cv) tl.from(cv,{opacity:0,scale:1.08,duration:2.2,ease:"power2.out"},0);
  if($("#glow")) tl.from("#glow",{opacity:0,scale:.6,duration:2.4,ease:"power2.out"},0);
  tl.from(".hdr",{yPercent:-100,opacity:0,duration:1,ease:"power3.out"},.2);
  return tl;
}
var seenLoader=false; try{ seenLoader=sessionStorage.getItem("tamis-intro")==="1"; sessionStorage.setItem("tamis-intro","1"); }catch(e){}
if(seenLoader&&$("#loader")){ $("#loader").style.display="none"; heroEntrance().eventCallback("onComplete",jumpToHash); }
else if($("#loader")){
  if(lenis) lenis.stop();
  var tl=G.timeline({onComplete:function(){ if(lenis) lenis.start(); jumpToHash(); }});
  tl.from(".loader img",{opacity:0,scale:.8,duration:.8,ease:"power3.out"})
    .from(".loader-word span",{yPercent:120,opacity:0,stagger:.06,duration:.7,ease:"power3.out"},"-=.4")
    .to(".loader-bar i",{scaleX:1,duration:1.1,ease:"power2.inOut"},"-=.5")
    .to(".loader-in",{y:-30,opacity:0,duration:.6,ease:"power2.in"})
    .to("#loader",{clipPath:"inset(0 0 100% 0)",duration:1.1,ease:"expo.inOut"},"-=.15")
    .set("#loader",{display:"none"})
    .add(heroEntrance(),"-=.75");
}else{
  /* sub-pages: a short curtain then the title */
  var cur=document.createElement("div");
  cur.setAttribute("aria-hidden","true");
  cur.style.cssText="position:fixed;inset:0;z-index:99;background:#06182C;pointer-events:none";
  document.body.appendChild(cur);
  G.timeline({onComplete:function(){ cur.remove(); jumpToHash(); }})
    .to(cur,{clipPath:"inset(0 0 100% 0)",duration:1,ease:"expo.inOut",delay:.1})
    .add(heroEntrance(),"-=.55");
}

/* ---------- Scroll animations independent of language ---------- */
var heroEl=$(".hero, .phero");
if(heroEl){
  G.to("#heroIn",{yPercent:-16,opacity:.15,ease:"none",scrollTrigger:{trigger:heroEl,start:"top top",end:"bottom top",scrub:true}});
  if(cv){ G.to(cv,{scale:1.15,ease:"none",scrollTrigger:{trigger:heroEl,start:"top top",end:"bottom top",scrub:true}});
    ST.create({trigger:heroEl,start:"top top",end:"bottom top",onToggle:function(s){ heroVisible=s.isActive||window.scrollY<10; }}); }
}
if($(".outline-word")) G.fromTo(".outline-word",{xPercent:0},{xPercent:-30,ease:"none",scrollTrigger:{trigger:heroEl,start:"top top",end:"bottom top",scrub:true}});
$$(".sheet").forEach(function(s){
  G.fromTo(s,{borderTopLeftRadius:48,borderTopRightRadius:48,scaleX:.94},{borderTopLeftRadius:0,borderTopRightRadius:0,scaleX:1,ease:"none",scrollTrigger:{trigger:s,start:"top bottom",end:"top 35%",scrub:true}});
});
if($("#fPhoto")){
  G.fromTo("#fPhoto",{clipPath:"inset(18% 10% 18% 10% round 28px)"},{clipPath:"inset(0% 0% 0% 0% round 28px)",ease:"none",scrollTrigger:{trigger:"#fPhoto",start:"top 90%",end:"top 30%",scrub:true}});
  G.fromTo("#fImg",{yPercent:5},{yPercent:0,ease:"none",scrollTrigger:{trigger:"#fPhoto",start:"top bottom",end:"bottom top",scrub:true}});
}
$$(".of").forEach(function(o,i){
  G.from(o,{y:80,opacity:0,duration:1.1,ease:"power3.out",delay:i*.12,scrollTrigger:{trigger:o.parentElement,start:"top 85%"}});
  G.fromTo(o.querySelector(".of-coord"),{yPercent:40},{yPercent:-20,ease:"none",scrollTrigger:{trigger:o,start:"top bottom",end:"bottom top",scrub:true}});
});
if($("#ring")) G.fromTo("#ring",{rotate:-30,scale:.8},{rotate:30,scale:1.05,ease:"none",scrollTrigger:{trigger:"#ring",start:"top bottom",end:"bottom top",scrub:true}});
if($(".phone")){
  G.fromTo(".phone",{y:80,rotate:-6},{y:-40,rotate:3,ease:"none",scrollTrigger:{trigger:".phone",start:"top bottom",end:"bottom top",scrub:true}});
}

/* ---------- Language-dependent animations (rebuilt on switch) ---------- */
function stagger(sel,trigger,vars){ if(!$(sel)) return; G.from(sel,Object.assign({y:60,opacity:0,duration:1,ease:"power3.out",stagger:.08,scrollTrigger:{trigger:trigger,start:"top 85%"}},vars||{})); }
anim={
  ctx:null,
  setup:function(first){
    this.ctx=G.context(function(){
      if($("#manText")){
        G.from("#manText .w",{y:24,opacity:0,filter:"blur(6px)",duration:.9,ease:"power3.out",stagger:.025,scrollTrigger:{trigger:"#manText",start:"top 85%"}});
        G.from("#tease > *",{y:30,opacity:0,duration:.9,ease:"power3.out",stagger:.12,scrollTrigger:{trigger:"#tease",start:"top 92%"}});
        var cards=$$("#stage .card3d"), kws=$$("#manText .kw"), accs=$$("#manText .accw"), dotEls=$$("#stageDots i");
        var setActive=function(i){
          kws.forEach(function(k,j){ k.classList.toggle("on",j===i); });
          accs.forEach(function(a){ a.classList.toggle("on",i===cards.length-1); });
          dotEls.forEach(function(d,j){ d.classList.toggle("on",j===i); });
        };
        /* Autoplay: the cards flip in 3D one after another on their own */
        document.getElementById("manifesto").classList.add("has-stage");
        $("#stage").classList.add("is3d"); $("#stageDots").classList.add("on");
        G.set(cards,{rotateY:-80,rotateX:8,z:-260,xPercent:25,opacity:0});
        G.set(cards[0],{rotateY:0,rotateX:0,z:0,xPercent:0,opacity:1});
        setActive(0);
        var cur=0, seen=true;
        var show=function(n){
          if(n===cur) return;
          var a=cards[cur], b=cards[n];
          G.to(a,{rotateY:75,rotateX:-6,z:-260,xPercent:-25,opacity:0,duration:1,ease:"power2.inOut"});
          G.fromTo(b,{rotateY:-80,rotateX:8,z:-260,xPercent:25,opacity:0},{rotateY:0,rotateX:0,z:0,xPercent:0,opacity:1,duration:1,ease:"power2.inOut"});
          cur=n; setActive(n);
        };
        dotEls.forEach(function(d,j){ d.style.cursor="pointer"; d.addEventListener("click",function(){ show(j); }); });
        anim.timer=setInterval(function(){ if(seen&&!document.hidden) show((cur+1)%cards.length); },3400);
        if("IntersectionObserver" in window){ anim.io=new IntersectionObserver(function(e){ seen=e[0].isIntersecting; }); anim.io.observe($("#stage")); }
        if(fine){
          $$("#stage .card3d").forEach(function(c){
            c.addEventListener("pointermove",function(e){ var r=c.getBoundingClientRect(); c.style.setProperty("--gx",(e.clientX-r.left)+"px"); c.style.setProperty("--gy",(e.clientY-r.top)+"px"); });
          });
        }
      }
      $$(".sec-head, .services-head, .f-text, [data-reveal]").forEach(function(h){
        var kids=Array.prototype.filter.call(h.querySelectorAll(":scope > *, :scope > div > *"),function(el){ return el.tagName!=="H2"&&el.tagName!=="DIV"; });
        if(kids.length) G.from(kids,{y:40,opacity:0,duration:1,ease:"power3.out",stagger:.08,scrollTrigger:{trigger:h,start:"top 85%"}});
        var h2=h.querySelector("h2");
        if(h2) G.from(h2.querySelectorAll(".wm>span"),{yPercent:110,rotate:3,duration:1.1,ease:"expo.out",stagger:.045,scrollTrigger:{trigger:h2,start:"top 88%"}});
      });
      stagger("#track .svc","#track");
      stagger("#clGrid .cl","#clGrid",{y:70,stagger:.1});
      stagger("#creds .cred","#creds",{x:-30,y:0,duration:.8});
      stagger("#pillars .pillar","#pillars",{y:70,stagger:.1});
      stagger("#roles .role","#roles",{y:40,stagger:.06});
      stagger("#how .pstep","#how",{y:60,stagger:.1});
      stagger("#pricing .price","#pricing",{y:60,stagger:.12});
      stagger(".ways .way",".ways",{x:-40,y:0,stagger:.08});
      stagger("#contactForm",".ct-grid",{y:60});
      $$("#principles .pr").forEach(function(r){ G.from(r,{y:50,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 90%"}}); });
      $$(".sd").forEach(function(s){ G.from(s.children,{y:40,opacity:0,duration:.9,ease:"power3.out",stagger:.07,scrollTrigger:{trigger:s,start:"top 80%"}}); });
      if($("#pathSteps")){
        var mm=anim.mm=G.matchMedia();
        mm.add("(min-width:1001px)",function(){ G.to(".path-line i",{scaleX:1,ease:"none",scrollTrigger:{trigger:".path",start:"top 75%",end:"bottom 55%",scrub:true}}); });
        mm.add("(max-width:1000px)",function(){ G.to(".path-line i",{scaleY:1,ease:"none",scrollTrigger:{trigger:".path",start:"top 75%",end:"bottom 55%",scrub:true}}); });
        stagger("#pathSteps .step",".path",{y:40,stagger:.15});
      }
      if($("#svcNav")){
        $$(".sd").forEach(function(s){
          ST.create({trigger:s,start:"top 45%",end:"bottom 45%",onToggle:function(st){ if(st.isActive){ $$("#svcNav a").forEach(function(a){ a.classList.toggle("on",a.dataset.sid===s.id); }); } }});
        });
      }
      $$(".cta-title").forEach(function(h){ G.from(h.querySelectorAll(".line>span"),{yPercent:115,duration:1.2,ease:"expo.out",stagger:.1,scrollTrigger:{trigger:h,start:"top 85%"}}); });
      if(!first) G.from(".hero-title .line>span",{yPercent:115,duration:.9,ease:"expo.out",stagger:.06});
    });
    ST.refresh();
  },
  teardown:function(){ if(this.timer){ clearInterval(this.timer); this.timer=null; } if(this.io){ this.io.disconnect(); this.io=null; } if(this.mm2){ this.mm2.revert(); this.mm2=null; } if(this.mm){ this.mm.revert(); this.mm=null; } if(this.ctx) this.ctx.revert(); }
};
anim.setup(true);
window.addEventListener("load",function(){ ST.refresh(); });
})();
