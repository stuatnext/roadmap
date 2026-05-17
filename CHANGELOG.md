# Changelog

## Prompt sequences across all tasks

Changed every task prompt file from a single large prompt into a prompt sequence.

Reason: Stuart found the monster-prompt format too heavy and correctly identified that each task needs several smaller prompts to succeed.

Files touched:

- `prompts/**/**/*.md`
- `assets/js/app.js`
- `assets/css/styles.css`
- `README.md`
- `AI_CONTEXT.md`

Rollback note: restore the previous prompt files if single-prompt execution is needed again.

## Single-task flow

Changed the roadmap from a multi-tab dashboard into a one-task-at-a-time execution flow.

Reason: Stuart found the command tab, sprint tab, prompt runner and other sections confusing. The roadmap now shows one task, the step-by-step process, model choice, asset, prompt sequence, success test, and complete, park or kill buttons.

Files touched:

- `index.html`
- `assets/js/app.js`
- `assets/css/styles.css`
- `README.md`
- `AI_CONTEXT.md`

Rollback note: restore the previous upgraded repo if tabbed browsing is required again.

## Leadership time reclaim linkage

- Reframed the Stop Doing task as Reclaim Leadership Time at NEXT.io.
- Added downstream outputs so the task feeds scheduled tasks, Claude Cowork workflows, live artifacts, automations and future roadmap tasks.
- Added a reusable Leadership Time Reclaim Register template.
- Added future-build routing rules to prevent dead-end notes and premature automation.
