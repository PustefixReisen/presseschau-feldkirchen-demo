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
          ['Bundesministerium für Verkehr – Gesetz zum autonomen Fahren','https://www.bmv.de/SharedDocs/DE/Artikel/StV/gesetz-zum-autonomen-fahren.html'],
          ['VDV – Autonomes Fahren im ÖPNV','https://www.vdv.de/autonomes-fahren-im-oepnv.aspx'],
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
          ['SWM – Projekt MINGA','https://www.swm.de/unternehmen/magazin/innovation/projekt-minga'],
          ['MVG – Testbetrieb autonome Fahrzeuge','https://www.mvg.de/presse/pressemeldungen/2026-09-07-testbetrieb-autonome-fahrzeuge.html']
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
          ['SWM/MVG – Testbetrieb MINGA','https://www.swm.de/unternehmen/presse/pressemitteilungen/2026/09-2026/mvg-autonome-fahrzeuge-testbetrieb-startet-minga-iav'],
          ['OstAllianz – MobilityHub MünchenOst','https://www.ostallianz.online/seite/758476/mobilityhub-m%C3%BCnchenost.html'],
          ['Landkreis München – MyRadl','https://www.landkreis-muenchen.de/artikel/flexibel-und-umweltfreundlich-unterwegs-myradl-das-bikesharing-system-fuer-die-region-muenchen-startet-am-7-mai-2026/']
        ]
      }
,
      {
        id:'regelbetrieb',
        label:'Was unterscheidet Testbetrieb und Regelbetrieb?',
        answer:[
          'Ein Testbetrieb dient dazu, Technik, Sicherheit und betriebliche Abläufe unter kontrollierten Bedingungen zu erproben. Dafür können besondere Erprobungsgenehmigungen und zusätzliche Sicherheitsmaßnahmen gelten.',
          'Für einen dauerhaften Regelbetrieb müssen Fahrzeug, festgelegter Betriebsbereich und betriebliche Verantwortung die gesetzlichen Anforderungen erfüllen. Deutschland hat dafür einen Rechtsrahmen für autonome Fahrzeuge der Stufe 4 in festgelegten Betriebsbereichen geschaffen. Der Münchner MINGA-Test befindet sich noch in der Erprobungsphase.'
        ],
        sources:[
          ['Bundesministerium für Verkehr – Gesetz zum autonomen Fahren','https://www.bmv.de/SharedDocs/DE/Artikel/StV/gesetz-zum-autonomen-fahren.html'],
          ['SWM/MVG – Testbetrieb MINGA','https://www.swm.de/unternehmen/presse/pressemitteilungen/2026/09-2026/mvg-autonome-fahrzeuge-testbetrieb-startet-minga-iav']
        ]
      },
      {
        id:'oepnv',
        label:'Welche Rolle könnten autonome Fahrzeuge im ÖPNV spielen?',
        answer:[
          'Im öffentlichen Verkehr werden autonome Fahrzeuge vor allem als Ergänzung bestehender Angebote diskutiert. Besonders interessant sind flexible Shuttle- und On-Demand-Verkehre, die Fahrten nach Bedarf bündeln und Lücken zwischen klassischen Linien oder auf der ersten und letzten Meile schließen können.',
          'Ob daraus ein wirtschaftlicher und verlässlicher Regelbetrieb entsteht, hängt jedoch nicht nur von der Fahrzeugtechnik ab. Auch Leitstellen, Buchungssysteme, Barrierefreiheit, Sicherheit, Genehmigungen und die Einbindung in das bestehende Netz müssen funktionieren.'
        ],
        sources:[
          ['VDV – Autonomes Fahren im ÖPNV','https://www.vdv.de/autonomes-fahren-im-oepnv.aspx'],
          ['SWM – Projekt MINGA','https://www.swm.de/unternehmen/magazin/innovation/projekt-minga'],
          ['SWM/MVG – Testbetrieb MINGA','https://www.swm.de/unternehmen/presse/pressemitteilungen/2026/09-2026/mvg-autonome-fahrzeuge-testbetrieb-startet-minga-iav']
        ]
      }
    ]
  };

  let section=card.querySelector('.more-knowledge');
  if(!section){
    section=document.createElement('section');
    section.className='more-knowledge';
    section.dataset.moreKnowledge='R088';
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
  }

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