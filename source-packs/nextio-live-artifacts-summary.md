# NEXT.io Live Artifact Build Source Pack

This file summarises the source pack used for the P1 Claude Live Artifact builds.

## Core architecture

- Live Artifact = persistent review UI.
- Claude Scheduled Task = recurring source scan and import-output layer.
- Automation = parked spec only until the workflow proves itself for at least four cycles.
- Version one = local/persistent state, connected-source refresh where available, manual import fallback, copy/export, human approval.
- No source writeback, automatic approvals, owner reassignment, CRM edits, external messages or escalations.

## Claude Scheduled Task cadence

Use only: Hourly, Daily, Weekdays, Weekly.

## P1 artifacts

### Owner-to-owner routing map
- Problem solved: Stops chasing, forwarding, and unclear ownership loops.
- Connected sources: Outlook, Teams, Monday.com, OneDrive, HubSpot where deal context matters.
- Scheduled task cadence: Weekdays
- Scheduled task title: Weekday Owner Routing Scan
- Scheduled task prompt: Scan Outlook, Teams, Monday.com, HubSpot, OneDrive and the execution register since the last run for requests sent to Stuart where owner, decision right or next action is unclear. Return: evidence table, source gaps, sensitivity warnings, and JSON import block for the Owner-to-Owner Routing Map. Do not write back, message people, reassign owners or escalate. Show evidence first.
- What not to build: No automatic reassignment, source writeback, auto-escalation, or live sync.
- Success test: Repeated asks reach the correct owner without Stuart forwarding them.

### Work intake brief template
- Problem solved: Stops Stuart rewriting vague briefs and extracting missing context.
- Connected sources: Outlook, Teams, OneDrive, Monday.com, HubSpot where request context matters.
- Scheduled task cadence: Weekdays
- Scheduled task title: Weekday Incomplete Brief Scan
- Scheduled task prompt: Scan Outlook, Teams, Monday.com, OneDrive and HubSpot where relevant since the last run for requests to Stuart that lack owner, objective, deadline, source evidence, definition of done or decision path. Return: incomplete request table, missing fields, safe return-to-sender draft, and JSON import block for the Work Intake Brief Template. No source writeback or automatic approvals.
- What not to build: No auto-task creation, owner reassignment, or automatic approvals.
- Success test: Incomplete briefs are returned by standard, not rewritten by Stuart.

### Commercial decision log
- Problem solved: Prevents repeat questions about pricing, GTM, products, bundling, discounts, and deliverables.
- Connected sources: Outlook, Teams, OneDrive, Monday.com, HubSpot, web where market context matters.
- Scheduled task cadence: Weekdays
- Scheduled task title: Weekday Commercial Decision Capture
- Scheduled task prompt: Scan Outlook, Teams, OneDrive, Monday.com and HubSpot since the last run for commercial decisions or approval requests about pricing, GTM, products, bundles, discounts or deliverables. Return: evidence table, draft decision-log entries, source gaps, decision-right flag, and JSON import block for the Commercial Decision Log. Do not approve, send, edit CRM or change source systems.
- What not to build: No automatic approvals, contract edits, CRM edits, source sync, or notifications.
- Success test: No one searches email to confirm what Stuart approved.

### Product, pricing, and discount rule card
- Problem solved: Stops routine pricing questions and makes the 15 percent discount rule enforceable.
- Connected sources: OneDrive pricing docs, HubSpot deal context, Outlook, Teams, Monday.com.
- Scheduled task cadence: Weekdays
- Scheduled task title: Weekday Pricing and Discount Exception Scan
- Scheduled task prompt: Scan OneDrive pricing docs, HubSpot deal context, Outlook, Teams and Monday.com since the last run for pricing questions, bundle exceptions, discount requests and rule gaps. Return: evidence table, exception summary, decision needed, source gap, and JSON import block for the Pricing and Discount Rule Card. Do not approve discounts, edit deals, create quotes or message externally.
- What not to build: No quote generation, contract generation, automatic approvals, or live CRM edits.
- Success test: Discounts above 15 percent go to Stuart. Everything else follows the rule card.

