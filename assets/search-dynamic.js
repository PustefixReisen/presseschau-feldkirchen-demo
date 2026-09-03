(function initDynamicFibSearch(){
  function replaceInput(id, handler){
    const oldInput=document.getElementById(id);
    if(!oldInput) return null;
    const input=oldInput.cloneNode(true);
    oldInput.replaceWith(input);
    input.addEventListener('input', handler);
    return input;
  }

  let currentPlace='';

  function contributionCards(){
    return [...document.querySelectorAll('#contribution-list .contribution')];
  }

  function searchableText(card){
    return `${card.dataset.search||''} ${card.textContent||''}`.toLowerCase();
  }

  function applyContributionFilter(){
    const input=document.getElementById('search-press');
    const q=(input?.value||'').toLowerCase().trim();
    let shown=0;
    contributionCards().forEach(card=>{
      const haystack=searchableText(card);
      const okPlace=!currentPlace || card.dataset.place===currentPlace;
      const okQuery=!q || haystack.includes(q);
      const visible=okPlace && okQuery;
      card.style.display=visible?'':'none';
      if(visible) shown++;
    });
    const empty=document.getElementById('empty-contrib');
    if(empty) empty.style.display=shown?'none':'block';
  }

  replaceInput('search-press', applyContributionFilter);

  document.querySelectorAll('#place-filters .filter-chip').forEach(oldButton=>{
    const button=oldButton.cloneNode(true);
    oldButton.replaceWith(button);
    button.addEventListener('click',()=>{
      currentPlace=button.dataset.place||'';
      document.querySelectorAll('#place-filters .filter-chip').forEach(b=>{
        b.classList.toggle('active',(b.dataset.place||'')===currentPlace);
      });
      applyContributionFilter();
    });
  });

  function bindDynamicSearch(inputId, selector, emptyId){
    replaceInput(inputId, event=>{
      const q=event.target.value.toLowerCase().trim();
      let shown=0;
      document.querySelectorAll(selector).forEach(card=>{
        const haystack=searchableText(card);
        const visible=!q || haystack.includes(q);
        card.style.display=visible?'':'none';
        if(visible) shown++;
      });
      const empty=document.getElementById(emptyId);
      if(empty) empty.style.display=shown?'none':'block';
    });
  }

  bindDynamicSearch('search-sessions','.session-card','empty-sessions');
  bindDynamicSearch('search-topics','.topic-card','empty-topics');
})();
