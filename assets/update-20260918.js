(function applyFibUpdate20260918(){
  const contributionList=document.querySelector('#contribution-list');
  if(!contributionList)return;

  function addContribution(id, html){
    if(document.getElementById(id))return;
    const article=document.createElement('article');
    article.className='card contribution';
    article.id=id;
    article.innerHTML=html;
    contributionList.prepend(article);
  }

  addContribution('R080', `
    <div class="meta-row"><span class="date">17. September 2026</span><span class="place">Feldkirchen</span><span class="category">Kinder &amp; Familie</span></div>
    <h3>Entscheidung zum Kinderhaus St. Jakob kurzfristig verschoben</h3>
    <p class="subtitle">Der Gemeinderat sollte über Bau- und Planungskosten, Einsparmöglichkeiten und das weitere Vorgehen beraten. Die Gemeinde nahm den Tagesordnungspunkt am Sitzungstag von der öffentlichen Tagesordnung; ein neuer Termin soll bekanntgegeben werden.</p>
    <div class="body"><p>Für die Sitzung am 17. September war vorgesehen, die Bau- und Planungskosten für das Kinderhaus St. Jakob vorzustellen, mögliche Einsparpotenziale zu beraten und über das weitere Vorgehen zu entscheiden. Am selben Tag teilte die Gemeinde mit, dass TOP 2 entfällt. Damit wurde in dieser Sitzung keine Entscheidung zu diesem Punkt getroffen.</p></div>
    <h4>Quellen</h4><ul class="sources"><li><a href="https://www.feldkirchen.de/aktuelles/aktuelle-news/aktuelle-meldungen/eilmeldung-gemeinderatssitzung-top-2-kinderhaus-sankt-jakob-verschoben" rel="noopener noreferrer" target="_blank">Gemeinde Feldkirchen – Eilmeldung vom 17.09.2026</a></li><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/si0057.asp?__ksinr=1029" rel="noopener noreferrer" target="_blank">RIS Feldkirchen – Gemeinderat 17.09.2026</a></li></ul>
  `);

  addContribution('R081', `
    <div class="meta-row"><span class="date">17. September 2026</span><span class="place">Feldkirchen</span><span class="category">Service &amp; Alltag</span></div>
    <h3>Bauarbeiten ändern die Müllabfuhr in zwei Straßen</h3>
    <p class="subtitle">Vom 23. September bis 28. Oktober kann das Müllfahrzeug die Wilhelm-Vetter-Straße und die Egerländer Straße nicht anfahren.</p>
    <div class="body"><p>Die Gemeinde bittet Anwohnerinnen und Anwohner, ihre Mülltonnen während der Bauarbeiten zur Leerung in die Sudetenstraße zu bringen. Die Sonderregelung gilt nach Angaben der Gemeinde vom 23. September bis einschließlich 28. Oktober 2026.</p></div>
    <h4>Quelle</h4><ul class="sources"><li><a href="https://www.feldkirchen.de/aktuelles/aktuelle-news/aktuelle-meldungen/wichtiger-hinweis-zur-muellabfuhr-in-der-wilhelm-vetter-strasse-und-egerlaender-strasse" rel="noopener noreferrer" target="_blank">Gemeinde Feldkirchen – Hinweis zur Müllabfuhr, 17.09.2026</a></li></ul>
  `);

  addContribution('R082', `
    <div class="meta-row"><span class="date">16. September 2026</span><span class="place">Feldkirchen</span><span class="category">Gemeinderat &amp; Ortsentwicklung</span></div>
    <h3>Weitere Gemeinderatssitzung am 29. September angekündigt</h3>
    <p class="subtitle">Die veröffentlichte Tagesordnung enthält unter anderem die erneute Billigung des Bebauungsplans 113 für das Gebiet südlich der Hohenlindner Straße bis zur Jahnstraße.</p>
    <div class="body"><p>Für den 29. September hat die Gemeinde eine weitere Gemeinderatssitzung veröffentlicht. Auf der Tagesordnung steht unter anderem die Behandlung der Stellungnahmen und Einwendungen zum Bebauungsplan Nr. 113 mit anschließender erneuter Billigung. Das Gebiet umfasst das laufende Wohnbauprojekt zwischen Hohenlindner Straße und Jahnstraße. Weitere öffentliche Tagesordnungspunkte werden in der Sitzungsübersicht berücksichtigt.</p></div>
    <h4>Quelle</h4><ul class="sources"><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/si0057.asp?__ksinr=1073" rel="noopener noreferrer" target="_blank">RIS Feldkirchen – Gemeinderat 29.09.2026</a></li></ul>
  `);

  // Nur den historischen R079-Beitrag aus dem Update vom 17.09.2026 verändern.
  // Neuere kanonische Beiträge können dieselbe alte Demonstrator-ID nicht mehr
  // unbeabsichtigt überschrieben bekommen.
  const r079=document.getElementById('R079');
  const isLegacyR079 =
    r079 &&
    r079.querySelector('.date')?.textContent.trim()==='17. September 2026' &&
    r079.querySelector('h3')?.textContent.trim()==='Gemeinderat tagt heute Abend';
  if(isLegacyR079){
    const title=r079.querySelector('h3');
    if(title)title.textContent='Gemeinderatssitzung vom 17. September';
    const subtitle=r079.querySelector('.subtitle');
    if(subtitle)subtitle.textContent='Aktualisierung vom 18.09.2026: TOP zum Kinderhaus St. Jakob kurzfristig abgesetzt.';
    const body=r079.querySelector('.body');
    if(body)body.innerHTML='<p>Die veröffentlichte Tagesordnung umfasste unter anderem die Straßenbenennung im Green Village, eine Bauvoranfrage für betreutes Wohnen, Hitzeschutzmaßnahmen, den Familienstützpunkt und den Antrag der Grünen-Fraktion zur Bürgerversammlung 2026. Der zunächst vorgesehene TOP 2 zum Kinderhaus St. Jakob entfiel kurzfristig. Belastbare öffentliche Ergebnisse zu den übrigen Tagesordnungspunkten liegen im RIS derzeit noch nicht als Niederschrift vor.</p>';
  }

  const note=document.querySelector('.demo-note');
  if(note)note.textContent='Stand 18. September 2026 · Öffentlicher Demonstrator';
})();
