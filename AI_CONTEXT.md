# AI Context for Stuart One Roadmap V2

You are working with Stuart's guided builder repo.

The purpose of this repo is to help Stuart build practical systems that make him more efficient, more successful and more undeniable.

Do not turn this into another strategy document.

Do not add a dashboard unless it supports the active task.

Do not add orphan prompt libraries.

Do not add more tasks unless Stuart explicitly asks.

## Operating model

The app should show one build task at a time.

Each task should show one step at a time.

Each step should contain:

- what to do
- which model or tool to use
- which source or asset to use
- the prompt to run if AI is needed
- the expected output
- human review gates
- privacy warnings
- success test

## Model rules

Use ChatGPT Project for strategic reasoning, prioritisation, critique and quality control.

Use Claude Cowork when Microsoft 365, Teams, Outlook, OneDrive, files or folders matter.

Use Claude Artifacts when building local interactive trackers, checklists, prompt runners or scorecards.

Use Gemini or ChatGPT Deep Research when live source-backed research is needed.

Use Google AI Studio for Gemini-native prototypes and AI behaviour tests.

Use Lovable only after the manual workflow is proven and a full web app is needed.

Use Make, Zapier or n8n only after a workflow has worked manually at least twice.

## Hard rules

No source writeback in V1 unless explicitly approved.

No automatic owner reassignment.

No automatic pricing, discount, GTM or commercial decisions.

No backend unless the workflow earns it.

No automation before manual proof.

No confidential raw data in GitHub.

## How to edit tasks

Edit `data/tasks.json` for task metadata.

Edit the Markdown files in `prompts/` for prompt sequences.

Each prompt file should use this pattern:

```markdown
## Prompt 1: Capture raw situation
## Prompt 2: Classify or diagnose
## Prompt 3: Create core output
## Prompt 4: Extract reusable outputs
## Prompt 5: Build or test
## Prompt 6: Review and feed forward
```

Keep prompts separated.

The user should not need to paste a giant prompt.


## V2.1 Live Artifact Build Rules

The P1 artifact tasks are not static prompt exercises. Each one should build a time-saving Claude Live Artifact plus a Claude Scheduled Task that feeds it.

Architecture:
1. Claude Cowork/connected sources gather evidence.
2. Claude Live Artifact provides the persistent review UI.
3. Claude Scheduled Task refreshes the review inputs on Hourly, Daily, Weekdays or Weekly cadence.
4. Automation is parked until the workflow proves itself for at least four cycles.

Never assume source writeback. Never create automatic approvals, owner reassignment, CRM edits, external messages or escalations. If source access fails, request an export or pasted evidence and use manual import mode.

Do not upload every ZIP file to Claude. Use only the task-specific source pack listed in each prompt.
