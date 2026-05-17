
const DATA = {};
const store = {
  get(key, fallback){ try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch(e){ return fallback; } },
  set(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
};
let state = store.get('stuartOneRoadmapUpgradedState', { sprint:'s1', done:{}, notes:{}, active:{}, dispositions:{} });
function save(){ store.set('stuartOneRoadmapUpgradedState', state); }
function esc(s){ return (s||'').toString().replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function toast(msg){ const el=document.getElementById('toast'); el.textContent=msg; el.hidden=false; setTimeout(()=>{el.hidden=true}, 1700); }
async function copyText(txt){ try{ await navigator.clipboard.writeText(txt); toast('Copied'); } catch(e){ toast('Copy failed'); } }
async function loadData(){
  const files = ['sprints','tasks','model-router','asset-map','quality-gate','kill-rules','prompts-index','review-questions'];
  try{
    await Promise.all(files.map(async name => {
      const res = await fetch(`data/${name}.json`);
      if(!res.ok) throw new Error(name);
      DATA[name] = await res.json();
    }));
    renderAll();
  } catch(e){
    document.querySelector('main').innerHTML = `<div class="card"><h2>Run through a local server or GitHub Pages</h2><p>This roadmap loads modular JSON and Markdown files. If you opened index.html directly, your browser may block those files.</p><pre>python3 -m http.server 8000</pre><p>Then open <span class="file-link">http://localhost:8000</span>.</p></div>`;
  }
}
function sprintName(id){ const s=DATA.sprints.find(x=>x.id===id); return s ? s.name : id; }
function modelName(id){ const m=DATA['model-router'].find(x=>x.id===id); return m ? m.tool : id; }
function assetName(id){ const a=DATA['asset-map'].find(x=>x.id===id); return a ? a.asset : id; }
function currentSprint(){ return DATA.sprints.find(s=>s.id===state.sprint) || DATA.sprints[0]; }
function activeTasks(){ return DATA.tasks.filter(t=>state.active[t.id]); }
function setTab(view){ document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active', b.dataset.view===view)); document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active', v.id===view)); }
document.getElementById('tabs').addEventListener('click', e=>{ if(e.target.matches('.tab')) setTab(e.target.dataset.view); });
function toggleDone(id,val){ state.done[id]=val; save(); renderCommand(); renderRoadmap(); renderReview(); }
function toggleActive(id,val){
  if(val && !state.active[id] && activeTasks().length >= 3){ toast('3 active tasks max. Park or finish one first.'); renderAll(); return; }
  state.active[id]=val; save(); renderCommand(); renderRoadmap(); renderReview();
}
function setDisposition(id, value){ state.dispositions[id]=value; save(); renderReview(); }
function progressForSprint(id){ const ts=DATA.tasks.filter(t=>t.sprint===id); const done=ts.filter(t=>state.done[t.id]).length; return {done,total:ts.length,pct:ts.length?Math.round(done/ts.length*100):0}; }
function nextBestTask(){ const active=activeTasks(); const undone=active.find(t=>!state.done[t.id]); if(undone) return undone; return DATA.tasks.find(t=>t.sprint===state.sprint && !state.done[t.id]); }
function promptButton(t){ return `<button class="btn primary" onclick="openPromptForTask('${esc(t.id)}')">Load prompt</button>`; }
function taskCard(t, compact=false){
  const checked=!!state.done[t.id]; const active=!!state.active[t.id];
  return `<article class="task-card ${active?'active-task':''}" data-task="${esc(t.id)}">
    <div class="task-top"><div><div class="task-title">${esc(t.title)}</div><div class="small">${esc(t.problem)}</div></div><span class="badge ${esc(t.priority.toLowerCase())}">${esc(t.priority)}</span></div>
    <div class="meta"><span class="pill blue">${esc(sprintName(t.sprint))}</span><span class="pill">${esc(t.lane)}</span><span class="pill green">${esc(t.time)}</span><span class="pill gold">${esc(t.energy)}</span><span class="pill">${esc(t.best_time)}</span></div>
    <label class="checkrow"><input type="checkbox" onchange="toggleActive('${esc(t.id)}', this.checked)" ${active?'checked':''}> <span>Make active</span></label>
    <label class="checkrow"><input type="checkbox" onchange="toggleDone('${esc(t.id)}', this.checked)" ${checked?'checked':''}> <span>Mark done</span></label>
    ${compact ? '' : `<div class="detail">
      <div class="box"><strong>Cause</strong><p>${esc(t.cause)}</p></div>
      <div class="box"><strong>Why this exists from your answers</strong><p>${esc(t.why_from_answers)}</p></div>
      <div class="box"><strong>Minimum version</strong><p>${esc(t.minimum_version)}</p></div>
      <div class="box"><strong>Full version</strong><p>${esc(t.full_version)}</p></div>
      <div class="box"><strong>Use this model</strong><p>${esc(modelName(t.best_model))}</p><p class="tiny">Fallback: ${esc(modelName(t.fallback_model))}. Confidence: ${esc(t.model_confidence)}</p></div>
      <div class="box"><strong>Use this asset</strong><p>${esc(assetName(t.asset_id))}</p><p class="tiny">${esc(t.use_asset_reason)}</p></div>
      <div class="box"><strong>Do this before asking AI</strong><p>${esc(t.do_not_ask_ai_until)}</p></div>
      <div class="box"><strong>Human starter action</strong><p>${esc(t.human_first_action)}</p></div>
      <div class="box"><strong>Output</strong><p>${esc(t.output)}</p></div>
      <div class="box"><strong>Success test</strong><p>${esc(t.success_test)}</p></div>
      <div class="box"><strong>Kill rule</strong><p>${esc(t.kill_rule)}</p></div>
      <div class="box"><strong>Friday review question</strong><p>${esc(t.friday_review_question)}</p></div>
    </div>
    <div class="callout danger" style="margin-top:12px"><strong>Privacy:</strong> ${esc(t.privacy_warning)}</div>
    <p class="prompt-path">Prompt file: ${esc(t.prompt_file)}</p>
    ${promptButton(t)}`}
  </article>`;
}
function renderCommand(){
  const sprint=currentSprint(); const p=progressForSprint(sprint.id); const active=activeTasks(); const sprintTasks=DATA.tasks.filter(t=>t.sprint===sprint.id); const nb=nextBestTask();
  document.getElementById('activeSprintName').textContent=sprint.name;
  document.getElementById('activeTaskCount').textContent=`${active.length} active task${active.length===1?'':'s'}`;
  document.getElementById('command').innerHTML = `<div class="grid">
    <div class="card col-8"><div class="kicker">Command</div><h2>${esc(sprint.name)}</h2><p>${esc(sprint.weeks)}. ${esc(sprint.focus)}</p><div class="callout"><strong>Sprint rule:</strong> ${esc(sprint.rule)}</div><br><select onchange="state.sprint=this.value; save(); renderAll();">${DATA.sprints.map(s=>`<option value="${s.id}" ${s.id===state.sprint?'selected':''}>${esc(s.name)} - ${esc(s.weeks)}</option>`).join('')}</select><br><br><div class="progress"><span style="width:${p.pct}%"></span></div><p class="small">${p.done} of ${p.total} sprint tasks done.</p></div>
    <div class="card col-4"><div class="kicker">Setup</div><h2>Choose the sprint, then 3 tasks max</h2><p>Pick one task that reduces NEXT.io drag, one that grows commercial or SUG proof, and one learning or Chinese task.</p><div class="callout danger"><strong>Hard rule:</strong> the app blocks the fourth active task.</div></div>
    <div class="card col-12"><div class="kicker">Next Best Action</div>${nb?`<div class="next-action"><h2>${esc(nb.title)}</h2><p>${esc(nb.problem)}</p><p><strong>Do first:</strong> ${esc(nb.human_first_action)}</p><p><strong>Use:</strong> ${esc(modelName(nb.best_model))} and ${esc(assetName(nb.asset_id))}</p><button class="btn primary" onclick="setTab('prompts'); loadPromptForTask('${esc(nb.id)}')">Open prompt</button></div>`:'<p>No next action found.</p>'}</div>
    <div class="card col-12"><div class="kicker">Active Tasks</div><h2>Your chosen work</h2>${active.length?active.map(t=>taskCard(t)).join(''):'<p>No active tasks selected. Pick tasks from the sprint list below.</p>'}</div>
    <div class="card col-12"><div class="kicker">Sprint Tasks</div><h2>Choose from this sprint</h2>${sprintTasks.map(t=>taskCard(t,true)).join('')}</div>
    <div class="card col-6"><div class="kicker">AI Quality Gate</div><h2>Before trusting output</h2>${DATA['quality-gate'].map((q,i)=>`<label class="checkrow"><input type="checkbox"><span>${i+1}. ${esc(q)}</span></label>`).join('')}</div>
    <div class="card col-6"><div class="kicker">No More LLM Loop</div><h2>Gate before asking another model</h2><label class="checkrow"><input type="checkbox"><span>Have I already asked two models?</span></label><label class="checkrow"><input type="checkbox"><span>Have I taken one real-world action?</span></label><label class="checkrow"><input type="checkbox"><span>Will another answer change the decision?</span></label><div class="callout"><strong>Rule:</strong> if another answer will not change the decision, stop and act.</div></div>
  </div>`;
}
function renderRoadmap(){
  const lanes=[...new Set(DATA.tasks.map(t=>t.lane))];
  document.getElementById('roadmap').innerHTML=`<div class="card"><div class="kicker">Sprint Roadmap</div><h2>Filter, pick, do</h2><div class="controls"><select id="filterSprint"><option value="all">All sprints</option>${DATA.sprints.map(s=>`<option value="${s.id}">${esc(s.name)}</option>`).join('')}</select><select id="filterLane"><option value="all">All lanes</option>${lanes.map(l=>`<option value="${esc(l)}">${esc(l)}</option>`).join('')}</select><input id="filterSearch" type="text" placeholder="Search tasks, model, asset, questionnaire source"></div><div id="taskList"></div></div>`;
  const f=()=>{ const sp=document.getElementById('filterSprint').value; const lane=document.getElementById('filterLane').value; const q=document.getElementById('filterSearch').value.toLowerCase(); const list=DATA.tasks.filter(t=>(sp==='all'||t.sprint===sp)&&(lane==='all'||t.lane===lane)&&JSON.stringify(t).toLowerCase().includes(q)); document.getElementById('taskList').innerHTML=list.map(t=>taskCard(t)).join('') || '<p>No tasks found.</p>'; };
  ['filterSprint','filterLane','filterSearch'].forEach(id=>setTimeout(()=>document.getElementById(id).addEventListener('input',f),0)); setTimeout(f,0);
}
async function loadPromptForTask(id){
  const t=DATA.tasks.find(x=>x.id===id); if(!t) return;
  const p=DATA['prompts-index'].find(x=>x.task_id===id);
  let prompt='';
  try{ prompt = await (await fetch(t.prompt_file)).text(); } catch(e){ prompt = `Prompt file could not load. Open ${t.prompt_file} manually.`; }
  const box=document.getElementById('promptBox');
  if(box){ box.innerHTML = `<div class="kicker">Prompt Runner</div><h2>${esc(t.title)}</h2><div class="meta"><span class="pill blue">${esc(modelName(t.best_model))}</span><span class="pill">Fallback: ${esc(modelName(t.fallback_model))}</span><span class="pill green">${esc(assetName(t.asset_id))}</span></div><p><strong>Human-first action:</strong> ${esc(t.human_first_action)}</p><p><strong>Success test:</strong> ${esc(t.success_test)}</p><p class="prompt-path">${esc(t.prompt_file)}</p><pre>${esc(prompt)}</pre><button class="btn primary" onclick="copyText(document.getElementById('loadedPromptText').textContent)">Copy prompt</button><pre id="loadedPromptText" class="hidden">${esc(prompt)}</pre>`; }
}
async function openPromptForTask(id){ setTab('prompts'); await loadPromptForTask(id); }
function renderPrompts(){
  const opts=DATA.tasks.map(t=>`<option value="${t.id}">${esc(sprintName(t.sprint))}: ${esc(t.title)}</option>`).join('');
  document.getElementById('prompts').innerHTML=`<div class="grid"><div class="card col-4"><div class="kicker">Prompt Runner</div><h2>Only use prompts tied to active tasks</h2><p>This is not a general prompt library.</p><select id="promptSelect">${opts}</select><br><br><button class="btn primary" onclick="loadPromptForTask(document.getElementById('promptSelect').value)">Load prompt</button><hr style="border-color:var(--line)"><p class="small">Prompt text lives in Markdown files. Tasks reference those files so prompts do not drift in two places.</p></div><div class="card col-8"><div id="promptBox"><p>Select a task and load its prompt.</p></div></div></div>`;
}
function renderModels(){
  document.getElementById('models').innerHTML=`<div class="card"><div class="kicker">Model and Tool Router</div><h2>Choose by job, not loyalty</h2><p>Re-check capabilities on the review interval. Platforms change fast.</p><div class="callout info"><strong>Tool choice gate:</strong> manual workflow first. Google AI Studio for Gemini-native prototypes. Claude Artifacts for simple internal tools. Lovable for full-stack apps. Make or n8n for recurring automation.</div></div><br><div class="grid">${DATA['model-router'].map(m=>`<div class="card col-4 router-card"><h3>${esc(m.tool)}</h3><div class="meta"><span class="pill blue">${esc(m.category)}</span><span class="pill green">${esc(m.confidence)}</span><span class="pill">Verified ${esc(m.last_verified)}</span></div><p><strong>Use when:</strong> ${esc(m.use_when)}</p><p><strong>Best for:</strong> ${esc(m.best_for)}</p><p><strong>Do not use for:</strong> ${esc(m.avoid)}</p><p><strong>Fallback:</strong> ${esc(m.fallback)}</p><p class="tiny">Review every ${esc(m.review_interval_days)} days.</p><details><summary class="btn ghost">Sources</summary>${(m.source_urls||[]).map(u=>`<a class="source-link" href="${esc(u)}" target="_blank" rel="noopener">${esc(u)}</a>`).join('')}</details></div>`).join('')}</div>`;
}
function renderAssets(){
  document.getElementById('assets').innerHTML=`<div class="card"><div class="kicker">Asset Map</div><h2>Open assets only when the task points there</h2><p>No dumping everything into every model. Open the smallest relevant asset pack.</p></div><br><div class="grid">${DATA['asset-map'].map(a=>`<div class="card col-6"><h3>${esc(a.asset)}</h3><p><strong>Use:</strong> ${esc(a.use)}</p><p><strong>Open when:</strong> ${esc(a.when_to_open)}</p><p><strong>Do not open when:</strong> ${esc(a.when_not_to_open)}</p><p><strong>Start with:</strong> ${esc(a.first_files)}</p><p class="small"><strong>Privacy:</strong> ${esc(a.privacy||'Use judgement.')}</p><details><summary class="btn ghost">Linked tasks</summary><ul>${(a.linked_task_ids||[]).map(id=>{const t=DATA.tasks.find(x=>x.id===id); return `<li>${esc(id)}: ${esc(t?t.title:'Missing')}</li>`;}).join('')||'<li>No live tasks.</li>'}</ul></details></div>`).join('')}</div>`;
}
function reviewMarkdown(){
  const sprint=currentSprint(); const active=activeTasks(); const lines=[];
  lines.push(`# Friday Review: ${sprint.name}`,'');
  lines.push('## Active tasks','');
  active.forEach(t=>lines.push(`- [${state.done[t.id]?'x':' '}] ${t.title} | disposition: ${state.dispositions[t.id]||'not set'}`));
  lines.push('','## Answers','');
  DATA['review-questions'].forEach((q,i)=>{ lines.push(`### ${i+1}. ${q}`); lines.push(state.notes[`review-${sprint.id}-${i}`]||''); lines.push(''); });
  lines.push('## Parked ideas','',state.notes.parked||'');
  return lines.join('\n');
}
function downloadReview(){ const blob=new Blob([reviewMarkdown()],{type:'text/markdown'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`friday-review-${currentSprint().id}.md`; a.click(); URL.revokeObjectURL(a.href); }
function renderReview(){
  const sprint=currentSprint(); const ts=DATA.tasks.filter(t=>t.sprint===sprint.id); const done=ts.filter(t=>state.done[t.id]); const active=activeTasks();
  document.getElementById('review').innerHTML=`<div class="grid"><div class="card col-5"><div class="kicker">Review</div><h2>${esc(sprint.name)}</h2><p>Close the loop before choosing new work.</p><p><strong>Done this sprint:</strong> ${done.length} of ${ts.length}</p><p><strong>Active tasks:</strong> ${active.length} of 3.</p><button class="btn primary" onclick="copyText(reviewMarkdown())">Copy review as Markdown</button><button class="btn" onclick="downloadReview()">Download .md</button></div><div class="card col-7"><h2>Task disposition</h2>${active.map(t=>`<div class="box"><strong>${esc(t.title)}</strong><div class="disposition">${['repeat','park','kill','delegate','convert to asset','convert to prompt'].map(v=>`<label class="checkrow"><input type="radio" name="disp-${esc(t.id)}" ${state.dispositions[t.id]===v?'checked':''} onchange="setDisposition('${esc(t.id)}','${esc(v)}')"><span>${esc(v)}</span></label>`).join('')}</div></div>`).join('')||'<p>No active tasks selected.</p>'}</div><div class="card col-12"><h2>Review questions</h2>${DATA['review-questions'].map((q,i)=>`<label class="small">${i+1}. ${esc(q)}</label><textarea data-note="review-${sprint.id}-${i}" oninput="saveNote(this)">${esc(state.notes['review-'+sprint.id+'-'+i]||'')}</textarea><br>`).join('')}</div><div class="card col-12"><h2>Review synthesis prompt</h2><pre>Using my completed tasks, review answers and roadmap constraints, summarise what worked, what failed, what I should kill, what I should repeat, and the three tasks I should choose for the next sprint. Do not create a new plan. Use the existing roadmap structure.</pre><button class="btn primary" onclick="copyText('Using my completed tasks, review answers and roadmap constraints, summarise what worked, what failed, what I should kill, what I should repeat, and the three tasks I should choose for the next sprint. Do not create a new plan. Use the existing roadmap structure.')">Copy review prompt</button></div></div>`;
}
function saveNote(el){ state.notes[el.dataset.note]=el.value; save(); }
function renderArchive(){ document.getElementById('archive').innerHTML=`<div class="grid"><div class="card col-6"><div class="kicker">Do not build yet</div><h2>Protect yourself from shiny work</h2>${DATA['kill-rules'].map(x=>`<div class="callout danger">${esc(x)}</div><br>`).join('')}</div><div class="card col-6"><div class="kicker">Repo rules</div><h2>Future AI must read AI_CONTEXT.md</h2><p>Do not let another model turn this into a mega-plan or generic personal OS.</p><div class="callout info">Every new task needs a problem, cause, questionnaire source, model, asset, prompt file, output, success test, kill rule and privacy warning.</div></div><div class="card col-6"><div class="kicker">Parked Ideas</div><h2>Store without derailing the sprint</h2><textarea data-note="parked" oninput="saveNote(this)" placeholder="Drop shiny ideas here. Review only during Friday Review.">${esc(state.notes.parked||'')}</textarea></div><div class="card col-6"><div class="kicker">Killed Ideas</div><h2>Record deliberate kills</h2><textarea data-note="killed" oninput="saveNote(this)" placeholder="Idea, why killed, what replaced it, date.">${esc(state.notes.killed||'')}</textarea></div></div>`; }
function renderAll(){ renderCommand(); renderRoadmap(); renderPrompts(); renderModels(); renderAssets(); renderReview(); renderArchive(); }
loadData();
window.toggleDone=toggleDone; window.toggleActive=toggleActive; window.copyText=copyText; window.loadPromptForTask=loadPromptForTask; window.openPromptForTask=openPromptForTask; window.saveNote=saveNote; window.reviewMarkdown=reviewMarkdown; window.downloadReview=downloadReview; window.setDisposition=setDisposition; window.setTab=setTab;
