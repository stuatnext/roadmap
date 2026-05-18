# NEXT.io Live Artifact Specs Execution Source Pack

Source: NEXTio_Live_Artifact_Specs_EXECUTION_SOURCE_PACK.xlsx

This source pack is for the roadmap app. It should feed task cards and prompt sequences, not become another workbook operating system.

Core rule: build only the five P1 artifacts first. Keep version one local, evidence-based, human-approved, and copy/export only.

## P1 build queue
1. Owner-to-owner routing map
   - Problem solved: Stops chasing, forwarding, and unclear ownership loops.
   - Purpose: Route work to the correct owner before Stuart becomes the middleman.
   - Primary user: Stuart, function owners, project managers, direct reports.
   - Roadmap trigger: Start with 10 recent owner-chase or middleman examples.
   - Success test: Repeated asks reach the correct owner without Stuart forwarding them.
   - Backend stance: No. Local storage, Claude evidence scan, and copy/export first.

2. Work intake brief template
   - Problem solved: Stops Stuart rewriting vague briefs and extracting missing context.
   - Purpose: Make every request decision-ready before it reaches Stuart.
   - Primary user: Function owners, project managers, Will, James, Kim, Nico, Oliver, Alina.
   - Roadmap trigger: Use the next vague request that lacks owner, output, or decision path.
   - Success test: Incomplete briefs are returned by standard, not rewritten by Stuart.
   - Backend stance: No. Local storage, Claude evidence scan, and copy/export first.

3. Commercial decision log
   - Problem solved: Prevents repeat questions about pricing, GTM, products, bundling, discounts, and deliverables.
   - Purpose: Capture commercial decisions so they do not live in email or memory.
   - Primary user: Stuart, Will, James, Kim, Rory's team, project owners.
   - Roadmap trigger: Use the next product, pricing, GTM, discount, bundle, or deliverables approval.
   - Success test: No one searches email to confirm what Stuart approved.
   - Backend stance: No. Local storage, Claude evidence scan, and copy/export first.

4. Product, pricing, and discount rule card
   - Problem solved: Stops routine pricing questions and makes the 15 percent discount rule enforceable.
   - Purpose: Give sales and marketing one approved reference for products, pricing, bundles, and discount rules.
   - Primary user: Stuart, Will, sales team, James, marketing team, project owners.
   - Roadmap trigger: Use the next discount, bundle, or package question.
   - Success test: Discounts above 15 percent go to Stuart. Everything else follows the rule card.
   - Backend stance: No. Local storage, Claude evidence scan, and copy/export first.

5. GTM readiness gate
   - Problem solved: Turns GTM readiness into a decision gate instead of a Stuart chase loop.
   - Purpose: Stop launches moving forward with missing owners, weak collateral, or unclear measurement.
   - Primary user: Stuart, Maria, project managers, Will, James, Kim, Nico, Oliver.
   - Roadmap trigger: Use the next project launch or commercial readiness review.
   - Success test: At least one launch risk is caught before execution starts.
   - Backend stance: No. Local storage, Claude evidence scan, and copy/export first.

## P1 artifact specs
### Owner-to-owner routing map
- Problem solved: Stops chasing, forwarding, and unclear ownership loops.
- Purpose: Route work to the correct owner before Stuart becomes the middleman.
- User: Stuart, function owners, project managers, direct reports.
- Inputs: Request type, project, current sender, expected output, named owner, decision needed, deadline, evidence.
- Fields: Request type, correct owner, backup owner, Stuart decision right, escalation path, evidence, redirect script, last validated, notes.
- Buttons: Add route, search route, copy soft redirect, copy direct redirect, export map, flag unclear owner.
- Views: By function, by project, by owner, unclear ownership, Stuart decision rights.
- Connected sources: Outlook, Teams, Monday.com, OneDrive, HubSpot where deal context matters.
- Claude Cowork role: Scan evidence, suggest owner, separate execution from Stuart decision rights, draft redirect.
- Human approval gate: Stuart or relevant function owner approves a route before it becomes the rule.
- Local storage needs: Saved routes, filters, draft changes, validation date.
- Version 1 rule: Local state, manual source review, human approval, copy/export.
- Copy/export needs: Copy redirect message. Export CSV or markdown for Monday, Teams, or leadership review.
- What not to build: No automatic reassignment, source writeback, auto-escalation, or live sync.
- First manual test: Classify 10 recent asks, validate owners, use redirects for one week.
- Prompt sequence needed: P1 capture request examples; P2 classify owner and Stuart decision right; P3 create routing map; P4 extract redirect scripts; P5 test with 10 requests; P6 Friday review.
- Success test: Repeated asks reach the correct owner without Stuart forwarding them.
- Roadmap trigger: Start with 10 recent owner-chase or middleman examples.
- Notes: This is the first build because it changes behaviour fastest.

