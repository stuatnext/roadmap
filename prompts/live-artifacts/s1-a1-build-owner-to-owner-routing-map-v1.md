# Owner-to-owner routing map v1 build prompts

This is a consolidated prompt sequence for building the NEXT.io live artifact: **Owner-to-owner routing map**.

It combines the execution workbook prompts with the roadmap build rules. Do not paste the whole file into an LLM. Run one prompt at a time.

## What this artifact must achieve

- **Purpose:** Route work to the correct owner before Stuart becomes the middleman.
- **Problem solved:** Stops chasing, forwarding, and unclear ownership loops.
- **Primary user:** Stuart, function owners, project managers, direct reports.
- **Roadmap trigger:** Start with 10 recent owner-chase or middleman examples.
- **Success test:** Repeated asks reach the correct owner without Stuart forwarding them.

## Version 1 boundaries

- **Backend:** No. Local storage, Claude evidence scan, and copy/export first.
- **Version 1 rule:** Local state, manual source review, human approval, copy/export.
- **Copy/export:** Copy redirect message. Export CSV or markdown for Monday, Teams, or leadership review.
- **Human approval gate:** Stuart or relevant function owner approves a route before it becomes the rule.
- **What not to build:** No automatic reassignment, source writeback, auto-escalation, or live sync.
- **First manual test:** Classify 10 recent asks, validate owners, use redirects for one week.

## How to use this file

1. Start with Prompt 1.
2. Save the output.
3. Review it manually.
4. Paste the approved output into the next prompt.
5. Do not skip to the artifact build until evidence, classifications and core output are approved.

## Source discipline

- Evidence first.
- No live sync.
- No source writeback.
- No automatic decisions.
- Use copy/export and human approval.
- If the model lacks source access, paste/export the relevant evidence manually.


## Prompt 1: Capture raw situation

**Use this model or tool:** Claude Opus with connected sources

**Why this model or tool:** Best for evidence scan across Microsoft 365, Monday.com and HubSpot before judgement.

**Connected sources:** Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register

**Expected output:** Evidence list of unclear owner requests.

**Human review gate:** Stuart confirms the examples are fair before classification.

**Copy/export target:** Copy evidence summary into routing map draft.

**Success test:** At least 10 real examples are captured without exposing sensitive data.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register.
- A 14-day date window or clear instruction to use the last 14 days.
- Any existing Execution Register export if available.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Owner-to-owner routing map.

Goal of this artifact:
Route work to the correct owner before Stuart becomes the middleman.

Problem solved:
Stops chasing, forwarding, and unclear ownership loops.

This is stage 1: Capture raw situation.

Use this model/tool:
Claude Opus with connected sources

Why this tool:
Best for evidence scan across Microsoft 365, Monday.com and HubSpot before judgement.

How to use the tool:
Use when Claude can access Microsoft 365, Monday.com, HubSpot or uploaded source files. It should scan evidence first and show source gaps before recommending anything.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register.
- A 14-day date window or clear instruction to use the last 14 days.
- Any existing Execution Register export if available.

Connected sources named by the execution source pack:
Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register

Task:
Scan Outlook, Teams, Monday.com, HubSpot, OneDrive and the execution register for the last 14 days. Find requests sent to Stuart where the correct owner, decision right or next action is unclear. Do not infer from memory. Return evidence only: source, date, sender or item owner, request, visible owner, why Stuart was pulled in and source gaps.

Expected output:
Evidence list of unclear owner requests.

Output format:
Return only:
1. A Markdown evidence table with columns: source, date, sender or item owner, request, visible owner, Stuart involvement, source gap, sensitivity risk.
2. A short source-gap list.
3. A human-review checklist for Stuart.
4. A copy/export block ready to paste into the next prompt.
Do not recommend owners yet.

Human review gate:
Stuart confirms the examples are fair before classification.

Copy/export target:
Copy evidence summary into routing map draft.

Success test:
At least 10 real examples are captured without exposing sensitive data.

Rules:
- Do not infer from memory. Use evidence or mark unknown.
- Do not assume live sync.
- Do not write back to Outlook, Teams, Monday.com, HubSpot, OneDrive, GA4 or website systems.
- Do not make automatic owner changes, commercial approvals, CRM edits or escalations.
- Separate owner execution from Stuart decision rights.
- Summarise sensitive data. Do not expose HR, PIP, compensation, banking, subscriber-level or private personal data.
- Version one uses local state, manual review, human approval and copy/export.
- If source access fails, state the source gap clearly and ask Stuart for an export or pasted evidence.

