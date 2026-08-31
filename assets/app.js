// Manueller FIB-Update-Lauf 2026-08-30: R068 / T010 / S021.
(function applyFibUpdate20260830(){
  const ref=document.getElementById('R049');
  if(ref && !document.getElementById('R068')){
    ref.insertAdjacentHTML('beforebegin', `<article class="card contribution" id="R068" data-place="Feldkirchen">
<div class="meta-row"><span class="date">20. August 2026</span><span class="place">Feldkirchen</span><span class="category">Infrastruktur &amp; Versorgung</span></div>
<h3>SB-Bäckerei in der Kirchenstraße erhält im dritten Anlauf Zustimmung</h3>
<p class="subtitle">Der Ferienausschuss stimmt der Nutzungsänderung zu; der Betreiber muss Verträge über fünf Stellplätze vorlegen.</p>
<div class="body"><p>Nach zwei früheren Ablehnungen stimmte der Ferienausschuss am 20. August 2026 der Nutzungsänderung des Kiosks in der Kirchenstraße zu einer SB-Bäckerei zu. Nach dem Bericht des Münchner Merkur ist die Zustimmung daran geknüpft, dass der Betreiber der Verwaltung Verträge über fünf Stellplätze vorlegt.</p></div>
<h4>Quellen</h4>
<ul class="sources"><li><a href="https://www.merkur.de/lokales/muenchen-lk/feldkirchen-ort28673/feldkirchen-sb-baeckerei-darf-eroeffnen-aber-nur-wenn-betreiber-parkplatz-vertraege-vorlegt-94464638.html" rel="noopener noreferrer" target="_blank">Münchner Merkur – SB-Bäckerei darf eröffnen – aber nur, wenn Betreiber Parkplatz-Verträge vorlegt</a> · 29. August 2026</li><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/si0057.asp?__ksinr=1027" rel="noopener noreferrer" target="_blank">RIS Feldkirchen – Ferienausschuss 20.08.2026</a> · 20. August 2026</li></ul>
<details><summary>Was bisher passiert ist (1)</summary><ul class="history"><li><a href="#R031">30. April 2026 · Gemeinderat lehnt SB-Bäckerei in der Kirchenstraße erneut ab</a></li></ul></details>
<section class="assessment"><h4>Unsere Einordnung</h4><p>Der dritte Anlauf zeigt, wie stark bei kleinen Nutzungsänderungen konkrete Rahmenbedingungen über die Genehmigungsfähigkeit entscheiden können. Für die Ortsmitte bleibt die größere Frage interessant: Welche Nahversorgungsangebote wünschen wir dort – und wie können Stellplätze, kurze Wege sowie ein gut erreichbares Zentrum so zusammengedacht werden, dass neue Angebote tatsächlich zum Ort passen?</p></section>
<a class="minor-link" href="#S021">Zur zugehörigen Sitzung</a><div class="topic-link"><a href="#T010" rel="noopener" target="_blank">Mehr zum Thema: Ortszentrum und Nahversorgung</a></div></article>`);
    const c=document.getElementById('R068');
    if(c) c.dataset.search=(c.textContent||'').toLowerCase();
  }

  const topic=document.getElementById('T010');
  if(topic){
    const date=topic.querySelector('.date');
    if(date) date.textContent='Aktualisiert: 29. August 2026';
    const body=topic.querySelector('.body');
    if(body) body.innerHTML='<p>Bei der Nahversorgung im Ortszentrum gab es im Untersuchungszeitraum mehrere Veränderungen. Ende September 2025 schloss die bisherige Poststelle in der Kirchenstraße; die Postdienstleistungen wurden anschließend in einen Schreibwarenladen am Wolfgangsplatz verlagert.</p><p>Bei der geplanten SB-Bäckerei in der Kirchenstraße änderte sich der Stand nach mehreren Anläufen: Der Gemeinderat hatte die Nutzungsänderung zweimal abgelehnt, wobei insbesondere der Stellplatznachweis eine Rolle spielte. Am 20. August 2026 stimmte der Ferienausschuss dem Vorhaben im dritten Anlauf zu. Nach dem späteren Pressebericht ist die Zustimmung daran geknüpft, dass Verträge über fünf Stellplätze vorgelegt werden. Der Vorgang zeigt, wie konkrete Genehmigungsvoraussetzungen und die längerfristige Entwicklung der Nahversorgung im Ortszentrum zusammenwirken.</p>';
    const assessment=topic.querySelector('.assessment');
    if(assessment) assessment.innerHTML='<h4>Unsere Einordnung</h4><p>Lebendige Ortszentren entstehen durch ein Zusammenspiel aus Nahversorgung, Dienstleistungen, kurzen Wegen und Aufenthaltsqualität. Dass die SB-Bäckerei nach zwei Ablehnungen nun unter einer konkreten Stellplatzvoraussetzung Zustimmung erhält, zeigt zugleich, wie stark einzelne Genehmigungsfragen die Entwicklung neuer Angebote beeinflussen.</p><p>Für Feldkirchen lohnt sich deshalb der Blick über den Einzelfall hinaus: Welche Angebote sollen die Ortsmitte stärken? Und wie können neue Nutzungen so eingebunden werden, dass gute Erreichbarkeit nicht nur über Parkplätze, sondern auch über sichere Fuß- und Radwege und eine attraktive Ortsmitte gedacht wird?</p>';
    const details=[...topic.querySelectorAll('details')];
    const questions=details.find(d=>d.querySelector('summary')?.textContent.includes('Offene Fragen'));
    if(questions){
      questions.querySelector('summary').textContent='Offene Fragen (3)';
      questions.querySelector('ul').innerHTML='<li>Welche Nahversorgungs- und Dienstleistungsangebote sollen die Feldkirchner Ortsmitte langfristig stärken?</li><li>Wie lassen sich bei neuen Nutzungen gute Erreichbarkeit, kurze Wege, Stellplatzanforderungen sowie Fuß- und Radverkehr sinnvoll zusammenbringen?</li><li>Welche Rolle spielen Leerstände, Umnutzungen und die Maßnahmen des Ortsentwicklungskonzepts für die künftige Nahversorgung?</li>';
    }
    const sources=details.find(d=>d.querySelector('summary')?.textContent.includes('Quellen'));
    if(sources){
      const ul=sources.querySelector('ul');
      if(ul && !ul.querySelector('a[href*="94464638"]')) ul.insertAdjacentHTML('beforeend','<li><a href="https://www.merkur.de/lokales/muenchen-lk/feldkirchen-ort28673/feldkirchen-sb-baeckerei-darf-eroeffnen-aber-nur-wenn-betreiber-parkplatz-vertraege-vorlegt-94464638.html" rel="noopener noreferrer" target="_blank"><span class="source-date">29. August 2026</span> · Münchner Merkur – SB-Bäckerei darf eröffnen – aber nur, wenn Betreiber Parkplatz-Verträge vorlegt</a></li><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/si0057.asp?__ksinr=1027" rel="noopener noreferrer" target="_blank"><span class="source-date">20. August 2026</span> · RIS Feldkirchen – Ferienausschuss 20.08.2026</a></li>');
      sources.querySelector('summary').textContent='Quellen (5)';
    }
    topic.dataset.search=(topic.textContent||'').toLowerCase();
  }

  const session=document.getElementById('S021');
  if(session){
    [...session.querySelectorAll('.agenda-item')].forEach(li=>{
      if(li.querySelector('.proposal')?.textContent.trim()==='5317/2026'){
        const d=li.querySelector('.decision');
        if(d) d.textContent='Zugestimmt unter Voraussetzung des Nachweises von fünf Stellplatzverträgen (Pressebericht)';
      }
    });
    session.dataset.search=(session.textContent||'').toLowerCase();
  }
})();

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
 document.querySelectorAll('.filter-chip').forEach(x=>x.classList.toggle('active',x.dataset.place===''));
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
 const ids={"2026-08":["R059","R050","C057","R041","R068","R049","R048","R040","R039"],"2026-07":["R037","R036","R067","R056","R047","R033"],"2026-06":["R034","R066","R032","R030"],"2026-05":["R063","R055","R029","R054"],"2026-04":["R031","C027","R065"],"2026-03":["R025","R024","R023","R026","C019"],"2026-02":["R021","R046","R018","R022"],"2026-01":["R017","R016","R015","R014","R013","R045","R044"],"2025-12":["R043","R053","R012"],"2025-11":["R011","R010"],"2025-10":["R009","R008","R007","R006","R064","R005","R004","R003"],"2025-09":["R002","R052","R042","R051","R001"]};
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
   questions.querySelector('summary').textContent='Offene Fragen (5)';
   questions.querySelector('ul').innerHTML='<li>Wie verändern der Umbau des Autobahnkreuzes München-Ost, die Erweiterungen von A99 und A94 und die Verlegung der M18/EBE4 zusammen Flächenverbrauch, Zerschneidung, Lärm und Verkehrsströme rund um Feldkirchen?</li><li>Welche Möglichkeiten hat Feldkirchen im weiteren Planungs- und Genehmigungsverfahren, eigene Hinweise und Anforderungen zur Ausgestaltung des Gesamtvorhabens einzubringen?</li><li>Lässt sich die ohnehin notwendige Neuplanung nutzen, um Grün- und Biotopstrukturen besser zu verbinden, zusätzliche Bäume oder andere ökologische Begleitstrukturen vorzusehen und Eingriffe möglichst gering zu halten?</li><li>Wie können Rad- und Fußverbindungen sowie sichere Querungen so geplant werden, dass der vergrößerte Straßenkorridor bestehende Verbindungen nicht weiter erschwert und möglichst sogar Verbesserungen ermöglicht?</li><li>Welche Lösungen für Entwässerung, Versickerung und Begrünung können dazu beitragen, die Folgen großer versiegelter Flächen für Klima und Wasserhaushalt zu begrenzen?</li>';
 }
 const sources=details.find(d=>d.querySelector('summary')?.textContent.includes('Quellen'));
 if(sources){
   sources.querySelector('summary').textContent='Quellen (7)';
   const ul=sources.querySelector('ul');
   if(ul) ul.innerHTML='<li><a href="https://a99-ost.de/" rel="noopener noreferrer" target="_blank"><span class="source-date">29. August 2026</span> · Autobahn GmbH – Erweiterung der A99 Ost: Bau- und Planungsabschnitte</a></li><li><a href="https://a99-ost.de/varianten/" rel="noopener noreferrer" target="_blank"><span class="source-date">29. August 2026</span> · Autobahn GmbH – Variantenvergleich M18/EBE4</a></li><li><a href="https://www.merkur.de/lokales/muenchen-lk/haar-ort104496/wegen-a99-ausbau-kreisstrasse-bei-feldkirchen-wird-verlegt-so-soll-sie-verlaufen-93953871.html" rel="noopener noreferrer" target="_blank"><span class="source-date">25. September 2025</span> · Münchner Merkur – Wegen A99-Ausbau: Kreisstraße bei Feldkirchen wird verlegt</a></li><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/getfile.asp?id=71104&type=do" rel="noopener noreferrer" target="_blank"><span class="source-date">30. Oktober 2025</span> · RIS Feldkirchen – Beschlussvorlage 5055/2025</a></li><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/si0057.asp?__ksinr=1000" rel="noopener noreferrer" target="_blank"><span class="source-date">30. Oktober 2025</span> · RIS Feldkirchen – Sitzung 30.10.2025</a></li><li><a href="https://www.landkreis-muenchen.de/artikel/a99-autobahnring-b304-ersatzneubau-der-bruecke-an-der-anschlussstelle-haar-1/" rel="noopener noreferrer" target="_blank"><span class="source-date">4. August 2026</span> · Landkreis München / Autobahn GmbH – Ersatzneubau der Brücke an der Anschlussstelle Haar</a></li><li><a href="https://www.merkur.de/lokales/muenchen-lk/haar-ort104496/gesperrt-a99-bei-haar-wird-fuer-drei-tage-voll-94459646.html" rel="noopener noreferrer" target="_blank"><span class="source-date">27. August 2026</span> · Münchner Merkur – A99 bei Haar wird für drei Tage voll gesperrt</a></li>';
 }
 card.dataset.search=(card.textContent||'').toLowerCase();
})();

