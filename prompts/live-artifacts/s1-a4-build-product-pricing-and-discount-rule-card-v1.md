# Product, pricing, and discount rule card v1 build prompts

This is a consolidated prompt sequence for building the NEXT.io live artifact: **Product, pricing, and discount rule card**.

It combines the execution workbook prompts with the roadmap build rules. Do not paste the whole file into an LLM. Run one prompt at a time.

## What this artifact must achieve

- **Purpose:** Give sales and marketing one approved reference for products, pricing, bundles, and discount rules.
- **Problem solved:** Stops routine pricing questions and makes the 15 percent discount rule enforceable.
- **Primary user:** Stuart, Will, sales team, James, marketing team, project owners.
- **Roadmap trigger:** Use the next discount, bundle, or package question.
- **Success test:** Discounts above 15 percent go to Stuart. Everything else follows the rule card.

## Version 1 boundaries

- **Backend:** No. Local storage, Claude evidence scan, and copy/export first.
- **Version 1 rule:** Local state, manual source review, human approval, copy/export.
- **Copy/export:** Copy rule into proposals. Export PDF or CSV for sales enablement.
- **Human approval gate:** Stuart approves rule changes, new products, bundles, and discounts above 15 percent.
- **What not to build:** No quote generation, contract generation, automatic approvals, or live CRM edits.
- **First manual test:** Test five deal scenarios and confirm each routes correctly.

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

**Why this model or tool:** Best for scanning pricing questions and source documents before rules are written.

**Connected sources:** OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files

**Expected output:** Evidence list of pricing and discount questions.

**Human review gate:** Stuart confirms approved sources.

**Copy/export target:** Copy evidence into rule card draft.

**Success test:** Five real scenarios are captured.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files.
- A 14-day date window or clear instruction to use the last 14 days.
- Any existing Execution Register export if available.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Product, pricing, and discount rule card.

Goal of this artifact:
Give sales and marketing one approved reference for products, pricing, bundles, and discount rules.

Problem solved:
Stops routine pricing questions and makes the 15 percent discount rule enforceable.

This is stage 1: Capture raw situation.

Use this model/tool:
Claude Opus with connected sources

Why this tool:
Best for scanning pricing questions and source documents before rules are written.

How to use the tool:
Use when Claude can access Microsoft 365, Monday.com, HubSpot or uploaded source files. It should scan evidence first and show source gaps before recommending anything.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files.
- A 14-day date window or clear instruction to use the last 14 days.
- Any existing Execution Register export if available.

Connected sources named by the execution source pack:
OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files

Task:
Scan OneDrive pricing docs, HubSpot deals, Outlook and Teams for recent product, pricing, discount, bundle or package questions. Return evidence only: source, date, product or event, question, current rule if visible, requester, deal impact and whether Stuart approval was needed. Mark missing source documents rather than guessing.

Expected output:
Evidence list of pricing and discount questions.

Output format:
Return only:
1. A Markdown evidence table with columns: source, date, sender or item owner, request, visible owner, Stuart involvement, source gap, sensitivity risk.
2. A short source-gap list.
3. A human-review checklist for Stuart.
4. A copy/export block ready to paste into the next prompt.
Do not recommend owners yet.

Human review gate:
Stuart confirms approved sources.

Copy/export target:
Copy evidence into rule card draft.

Success test:
Five real scenarios are captured.

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
No quoting or deal commitments.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 2: Classify rule and exception

**Use this model or tool:** Claude Opus or ChatGPT Project with pricing evidence attached

**Why this model or tool:** Best for separating rules, exceptions and approval rights.

**Connected sources:** OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files

**Expected output:** Rule and exception classification.

**Human review gate:** Stuart approves the classifications before use.

**Copy/export target:** Copy into pricing rule card.

**Success test:** Each scenario has a clear route.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files.
- The approved evidence table from Prompt 1.
- Any approved NEXT.io owner boundaries or decision rights notes.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Product, pricing, and discount rule card.

Goal of this artifact:
Give sales and marketing one approved reference for products, pricing, bundles, and discount rules.

Problem solved:
Stops routine pricing questions and makes the 15 percent discount rule enforceable.

This is stage 2: Classify rule and exception.

Use this model/tool:
Claude Opus or ChatGPT Project with pricing evidence attached

Why this tool:
Best for separating rules, exceptions and approval rights.

How to use the tool:
Use when you provide the workbook, evidence exports, copied tables or previous prompt outputs. ChatGPT should reason and structure, not pretend it can see connected sources it has not been given.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files.
- The approved evidence table from Prompt 1.
- Any approved NEXT.io owner boundaries or decision rights notes.

