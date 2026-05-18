# Build Product, pricing, and discount rule card as a Claude Live Artifact + Scheduled Task

This task should build a real time-saving system, not another static note.

The system has three layers:

1. **Claude Live Artifact:** persistent review UI, routing logic, buttons, statuses, copy/export.
2. **Claude Scheduled Task:** recurring source scan that feeds the artifact with fresh evidence. Cadence must be one of: Hourly, Daily, Weekdays, Weekly.
3. **Automation spec:** parked only. Do not automate until the manual or scheduled workflow works for at least four cycles.

## Artifact purpose

- **Artifact:** Product, pricing, and discount rule card
- **Problem solved:** Stops routine pricing questions and makes the 15 percent discount rule enforceable.
- **Purpose:** Give sales and marketing one approved reference for products, pricing, bundles, and discount rules.
- **Primary users:** Stuart, Will, sales team, James, marketing team, project owners.
- **Connected sources:** OneDrive pricing docs, HubSpot deal context, Outlook, Teams, Monday.com.
- **Version 1 rule:** Local state, manual source review, human approval, copy/export.
- **What not to build:** No quote generation, contract generation, automatic approvals, or live CRM edits.
- **Success test:** Discounts above 15 percent go to Stuart. Everything else follows the rule card.
- **First manual test:** Test five deal scenarios and confirm each routes correctly.

## Knowledge pack for this artifact

Give Claude only the relevant knowledge. Do not upload every ZIP file.

Required:
- NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, only these sheets: Artifact Specs, Source Rules, P1 Prompt Pack, Scheduled Task Candidates, Claude Cowork Candidates, Automation Candidates.
- The row for this artifact only. Do not ask Claude to process the whole workbook unless it needs to verify a field.
- Your current Leadership Time Reclaim Register output if already created.
- Any anonymised examples from Outlook, Teams, Monday.com, HubSpot, OneDrive or the execution register.

Relevant existing project files:
- Stuart_Executive_Growth_System_v0_6/03_Revenue_Control/Pricing_Discount_Control.md
- commercial-director-advisory-board-claude-project/04-scorecards/03-pricing-scorecard.md
- commercial-director-advisory-board-claude-project/04-scorecards/05-sponsorship-packaging-scorecard.md
- commercial-director-advisory-board-claude-project/05-starter-prompts/02-review-pricing.md

Connected/live sources to use if available:
- OneDrive pricing docs, HubSpot deal context, Outlook, Teams, Monday.com.

If Claude cannot access a source, it must say which source is missing and ask for an export or pasted evidence.

## Non-negotiable rules

- Do not assume live sync.
- Do not write back to Outlook, Teams, Monday.com, HubSpot, OneDrive, GA4, website or CRM.
- Do not send messages automatically.
- Do not approve decisions automatically.
- Do not reassign owners automatically.
- Do not expose sensitive HR, PIP, compensation, banking, subscriber-level, client-private or raw personal data.
- Use summaries and source references.
- Human approval comes before action.
- Build v1 with local/persistent artifact state, copy/export and connected-source refresh if available.
- If scheduled task output cannot update the artifact directly, it must output a clean import block for manual paste/import.

## Prompt 1: Check source access and create the build pack

**Use this model or tool:** Claude Cowork with Opus

**Why this model or tool:** Cowork can use connected sources, files, folders and installed connectors. This first step prevents garbage in, garbage out.

**Connected sources:** OneDrive pricing docs, HubSpot deal context, Outlook, Teams, Monday.com.

**Expected output:** Source readiness report, missing-source list, approved source pack and build constraints.

**Human review gate:** Stuart confirms sources and boundaries before evidence scanning.

**Copy/export target:** Save as `Product, pricing, and discount rule card Source Pack`.

**Success test:** Claude knows exactly what to use and what not to use before building.