Stage note:
Evidence first. No owner changes yet.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 2: Classify owner and Stuart decision right

**Use this model or tool:** Claude Opus with connected sources

**Why this model or tool:** Best for nuanced ownership diagnosis using the approved NEXT.io boundaries.

**Connected sources:** Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register

**Expected output:** Classified owner list with Stuart decision right flag.

**Human review gate:** Stuart approves owner rules before they become standard.

**Copy/export target:** Copy classification table into artifact seed data.

**Success test:** Repeated requests route to a named owner, not back to Stuart.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register.
- The approved evidence table from Prompt 1.
- Any approved NEXT.io owner boundaries or decision rights notes.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Owner-to-owner routing map.

Goal of this artifact:
Route work to the correct owner before Stuart becomes the middleman.

Problem solved:
Stops chasing, forwarding, and unclear ownership loops.

This is stage 2: Classify owner and Stuart decision right.

Use this model/tool:
Claude Opus with connected sources

Why this tool:
Best for nuanced ownership diagnosis using the approved NEXT.io boundaries.

How to use the tool:
Use when Claude can access Microsoft 365, Monday.com, HubSpot or uploaded source files. It should scan evidence first and show source gaps before recommending anything.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register.
- The approved evidence table from Prompt 1.
- Any approved NEXT.io owner boundaries or decision rights notes.

Connected sources named by the execution source pack:
Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register

Task:
Using only the approved evidence, classify each request by function: Sales, Marketing, Media, CRM, Community, Strategic Partnerships, Project Management, Finance or Stuart decision right. Separate execution ownership from Stuart approval rights. Use Rory's team for strategic partnerships, Media for website and GA4, Will for sales process and James for marketing once live. Output proposed owner, confidence and reason.

Expected output:
Classified owner list with Stuart decision right flag.

Output format:
Return only:
1. A classification table.
2. Items that are clear enough to use.
3. Items that need Stuart or function-owner approval.
4. Items marked unknown because evidence is missing.
5. A copy/export block ready for the core output prompt.

Human review gate:
Stuart approves owner rules before they become standard.

Copy/export target:
Copy classification table into artifact seed data.

Success test:
Repeated requests route to a named owner, not back to Stuart.

Rules:
- Do not infer from memory. Use evidence or mark unknown.
- Do not assume live sync.
- Do not write back to Outlook, Teams, Monday.com, HubSpot, OneDrive, GA4 or website systems.
- Do not make automatic owner changes, commercial approvals, CRM edits or escalations.
- Separate owner execution from Stuart decision rights.
- Summarise sensitive data. Do not expose HR, PIP, compensation, banking, subscriber-level or private personal data.
- Version one uses local state, manual review, human approval and copy/export.
- If source access fails, state the source gap clearly and ask Stuart for an export or pasted evidence.

Stage note:
Do not treat Stuart as owner because he was copied.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 3: Create core output

**Use this model or tool:** Claude Opus or ChatGPT Project with the workbook attached

**Why this model or tool:** Best for turning evidence into a clean operating map and avoiding source guesswork.

**Connected sources:** Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register

**Expected output:** Draft routing map.

**Human review gate:** Function owners validate routes before use.

**Copy/export target:** Export markdown, CSV or table for the artifact build.

**Success test:** At least 80 percent of tested asks receive a clear route.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register.
- The approved classification or diagnosis from Prompt 2.
- The artifact source spec from the workbook.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Owner-to-owner routing map.

Goal of this artifact:
Route work to the correct owner before Stuart becomes the middleman.

Problem solved:
Stops chasing, forwarding, and unclear ownership loops.

This is stage 3: Create core output.

Use this model/tool:
Claude Opus or ChatGPT Project with the workbook attached

Why this tool:
Best for turning evidence into a clean operating map and avoiding source guesswork.

How to use the tool:
Use when you provide the workbook, evidence exports, copied tables or previous prompt outputs. ChatGPT should reason and structure, not pretend it can see connected sources it has not been given.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register.
- The approved classification or diagnosis from Prompt 2.
- The artifact source spec from the workbook.

Connected sources named by the execution source pack:
Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register

Task:
Create the owner-to-owner routing map. Fields: request type, correct owner, backup owner, Stuart decision right, escalation path, evidence required, standard redirect script and last validated date. Keep it practical. Include only rules supported by evidence or Stuart-approved role boundaries. Mark unresolved routes as unclear, not guessed.

Expected output:
Draft routing map.

Output format:
Return only:
1. The draft Owner-to-owner routing map core table or template.
2. Source-backed rules.
3. Unresolved items.
4. Human approval questions.
5. A clean copy/export block for artifact build.

