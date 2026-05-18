# Work intake brief template v1 build prompts

This is a consolidated prompt sequence for building the NEXT.io live artifact: **Work intake brief template**.

It combines the execution workbook prompts with the roadmap build rules. Do not paste the whole file into an LLM. Run one prompt at a time.

## What this artifact must achieve

- **Purpose:** Make every request decision-ready before it reaches Stuart.
- **Problem solved:** Stops Stuart rewriting vague briefs and extracting missing context.
- **Primary user:** Function owners, project managers, Will, James, Kim, Nico, Oliver, Alina.
- **Roadmap trigger:** Use the next vague request that lacks owner, output, or decision path.
- **Success test:** Incomplete briefs are returned by standard, not rewritten by Stuart.

## Version 1 boundaries

- **Backend:** No. Local storage, Claude evidence scan, and copy/export first.
- **Version 1 rule:** Local state, manual source review, human approval, copy/export.
- **Copy/export:** Copy brief into Teams, email, Monday item, or project document.
- **Human approval gate:** Owner confirms the brief before Stuart reviews any decision request.
- **What not to build:** No auto-task creation, owner reassignment, or automatic approvals.
- **First manual test:** Run three live requests through the template and return one incomplete brief.

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

**Why this model or tool:** Best for finding vague requests across messages, docs and project boards.

**Connected sources:** Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed

**Expected output:** Evidence list of incomplete requests.

**Human review gate:** Stuart validates that the examples represent real friction.

**Copy/export target:** Copy examples into intake template design.

**Success test:** At least five incomplete requests are captured with clear missing fields.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed.
- A 14-day date window or clear instruction to use the last 14 days.
- Any existing Execution Register export if available.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Work intake brief template.

Goal of this artifact:
Make every request decision-ready before it reaches Stuart.

Problem solved:
Stops Stuart rewriting vague briefs and extracting missing context.

This is stage 1: Capture raw situation.

Use this model/tool:
Claude Opus with connected sources

Why this tool:
Best for finding vague requests across messages, docs and project boards.

How to use the tool:
Use when Claude can access Microsoft 365, Monday.com, HubSpot or uploaded source files. It should scan evidence first and show source gaps before recommending anything.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed.
- A 14-day date window or clear instruction to use the last 14 days.
- Any existing Execution Register export if available.

Connected sources named by the execution source pack:
Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed

Task:
Scan Outlook, Teams, Monday.com and OneDrive for recent requests sent to Stuart that lacked enough context to execute. Include HubSpot only if the request involved deals, CRM or revenue. Return source, date, requester, request summary, missing information, expected owner and whether Stuart was asked for a decision or execution.

Expected output:
Evidence list of incomplete requests.

Output format:
Return only:
1. A Markdown evidence table with columns: source, date, sender or item owner, request, visible owner, Stuart involvement, source gap, sensitivity risk.
2. A short source-gap list.
3. A human-review checklist for Stuart.
4. A copy/export block ready to paste into the next prompt.
Do not recommend owners yet.

Human review gate:
Stuart validates that the examples represent real friction.

Copy/export target:
Copy examples into intake template design.

Success test:
At least five incomplete requests are captured with clear missing fields.

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
Do not shame requesters.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 2: Diagnose missing fields

**Use this model or tool:** Claude Opus or ChatGPT Project with uploaded examples

**Why this model or tool:** Best for pattern diagnosis and field design after evidence is captured.

**Connected sources:** Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed

**Expected output:** Missing-field diagnosis and field list.

**Human review gate:** Stuart approves the minimum standard.

**Copy/export target:** Copy approved fields into artifact spec.

**Success test:** The template rejects vague requests without Stuart rewriting them.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed.
- The approved evidence table from Prompt 1.
- Any approved NEXT.io owner boundaries or decision rights notes.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Work intake brief template.

Goal of this artifact:
Make every request decision-ready before it reaches Stuart.

Problem solved:
Stops Stuart rewriting vague briefs and extracting missing context.

This is stage 2: Diagnose missing fields.

Use this model/tool:
Claude Opus or ChatGPT Project with uploaded examples

Why this tool:
Best for pattern diagnosis and field design after evidence is captured.

How to use the tool:
Use when you provide the workbook, evidence exports, copied tables or previous prompt outputs. ChatGPT should reason and structure, not pretend it can see connected sources it has not been given.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed.
- The approved evidence table from Prompt 1.
- Any approved NEXT.io owner boundaries or decision rights notes.

