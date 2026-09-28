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
  function questionVariant(card,key,variants){
    const seed=((card.id||'')+'|'+key+'|'+text(card.querySelector('h3'))).split('').reduce((a,ch)=>(a*33+ch.charCodeAt(0))>>>0,5381);
    return variants[seed%variants.length];
  }
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
  function readableSourceName(name,url){
    let n=String(name||'').trim();
    const u=String(url||'');
    if(/\.indd$/i.test(n) || /^[0-9_\-]+(?:Ausgabe)?[^ ]*$/i.test(n)){
      try{
        const host=new URL(u).hostname.replace(/^www\./,'');
        if(/feldkirchen\.de$/.test(host)) return 'Gemeinde Feldkirchen – Gemeindeblatt / Originalquelle';
        return host+' – Originalquelle';
      }catch(_){}
    }
    return n||u;
  }
  function sourceHtml(s){
    const role=ROLE_LABELS[s.role]||ROLE_LABELS.context;
    const name=readableSourceName(s.name,s.url);
    return '<li><span class="more-knowledge-source-role">'+htmlEscape(role)+'</span><a href="'+htmlEscape(s.url)+'" target="'+(String(s.url).startsWith('#')?'_self':'_blank')+'" rel="noopener noreferrer">'+htmlEscape(name)+'</a></li>';
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
  function contextSpecificQuestions(card){
    const hay=(text(card.querySelector('h3'))+' '+text(card.querySelector('.subtitle'))+' '+text(card.querySelector('.body'))+' '+(card.dataset.tags||'')).toLowerCase();

    // Wiederkehrende Bürgerversammlung: nicht wie einen einmaligen Konflikt behandeln.
    if(/bürgerversammlung/.test(hay) && /livestream|aussprache|21\. oktober|bürgermeister|gemeindebürger/.test(hay)){
      return [
        {
          id:'bv-mitmachen',
          label:'Was können Bürgerinnen und Bürger dort konkret einbringen?',
          answer:['Die Frage richtet den Blick auf die tatsächlichen Beteiligungsmöglichkeiten der Bürgerversammlung – Wortmeldungen, Anträge und Empfehlungen – statt auf einen vermeintlichen einmaligen Konflikt.'],
          sources:[]
        },
        {
          id:'bv-folgen',
          label:'Was passiert mit Anträgen aus der Bürgerversammlung?',
          answer:['Hier ist besonders interessant, welchen formalen Weg Anträge und Empfehlungen nach der Versammlung nehmen und welche Rolle der Gemeinderat dabei hat.'],
          sources:[]
        },
        {
          id:'bv-rueckblick',
          label:'Was ist aus den Anträgen der letzten Bürgerversammlung geworden?',
          answer:['Da die Bürgerversammlung regelmäßig stattfindet, bietet sich der Vergleich mit dem Vorjahr an: Welche Anträge wurden weiterverfolgt, geprüft oder entschieden?'],
          sources:[]
        },
        {
          id:'bv-einordnung',
          label:'Was unterscheidet die Bürgerversammlung von anderen Formen der Bürgerbeteiligung?',
          answer:['Die Frage ordnet die jährliche Bürgerversammlung in andere Beteiligungsformen ein und macht ihren besonderen rechtlichen und praktischen Stellenwert verständlich.'],
          sources:[]
        }
      ];
    }

    // Regionale Infrastruktur: Feldkirchen entscheidet nicht über fremde Abschnitte,
    // kann aber von der Gesamtverbindung betroffen sein und Einflussmöglichkeiten haben.
    if(/radschnell/.test(hay) && /markt schwaben|ebersberg|förder/.test(hay)){
      return [
        {
          id:'rsv-foerderung',
          label:'Warum fällt für einen Teil der Strecke die Förderung weg?',
          answer:['Die Frage zielt auf die geänderten Förderkriterien und darauf, welche Anforderungen eine Radschnellverbindung erfüllen muss.'],
          sources:[]
        },
        {
          id:'rsv-gesamt',
          label:'Was bedeutet das für die durchgehende Verbindung über Feldkirchen?',
          answer:['Entscheidend ist nicht nur der betroffene Ebersberger Abschnitt, sondern ob und wie die Verbindung München–Markt Schwaben als zusammenhängender Radverkehrskorridor weiterverfolgt werden kann.'],
          sources:[]
        },
        {
          id:'rsv-einfluss',
          label:'Wo kann Feldkirchen bei der weiteren Planung Einfluss nehmen?',
          answer:['Feldkirchen entscheidet nicht über den Ebersberger Abschnitt. Interessant sind deshalb die eigenen Planungsabschnitte, Abstimmungen mit Landkreis und Nachbarkommunen sowie politische und fachliche Einflussmöglichkeiten.'],
          sources:[]
        },
        {
          id:'rsv-alternativen',
          label:'Welche Alternativen gibt es, wenn der Radschnellweg so nicht kommt?',
          answer:['Die Frage öffnet den Blick auf mögliche andere Qualitätsstandards, Ausbaustufen oder Förderwege für eine weiterhin attraktive Radverbindung.'],
          sources:[]
        }
      ];
    }

    if(/adfc/.test(hay) && /förder|zuschuss|2028|ortsgruppe/.test(hay)){
      return [
        {
          id:'adfc-wofuer',
          label:'Wofür wurde die Kreisförderung des ADFC bisher eingesetzt?',
          answer:['Die Frage klärt, welche Aufgaben und Strukturen mit dem Zuschuss finanziert wurden und welche davon für die Ortsgruppen relevant sind.'],
          sources:[]
        },
        {
          id:'adfc-feldkirchen',
          label:'Was könnte die Kürzung für die gemeinsame Ortsgruppe mit Feldkirchen bedeuten?',
          answer:['Entscheidend ist, welche Leistungen der gemeinsamen Ortsgruppe oder der landkreisweiten Koordination tatsächlich von der Förderung abhängen.'],
          sources:[]
        },
        {
          id:'adfc-entscheidung',
          label:'Warum will der Landkreis die Förderung beenden?',
          answer:['Die Frage richtet sich auf die dokumentierten Gründe des Landkreises und trennt diese von möglichen Folgen für den Verband.'],
          sources:[]
        },
        {
          id:'adfc-alternativen',
          label:'Welche Möglichkeiten gäbe es, die Arbeit trotzdem weiterzuführen?',
          answer:['Hier können alternative Finanzierung, ehrenamtliche Strukturen, Kooperationen oder andere Förderwege betrachtet werden, ohne deren Realisierbarkeit vorwegzunehmen.'],
          sources:[]
        }
      ];
    }

    return [];
  }

  function backgroundDirections(card){
    const hay=(text(card.querySelector('h3'))+' '+text(card.querySelector('.subtitle'))+' '+text(card.querySelector('.body'))+' '+(card.dataset.tags||'')+' '+text(card.querySelector('.category'))).toLowerCase();
    const dirs=[];

    const add=(id,variants,focus)=>{
      if(!dirs.some(x=>x.id===id))dirs.push({
        id,
        label:questionVariant(card,id,variants),
        answer:['Diese Frage geht bewusst über die Meldung selbst hinaus: '+focus],
        sources:[]
      });
    };

    if(/verkehr|mobilität|rad|bahn|bus|autonom|fahrzeug|straße|parken|mobility/.test(hay))
      add('technik',[
        'Welche Technik oder Planung steckt konkret dahinter?',
        'Was ist bei diesem Vorhaben technisch oder planerisch neu?',
        'Wie weit ist diese Lösung technisch oder planerisch schon?',
        'Welche Voraussetzungen braucht dieses Vorhaben in der Praxis?'
      ],'Zu prüfen sind Stand der Technik bzw. Planung, praktische Voraussetzungen, Grenzen und Reifegrad sowie die Einbindung in bestehende Verkehrsangebote.');

    if(/bau|bebau|wohnung|miete|genehmig|straße|tempo|verkehr|wärme|energie|datenschutz|beteilig|wahl|gemeinderat/.test(hay))
      add('recht',[
        'Wer darf hier eigentlich was entscheiden?',
        'Was kann die Gemeinde dabei selbst regeln – und was nicht?',
        'Welche Regeln setzen hier den Rahmen?',
        'Wer ist hier zuständig – und wo liegen die Grenzen?'
      ],'Zu prüfen sind Zuständigkeiten, Genehmigungs- und Verfahrensregeln, einschlägige Standards sowie der tatsächliche kommunale Entscheidungsspielraum.');

    if(/beteilig|bürger|jugend|wahl|sozial|schule|pflege|wohnen|miete|spielplatz|verein|adfc|hund/.test(hay))
      add('gesellschaft',[
        'Warum bewegt das Thema so viele Menschen?',
        'Worum geht es den Beteiligten eigentlich?',
        'Welche Interessen treffen hier aufeinander?',
        'Was verändert sich hier für die Menschen vor Ort?'
      ],'Zu prüfen sind betroffene Gruppen, Zugang und Teilhabe, Nutzungskonflikte, Akzeptanz, Verteilungswirkungen und mögliche neue Formen kommunaler Zusammenarbeit.');

    if(/klima|energie|wärme|geothermie|baum|biodiv|wasser|see|natur|verkehr|rad|fläche/.test(hay))
      add('oekologie',[
        'Welche Folgen hat das für Umwelt und Lebensqualität?',
        'Wo gibt es Zielkonflikte für Klima, Natur oder Fläche?',
        'Was bedeutet das für Klima und Umwelt vor Ort?',
        'Welche ökologischen Folgen sollte man dabei mitdenken?'
      ],'Zu prüfen sind Klima-, Flächen-, Energie-, Wasser- oder Biodiversitätswirkungen und mögliche Zielkonflikte mit anderen kommunalen Interessen.');

    if(/kosten|förder|miete|wohnung|wirtschaft|gewerbe|energie|wärme|bau|verkehr|infrastruktur/.test(hay))
      add('wirtschaft',[
        'Was kostet das – und wer trägt die Folgen?',
        'Welche finanziellen Auswirkungen hat das?',
        'Wo liegen Kosten, Förderchancen oder Folgekosten?',
        'Was bedeutet das wirtschaftlich für Gemeinde und Betroffene?'
      ],'Zu prüfen sind Kosten, Förderung, Betrieb, Folgekosten, Preiswirkungen und die Frage, welche Annahmen wirtschaftlich belastbar sind.');

    if(/pilot|test|neu|start|modell|konzept|bürgerbudget|bürgerrat|jugendparlament|autonom|modular|sharing|fahrradstraße/.test(hay))
      add('reife',[
        'Funktioniert das schon in der Praxis?',
        'Ist das schon erprobt – oder noch eher ein Versuch?',
        'Wie belastbar sind die bisherigen Erfahrungen?',
        'Ist das schon alltagstauglich oder noch Testbetrieb?'
      ],'Zu prüfen sind Reifegrad, reale Praxiserfahrungen, Skalierbarkeit, erkennbare Grenzen und die Frage, ob aus einem Pilotprojekt bereits verallgemeinerbare Schlüsse gezogen werden können.');

    if(/pilot|test|neu|innovation|modell|konzept|autonom|sharing|digital|smart|beteilig|rad|mobilität|energie|wärme|klima/.test(hay))
      add('innovation',[
        'Welche neuen Möglichkeiten eröffnet das?',
        'Was könnte Feldkirchen daraus lernen?',
        'Was ist daran wirklich neu – und was davon wäre übertragbar?',
        'Welche Idee dahinter könnte auch für Feldkirchen interessant sein?'
      ],'Zu prüfen sind tatsächlicher Innovationsgehalt, Erfahrungen anderswo, Voraussetzungen für Übertragbarkeit, mögliche Chancen sowie Grenzen, Kosten und Zielkonflikte.');

    return dirs.slice(0,4);
  }

  function contributionQuestions(card){
    if(curated[card.id])return curated[card.id];
    const q=[];
    const sources=sourceList(card,6);
    const sig=significance(card);
    const hist=historyDetails(card);
    const tLink=topicLink(card);
    const topic=findTopic(tLink);

    // Zuerst konkreten Sachverhalt berücksichtigen. Nur wenn dafür keine
    // kontextspezifischen Fragen vorliegen, auf allgemeine Rechercheachsen zurückfallen.
    const contextual=contextSpecificQuestions(card);
    if(contextual.length)q.push(...contextual);
    else q.push(...backgroundDirections(card));

    if(!contextual.length && hist){
      const items=Array.from(hist.querySelectorAll('li')).map(text).filter(Boolean);
      const fibLinks=Array.from(hist.querySelectorAll('a')).map(a=>linkData(a,'fib'));
      if(items.length)q.push({
        id:'verlauf',
        label:questionVariant(card,'verlauf',[
          'Wie ist es dazu gekommen?',
          'Was ist auf dem Weg hierher passiert?',
          'Welche Vorgeschichte sollte man kennen?',
          'Wie hat sich das Schritt für Schritt entwickelt?'
        ]),
        answer:['Für das Verständnis ist nicht nur die aktuelle Meldung relevant. Im FIB-Bestand sind folgende vorherige Schritte ausdrücklich verknüpft: '+items.join(' · ')],
        sources:fibLinks.length?fibLinks:sources.slice(0,3)
      });
    }

    if(!contextual.length && topic){
      const title=text(topic.querySelector('h3'));
      const tp=bodyParagraphs(topic);
      const ts=sourceList(topic,5,'topic');
      if(tp.length)q.push({
        id:'thema',
        label:questionVariant(card,'thema',[
          'Steckt dahinter nur ein Einzelfall – oder ein größeres Thema?',
          'Was zeigt das über die Entwicklung in Feldkirchen?',
          'Welche größere Entwicklung zeichnet sich hier ab?',
          'Was könnte sich daraus auf längere Sicht entwickeln?'
        ]),
        answer:tp,
        sources:[{role:'fib',name:'FIB-Thema – '+title,url:'#'+topic.id},...ts]
      });
    }

    if(!contextual.length && sig){
      q.push({
        id:'transfer',
        label:questionVariant(card,'transfer',[
          'Was könnte das konkret für Feldkirchen bedeuten?',
          'Was müsste passieren, damit das auch bei uns relevant wird?',
          'Unter welchen Bedingungen wäre das für Feldkirchen interessant?',
          'Was davon könnte sich auf Feldkirchen übertragen lassen?'
        ]),
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
        label:questionVariant(card,'offen',[
          'Was ist noch offen?',
          'Welche Fragen müssen noch geklärt werden?',
          'Wovon hängt ab, wie es weitergeht?',
          'Was entscheidet jetzt über den nächsten Schritt?'
        ]),
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
        label:questionVariant(card,'muster',[
          'Was ergibt sich, wenn man die einzelnen Meldungen zusammennimmt?',
          'Zeigt sich hier ein Muster?',
          'Was lässt sich über mehrere Meldungen hinweg erkennen?',
          'Was steckt hinter den einzelnen Meldungen als gemeinsame Entwicklung?'
        ]),
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

  function renderSafeMarkdown(value){
    let s=htmlEscape(String(value||''));
    // Nur bewusst erlaubte Inline-Markdown-Elemente; kein HTML aus Modellantworten.
    s=s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,(_m,label,url)=>
      '<a href="'+htmlEscape(url)+'" target="_blank" rel="noopener noreferrer">'+label+'</a>');
    s=s.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
    s=s.replace(/__([^_]+)__/g,'<strong>$1</strong>');
    s=s.replace(/\*([^*\n]+)\*/g,'<em>$1</em>');
    return s;
  }

  function renderAnswerBlocks(value){
    const raw=String(value||'').replace(/\r/g,'').trim();
    if(!raw)return '';
    const blocks=raw.split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);
    return blocks.map(block=>{
      const lines=block.split('\n').map(x=>x.trim()).filter(Boolean);
      if(lines.length&&lines.every(line=>/^[-*]\s+/.test(line))){
        return '<ul class="more-knowledge-answer-list">'+lines.map(line=>'<li>'+renderSafeMarkdown(line.replace(/^[-*]\s+/,''))+'</li>').join('')+'</ul>';
      }
      if(lines.length&&lines.every(line=>/^\d+[.)]\s+/.test(line))){
        return '<ol class="more-knowledge-answer-list">'+lines.map(line=>'<li>'+renderSafeMarkdown(line.replace(/^\d+[.)]\s+/,''))+'</li>').join('')+'</ol>';
      }
      return '<p>'+lines.map(renderSafeMarkdown).join('<br>')+'</p>';
    }).join('');
  }

  function renderAIResult(question,data){
    const body=dialog.querySelector('.more-knowledge-dialog-content');
    const sources=Array.isArray(data.sources)?data.sources:[];
    body.innerHTML='<div class="minor">Mehr wissen?</div><h3>'+htmlEscape(question)+'</h3>'+
      renderAnswerBlocks(data.answer)+
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