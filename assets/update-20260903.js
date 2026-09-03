(function applyFibUpdate20260903(){
  const contributionList = document.querySelector('#contribution-list');

  // Öffentliche Bezeichnung des Produkts vereinheitlichen.
  document.querySelectorAll('.nav-btn').forEach(btn => {
    if (btn.dataset.target === 'presseschau') btn.textContent = 'Feldkirchen im Blick';
  });
  const demoNote = document.querySelector('.demo-note');
  if (demoNote) demoNote.textContent = 'Stand 3. September 2026 · Öffentlicher Demonstrator';

  // Neue dokumentierte Entwicklung: auffällig niedriger Wasserstand am Heimstettener See.
  if (contributionList && !document.querySelector('#R060')) {
    const article = document.createElement('article');
    article.className = 'card contribution';
    article.id = 'R060';
    article.dataset.place = 'Feldkirchen / Aschheim / Kirchheim';
    article.dataset.search = '2. september 2026 feldkirchen aschheim kirchheim natur umwelt heimstettener see niedriger wasserstand deutlich freiliegende uferbereiche ursachen offen grundwasser niederschlag verdunstung wasserhaushalt';
    article.innerHTML = `
      <div class="meta-row">
        <span class="date">2. September 2026</span>
        <span class="place">Feldkirchen / Aschheim / Kirchheim</span>
        <span class="category">Natur &amp; Umwelt</span>
      </div>
      <h3>Auffällig niedriger Wasserstand am Heimstettener See dokumentiert</h3>
      <p class="subtitle">Breite freiliegende Uferbereiche machen den niedrigen Wasserstand deutlich sichtbar; eine belastbare Erklärung für die Ursache liegt FIB derzeit nicht vor.</p>
      <div class="body"><p>Aufnahmen vom 2. September 2026 zeigen am Heimstettener See einen deutlich zurückgewichenen Wasserspiegel und ungewöhnlich breite freiliegende Uferbereiche. Der Befund ist damit fotografisch dokumentiert. Aus den bislang geprüften öffentlichen Quellen lässt sich jedoch noch nicht belastbar ableiten, wodurch der niedrige Wasserstand aktuell verursacht wird oder wie er im langjährigen Vergleich einzuordnen ist.</p><p>Für die weitere Beobachtung sind deshalb insbesondere Daten und Aussagen zum Grundwasserstand, zu Niederschlag und Verdunstung sowie zum Wasserhaushalt des Sees relevant.</p></div>
      <h4>Quellen</h4>
      <ul class="sources"><li>Eigene fotografische Dokumentation am Heimstettener See · 2. September 2026</li><li><a href="https://www.landkreis-muenchen.de/themen/freizeit-kultur-sport/badeseen-und-badegewaesser/heimstettener-see/" rel="noopener noreferrer" target="_blank">Landkreis München – Heimstettener See</a> · abgerufen 3. September 2026</li></ul>
      <div class="topic-link"><a href="#T013" rel="noopener" target="_blank">Mehr zum Thema: Heimstettener See: Nutzung, Erholung, Wasser und Gesundheit</a></div>`;
    contributionList.prepend(article);
  }

  // Bestehendes Thema aufgrund neuer Fakten vollständig neu bewerten.
  const topic = document.querySelector('#T013');
  if (topic) {
    const date = topic.querySelector('.meta-row .date');
    if (date) date.textContent = 'Aktualisiert: 3. September 2026';

    const heading = topic.querySelector(':scope > h3');
    if (heading) heading.textContent = 'Heimstettener See: Nutzung, Erholung, Wasser und Gesundheit';

    const body = topic.querySelector(':scope > .body');
    if (body) body.innerHTML = `<p>Am Heimstettener See überlagern sich inzwischen mehrere Entwicklungen, die gemeinsam betrachtet werden müssen. Im Januar 2026 wurden an Parkplätzen Höhenbegrenzer installiert. Im Juli stimmte der Aschheimer Bau- und Umweltausschuss einem geplanten ganzjährigen Natur-Camping- und Reisemobilpark mit 150 Stellplätzen grundsätzlich zu. Im August wurden Cyanobakterien nachgewiesen; das Gesundheitsamt rät weiterhin vom Baden im gesamten See ab. Anfang September wurde zudem ein auffällig niedriger Wasserstand mit breiten freiliegenden Uferbereichen fotografisch dokumentiert. Eine belastbare Erklärung für dessen Ursache liegt FIB derzeit noch nicht vor.</p><p>Damit geht es nicht mehr nur um einzelne Freizeitangebote oder die aktuelle Badequalität. Zu klären ist auch, wie belastbar der See als gemeinsamer Natur- und Erholungsraum ist und welche zusätzlichen Nutzungen mit seinen ökologischen, gesundheitlichen und verkehrlichen Funktionen vereinbar sind.</p>`;

    const assessment = topic.querySelector(':scope > .assessment p');
    if (assessment) assessment.textContent = 'Bevor zusätzliche Nutzungen wie ein Camping- und Reisemobilpark am Heimstettener See weiter vorangetrieben werden, sollte geklärt sein, welche zusätzlichen Belastungen für Verkehr, Flächen, Naturraum und bestehende Erholungsnutzungen entstehen. Zugleich sollte der aktuell auffällig niedrige Wasserstand fachlich eingeordnet werden: Welche Rolle spielen Grundwasserstand, Niederschlag, Verdunstung und der Wasserhaushalt des Sees, und handelt es sich um eine kurzfristige Schwankung oder eine längerfristige Entwicklung? Gerade zusammen mit den aktuellen Cyanobakterienfunden spricht das dafür, Wasserqualität und Wasserstand nicht nur anlassbezogen zu beobachten, sondern ihre Entwicklung transparent und gemeindeübergreifend darzustellen.';

    const details = topic.querySelector(':scope > details');
    if (details) details.innerHTML = `<summary>Offene Fragen (5)</summary><ul><li>Welche zusätzlichen Verkehrs- und Flächenwirkungen hätte der geplante Camping- und Reisemobilpark, und wie würden sie mit der bestehenden Erholungsnutzung in Einklang gebracht?</li><li>Welche Auswirkungen wären durch einen Campingplatz auf Naturraum, Uferbereiche, Abwasser, Abfall und nächtliche Nutzung zu erwarten?</li><li>Wie ist der auffällig niedrige Wasserstand im langjährigen Vergleich einzuordnen, und welche Ursachen nennen die zuständigen Fachstellen?</li><li>Wie entwickeln sich Grundwasserstand, Wasserstand und Wasserqualität des Sees, und werden diese Daten öffentlich nachvollziehbar zusammengeführt?</li><li>Wie stimmen Aschheim, Kirchheim, Feldkirchen, Landkreis und Erholungsflächenverein die weitere Entwicklung des gemeinsamen Erholungsraums ab?</li></ul>`;

    topic.dataset.search = `${heading?.textContent || ''} ${body?.textContent || ''} ${assessment?.textContent || ''} ${details?.textContent || ''}`.toLowerCase();
  }

  // Themenlinks auf den aktualisierten Titel anpassen.
  document.querySelectorAll('a[href="#T013"]').forEach(link => {
    link.textContent = 'Mehr zum Thema: Heimstettener See: Nutzung, Erholung, Wasser und Gesundheit';
  });

  // Interne technische Themenstatus sind nicht Teil der öffentlichen Darstellung.
  document.querySelectorAll('.topic-card .meta-row .category').forEach(status => {
    if (/^topic_/i.test(status.textContent.trim())) status.remove();
  });

  // Konkretheitscheck: interne Statuswerte dürfen auch nach späteren DOM-Ergänzungen nicht sichtbar bleiben.
  const observer = new MutationObserver(() => {
    document.querySelectorAll('.topic-card .meta-row .category').forEach(status => {
      if (/^topic_/i.test(status.textContent.trim())) status.remove();
    });
  });
  const topicPanel = document.querySelector('#panel-themen');
  if (topicPanel) observer.observe(topicPanel, {childList:true, subtree:true});
})();
