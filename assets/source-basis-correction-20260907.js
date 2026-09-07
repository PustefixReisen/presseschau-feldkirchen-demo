(function applySourceBasisCorrection20260907(){
  // R071 beruhte ausschließlich auf eigener Fotobeobachtung. Ohne konkrete öffentliche
  // Textquelle darf daraus nach der korrigierten FIB-Regel kein öffentlicher Beitrag entstehen.
  const r071=document.getElementById('R071');
  if(r071) r071.remove();

  // T013 auf den letzten durch konkrete öffentliche Textquellen belegten Stand zurückführen.
  const topic=document.getElementById('T013');
  if(topic){
    const date=topic.querySelector('.meta-row .date');
    if(date) date.textContent='Aktualisiert: 20. August 2026';

    const heading=topic.querySelector(':scope > h3');
    if(heading) heading.textContent='Heimstettener See: Nutzung, Erholung und Gesundheit';

    const body=topic.querySelector(':scope > .body');
    if(body) body.innerHTML='<p>Am Heimstettener See treffen unterschiedliche Nutzungs-, Verkehrs-, Natur- und Gesundheitsfragen aufeinander. Im Januar 2026 wurden an Parkplätzen Höhenbegrenzer installiert. Im Juli stimmte der Aschheimer Bau- und Umweltausschuss einem geplanten ganzjährigen Natur-Camping- und Reisemobilpark mit 150 Stellplätzen grundsätzlich zu. Im August wies das Gesundheitsamt Cyanobakterien insbesondere am Südufer nach und riet vorsorglich vom Baden und Schwimmen im gesamten See ab. Weil der Erholungsraum gemeindeübergreifend genutzt wird, betreffen diese Entwicklungen auch Feldkirchen unmittelbar.</p>';

    const assessment=topic.querySelector(':scope > .assessment');
    if(assessment) assessment.innerHTML='<h4>Unsere Einordnung</h4><p>Der Heimstettener See ist ein gemeinsamer Erholungsraum und sollte entsprechend gemeindeübergreifend betrachtet werden. Freizeitnutzung, gute Erreichbarkeit und neue Angebote müssen mit Natur- und Gewässerschutz sowie gesundheitlicher Vorsorge zusammenpassen. Bei zusätzlichen Nutzungen ist deshalb besonders wichtig, Verkehr, Flächenbedarf und ökologische Belastungen früh mitzudenken und Entwicklungen der Wasserqualität transparent zu kommunizieren.</p>';

    const details=[...topic.querySelectorAll(':scope > details')];
    const questions=details.find(d=>/Offene Fragen/i.test(d.querySelector('summary')?.textContent||''));
    if(questions) questions.innerHTML='<summary>Offene Fragen (3)</summary><ul><li>Wie werden Besucherlenkung, Parken und nachhaltige Anreise am Heimstettener See künftig aufeinander abgestimmt?</li><li>Welche Auswirkungen hätte der geplante Camping- und Reisemobilpark auf Verkehr, Naturraum und Erholungsnutzung?</li><li>Wie werden Wasserqualität und gesundheitliche Risiken langfristig beobachtet und kommuniziert?</li></ul>';

    const sources=details.find(d=>/Quellen/i.test(d.querySelector('summary')?.textContent||''));
    if(sources){
      const ul=sources.querySelector('ul');
      if(ul){
        [...ul.children].forEach(li=>{
          const text=li.textContent||'';
          const href=li.querySelector('a')?.getAttribute('href')||'';
          if(/fotografische dokumentation/i.test(text) || /themen\/freizeit-kultur-sport\/badeseen-und-badegewaesser\/heimstettener-see\/?$/i.test(href)) li.remove();
        });
        sources.querySelector('summary').textContent='Quellen ('+ul.children.length+')';
      }
    }
    topic.dataset.search=(topic.textContent||'').toLowerCase();
  }

  // Alle sichtbaren Themenlinks auf die korrigierte Themenbezeichnung zurücksetzen.
  document.querySelectorAll('a[href="#T013"]').forEach(link=>{
    link.textContent='Mehr zum Thema: Heimstettener See: Nutzung, Erholung und Gesundheit';
  });
})();
