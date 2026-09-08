(function applyFibUpdate20260908(){
  // Persistenzkorrektur zusätzlich im Frontend absichern: R071 bleibt ohne tragende öffentliche Textquelle unveröffentlicht.
  const r071=document.getElementById('R071');
  if(r071) r071.remove();

  // R072: inzwischen ist der konkrete Gemeindeartikel vom 07.09.2026 stabil verifizierbar.
  const r072=document.getElementById('R072');
  if(r072){
    const date=r072.querySelector('.meta-row .date');
    if(date) date.textContent='7. September 2026';
    const body=r072.querySelector(':scope > .body');
    if(body) body.innerHTML='<p>Die Gemeinde Feldkirchen veröffentlichte am 7. September 2026 den Aufruf der ADFC-Ortsgruppe Ost zum Fahrradklima-Test 2026. Bis 30. November können Radfahrende bewerten, wie fahrradfreundlich ihr Ort ist – etwa mit Blick auf Sicherheit, Komfort, Infrastruktur und die Förderung des Radverkehrs. Neu ist 2026 eine eigene Befragung für 10- bis 20-Jährige; außerdem können Kommunen ihre Anstrengungen zur Radverkehrsförderung dokumentieren.</p>';
    const sources=r072.querySelector(':scope > .sources');
    if(sources){
      const old=[...sources.querySelectorAll('li')].find(li=>/Rund ums Rad|Fahrradklima-Tests/i.test(li.textContent||''));
      if(old) old.outerHTML='<li><a href="https://www.feldkirchen.de/aktuelles/aktuelle-news/aktuelle-meldungen/wie-fahrradfreundlich-ist-feldkirchen" rel="noopener noreferrer" target="_blank">Gemeinde Feldkirchen – Wie fahrradfreundlich ist Feldkirchen?</a> · 7. September 2026</li>';
      else if(!sources.querySelector('a[href*="wie-fahrradfreundlich-ist-feldkirchen"]')) sources.insertAdjacentHTML('beforeend','<li><a href="https://www.feldkirchen.de/aktuelles/aktuelle-news/aktuelle-meldungen/wie-fahrradfreundlich-ist-feldkirchen" rel="noopener noreferrer" target="_blank">Gemeinde Feldkirchen – Wie fahrradfreundlich ist Feldkirchen?</a> · 7. September 2026</li>');
    }
    r072.dataset.search=(r072.textContent||'').toLowerCase();
  }

  // T003: generischen Gemeinde-Hintergrundlink durch die konkrete Meldung ersetzen.
  const t003=document.getElementById('T003');
  if(t003){
    const sourceLinks=[...t003.querySelectorAll('details .sources a')];
    const old=sourceLinks.find(a=>/Rund ums Rad|Fahrradklima-Tests/i.test(a.textContent||''));
    if(old){
      old.href='https://www.feldkirchen.de/aktuelles/aktuelle-news/aktuelle-meldungen/wie-fahrradfreundlich-ist-feldkirchen';
      old.innerHTML='<span class="source-date">7. September 2026</span> · Gemeinde Feldkirchen – Wie fahrradfreundlich ist Feldkirchen?';
    }
    t003.dataset.search=(t003.textContent||'').toLowerCase();
  }

  const note=document.querySelector('.demo-note');
  if(note) note.textContent='Stand 8. September 2026 · Öffentlicher Demonstrator';
})();
