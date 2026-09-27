(async function initObjectLinks(){
  let data;
  try{
    const response=await fetch('data/bezuege.json?v=20260927i',{cache:'no-store'});
    if(!response.ok) throw new Error(`HTTP ${response.status}`);
    data=await response.json();
  }catch(error){
    console.error('FIB: Bezugsobjekte konnten nicht geladen werden.',error);
    return;
  }

  const objects=Array.isArray(data.objects)?data.objects:[];
  const objectMap=Object.fromEntries(objects.map(obj=>[obj.id,obj]));
  const refsByTarget=new Map();

  function addTargetRef(targetId,obj){
    if(!targetId)return;
    if(!refsByTarget.has(targetId))refsByTarget.set(targetId,[]);
    refsByTarget.get(targetId).push(obj);
  }

  objects.forEach(obj=>{
    (obj.contribution_refs||[]).forEach(ref=>addTargetRef(ref.id,obj));
    (obj.topic_refs||[]).forEach(ref=>addTargetRef(ref.id,obj));
  });

  function insertObjectSection(targetId,objectList){
    const card=document.getElementById(targetId);
    if(!card || !objectList.length)return;

    card.querySelectorAll('.object-links').forEach(el=>el.remove());

    const section=document.createElement('section');
    section.className='object-links';
    const heading=document.createElement('h4');
    heading.textContent='Bezüge';
    const list=document.createElement('ul');

    objectList
      .slice()
      .sort((a,b)=>(a.display_name||a.canonical_name||'').localeCompare(b.display_name||b.canonical_name||'','de'))
      .forEach(obj=>{
        const li=document.createElement('li');
        const button=document.createElement('button');
        button.type='button';
        button.className='fib-object-link';
        button.dataset.objectId=obj.id;
        button.textContent=obj.display_name||obj.canonical_name;
        li.appendChild(button);
        list.appendChild(li);
      });

    section.append(heading,list);

    const sources=card.querySelector('ul.sources');
    if(sources){
      sources.insertAdjacentElement('afterend',section);
      return;
    }

    const sourceDetails=[...card.querySelectorAll('details')].find(details=>{
      const summary=details.querySelector(':scope > summary');
      return summary && summary.textContent.trim().startsWith('Quellen');
    });
    if(sourceDetails){
      sourceDetails.insertAdjacentElement('afterend',section);
      return;
    }

    card.appendChild(section);
  }

  refsByTarget.forEach((objectList,targetId)=>insertObjectSection(targetId,objectList));

  const dialog=document.createElement('dialog');
  dialog.className='fib-object-dialog';
  dialog.innerHTML='<div class="fib-object-dialog-inner"><button class="fib-object-close" type="button" aria-label="Bezug schließen">×</button><div class="fib-object-content"></div></div>';
  document.body.appendChild(dialog);

  function renderObject(id){
    const obj=objectMap[id];
    if(!obj)return false;

    const topics=(obj.topic_refs||[])
      .map(ref=>{
        const target=document.getElementById(ref.id);
        const title=target?.querySelector('h3')?.textContent?.trim()||ref.id;
        return [ref.id,title];
      })
      .filter(([targetId])=>document.getElementById(targetId));

    const contributions=(obj.contribution_refs||[])
      .map(ref=>{
        const target=document.getElementById(ref.id);
        const title=target?.querySelector('h3')?.textContent?.trim()||ref.id;
        return [ref.id,title];
      })
      .filter(([targetId])=>document.getElementById(targetId));

    const content=dialog.querySelector('.fib-object-content');
    const description=obj.public_description||
      `Zu ${obj.display_name||obj.canonical_name} werden weitere Beiträge und Themen verknüpft, wenn sie inhaltlich relevant sind.`;

    content.innerHTML=`
      <div class="minor">Bezugsobjekt</div>
      <h3>${obj.display_name||obj.canonical_name}</h3>
      <p>${description}</p>
      ${topics.length?`
        <h4>Verknüpfte Themen</h4>
        <ul>${topics.map(([targetId,title])=>`<li><a href="#${targetId}" data-object-target data-target-id="${targetId}">${title}</a></li>`).join('')}</ul>
      `:''}
      ${contributions.length?`
        <h4>Verknüpfte Beiträge</h4>
        <ul>${contributions.map(([targetId,title])=>`<li><a href="#${targetId}" data-object-target data-target-id="${targetId}">${title}</a></li>`).join('')}</ul>
      `:''}
    `;

    if(!dialog.open){
      if(typeof dialog.showModal==='function') dialog.showModal();
      else dialog.setAttribute('open','');
    }
    return true;
  }

  function showTarget(id){
    const target=document.getElementById(id);
    if(!target)return;

    if(id.startsWith('T')) document.querySelector('.nav-btn[data-target="themen"]')?.click();
    else if(id.startsWith('S')) document.querySelector('.nav-btn[data-target="sitzungen"]')?.click();
    else if(id.startsWith('R')||id.startsWith('C')) document.querySelector('.nav-btn[data-target="presseschau"]')?.click();

    const topbar=document.querySelector('.topbar');
    const topbarHeight=topbar ? Math.ceil(topbar.getBoundingClientRect().height) : 0;
    target.style.scrollMarginTop=`${topbarHeight + 16}px`;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      target.scrollIntoView({behavior:'auto',block:'start'});
    }));
  }

  function openObject(id,{pushHistory=true}={}){
    if(!renderObject(id))return;
    if(pushHistory){
      const url=new URL(window.location.href);
      url.hash=`bezug-${id}`;
      history.pushState({fibView:'object',fibObject:id},'',url);
    }
  }

  function openTargetFromObject(objectId,targetId){
    if(dialog.open) dialog.close();
    const url=new URL(window.location.href);
    url.hash=targetId;
    history.pushState({fibView:'target',fibTarget:targetId,fromFibObject:objectId},'',url);
    showTarget(targetId);
  }

  function closeDialogFromUi(){
    if(history.state && history.state.fibView==='object'){
      history.back();
    }else if(dialog.open){
      dialog.close();
    }
  }

  function syncWithHistory(){
    const state=history.state||{};

    if(state.fibView==='object' && state.fibObject && objectMap[state.fibObject]){
      renderObject(state.fibObject);
      return;
    }

    if(dialog.open) dialog.close();

    if(state.fibView==='target' && state.fibTarget){
      showTarget(state.fibTarget);
      return;
    }

    const match=window.location.hash.match(/^#bezug-(OBJ\d+)$/);
    if(match && objectMap[match[1]]) renderObject(match[1]);
  }

  document.addEventListener('click',event=>{
    const trigger=event.target.closest('.fib-object-link');
    if(trigger){
      event.preventDefault();
      openObject(trigger.dataset.objectId);
      return;
    }

    if(event.target.closest('.fib-object-close')){
      event.preventDefault();
      closeDialogFromUi();
      return;
    }

    const target=event.target.closest('[data-object-target]');
    if(target){
      event.preventDefault();
      const objectId=(history.state && history.state.fibObject)||window.location.hash.replace(/^#bezug-/,'');
      const targetId=target.dataset.targetId||target.getAttribute('href').replace(/^#/,'');
      openTargetFromObject(objectId,targetId);
    }
  });

  dialog.addEventListener('click',event=>{
    if(event.target===dialog) closeDialogFromUi();
  });

  dialog.addEventListener('cancel',event=>{
    event.preventDefault();
    closeDialogFromUi();
  });

  window.addEventListener('popstate',syncWithHistory);
  syncWithHistory();
})();