const DATA = {};
const STORAGE_KEY = 'stuartOneRoadmapSingleTaskState';
const store = {
  get(key, fallback){ try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch(e){ return fallback; } },
  set(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
};
let state = store.get(STORAGE_KEY, {
  done:{},
  parked:{},
  killed:{},
  notes:{},
  taskNotes:{},
  sprintFilter:'all',
  showQueue:false,
  showReference:false
});
function save(){ store.set(STORAGE_KEY, state); }
function esc(s){ return (s||'').toString().replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function toast(msg){ const el=document.getElementById('toast'); el.textContent=msg; el.hidden=false; setTimeout(()=>{el.hidden=true}, 1700); }
async function copyText(txt){ try{ await navigator.clipboard.writeText(txt); toast('Copied'); } catch(e){ toast('Copy failed'); } }
async function fetchText(path){ const r = await fetch(path); if(!r.ok) throw new Error(path); return r.text(); }
async function loadData(){
  const files = ['sprints','tasks','model-router','asset-map','quality-gate','kill-rules','review-questions'];
  try{
    await Promise.all(files.map(async name => {
      const res = await fetch(`data/${name}.json`);
      if(!res.ok) throw new Error(name);
      DATA[name] = await res.json();
    }));
    await renderAll();
  } catch(e){
    document.querySelector('main').innerHTML = `<div class="card"><h2>Run through a local server or GitHub Pages</h2><p>This roadmap loads JSON and Markdown files. If you opened index.html directly, your browser may block those files.</p><pre>python3 -m http.server 8000</pre><p>Then open <span class="file-link">http://localhost:8000</span>.</p></div>`;
  }
}
function sprintName(id){ const s=DATA.sprints.find(x=>x.id===id); return s ? s.name : id; }
function sprintIndex(id){ return DATA.sprints.findIndex(x=>x.id===id); }
function modelEntry(id){ return DATA['model-router'].find(x=>x.id===id); }
function modelName(id){ const m=modelEntry(id); return m ? m.tool : id; }
function assetEntry(id){ return DATA['asset-map'].find(x=>x.id===id); }
function assetName(id){ const a=assetEntry(id); return a ? a.asset : id; }
function tasksInScope(){
  return DATA.tasks.filter(t => state.sprintFilter === 'all' || t.sprint === state.sprintFilter);
}
function orderedTasks(){
  return tasksInScope().slice().sort((a,b)=>{
    const sa=sprintIndex(a.sprint), sb=sprintIndex(b.sprint);
    if(sa!==sb) return sa-sb;
    return DATA.tasks.indexOf(a)-DATA.tasks.indexOf(b);
  });
}
function nextTask(){
  return orderedTasks().find(t => !state.done[t.id] && !state.parked[t.id] && !state.killed[t.id]);
}
function counts(){
  const all = tasksInScope();
  return {
    total: all.length,
    done: all.filter(t=>state.done[t.id]).length,
    parked: all.filter(t=>state.parked[t.id]).length,
    killed: all.filter(t=>state.killed[t.id]).length,
    remaining: all.filter(t=>!state.done[t.id] && !state.parked[t.id] && !state.killed[t.id]).length
  };
}
function activeSprintFromTask(t){ return t ? t.sprint : (state.sprintFilter === 'all' ? 'all' : state.sprintFilter); }
async function getPrompt(t){
  if(!t || !t.prompt_file) return 'No prompt file for this task.';
  try { return await fetchText(t.prompt_file); }
  catch(e){ return `Prompt file could not load. Open ${t.prompt_file} manually.`; }
}
function modelCard(id, label){
  const m=modelEntry(id);
  if(!m) return `<div class="mini-card"><strong>${esc(label)}</strong><p>${esc(id)}</p></div>`;
  return `<div class="mini-card">
    <strong>${esc(label)}: ${esc(m.tool)}</strong>
    <p>${esc(m.use_when || m.best_for || '')}</p>
    <details><summary>When not to use it</summary><p>${esc(m.avoid || '')}</p><p class="tiny">Confidence: ${esc(m.confidence || 'Not set')}. Review: every ${esc(m.review_interval_days || '?')} days.</p></details>
  </div>`;
}
function assetCard(id){
  const a=assetEntry(id);
  if(!a) return `<div class="mini-card"><strong>Asset</strong><p>${esc(id)}</p></div>`;
  return `<div class="mini-card">
    <strong>${esc(a.asset)}</strong>
    <p>${esc(a.use || '')}</p>
    <details><summary>Open rules</summary><p><strong>Open when:</strong> ${esc(a.when_to_open || '')}</p><p><strong>Do not open when:</strong> ${esc(a.when_not_to_open || '')}</p><p><strong>Start with:</strong> ${esc(a.first_files || '')}</p></details>
  </div>`;
}
function qualityGateHtml(){
  const qs = DATA['quality-gate'] || [];
  return `<ol class="tight-list">${qs.map(q=>`<li>${esc(q)}</li>`).join('')}</ol>`;
}
function taskSteps(t){
  return [
    {title:'Step 1. Read the real problem', body:t.problem},
    {title:'Step 2. Write the human-first version', body:t.human_first_action},
    {title:'Step 3. Open only the named asset', body:`Use ${assetName(t.asset_id)}. ${t.use_asset_reason || ''}`},
    {title:'Step 4. Use the recommended model', body:`Primary: ${modelName(t.best_model)}. Fallback: ${modelName(t.fallback_model)}.`},
    {title:'Step 5. Run the prompt', body:`Copy the prompt below into the primary model. Keep confidential data out unless approved and safe.`},
    {title:'Step 6. Create the output', body:t.output},
    {title:'Step 7. Check the success test', body:t.success_test},
    {title:'Step 8. Mark complete, park, or kill', body:`If it passes, mark complete. If not useful now, park it. If it is wrong or bloated, kill it. Kill rule: ${t.kill_rule}`}
  ];
}
async function renderFocusTask(){
  const t = nextTask();
  const c = counts();
  const sprintId = activeSprintFromTask(t);
  document.getElementById('activeSprintName').textContent = sprintId === 'all' ? 'All sprints' : sprintName(sprintId);
  document.getElementById('queueStatus').textContent = `${c.remaining} remaining · ${c.done} done · ${c.parked} parked · ${c.killed} killed`;
  const root = document.getElementById('focusTask');
  if(!t){
    root.innerHTML = `<div class="card hero-card"><p class="eyebrow">Queue clear</p><h2>No current task</h2><p>You have no remaining tasks in this scope. Run the review, unpark a task, or change sprint scope.</p><div class="action-row"><button class="btn primary" onclick="copyReviewMarkdown()">Copy review</button><button class="btn" onclick="downloadReview()">Download review</button><button class="btn ghost" onclick="toggleReference()">Open reference</button></div></div>`;
    return;
  }
  const prompt = await getPrompt(t);
  const steps = taskSteps(t);
  root.innerHTML = `<article class="card hero-card task-focus-card">
    <div class="task-focus-head">
      <div>
        <p class="eyebrow">Current task</p>
        <h2>${esc(t.title)}</h2>
        <p class="subtitle dark-subtitle">${esc(t.why_from_answers)}</p>
      </div>
      <div class="focus-badges"><span class="pill blue">${esc(sprintName(t.sprint))}</span><span class="pill">${esc(t.lane)}</span><span class="pill green">${esc(t.time)}</span><span class="pill gold">${esc(t.energy)}</span></div>
    </div>

    <section class="focus-section">
      <h3>Why this matters</h3>
      <p>${esc(t.why_it_matters || t.problem)}</p>
      <div class="split-boxes">
        <div class="box"><strong>Problem</strong><p>${esc(t.problem)}</p></div>
        <div class="box"><strong>Cause</strong><p>${esc(t.cause)}</p></div>
      </div>
    </section>

    <section class="focus-section">
      <h3>Step-by-step</h3>
      <div class="step-list">${steps.map((s,i)=>`<div class="step-card"><div class="step-num">${i+1}</div><div><strong>${esc(s.title)}</strong><p>${esc(s.body)}</p></div></div>`).join('')}</div>
    </section>

    <section class="focus-section">
      <h3>Best model and tool choice</h3>
      <div class="split-boxes">${modelCard(t.best_model,'Primary')}${modelCard(t.fallback_model,'Fallback')}${assetCard(t.asset_id)}</div>
    </section>

    <section class="focus-section">
      <h3>Starter prompt</h3>
      <p class="tiny">File: ${esc(t.prompt_file)}</p>
      <pre id="currentPrompt">${esc(prompt)}</pre>
      <div class="action-row"><button class="btn primary" onclick="copyCurrentPrompt()">Copy prompt</button><button class="btn" onclick="copyTaskBrief('${esc(t.id)}')">Copy task brief</button></div>
    </section>

    <section class="focus-section">
      <h3>Before you mark complete</h3>
      <div class="split-boxes">
        <div class="box"><strong>Minimum version</strong><p>${esc(t.minimum_version)}</p></div>
        <div class="box"><strong>Success test</strong><p>${esc(t.success_test)}</p></div>
        <div class="box"><strong>Kill rule</strong><p>${esc(t.kill_rule)}</p></div>
        <div class="box warning-box"><strong>Privacy warning</strong><p>${esc(t.privacy_warning)}</p></div>
      </div>
    </section>

    <section class="focus-section">
      <h3>Notes for this task</h3>
      <textarea data-task-note="${esc(t.id)}" oninput="saveTaskNote(this)" placeholder="Paste useful output, decision, owner, blocker, or proof here.">${esc(state.taskNotes[t.id] || '')}</textarea>
    </section>

    <section class="completion-bar">
      <button class="btn success" onclick="completeCurrentTask('${esc(t.id)}')">Mark complete and show next task</button>
      <button class="btn" onclick="parkCurrentTask('${esc(t.id)}')">Park for later</button>
      <button class="btn danger" onclick="killCurrentTask('${esc(t.id)}')">Kill this task</button>
    </section>
  </article>`;
}
function renderSidePanel(){
  const c=counts();
  const sprints = DATA.sprints.map(s=>`<option value="${s.id}" ${state.sprintFilter===s.id?'selected':''}>${esc(s.name)}</option>`).join('');
  const queue = orderedTasks().filter(t=>!state.done[t.id] && !state.parked[t.id] && !state.killed[t.id]);
  const done = orderedTasks().filter(t=>state.done[t.id]);
  const parked = orderedTasks().filter(t=>state.parked[t.id]);
  const killed = orderedTasks().filter(t=>state.killed[t.id]);
  document.getElementById('sidePanel').innerHTML = `<div class="card side-card">
    <p class="eyebrow">Setup</p>
    <h3>Choose scope</h3>
    <p class="small">Use all sprints for the full roadmap queue, or choose one sprint if you want a narrow focus.</p>
    <select id="sprintFilter" onchange="setSprintFilter(this.value)"><option value="all" ${state.sprintFilter==='all'?'selected':''}>All sprints</option>${sprints}</select>
    <div class="progress-wrap"><div class="progress"><div class="progress-fill" style="width:${c.total?Math.round(c.done/c.total*100):0}%"></div></div><p class="tiny">${c.done}/${c.total} complete in this scope</p></div>
  </div>

  <div class="card side-card">
    <p class="eyebrow">Queue</p>
    <h3>What comes next</h3>
    <p class="small">Only the current task opens fully. The next tasks are shown for context.</p>
    <ol class="queue-list">${queue.slice(0,8).map((t,i)=>`<li class="${i===0?'current-queue':''}"><span>${esc(t.title)}</span><small>${esc(sprintName(t.sprint))}</small></li>`).join('') || '<li>No remaining tasks.</li>'}</ol>
    <button class="btn ghost" onclick="toggleReference()">${state.showReference?'Hide':'Show'} reference</button>
  </div>

  ${state.showReference ? `<div class="card side-card"><p class="eyebrow">Reference</p><h3>Quality gate</h3>${qualityGateHtml()}<h3>Review actions</h3><div class="action-row vertical"><button class="btn" onclick="copyReviewMarkdown()">Copy review</button><button class="btn" onclick="downloadReview()">Download review</button><button class="btn ghost" onclick="resetScopeProgress()">Reset this scope</button></div></div>
  <div class="card side-card"><p class="eyebrow">Parked</p><h3>Parked or killed</h3>${parked.map(t=>`<div class="small-row"><span>${esc(t.title)}</span><button class="link-btn" onclick="unparkTask('${esc(t.id)}')">unpark</button></div>`).join('') || '<p class="tiny">Nothing parked.</p>'}${killed.length?`<h4>Killed</h4>${killed.map(t=>`<div class="small-row"><span>${esc(t.title)}</span><button class="link-btn" onclick="unkillTask('${esc(t.id)}')">restore</button></div>`).join('')}`:''}</div>` : ''}`;
}
async function renderAll(){ renderSidePanel(); await renderFocusTask(); }
async function setSprintFilter(v){ state.sprintFilter=v; save(); await renderAll(); }
async function completeCurrentTask(id){ state.done[id]=true; delete state.parked[id]; delete state.killed[id]; save(); toast('Complete. Next task loaded.'); await renderAll(); }
async function parkCurrentTask(id){ state.parked[id]=true; delete state.done[id]; delete state.killed[id]; save(); toast('Parked. Next task loaded.'); await renderAll(); }
async function killCurrentTask(id){ state.killed[id]=true; delete state.done[id]; delete state.parked[id]; save(); toast('Killed. Next task loaded.'); await renderAll(); }
async function unparkTask(id){ delete state.parked[id]; save(); await renderAll(); }
async function unkillTask(id){ delete state.killed[id]; save(); await renderAll(); }
async function toggleReference(){ state.showReference=!state.showReference; save(); await renderAll(); }
function saveTaskNote(el){ state.taskNotes[el.dataset.taskNote]=el.value; save(); }
function copyCurrentPrompt(){ const el=document.getElementById('currentPrompt'); if(el) copyText(el.textContent); }
function taskBrief(t){
  return [
    `# Task: ${t.title}`,
    '',
    `Problem: ${t.problem}`,
    `Cause: ${t.cause}`,
    `Why this exists from my answers: ${t.why_from_answers}`,
    '',
    `Primary model: ${modelName(t.best_model)}`,
    `Fallback model: ${modelName(t.fallback_model)}`,
    `Asset: ${assetName(t.asset_id)}`,
    '',
    `Human-first action: ${t.human_first_action}`,
    `Output: ${t.output}`,
    `Success test: ${t.success_test}`,
    `Kill rule: ${t.kill_rule}`,
    `Privacy warning: ${t.privacy_warning}`
  ].join('\n');
}
function copyTaskBrief(id){ const t=DATA.tasks.find(x=>x.id===id); if(t) copyText(taskBrief(t)); }
function reviewMarkdown(){
  const tasks=orderedTasks();
  const lines=[];
  lines.push(`# Roadmap Review`, '', `Scope: ${state.sprintFilter==='all'?'All sprints':sprintName(state.sprintFilter)}`, '');
  lines.push('## Completed tasks','');
  tasks.filter(t=>state.done[t.id]).forEach(t=>{ lines.push(`- ${t.title}`); if(state.taskNotes[t.id]) lines.push(`  - Notes: ${state.taskNotes[t.id].replace(/\n/g,' ')}`); });
  lines.push('', '## Parked tasks','');
  tasks.filter(t=>state.parked[t.id]).forEach(t=>lines.push(`- ${t.title}`));
  lines.push('', '## Killed tasks','');
  tasks.filter(t=>state.killed[t.id]).forEach(t=>lines.push(`- ${t.title}`));
  const next=nextTask();
  lines.push('', '## Next task','', next ? `- ${next.title}` : '- No remaining task in scope.');
  lines.push('', '## Review prompt','', 'Using this review, tell me what to repeat, what to kill, what to simplify, and whether the next task should remain next. Do not create a new system.');
  return lines.join('\n');
}
function copyReviewMarkdown(){ copyText(reviewMarkdown()); }
function downloadReview(){ const blob=new Blob([reviewMarkdown()],{type:'text/markdown'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`roadmap-review-${state.sprintFilter}.md`; a.click(); URL.revokeObjectURL(a.href); }
async function resetScopeProgress(){
  if(!confirm('Reset done, parked and killed status for the current scope? Notes remain saved.')) return;
  tasksInScope().forEach(t=>{ delete state.done[t.id]; delete state.parked[t.id]; delete state.killed[t.id]; });
  save(); await renderAll();
}
loadData();
window.copyText=copyText;
window.copyCurrentPrompt=copyCurrentPrompt;
window.copyTaskBrief=copyTaskBrief;
window.setSprintFilter=setSprintFilter;
window.completeCurrentTask=completeCurrentTask;
window.parkCurrentTask=parkCurrentTask;
window.killCurrentTask=killCurrentTask;
window.unparkTask=unparkTask;
window.unkillTask=unkillTask;
window.toggleReference=toggleReference;
window.saveTaskNote=saveTaskNote;
window.copyReviewMarkdown=copyReviewMarkdown;
window.downloadReview=downloadReview;
window.resetScopeProgress=resetScopeProgress;
