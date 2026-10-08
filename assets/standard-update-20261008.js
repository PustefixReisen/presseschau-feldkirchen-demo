(function applyFibStandardUpdate20261008(){
  const list=document.querySelector('#contribution-list');
  if(!list)return;

  const sessionUrl='https://buergerinfo-feldkirchen.digitalfabrix.de/si0057.asp?__ksinr=1031';
  const docsUrl='https://buergerinfo-feldkirchen.digitalfabrix.de/do0040.asp';
  const merkurPv='https://www.merkur.de/lokales/muenchen-lk/aschheim-ort28228/neue-pv-anlage-bei-aschheim-buerger-koennen-bis-zu-25-000-euro-einlegen-94526014.html';

  const cards=[
`<article class="card contribution" data-place="Feldkirchen" data-search="6. oktober 2026 feldkirchen mobilität verkehr radverkehrskonzept maßnahmen gemeinderat 15 oktober fahrrad" data-tags="Radverkehr Radverkehrskonzept Mobilität Gemeinderat" id="R104">
<div class="meta-row"><span class="date">6. Oktober 2026</span><span class="place">Feldkirchen</span><span class="category">Mobilität &amp; Verkehr</span></div>
<h3>Radverkehrskonzept: Gemeinderat soll über weitere Maßnahmen entscheiden</h3>
<p class="subtitle">Für die Sitzung am 15. Oktober ist eine eigene Beschlussvorlage zur Umsetzung von Maßnahmen aus dem Radverkehrskonzept veröffentlicht; die Entscheidung steht noch aus.</p>
<div class="body"><p>Das Feldkirchner Radverkehrskonzept kommt erneut auf die Tagesordnung des Gemeinderats. Unter TOP 5 soll am 15. Oktober über die Umsetzung von Maßnahmen beraten und entschieden werden. Die öffentliche Tagesordnung führt den Vorgang als Beschlussvorlage 5380/2026.</p><p>FIB trennt an dieser Stelle bewusst zwischen Vorlage und Beschluss: Welche Maßnahmen tatsächlich umgesetzt werden, ist erst nach der Sitzung belastbar als Entscheidung darstellbar. Der Vorgang ist besonders relevant, weil das Radverkehrskonzept bereits Grundlage mehrerer laufender Projekte und Bürgeranliegen ist.</p></div>
<h4>Quellen</h4><ul class="sources"><li><a href="${sessionUrl}" target="_blank" rel="noopener noreferrer">RIS Feldkirchen – Gemeinderat 15.10.2026, TOP 5 / Vorlage 5380/2026</a> · öffentlich am 7. Oktober 2026</li></ul>
<div class="topic-link"><a href="#T003" rel="noopener" target="_blank">Mehr zum Thema: Radverkehr und Verbindung über die A94</a></div>
</article>`,
`<article class="card contribution" data-place="Feldkirchen" data-search="6. oktober 2026 feldkirchen ortsentwicklung bauen rechenzentrum bebauungsplan 112 flurstück 597 5 598 2 voranfrage" data-tags="Rechenzentrum Bebauungsplan 112 Bauleitplanung Gewerbe" id="R105">
<div class="meta-row"><span class="date">6. Oktober 2026</span><span class="place">Feldkirchen</span><span class="category">Ortsentwicklung &amp; Bauen</span></div>
<h3>Rechenzentrum: Voranfrage soll Änderung des Bebauungsplans Nr. 112 anstoßen</h3>
<p class="subtitle">Der Gemeinderat befasst sich am 15. Oktober mit einer Voranfrage für ein Rechenzentrum auf den Flurstücken 597/5 und 598/2 und mit der Einleitung einer Bebauungsplanänderung.</p>
<div class="body"><p>Auf der öffentlichen Tagesordnung für den 15. Oktober steht unter TOP 6 eine Voranfrage zur Errichtung eines Rechenzentrums auf den Flurstücken 597/5 und 598/2. Zugleich soll über die Einleitung einer Änderung des Bebauungsplans Nr. 112 beraten werden. Der Vorgang trägt die Vorlagennummer 5370/2026.</p><p>Damit ist zunächst nur ein Planungs- und Beratungsstand öffentlich dokumentiert. Größe, technische Ausgestaltung, Energiebedarf, Abwärmenutzung und weitere Auswirkungen sollten erst anhand der veröffentlichten Unterlagen beziehungsweise späterer Entscheidungen bewertet werden.</p></div>
<h4>Quellen</h4><ul class="sources"><li><a href="${sessionUrl}" target="_blank" rel="noopener noreferrer">RIS Feldkirchen – Gemeinderat 15.10.2026, TOP 6 / Vorlage 5370/2026</a> · öffentlich am 7. Oktober 2026</li></ul>
</article>`,
`<article class="card contribution" data-place="Feldkirchen" data-search="6. oktober 2026 feldkirchen natur umwelt kiesgrube verfüllung fristen flurnummer 488 kiesgrund gemeinderat" data-tags="Kiesgrube Verfüllung Fristen Am Kiesgrund Umwelt" id="R106">
<div class="meta-row"><span class="date">6. Oktober 2026</span><span class="place">Feldkirchen</span><span class="category">Natur &amp; Umwelt</span></div>
<h3>Kiesgrube: Gemeinderat berät über neue Fristen für die Verfüllung</h3>
<p class="subtitle">Für die Kiesgrube auf Fl.Nr. 488 liegt ein Antrag auf Festsetzung neuer Verfüllfristen vor; die Beratung ist für den 15. Oktober angekündigt.</p>
<div class="body"><p>Der Gemeinderat soll am 15. Oktober unter TOP 15 über einen Antrag auf neue Fristen für die Verfüllung der Kiesgrube auf Fl.Nr. 488 beraten. Die öffentliche Vorlage trägt die Nummer 5355/2026.</p><p>FIB behandelt dies vorerst als neuen Verfahrensstand. Welche Fristen beantragt werden und welche umwelt-, planungs- oder betriebsbezogenen Folgen daraus entstehen, wird erst nach Auswertung der vollständigen Vorlage beziehungsweise der späteren Entscheidung eingeordnet.</p></div>
<h4>Quellen</h4><ul class="sources"><li><a href="${sessionUrl}" target="_blank" rel="noopener noreferrer">RIS Feldkirchen – Gemeinderat 15.10.2026, TOP 15 / Vorlage 5355/2026</a> · öffentlich am 7. Oktober 2026</li></ul>
</article>`,
`<article class="card contribution" data-place="Feldkirchen" data-search="6. oktober 2026 feldkirchen natur umwelt griecherl gehölz münchner straße grüne antrag schutz radweg" data-tags="Griecherl-Gehölz Münchner Straße Baumschutz Radverkehr Grüne Antrag" id="R107">
<div class="meta-row"><span class="date">6. Oktober 2026</span><span class="place">Feldkirchen</span><span class="category">Natur &amp; Umwelt</span></div>
<h3>Griecherl-Gehölz: Grüner Schutzantrag kommt in den Gemeinderat</h3>
<p class="subtitle">Der Antrag der Fraktion Bündnis 90/Die Grünen zum Schutz des Gehölzes an der Münchner Straße steht am 15. Oktober als eigener Tagesordnungspunkt zur Beratung.</p>
<div class="body"><p>Der bereits bekannte Konflikt zwischen der geplanten Rad- und Fußwegeverbindung an der Münchner Straße und dem Erhalt des gewachsenen Gehölzstreifens wird nun öffentlich im Gemeinderat behandelt. Die Tagesordnung für den 15. Oktober führt unter TOP 17 den Antrag der Fraktion Bündnis 90/Die Grünen zum Schutz des Griecherl-Gehölzes; die Vorlage trägt die Nummer 5378/2026.</p><p>Da es sich um einen Fraktionsantrag handelt, ist der Schutz des Gehölzes zunächst eine politische Forderung und noch kein Gemeinderatsbeschluss. Über den Ausgang der Beratung wird FIB nach der Sitzung getrennt berichten.</p></div>
<h4>Quellen</h4><ul class="sources"><li><a href="${sessionUrl}" target="_blank" rel="noopener noreferrer">RIS Feldkirchen – Gemeinderat 15.10.2026, TOP 17 / Vorlage 5378/2026</a> · öffentlich am 7. Oktober 2026</li></ul>
<div class="topic-link"><a href="#T003" rel="noopener" target="_blank">Mehr zum Thema: Radverkehr und Verbindung über die A94</a></div>
</article>`
  ];

  cards.forEach(html=>{
    const id=html.match(/id="([^"]+)"/)?.[1];
    if(id && !document.getElementById(id)) list.insertAdjacentHTML('afterbegin',html);
  });

  // R069 Hundewiese: neuer, nun terminierter Beratungsstand.
  const r069=document.getElementById('R069');
  if(r069 && !r069.dataset.updated20261008){
    r069.dataset.updated20261008='true';
    const subtitle=r069.querySelector('.subtitle');
    if(subtitle) subtitle.textContent='Aktualisierung vom 7.10.2026: Die Hundewiese steht am 15. Oktober erneut zur Entscheidung im Gemeinderat. '+subtitle.textContent;
    const body=r069.querySelector('.body');
    if(body) body.insertAdjacentHTML('beforeend','<p><strong>Neuer Stand:</strong> Die öffentliche Tagesordnung des Gemeinderats vom 15. Oktober führt die Hundewiese unter TOP 2 erneut auf. Damit ist der zuvor noch offene Sitzungstermin nun bestätigt; eine neue Sachentscheidung liegt noch nicht vor.</p>');
    const sources=r069.querySelector('.sources');
    if(sources) sources.insertAdjacentHTML('beforeend','<li><a href="'+sessionUrl+'" target="_blank" rel="noopener noreferrer">RIS Feldkirchen – Gemeinderat 15.10.2026, TOP 2 / Vorlage 5283/2026</a> · 7. Oktober 2026</li>');
  }

  // R103: inzwischen ist der zuvor fehlende Merkur-Direktlink auffindbar.
  const r103=document.getElementById('R103');
  if(r103 && !r103.dataset.merkurLinked20261008){
    r103.dataset.merkurLinked20261008='true';
    const body=r103.querySelector('.body');
    if(body){
      body.querySelectorAll('p').forEach(p=>{
        p.innerHTML=p.innerHTML.replace('Der konkrete Merkur-Link war beim Nachmittagslauf noch nicht zuverlässig über die Websuche auffindbar; deshalb stützt sich FIB zunächst auf die öffentlich zugängliche BENG-Primärquelle.','Der Merkur-Originalartikel ist inzwischen direkt auffindbar und wird neben der BENG-Primärquelle als Pressequelle ausgewiesen.');
      });
    }
    const sources=r103.querySelector('.sources');
    if(sources && ![...sources.querySelectorAll('a')].some(a=>a.href===merkurPv)){
      sources.insertAdjacentHTML('beforeend','<li><a href="'+merkurPv+'" target="_blank" rel="noopener noreferrer">Münchner Merkur – Neue PV-Anlage bei Aschheim: Bürger können bis zu 25.000 Euro einlegen</a> · 6. Oktober 2026</li>');
    }
  }

  // Thema T003: öffentlicher Schutzantrag ist nun ein neuer formaler Verfahrensstand.
  const t003=document.getElementById('T003');
  if(t003 && !t003.dataset.updated20261008){
    t003.dataset.updated20261008='true';
    const date=t003.querySelector('.date');
    if(date) date.textContent='Aktualisiert: 6. Oktober 2026';
    const body=t003.querySelector('.body');
    if(body) body.insertAdjacentHTML('beforeend','<p>Am 6. Oktober wurde außerdem der Antrag der Fraktion Bündnis 90/Die Grünen zum Schutz des Griecherl-Gehölzes an der Münchner Straße öffentlich freigegeben. Er steht am 15. Oktober als TOP 17 im Gemeinderat. Damit wird die bislang als politische Forderung dokumentierte Schutzfrage nun formal beraten; ein Beschluss liegt noch nicht vor.</p>');
    const details=[...t003.querySelectorAll('details')].find(el=>(el.querySelector('summary')?.textContent||'').includes('Quellen'));
    const sources=details?.querySelector('.sources');
    if(sources) sources.insertAdjacentHTML('beforeend','<li><a href="'+sessionUrl+'" rel="noopener noreferrer" target="_blank"><span class="source-date">7. Oktober 2026</span> · RIS Feldkirchen – Gemeinderat 15.10.2026, TOP 17 / Vorlage 5378/2026</a></li>');
  }

  // Sitzung S025 mit der jetzt veröffentlichten Tagesordnung ersetzen.
  const oldS025=document.getElementById('S025');
  if(oldS025) oldS025.remove();
  const sessionList=document.querySelector('#session-list');
  if(sessionList){
    sessionList.insertAdjacentHTML('afterbegin',`<article class="card session-card" data-search="2026-10-15 gemeinderat feldkirchen hundewiese parkanlage radverkehrskonzept rechenzentrum wohnanlage kiesgrube griecherl gehölz" id="S025">
<div class="meta-row"><span class="date">15. Oktober 2026</span><span class="place">Gemeinderat · angekündigt</span></div>
<h3>15. Oktober 2026 – Gemeinderat (angekündigt)</h3>
<h4>Wichtige TOPs</h4>
<ol class="agenda">
<li class="agenda-item"><div><span class="agenda-no">TOP 2</span> <span class="proposal">5283/2026</span></div><strong>Hundewiese östlich des Friedhofs – weiteres Vorgehen nach schalltechnischer Stellungnahme</strong><div class="docs"><a href="${sessionUrl}" target="_blank" rel="noopener noreferrer">Sitzung / Vorlage</a></div><div class="decision">Entscheidung steht noch aus</div></li>
<li class="agenda-item"><div><span class="agenda-no">TOP 3</span> <span class="proposal">5351/2026</span></div><strong>CSU-Antrag auf Schaffung einer innerörtlichen Parkanlage</strong><div class="docs"><a href="${sessionUrl}" target="_blank" rel="noopener noreferrer">Sitzung / Vorlage</a></div><div class="decision">Entscheidung steht noch aus</div></li>
<li class="agenda-item"><div><span class="agenda-no">TOP 5</span> <span class="proposal">5380/2026</span></div><strong>Radverkehrskonzept – Entscheidung über die Umsetzung von Maßnahmen</strong><div class="docs"><a href="${sessionUrl}" target="_blank" rel="noopener noreferrer">Sitzung / Vorlage</a></div><div class="decision">Entscheidung steht noch aus</div></li>
<li class="agenda-item"><div><span class="agenda-no">TOP 6</span> <span class="proposal">5370/2026</span></div><strong>Voranfrage Rechenzentrum – Änderung Bebauungsplan Nr. 112</strong><div class="docs"><a href="${sessionUrl}" target="_blank" rel="noopener noreferrer">Sitzung / Vorlage</a></div><div class="decision">Entscheidung steht noch aus</div></li>
<li class="agenda-item"><div><span class="agenda-no">TOP 13</span> <span class="proposal">5390/2026</span></div><strong>Wohnanlage Aschheimer Straße 12a mit 22 Wohneinheiten – erneute Vorlage</strong><div class="docs"><a href="${sessionUrl}" target="_blank" rel="noopener noreferrer">Sitzung / Vorlage</a></div><div class="decision">Entscheidung steht noch aus</div></li>
<li class="agenda-item"><div><span class="agenda-no">TOP 15</span> <span class="proposal">5355/2026</span></div><strong>Kiesgrube Fl.Nr. 488 – neue Fristen für die Verfüllung</strong><div class="docs"><a href="${sessionUrl}" target="_blank" rel="noopener noreferrer">Sitzung / Vorlage</a></div><div class="decision">Entscheidung steht noch aus</div></li>
<li class="agenda-item"><div><span class="agenda-no">TOP 17</span> <span class="proposal">5378/2026</span></div><strong>Antrag Bündnis 90/Die Grünen zum Schutz des Griecherl-Gehölzes an der Münchner Straße</strong><div class="docs"><a href="${sessionUrl}" target="_blank" rel="noopener noreferrer">Sitzung / Vorlage</a></div><div class="decision">Entscheidung steht noch aus</div></li>
</ol>
<p class="other-items">Weitere öffentliche TOPs umfassen unter anderem die Erschließungskostensatzung, mehrere schulische Nutzungsänderungen in der Dornacher Straße, Bauvorhaben sowie die Standgebühren des Wochenmarkts.</p>
<div class="session-footer"><a class="button-link" href="${sessionUrl}" rel="noopener noreferrer" target="_blank">Alle Unterlagen zur Sitzung</a><span class="minutes">Tagesordnung veröffentlicht – Sitzung steht noch aus</span></div>
</article>`);
  }

  // Filterzahlen aus dem tatsächlichen sichtbaren Beitragsbestand berechnen.
  document.querySelectorAll('#place-filters .filter-chip[data-place]').forEach(button=>{
    const key=button.dataset.place;
    if(!key)return;
    const count=[...list.querySelectorAll(':scope > .contribution')].filter(card=>card.dataset.place===key).length;
    const span=button.querySelector('span');
    if(span) span.textContent=String(count);
  });

  const note=document.querySelector('.demo-note');
  if(note){
    note.textContent='Stand 8. Oktober 2026 · Öffentlicher Demonstrator';
    note.dataset.standardUpdateApplied='2026-10-08';
  }
})();
