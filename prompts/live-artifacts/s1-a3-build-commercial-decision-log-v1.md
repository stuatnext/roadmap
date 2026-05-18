# Commercial decision log v1 build prompts

This is a consolidated prompt sequence for building the NEXT.io live artifact: **Commercial decision log**.

It combines the execution workbook prompts with the roadmap build rules. Do not paste the whole file into an LLM. Run one prompt at a time.

## What this artifact must achieve

- **Purpose:** Capture commercial decisions so they do not live in email or memory.
- **Problem solved:** Prevents repeat questions about pricing, GTM, products, bundling, discounts, and deliverables.
- **Primary user:** Stuart, Will, James, Kim, Rory's team, project owners.
- **Roadmap trigger:** Use the next product, pricing, GTM, discount, bundle, or deliverables approval.
- **Success test:** No one searches email to confirm what Stuart approved.

## Version 1 boundaries

- **Backend:** No. Local storage, Claude evidence scan, and copy/export first.
- **Version 1 rule:** Local state, manual source review, human approval, copy/export.
- **Copy/export:** Copy decision summary with evidence. Export CSV or markdown for teams.
- **Human approval gate:** Stuart approves the decision before it is logged as final.
- **What not to build:** No automatic approvals, contract edits, CRM edits, source sync, or notifications.
- **First manual test:** Log five recent decisions and send the summary back to the owners.

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

**Why this model or tool:** Best for finding commercial decisions across email, chat, docs, deals and boards.

**Connected sources:** Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided

**Expected output:** Evidence list of commercial decisions.

**Human review gate:** Stuart confirms which examples are material.

**Copy/export target:** Copy evidence into decision log draft.

**Success test:** Five real decisions are captured with evidence.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided.
- A 14-day date window or clear instruction to use the last 14 days.
- Any existing Execution Register export if available.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Commercial decision log.

Goal of this artifact:
Capture commercial decisions so they do not live in email or memory.

Problem solved:
Prevents repeat questions about pricing, GTM, products, bundling, discounts, and deliverables.

This is stage 1: Capture raw situation.

Use this model/tool:
Claude Opus with connected sources

Why this tool:
Best for finding commercial decisions across email, chat, docs, deals and boards.

How to use the tool:
Use when Claude can access Microsoft 365, Monday.com, HubSpot or uploaded source files. It should scan evidence first and show source gaps before recommending anything.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided.
- A 14-day date window or clear instruction to use the last 14 days.
- Any existing Execution Register export if available.

Connected sources named by the execution source pack:
Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided

Task:
Scan Outlook, Teams, OneDrive, HubSpot and Monday.com for recent commercial decisions or approval requests involving product, pricing, discounting, bundling, GTM, media products, partnership deliverables or sales and marketing strategies. Return evidence only: source, date, requester, decision needed, recommendation, affected product, owner, deadline and whether Stuart approval was required.

Expected output:
Evidence list of commercial decisions.

Output format:
Return only:
1. A Markdown evidence table with columns: source, date, sender or item owner, request, visible owner, Stuart involvement, source gap, sensitivity risk.
2. A short source-gap list.
3. A human-review checklist for Stuart.
4. A copy/export block ready to paste into the next prompt.
Do not recommend owners yet.

Human review gate:
Stuart confirms which examples are material.

Copy/export target:
Copy evidence into decision log draft.

Success test:
Five real decisions are captured with evidence.

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
Do not include private HR or compensation details.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 2: Classify decision type and owner

**Use this model or tool:** Claude Opus or ChatGPT Project with evidence attached

**Why this model or tool:** Best for applying decision rights and ownership logic.

**Connected sources:** Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided

**Expected output:** Decision classification table.

**Human review gate:** Stuart approves decision categories.

**Copy/export target:** Copy categories into log fields.

**Success test:** Only true Stuart decisions come to Stuart.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided.
- The approved evidence table from Prompt 1.
- Any approved NEXT.io owner boundaries or decision rights notes.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Commercial decision log.

Goal of this artifact:
Capture commercial decisions so they do not live in email or memory.

Problem solved:
Prevents repeat questions about pricing, GTM, products, bundling, discounts, and deliverables.

This is stage 2: Classify decision type and owner.

Use this model/tool:
Claude Opus or ChatGPT Project with evidence attached

Why this tool:
Best for applying decision rights and ownership logic.

How to use the tool:
Use when you provide the workbook, evidence exports, copied tables or previous prompt outputs. ChatGPT should reason and structure, not pretend it can see connected sources it has not been given.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided.
- The approved evidence table from Prompt 1.
- Any approved NEXT.io owner boundaries or decision rights notes.