// Redaktionelle Ergänzung 2026-08-31: räumlicher Zusammenhang Kirchenstraße 4.
(function updateKirchenstrasseContext(){
 const postDirectory='https://www.kaufda.de/Filialen/Feldkirchen-Kr-Muenchen/Postfiliale-579-Kirchenstrasse-Deutsche-Post/v-f342416777';
 const contribution=document.getElementById('R068');
 if(contribution){
   const body=contribution.querySelector('.body');
   if(body) body.innerHTML='<p>Nach zwei früheren Ablehnungen stimmte der Ferienausschuss am 20. August 2026 der Nutzungsänderung des Kiosks in der Kirchenstraße 4 zu einer SB-Bäckerei zu. Nach dem Bericht des Münchner Merkur ist die Zustimmung daran geknüpft, dass der Betreiber der Verwaltung Verträge über fünf Stellplätze vorlegt.</p><p>Am selben Standort wird in aktuellen Verzeichnissen wieder eine Deutsche-Post-Filiale geführt. Damit treffen an der Kirchenstraße 4 zwei für die örtliche Versorgung relevante Nutzungen zusammen. Ob und wie Postfiliale und geplante SB-Bäckerei organisatorisch oder wirtschaftlich miteinander verbunden sind, ist in den bislang gefundenen öffentlichen Quellen nicht belastbar dokumentiert.</p>';
   const ul=contribution.querySelector('ul.sources');
   if(ul && !ul.querySelector('a[href*="f342416777"]')) ul.insertAdjacentHTML('beforeend','<li><a href="'+postDirectory+'" rel="noopener noreferrer" target="_blank">Aktuelles Filialverzeichnis – Deutsche Post, Kirchenstraße 4</a> · abgerufen 31. August 2026</li>');
   contribution.dataset.search=(contribution.textContent||'').toLowerCase();
 }
 const topic=document.getElementById('T010');
 if(topic){
   const date=topic.querySelector('.date');
   if(date) date.textContent='Aktualisiert: 31. August 2026';
   const body=topic.querySelector('.body');
   if(body) body.innerHTML='<p>Bei der Nahversorgung im Ortszentrum gab es im Untersuchungszeitraum mehrere Veränderungen. Die Gemeinde kündigte 2025 an, dass die Poststelle in der Kirchenstraße zum 30. September schließen und die Postabwicklung ab Oktober vollständig an den Wolfgangsplatz verlagert werden sollte. Aktuelle Filialverzeichnisse führen inzwischen wieder eine Deutsche-Post-Filiale in der Kirchenstraße 4.</p><p>Genau für diese Adresse wurde zugleich die Nutzungsänderung eines Kiosks zu einer SB-Bäckerei beantragt. Nach zwei Ablehnungen stimmte der Ferienausschuss dem Vorhaben am 20. August 2026 unter der Voraussetzung zu, dass fünf Stellplatzverträge nachgewiesen werden. Die gemeinsame Adresse verbindet damit zwei zunächst getrennt erscheinende Entwicklungen der örtlichen Versorgung. Öffentlich noch nicht belastbar geklärt ist, wann und unter welchen Bedingungen die Postfiliale an die Kirchenstraße zurückkehrte und ob zwischen Postfiliale und SB-Bäckerei eine organisatorische oder wirtschaftliche Verbindung besteht.</p>';
   const assessment=topic.querySelector('.assessment');
   if(assessment) assessment.innerHTML='<h4>Unsere Einordnung</h4><p>Für die Ortsmitte ist nicht nur die einzelne Genehmigung einer SB-Bäckerei relevant. Wenn am selben Standort zugleich wieder Postdienstleistungen angeboten werden, kann die Kirchenstraße 4 mehrere Funktionen der Nahversorgung bündeln. Gerade solche räumlichen Zusammenhänge sind für die Entwicklung eines lebendigen Ortszentrums wichtig.</p><p>Bevor aus der gemeinsamen Adresse weitergehende Schlüsse gezogen werden, muss jedoch geklärt werden, wie die beiden Angebote tatsächlich zusammenhängen. Für Feldkirchen bleibt darüber hinaus die Frage, wie Nahversorgung, Dienstleistungen, kurze Wege, Aufenthaltsqualität und gute Erreichbarkeit gemeinsam gestärkt werden können.</p>';
   const details=[...topic.querySelectorAll('details')];
   const questions=details.find(d=>d.querySelector('summary')?.textContent.includes('Offene Fragen'));
   if(questions){
     questions.querySelector('ul').innerHTML='<li>Wann und unter welchen Bedingungen ist die Postfiliale an die Kirchenstraße 4 zurückgekehrt?</li><li>Besteht zwischen Postfiliale und geplanter SB-Bäckerei eine organisatorische, wirtschaftliche oder betriebliche Verbindung?</li><li>Welche Nahversorgungs- und Dienstleistungsangebote sollen die Feldkirchner Ortsmitte langfristig stärken?</li><li>Wie lassen sich bei neuen Nutzungen gute Erreichbarkeit, kurze Wege, Stellplatzanforderungen sowie Fuß- und Radverkehr sinnvoll zusammenbringen?</li>';
     questions.querySelector('summary').textContent='Offene Fragen (4)';
   }
   const sources=details.find(d=>d.querySelector('summary')?.textContent.includes('Quellen'));
   if(sources){
     const ul=sources.querySelector('ul');
     if(ul && !ul.querySelector('a[href*="f342416777"]')) ul.insertAdjacentHTML('beforeend','<li><a href="'+postDirectory+'" rel="noopener noreferrer" target="_blank"><span class="source-date">31. August 2026</span> · Aktuelles Filialverzeichnis – Deutsche Post, Kirchenstraße 4</a></li>');
     if(ul) sources.querySelector('summary').textContent='Quellen ('+ul.children.length+')';
   }
   topic.dataset.search=(topic.textContent||'').toLowerCase();
 }
 const note=document.querySelector('.demo-note');
 if(note && note.textContent.includes('Stand ')) note.textContent='Stand 31. August 2026 · Öffentlicher Demonstrator';
})();