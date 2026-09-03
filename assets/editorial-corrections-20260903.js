(function applyEditorialCorrections20260903(){
  const r060 = document.querySelector('#R060');
  if (r060) {
    const subtitle = r060.querySelector(':scope > .subtitle');
    if (subtitle) subtitle.innerHTML = 'Breite freiliegende Uferbereiche machen den niedrigen Wasserstand deutlich sichtbar; eine belastbare Erklärung für die Ursache liegt <em>Feldkirchen im Blick (FIB)</em> derzeit nicht vor.';
    r060.querySelectorAll(':scope > .sources li').forEach(li => {
      if (/Eigene fotografische Dokumentation/i.test(li.textContent)) li.remove();
    });
  }

  const t013 = document.querySelector('#T013');
  if (t013) {
    const body = t013.querySelector(':scope > .body');
    if (body) {
      body.innerHTML = body.innerHTML.replace('Eine belastbare Erklärung für dessen Ursache liegt FIB derzeit noch nicht vor.', 'Eine belastbare Erklärung für dessen Ursache liegt <em>Feldkirchen im Blick (FIB)</em> derzeit noch nicht vor.');
    }
    t013.querySelectorAll(':scope > details li, :scope > .sources li').forEach(li => {
      if (/Eigene fotografische Dokumentation/i.test(li.textContent)) li.remove();
    });
  }

  const bakeryAssessment = 'Für die Ortsmitte ist entscheidend, welche Nutzungen dort langfristig gewünscht sind und wie sie zu einem lebendigen, gut erreichbaren Zentrum beitragen. Die Stellplatzfrage ist dabei eine konkrete Genehmigungsvoraussetzung – sie sollte aber nicht den Blick auf die grundsätzliche Entwicklung der Ortsmitte verengen.';
  document.querySelectorAll('.card.contribution').forEach(card => {
    const title = card.querySelector(':scope > h3')?.textContent || '';
    if (/SB-Bäckerei.*Kirchenstraße|Bäckerei.*Kirchenstraße/i.test(title)) {
      const p = card.querySelector(':scope > .assessment p');
      if (p) p.textContent = bakeryAssessment;
    }
  });

  document.querySelectorAll('.card.contribution').forEach(card => {
    const title = card.querySelector(':scope > h3')?.textContent || '';
    if (/B304-Sanierung leitet Verkehr über Feldkirchen um/i.test(title)) {
      const p = card.querySelector(':scope > .assessment p');
      if (p) p.textContent = 'Die Umleitung macht aus einer Straßenbaumaßnahme in Haar unmittelbar ein Feldkirchner Verkehrsthema. Für die achtwöchige Bauzeit sollte besonders im Blick bleiben, wie sich der zusätzliche überörtliche Verkehr auf die Münchner Straße, angrenzende Wohn- und Geschäftsbereiche, Busverkehr sowie sichere Fuß- und Radwege auswirkt. Wichtig ist außerdem eine frühzeitige und verständliche Information der Feldkirchner Bevölkerung über die angekündigte Verkehrsführung.';
    }
  });
})();
