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

// Testfall T012: neue Zusammenhangs-, Handlungsspielraum- und Impulsregel.
(function updateA99TestTopic(){
 const card=document.getElementById('T012');
 if(!card) return;
 const date=card.querySelector('.date');
 if(date) date.textContent='Aktualisiert: 29. August 2026';
 const body=card.querySelector('.body');
 if(body) body.innerHTML='<p>Der Ausbau im Münchner Osten betrifft nicht nur zusätzliche Fahrstreifen auf der A99. Zum Bauabschnitt zwischen Kirchheim und Haar gehört als Kernstück der Umbau des Autobahnkreuzes München-Ost; zugleich soll die A94 im Umfeld des Kreuzes auf rund vier Kilometern erweitert und die Anschlussstellen Feldkirchen-Ost und Haar angepasst werden. Die M18/EBE4 ist unmittelbar mit diesem Gesamtvorhaben verknüpft: Weil sie A99 und A94 in ungünstigen Winkeln quert, müssen Straße und Kreuzungsbauwerke im Zuge der Erweiterung angepasst werden. Für eine dauerhafte Verlegung wurden mehrere Varianten untersucht; Feldkirchens Gemeinderat stimmte im Oktober 2025 der Planvariante 5 zu. Damit hängen Autobahnausbau, Umbau des Kreuzes, A94-Erweiterung und die künftige Führung der Kreisstraße planerisch und räumlich eng zusammen.</p>';
 const assessment=card.querySelector('.assessment p');
 if(assessment) assessment.textContent='Für Feldkirchen lohnt sich deshalb ein breiterer Blick als nur auf Fahrstreifenzahl oder Trassenverlauf. Gerade weil mehrere große Eingriffe zusammenkommen, stellt sich die Frage, welche kommunalen Gestaltungsmöglichkeiten in Planung und Begleitmaßnahmen noch genutzt werden können. Ökologische Qualität, Flächenverbrauch, Lärm, sichere Wege und die Vernetzung von Grün- und Mobilitätsstrukturen sollten dabei gemeinsam betrachtet werden. Solche Fragen legen noch keine fertige Lösung fest, können aber helfen, Verbesserungen früh in die weitere Planung einzubringen.';
 const details=[...card.querySelectorAll('details')];
 const questions=details.find(d=>d.querySelector('summary')?.textContent.includes('Offene Fragen'));
 if(questions){
   const summary=questions.querySelector('summary');
   if(summary) summary.textContent='Offene Fragen (5)';
   const ul=questions.querySelector('ul');
   if(ul) ul.innerHTML='<li>Wie verändern der Umbau des Autobahnkreuzes München-Ost, die Erweiterungen von A99 und A94 und die Verlegung der M18/EBE4 zusammen Flächenverbrauch, Zerschneidung, Lärm und Verkehrsströme rund um Feldkirchen?</li><li>Welche Möglichkeiten hat Feldkirchen im weiteren Planungs- und Genehmigungsverfahren, eigene Hinweise und Anforderungen zur Ausgestaltung des Gesamtvorhabens einzubringen?</li><li>Lässt sich die ohnehin notwendige Neuplanung nutzen, um Grün- und Biotopstrukturen besser zu verbinden, zusätzliche Bäume oder andere ökologische Begleitstrukturen vorzusehen und Eingriffe möglichst gering zu halten?</li><li>Wie können Rad- und Fußverbindungen sowie sichere Querungen so geplant werden, dass der vergrößerte Straßenkorridor bestehende Verbindungen nicht weiter erschwert und möglichst sogar Verbesserungen ermöglicht?</li><li>Welche Lösungen für Entwässerung, Versickerung und Begrünung können dazu beitragen, die Folgen großer versiegelter Flächen für Klima und Wasserhaushalt zu begrenzen?</li>';
 }
 const sources=details.find(d=>d.querySelector('summary')?.textContent.includes('Quellen'));
 if(sources){
   const summary=sources.querySelector('summary');
   if(summary) summary.textContent='Quellen (7)';
   const ul=sources.querySelector('ul');
   if(ul) ul.innerHTML='<li><a href="https://a99-ost.de/" rel="noopener noreferrer" target="_blank"><span class="source-date">29. August 2026</span> · Autobahn GmbH – Erweiterung der A99 Ost: Bau- und Planungsabschnitte</a></li><li><a href="https://a99-ost.de/varianten/" rel="noopener noreferrer" target="_blank"><span class="source-date">29. August 2026</span> · Autobahn GmbH – Variantenvergleich M18/EBE4</a></li><li><a href="https://www.merkur.de/lokales/muenchen-lk/haar-ort104496/wegen-a99-ausbau-kreisstrasse-bei-feldkirchen-wird-verlegt-so-soll-sie-verlaufen-93953871.html" rel="noopener noreferrer" target="_blank"><span class="source-date">25. September 2025</span> · Münchner Merkur – Wegen A99-Ausbau: Kreisstraße bei Feldkirchen wird verlegt</a></li><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/getfile.asp?id=71104&type=do" rel="noopener noreferrer" target="_blank"><span class="source-date">30. Oktober 2025</span> · RIS Feldkirchen – Beschlussvorlage 5055/2025</a></li><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/si0057.asp?__ksinr=1000" rel="noopener noreferrer" target="_blank"><span class="source-date">30. Oktober 2025</span> · RIS Feldkirchen – Sitzung 30.10.2025</a></li><li><a href="https://www.landkreis-muenchen.de/artikel/a99-autobahnring-b304-ersatzneubau-der-bruecke-an-der-anschlussstelle-haar-1/" rel="noopener noreferrer" target="_blank"><span class="source-date">4. August 2026</span> · Landkreis München / Autobahn GmbH – Ersatzneubau der Brücke an der Anschlussstelle Haar</a></li><li><a href="https://www.merkur.de/lokales/muenchen-lk/haar-ort104496/gesperrt-a99-bei-haar-wird-fuer-drei-tage-voll-94459646.html" rel="noopener noreferrer" target="_blank"><span class="source-date">27. August 2026</span> · Münchner Merkur – A99 bei Haar wird für drei Tage voll gesperrt</a></li>';
 }
 card.dataset.search=(card.textContent||'').toLowerCase();
})();
