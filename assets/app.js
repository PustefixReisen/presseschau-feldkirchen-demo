const navButtons=[...document.querySelectorAll('.nav-btn')];
function showPanel(name,scroll=true){
 navButtons.forEach(b=>b.classList.toggle('active',b.dataset.target===name));
 document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('active',p.id==='panel-'+name));
 if(scroll) window.scrollTo({top:0,behavior:'smooth'});
}
navButtons.forEach(b=>b.addEventListener('click',()=>showPanel(b.dataset.target)));

let currentPlace='';
const contributionCards=[...document.querySelectorAll('.contribution')];
function filterContrib(){
 const q=document.getElementById('search-press').value.toLowerCase().trim();
 let shown=0;
 contributionCards.forEach(c=>{
   const okPlace=!currentPlace || c.dataset.place===currentPlace;
   const okQ=!q || c.dataset.search.includes(q);
   const ok=okPlace&&okQ;
   c.style.display=ok?'':'none'; if(ok) shown++;
 });
 document.getElementById('empty-contrib').style.display=shown?'none':'block';
}
document.getElementById('search-press').addEventListener('input',filterContrib);
document.querySelectorAll('.filter-chip').forEach(b=>b.addEventListener('click',()=>{
 currentPlace=b.dataset.place;
 document.querySelectorAll('.filter-chip').forEach(x=>x.classList.toggle('active',x===b));
 filterContrib();
}));

function wireSearch(inputId, selector, emptyId){
 const cards=[...document.querySelectorAll(selector)];
 document.getElementById(inputId).addEventListener('input',e=>{
   const q=e.target.value.toLowerCase().trim(); let shown=0;
   cards.forEach(c=>{const ok=!q||c.dataset.search.includes(q); c.style.display=ok?'':'none'; if(ok)shown++;});
   document.getElementById(emptyId).style.display=shown?'none':'block';
 });
}
wireSearch('search-sessions','.session-card','empty-sessions');
wireSearch('search-topics','.topic-card','empty-topics');

document.querySelectorAll('.archive-jump').forEach(b=>b.addEventListener('click',()=>{
 showPanel('presseschau');
 currentPlace='';
 document.querySelectorAll('.filter-chip').forEach(x=>x.classList.toggle('active',x.dataset.place===''));
 const month=b.dataset.month;
 const cards=contributionCards.filter(c=>{
   const date=c.querySelector('.date')?.textContent||'';
   return true;
 });
 const ids={"2026-08":["R059","R050","C057","R041","R049","R048","R040","R039"],"2026-07":["R037","R036","R067","R056","R047","R033"],"2026-06":["R034","R066","R032","R030"],"2026-05":["R063","R055","R029","R054"],"2026-04":["R031","C027","R065"],"2026-03":["R025","R024","R023","R026","C019"],"2026-02":["R021","R046","R018","R022"],"2026-01":["R017","R016","R015","R014","R013","R045","R044"],"2025-12":["R043","R053","R012"],"2025-11":["R011","R010"],"2025-10":["R009","R008","R007","R006","R064","R005","R004","R003"],"2025-09":["R002","R052","R042","R051","R001"]};
 contributionCards.forEach(c=>c.style.display=(ids[month]||[]).includes(c.id)?'':'none');
 document.getElementById('empty-contrib').style.display=(ids[month]||[]).length?'none':'block';
}));

document.querySelectorAll('.category-jump').forEach(b=>b.addEventListener('click',()=>{
 showPanel('presseschau');
 currentPlace='';
 document.querySelectorAll('.filter-chip').forEach(x=>x.classList.toggle('active',x.dataset.place===''));
 const cat=b.dataset.category;
 let shown=0;
 contributionCards.forEach(c=>{
   const ccat=c.querySelector('.category')?.textContent||'';
   const ok=ccat===cat; c.style.display=ok?'':'none'; if(ok)shown++;
 });
 document.getElementById('empty-contrib').style.display=shown?'none':'block';
}));

function openHashTarget(){
 const id=(location.hash||'').slice(1);
 if(!id) return;
 const el=document.getElementById(id);
 if(!el) return;
 if(id.startsWith('T')) showPanel('themen',false);
 else if(id.startsWith('S')) showPanel('sitzungen',false);
 else if(id.startsWith('R')||id.startsWith('C')) showPanel('presseschau',false);
 setTimeout(()=>el.scrollIntoView({behavior:'auto',block:'start'}),60);
}

window.addEventListener('hashchange',openHashTarget);
if(location.hash) setTimeout(openHashTarget,80);
