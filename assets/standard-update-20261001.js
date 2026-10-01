(function applyFibStandardUpdate20261001(){
  const list=document.querySelector('#contribution-list');
  if(!list)return;

  const r097=`<article class="card contribution" data-place="Feldkirchen" data-search="28. september 2026 feldkirchen mobilität verkehr kiss ride hort raiffeisenstraße schulweg verkehrssicherheit" data-tags="Kiss & Ride Hort Raiffeisenstraße Schulweg Verkehrssicherheit" id="R097">
<div class="meta-row"><span class="date">28. September 2026</span><span class="place">Feldkirchen</span><span class="category">Mobilität &amp; Verkehr</span></div>
<h3>Kiss &amp; Ride am Hort: Gemeinde richtet morgendliche Kurzhaltezone ein</h3>
<p class="subtitle">Vor dem Hort an der Raiffeisenstraße sollen Stellplätze werktags von 7:15 bis 8:15 Uhr ausschließlich für das kurze Bringen von Kindern genutzt werden.</p>
<div class="body"><p>Die Gemeinde Feldkirchen will vor dem Hort in der Raiffeisenstraße 8 dauerhaft eine Kiss-&amp;-Ride-Zone einrichten. Montags bis freitags ist sie von 7:15 bis 8:15 Uhr für das kurze Bringen von Kindern vorgesehen.</p><p>Parken oder Warten soll dort nicht möglich sein; nach dem Aussteigen sollen die Stellplätze sofort wieder freigemacht werden. Die benötigten Verkehrsschilder sind nach Angaben der Gemeinde bereits bestellt. Wann die Beschilderung aufgestellt und die Regelung tatsächlich eingerichtet wird, steht noch nicht fest.</p></div>
<h4>Quellen</h4>
<ul class="sources"><li><a href="https://www.feldkirchen.de/aktuelles/aktuelle-news/aktuelle-meldungen/kiss-ride-parkplatz-am-hort-raiffeisenstr-8" target="_blank" rel="noopener noreferrer">Gemeinde Feldkirchen – Kiss &amp; Ride-Parkplatz am Hort, Raiffeisenstr. 8</a> · 28. September 2026</li></ul>
</article>`;

  const r098=`<article class="card contribution" data-place="Feldkirchen" data-search="19. februar 2026 feldkirchen ortsentwicklung bauen kiesgrund bebauungsplan 111 wohnungsbau quartier s-bahnhof erschließung 800 wohnungen 1800" data-tags="Kiesgrund Bebauungsplan 111 Wohnungsbau Quartiersentwicklung S-Bahnhof Erschließung" id="R098">
<div class="meta-row"><span class="date">19. Februar 2026</span><span class="place">Feldkirchen</span><span class="category">Ortsentwicklung &amp; Bauen</span></div>
<h3>Kiesgrund: Großes neues Quartier bleibt ein zentrales Feldkirchner Zukunftsprojekt</h3>
<p class="subtitle">Rückwirkend ergänzt: Nach den kommunalen Zielbeschlüssen sind bis zu 800 Wohnungen für etwa 1.800 Menschen sowie neue soziale und verkehrliche Infrastruktur vorgesehen; Anfang 2026 war noch kein konkreter Fortschritt sichtbar.</p>
<div class="body"><p>Für das Gebiet „Am Kiesgrund“ nördlich der Bahn hatte der Gemeinderat bereits 2024 planerische Ziele festgelegt. Vorgesehen ist ein zusammenhängend entwickeltes Quartier zwischen B471, Bahnlinie, Seestraße und Gemeindegrenze. Der Gemeinderat hielt Baurecht für bis zu rund 800 Wohnungen und etwa 1.800 Menschen für realistisch.</p><p>Genannt werden außerdem unter anderem Grün- und Erholungsflächen, Schule, Kinderbetreuung, Ärzteversorgung sowie bessere Zugänge zum S-Bahnhof und neue Verkehrsverbindungen. Ein Merkur-Bericht vom 19. Februar 2026 stellte fest, dass das Projekt zu diesem Zeitpunkt noch nicht konkret vorangekommen war. Die Gemeinde nennt die Quartiersentwicklung am Kiesgrund inzwischen weiterhin ausdrücklich als Gegenstand möglicher öffentlicher Informationsveranstaltungen. Wegen Größe, zusätzlichem Wohnraum und der notwendigen Erschließung wird der Kiesgrund als eigenständiges längerfristiges FIB-Thema geführt.</p></div>
<h4>Quellen</h4>
<ul class="sources"><li><a href="https://www.merkur.de/lokales/muenchen-lk/feldkirchen-ort28673/mit-vollen-taschen-in-wartestellung-diese-projekte-hat-feldkirchen-heuer-geplant-94176401.html" target="_blank" rel="noopener noreferrer">Münchner Merkur – Mit vollen Taschen in Wartestellung: Diese Projekte hat Feldkirchen heuer geplant</a> · 19. Februar 2026</li><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/getfile.asp?id=68420&amp;type=do" target="_blank" rel="noopener noreferrer">RIS Feldkirchen – Zielsetzungen für die Entwicklung des Baugebietes Am Kiesgrund, Vorlage 4823/2024</a> · 21. November 2024</li><li><a href="https://www.feldkirchen.de/rathaus/verwaltung/buergermeister" target="_blank" rel="noopener noreferrer">Gemeinde Feldkirchen – Bürgermeister / Hinweis auf Quartiersentwicklung Am Kiesgrund</a> · abgerufen 1. Oktober 2026</li></ul>
<div class="topic-link"><a href="#T016" rel="noopener" target="_blank">Mehr zum Thema: Quartiersentwicklung Am Kiesgrund</a></div>
</article>`;

  if(!document.getElementById('R097')) list.insertAdjacentHTML('afterbegin',r097);
  if(!document.getElementById('R098')) list.insertAdjacentHTML('beforeend',r098);

  const r070=document.getElementById('R070');
  if(r070 && !r070.dataset.updated20261001){
    r070.dataset.updated20261001='true';
    const subtitle=r070.querySelector('.subtitle');
    if(subtitle) subtitle.textContent='Aktualisierung vom 29.09.2026: Gemeinderat konkretisiert Standorte für zwei Trinkwasserbrunnen und beschließt eine mobile Sprühnebelanlage.';
    const body=r070.querySelector('.body');
    if(body) body.insertAdjacentHTML('beforeend','<p>Nach einem Bericht des Münchner Merkur bestand im Gemeinderat Einigkeit über zwei Trinkwasserbrunnen. Für Rathausplatz und Friedhof soll die Verwaltung die technischen Voraussetzungen prüfen und bei Eignung Angebote einholen. Außerdem soll eine mobile Sprühnebelanlage für rund 2.000 Euro beschafft und die Möglichkeit eines Grundwasserbrunnens geprüft werden. Eine öffentliche Sitzungsniederschrift mit dem Beschluss lag beim Standardlauf noch nicht vor; der neue Stand stützt sich deshalb auf den Pressebericht.</p>');
    const sources=r070.querySelector('.sources');
    if(sources) sources.insertAdjacentHTML('beforeend','<li><a href="https://www.merkur.de/lokales/muenchen-lk/feldkirchen-ort28673/feldkirchen-baut-zwei-trinkwasserbrunnen-freistaat-zahlt-90-prozent-94514413.html" target="_blank" rel="noopener noreferrer">Münchner Merkur – Feldkirchen baut zwei Trinkwasserbrunnen – Freistaat zahlt 90 Prozent</a> · 29. September 2026</li>');
  }

  const s023=document.getElementById('S023');
  if(s023){
    const place=s023.querySelector('.place');
    if(place) place.textContent='Gemeinderat · Sitzung stattgefunden';
    const heading=s023.querySelector('h3');
    if(heading) heading.textContent='29. September 2026 – Gemeinderat';
    s023.querySelectorAll('.decision').forEach(el=>{
      if(el.textContent.includes('angekündigt')) el.textContent='Sitzung stattgefunden – öffentliches Einzelergebnis im RIS noch nicht dokumentiert';
    });
    const minutes=s023.querySelector('.minutes');
    if(minutes) minutes.textContent='Sitzung stattgefunden – öffentliche Niederschrift/Einzelergebnisse noch nicht verfügbar';
  }

  const topicList=document.querySelector('#topic-list');
  if(topicList && !document.getElementById('T016')){
    topicList.insertAdjacentHTML('afterbegin',`<article class="card topic-card" data-search="quartiersentwicklung am kiesgrund wohnungsbau 800 wohnungen 1800 menschen s-bahnhof erschließung schule kinderbetreuung grünflächen" id="T016">
<div class="meta-row"><span class="date">Aktualisiert: 1. Oktober 2026</span><span class="category">topic_established</span></div>
<h3>Quartiersentwicklung Am Kiesgrund</h3>
<div class="body"><p>Das Gebiet Am Kiesgrund nördlich der Bahn ist eines der größten langfristigen Ortsentwicklungsprojekte Feldkirchens. Die kommunalen Zielsetzungen verbinden neuen Wohnraum mit sozialer Infrastruktur, Grün- und Erholungsflächen sowie einer neuen Erschließung und besseren Anbindung an den S-Bahnhof. Der Gemeinderat hält bis zu rund 800 Wohnungen für etwa 1.800 Menschen für realistisch.</p><p>Die Entwicklung soll zeitlich gestaffelt erfolgen. Für die weitere Planung sind insbesondere zusätzliche Verkehrswege, die Verbindung zum S-Bahnhof, Rad- und Fußverkehr, soziale Infrastruktur sowie die Ausgestaltung der Grün- und Erholungsflächen entscheidend. Anfang 2026 war nach einem Pressebericht noch kein konkreter Fortschritt sichtbar; die Gemeinde nennt die Quartiersentwicklung weiterhin als mögliches Thema öffentlicher Informationsveranstaltungen.</p></div>
<details><summary>Offene Fragen (5)</summary><ul><li>Wie wird die zusätzliche Erschließung des Quartiers konkret gelöst?</li><li>Wie werden S-Bahn, Bus, Rad- und Fußverkehr in die Entwicklung integriert?</li><li>Welche soziale Infrastruktur muss parallel zu den Wohnungen entstehen?</li><li>Wie wird die Entwicklung zeitlich gestaffelt und mit dem bestehenden Ort verknüpft?</li><li>Wann werden aktualisierte Planungen öffentlich vorgestellt?</li></ul></details>
<details><summary>Quellen (3)</summary><ul class="sources"><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/getfile.asp?id=68420&amp;type=do" rel="noopener noreferrer" target="_blank"><span class="source-date">21. November 2024</span> · RIS Feldkirchen – Vorlage 4823/2024</a></li><li><a href="https://www.merkur.de/lokales/muenchen-lk/feldkirchen-ort28673/mit-vollen-taschen-in-wartestellung-diese-projekte-hat-feldkirchen-heuer-geplant-94176401.html" rel="noopener noreferrer" target="_blank"><span class="source-date">19. Februar 2026</span> · Münchner Merkur – Projekte 2026 / Kiesgrund</a></li><li><a href="https://www.feldkirchen.de/rathaus/verwaltung/buergermeister" rel="noopener noreferrer" target="_blank"><span class="source-date">1. Oktober 2026</span> · Gemeinde Feldkirchen – Bürgermeister / Quartiersentwicklung</a></li></ul></details>
<div class="minor">Erstmals als eigenes FIB-Thema angelegt: 1. Oktober 2026</div>
</article>`);
  }

  const note=document.querySelector('.demo-note');
  if(note) note.textContent='Stand 1. Oktober 2026 · Öffentlicher Demonstrator';
})();