Connected sources named by the execution source pack:
Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided

Task:
Classify each commercial decision by type: product, pricing, discount above 15 percent, discount within policy, bundling, GTM, sales strategy, marketing strategy, media product, strategic partnership deliverable or CRM architecture. Separate Stuart approval from function-owner execution. Identify owner recommendation, evidence needed and follow-up owner.

Expected output:
Decision classification table.

Output format:
Return only:
1. A classification table.
2. Items that are clear enough to use.
3. Items that need Stuart or function-owner approval.
4. Items marked unknown because evidence is missing.
5. A copy/export block ready for the core output prompt.

Human review gate:
Stuart approves decision categories.

Copy/export target:
Copy categories into log fields.

Success test:
Only true Stuart decisions come to Stuart.

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
Do not make the decision.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 3: Create core output

**Use this model or tool:** Claude Opus or ChatGPT Project

**Why this model or tool:** Good for structuring decisions into a durable record.

**Connected sources:** Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided

**Expected output:** Decision log template and summary format.

**Human review gate:** Stuart approves final decision wording.

**Copy/export target:** Export to markdown, CSV or artifact seed.

**Success test:** No one searches email to confirm what Stuart approved.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided.
- The approved classification or diagnosis from Prompt 2.
- The artifact source spec from the workbook.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Commercial decision log.

Goal of this artifact:
Capture commercial decisions so they do not live in email or memory.

Problem solved:
Prevents repeat questions about pricing, GTM, products, bundling, discounts, and deliverables.

This is stage 3: Create core output.

Use this model/tool:
Claude Opus or ChatGPT Project

Why this tool:
Good for structuring decisions into a durable record.

How to use the tool:
Use when you provide the workbook, evidence exports, copied tables or previous prompt outputs. ChatGPT should reason and structure, not pretend it can see connected sources it has not been given.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided.
- The approved classification or diagnosis from Prompt 2.
- The artifact source spec from the workbook.

Connected sources named by the execution source pack:
Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided

Task:
Create a commercial decision log entry format. Fields: decision ID, date, decision type, project, owner recommendation, options, approved decision, conditions, affected teams, evidence, follow-up owner and review date. Include a short decision-summary template owners can paste into Teams or email after Stuart approves.

Expected output:
Decision log template and summary format.

Output format:
Return only:
1. The draft Commercial decision log core table or template.
2. Source-backed rules.
3. Unresolved items.
4. Human approval questions.
5. A clean copy/export block for artifact build.

Human review gate:
Stuart approves final decision wording.

Copy/export target:
Export to markdown, CSV or artifact seed.

Success test:
No one searches email to confirm what Stuart approved.

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
No automatic approvals.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 4: Extract reusable outputs

**Use this model or tool:** ChatGPT Project or Claude Opus

**Why this model or tool:** Best for reusable decision summaries and owner action extraction.

**Connected sources:** Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided

**Expected output:** Reusable decision summaries and action lists.

**Human review gate:** Stuart validates final decisions.

**Copy/export target:** Copy summary to Teams, Monday.com, email or OneDrive.

**Success test:** Owners stop reopening settled decisions.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided.
- The approved core output from Prompt 3.
- Your preferred tone and any examples of acceptable internal wording.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Commercial decision log.

Goal of this artifact:
Capture commercial decisions so they do not live in email or memory.

Problem solved:
Prevents repeat questions about pricing, GTM, products, bundling, discounts, and deliverables.

This is stage 4: Extract reusable outputs.

Use this model/tool:
ChatGPT Project or Claude Opus

Why this tool:
Best for reusable decision summaries and owner action extraction.

How to use the tool:
Use when you provide the workbook, evidence exports, copied tables or previous prompt outputs. ChatGPT should reason and structure, not pretend it can see connected sources it has not been given.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided.
- The approved core output from Prompt 3.
- Your preferred tone and any examples of acceptable internal wording.

Connected sources named by the execution source pack:
Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided

Task:
From each approved decision record, extract reusable outputs: decision summary, owner actions, affected teams, approval conditions, expiry or review date and what not to reopen. Keep the wording short and operational. Make it clear whether the item is final, conditional or pending.

Expected output:
Reusable decision summaries and action lists.

Output format:
Return only:
1. Reusable scripts, labels, checklists or rule blocks.
2. A safe version for internal sharing.
3. Edge cases.
4. What Stuart must approve before use.
5. A copy/export block for the artifact or source pack.