Human review gate:
Function owners validate routes before use.

Copy/export target:
Export markdown, CSV or table for the artifact build.

Success test:
At least 80 percent of tested asks receive a clear route.

Rules:
- Do not infer from memory. Use evidence or mark unknown.
- Do not assume live sync.
- Do not write back to Outlook, Teams, Monday.com, HubSpot, OneDrive, GA4 or website systems.
- Do not make automatic owner changes, commercial approvals, CRM edits or escalations.
- Separate owner execution from Stuart decision rights.
- Summarise sensitive data. Do not expose HR, PIP, compensation, banking, subscriber-level or private personal data.
- Version one uses local state, manual review, human approval and copy/export.
- If source access fails, state the source gap clearly and ask Stuart for an export or pasted evidence.

Stage note:
No automatic reassignment.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 4: Extract reusable outputs

**Use this model or tool:** ChatGPT Project or Claude Opus

**Why this model or tool:** Good for copy cleanup, redirect wording and reusable rules after evidence is settled.

**Connected sources:** Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register

**Expected output:** Reusable redirect scripts and rule cards.

**Human review gate:** Stuart approves scripts before sharing.

**Copy/export target:** Copy into Execution Register and Redirect Scripts.

**Success test:** Stuart has ready wording for repeat asks.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register.
- The approved core output from Prompt 3.
- Your preferred tone and any examples of acceptable internal wording.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Owner-to-owner routing map.

Goal of this artifact:
Route work to the correct owner before Stuart becomes the middleman.

Problem solved:
Stops chasing, forwarding, and unclear ownership loops.

This is stage 4: Extract reusable outputs.

Use this model/tool:
ChatGPT Project or Claude Opus

Why this tool:
Good for copy cleanup, redirect wording and reusable rules after evidence is settled.

How to use the tool:
Use when you provide the workbook, evidence exports, copied tables or previous prompt outputs. ChatGPT should reason and structure, not pretend it can see connected sources it has not been given.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register.
- The approved core output from Prompt 3.
- Your preferred tone and any examples of acceptable internal wording.

Connected sources named by the execution source pack:
Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register

Task:
From the approved routing map, extract reusable outputs: soft redirect, direct redirect, escalation version, owner rule, evidence needed and edge cases. Keep each redirect professional and firm. Frame the change as ownership clarity and commercial focus, not unavailability.

Expected output:
Reusable redirect scripts and rule cards.

Output format:
Return only:
1. Reusable scripts, labels, checklists or rule blocks.
2. A safe version for internal sharing.
3. Edge cases.
4. What Stuart must approve before use.
5. A copy/export block for the artifact or source pack.

Human review gate:
Stuart approves scripts before sharing.

Copy/export target:
Copy into Execution Register and Redirect Scripts.

Success test:
Stuart has ready wording for repeat asks.

Rules:
- Do not infer from memory. Use evidence or mark unknown.
- Do not assume live sync.
- Do not write back to Outlook, Teams, Monday.com, HubSpot, OneDrive, GA4 or website systems.
- Do not make automatic owner changes, commercial approvals, CRM edits or escalations.
- Separate owner execution from Stuart decision rights.
- Summarise sensitive data. Do not expose HR, PIP, compensation, banking, subscriber-level or private personal data.
- Version one uses local state, manual review, human approval and copy/export.
- If source access fails, state the source gap clearly and ask Stuart for an export or pasted evidence.

Stage note:
Do not create aggressive or passive-aggressive copy.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 5: Build or test artifact

**Use this model or tool:** Claude Artifacts with a coding-capable model

**Why this model or tool:** Correct tool for a simple local frontend with copy/export and no backend.

**Connected sources:** Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register

**Expected output:** Working local artifact.

**Human review gate:** Stuart tests outputs before using with the team.

**Copy/export target:** Export markdown or CSV to Teams, Monday.com or email.

**Success test:** 10 recent asks route correctly in the artifact.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register.
- The approved core output from Prompt 3.
- The reusable outputs from Prompt 4.
- Artifact source spec: fields, buttons, views, version-one rule and what not to build.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Owner-to-owner routing map.

Goal of this artifact:
Route work to the correct owner before Stuart becomes the middleman.

Problem solved:
Stops chasing, forwarding, and unclear ownership loops.

This is stage 5: Build or test artifact.

Use this model/tool:
Claude Artifacts with a coding-capable model

Why this tool:
Correct tool for a simple local frontend with copy/export and no backend.