### Work intake brief template
- Problem solved: Stops Stuart rewriting vague briefs and extracting missing context.
- Purpose: Make every request decision-ready before it reaches Stuart.
- User: Function owners, project managers, Will, James, Kim, Nico, Oliver, Alina.
- Inputs: Request, objective, audience, owner, deadline, source evidence, decision needed, risk, output format.
- Fields: Brief ID, requester, owner, objective, audience, source links, decision needed, deadline, definition of done, risk, approval path.
- Buttons: New brief, check completeness, copy brief, return for resubmission, export markdown.
- Views: Drafts, ready for Stuart, returned for resubmission, by owner, by project.
- Connected sources: Outlook, Teams, OneDrive, Monday.com, HubSpot where request context matters.
- Claude Cowork role: Diagnose missing fields, rewrite into a clean brief, flag whether Stuart is needed.
- Human approval gate: Owner confirms the brief before Stuart reviews any decision request.
- Local storage needs: Draft briefs, templates, missing-field checklist, resubmission notes.
- Version 1 rule: Local state, manual source review, human approval, copy/export.
- Copy/export needs: Copy brief into Teams, email, Monday item, or project document.
- What not to build: No auto-task creation, owner reassignment, or automatic approvals.
- First manual test: Run three live requests through the template and return one incomplete brief.
- Prompt sequence needed: P1 capture vague work request; P2 diagnose missing fields; P3 create complete brief; P4 extract reusable checklist; P5 test with one owner; P6 Friday review.
- Success test: Incomplete briefs are returned by standard, not rewritten by Stuart.
- Roadmap trigger: Use the next vague request that lacks owner, output, or decision path.
- Notes: This creates the input standard for the other builds.

### Commercial decision log
- Problem solved: Prevents repeat questions about pricing, GTM, products, bundling, discounts, and deliverables.
- Purpose: Capture commercial decisions so they do not live in email or memory.
- User: Stuart, Will, James, Kim, Rory's team, project owners.
- Inputs: Decision needed, recommendation, options, revenue impact, risk, owner, evidence, deadline.
- Fields: Decision ID, date, decision type, project, owner recommendation, options, approved decision, conditions, affected teams, evidence, follow-up.
- Buttons: New decision, request clarification, mark approved, copy summary, export CSV, export markdown.
- Views: Pending Stuart approval, approved decisions, by project, by owner, by decision type, recent changes.
- Connected sources: Outlook, Teams, OneDrive, Monday.com, HubSpot, web where market context matters.
- Claude Cowork role: Scan evidence, draft decision memo, extract owner actions, create log entry.
- Human approval gate: Stuart approves the decision before it is logged as final.
- Local storage needs: Decision records, draft notes, evidence summaries, filters, last scan date.
- Version 1 rule: Local state, manual source review, human approval, copy/export.
- Copy/export needs: Copy decision summary with evidence. Export CSV or markdown for teams.
- What not to build: No automatic approvals, contract edits, CRM edits, source sync, or notifications.
- First manual test: Log five recent decisions and send the summary back to the owners.
- Prompt sequence needed: P1 capture decision context; P2 classify decision type and owner; P3 create decision record; P4 extract actions and owners; P5 test log entry; P6 Friday review.
- Success test: No one searches email to confirm what Stuart approved.
- Roadmap trigger: Use the next product, pricing, GTM, discount, bundle, or deliverables approval.
- Notes: This protects Stuart's authority while reducing repeat clarification.

### Product, pricing, and discount rule card
- Problem solved: Stops routine pricing questions and makes the 15 percent discount rule enforceable.
- Purpose: Give sales and marketing one approved reference for products, pricing, bundles, and discount rules.
- User: Stuart, Will, sales team, James, marketing team, project owners.
- Inputs: Approved products, list prices, bundle rules, discount thresholds, exception rules, effective dates, source docs.
- Fields: Product, event, list price, package, discount limit, bundle rule, approval owner, exception path, effective date, source evidence.
- Buttons: Add rule, update rule, flag exception, copy rule, export PDF, export CSV.
- Views: Current rules, by product, by event, discount exceptions, changes since last approval.
- Connected sources: OneDrive pricing docs, HubSpot deal context, Outlook, Teams, Monday.com.
- Claude Cowork role: Check proposed pricing questions against approved rules and draft exception summaries.
- Human approval gate: Stuart approves rule changes, new products, bundles, and discounts above 15 percent.
- Local storage needs: Current rule card, draft edits, change notes, last approval date.
- Version 1 rule: Local state, manual source review, human approval, copy/export.
- Copy/export needs: Copy rule into proposals. Export PDF or CSV for sales enablement.
- What not to build: No quote generation, contract generation, automatic approvals, or live CRM edits.
- First manual test: Test five deal scenarios and confirm each routes correctly.
- Prompt sequence needed: P1 capture product and pricing source; P2 classify rule and exception; P3 create rule card; P4 extract sales version; P5 test discount example; P6 Friday review.
- Success test: Discounts above 15 percent go to Stuart. Everything else follows the rule card.
- Roadmap trigger: Use the next discount, bundle, or package question.
- Notes: This is a rule card, not a quoting tool.