Connected sources named by the execution source pack:
Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed

Task:
Diagnose the missing fields across the request examples. Group gaps into objective, owner, audience, deadline, source evidence, decision needed, risk, output format, approval path and definition of done. Separate missing context from missing ownership. Recommend the minimum required fields for version one.

Expected output:
Missing-field diagnosis and field list.

Output format:
Return only:
1. A classification table.
2. Items that are clear enough to use.
3. Items that need Stuart or function-owner approval.
4. Items marked unknown because evidence is missing.
5. A copy/export block ready for the core output prompt.

Human review gate:
Stuart approves the minimum standard.

Copy/export target:
Copy approved fields into artifact spec.

Success test:
The template rejects vague requests without Stuart rewriting them.

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
Keep the form short.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 3: Create core output

**Use this model or tool:** Claude Opus or ChatGPT Project

**Why this model or tool:** Good for creating a concise, reusable template and return-to-sender logic.

**Connected sources:** Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed

**Expected output:** Work intake brief template.

**Human review gate:** Function owners agree to use the standard.

**Copy/export target:** Export to markdown, OneDrive doc or artifact seed.

**Success test:** Three live requests pass through the template without Stuart extracting context.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed.
- The approved classification or diagnosis from Prompt 2.
- The artifact source spec from the workbook.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Work intake brief template.

Goal of this artifact:
Make every request decision-ready before it reaches Stuart.

Problem solved:
Stops Stuart rewriting vague briefs and extracting missing context.

This is stage 3: Create core output.

Use this model/tool:
Claude Opus or ChatGPT Project

Why this tool:
Good for creating a concise, reusable template and return-to-sender logic.

How to use the tool:
Use when you provide the workbook, evidence exports, copied tables or previous prompt outputs. ChatGPT should reason and structure, not pretend it can see connected sources it has not been given.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed.
- The approved classification or diagnosis from Prompt 2.
- The artifact source spec from the workbook.

Connected sources named by the execution source pack:
Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed

Task:
Create a one-page work intake brief template. Include fields for owner, objective, audience, deadline, source evidence, decision needed, risk, output format, definition of done and approval path. Add a completeness checklist and a short return message for incomplete briefs. Keep it usable for sales, marketing, media, CRM, community and project work.

Expected output:
Work intake brief template.

Output format:
Return only:
1. The draft Work intake brief template core table or template.
2. Source-backed rules.
3. Unresolved items.
4. Human approval questions.
5. A clean copy/export block for artifact build.

Human review gate:
Function owners agree to use the standard.

Copy/export target:
Export to markdown, OneDrive doc or artifact seed.

Success test:
Three live requests pass through the template without Stuart extracting context.

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
No complex workflow tool yet.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 4: Extract reusable outputs

**Use this model or tool:** ChatGPT Project or Claude Opus

**Why this model or tool:** Best for tightening reusable copy and checklists.

**Connected sources:** Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed

**Expected output:** Reusable labels, scripts and checklist.

**Human review gate:** Stuart approves the wording.

**Copy/export target:** Copy into artifact and Execution Register.

**Success test:** Incomplete requests are returned by standard.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed.
- The approved core output from Prompt 3.
- Your preferred tone and any examples of acceptable internal wording.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Work intake brief template.

Goal of this artifact:
Make every request decision-ready before it reaches Stuart.

Problem solved:
Stops Stuart rewriting vague briefs and extracting missing context.

This is stage 4: Extract reusable outputs.

Use this model/tool:
ChatGPT Project or Claude Opus

Why this tool:
Best for tightening reusable copy and checklists.

How to use the tool:
Use when you provide the workbook, evidence exports, copied tables or previous prompt outputs. ChatGPT should reason and structure, not pretend it can see connected sources it has not been given.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed.
- The approved core output from Prompt 3.
- Your preferred tone and any examples of acceptable internal wording.

Connected sources named by the execution source pack:
Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed

Task:
Extract reusable outputs from the approved intake brief: short form labels, completeness checklist, return-for-resubmission script, owner checklist and Stuart review criteria. Keep language clear, professional and firm. The message should say the brief needs enough information for execution, not that Stuart is avoiding work.

Expected output:
Reusable labels, scripts and checklist.

