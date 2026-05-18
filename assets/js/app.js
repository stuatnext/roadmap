window.roadmapStarted = true;
const DATA = {};
const STORAGE_KEY = 'stuartOneRoadmapGuidedBuilderV2';
const store = {
  get(key, fallback){ try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch(e){ return fallback; } },
  set(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
};
let state = store.get(STORAGE_KEY, {
  done:{},
  parked:{},
  killed:{},
  taskNotes:{},
  taskSteps:{},
  reviewNotes:'',
  showReview:false,
  showQueue:false,
  showParked:false,
  showKilled:false,
  showSourceSpec:false
});
let CURRENT_PROMPT = '';
let CURRENT_PROMPT_SECTIONS = [];
function save(){ store.set(STORAGE_KEY, state); }
function esc(s){ return (s||'').toString().replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function toast(msg){ const el=document.getElementById('toast'); el.textContent=msg; el.hidden=false; setTimeout(()=>{el.hidden=true}, 1700); }
async function copyText(txt){ try{ await navigator.clipboard.writeText(txt || ''); toast('Copied'); } catch(e){ toast('Copy failed'); } }
async function fetchText(path){ const r = await fetch(path); if(!r.ok) throw new Error(path); return r.text(); }
function stripFence(txt){
  const m = (txt||'').match(/```(?:text|markdown|md)?\n([\s\S]*?)```/i);
  return m ? m[1].trim() : (txt||'').trim();
}
function parsePromptSections(md){
  const lines = (md || '').split(/\r?\n/);
  const sections = [];
  let current = null;
  for(const line of lines){
    const m = line.match(/^##\s+(Prompt\s+\d+:[^\n]+)\s*$/i);
    if(m){
      if(current) sections.push(current);
      current = {title:m[1].trim(), body:''};
    } else if(current){ current.body += line + '\n'; }
  }
  if(current) sections.push(current);
  return sections.map((sec, idx)=>({
    index: idx,
    title: sec.title,
    body: sec.body.trim(),
    copy: stripFence(sec.body),
    meta: parsePromptMeta(sec.body)
  })).filter(sec=>sec.body || sec.copy);
}
function parsePromptMeta(body){
  const meta={};
  const map={
    'use this model or tool':'model',
    'recommended model/tool':'model',
    'why this model or tool':'why_model',
    'why':'why_model',
    'connected sources':'connected_sources',
    'expected output':'expected_output',
    'human review gate':'human_review_gate',
    'copy/export target':'copy_export_target',
    'success test':'success_test',
    'notes':'notes'
  };
  const lines=(body||'').split(/\r?\n/);
  for(const line of lines){
    const bold=line.match(/^\*\*([^*]+):\*\*\s*(.*)$/);
    if(bold){ const key=map[bold[1].trim().toLowerCase()]; if(key) meta[key]=bold[2].trim(); continue; }
    const plain=line.match(/^([^:]{2,45}):\s*(.+)$/);
    if(plain){ const key=map[plain[1].trim().toLowerCase()]; if(key && !meta[key]) meta[key]=plain[2].trim(); }
  }
  return meta;
}
async function loadData(){
  setText('queueStatus','Loading data files');
  const files = ['sprints','tasks','model-router','asset-map','quality-gate','kill-rules','review-questions'];
  try{
    await Promise.all(files.map(async name => {
      const res = await fetch(`data/${name}.json`);
      if(!res.ok) throw new Error(name);
      DATA[name] = await res.json();
    }));
    await render();
  } catch(e){
    console.error('Roadmap load failed', e);
    setText('currentTaskName','Data load failed');
    setText('queueStatus','Check /data/*.json paths');
    document.getElementById('appRoot').innerHTML = `<div class="card hero-card"><p class="eyebrow">Loading failed</p><h2>The queue could not load.</h2><p>The app needs JSON files in <span class="file-link">/data/</span> and JavaScript in <span class="file-link">/assets/js/</span>.</p><ol class="tight-list"><li>Open <span class="file-link">data/tasks.json</span> from your GitHub Pages URL. It should show JSON.</li><li>Open <span class="file-link">data/sprints.json</span>. It should show JSON.</li><li>If either shows 404, upload the missing folder to the repo root.</li><li>If both work, hard refresh the page.</li></ol></div>`;
  }
}
function setText(id, val){ const el=document.getElementById(id); if(el) el.textContent=val; }
function sprintName(id){ const s=(DATA.sprints||[]).find(x=>x.id===id); return s ? s.name : id; }
function sprintIndex(id){ return (DATA.sprints||[]).findIndex(x=>x.id===id); }
function modelEntry(id){ return (DATA['model-router']||[]).find(x=>x.id===id); }
function modelName(id){ const m=modelEntry(id); return m ? m.tool : id; }
function assetEntry(id){ return (DATA['asset-map']||[]).find(x=>x.id===id); }
function assetName(id){ const a=assetEntry(id); return a ? a.asset : id; }
function orderedTasks(){
  return (DATA.tasks||[]).slice().sort((a,b)=>{
    const sa=sprintIndex(a.sprint), sb=sprintIndex(b.sprint);
    if(sa!==sb) return sa-sb;
    return DATA.tasks.indexOf(a)-DATA.tasks.indexOf(b);
  });
}
function nextTask(){ return orderedTasks().find(t => !state.done[t.id] && !state.parked[t.id] && !state.killed[t.id]); }
function counts(){
  const all=orderedTasks();
  return {
    total: all.length,
    done: all.filter(t=>state.done[t.id]).length,
    parked: all.filter(t=>state.parked[t.id]).length,
    killed: all.filter(t=>state.killed[t.id]).length,
    remaining: all.filter(t=>!state.done[t.id] && !state.parked[t.id] && !state.killed[t.id]).length
  };
}
async function getPrompt(t){
  if(!t || !t.prompt_file) return 'No prompt file for this task.';
  try { return await fetchText(t.prompt_file); }
  catch(e){ return `Prompt file could not load. Open ${t.prompt_file} manually.`; }
}
function currentBuildStepIndex(t, total){
  const idx = state.taskSteps[t.id] || 0;
  return Math.max(0, Math.min(idx, total-1));
}
function baseSteps(t){
  return [
    {
      kind:'brief',
      title:'Step 1: Understand the problem',
      intro:'Read this before asking any model for help.',
      body:t.problem,
      checklist:[
        `Cause: ${t.cause}`,
        `Why this exists: ${t.why_from_answers}`,
        `What this should make easier: ${t.why_it_matters}`
      ],
      model:null,
      prompt:null
    },
    {
      kind:'source',
      title:'Step 2: Gather the source material',
      intro:'Do the human-first prep. This stops the model guessing.',
      body:t.human_first_action,
      checklist:[
        `Open asset: ${assetName(t.asset_id)}`,
        t.use_asset_reason || 'Use only the smallest relevant source material.',
        t.do_not_ask_ai_until || 'Write the rough human version first.'
      ],
      model:t.best_model,
      prompt:null
    }
  ];
}
function promptSteps(t, sections){
  return sections.map((sec, i)=>({
    kind:'prompt',
    title:sec.title,
    intro:'Run this prompt only. Do not paste the whole sequence.',
    body:sec.copy,
    prompt:sec,
    model:sec.meta.model ? null : t.best_model,
    meta:sec.meta,
    checklist:[
      sec.meta.expected_output ? `Expected output: ${sec.meta.expected_output}` : `Output: part ${i+1} of the task sequence`,
      sec.meta.human_review_gate ? `Human review gate: ${sec.meta.human_review_gate}` : 'Review before taking action.',
      sec.meta.copy_export_target ? `Copy/export target: ${sec.meta.copy_export_target}` : 'Save the useful output into your task notes.'
    ]
  }));
}
function closingSteps(t){
  return [
    {
      kind:'test',
      title:'Final step: Test before you call it done',
      intro:'Do not mark complete because the prompt looked good. Mark complete only if it changes something.',
      body:t.success_test,
      checklist:[
        `Minimum version: ${t.minimum_version}`,
        `Output to save: ${t.output}`,
        `Kill rule: ${t.kill_rule}`,
        `Friday review question: ${t.friday_review_question}`
      ],
      model:null,
      prompt:null
    }
  ];
}
function allBuildSteps(t, sections){ return [...baseSteps(t), ...promptSteps(t, sections), ...closingSteps(t)]; }
function modelControlHtml(t, step){
  const meta = step.meta || {};
  const primaryLabel = meta.model || modelName(t.best_model);
  const primary = meta.model ? null : modelEntry(t.best_model);
  const fallback = modelEntry(t.fallback_model);
  const why = meta.why_model || (primary && (primary.use_when || primary.best_for)) || '';
  const avoid = primary && primary.avoid ? primary.avoid : '';
  const connected = meta.connected_sources || (t.artifact_source && t.artifact_source.connected_sources) || 'Use only sources named in this task and the linked asset.';
  return `<div class="control-grid">
    <div class="control-card"><span>Use this model or tool</span><strong>${esc(primaryLabel)}</strong><p>${esc(why)}</p>${avoid ? `<small>Do not use it for: ${esc(avoid)}</small>` : ''}</div>
    <div class="control-card"><span>Fallback</span><strong>${esc(modelName(t.fallback_model))}</strong><p>${esc(fallback ? (fallback.use_when || fallback.best_for || '') : '')}</p></div>
    <div class="control-card"><span>Source control</span><strong>${esc(connected)}</strong><p>${esc(t.privacy_warning)}</p></div>
    <div class="control-card"><span>Asset to open</span><strong>${esc(assetName(t.asset_id))}</strong><p>${esc(t.use_asset_reason || '')}</p></div>
  </div>`;
}
function sourceSpecHtml(t){
  const a=t.artifact_source;
  if(!a) return '';
  const rows=[
    ['Problem solved', a.problem_solved], ['Purpose', a.purpose], ['Primary user', a.primary_user || a.user], ['Inputs', a.inputs], ['Fields', a.fields], ['Buttons', a.buttons], ['Views', a.views], ['Connected sources', a.connected_sources], ['Claude Cowork role', a.claude_cowork_role], ['Human approval gate', a.human_approval_gate], ['Version 1 rule', a.version_1_rule], ['Copy/export', a.copy_export_needs], ['What not to build', a.what_not_to_build], ['First manual test', a.first_manual_test], ['Success test', a.success_test]
  ].filter(x=>x[1]);
  return `<details class="source-spec" ${state.showSourceSpec?'open':''} ontoggle="state.showSourceSpec=this.open; save();"><summary>Artifact source spec from workbook</summary><div class="spec-grid">${rows.map(([k,v])=>`<div><strong>${esc(k)}</strong><p>${esc(v)}</p></div>`).join('')}</div></details>`;
}
function futureBuildHtml(t){
  if(!t.downstream_outputs && !t.feeds_into && !t.future_build_rules) return '';
  const outs=(t.downstream_outputs||[]).map(x=>`<li><strong>${esc(x.name)}</strong><span>${esc(x.use)}</span></li>`).join('');
  const feeds=(t.feeds_into||[]).map(x=>`<li><strong>${esc(x.label||x.task)}</strong><span>${esc(x.reason||'')}</span></li>`).join('');
  const rules=(t.future_build_rules||[]).map(x=>`<li>${esc(x)}</li>`).join('');
  return `<details class="source-spec"><summary>Reusable outputs this task should create</summary>${outs?`<h4>Outputs</h4><ul class="feed-list">${outs}</ul>`:''}${feeds?`<h4>Feeds later tasks</h4><ul class="feed-list">${feeds}</ul>`:''}${rules?`<h4>Rules</h4><ol class="tight-list">${rules}</ol>`:''}<button class="btn ghost" onclick="copyFutureBuildBrief('${esc(t.id)}')">Copy future-build brief</button></details>`;
}
function parkedHtml(){
  const parked=orderedTasks().filter(t=>state.parked[t.id]);
  if(!parked.length) return '';
  return `<section class="mini-panel"><button class="panel-toggle" onclick="toggleParked()">Parked tasks (${parked.length})</button>${state.showParked?`<div class="panel-body">${parked.map(t=>`<div class="history-row"><span>${esc(t.title)}<small>${esc(sprintName(t.sprint))}</small></span><button class="btn ghost" onclick="unparkTask('${esc(t.id)}')">Unpark</button></div>`).join('')}</div>`:''}</section>`;
}
function killedHtml(){
  const killed=orderedTasks().filter(t=>state.killed[t.id]);
  if(!killed.length) return '';
  return `<section class="mini-panel"><button class="panel-toggle" onclick="toggleKilled()">Killed tasks (${killed.length})</button>${state.showKilled?`<div class="panel-body">${killed.map(t=>`<div class="history-row"><span>${esc(t.title)}<small>${esc(sprintName(t.sprint))}</small></span><button class="btn ghost" onclick="restoreTask('${esc(t.id)}')">Restore</button></div>`).join('')}</div>`:''}</section>`;
}
function queueHtml(){
  const q=orderedTasks().filter(t=>!state.done[t.id] && !state.parked[t.id] && !state.killed[t.id]);
  return `<section class="mini-panel"><button class="panel-toggle" onclick="toggleQueue()">Queue preview (${q.length})</button>${state.showQueue?`<div class="panel-body"><ol class="queue-list">${q.slice(0,10).map((t,i)=>`<li class="${i===0?'current':''}"><span>${esc(t.title)}</span><small>${esc(sprintName(t.sprint))}</small></li>`).join('')}</ol></div>`:''}</section>`;
}
function reviewHtml(){
  const qs=DATA['review-questions'] || [];
  const next=nextTask();
  return `<section class="review-card card ${state.showReview?'open':''}">
    <div class="review-head"><div><p class="eyebrow">Weekly review</p><h2>Queue control checkpoint</h2><p>Use this to decide what to build next, what to park, and what to kill.</p></div><button class="btn ghost" onclick="toggleReview()">${state.showReview?'Hide review':'Open review'}</button></div>
    ${state.showReview?`<div class="review-body"><ol class="review-questions">${qs.map(q=>`<li>${esc(q)}</li>`).join('')}<li>Did the last completed task make me more efficient, more effective, or more undeniable?</li><li>Should the next task remain next: ${esc(next ? next.title : 'No remaining task')}?</li></ol><textarea id="reviewNotes" oninput="saveReviewNotes(this)" placeholder="Write the review. Keep it brutal and short.">${esc(state.reviewNotes||'')}</textarea><div class="action-row"><button class="btn primary" onclick="copyReviewMarkdown()">Copy review</button><button class="btn" onclick="downloadReview()">Download review</button></div></div>`:''}
  </section>`;
}
async function render(){
  const t=nextTask();
  const c=counts();
  setText('currentTaskName', t ? t.title : 'Queue clear');
  setText('queueStatus', `${c.remaining} remaining · ${c.done} done · ${c.parked} parked · ${c.killed} killed`);
  const root=document.getElementById('appRoot');
  if(!t){
    root.innerHTML=`${parkedHtml()}${killedHtml()}${reviewHtml()}<div class="card hero-card"><p class="eyebrow">No current build task</p><h2>The active queue is clear.</h2><p>Run the weekly review, unpark a task, or restore a killed task if needed.</p></div>`;
    return;
  }
  CURRENT_PROMPT = await getPrompt(t);
  CURRENT_PROMPT_SECTIONS = parsePromptSections(CURRENT_PROMPT);
  const steps=allBuildSteps(t, CURRENT_PROMPT_SECTIONS);
  const idx=currentBuildStepIndex(t, steps.length);
  const step=steps[idx];
  const progressPct=Math.round(((idx+1)/steps.length)*100);
  const promptHtml = step.kind==='prompt' ? `<pre class="prompt-box">${esc(step.body)}</pre><div class="action-row"><button class="btn primary" onclick="copyBuildStepPrompt(${idx})">Copy this prompt</button><button class="btn" onclick="copyFullPromptSequence()">Copy full prompt sequence</button></div>` : '';
  root.innerHTML = `${queueHtml()}${parkedHtml()}${killedHtml()}${reviewHtml()}
    <article class="card build-card">
      <div class="build-head">
        <div><p class="eyebrow">Current build task</p><h2>${esc(t.title)}</h2><p>${esc(t.why_from_answers)}</p></div>
        <div class="build-meta"><span>${esc(sprintName(t.sprint))}</span><span>${esc(t.lane)}</span><span>${esc(t.time)}</span><span>${esc(t.energy)}</span></div>
      </div>
      <div class="progress-block"><div class="progress-line"><div style="width:${progressPct}%"></div></div><p>Step ${idx+1} of ${steps.length}</p></div>
      <section class="step-main">
        <p class="eyebrow">${esc(step.kind==='prompt'?'Prompt step':'Build step')}</p>
        <h3>${esc(step.title)}</h3>
        <p class="step-intro">${esc(step.intro||'')}</p>
        ${step.body && step.kind!=='prompt'?`<div class="step-body"><p>${esc(step.body)}</p></div>`:''}
        ${step.checklist && step.checklist.length?`<ul class="check-list">${step.checklist.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}
        ${modelControlHtml(t, step)}
        ${promptHtml}
      </section>
      ${sourceSpecHtml(t)}
      ${futureBuildHtml(t)}
      <section class="notes-card"><h3>Output capture for this task</h3><p>Paste the useful output, decision, owner, artifact link, blocker, or proof here.</p><textarea data-task-note="${esc(t.id)}" oninput="saveTaskNote(this)">${esc(state.taskNotes[t.id]||'')}</textarea></section>
      <section class="nav-bar">
        <button class="btn" onclick="prevBuildStep('${esc(t.id)}')" ${idx===0?'disabled':''}>Back</button>
        ${idx<steps.length-1?`<button class="btn primary" onclick="nextBuildStep('${esc(t.id)}')">Next build step</button>`:`<button class="btn success" onclick="completeTask('${esc(t.id)}')">Complete task and load next</button>`}
        <button class="btn" onclick="parkTask('${esc(t.id)}')">Park</button>
        <button class="btn danger" onclick="killTask('${esc(t.id)}')">Kill</button>
      </section>
    </article>`;
}
function copyBuildStepPrompt(idx){
  const stepTask=nextTask(); if(!stepTask) return;
  const steps=allBuildSteps(stepTask, CURRENT_PROMPT_SECTIONS);
  const step=steps[idx];
  if(step && step.prompt) copyText(step.prompt.copy || step.prompt.body || '');
  else copyText([step.title, step.body, ...(step.checklist||[])].join('\n'));
}
function copyFullPromptSequence(){ copyText(CURRENT_PROMPT || ''); }
async function nextBuildStep(id){ const t=DATA.tasks.find(x=>x.id===id); if(!t) return; const steps=allBuildSteps(t, CURRENT_PROMPT_SECTIONS); state.taskSteps[id]=Math.min((state.taskSteps[id]||0)+1, steps.length-1); save(); await render(); }
async function prevBuildStep(id){ state.taskSteps[id]=Math.max((state.taskSteps[id]||0)-1, 0); save(); await render(); }
async function completeTask(id){ state.done[id]=true; delete state.parked[id]; delete state.killed[id]; state.taskSteps[id]=0; save(); toast('Complete. Next build loaded.'); await render(); }
async function parkTask(id){ state.parked[id]=true; delete state.done[id]; delete state.killed[id]; state.taskSteps[id]=0; save(); toast('Parked. Next build loaded.'); await render(); }
async function killTask(id){ state.killed[id]=true; delete state.done[id]; delete state.parked[id]; state.taskSteps[id]=0; save(); toast('Killed. Next build loaded.'); await render(); }
async function unparkTask(id){ delete state.parked[id]; save(); await render(); }
async function restoreTask(id){ delete state.killed[id]; save(); await render(); }
function toggleQueue(){ state.showQueue=!state.showQueue; save(); render(); }
function toggleParked(){ state.showParked=!state.showParked; save(); render(); }
function toggleKilled(){ state.showKilled=!state.showKilled; save(); render(); }
function toggleReview(){ state.showReview=!state.showReview; save(); render(); }
function saveTaskNote(el){ state.taskNotes[el.dataset.taskNote]=el.value; save(); }
function saveReviewNotes(el){ state.reviewNotes=el.value; save(); }
function futureBuildBrief(t){
  const lines=[`# Future-build brief: ${t.title}`,'',`Task ID: ${t.id}`,`Output: ${t.output}`,''];
  if(t.downstream_outputs){ lines.push('## Reusable outputs'); t.downstream_outputs.forEach(x=>lines.push(`- ${x.name}: ${x.use}`)); lines.push(''); }
  if(t.feeds_into){ lines.push('## Feeds roadmap tasks'); t.feeds_into.forEach(x=>lines.push(`- ${x.label || x.task}: ${x.reason || ''}`)); lines.push(''); }
  if(t.future_build_rules){ lines.push('## Future build rules'); t.future_build_rules.forEach(x=>lines.push(`- ${x}`)); }
  return lines.join('\n');
}
function copyFutureBuildBrief(id){ const t=DATA.tasks.find(x=>x.id===id); if(t) copyText(futureBuildBrief(t)); }
function reviewMarkdown(){
  const tasks=orderedTasks();
  const lines=[];
  lines.push('# Guided Builder Review','');
  lines.push('## Review notes','', state.reviewNotes || '[write review notes]', '');
  lines.push('## Completed tasks','');
  tasks.filter(t=>state.done[t.id]).forEach(t=>{ lines.push(`- ${t.title}`); if(state.taskNotes[t.id]) lines.push(`  - Output: ${state.taskNotes[t.id].replace(/\n/g,' ')}`); });
  lines.push('', '## Parked tasks','');
  tasks.filter(t=>state.parked[t.id]).forEach(t=>lines.push(`- ${t.title}`));
  lines.push('', '## Killed tasks','');
  tasks.filter(t=>state.killed[t.id]).forEach(t=>lines.push(`- ${t.title}`));
  const next=nextTask();
  lines.push('', '## Next build task','', next ? `- ${next.title}` : '- No remaining task.');
  lines.push('', '## Prompt for review','', 'Using this review, tell me what to repeat, what to kill, what to simplify, and whether the next build task should remain next. Keep it practical. Do not create a new system.');
  return lines.join('\n');
}
function copyReviewMarkdown(){ copyText(reviewMarkdown()); }
function downloadReview(){ const blob=new Blob([reviewMarkdown()],{type:'text/markdown'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='guided-builder-review.md'; a.click(); URL.revokeObjectURL(a.href); }
loadData();
window.copyText=copyText;
window.copyBuildStepPrompt=copyBuildStepPrompt;
window.copyFullPromptSequence=copyFullPromptSequence;
window.nextBuildStep=nextBuildStep;
window.prevBuildStep=prevBuildStep;
window.completeTask=completeTask;
window.parkTask=parkTask;
window.killTask=killTask;
window.unparkTask=unparkTask;
window.restoreTask=restoreTask;
window.toggleQueue=toggleQueue;
window.toggleParked=toggleParked;
window.toggleKilled=toggleKilled;
window.toggleReview=toggleReview;
window.saveTaskNote=saveTaskNote;
window.saveReviewNotes=saveReviewNotes;
window.copyFutureBuildBrief=copyFutureBuildBrief;
window.copyReviewMarkdown=copyReviewMarkdown;
window.downloadReview=downloadReview;