Connected sources named by the execution source pack:
OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files

Task:
Classify each pricing scenario as approved product, list price, package rule, bundle rule, discount within policy, discount above 15 percent, new product, strategic exception or unclear. Stuart approves new products, pricing, bundling and discounts above 15 percent. Will manages sales usage inside approved rules. Output classification, owner, approval path and missing evidence.

Expected output:
Rule and exception classification.

Output format:
Return only:
1. A classification table.
2. Items that are clear enough to use.
3. Items that need Stuart or function-owner approval.
4. Items marked unknown because evidence is missing.
5. A copy/export block ready for the core output prompt.

Human review gate:
Stuart approves the classifications before use.

Copy/export target:
Copy into pricing rule card.

Success test:
Each scenario has a clear route.

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
Do not invent prices.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 3: Create core output

**Use this model or tool:** Claude Opus or ChatGPT Project

**Why this model or tool:** Best for creating a sales-friendly rule card after evidence is set.

**Connected sources:** OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files

**Expected output:** Rule card and sales version.

**Human review gate:** Stuart signs off the first version.

**Copy/export target:** Export PDF, markdown or CSV for sales use.

**Success test:** Routine pricing questions reduce after rollout.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files.
- The approved classification or diagnosis from Prompt 2.
- The artifact source spec from the workbook.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Product, pricing, and discount rule card.

Goal of this artifact:
Give sales and marketing one approved reference for products, pricing, bundles, and discount rules.

Problem solved:
Stops routine pricing questions and makes the 15 percent discount rule enforceable.

This is stage 3: Create core output.

Use this model/tool:
Claude Opus or ChatGPT Project

Why this tool:
Best for creating a sales-friendly rule card after evidence is set.

How to use the tool:
Use when you provide the workbook, evidence exports, copied tables or previous prompt outputs. ChatGPT should reason and structure, not pretend it can see connected sources it has not been given.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files.
- The approved classification or diagnosis from Prompt 2.
- The artifact source spec from the workbook.

Connected sources named by the execution source pack:
OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files

Task:
Create a product, pricing and discount rule card. Fields: product, event, list price, package, discount limit, bundle rule, approval owner, exception path, effective date and source evidence. Include a plain-English sales version and a Stuart approval version. Make clear that discounts above 15 percent require Stuart approval.

Expected output:
Rule card and sales version.

Output format:
Return only:
1. The draft Product, pricing, and discount rule card core table or template.
2. Source-backed rules.
3. Unresolved items.
4. Human approval questions.
5. A clean copy/export block for artifact build.

Human review gate:
Stuart signs off the first version.

Copy/export target:
Export PDF, markdown or CSV for sales use.

Success test:
Routine pricing questions reduce after rollout.

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
This is not a quoting tool.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 4: Extract reusable outputs

**Use this model or tool:** ChatGPT Project or Claude Opus

**Why this model or tool:** Best for turning rules into sales enablement copy.

**Connected sources:** OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files

**Expected output:** Sales wording and exception scripts.

**Human review gate:** Stuart approves all rule language.

**Copy/export target:** Copy into sales collateral, Teams or OneDrive.

**Success test:** Will can answer routine questions without Stuart.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files.
- The approved core output from Prompt 3.
- Your preferred tone and any examples of acceptable internal wording.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Product, pricing, and discount rule card.

Goal of this artifact:
Give sales and marketing one approved reference for products, pricing, bundles, and discount rules.

Problem solved:
Stops routine pricing questions and makes the 15 percent discount rule enforceable.

This is stage 4: Extract reusable outputs.

Use this model/tool:
ChatGPT Project or Claude Opus

Why this tool:
Best for turning rules into sales enablement copy.

How to use the tool:
Use when you provide the workbook, evidence exports, copied tables or previous prompt outputs. ChatGPT should reason and structure, not pretend it can see connected sources it has not been given.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files.
- The approved core output from Prompt 3.
- Your preferred tone and any examples of acceptable internal wording.

Connected sources named by the execution source pack:
OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files

Task:
Extract reusable outputs from the approved rule card: sales-safe wording, exception request format, discount approval message, bundle approval checklist and what not to promise. Keep the copy direct. Make it clear when Will can proceed and when Stuart must approve.

Expected output:
Sales wording and exception scripts.

Output format:
Return only:
1. Reusable scripts, labels, checklists or rule blocks.
2. A safe version for internal sharing.
3. Edge cases.
4. What Stuart must approve before use.
5. A copy/export block for the artifact or source pack.

Human review gate:
Stuart approves all rule language.

Copy/export target:
Copy into sales collateral, Teams or OneDrive.