### GTM readiness gate
- Problem solved: Turns GTM readiness into a decision gate instead of a Stuart chase loop.
- Connected sources: OneDrive, Monday.com, HubSpot, Outlook, Teams, GA4 or web evidence supplied by Media.
- Scheduled task cadence: Weekly
- Scheduled task title: Weekly GTM Readiness Scan
- Scheduled task prompt: Scan Monday.com, OneDrive, HubSpot, Outlook, Teams and Media-supplied web or GA4 evidence for active launches. Return: readiness evidence, blockers, owner actions, Stuart decisions needed, source gaps, and JSON import block for the GTM Readiness Gate. Do not approve launches, edit source systems, change GA4, update CRM or reassign owners.
- What not to build: No automatic launch approval, owner reassignment, GA4 changes, website edits, or CRM edits.
- Success test: At least one launch risk is caught before execution starts.

## Source rules
- Source scan first: Start every refresh by scanning the named connected sources before updating the artifact.
- Evidence before recommendation: Show the evidence summary before recommending an action or owner change.
- Freshness rule: Use the freshness rule in the artifact. Mark unknown where source access fails.
- No raw sensitive data: Summarise sensitive evidence. Do not expose compensation, private HR notes, PIP content, banking details, or subscriber-level data.
- No source writeback: Version one should not write back to HubSpot, Monday, Outlook, Teams, OneDrive, GA4, or website systems.
- Decision rights filter: Separate owner execution from Stuart decision rights in every output.
- No backend by default: Use Claude source scan, local storage, and export unless shared permissions or audit trail becomes unavoidable.
- Manual proof gate: Only move an artifact toward automation after the manual workflow works for at least four cycles.
- P1 build queue limit: Only five items are P1: owner-to-owner routing map, work intake brief template, commercial decision log, product pricing discount rule card, and GTM readiness gate.
- Stuart decision rights: Stuart owns product and pricing approval, discounting rules, discount approval above 15 percent, new products, bundling, GTM strategy, and sign-off on Will and James strategies.
- Rory partnership boundary: Rory's team owns strategic partnerships. Stuart only approves deliverables inside the contract when they involve commercial products.
- Media owns website and GA4: Media owns the website and GA4. Marketing requests tracking, reporting, and web changes. Stuart does not own setup or QA.
- James day-one ownership: James takes Nico, Alina, Oliver, and probably Akash from day one. He owns their 1:1s, strategies, and KPIs.
- Will sales accountability: Will owns revenue, sales team performance, process compliance, and pipeline reviews. Stuart signs off strategy and exceptions.
- Jo CRM boundary: Jo owns CRM execution only if she passes PIP. Stuart retains CRM architecture and strategy decisions.
- Manual proof before automation: No automation moves forward until trigger, owner, input, action, output, approval gate, failure risk, privacy risk, and success test work manually.
- No automatic decisions: Claude, workflows, and artifacts prepare evidence. They do not approve pricing, discounts, products, GTM, or owner changes.
- No automatic source writeback: Version one must not write back to HubSpot, Monday, Outlook, Teams, OneDrive, website, GA4, or CRM.
- Evidence scan before recommendation: Claude must show the evidence summary before recommending an owner, decision, or next action.
- Model/tool routing for P1 prompts: Use Claude Opus with connected sources for evidence scans and diagnosis. Use Claude Artifacts with a coding-capable model for artifact builds. Use ChatGPT Project only when the workbook or pasted evidence is the source.
- Claude Artifacts version one rule: Build local artifacts only. Use local storage, copy/export, manual evidence review, and human approval. Do not add backend, source sync, CRM edits, owner reassignment or auto-escalation.
- ChatGPT fallback rule: Use ChatGPT Project for cleanup, prompt testing, structure, wording and QA when connected-source evidence is already provided. Do not ask ChatGPT to infer live Microsoft 365, Monday.com or HubSpot facts without evidence.