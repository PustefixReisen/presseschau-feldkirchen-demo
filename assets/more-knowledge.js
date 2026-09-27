(function initMoreKnowledge(){
  const ROLE_LABELS={
    primary:'Ausgangsmeldung',
    context:'Kontext',
    local:'Lokaler Kontext',
    regional:'Regionaler Kontext',
    framework:'Fach-/Rechtsrahmen',
    practice:'Praxisbeispiel',
    press:'Pressebericht',
    position:'Position / Akteur',
    fib:'FIB-Zusammenhang',
    topic:'Themenkontext'
  };

  const curated={
    R088:[
      {
        id:'stand',
        label:'Wie weit ist autonomes Fahren im ÖPNV heute?',
        answer:[
          'Autonomes Fahren im öffentlichen Verkehr ist technisch über reine Assistenzsysteme hinaus, aber noch nicht flächendeckender Alltag. In Deutschland gibt es einen Rechtsrahmen für autonome Fahrzeuge in festgelegten Betriebsbereichen. Praktisch werden solche Systeme derzeit vor allem in klar begrenzten Einsatzgebieten und Projekten erprobt.',
          'Beim Münchner Projekt MINGA fahren die Fahrzeuge zunächst ohne Fahrgäste und mit Sicherheitsfahrpersonal. Das zeigt: Die Technik ist weit genug für reale Tests im öffentlichen Straßenraum, aber der Übergang in einen regulären, fahrerlosen Fahrgastbetrieb ist noch Gegenstand der Erprobung.'
        ],
        sources:[
          {role:'framework',name:'Bundesministerium für Verkehr – Gesetz zum autonomen Fahren',url:'https://www.bmv.de/SharedDocs/DE/Artikel/StV/gesetz-zum-autonomen-fahren.html'},
          {role:'framework',name:'VDV – Autonomes Fahren im ÖPNV',url:'https://www.vdv.de/autonomes-fahren-im-oepnv.aspx'},
          {role:'primary',name:'SWM/MVG – Testbetrieb MINGA',url:'https://www.swm.de/unternehmen/presse/pressemitteilungen/2026/09-2026/mvg-autonome-fahrzeuge-testbetrieb-startet-minga-iav'}
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
          {role:'primary',name:'SWM/MVG – Autonome On-Demand-Fahrzeuge für München',url:'https://www.swm.de/unternehmen/presse/pressemitteilungen/2026/09-2026/mvg-autonome-fahrzeuge-testbetrieb-startet-minga-iav'},
          {role:'context',name:'SWM – Projekt MINGA',url:'https://www.swm.de/unternehmen/magazin/innovation/projekt-minga'},
          {role:'context',name:'MVG – Testbetrieb autonome Fahrzeuge',url:'https://www.mvg.de/presse/pressemeldungen/2026-09-07-testbetrieb-autonome-fahrzeuge.html'}
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
          {role:'primary',name:'SWM/MVG – Testbetrieb MINGA',url:'https://www.swm.de/unternehmen/presse/pressemitteilungen/2026/09-2026/mvg-autonome-fahrzeuge-testbetrieb-startet-minga-iav'},
          {role:'local',name:'OstAllianz – MobilityHub MünchenOst',url:'https://www.ostallianz.online/seite/758476/mobilityhub-m%C3%BCnchenost.html'},
          {role:'regional',name:'Landkreis München – MyRadl',url:'https://www.landkreis-muenchen.de/artikel/flexibel-und-umweltfreundlich-unterwegs-myradl-das-bikesharing-system-fuer-die-region-muenchen-startet-am-7-mai-2026/'}
        ]
      },
      {
        id:'regelbetrieb',
        label:'Was unterscheidet Testbetrieb und Regelbetrieb?',
        answer:[
          'Ein Testbetrieb dient dazu, Technik, Sicherheit und betriebliche Abläufe unter kontrollierten Bedingungen zu erproben. Dafür können besondere Erprobungsgenehmigungen und zusätzliche Sicherheitsmaßnahmen gelten.',
          'Für einen dauerhaften Regelbetrieb müssen Fahrzeug, festgelegter Betriebsbereich und betriebliche Verantwortung die gesetzlichen Anforderungen erfüllen. Deutschland hat dafür einen Rechtsrahmen für autonome Fahrzeuge der Stufe 4 in festgelegten Betriebsbereichen geschaffen. Der Münchner MINGA-Test befindet sich noch in der Erprobungsphase.'
        ],
        sources:[
          {role:'framework',name:'Bundesministerium für Verkehr – Gesetz zum autonomen Fahren',url:'https://www.bmv.de/SharedDocs/DE/Artikel/StV/gesetz-zum-autonomen-fahren.html'},
          {role:'primary',name:'SWM/MVG – Testbetrieb MINGA',url:'https://www.swm.de/unternehmen/presse/pressemitteilungen/2026/09-2026/mvg-autonome-fahrzeuge-testbetrieb-startet-minga-iav'}
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
          {role:'framework',name:'VDV – Autonomes Fahren im ÖPNV',url:'https://www.vdv.de/autonomes-fahren-im-oepnv.aspx'},
          {role:'practice',name:'SWM – Projekt MINGA',url:'https://www.swm.de/unternehmen/magazin/innovation/projekt-minga'},
          {role:'primary',name:'SWM/MVG – Testbetrieb MINGA',url:'https://www.swm.de/unternehmen/presse/pressemitteilungen/2026/09-2026/mvg-autonome-fahrzeuge-testbetrieb-startet-minga-iav'}
        ]
      }
    ]
  };

  function text(el){return el?el.textContent.replace(/\s+/g,' ').trim():'';}
  function htmlEscape(value){return String(value||'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
  function linkData(a,role){
    return {role:role||classifySource(a),name:text(a),url:a.getAttribute('href')||'#'};
  }
  function classifySource(a){
    const href=(a.getAttribute('href')||'').toLowerCase();
    const label=text(a).toLowerCase();
    if(href.startsWith('#'))return 'fib';
    if(/buergerinfo-feldkirchen|feldkirchen\.de/.test(href))return 'local';
    if(/landkreis-muenchen|ostallianz|aschheim\.de|kirchheim-heimstetten|haar\.bayern/.test(href))return 'regional';
    if(/bmv\.|bund\.de|gesetze-im-internet|vdv\.de/.test(href))return 'framework';
    if(/merkur\.de|sueddeutsche|br\.de|zdf\.de|ard\.de/.test(href))return 'press';
    if(/bi-afk|buergerinitiative|gruene|csu|spd|fdp|fw-/.test(href+' '+label))return 'position';
    return 'primary';
  }
  function sourceHtml(s){
    const role=ROLE_LABELS[s.role]||ROLE_LABELS.context;
    return '<li><span class="more-knowledge-source-role">'+htmlEscape(role)+'</span><a href="'+htmlEscape(s.url)+'" target="'+(String(s.url).startsWith('#')?'_self':'_blank')+'" rel="noopener noreferrer">'+htmlEscape(s.name)+'</a></li>';
  }
  function sourceList(card,limit,role){
    return Array.from(card.querySelectorAll('.sources a')).slice(0,limit||6).map(a=>linkData(a,role));
  }
  function ownQuestionPlaceholder(card){
    const title=text(card.querySelector('h3'));
    return title ? 'Zum Beispiel: Was ist bei „'+title+'“ noch wichtig zu wissen?' : 'Was möchtest du dazu noch wissen?';
  }
  function bodyParagraphs(card){
    return Array.from(card.querySelectorAll(':scope > .body > p')).map(text).filter(Boolean);
  }
  function significance(card){
    const ps=Array.from(card.querySelectorAll(':scope > p'));
    const p=ps.find(el=>/^(Mögliche Bedeutung für Feldkirchen|Warum für Feldkirchen interessant|Bedeutung für Feldkirchen)/i.test(text(el)));
    if(!p)return '';
    return text(p).replace(/^(Mögliche Bedeutung für Feldkirchen|Warum für Feldkirchen interessant|Bedeutung für Feldkirchen)\s*:\s*/i,'');
  }
  function historyDetails(card){
    return Array.from(card.querySelectorAll(':scope > details')).find(d=>/Was bisher|Bisheriger Verlauf|Aktualisierungen|Was sich geändert hat/i.test(text(d.querySelector('summary'))));
  }
  function openDetails(card){
    return Array.from(card.querySelectorAll(':scope > details')).find(d=>/offen/i.test(text(d.querySelector('summary'))));
  }
  function topicLink(card){
    return card.querySelector(':scope > .topic-link a[href^="#T"]');
  }
  function findTopic(a){
    if(!a)return null;
    const id=(a.getAttribute('href')||'').slice(1);
    return id?document.getElementById(id):null;
  }
  function contributionQuestions(card){
    if(curated[card.id])return curated[card.id];
    const q=[];
    const body=bodyParagraphs(card);
    const sources=sourceList(card,6);
    const sig=significance(card);
    const hist=historyDetails(card);
    const tLink=topicLink(card);
    const topic=findTopic(tLink);

    if(body.length){
      q.push({
        id:'kern',
        label:'Was ist der Kern dieser Meldung?',
        answer:body,
        sources:sources.slice(0,4).map((s,i)=>({...s,role:i===0?'primary':s.role}))
      });
    }
    if(hist){
      const items=Array.from(hist.querySelectorAll('li')).map(text).filter(Boolean);
      const fibLinks=Array.from(hist.querySelectorAll('a')).map(a=>linkData(a,'fib'));
      if(items.length)q.push({
        id:'verlauf',
        label:'Was ist bisher passiert?',
        answer:['Der aktuelle Beitrag steht in einem bereits laufenden Zusammenhang. Die wichtigsten vorherigen Schritte sind: '+items.join(' · ')],
        sources:fibLinks.length?fibLinks:sources.slice(0,3)
      });
    }
    if(topic){
      const title=text(topic.querySelector('h3'));
      const tp=bodyParagraphs(topic);
      const ts=sourceList(topic,5,'topic');
      if(tp.length)q.push({
        id:'thema',
        label:'Wie hängt das mit „'+title+'“ zusammen?',
        answer:tp,
        sources:[{role:'fib',name:'FIB-Thema – '+title,url:'#'+topic.id},...ts]
      });
    }
    if(sig){
      q.push({
        id:'feldkirchen',
        label:'Warum ist das für Feldkirchen interessant?',
        answer:[sig],
        sources:sources.slice(0,4)
      });
    }
    if(sources.length>=2){
      q.push({
        id:'belegt',
        label:'Wie ist der Sachstand belegt?',
        answer:['FIB stützt diese Meldung auf mehrere Quellen. Sie werden nicht nur gezählt, sondern nach ihrer Funktion betrachtet: Original- oder Verwaltungsquellen belegen den unmittelbaren Sachstand; Presse- und Kontextquellen können zusätzliche Einordnung, Resonanz oder regionale Zusammenhänge liefern. Maßgeblich bleiben die verlinkten Originalquellen.'],
        sources
      });
    }
    const hasExtra=hist||topic||sig||sources.length>=2||body.join(' ').length>360;
    return hasExtra?q.slice(0,5):[];
  }
  function topicQuestions(card){
    const q=[];
    const title=text(card.querySelector('h3'));
    const body=bodyParagraphs(card);
    const sources=sourceList(card,8,'topic');
    const open=openDetails(card);
    if(body.length)q.push({
      id:'ueberblick',
      label:'Worum geht es bei „'+title+'“?',
      answer:body,
      sources:sources.slice(0,5)
    });
    if(open){
      const items=Array.from(open.querySelectorAll('li')).map(text).filter(Boolean);
      if(items.length)q.push({
        id:'offen',
        label:'Was ist bei diesem Thema noch offen?',
        answer:['Der aktuelle Themenstand lässt insbesondere folgende Fragen offen: '+items.join(' · ')],
        sources:sources.slice(0,5)
      });
    }
    const linked=Array.from(document.querySelectorAll('.card.contribution')).filter(c=>{
      const a=c.querySelector('.topic-link a[href="#'+card.id+'"]');
      return !!a;
    }).slice(0,10);
    if(linked.length){
      q.push({
        id:'beitraege',
        label:'Welche Entwicklungen gehören zu diesem Thema?',
        answer:['FIB verknüpft derzeit '+linked.length+' sichtbare Beiträge mit diesem Thema. Über die Quellen unten kannst du direkt zu diesen Entwicklungsschritten springen.'],
        sources:linked.map(c=>({role:'fib',name:(text(c.querySelector('.date'))?text(c.querySelector('.date'))+' · ':'')+text(c.querySelector('h3')),url:'#'+c.id}))
      });
    }
    if(sources.length){
      q.push({
        id:'quellen',
        label:'Auf welchen Quellen beruht der Themenstand?',
        answer:['Ein FIB-Thema bündelt Quellen aus mehreren Zeitpunkten. Für die Vertiefung werden sie funktional genutzt: aktuelle Primärquellen tragen den jeweiligen Sachstand, weitere Quellen dokumentieren Verlauf, regionale Zusammenhänge, Positionen oder fachlichen Kontext.'],
        sources
      });
    }
    return q.slice(0,5);
  }

  const dialog=document.createElement('dialog');
  dialog.className='more-knowledge-dialog';
  dialog.innerHTML='<div class="more-knowledge-dialog-inner"><button class="more-knowledge-close" type="button" aria-label="Dialog schließen">×</button><div class="more-knowledge-dialog-content"></div></div>';
  document.body.appendChild(dialog);
  let activeCard=null;

  function openQuestion(q){
    const body=dialog.querySelector('.more-knowledge-dialog-content');
    body.innerHTML='<div class="minor">Mehr wissen?</div><h3>'+htmlEscape(q.label)+'</h3>'+
      q.answer.map(p=>'<p>'+htmlEscape(p)+'</p>').join('')+
      (q.sources&&q.sources.length?'<h4>Quellen und ihre Funktion</h4><ul class="sources more-knowledge-sources">'+q.sources.map(sourceHtml).join('')+'</ul>':'')+
      '<p class="minor">Demonstrator: Die Antwort ist aus dem geprüften FIB-Kontext bzw. – bei besonders vertieften Fragen – aus ausdrücklich hinterlegten Fachquellen aufgebaut. Im Echtbetrieb soll der FIB-Assistent diese Quellenlogik dynamisch anwenden.</p>';
    if(typeof dialog.showModal==='function')dialog.showModal(); else dialog.setAttribute('open','');
  }
  function openOwnQuestion(card){
    activeCard=card;
    const body=dialog.querySelector('.more-knowledge-dialog-content');
    body.innerHTML='<div class="minor">Mehr wissen?</div><h3>Eigene Frage stellen</h3>'+
      '<p>Im Echtbetrieb kannst du hier eine Frage zu diesem Beitrag oder Thema und seinem sachlichen Umfeld stellen.</p>'+
      '<label class="more-knowledge-label" for="more-knowledge-input">Deine Frage</label>'+
      '<textarea id="more-knowledge-input" rows="4" placeholder="'+htmlEscape(ownQuestionPlaceholder(card))+'"></textarea>'+
      '<button type="button" class="button-link more-knowledge-prototype-submit">Frage stellen</button>'+
      '<p class="minor">Im Demonstrator ist noch keine KI-API angeschlossen. Das Eingabefeld dient zur Erprobung des Lese- und Bedienkonzepts.</p>';
    if(typeof dialog.showModal==='function')dialog.showModal(); else dialog.setAttribute('open','');
  }
  function install(card,questions){
    let section=card.querySelector(':scope > .more-knowledge');
    if(!questions.length){if(section)section.remove();return;}
    if(!section){
      section=document.createElement('section');
      section.className='more-knowledge';
      const topic=card.querySelector(':scope > .topic-link');
      const objectLinks=card.querySelector(':scope > .object-links');
      const info=card.querySelector(':scope > .fib-info-row');
      const anchor=objectLinks||topic||info;
      if(anchor)anchor.insertAdjacentElement('beforebegin',section); else card.appendChild(section);
    }
    section.dataset.moreKnowledge=card.id||'';
    section.innerHTML='<h4>Mehr wissen?</h4><p class="more-knowledge-intro">Die Meldung oder das Thema ist der Einstieg: Hier kannst du Hintergründe und Zusammenhänge erkunden.</p><div class="more-knowledge-questions"></div><button type="button" class="more-knowledge-own">Eigene Frage stellen …</button>';
    const box=section.querySelector('.more-knowledge-questions');
    questions.forEach((q,i)=>{
      const b=document.createElement('button');
      b.type='button'; b.className='more-knowledge-question'; b.dataset.questionIndex=String(i); b.textContent=q.label; box.appendChild(b);
    });
    section.addEventListener('click',event=>{
      const b=event.target.closest('.more-knowledge-question');
      if(b){openQuestion(questions[Number(b.dataset.questionIndex)]);return;}
      if(event.target.closest('.more-knowledge-own'))openOwnQuestion(card);
    });
  }

  document.querySelectorAll('.card.contribution').forEach(card=>install(card,contributionQuestions(card)));
  document.querySelectorAll('#topic-list .card').forEach(card=>install(card,topicQuestions(card)));

  dialog.addEventListener('click',event=>{
    if(event.target.closest('.more-knowledge-close'))dialog.close();
    else if(event.target===dialog)dialog.close();
    else if(event.target.closest('.more-knowledge-prototype-submit')){
      const input=dialog.querySelector('#more-knowledge-input');
      const value=input?input.value.trim():'';
      if(value){
        const note=document.createElement('p');
        note.className='minor more-knowledge-prototype-note';
        note.textContent='Die Frage ist erfasst, wird im Demonstrator aber noch nicht an eine KI übertragen.';
        event.target.insertAdjacentElement('afterend',note);
        event.target.disabled=true;
      }
    }
  });
})();