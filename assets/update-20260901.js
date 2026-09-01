// Manueller FIB-Update-Lauf 2026-09-01: R069 / Datenabgleich R068-T010.
(function applyFibUpdate20260901(){
  const ref=document.getElementById('R059');
  if(ref && !document.getElementById('R069')){
    ref.insertAdjacentHTML('beforebegin', `<article class="card contribution" id="R069" data-place="Haar">
<div class="meta-row"><span class="date">31. August 2026</span><span class="place">Haar</span><span class="category">Mobilität &amp; Verkehr</span></div>
<h3>B304-Sanierung leitet Verkehr über Feldkirchen um</h3>
<p class="subtitle">Von Mitte September bis Mitte November führt die großräumige Umleitung Richtung München über die B471 und die Münchner Straße.</p>
<div class="body"><p>Das Staatliche Bauamt Freising erneuert vom 14. September bis voraussichtlich 16. November 2026 die B304 in der Ortsdurchfahrt Haar abschnittsweise. Während der gesamten Bauzeit ist die B304 für den überörtlichen Verkehr in Richtung München gesperrt. Die offizielle Umleitung führt ab der Kreuzung B304/B471 nach Norden über die B471 nach Feldkirchen, anschließend über die Münchner Straße an der Messe vorbei und über den Schatzbogen zurück zur B304. Damit kann die Baumaßnahme in Haar über mehrere Wochen zusätzlichen Durchgangsverkehr auf einer wichtigen Feldkirchner Verkehrsachse auslösen.</p></div>
<h4>Quellen</h4>
<ul class="sources"><li><a href="https://www.stbafs.bayern.de/service/medien/pressemitteilungen/2026/202-31/index.html" rel="noopener noreferrer" target="_blank">Staatliches Bauamt Freising – B304-Fahrbahn- und Lärmsanierung in Haar</a> · 31. August 2026</li><li><a href="https://www.merkur.de/lokales/muenchen-lk/haar-ort104496/b304-wird-acht-wochen-zur-einbahnstrasse-nur-stadtauswaerts-befahrbar-94467461.html" rel="noopener noreferrer" target="_blank">Münchner Merkur – B304 wird acht Wochen zur Einbahnstraße</a> · 31. August 2026</li></ul>
<section class="assessment"><h4>Unsere Einordnung</h4><p>Die Umleitung macht aus einer Straßenbaumaßnahme in Haar unmittelbar ein Feldkirchner Verkehrsthema. Für die achtwöchige Bauzeit sollte besonders im Blick bleiben, wie sich der zusätzliche überörtliche Verkehr auf die Münchner Straße, angrenzende Wohn- und Geschäftsbereiche, Busverkehr sowie sichere Fuß- und Radwege auswirkt. Wichtig ist außerdem eine frühzeitige und verständliche Information der Feldkirchner Bevölkerung über die angekündigte Verkehrsführung.</p></section>
</article>`);
  }

  const card=document.getElementById('R069');
  if(card) card.dataset.search=(card.textContent||'').toLowerCase();

  let placeFilter='';
  const search=document.getElementById('search-press');
  const updateVisibility=()=>{
    if(!card) return;
    const q=(search?.value||'').toLowerCase().trim();
    const okPlace=!placeFilter || placeFilter==='Haar';
    const okQ=!q || (card.dataset.search||'').includes(q);
    card.style.display=(okPlace&&okQ)?'':'none';
  };
  search?.addEventListener('input',updateVisibility);
  document.querySelectorAll('.filter-chip').forEach(b=>b.addEventListener('click',()=>{
    placeFilter=b.dataset.place||'';
    updateVisibility();
  }));
  document.querySelectorAll('.archive-jump').forEach(b=>b.addEventListener('click',()=>{
    placeFilter='';
    if(card) card.style.display=b.dataset.month==='2026-08'?'':'none';
  }));
  document.querySelectorAll('.category-jump').forEach(b=>b.addEventListener('click',()=>{
    placeFilter='';
    if(card) card.style.display=b.dataset.category==='Mobilität & Verkehr'?'':'none';
  }));

  const haarCount=document.querySelector('.filter-chip[data-place="Haar"] span');
  if(haarCount) haarCount.textContent='3';
  const aug=document.querySelector('.archive-jump[data-month="2026-08"]');
  if(aug) aug.textContent='August 2026 10 (10)';
  const note=document.querySelector('.demo-note');
  if(note) note.textContent='Stand 1. September 2026 · Öffentlicher Demonstrator';

  if(location.hash==='#R069'){
    const press=document.querySelector('.nav-btn[data-target="presseschau"]');
    press?.click();
    setTimeout(()=>card?.scrollIntoView({behavior:'auto',block:'start'}),60);
  }
})();
