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
  function backgroundDirections(card){
    const hay=(text(card.querySelector('h3'))+' '+text(card.querySelector('.subtitle'))+' '+text(card.querySelector('.body'))+' '+(card.dataset.tags||'')+' '+text(card.querySelector('.category'))).toLowerCase();
    const dirs=[];

    const add=(id,label,focus)=>{
      if(!dirs.some(x=>x.id===id))dirs.push({
        id,
        label,
        answer:[
          'Diese Frage geht bewusst über die Meldung selbst hinaus: '+focus
        ],
        sources:[]
      });
    };

    if(/verkehr|mobilität|rad|bahn|bus|autonom|fahrzeug|straße|parken|mobility/.test(hay))
      add('technik','Welche technische oder planerische Entwicklung steckt dahinter?','Zu prüfen sind Stand der Technik bzw. Planung, praktische Voraussetzungen, Grenzen und Reifegrad sowie die Einbindung in bestehende Verkehrsangebote.');
    if(/bau|bebau|wohnung|miete|genehmig|straße|tempo|verkehr|wärme|energie|datenschutz|beteilig|wahl|gemeinderat/.test(hay))
      add('recht','Welche rechtlichen oder institutionellen Regeln bestimmen den Handlungsspielraum?','Zu prüfen sind Zuständigkeiten, Genehmigungs- und Verfahrensregeln, einschlägige Standards sowie der tatsächliche kommunale Entscheidungsspielraum.');
    if(/beteilig|bürger|jugend|wahl|sozial|schule|pflege|wohnen|miete|spielplatz|verein|adfc|hund/.test(hay))
      add('gesellschaft','Welche gesellschaftlichen Interessen oder Veränderungen stehen dahinter?','Zu prüfen sind betroffene Gruppen, Zugang und Teilhabe, Nutzungskonflikte, Akzeptanz, Verteilungswirkungen und mögliche neue Formen kommunaler Zusammenarbeit.');
    if(/klima|energie|wärme|geothermie|baum|biodiv|wasser|see|natur|verkehr|rad|fläche/.test(hay))
      add('oekologie','Welche ökologischen Zusammenhänge oder Zielkonflikte sind wichtig?','Zu prüfen sind Klima-, Flächen-, Energie-, Wasser- oder Biodiversitätswirkungen und mögliche Zielkonflikte mit anderen kommunalen Interessen.');
    if(/kosten|förder|miete|wohnung|wirtschaft|gewerbe|energie|wärme|bau|verkehr|infrastruktur/.test(hay))
      add('wirtschaft','Welche wirtschaftlichen Folgen oder Abhängigkeiten sind relevant?','Zu prüfen sind Kosten, Förderung, Betrieb, Folgekosten, Preiswirkungen und die Frage, welche Annahmen wirtschaftlich belastbar sind.');
    if(/pilot|test|neu|start|modell|konzept|bürgerbudget|bürgerrat|jugendparlament|autonom|modular|sharing|fahrradstraße/.test(hay))
      add('reife','Ist das schon belastbare Praxis oder noch ein Experiment?','Zu prüfen sind Reifegrad, reale Praxiserfahrungen, Skalierbarkeit, erkennbare Grenzen und die Frage, ob aus einem Pilotprojekt bereits verallgemeinerbare Schlüsse gezogen werden können.');

    return dirs.slice(0,3);
  }

  function contributionQuestions(card){
    if(curated[card.id])return curated[card.id];
    const q=[];
    const sources=sourceList(card,6);
    const sig=significance(card);
    const hist=historyDetails(card);
    const tLink=topicLink(card);
    const topic=findTopic(tLink);

    // Hintergrund hat Vorrang vor Wiederholung der Meldung.
    q.push(...backgroundDirections(card));

    if(hist){
      const items=Array.from(hist.querySelectorAll('li')).map(text).filter(Boolean);
      const fibLinks=Array.from(hist.querySelectorAll('a')).map(a=>linkData(a,'fib'));
      if(items.length)q.push({
        id:'verlauf',
        label:'Welche Entwicklungslinie führt zu diesem Stand?',
        answer:['Für das Verständnis ist nicht nur die aktuelle Meldung relevant. Im FIB-Bestand sind folgende vorherige Schritte ausdrücklich verknüpft: '+items.join(' · ')],
        sources:fibLinks.length?fibLinks:sources.slice(0,3)
      });
    }

    if(topic){
      const title=text(topic.querySelector('h3'));
      const tp=bodyParagraphs(topic);
      const ts=sourceList(topic,5,'topic');
      if(tp.length)q.push({
        id:'thema',
        label:'Welche längerfristige Entwicklung wird hier sichtbar?',
        answer:tp,
        sources:[{role:'fib',name:'FIB-Thema – '+title,url:'#'+topic.id},...ts]
      });
    }

    if(sig){
      q.push({
        id:'transfer',
        label:'Was müsste passieren, damit daraus für Feldkirchen mehr als nur ein interessanter Einzelfall wird?',
        answer:[
          sig,
          'Für die Übertragbarkeit sind insbesondere Zuständigkeit, räumliche und organisatorische Voraussetzungen, Kosten, Akzeptanz und belastbare Praxiserfahrungen zu prüfen. Eine mögliche Bedeutung für Feldkirchen ist deshalb von einer bereits beschlossenen oder absehbaren Umsetzung zu unterscheiden.'
        ],
        sources:sources.slice(0,4)
      });
    }

    return q.slice(0,5);
  }
  function topicQuestions(card){
    const q=[];
    const title=text(card.querySelector('h3'));
    const sources=sourceList(card,8,'topic');
    const open=openDetails(card);

    q.push(...backgroundDirections(card));

    if(open){
      const items=Array.from(open.querySelectorAll('li')).map(text).filter(Boolean);
      if(items.length)q.push({
        id:'offen',
        label:'Welche offenen Fragen entscheiden über die weitere Entwicklung?',
        answer:['Der Themenstand macht insbesondere folgende noch ungeklärte Punkte sichtbar: '+items.join(' · ')],
        sources:sources.slice(0,5)
      });
    }

    const linked=Array.from(document.querySelectorAll('.card.contribution')).filter(c=>{
      const a=c.querySelector('.topic-link a[href="#'+card.id+'"]');
      return !!a;
    }).slice(0,10);
    if(linked.length){
      q.push({
        id:'muster',
        label:'Welches Muster zeigt sich über die einzelnen Meldungen hinweg?',
        answer:[
          'Dieses Thema entsteht nicht aus einer einzelnen Meldung, sondern aus mehreren Entwicklungsschritten. Für eine Vertiefung ist deshalb besonders interessant, ob sich daraus ein stabiler Trend, ein wiederkehrender Zielkonflikt oder ein veränderter kommunaler Handlungsspielraum erkennen lässt.',
          'Die unten verknüpften Beiträge bilden dafür die zeitliche Beobachtungsbasis.'
        ],
        sources:linked.map(c=>({role:'fib',name:(text(c.querySelector('.date'))?text(c.querySelector('.date'))+' · ':'')+text(c.querySelector('h3')),url:'#'+c.id}))
      });
    }

    return q.slice(0,5);
  }

  const AI_ENDPOINT='https://apaubomxffcwtzjimori.supabase.co/functions/v1/fib-mehr-wissen';

  function apiContext(card){
    const sourceLinks=Array.from(card.querySelectorAll(':scope > .sources a, :scope > details .sources a')).slice(0,16);
    const details=Array.from(card.querySelectorAll(':scope > details')).map(d=>text(d)).filter(Boolean).join('\n');
    return {
      title:text(card.querySelector('h3')),
      contributionText:[
        ...bodyParagraphs(card),
        details
      ].filter(Boolean).join('\n\n').slice(0,14000),
      significance:significance(card).slice(0,4000),
      existingSources:sourceLinks.map(a=>({name:text(a),url:a.href}))
    };
  }

  async function askAI(card,question){
    const response=await fetch(AI_ENDPOINT,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({...apiContext(card),question})
    });
    let data={};
    try{data=await response.json();}catch(_){}
    if(!response.ok){
      const err=new Error(data.message||data.error||('HTTP '+response.status));
      err.code=data.error||'REQUEST_FAILED';
      throw err;
    }
    return data;
  }

  function renderAIResult(question,data){
    const body=dialog.querySelector('.more-knowledge-dialog-content');
    const paragraphs=String(data.answer||'').split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);
    const sources=Array.isArray(data.sources)?data.sources:[];
    body.innerHTML='<div class="minor">Mehr wissen?</div><h3>'+htmlEscape(question)+'</h3>'+
      paragraphs.map(p=>'<p>'+htmlEscape(p)+'</p>').join('')+
      (sources.length?'<h4>Quellen und ihre Funktion</h4><ul class="sources more-knowledge-sources">'+sources.map(s=>sourceHtml({role:'context',name:s.title||s.url,url:s.url,displayRole:s.role})).join('')+'</ul>':'')+
      '<p class="minor">KI-generierte Vertiefungsantwort. Sie wurde für diese Frage automatisch recherchiert und nicht zwingend vorab redaktionell geprüft. Maßgeblich bleiben die verlinkten Quellen.</p>';
    // API liefert bereits sprechende Rollenbezeichnungen.
    Array.from(body.querySelectorAll('.more-knowledge-source-role')).forEach((el,i)=>{
      if(sources[i]&&sources[i].role)el.textContent=sources[i].role;
    });
  }

  async function runAIQuestion(card,question){
    const body=dialog.querySelector('.more-knowledge-dialog-content');
    body.innerHTML='<div class="minor">Mehr wissen?</div><h3>'+htmlEscape(question)+'</h3><p class="more-knowledge-loading">FIB recherchiert Hintergrundinformationen und prüft Quellen …</p>';
    if(typeof dialog.showModal==='function'&&!dialog.open)dialog.showModal(); else if(!dialog.open)dialog.setAttribute('open','');
    try{
      const data=await askAI(card,question);
      renderAIResult(question,data);
    }catch(err){
      let msg='Die Vertiefungsantwort konnte gerade nicht erzeugt werden.';
      if(err&&err.code==='OPENAI_NOT_CONFIGURED')msg='Die KI-Anbindung ist vorbereitet; der OpenAI-API-Schlüssel muss noch als Secret hinterlegt werden.';
      if(err&&err.code==='DAILY_LIMIT_REACHED')msg='Das tägliche Testlimit für KI-Antworten ist erreicht.';
      body.innerHTML='<div class="minor">Mehr wissen?</div><h3>'+htmlEscape(question)+'</h3><p>'+htmlEscape(msg)+'</p>';
    }
  }

  const dialog=document.createElement('dialog');
  dialog.className='more-knowledge-dialog';
  dialog.innerHTML='<div class="more-knowledge-dialog-inner"><button class="more-knowledge-close" type="button" aria-label="Dialog schließen">×</button><div class="more-knowledge-dialog-content"></div></div>';
  document.body.appendChild(dialog);
  let activeCard=null;

  function openQuestion(q,card){
    runAIQuestion(card,q.label);
  }
  function openOwnQuestion(card){
    activeCard=card;
    const body=dialog.querySelector('.more-knowledge-dialog-content');
    body.innerHTML='<div class="minor">Mehr wissen?</div><h3>Eigene Frage stellen</h3>'+
      '<p>Stelle eine Frage zu diesem Beitrag oder Thema. FIB kann dafür zusätzliche Hintergrundquellen recherchieren.</p>'+
      '<label class="more-knowledge-label" for="more-knowledge-input">Deine Frage</label>'+
      '<textarea id="more-knowledge-input" rows="4" placeholder="'+htmlEscape(ownQuestionPlaceholder(card))+'"></textarea>'+
      '<button type="button" class="button-link more-knowledge-prototype-submit">Frage stellen</button>'+
      '<p class="minor">Die Antwort wird im Demonstrator über die angebundene KI erzeugt und kann zusätzliche Webquellen heranziehen.</p>';
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
      if(b){openQuestion(questions[Number(b.dataset.questionIndex)],card);return;}
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
      if(value&&activeCard)runAIQuestion(activeCard,value);
    }
  });
})();