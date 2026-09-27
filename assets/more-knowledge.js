(function initMoreKnowledgePrototype(){
  const card=document.getElementById('R088');
  if(!card)return;

  const prototype={
    questions:[
      {
        id:'stand',
        label:'Wie weit ist autonomes Fahren im ÖPNV heute?',
        answer:[
          'Autonomes Fahren im öffentlichen Verkehr ist technisch über reine Assistenzsysteme hinaus, aber noch nicht flächendeckender Alltag. In Deutschland gibt es einen Rechtsrahmen für autonome Fahrzeuge in festgelegten Betriebsbereichen. Praktisch werden solche Systeme derzeit vor allem in klar begrenzten Einsatzgebieten und Projekten erprobt.',
          'Beim Münchner Projekt MINGA fahren die Fahrzeuge zunächst ohne Fahrgäste und mit Sicherheitsfahrpersonal. Das zeigt: Die Technik ist weit genug für reale Tests im öffentlichen Straßenraum, aber der Übergang in einen regulären, fahrerlosen Fahrgastbetrieb ist noch Gegenstand der Erprobung.'
        ],
        sources:[
          ['BMV – Automatisiertes und vernetztes Fahren','https://www.bmv.de/digitalestestfeldautobahn'],
          ['SWM/MVG – Testbetrieb MINGA','https://www.swm.de/unternehmen/presse/pressemitteilungen/2026/09-2026/mvg-autonome-fahrzeuge-testbetrieb-startet-minga-iav']
        ]
      },
      {
        id:'muenchen',
        label:'Was wird in München konkret getestet?',
        answer:[
          'Im Projekt MINGA testen SWM, MVG und IAV drei automatisierte VW ID. Buzz im Stadtviertel Gern. Zunächst fahren sie auf festgelegten Strecken ohne Fahrgäste und mit Sicherheitsfahrpersonal.',
          'Getestet wird nicht nur das Fahren selbst. Untersucht werden auch Fahrgastinformation, Sicherheitskonzept, Leitstellenanbindung und die spätere Einbindung eines On-Demand-Systems. In einer späteren Phase sollen Fahrtwünsche per App berücksichtigt und ausgewählte Testnutzerinnen und Testnutzer mitgenommen werden.'
        ],
        sources:[
          ['SWM/MVG – Autonome On-Demand-Fahrzeuge für München','https://www.swm.de/unternehmen/presse/pressemitteilungen/2026/09-2026/mvg-autonome-fahrzeuge-testbetrieb-startet-minga-iav'],
          ['SWM – Projekt MINGA','https://www.swm.de/unternehmen/magazin/innovation/projekt-minga']
        ]
      },
      {
        id:'feldkirchen',
        label:'Was könnte das später für Feldkirchen bedeuten?',
        answer:[
          'Für Feldkirchen gibt es derzeit keinen konkreten Einsatzplan für autonome On-Demand-Fahrzeuge. Der aktuelle Test findet in München statt.',
          'Interessant könnte die Technik später dort werden, wo klassische Linienangebote Lücken haben oder die erste und letzte Meile zum Bahnhof verbessert werden soll. Für Feldkirchen wäre deshalb vor allem relevant, ob solche Angebote künftig mit S-Bahn, Bus, Bikesharing oder einem möglichen MobilityHub verknüpft werden können. Das ist derzeit eine mögliche Entwicklung, keine angekündigte Maßnahme.'
        ],
        sources:[
          ['SWM/MVG – Testbetrieb MINGA','https://www.swm.de/unternehmen/presse/pressemitteilungen/2026/09-2026/mvg-autonome-fahrzeuge-testbetrieb-startet-minga-iav']
        ]
      }
    ]
  };

  const section=document.createElement('section');
  section.className='more-knowledge';
  section.innerHTML='<h4>Mehr wissen?</h4><p class="more-knowledge-intro">Die Meldung ist der Einstieg: Hier kannst du Hintergründe und Zusammenhänge erkunden.</p><div class="more-knowledge-questions"></div><button type="button" class="more-knowledge-own">Eigene Frage stellen …</button>';
  const topicLink=card.querySelector('.topic-link');
  const objectLinks=card.querySelector('.object-links');
  const anchor=objectLinks||topicLink;
  if(anchor) anchor.insertAdjacentElement('beforebegin',section);
  else card.appendChild(section);

  const questions=section.querySelector('.more-knowledge-questions');
  prototype.questions.forEach(q=>{
    const button=document.createElement('button');
    button.type='button';
    button.className='more-knowledge-question';
    button.dataset.questionId=q.id;
    button.textContent=q.label;
    questions.appendChild(button);
  });

  const dialog=document.createElement('dialog');
  dialog.className='more-knowledge-dialog';
  dialog.innerHTML='<div class="more-knowledge-dialog-inner"><button class="more-knowledge-close" type="button" aria-label="Dialog schließen">×</button><div class="more-knowledge-dialog-content"></div></div>';
  document.body.appendChild(dialog);

  function openQuestion(id){
    const q=prototype.questions.find(item=>item.id===id);
    if(!q)return;
    const body=dialog.querySelector('.more-knowledge-dialog-content');
    body.innerHTML=`
      <div class="minor">Mehr wissen?</div>
      <h3>${q.label}</h3>
      ${q.answer.map(p=>`<p>${p}</p>`).join('')}
      <h4>Quellen</h4>
      <ul class="sources">${q.sources.map(([name,url])=>`<li><a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a></li>`).join('')}</ul>
      <p class="minor">Prototyp: Diese Antwort ist redaktionell vorbereitet. Im Echtbetrieb soll sie von einem FIB-Assistenten aus dem aktuellen Beitrag, den verknüpften FIB-Inhalten und freigegebenen Quellen erzeugt werden.</p>
    `;
    if(typeof dialog.showModal==='function')dialog.showModal();
    else dialog.setAttribute('open','');
  }

  function openOwnQuestion(){
    const body=dialog.querySelector('.more-knowledge-dialog-content');
    body.innerHTML=`
      <div class="minor">Mehr wissen?</div>
      <h3>Eigene Frage stellen</h3>
      <p>Im Echtbetrieb kannst du hier eine Frage zu diesem Beitrag oder seinem sachlichen Umfeld stellen.</p>
      <label class="more-knowledge-label" for="more-knowledge-input">Deine Frage</label>
      <textarea id="more-knowledge-input" rows="4" placeholder="Zum Beispiel: Wo werden autonome Shuttles schon im Alltag eingesetzt?"></textarea>
      <button type="button" class="button-link more-knowledge-prototype-submit">Frage stellen</button>
      <p class="minor">Im Demonstrator ist noch keine KI-API angeschlossen. Das Eingabefeld dient nur dazu, das Lese- und Bedienkonzept zu testen.</p>
    `;
    if(typeof dialog.showModal==='function')dialog.showModal();
    else dialog.setAttribute('open','');
  }

  section.addEventListener('click',event=>{
    const q=event.target.closest('.more-knowledge-question');
    if(q){openQuestion(q.dataset.questionId);return;}
    if(event.target.closest('.more-knowledge-own'))openOwnQuestion();
  });

  dialog.addEventListener('click',event=>{
    if(event.target.closest('.more-knowledge-close'))dialog.close();
    else if(event.target===dialog)dialog.close();
  });
})();