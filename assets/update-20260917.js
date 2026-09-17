(function applyFibUpdate20260917(){
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

  addContribution('R077', `
    <div class="meta-row"><span class="date">15. September 2026</span><span class="place">Feldkirchen</span><span class="category">Zusammenleben &amp; Sicherheit</span></div>
    <h3>Gemeinde reagiert auf tödlichen Hundevorfall im Dornacher Feld</h3>
    <p class="subtitle">Nach dem Angriff auf einen Dackel hat das Ordnungsamt Maßnahmen eingeleitet. Gemeinde und Gemeinderat wollen außerdem prüfen, ob eine Leinenpflicht in Feldkirchen sinnvoll und rechtlich möglich ist.</p>
    <div class="body">
      <p>Am Abend des 6. September wurde nach Angaben der Gemeinde im Dornacher Feld ein Dackel von einem Hund der Kategorie 2 angegriffen und so schwer verletzt, dass er nicht gerettet werden konnte. Die Polizei informierte die Gemeinde am folgenden Montag. Das Ordnungsamt befasste sich daraufhin mit dem Fall; auch die Halterin des beteiligten Hundes habe Maßnahmen getroffen.</p>
      <p>Die Gemeinde teilte am 15. September mit, dass aus ihrer Sicht kein Anlass zur allgemeinen Beunruhigung mehr bestehe. Unabhängig vom Einzelfall soll das Thema grundsätzlich weiterverfolgt werden: Verwaltung und Gemeinderat wollen prüfen, ob und in welcher Form eine Leinenpflicht für Hunde in Feldkirchen sinnvoll und rechtlich umsetzbar ist.</p>
    </div>
    <h4>Quellen</h4><ul class="sources"><li><a href="https://www.feldkirchen.de/aktuelles/aktuelle-news/aktuelle-meldungen/pressemitteilung-hundevorfall-in-feldkirchen" rel="noopener noreferrer" target="_blank">Gemeinde Feldkirchen – Pressemitteilung Hundevorfall, 15.09.2026</a></li><li><a href="https://www.feldkirchen.de/_Resources/Persistent/0/3/7/e/037ec0d6df9b8a5cdcdf41d1b7b98b04c2c554fd/Presseinformation%20Vorfall%20mit%20Hunden%2015092026.pdf" rel="noopener noreferrer" target="_blank">Gemeinde Feldkirchen – vollständige Presseinformation (PDF)</a></li></ul>
  `);

  addContribution('R078', `
    <div class="meta-row"><span class="date">15. September 2026</span><span class="place">Feldkirchen</span><span class="category">Service &amp; Alltag</span></div>
    <h3>Gelbe Säcke werden nach Fahrzeugdefekt nachträglich abgeholt</h3>
    <p class="subtitle">Am 14. September konnte die Abholung wegen eines defekten Müllfahrzeugs nicht im gesamten Gemeindegebiet stattfinden.</p>
    <div class="body"><p>Die Gemeinde bittet betroffene Haushalte, bereits bereitgestellte Gelbe Säcke stehen zu lassen. Die ausgefallene Abholung soll zeitnah nachgeholt werden.</p></div>
    <h4>Quelle</h4><ul class="sources"><li><a href="https://www.feldkirchen.de/aktuelles/aktuelle-news/aktuelle-meldungen/defektes-muellauto-abholung-gelber-sack" rel="noopener noreferrer" target="_blank">Gemeinde Feldkirchen – Wichtiger Hinweis: Müllentsorgung, 15.09.2026</a></li></ul>
  `);

  addContribution('R079', `
    <div class="meta-row"><span class="date">17. September 2026</span><span class="place">Feldkirchen</span><span class="category">Gemeinderat</span></div>
    <h3>Gemeinderat tagt heute Abend</h3>
    <p class="subtitle">Der öffentliche Teil beginnt um 19.30 Uhr im Sitzungssaal des Rathauses.</p>
    <div class="body"><p>Auf der veröffentlichten Tagesordnung stehen unter anderem das Kinderhaus St. Jakob, die Straßenbenennung im Green Village, eine Bauvoranfrage für betreutes Wohnen, Hitzeschutzmaßnahmen, der Familienstützpunkt und der Antrag der Grünen-Fraktion zur Bürgerversammlung 2026.</p></div>
    <h4>Quelle</h4><ul class="sources"><li><a href="https://buergerinfo-feldkirchen.digitalfabrix.de/info.asp" rel="noopener noreferrer" target="_blank">Gemeinde Feldkirchen – Bürgerinfoportal / aktuelle Sitzungen</a></li></ul>
  `);

  const note=document.querySelector('.demo-note');
  if(note)note.textContent='Stand 17. September 2026 · Öffentlicher Demonstrator';
})();
