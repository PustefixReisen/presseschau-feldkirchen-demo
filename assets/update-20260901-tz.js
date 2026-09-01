// Ergänzung 2026-09-01: R021 / T003 um Habitat- und Grünvernetzung ergänzen.
(function updateA94HabitatContext(){
  const tzUrl='https://www.tz.de/muenchen/stadt/neue-bruecke-ueber-autobahn-in-muenchen-bekommt-extra-fuer-tiere-94297617.html';

  const contribution=document.getElementById('R021');
  if(contribution){
    const body=contribution.querySelector('.body');
    if(body) body.innerHTML='<p>Am 27. Februar 2026 begann die aktive Bau- und Verkehrsphase für die neue Fuß- und Radwegbrücke über die A94. Im Frühjahr und Sommer folgten weitere Bauabschnitte für die Verbindung in Richtung Messe München. Die Brücke dient nicht nur dem Fuß- und Radverkehr: Nach einem Bericht der tz erhält sie einen rund fünf Meter breiten Grünstreifen, der als Habitat- und Grünvernetzung insbesondere Wechselkröten und anderen Kleintieren eine sichere Querung der Autobahn ermöglichen soll.</p>';
    const sources=contribution.querySelector('ul.sources');
    if(sources && !sources.querySelector('a[href*="94297617"]')){
      sources.insertAdjacentHTML('beforeend','<li><a href="'+tzUrl+'" rel="noopener noreferrer" target="_blank">tz – Neue Brücke über Autobahn in München bekommt Extra für Tiere</a> · 10. Mai 2026</li>');
    }
    contribution.dataset.search=(contribution.textContent||'').toLowerCase();
  }

  const topic=document.getElementById('T003');
  if(topic){
    const date=topic.querySelector('.date');
    if(date) date.textContent='Aktualisiert: 1. September 2026';
    const body=topic.querySelector('.body');
    if(body) body.innerHTML='<p>Der Radverkehr wurde im Jahresverlauf sowohl durch regionale Forderungen als auch durch konkrete Infrastrukturmaßnahmen geprägt. Im September 2025 führte eine Kidical Mass von Aschheim über Feldkirchen zum Heimstettener See und machte sichere Radverbindungen auf der B471 sowie kindgerechte Verkehrsbedingungen zum Thema. Im Oktober beschloss Feldkirchen die Fortführung des Fuß- und Radwegs nördlich der Münchner Straße Richtung A94-Querung; aus der Bürgerversammlung kamen weitere Forderungen zu Radfahr- und Schutzstreifen sowie Schulwegen.</p><p>Ende Februar 2026 begann die Bauphase für die neue Fuß- und Radwegbrücke über die A94. Die Querung verbindet dabei Mobilitäts- und Naturschutzfunktion: Ein rund fünf Meter breiter Grünstreifen soll als Habitatverbindung insbesondere Wechselkröten und anderen Kleintieren eine sichere Querung der Autobahn ermöglichen. Im Juli meldete die Gemeinde außerdem drei neue überdachte Fahrrad-Abstellstationen als Umsetzung des kommunalen Radverkehrskonzepts. Damit reicht das Thema von regionalen Verbindungen über A94 und B471 bis zu innerörtlichen Maßnahmen und zur Frage, wie Verkehrsinfrastruktur zugleich ökologische Vernetzung unterstützen kann.</p>';
    const assessment=topic.querySelector('.assessment');
    if(assessment) assessment.innerHTML='<h4>Unsere Einordnung</h4><p>Die neue A94-Querung ist ein wichtiger Baustein, aber eine gute Radverbindung endet nicht an der Brücke. Entscheidend ist, ob die gesamte Strecke sicher, verständlich und ohne unnötige Umwege befahrbar wird – einschließlich der Anschlüsse an Münchner Straße, Olympiastraße und das innerörtliche Netz.</p><p>Positiv ist, dass die Brücke zugleich eine ökologische Vernetzungsfunktion übernehmen soll. Solche Kombinationen aus sicherer Mobilität und Habitatverbindung zeigen, dass Verkehrsinfrastruktur nicht zwangsläufig nur trennen muss. Für Feldkirchen bleibt deshalb wichtig, bei den weiteren Anschlüssen und Planungen sichere Fuß- und Radwege, Flächensparen und den Schutz beziehungsweise die Vernetzung vorhandener Grünstrukturen gemeinsam zu betrachten.</p>';
    const details=[...topic.querySelectorAll('details')];
    const sources=details.find(d=>d.querySelector('summary')?.textContent.includes('Quellen'));
    if(sources){
      const ul=sources.querySelector('ul');
      if(ul && !ul.querySelector('a[href*="94297617"]')) ul.insertAdjacentHTML('beforeend','<li><a href="'+tzUrl+'" rel="noopener noreferrer" target="_blank"><span class="source-date">10. Mai 2026</span> · tz – Neue Brücke über Autobahn in München bekommt Extra für Tiere</a></li>');
      if(ul) sources.querySelector('summary').textContent='Quellen ('+ul.children.length+')';
    }
    topic.dataset.search=(topic.textContent||'').toLowerCase();
  }
})();
