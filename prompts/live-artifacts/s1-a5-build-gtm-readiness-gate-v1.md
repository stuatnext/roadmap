# Build GTM readiness gate v1

Run one prompt at a time. Do not paste this whole file unless you want a task brief.

**Best model/tool:** Claude Artifacts for the interactive v1. Use Claude Cowork only for source evidence scans. Use ChatGPT Project for structure and quality control.

**Source pack:** NEXT.io Live Artifact Specs Execution Source Pack

## Source spec
- **Problem solved:** Turns GTM readiness into a decision gate instead of a Stuart chase loop.
- **Purpose:** Stop launches moving forward with missing owners, weak collateral, or unclear measurement.
- **User:** Stuart, Maria, project managers, Will, James, Kim, Nico, Oliver.
- **Inputs:** Product status, pricing status, sales collateral, marketing plan, CRM readiness, web and GA4 status, risks, owner updates.
- **Fields:** Project, gate date, product/pricing status, sales status, marketing status, CRM status, web/GA4 status, owner, risk, decision needed, go/no-go.
- **Buttons:** New gate, mark ready, flag blocker, copy blocker list, export summary.
- **Views:** By project, by owner, blockers, decisions for Stuart, ready to launch, not ready.
- **Connected sources:** OneDrive, Monday.com, HubSpot, Outlook, Teams, GA4 or web evidence supplied by Media.
- **Claude Cowork role:** Scan sources, summarise evidence, identify blockers, separate owner actions from Stuart decisions.
- **Human approval gate:** Project owner confirms readiness. Stuart approves only product, pricing, GTM, and commercial exceptions.
- **Local storage needs:** Gate records, blocker history, last source scan, owner notes.
- **Version 1 rule:** Local state, manual source review, human approval, copy/export.
- **Copy/export needs:** Copy go/no-go summary. Export blocker list to Monday, Teams, or email.
- **What not to build:** No automatic launch approval, owner reassignment, GA4 changes, website edits, or CRM edits.
- **First manual test:** Run one active project through the gate before a readiness meeting.
- **Success test:** At least one launch risk is caught before execution starts.
- **Roadmap trigger:** Use the next project launch or commercial readiness review.
- **Notes:** Maria or the project owner runs the package. Stuart reviews decision points only.

## Source rules that matter
- **Source scan first:** Start every refresh by scanning the named connected sources before updating the artifact.
- **Evidence before recommendation:** Show the evidence summary before recommending an action or owner change.
- **Freshness rule:** Use the freshness rule in the artifact. Mark unknown where source access fails.
- **No raw sensitive data:** Summarise sensitive evidence. Do not expose compensation, private HR notes, PIP content, banking details, or subscriber-level data.
- **No source writeback:** Version one should not write back to HubSpot, Monday, Outlook, Teams, OneDrive, GA4, or website systems.
- **Decision rights filter:** Separate owner execution from Stuart decision rights in every output.
- **No backend by default:** Use Claude source scan, local storage, and export unless shared permissions or audit trail becomes unavoidable.
- **Manual proof gate:** Only move an artifact toward automation after the manual workflow works for at least four cycles.
- **No automatic decisions:** Claude, workflows, and artifacts prepare evidence. They do not approve pricing, discounts, products, GTM, or owner changes.
- **No automatic source writeback:** Version one must not write back to HubSpot, Monday, Outlook, Teams, OneDrive, website, GA4, or CRM.

## Prompt 1: Capture the real workflow

```text
I am building the NEXT.io live artifact: GTM readiness gate.

Do not build yet.

Capture the real workflow first.

Use this trigger:
Use the next project launch or commercial readiness review.

Here is my real or anonymised example:
[paste example]

Output only:
1. trigger
2. user
3. correct owner
4. input needed
5. output needed
6. decision or handoff created
7. evidence needed
8. risk if this artifact does not exist
9. what must not be automated
10. missing information

Do not give strategy. Do not add new features.
```

## Prompt 2: Classify source needs and evidence rules

```text
Using the captured workflow below:
[paste Prompt 1 output]

Classify the source needs for this artifact.

Connected sources from the execution source pack:
OneDrive, Monday.com, HubSpot, Outlook, Teams, GA4 or web evidence supplied by Media.

For each source, say:
1. why it might be useful
2. what evidence Claude Cowork should look for
3. what Stuart or the named owner must manually review
4. what must not be stored in the artifact
5. what can be copied or exported safely

Rules:
- Claude prepares evidence summaries. It does not decide or act.
- No automatic source sync in v1.
- No source writeback.
- No sensitive raw data stored locally.
- Mark unknown where source access fails.
```

## Prompt 3: Build the v1 artifact spec

```text
Using the workflow and source needs below:
[paste Prompt 1 and Prompt 2 outputs]

Create the v1 artifact spec for: GTM readiness gate.

Use the execution source pack constraints:
Fields: Project, gate date, product/pricing status, sales status, marketing status, CRM status, web/GA4 status, owner, risk, decision needed, go/no-go.
Buttons: New gate, mark ready, flag blocker, copy blocker list, export summary.
Views: By project, by owner, blockers, decisions for Stuart, ready to launch, not ready.
Local storage needs: Gate records, blocker history, last source scan, owner notes.
Copy/export needs: Copy go/no-go summary. Export blocker list to Monday, Teams, or email.
Human approval gate: Project owner confirms readiness. Stuart approves only product, pricing, GTM, and commercial exceptions.
What not to build: No automatic launch approval, owner reassignment, GA4 changes, website edits, or CRM edits.

Output:
1. purpose
2. user
3. fields
4. buttons
5. views
6. local storage needs
7. copy/export needs
8. human approval gate
9. what not to build
10. success test
11. first manual test
12. kill rule

Keep it simple. No backend unless proven necessary.
```

## Prompt 4: Create the Claude Artifact build prompt

```text
Using this v1 artifact spec:
[paste Prompt 3 output]

Write a build prompt for Claude Artifacts.

The prompt must ask Claude to build a simple interactive HTML artifact with:
1. clear fields
2. simple buttons
3. views and filters
4. local storage
5. copy/export functions
6. visible evidence and approval fields
7. no backend
8. no automatic source sync
9. no source writeback
10. no sensitive raw data storage
11. mobile-readable layout
12. visible success test

Also include what Claude must not build:
No automatic launch approval, owner reassignment, GA4 changes, website edits, or CRM edits.

Do not build the artifact in this response. Only write the build prompt.
```

## Prompt 5: Manual test script

```text
Using the artifact spec below:
[paste Prompt 3 output]

Create a manual test script for: GTM readiness gate.

First manual test from the execution source pack:
Run one active project through the gate before a readiness meeting.

Give me:
1. test setup
2. test data to enter
3. exact steps
4. what should happen
5. what would make the artifact fail
6. what to record in Friday Review
7. whether this should be repeated, parked, killed, or considered for automation later

Keep it practical. The test should take under 30 minutes.
```

## Prompt 6: Review and feed forward

```text
Here is what happened after testing GTM readiness gate:
[paste test notes]

Review against this success test:
At least one launch risk is caught before execution starts.

Answer:
1. complete, repeat, park, or kill?
2. what changed in the real world?
3. what should be simplified?
4. what should feed the roadmap?
5. is this a scheduled task, Claude Cowork workflow, live artifact, automation candidate, or kill item?
6. what is the next action?

Rules:
- No automation unless the manual workflow worked.
- No backend unless the manual workflow proves it is needed.
- No new artifact until this one passes or is parked.

Keep it under 180 words.
```