### GTM readiness gate
- Problem solved: Turns GTM readiness into a decision gate instead of a Stuart chase loop.
- Purpose: Stop launches moving forward with missing owners, weak collateral, or unclear measurement.
- User: Stuart, Maria, project managers, Will, James, Kim, Nico, Oliver.
- Inputs: Product status, pricing status, sales collateral, marketing plan, CRM readiness, web and GA4 status, risks, owner updates.
- Fields: Project, gate date, product/pricing status, sales status, marketing status, CRM status, web/GA4 status, owner, risk, decision needed, go/no-go.
- Buttons: New gate, mark ready, flag blocker, copy blocker list, export summary.
- Views: By project, by owner, blockers, decisions for Stuart, ready to launch, not ready.
- Connected sources: OneDrive, Monday.com, HubSpot, Outlook, Teams, GA4 or web evidence supplied by Media.
- Claude Cowork role: Scan sources, summarise evidence, identify blockers, separate owner actions from Stuart decisions.
- Human approval gate: Project owner confirms readiness. Stuart approves only product, pricing, GTM, and commercial exceptions.
- Local storage needs: Gate records, blocker history, last source scan, owner notes.
- Version 1 rule: Local state, manual source review, human approval, copy/export.
- Copy/export needs: Copy go/no-go summary. Export blocker list to Monday, Teams, or email.
- What not to build: No automatic launch approval, owner reassignment, GA4 changes, website edits, or CRM edits.
- First manual test: Run one active project through the gate before a readiness meeting.
- Prompt sequence needed: P1 capture project status; P2 diagnose missing owners and risks; P3 create go/no-go checklist; P4 extract blockers; P5 test on one project; P6 Friday review.
- Success test: At least one launch risk is caught before execution starts.
- Roadmap trigger: Use the next project launch or commercial readiness review.
- Notes: Maria or the project owner runs the package. Stuart reviews decision points only.

## Source rules to apply to every artifact
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

## Kill and redirect signals
- Stuart chasing owners: Removes Stuart from follow-up loops owned by project or function owners. Redirect dependency: Owner-to-owner routing map
- Stuart acting as link directory: Stops people asking Stuart for ticket, partner, campaign, or web links. Redirect dependency: Owner-to-owner routing map
- Stuart fixing live page copy: Stops post-live QA failures landing with Stuart. Redirect dependency: Work intake brief template
- Stuart rewriting vague briefs: Forces owners to submit usable briefs instead of relying on Stuart to clarify everything. Redirect dependency: Work intake brief template
- Stuart as sales, marketing, and media middleman: Stops cross-functional work being routed through Stuart when no decision right exists. Redirect dependency: Owner-to-owner routing map
- Stuart approving routine pricing wording: Keeps Stuart focused on pricing policy, not micro-copy. Redirect dependency: Product, pricing rule card or CRM governance
- Stuart managing strategic partnership delivery: Separates Rory’s relationship ownership from Stuart’s commercial-product approval role. Redirect dependency: Owner-to-owner routing map
- Meetings without decision, unique input, or strategic direction: Cuts meetings where Stuart is present as safety net or status receiver. Redirect dependency: GTM readiness gate or decision-led meeting rule
- Automation requests without manual proof: Prevents automation being used to disguise unclear ownership. Redirect dependency: Manual proof gate
- Routine community invoicing after Alina handover: Stops community invoicing staying with Stuart after process transfer. Redirect dependency: Work intake brief template
- Direct CRM fixes after Jo passes PIP: Moves Stuart out of CRM execution while keeping architecture control. Redirect dependency: Product, pricing rule card or CRM governance

## Automation stance
- Automation-ready count is zero now.
- Automation specs parked for later are not build instructions yet.
- No automation moves forward until the manual workflow has a clear trigger, owner, input, output, approval gate, failure risk, privacy risk, and success test.
## Build-phase prompt source
- Latest prompt source: `NEXTio_Execution_Source_Pack_ALL_PROMPTS.xlsx`.
- Use sheet `P1 Prompt Pack` as the source of truth for the five Sprint 1 live artifact prompt sequences.
- Each P1 artifact prompt now has six stages: capture raw situation, classify or diagnose, create core output, extract reusable outputs, build or test artifact, Friday review and feed forward.
- Each prompt stage includes model/tool recommendation, connected sources, expected output, human review gate, copy/export target, success test and notes.
- Do not paste a full prompt file into an LLM unless asking for a task brief. Run one prompt stage at a time.

## Prompt quality update

The P1 live artifact tasks now use consolidated prompt sequences.

Each prompt tells Stuart:

- what model or tool to use
- why that model or tool is appropriate
- what sources or knowledge to provide
- what evidence must be gathered before recommendation
- what output format is required
- what human review gate applies
- where to copy or export the result
- what must not be automated or built

Do not paste a whole prompt file into an LLM. Run one stage at a time.