Human review gate:
Stuart validates final decisions.

Copy/export target:
Copy summary to Teams, Monday.com, email or OneDrive.

Success test:
Owners stop reopening settled decisions.

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
Do not rewrite commercial strategy.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 5: Build or test artifact

**Use this model or tool:** Claude Artifacts with a coding-capable model

**Why this model or tool:** Correct tool for local log, filters and export without system writeback.

**Connected sources:** Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided

**Expected output:** Working decision log artifact.

**Human review gate:** Stuart approves any decision before it is marked final.

**Copy/export target:** Export summary to Teams, Monday.com, OneDrive or email.

**Success test:** Five decisions are logged and retrievable.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided.
- The approved core output from Prompt 3.
- The reusable outputs from Prompt 4.
- Artifact source spec: fields, buttons, views, version-one rule and what not to build.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Commercial decision log.

Goal of this artifact:
Capture commercial decisions so they do not live in email or memory.

Problem solved:
Prevents repeat questions about pricing, GTM, products, bundling, discounts, and deliverables.

This is stage 5: Build or test artifact.

Use this model/tool:
Claude Artifacts with a coding-capable model

Why this tool:
Correct tool for local log, filters and export without system writeback.

How to use the tool:
Use after the evidence and core output are approved. Paste the approved seed data from earlier prompts. Do not ask it to scan sources or make live decisions.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided.
- The approved core output from Prompt 3.
- The reusable outputs from Prompt 4.
- Artifact source spec: fields, buttons, views, version-one rule and what not to build.

Connected sources named by the execution source pack:
Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided

Task:
Build a simple Claude Artifact for the commercial decision log. No backend. Use local storage and copy/export. Fields: decision ID, date, decision type, project, owner recommendation, options, approved decision, conditions, affected teams, evidence, follow-up owner and review date. Buttons: new decision, request clarification, mark approved, copy summary, export CSV and export markdown. Views: pending Stuart approval, approved, by project, by owner and by decision type.

Expected output:
Working decision log artifact.

Output format:
Return:
1. A working v1 artifact or a build-ready artifact spec if the tool cannot build directly.
2. Fields, buttons and views.
3. Local storage behaviour.
4. Copy/export behaviour.
5. Manual test script.
6. What not to build.

Human review gate:
Stuart approves any decision before it is marked final.

Copy/export target:
Export summary to Teams, Monday.com, OneDrive or email.

Success test:
Five decisions are logged and retrievable.

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
No CRM, contract or source edits.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 6: Friday review and feed forward

**Use this model or tool:** Claude Opus with connected sources, or ChatGPT Project with decision export

**Why this model or tool:** Use sources to find reopened decisions. Use ChatGPT only with exported evidence.

**Connected sources:** Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided

**Expected output:** Weekly decision log review.

**Human review gate:** Stuart approves rule changes.

**Copy/export target:** Copy changes into Build Queue, Roadmap Feed or artifact.

**Success test:** Fewer repeat questions reach Stuart.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided.
- This week's usage examples, exported artifact state, or pasted evidence.
- Notes on what Stuart redirected, approved, parked or killed.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Commercial decision log.

Goal of this artifact:
Capture commercial decisions so they do not live in email or memory.

Problem solved:
Prevents repeat questions about pricing, GTM, products, bundling, discounts, and deliverables.

This is stage 6: Friday review and feed forward.

Use this model/tool:
Claude Opus with connected sources, or ChatGPT Project with decision export

Why this tool:
Use sources to find reopened decisions. Use ChatGPT only with exported evidence.

How to use the tool:
Use when Claude can access Microsoft 365, Monday.com, HubSpot or uploaded source files. It should scan evidence first and show source gaps before recommending anything.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided.
- This week's usage examples, exported artifact state, or pasted evidence.
- Notes on what Stuart redirected, approved, parked or killed.

Connected sources named by the execution source pack:
Outlook, Teams, OneDrive, HubSpot, Monday.com, contracts or deal docs if provided

Task:
Review this week’s commercial decision log. Find pending decisions, repeated questions, decisions being reopened and owner actions not completed. Separate items Stuart must decide from owner follow-up. Recommend one rule to add to the pricing card or routing map if the same issue repeated.

Expected output:
Weekly decision log review.

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
Stuart approves rule changes.

Copy/export target:
Copy changes into Build Queue, Roadmap Feed or artifact.

Success test:
Fewer repeat questions reach Stuart.

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
Do not expand scope into general project management.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```