Success test:
Will can answer routine questions without Stuart.

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
Do not create negotiation scripts that change the rules.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 5: Build or test artifact

**Use this model or tool:** Claude Artifacts with a coding-capable model

**Why this model or tool:** Correct tool for a searchable local rule card with exports.

**Connected sources:** OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files

**Expected output:** Working rule card artifact.

**Human review gate:** Stuart approves changes before they become active.

**Copy/export target:** Export to sales team, Teams or OneDrive.

**Success test:** Five test deal scenarios route correctly.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files.
- The approved core output from Prompt 3.
- The reusable outputs from Prompt 4.
- Artifact source spec: fields, buttons, views, version-one rule and what not to build.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Product, pricing, and discount rule card.

Goal of this artifact:
Give sales and marketing one approved reference for products, pricing, bundles, and discount rules.

Problem solved:
Stops routine pricing questions and makes the 15 percent discount rule enforceable.

This is stage 5: Build or test artifact.

Use this model/tool:
Claude Artifacts with a coding-capable model

Why this tool:
Correct tool for a searchable local rule card with exports.

How to use the tool:
Use after the evidence and core output are approved. Paste the approved seed data from earlier prompts. Do not ask it to scan sources or make live decisions.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files.
- The approved core output from Prompt 3.
- The reusable outputs from Prompt 4.
- Artifact source spec: fields, buttons, views, version-one rule and what not to build.

Connected sources named by the execution source pack:
OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files

Task:
Build a simple Claude Artifact for the product, pricing and discount rule card. No backend. Use local storage and copy/export. Fields: product, event, list price, package, discount limit, bundle rule, approval owner, exception path, effective date and source evidence. Buttons: add rule, update rule, flag exception, copy rule, export PDF-style markdown and export CSV. Views: current rules, by product, by event, discount exceptions and changes since approval.

Expected output:
Working rule card artifact.

Output format:
Return:
1. A working v1 artifact or a build-ready artifact spec if the tool cannot build directly.
2. Fields, buttons and views.
3. Local storage behaviour.
4. Copy/export behaviour.
5. Manual test script.
6. What not to build.

Human review gate:
Stuart approves changes before they become active.

Copy/export target:
Export to sales team, Teams or OneDrive.

Success test:
Five test deal scenarios route correctly.

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
No live HubSpot edits or quote generation.

Do not give generic strategy. Do not add new features. Do not expand scope. Complete this stage only.
```

## Prompt 6: Friday review and feed forward

**Use this model or tool:** Claude Opus with connected sources, or ChatGPT Project with pricing examples

**Why this model or tool:** Use connected sources for live questions. Use ChatGPT only with pasted examples.

**Connected sources:** OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files

**Expected output:** Weekly rule-card review.

**Human review gate:** Stuart approves all rule updates.

**Copy/export target:** Copy approved updates into artifact and sales docs.

**Success test:** Fewer pricing questions require Stuart.

**Before you run this prompt, provide/open:**
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files.
- This week's usage examples, exported artifact state, or pasted evidence.
- Notes on what Stuart redirected, approved, parked or killed.

```text
Context:
I am Stuart Crowley, Commercial Director at NEXT.io. I am building the live artifact: Product, pricing, and discount rule card.

Goal of this artifact:
Give sales and marketing one approved reference for products, pricing, bundles, and discount rules.

Problem solved:
Stops routine pricing questions and makes the 15 percent discount rule enforceable.

This is stage 6: Friday review and feed forward.

Use this model/tool:
Claude Opus with connected sources, or ChatGPT Project with pricing examples

Why this tool:
Use connected sources for live questions. Use ChatGPT only with pasted examples.

How to use the tool:
Use when Claude can access Microsoft 365, Monday.com, HubSpot or uploaded source files. It should scan evidence first and show source gaps before recommending anything.

Knowledge and sources to provide or open:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, especially Artifact Specs, Source Rules and P1 Prompt Pack.
- The source evidence named for this task: OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files.
- This week's usage examples, exported artifact state, or pasted evidence.
- Notes on what Stuart redirected, approved, parked or killed.

Connected sources named by the execution source pack:
OneDrive pricing docs, HubSpot deals, Outlook, Teams, sales collateral, user-provided pricing files

Task:
Review this week’s pricing and discount questions. Identify which were answered by the rule card, which needed Stuart, which were unclear and which rule needs updating. Keep discounts above 15 percent and new product questions separate. Recommend one rule-card improvement only if there is repeated evidence.

Expected output:
Weekly rule-card review.

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
Stuart approves all rule updates.

Copy/export target:
Copy approved updates into artifact and sales docs.

Success test:
Fewer pricing questions require Stuart.

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