```text
You are preparing to build a Claude Live Artifact for Stuart Crowley at NEXT.io.

Artifact:
Product, pricing, and discount rule card

Purpose:
Give sales and marketing one approved reference for products, pricing, bundles, and discount rules.

Problem solved:
Stops routine pricing questions and makes the 15 percent discount rule enforceable.

Do not build yet.

First, confirm source readiness.

Use only this knowledge:
1. NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx, specifically Artifact Specs, Source Rules, P1 Prompt Pack, Scheduled Task Candidates, Claude Cowork Candidates and Automation Candidates.
2. The row or rows related to: Product, pricing, and discount rule card
3. These existing project files only if uploaded or available:
- Stuart_Executive_Growth_System_v0_6/03_Revenue_Control/Pricing_Discount_Control.md
- commercial-director-advisory-board-claude-project/04-scorecards/03-pricing-scorecard.md
- commercial-director-advisory-board-claude-project/04-scorecards/05-sponsorship-packaging-scorecard.md
- commercial-director-advisory-board-claude-project/05-starter-prompts/02-review-pricing.md
4. Connected sources: OneDrive pricing docs, HubSpot deal context, Outlook, Teams, Monday.com.
5. Stuart's Leadership Time Reclaim Register output if provided.

Return:
1. sources you can access
2. sources you cannot access
3. source gaps Stuart must fill manually
4. the exact source pack you will use
5. sensitive data to avoid
6. v1 build boundaries
7. whether this should be connected-source mode, manual import mode, or both

Rules:
No strategy.
No recommendations yet.
No source writeback.
No automatic actions.
If a source is unavailable, ask for an export or pasted evidence.
```

## Prompt 2: Scan sources and seed the artifact queue

**Use this model or tool:** Claude Cowork with Opus

**Why this model or tool:** This is the evidence-gathering layer that makes the artifact useful. The artifact should not start from memory.

**Connected sources:** OneDrive pricing docs, HubSpot deal context, Outlook, Teams, Monday.com.

**Expected output:** Evidence table and artifact import block.

**Human review gate:** Stuart confirms the examples are fair before they become artifact data.

**Copy/export target:** Paste/import block into `Product, pricing, and discount rule card` artifact.

**Success test:** Evidence is fresh, source-linked and usable without Stuart reconstructing context.

```text
You are seeding the Claude Live Artifact:
Product, pricing, and discount rule card

Use the approved source pack from Prompt 1.

Scan window:
since the last run, or the last 24 hours on the first run

Connected sources:
OneDrive pricing docs, HubSpot deal context, Outlook, Teams, Monday.com.

Find only items that match this artifact's problem:
Stops routine pricing questions and makes the 15 percent discount rule enforceable.

Inputs expected by the artifact:
Approved products, list prices, bundle rules, discount thresholds, exception rules, effective dates, source docs.

Return evidence only first.

Output format:
1. Markdown evidence table with: source, date, sender or item owner, request or item summary, visible owner, Stuart involvement, missing context, source gap, sensitivity risk.
2. Source-gap list.
3. Items that should not enter the artifact and why.
4. JSON import block using these fields:
Product, event, list price, package, discount limit, bundle rule, approval owner, exception path, effective date, source evidence.
5. Human-review checklist for Stuart.

Rules:
Do not infer from memory.
Mark unknown where evidence is missing.
Summarise sensitive data.
Do not recommend actions until the evidence table is complete.
No writeback, messages, approvals, escalations or owner changes.
```

## Prompt 3: Design the live artifact behaviour

**Use this model or tool:** Claude Cowork with Opus or ChatGPT Project with the evidence pasted

**Why this model or tool:** Use Claude if it has source context. Use ChatGPT only if you paste the evidence and source pack.

**Connected sources:** OneDrive pricing docs, HubSpot deal context, Outlook, Teams, Monday.com.

**Expected output:** Final artifact spec ready for Claude Live Artifacts.

**Human review gate:** Stuart approves fields, views, buttons and guardrails before build.

**Copy/export target:** Save as `Product, pricing, and discount rule card Build Spec`.

**Success test:** The spec is concrete enough that Claude can build without inventing features.

```text
Using the approved evidence from Prompt 2, design the v1 live artifact behaviour for:
Product, pricing, and discount rule card

Purpose:
Give sales and marketing one approved reference for products, pricing, bundles, and discount rules.

Primary users:
Stuart, Will, sales team, James, marketing team, project owners.

Build the spec only. Do not code yet.

Required fields:
Product, event, list price, package, discount limit, bundle rule, approval owner, exception path, effective date, source evidence.

Required buttons:
Add rule, update rule, flag exception, copy rule, export PDF, export CSV.

Required views:
Current rules, by product, by event, discount exceptions, changes since last approval.

Local/persistent state needed:
Current rule card, draft edits, change notes, last approval date.

Copy/export needs:
Copy rule into proposals. Export PDF or CSV for sales enablement.

Human approval gate:
Stuart approves rule changes, new products, bundles, and discounts above 15 percent.

What not to build:
No quote generation, contract generation, automatic approvals, or live CRM edits.

Return:
1. data schema
2. flagging or classification rules
3. views
4. buttons
5. statuses
6. refresh/import behaviour
7. scheduled task import block format
8. privacy and sensitivity handling
9. acceptance criteria
10. test scenario using one real or anonymised item

Rules:
V1 must be practical, local/persistent, review-based, copy/export friendly and safe.
Do not add backend unless Stuart explicitly asks later.
```

