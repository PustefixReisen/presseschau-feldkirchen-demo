(function applyQualityRevision20260910(){
  const setText=(root,selector,text)=>{const el=root?.querySelector(selector); if(el) el.textContent=text;};
  const setHtml=(root,selector,html)=>{const el=root?.querySelector(selector); if(el) el.innerHTML=html;};
  const ensureAssessment=(card,html)=>{
    if(!card) return;
    let section=card.querySelector(':scope > .assessment');
    if(!section){
      section=document.createElement('section');
      section.className='assessment';
      const anchor=card.querySelector(':scope > .minor-link, :scope > .topic-link');
      if(anchor) card.insertBefore(section,anchor); else card.appendChild(section);
    }
    section.innerHTML='<h4>Unsere Einordnung</h4>'+html;
  };
  const refreshSearch=card=>{if(card) card.dataset.search=(card.textContent||'').toLowerCase();};

  // R049: interne Audit-Sprache entfernen und Beschlusslage verständlich darstellen.
  const r049=document.getElementById('R049');
  if(r049){
    setText(r049,':scope > h3','Ettenhuber plant 36 weitere Wohnungen für Busfahrer');
    setText(r049,':scope > .subtitle','Der Carport des neuen Betriebshofs am Otto-Lilienthal-Ring soll dafür um zwei Geschosse aufgestockt werden.');
    setHtml(r049,':scope > .body','<p>Das Busunternehmen Ettenhuber will den Carport seines neuen Betriebshofs am Otto-Lilienthal-Ring um zwei Geschosse mit insgesamt 36 zusätzlichen Wohnungen für Fahrer aufstocken. Nach Berichten des Münchner Merkur stimmte der Ferienausschuss dem Vorhaben am 20. August zu. Im Ratsinformationssystem sind die Sitzung und der Bauantrag veröffentlicht. Eine amtlich veröffentlichte Dokumentation des Beschlussergebnisses liegt FIB derzeit noch nicht vor.</p>');
    r049.querySelectorAll('.sources a').forEach(a=>{if(/salami-taktik|36 zusätzliche wohnungen/i.test((a.textContent||'')+' '+(a.href||''))) a.textContent='Münchner Merkur – 36 zusätzliche Wohnungen für Busfahrer';});
    refreshSearch(r049);
  }

  // R047: konkrete grüne Einordnung der Stellplatzdimensionierung.
  const r047=document.getElementById('R047');
  ensureAssessment(r047,'<p>243 Kfz-Stellplätze für 166 Wohnungen entsprechen rechnerisch rund 1,46 Stellplätzen pro Wohnung. Bei einem so großen Wohnungsbauvorhaben sollte deshalb geprüft werden, ob dieser Stellplatzumfang noch zu einer flächensparenden und zukunftsfähigen Mobilitätsplanung passt. Aus grüner Sicht sollte neuer Wohnraum möglichst gut zu Fuß, mit dem Rad und mit öffentlichen Verkehrsmitteln erreichbar sein, damit nicht von vornherein ein besonders hoher Autobesitz mitgeplant wird. Welche Vorgaben und rechtlichen Spielräume im konkreten Bauantrag bestehen, muss dabei getrennt geprüft werden.</p>');
  refreshSearch(r047);

  // R056: Natur- und Flächenkonflikt des Camping-/Reisemobilparks klar benennen.
  const r056=document.getElementById('R056');
  ensureAssessment(r056,'<p>Ein ganzjähriger Camping- und Reisemobilpark mit 150 Stellplätzen wäre eine erhebliche zusätzliche Nutzung an einem bereits intensiv besuchten Natur- und Erholungsraum. Bevor das Vorhaben weiter konkretisiert wird, sollten deshalb Flächenbedarf, zusätzlicher Verkehr, Eingriffe in Natur und Landschaft sowie Auswirkungen auf die bestehende Erholungsnutzung transparent geprüft werden. Aus grüner Sicht sollte ein neues touristisches Angebot am See nur dann weiterverfolgt werden, wenn Natur- und Gewässerschutz sowie eine möglichst umweltverträgliche Anreise verbindlich mitgedacht werden.</p>');
  refreshSearch(r056);

  // R063: Verbraucherschutz und soziale Tragfähigkeit deutlicher herausarbeiten,
  // ohne die nicht bestätigten Vorwürfe der BI als Tatsachen zu übernehmen.
  const r063=document.getElementById('R063');
  ensureAssessment(r063,'<p>Die Bürgerinitiative stellt konkrete Fragen zu Preisen, Abrechnung und Transparenz der AFK. Ihre Rechts- und Missbrauchsvorwürfe sind damit nicht bewiesen; sie brauchen eine unabhängige Prüfung und dürfen nicht als festgestellte Tatsachen behandelt werden. Für die Akzeptanz der Wärmewende reicht es aber auch nicht, solche Fragen nur formal zurückzuweisen.</p><p>Erneuerbare Wärme muss für Kundinnen und Kunden nachvollziehbar und bezahlbar bleiben. Deshalb sollten Preisbildung, Preisänderungen, wirtschaftliche Grundlagen und Entscheidungswege so transparent erklärt werden, wie es rechtlich möglich ist. Gerade bei einem kommunal getragenen Wärmeversorger gehören Verbraucherschutz, soziale Tragfähigkeit und ein sichtbarer Umgang mit begründeter Kritik zur politischen Verantwortung.</p>');
  refreshSearch(r063);

  // T001: Wärmewende und soziale/verbraucherbezogene Perspektive verbinden.
  const t001=document.getElementById('T001');
  ensureAssessment(t001,'<p>Die Geothermie ist für Feldkirchen ein zentraler Baustein einer klimafreundlichen Wärmeversorgung. Der Ausbau kann aber nur dauerhaft überzeugen, wenn er mit nachvollziehbaren Preisen, verlässlichen Vertragsbedingungen und transparenter Kommunikation verbunden ist.</p><p>Die Vorwürfe der BI-AFK sind nicht automatisch richtig und dürfen ohne unabhängige Bestätigung nicht als Tatsachen übernommen werden. Konkrete Fragen zu Preisbildung und Abrechnung sollten dennoch nachvollziehbar beantwortet werden. Aus grüner Sicht gehören Klimaschutz und soziale Tragfähigkeit zusammen: Erneuerbare Wärme muss nicht nur technisch verfügbar, sondern für die angeschlossenen Haushalte auch verständlich kalkuliert und langfristig bezahlbar sein.</p>');
  refreshSearch(t001);

  // T009: bei Wohnungsbau konkreter statt abstrakt über Mobilität und Flächenverbrauch sprechen.
  const t009=document.getElementById('T009');
  ensureAssessment(t009,'<p>Feldkirchen braucht zusätzlichen Wohnraum – entscheidend ist aber, welcher Wohnraum entsteht und wie er in den Ort eingebunden wird. Bezahlbarkeit, sparsamer Umgang mit Fläche, gute Alltagsversorgung und eine Mobilität, die nicht vor allem zusätzlichen Autoverkehr erzeugt, sollten bei größeren Vorhaben gemeinsam betrachtet werden.</p><p>Beim Vorhaben zwischen Hohenlindner Straße und Jahnstraße fallen 243 Kfz-Stellplätze für 166 Wohnungen auf – rechnerisch rund 1,46 Stellplätze pro Wohnung. Das ist ein konkreter Anlass zu prüfen, ob die Stellplatzdimensionierung noch zu einer flächensparenden Verkehrswende passt. Wo Feldkirchen über Bauleitplanung steuern kann, sollte die Gemeinde Spielräume für bezahlbaren Wohnraum, geringeren Flächenverbrauch und gute Fuß-, Rad- und ÖPNV-Anbindung konsequent nutzen. Bei rechtlich gebundenen Einzelgenehmigungen müssen politische Ziele und tatsächlicher Entscheidungsspielraum klar getrennt bleiben.</p>');
  refreshSearch(t009);

  // T012: Autobahnausbau selbst zum Gegenstand der grünen Bewertung machen.
  const t012=document.getElementById('T012');
  ensureAssessment(t012,'<p>Der geplante Ausbau von A99 und A94 sowie der Umbau des Autobahnkreuzes München-Ost bedeuten einen erheblichen zusätzlichen Eingriff in einen ohnehin stark von Verkehrsinfrastruktur geprägten Raum. Für Feldkirchen geht es deshalb nicht nur darum, die Folgen des Ausbaus möglichst gut abzufedern. Es muss auch geprüft werden, ob Umfang und Dimensionierung des Vorhabens angesichts von Flächenverbrauch, zusätzlicher Versiegelung, Lärm und Klimazielen noch überzeugend begründet sind.</p><p>Wo Bund und Autobahn GmbH weiterplanen, sollte Feldkirchen seine verbliebenen Einflussmöglichkeiten konsequent nutzen: für wirksamen Lärmschutz, möglichst geringe zusätzliche Flächeninanspruchnahme, sichere Rad- und Fußverbindungen, funktionierende Grün- und Biotopvernetzung sowie möglichst wenig Ausweich- und Baustellenverkehr im Ort. Zur grünen Perspektive gehört zugleich die Frage, ob Verkehrsprobleme langfristig vor allem durch mehr Straßenkapazität gelöst werden sollen oder stärker durch Bahn, Bus, Radverkehr und Verkehrsvermeidung.</p>');
  refreshSearch(t012);

  // T013: nur textquellenbasierten Sachstand zeigen; Fotobeobachtung bleibt unveröffentlicht.
  document.getElementById('R071')?.remove();
  const t013=document.getElementById('T013');
  if(t013){
    setText(t013,':scope > .meta-row .date','Aktualisiert: 20. August 2026');
    setText(t013,':scope > h3','Heimstettener See: Nutzung, Erholung und Gesundheit');
    setHtml(t013,':scope > .body','<p>Am Heimstettener See treffen unterschiedliche Nutzungs-, Verkehrs-, Natur- und Gesundheitsfragen aufeinander. Im Januar 2026 wurden an Parkplätzen Höhenbegrenzer installiert. Im Juli stimmte der Aschheimer Bau- und Umweltausschuss einem geplanten ganzjährigen Natur-Camping- und Reisemobilpark mit 150 Stellplätzen grundsätzlich zu. Im August wies das Gesundheitsamt Cyanobakterien insbesondere am Südufer nach und riet vorsorglich vom Baden und Schwimmen im gesamten See ab. Weil der Erholungsraum gemeindeübergreifend genutzt wird, betreffen diese Entwicklungen auch Feldkirchen unmittelbar.</p>');
    ensureAssessment(t013,'<p>Der Heimstettener See ist ein gemeinsamer Natur- und Erholungsraum. Ein ganzjähriger Camping- und Reisemobilpark mit 150 Stellplätzen würde dort eine erhebliche zusätzliche Nutzung schaffen. Bevor das Vorhaben weiter konkretisiert wird, sollten deshalb Flächenbedarf, zusätzlicher Verkehr, Natur- und Gewässerschutz sowie Auswirkungen auf die bestehende Erholungsnutzung transparent geprüft werden.</p><p>Aus grüner Sicht sollte die weitere Entwicklung des Sees seine ökologische Belastbarkeit in den Mittelpunkt stellen. Neue Freizeitangebote müssen sich daran messen lassen, ob sie mit Natur- und Gewässerschutz vereinbar sind und ohne unnötigen zusätzlichen Autoverkehr organisiert werden können. Die aktuellen Cyanobakterienfunde unterstreichen zudem, wie wichtig eine verständliche und gemeindeübergreifende Information zur Wasserqualität ist.</p>');
    const details=[...t013.querySelectorAll(':scope > details')];
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
    document.querySelectorAll('a[href="#T013"]').forEach(link=>{link.textContent='Mehr zum Thema: Heimstettener See: Nutzung, Erholung und Gesundheit';});
    refreshSearch(t013);
  }

  // Qualitätsdatum ist keine fachliche Themenaktualisierung; Stand des Demonstrators bleibt 10.09.2026.
  const note=document.querySelector('.demo-note');
  if(note) note.textContent='Stand 10. September 2026 · Öffentlicher Demonstrator';
})();
