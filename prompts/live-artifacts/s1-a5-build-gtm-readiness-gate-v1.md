# GTM readiness gate v1 build prompts

This is a consolidated prompt sequence for building the NEXT.io live artifact: **GTM readiness gate**.

It combines the execution workbook prompts with the roadmap build rules. Do not paste the whole file into an LLM. Run one prompt at a time.

## What this artifact must achieve

- **Purpose:** Stop launches moving forward with missing owners, weak collateral, or unclear measurement.
- **Problem solved:** Turns GTM readiness into a decision gate instead of a Stuart chase loop.
- **Primary user:** Stuart, Maria, project managers, Will, James, Kim, Nico, Oliver.
- **Roadmap trigger:** Use the next project launch or commercial readiness review.
- **Success test:** At least one launch risk is caught before execution starts.

## Version 1 boundaries

- **Backend:** No. Local storage, Claude evidence scan, and copy/export first.
- **Version 1 rule:** Local state, manual source review, human approval, copy/export.
- **Copy/export:** Copy go/no-go summary. Export blocker list to Monday, Teams, or email.
- **Human approval gate:** Project owner confirms readiness. Stuart approves only product, pricing, GTM, and commercial exceptions.
- **What not to build:** No automatic launch approval, owner reassignment, GA4 changes, website edits, or CRM edits.
- **First manual test:** Run one active project through the gate before a readiness meeting.

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

**Why this model or tool:** Best for scanning project status across boards, docs and messages.

**Connected sources:** Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence

**Expected output:** Evidence summary for project readiness.

**Human review gate:** Project owner confirms the evidence before diagnosis.

**Copy/export target:** Copy summary into readiness gate draft.

**Success test:** All major workstreams have evidence or are marked unknown.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence.
- A 14-day date window or clear instruction to use the last 14 days.
- Any existing Execution Register export if available.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: GTM readiness gate.

Goal of this artifact:
Stop launches moving forward with missing owners, weak collateral, or unclear measurement.

Problem solved:
Turns GTM readiness into a decision gate instead of a Stuart chase loop.

This is stage 1: Capture raw situation.

Use this model/tool:
Claude Opus with connected sources

Why this tool:
Best for scanning project status across boards, docs and messages.

How to use the tool:
Use when Claude can access Microsoft 365, Monday.com, HubSpot or uploaded source files. It should scan evidence first and show source gaps before recommending anything.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence.
- A 14-day date window or clear instruction to use the last 14 days.
- Any existing Execution Register export if available.

Connected sources named by the execution source pack:
Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence

Task:
Scan Monday.com, OneDrive, Outlook, Teams and HubSpot for the selected project. Use Media-provided website and GA4 evidence if available. Capture current status for product, pricing, sales collateral, marketing plan, CRM readiness, website, GA4, risks, owner actions and decision points. Return evidence only and mark source gaps.

Expected output:
Evidence summary for project readiness.

Output format:
Return only:
1. A Markdown evidence table with columns: source, date, sender or item owner, request, visible owner, Stuart involvement, source gap, sensitivity risk.
2. A short source-gap list.
3. A human-review checklist for Stuart.
4. A copy/export block ready to paste into the next prompt.
Do not recommend owners yet.

Human review gate:
Project owner confirms the evidence before diagnosis.

Copy/export target:
Copy summary into readiness gate draft.

Success test:
All major workstreams have evidence or are marked unknown.

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
No launch decision yet.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 2: Diagnose missing owners and risks

**Use this model or tool:** Claude Opus or ChatGPT Project with evidence attached

**Why this model or tool:** Best for risk diagnosis and owner separation.

**Connected sources:** Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence

**Expected output:** Readiness gap and owner diagnosis.

**Human review gate:** Project owner validates owners.

**Copy/export target:** Copy gaps into gate checklist.

**Success test:** Each blocker has an owner and decision path.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence.
- The approved evidence table from Prompt 1.
- Any approved NEXT.io owner boundaries or decision rights notes.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: GTM readiness gate.

Goal of this artifact:
Stop launches moving forward with missing owners, weak collateral, or unclear measurement.

Problem solved:
Turns GTM readiness into a decision gate instead of a Stuart chase loop.

This is stage 2: Diagnose missing owners and risks.

Use this model/tool:
Claude Opus or ChatGPT Project with evidence attached

Why this tool:
Best for risk diagnosis and owner separation.

How to use the tool:
Use when you provide the workbook, evidence exports, copied tables or previous prompt outputs. ChatGPT should reason and structure, not pretend it can see connected sources it has not been given.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence.
- The approved evidence table from Prompt 1.
- Any approved NEXT.io owner boundaries or decision rights notes.