## Prompt 4: Build the Claude Live Artifact

**Use this model or tool:** Claude Live Artifacts in Claude Cowork

**Why this model or tool:** This is the build step. The output should be a persistent interactive artifact, not a Markdown table.

**Connected sources:** OneDrive pricing docs, HubSpot deal context, Outlook, Teams, Monday.com.

**Expected output:** Working Claude Live Artifact with review UI, state, copy/export and import support.

**Human review gate:** Stuart tests the artifact with real or anonymised examples before relying on it.

**Copy/export target:** Live Artifact tab plus Markdown/CSV/JSON export.

**Success test:** The artifact lets Stuart take one real item from source evidence to reviewed action without reconstructing context manually.

```text
Build the Claude Live Artifact now.

Artifact:
Product, pricing, and discount rule card

Use the approved Build Spec from Prompt 3.

This must be a working interactive artifact, not a static document.

Required behaviour:
1. Load or import evidence items from Prompt 2.
2. Store item status, notes and decisions persistently if available.
3. Support manual import if connected-source refresh fails.
4. Show source evidence and source gaps before recommendations.
5. Require Stuart approval before any action.
6. Provide copy/export outputs for Teams, Monday.com, email, OneDrive or leadership notes.
7. Include clear empty states and safe handling of missing source access.

Required fields:
Product, event, list price, package, discount limit, bundle rule, approval owner, exception path, effective date, source evidence.

Required buttons:
Add rule, update rule, flag exception, copy rule, export PDF, export CSV.

Required views:
Current rules, by product, by event, discount exceptions, changes since last approval.

Do not build:
No quote generation, contract generation, automatic approvals, or live CRM edits.

Do not create:
- backend
- source writeback
- automatic messages
- automatic approvals
- owner reassignment
- CRM edits
- GA4 or website edits
- automatic escalations

After building, show:
1. how Stuart imports scheduled task output
2. how Stuart refreshes or updates evidence
3. how Stuart copies/exports the result
4. how to test it with one example
```

## Prompt 5: Create the Claude Scheduled Task that feeds this artifact

**Use this model or tool:** Claude Scheduled Tasks in Cowork

**Why this model or tool:** Scheduled tasks can run on a recurring cadence and use Cowork capabilities, connected tools, skills and plugins. Use only Hourly, Daily, Weekdays or Weekly.

**Connected sources:** OneDrive pricing docs, HubSpot deal context, Outlook, Teams, Monday.com.

**Expected output:** Ready-to-create Claude Scheduled Task with title, cadence, prompt and artifact import format.

**Human review gate:** Stuart reviews scheduled task output before importing it into the artifact.

**Copy/export target:** Claude Scheduled Task setup screen.

**Success test:** The scheduled task produces a clean import block for the artifact without creating work in live systems.

```text
Create a Claude Scheduled Task to feed this Live Artifact.

Artifact:
Product, pricing, and discount rule card

Cadence:
Weekdays

Use only one of these supported cadence options:
Hourly, Daily, Weekdays, Weekly.

Recommended task title:
Weekday Pricing and Discount Exception Scan

Scheduled task prompt:
Scan OneDrive pricing docs, HubSpot deal context, Outlook, Teams and Monday.com since the last run for pricing questions, bundle exceptions, discount requests and rule gaps. Return: evidence table, exception summary, decision needed, source gap, and JSON import block for the Pricing and Discount Rule Card. Do not approve discounts, edit deals, create quotes or message externally.

Output format required from every run:
1. evidence table
2. source gaps
3. sensitivity warnings
4. JSON import block for the artifact
5. top 3 items for Stuart to review
6. items to ignore or kill

Rules:
Do not write back to source systems.
Do not send messages.
Do not escalate.
Do not approve decisions.
Do not edit CRM, Monday.com, Outlook, Teams, OneDrive, website or GA4.
If source access is missing, return a source-gap report and ask for an export.

Return the final setup as:
1. task name
2. cadence
3. exact prompt to paste into Claude Scheduled Tasks
4. connected sources required
5. what Stuart should do with the output
6. what would make the task unsafe or useless
```

