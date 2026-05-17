const fs = require('fs');
const path = require('path');

function readJSON(p){ return JSON.parse(fs.readFileSync(path.join(__dirname, '..', p), 'utf8')); }
function fail(msg){ console.error('ERROR:', msg); process.exitCode = 1; }
function checkArray(name, data){ if(!Array.isArray(data)) fail(`${name} must be an array`); }
function checkFields(name, items, fields){
  items.forEach((item, i) => fields.forEach(f => {
    if(item[f] === undefined || item[f] === '') fail(`${name}[${i}] missing ${f}`);
  }));
}

const tasks = readJSON('data/tasks.json');
const sprints = readJSON('data/sprints.json');
const models = readJSON('data/model-router.json');
const assets = readJSON('data/asset-map.json');
const promptIndex = readJSON('data/prompts-index.json');

checkArray('tasks', tasks);
checkArray('sprints', sprints);
checkArray('models', models);
checkArray('assets', assets);

checkFields('tasks', tasks, ["id", "sprint", "lane", "priority", "title", "problem", "cause", "why_from_answers", "minimum_version", "full_version", "best_model", "fallback_model", "asset_id", "prompt_file", "human_first_action", "output", "success_test", "kill_rule", "friday_review_question", "privacy_warning", "time", "energy", "complexity", "best_time"]);
checkFields('sprints', sprints, ['id','name','weeks','focus','rule']);
checkFields('models', models, ['id','tool','category','best_for','use_when','avoid','fallback','confidence','last_verified','review_interval_days','source_urls']);
checkFields('assets', assets, ['id','asset','use','when_to_open','when_not_to_open','linked_task_ids','first_files']);

const sprintIds = new Set(sprints.map(s => s.id));
const modelIds = new Set(models.map(m => m.id));
const assetIds = new Set(assets.map(a => a.id));
const promptIds = new Set(promptIndex.map(p => p.task_id));

tasks.forEach(t => {
  if(!sprintIds.has(t.sprint)) fail(`${t.id} references missing sprint ${t.sprint}`);
  if(!modelIds.has(t.best_model)) fail(`${t.id} references missing best_model ${t.best_model}`);
  if(!modelIds.has(t.fallback_model)) fail(`${t.id} references missing fallback_model ${t.fallback_model}`);
  if(!assetIds.has(t.asset_id)) fail(`${t.id} references missing asset ${t.asset_id}`);
  if(!promptIds.has(t.id)) fail(`${t.id} missing from prompts-index`);
  const promptPath = path.join(__dirname, '..', t.prompt_file);
  if(!fs.existsSync(promptPath)) fail(`${t.id} prompt file missing: ${t.prompt_file}`);
});

if(process.exitCode){ process.exit(process.exitCode); }
console.log('OK: data validation passed');