Connected sources named by the execution source pack:
Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence

Task:
Using the evidence, diagnose readiness gaps. Separate owner actions from Stuart decisions. Stuart owns product, pricing, GTM and commercial exceptions. Project owner owns the full project strategy package and should chase Stuart for required inputs. Media owns website and GA4. Will owns sales readiness. James or Nico owns marketing readiness depending on timing.

Expected output:
Readiness gap and owner diagnosis.

Output format:
Return only:
1. A classification table.
2. Items that are clear enough to use.
3. Items that need Stuart or function-owner approval.
4. Items marked unknown because evidence is missing.
5. A copy/export block ready for the core output prompt.

Human review gate:
Project owner validates owners.

Copy/export target:
Copy gaps into gate checklist.

Success test:
Each blocker has an owner and decision path.

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
Do not let the gate become Stuart's task list.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 3: Create core output

**Use this model or tool:** Claude Opus or ChatGPT Project

**Why this model or tool:** Best for creating a usable go or no-go checklist from evidence.

**Connected sources:** Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence

**Expected output:** Readiness gate checklist and recommendation.

**Human review gate:** Project owner confirms package. Stuart approves only decision points.

**Copy/export target:** Export blocker list to Monday.com, Teams or email.

**Success test:** At least one launch risk is caught before execution starts.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence.
- The approved classification or diagnosis from Prompt 2.
- The artifact source spec from the workbook.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: GTM readiness gate.

Goal of this artifact:
Stop launches moving forward with missing owners, weak collateral, or unclear measurement.

Problem solved:
Turns GTM readiness into a decision gate instead of a Stuart chase loop.

This is stage 3: Create core output.

Use this model/tool:
Claude Opus or ChatGPT Project

Why this tool:
Best for creating a usable go or no-go checklist from evidence.

How to use the tool:
Use when you provide the workbook, evidence exports, copied tables or previous prompt outputs. ChatGPT should reason and structure, not pretend it can see connected sources it has not been given.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence.
- The approved classification or diagnosis from Prompt 2.
- The artifact source spec from the workbook.

Connected sources named by the execution source pack:
Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence

Task:
Create a GTM readiness gate for the selected project. Include product and pricing status, sales status, marketing status, CRM status, website and GA4 status, owner actions, risks, decision needed, deadline and go or no-go recommendation. Keep the output practical enough for a project meeting.

Expected output:
Readiness gate checklist and recommendation.

Output format:
Return only:
1. The draft GTM readiness gate core table or template.
2. Source-backed rules.
3. Unresolved items.
4. Human approval questions.
5. A clean copy/export block for artifact build.

Human review gate:
Project owner confirms package. Stuart approves only decision points.

Copy/export target:
Export blocker list to Monday.com, Teams or email.

Success test:
At least one launch risk is caught before execution starts.

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
No automatic launch approval.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 4: Extract reusable outputs

**Use this model or tool:** ChatGPT Project or Claude Opus

**Why this model or tool:** Best for turning the gate into repeatable meeting and project outputs.

**Connected sources:** Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence

**Expected output:** Reusable agenda, blocker list and follow-up copy.

**Human review gate:** Project owner approves meeting use.

**Copy/export target:** Copy to Monday.com, Teams, email or OneDrive.

**Success test:** The project meeting produces decisions, not status noise.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence.
- The approved core output from Prompt 3.
- Your preferred tone and any examples of acceptable internal wording.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: GTM readiness gate.

Goal of this artifact:
Stop launches moving forward with missing owners, weak collateral, or unclear measurement.

Problem solved:
Turns GTM readiness into a decision gate instead of a Stuart chase loop.

This is stage 4: Extract reusable outputs.

Use this model/tool:
ChatGPT Project or Claude Opus

Why this tool:
Best for turning the gate into repeatable meeting and project outputs.

How to use the tool:
Use when you provide the workbook, evidence exports, copied tables or previous prompt outputs. ChatGPT should reason and structure, not pretend it can see connected sources it has not been given.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence.
- The approved core output from Prompt 3.
- Your preferred tone and any examples of acceptable internal wording.

Connected sources named by the execution source pack:
Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence

Task:
Extract reusable outputs from the readiness gate: project meeting agenda, blocker list, Stuart decision list, owner action list, go or no-go summary and post-meeting follow-up message. Keep the outputs short and action-led. Do not duplicate the full project plan.

Expected output:
Reusable agenda, blocker list and follow-up copy.

Output format:
Return only:
1. Reusable scripts, labels, checklists or rule blocks.
2. A safe version for internal sharing.
3. Edge cases.
4. What Stuart must approve before use.
5. A copy/export block for the artifact or source pack.