## Prompt 6: Test with real examples and tune the artifact

**Use this model or tool:** Claude Cowork with the Live Artifact open

**Why this model or tool:** This tests whether the artifact changes behaviour rather than creating another dashboard.

**Connected sources:** OneDrive pricing docs, HubSpot deal context, Outlook, Teams, Monday.com.

**Expected output:** Test report, fixes needed and updated artifact instructions.

**Human review gate:** Stuart decides whether to use, revise, park or kill.

**Copy/export target:** Artifact notes and Friday review.

**Success test:** Test five deal scenarios and confirm each routes correctly.

```text
Test the Live Artifact using the first real or anonymised evidence set.

Artifact:
Product, pricing, and discount rule card

Use:
1. the artifact built in Prompt 4
2. the scheduled task output from Prompt 5 or a manual import block
3. at least one real or anonymised source example

Test against:
Test five deal scenarios and confirm each routes correctly.

Evaluate:
1. Did the artifact reduce Stuart's work?
2. Did it show the source evidence clearly?
3. Did it avoid unsafe source writeback?
4. Did it give Stuart a usable next action?
5. Did it create a better copy/export output?
6. What was confusing?
7. What should be removed?
8. What must be fixed before repeated use?

Return:
1. pass/fail against acceptance criteria
2. top 5 fixes
3. revised field, button or view recommendations
4. whether the scheduled task cadence is right
5. whether to complete, revise, park or kill
```

## Prompt 7: Create automation spec only after manual proof

**Use this model or tool:** ChatGPT Project or Claude Cowork

**Why this model or tool:** This is not an automation build. It is a parked spec unless the workflow has proved itself.

**Connected sources:** OneDrive pricing docs, HubSpot deal context, Outlook, Teams, Monday.com.

**Expected output:** Automation readiness decision and parked automation spec if eligible.

**Human review gate:** Stuart confirms manual proof before any automation build.

**Copy/export target:** Automation Candidates or Roadmap Feed.

**Success test:** No automation moves forward without a stable trigger, input, owner, output, failure path and approval gate.

```text
Assess whether this workflow is automation-ready.

Artifact:
Product, pricing, and discount rule card

Manual proof requirement:
The workflow must have worked for at least four cycles before automation.

Automation hint:
Possible later automation: discount approval routing. Not automation-ready until the 15 percent threshold, exception path and manual approval workflow have worked for four cycles.

If fewer than four successful cycles exist, output:
Not automation-ready.

If four successful cycles exist, create a parked automation spec with:
1. trigger
2. apps involved
3. input data
4. action steps
5. output
6. human approval gate
7. failure risk
8. privacy risk
9. manual fallback
10. success test
11. why automate now
12. why not automate yet

Rules:
Do not build the automation.
Do not write code.
Do not suggest Zapier, Make or n8n until the manual workflow is stable.
Do not remove human approval.
```

## Prompt 8: Friday review and feed forward

**Use this model or tool:** Claude Cowork if source access matters, ChatGPT Project if you paste the week's outputs

**Why this model or tool:** The review decides whether the artifact stays in use and what feeds the next build.

**Connected sources:** OneDrive pricing docs, HubSpot deal context, Outlook, Teams, Monday.com.

**Expected output:** Keep, revise, park or kill decision and next build action.

**Human review gate:** Stuart chooses the next build step.

**Copy/export target:** Roadmap review, artifact notes and source pack updates.

**Success test:** The review produces one decision, not another plan.

```text
Review this artifact after one week of use.

Artifact:
Product, pricing, and discount rule card

Evidence to use:
1. artifact output
2. scheduled task runs
3. Stuart's notes
4. examples where the artifact helped
5. examples where it failed

Assess:
1. Did it save Stuart time?
2. Did it reduce chasing, confusion or repeated questions?
3. Did it make Stuart more effective or undeniable?
4. Did it create owner clarity?
5. Did the scheduled task output help?
6. Were sources missing or stale?
7. What should be changed?
8. What should be removed?
9. Should the artifact continue, revise, park or kill?
10. What should feed the next roadmap task?

Output only:
1. decision: keep, revise, park or kill
2. evidence for that decision
3. top 3 changes
4. one next action
5. any scheduled task update
6. automation readiness status
```