Output format:
Return only:
1. Reusable scripts, labels, checklists or rule blocks.
2. A safe version for internal sharing.
3. Edge cases.
4. What Stuart must approve before use.
5. A copy/export block for the artifact or source pack.

Human review gate:
Stuart approves the wording.

Copy/export target:
Copy into artifact and Execution Register.

Success test:
Incomplete requests are returned by standard.

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
Avoid bloated fields.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 5: Build or test artifact

**Use this model or tool:** Claude Artifacts with a coding-capable model

**Why this model or tool:** Correct tool for local form, validation and export.

**Connected sources:** Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed

**Expected output:** Working intake artifact.

**Human review gate:** Stuart tests with three real requests before team rollout.

**Copy/export target:** Export markdown to Teams, Monday.com, OneDrive or email.

**Success test:** One incomplete request is returned without Stuart rewriting it.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed.
- The approved core output from Prompt 3.
- The reusable outputs from Prompt 4.
- Artifact source spec: fields, buttons, views, version-one rule and what not to build.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Work intake brief template.

Goal of this artifact:
Make every request decision-ready before it reaches Stuart.

Problem solved:
Stops Stuart rewriting vague briefs and extracting missing context.

This is stage 5: Build or test artifact.

Use this model/tool:
Claude Artifacts with a coding-capable model

Why this tool:
Correct tool for local form, validation and export.

How to use the tool:
Use after the evidence and core output are approved. Paste the approved seed data from earlier prompts. Do not ask it to scan sources or make live decisions.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed.
- The approved core output from Prompt 3.
- The reusable outputs from Prompt 4.
- Artifact source spec: fields, buttons, views, version-one rule and what not to build.

Connected sources named by the execution source pack:
Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed

Task:
Build a simple Claude Artifact for the work intake brief. No backend. Use local storage and copy/export. Fields: requester, owner, project, objective, audience, source evidence, decision needed, deadline, risk, output format, definition of done and approval path. Buttons: new brief, check completeness, copy brief, return for resubmission and export markdown. Views: drafts, ready for Stuart, returned and by owner.

Expected output:
Working intake artifact.

Output format:
Return:
1. A working v1 artifact or a build-ready artifact spec if the tool cannot build directly.
2. Fields, buttons and views.
3. Local storage behaviour.
4. Copy/export behaviour.
5. Manual test script.
6. What not to build.

Human review gate:
Stuart tests with three real requests before team rollout.

Copy/export target:
Export markdown to Teams, Monday.com, OneDrive or email.

Success test:
One incomplete request is returned without Stuart rewriting it.

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
No auto-task creation.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 6: Friday review and feed forward

**Use this model or tool:** Claude Opus with connected sources, or ChatGPT Project with pasted examples

**Why this model or tool:** Use connected sources to review usage. Use ChatGPT only with provided evidence.

**Connected sources:** Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed

**Expected output:** Weekly intake review.

**Human review gate:** Stuart approves template changes.

**Copy/export target:** Copy changes into artifact and Roadmap Feed.

**Success test:** Brief quality improves without increasing form length.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed.
- This week's usage examples, exported artifact state, or pasted evidence.
- Notes on what Stuart redirected, approved, parked or killed.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Work intake brief template.

Goal of this artifact:
Make every request decision-ready before it reaches Stuart.

Problem solved:
Stops Stuart rewriting vague briefs and extracting missing context.

This is stage 6: Friday review and feed forward.

Use this model/tool:
Claude Opus with connected sources, or ChatGPT Project with pasted examples

Why this tool:
Use connected sources to review usage. Use ChatGPT only with provided evidence.

How to use the tool:
Use when Claude can access Microsoft 365, Monday.com, HubSpot or uploaded source files. It should scan evidence first and show source gaps before recommending anything.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed.
- This week's usage examples, exported artifact state, or pasted evidence.
- Notes on what Stuart redirected, approved, parked or killed.

Connected sources named by the execution source pack:
Outlook, Teams, Monday.com, OneDrive, HubSpot when commercial context is needed

Task:
Review this week’s work intake examples. Identify accepted briefs, returned briefs, repeated missing fields and owners who need coaching. Recommend one improvement to the template and one behaviour change Stuart should reinforce. Do not expand the template unless the same gap appears more than once.

Expected output:
Weekly intake review.

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
Stuart approves template changes.

Copy/export target:
Copy changes into artifact and Roadmap Feed.

Success test:
Brief quality improves without increasing form length.

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
Keep version one simple.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```