Human review gate:
Project owner approves meeting use.

Copy/export target:
Copy to Monday.com, Teams, email or OneDrive.

Success test:
The project meeting produces decisions, not status noise.

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
Do not create a second project tracker.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 5: Build or test artifact

**Use this model or tool:** Claude Artifacts with a coding-capable model

**Why this model or tool:** Correct tool for a local readiness gate with filters and exports.

**Connected sources:** Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence

**Expected output:** Working readiness gate artifact.

**Human review gate:** Project owner approves readiness before Stuart reviews decisions.

**Copy/export target:** Export to Monday.com, Teams or email.

**Success test:** One live project completes a gate without Stuart chasing owners.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence.
- The approved core output from Prompt 3.
- The reusable outputs from Prompt 4.
- Artifact source spec: fields, buttons, views, version-one rule and what not to build.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: GTM readiness gate.

Goal of this artifact:
Stop launches moving forward with missing owners, weak collateral, or unclear measurement.

Problem solved:
Turns GTM readiness into a decision gate instead of a Stuart chase loop.

This is stage 5: Build or test artifact.

Use this model/tool:
Claude Artifacts with a coding-capable model

Why this tool:
Correct tool for a local readiness gate with filters and exports.

How to use the tool:
Use after the evidence and core output are approved. Paste the approved seed data from earlier prompts. Do not ask it to scan sources or make live decisions.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence.
- The approved core output from Prompt 3.
- The reusable outputs from Prompt 4.
- Artifact source spec: fields, buttons, views, version-one rule and what not to build.

Connected sources named by the execution source pack:
Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence

Task:
Build a simple Claude Artifact for the GTM readiness gate. No backend. Use local storage and copy/export. Fields: project, gate date, product status, pricing status, sales status, marketing status, CRM status, website and GA4 status, owner, risk, decision needed, deadline and go or no-go. Buttons: new gate, mark ready, flag blocker, copy blocker list and export summary. Views: by project, by owner, blockers, Stuart decisions, ready and not ready.

Expected output:
Working readiness gate artifact.

Output format:
Return:
1. A working v1 artifact or a build-ready artifact spec if the tool cannot build directly.
2. Fields, buttons and views.
3. Local storage behaviour.
4. Copy/export behaviour.
5. Manual test script.
6. What not to build.

Human review gate:
Project owner approves readiness before Stuart reviews decisions.

Copy/export target:
Export to Monday.com, Teams or email.

Success test:
One live project completes a gate without Stuart chasing owners.

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
No source writeback or auto-approval.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 6: Friday review and feed forward

**Use this model or tool:** Claude Opus with connected sources, or ChatGPT Project with project export

**Why this model or tool:** Use connected sources for live project updates. Use ChatGPT only with pasted evidence.

**Connected sources:** Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence

**Expected output:** Weekly GTM gate review.

**Human review gate:** Stuart and project owner approve changes.

**Copy/export target:** Copy approved updates into Roadmap Feed and artifact.

**Success test:** The next readiness meeting is shorter and more decision-led.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence.
- This week's usage examples, exported artifact state, or pasted evidence.
- Notes on what Stuart redirected, approved, parked or killed.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: GTM readiness gate.

Goal of this artifact:
Stop launches moving forward with missing owners, weak collateral, or unclear measurement.

Problem solved:
Turns GTM readiness into a decision gate instead of a Stuart chase loop.

This is stage 6: Friday review and feed forward.

Use this model/tool:
Claude Opus with connected sources, or ChatGPT Project with project export

Why this tool:
Use connected sources for live project updates. Use ChatGPT only with pasted evidence.

How to use the tool:
Use when Claude can access Microsoft 365, Monday.com, HubSpot or uploaded source files. It should scan evidence first and show source gaps before recommending anything.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence.
- This week's usage examples, exported artifact state, or pasted evidence.
- Notes on what Stuart redirected, approved, parked or killed.

Connected sources named by the execution source pack:
Monday.com, OneDrive, Outlook, Teams, HubSpot, Media-provided website and GA4 evidence

Task:
Review GTM readiness this week. Identify blockers closed, new blockers, owner misses, Stuart decisions still needed and source gaps. Recommend whether the gate should change. Feed only proven improvements into the artifact. Do not add fields unless they were needed in a real project review.

Expected output:
Weekly GTM gate review.

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
Stuart and project owner approve changes.

Copy/export target:
Copy approved updates into Roadmap Feed and artifact.

Success test:
The next readiness meeting is shorter and more decision-led.

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
Keep it a gate, not a full operating system.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```
