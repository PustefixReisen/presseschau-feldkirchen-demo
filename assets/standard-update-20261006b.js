(function applyFibStandardUpdate20261006b(){
  const list=document.querySelector('#contribution-list');
  if(!list)return;

  if(!document.getElementById('R103')){
    list.insertAdjacentHTML('afterbegin',`<article class="card contribution" data-place="Erweiterte Relevanz" data-search="6. oktober 2026 aschheim feldkirchen klima energie freiflächen photovoltaik pv beng bürgerenergie genossenschaft batteriespeicher beteiligung 25000" data-tags="Aschheim Freiflächen-PV Bürgerenergie BENG Batteriespeicher Bürgerbeteiligung" id="R103">
<div class="meta-row"><span class="date">6. Oktober 2026</span><span class="place">Aschheim / Vergleich für Feldkirchen</span><span class="category">Klima &amp; Energie</span></div>
<h3>Neue Freiflächen-PV in Aschheim verbindet Solarstrom, Speicher und Bürgerbeteiligung</h3>
<p class="subtitle">Die BENG plant eine rund 3-MWp-Anlage mit Batteriespeicher; Bürgerinnen und Bürger können sich über die Genossenschaft beteiligen, Aschheimer haben Vorzeichnungsrecht.</p>
<div class="body"><p>Die Bürgerenergiegenossenschaft BENG baut in Aschheim eine weitere Photovoltaik-Freiflächenanlage. Die Anlage „Aschheim Freifläche II“ soll rund 3.000 kWp leisten und voraussichtlich etwa 3.200 MWh Strom pro Jahr erzeugen. Ergänzt wird sie durch einen Batteriespeicher, der die zeitliche Nutzung und Einspeisung des erzeugten Stroms flexibler machen soll.</p><p>Das Investitionsvolumen nennt die BENG mit rund 2,175 Millionen Euro. Die Beteiligung ist für Mitglieder der Genossenschaft vorgesehen; Bürgerinnen und Bürger aus Aschheim haben Vorzeichnungsrecht. Ein am 6. Oktober im Münchner Merkur erschienener Bericht stellt die Bürgerbeteiligung in den Mittelpunkt und nennt eine mögliche Einlage von bis zu 25.000 Euro. Der konkrete Merkur-Link war beim Nachmittagslauf noch nicht zuverlässig über die Websuche auffindbar; deshalb stützt sich FIB zunächst auf die öffentlich zugängliche BENG-Primärquelle.</p><p>Für Feldkirchen ist der Vorgang als übertragbares Praxisbeispiel relevant: Er verbindet Freiflächen-PV, Batteriespeicher und finanzielle Bürgerbeteiligung in einer unmittelbaren Nachbargemeinde. Daraus ergibt sich die Frage, ob vergleichbare Beteiligungsmodelle auch bei künftigen Energieprojekten in Feldkirchen eingesetzt werden könnten.</p></div>
<h4>Quellen</h4>
<ul class="sources"><li><a href="https://www.beng-eg.de/projekt-uebersicht/coming-soon/2026-aschheim-freiflaeche-ii/" target="_blank" rel="noopener noreferrer">BENG eG – Projekt Aschheim Freifläche II</a> · Projektstand 2026</li><li><a href="https://mitgliedschaft.beng-eg.de/" target="_blank" rel="noopener noreferrer">BENG eG – Beteiligungsportal: Aschheim Freifläche II</a></li></ul>
</article>`);
  }

  document.querySelectorAll('#place-filters .filter-chip[data-place]').forEach(button=>{
    const key=button.dataset.place;
    if(!key)return;
    const count=[...list.querySelectorAll(':scope > .contribution')].filter(card=>card.dataset.place===key).length;
    const span=button.querySelector('span');
    if(span) span.textContent=String(count);
  });

  const note=document.querySelector('.demo-note');
  if(note){
    note.textContent='Stand 6. Oktober 2026 · Öffentlicher Demonstrator';
    note.dataset.standardUpdateApplied='2026-10-06b';
  }
})();