How to use the tool:
Use after the evidence and core output are approved. Paste the approved seed data from earlier prompts. Do not ask it to scan sources or make live decisions.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register.
- The approved core output from Prompt 3.
- The reusable outputs from Prompt 4.
- Artifact source spec: fields, buttons, views, version-one rule and what not to build.

Connected sources named by the execution source pack:
Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register

Task:
Build a simple Claude Artifact for an owner-to-owner routing map. No backend. Use local storage and copy/export only. Fields: request type, correct owner, backup owner, Stuart decision right, escalation path, evidence, soft redirect, direct redirect, escalation script and last validated date. Buttons: add route, search, copy script, export markdown and export CSV. Views: by owner, by function, unclear routes and Stuart decision rights.

Expected output:
Working local artifact.

Output format:
Return:
1. A working v1 artifact or a build-ready artifact spec if the tool cannot build directly.
2. Fields, buttons and views.
3. Local storage behaviour.
4. Copy/export behaviour.
5. Manual test script.
6. What not to build.

Human review gate:
Stuart tests outputs before using with the team.

Copy/export target:
Export markdown or CSV to Teams, Monday.com or email.

Success test:
10 recent asks route correctly in the artifact.

Rules:
- Do not infer from memory. Use evidence or mark unknown.
- Do not assume live sync.
- Do not write back to Outlook, Teams, Monday.com, HubSpot, OneDrive, GA4 or website systems.
- Do not make automatic owner changes, commercial approvals, CRM edits or escalations.
- Separate owner execution from Stuart decision rights.
- Summarise sensitive data. Do not expose HR, PIP, compensation, banking, subscriber-level or private personal data.
- Version one uses local state, manual review, human approval and copy/export.
- If source access fails, state the source gap clearly and ask Stuart for an export or pasted evidence.

Stage note:
No live source sync or automatic escalation.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 6: Friday review and feed forward

**Use this model or tool:** Claude Opus with connected sources, or ChatGPT Project with pasted evidence

**Why this model or tool:** Use source access when available. Use ChatGPT only when Stuart supplies the evidence.

**Connected sources:** Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register

**Expected output:** Weekly routing review.

**Human review gate:** Stuart approves changes before updating the map.

**Copy/export target:** Copy approved changes into Roadmap Feed and artifact.

**Success test:** At least one recurring misroute is corrected or killed.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register.
- This week's usage examples, exported artifact state, or pasted evidence.
- Notes on what Stuart redirected, approved, parked or killed.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Owner-to-owner routing map.

Goal of this artifact:
Route work to the correct owner before Stuart becomes the middleman.

Problem solved:
Stops chasing, forwarding, and unclear ownership loops.

This is stage 6: Friday review and feed forward.

Use this model/tool:
Claude Opus with connected sources, or ChatGPT Project with pasted evidence

Why this tool:
Use source access when available. Use ChatGPT only when Stuart supplies the evidence.

How to use the tool:
Use when Claude can access Microsoft 365, Monday.com, HubSpot or uploaded source files. It should scan evidence first and show source gaps before recommending anything.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register.
- This week's usage examples, exported artifact state, or pasted evidence.
- Notes on what Stuart redirected, approved, parked or killed.

Connected sources named by the execution source pack:
Outlook, Teams, Monday.com, HubSpot, OneDrive, execution register

Task:
Review routing map usage this week. Compare new asks against the map. List routes used, unclear routes, wrong routes and owner disputes. Recommend updates only where evidence supports them. Output changes for approval, routes to kill and the next owner conversation Stuart should have. Do not update rules without human approval.

Expected output:
Weekly routing review.

Output format:
Return only:
1. What worked.
2. What failed.
3. Evidence-backed changes.
4. What should stay unchanged.
5. What to update in the artifact.
6. What to feed into the next roadmap task.
7. One next action for Stuart.

Human review gate:
Stuart approves changes before updating the map.

Copy/export target:
Copy approved changes into Roadmap Feed and artifact.

Success test:
At least one recurring misroute is corrected or killed.

Rules:
- Do not infer from memory. Use evidence or mark unknown.
- Do not assume live sync.
- Do not write back to Outlook, Teams, Monday.com, HubSpot, OneDrive, GA4 or website systems.
- Do not make automatic owner changes, commercial approvals, CRM edits or escalations.
- Separate owner execution from Stuart decision rights.
- Summarise sensitive data. Do not expose HR, PIP, compensation, banking, subscriber-level or private personal data.
- Version one uses local state, manual review, human approval and copy/export.
- If source access fails, state the source gap clearly and ask Stuart for an export or pasted evidence.

Stage note:
Feed learnings into the next build.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```
