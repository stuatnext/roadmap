# AI Context for Stuart One Roadmap

This repo is Stuart Crowley’s single-task execution roadmap. It exists to remove ambiguity and stop the roadmap becoming another set of fragmented tabs, dashboards, or prompt dumps.

## What this is

A modular static roadmap app for:

- reducing NEXT.io chaos
- building commercial confidence
- proving Strait Up Growth
- building Singapore opportunity
- using AI and tech with discipline
- making Chinese a strategic advantage

## What this is not

- not a productivity toy
- not a generic personal OS
- not a place to add more dashboards
- not a prompt dump
- not a strategy generator
- not a multi-tab command centre

## Primary UX rule

Show one task at a time.

Each task must guide Stuart through:

1. why the task exists
2. the real problem
3. the human-first action
4. the asset to open
5. the model or tool to use
6. the prompt sequence to run
7. the expected output
8. the success test
9. the complete, park, or kill decision

When one task is marked complete, parked, or killed, the next task should appear automatically.

## Prompt file rule

Every prompt file should be a sequence, not one giant prompt.

Preferred structure:

1. Prompt 1: Capture the raw situation
2. Prompt 2: Diagnose and prioritise
3. Prompt 3: Build the task output
4. Prompt 4: Extract reusable outputs
5. Prompt 5: Create the action script or implementation steps
6. Prompt 6: Review and feed forward

Use task-specific extra prompts only when needed, for example scheduled task prompts, live artifact specs, Claude Cowork workflow specs, or automation specs.

Do not paste an entire prompt file into an LLM unless the user specifically wants a full task brief.

## Rules for any AI editing this repo

1. Preserve the single-task flow.
2. Do not restore command-vs-sprint tabs.
3. Do not add a new tab unless it removes friction.
4. Do not add a new task unless it maps to a sprint and one of the six outcomes.
5. Every task must include problem, cause, questionnaire source, best model, fallback model, asset, prompt file, human-first action, output, success test, kill rule and privacy warning.
6. Do not duplicate prompt text inside `tasks.json`. Use prompt files.
7. Do not create mega-plans.
8. Do not suggest a website, dashboard, agent, prompt library or app without checking existing assets first.
9. Use simple language.
10. Respect privacy rules for NEXT.io, CRM data, staff data, client data and compensation.
11. Keep prompts small enough to run one at a time.
12. Every useful output should feed a next action, scheduled task, artifact, automation spec, roadmap task, or kill decision.

## How tasks work

Each task should answer:

- what problem this solves
- why it exists from Stuart’s questionnaire answers
- what to do first as a human
- which model or tool to use
- which asset pack to open
- which prompt sequence to run
- what output to produce
- what proves it worked
- when to kill it
- what reusable outputs should feed later builds

## Build ladder

Manual workflow first.

Then:

1. Google AI Studio if Gemini-native behaviour matters.
2. Claude Artifacts for a simple interactive tool.
3. Lovable for a full-stack app.
4. Make or n8n for recurring automation.
5. Claude Code, Cursor or developer support only when requirements are stable.

No workflow earns automation until it is useful manually.

## Reusable output rule

Do not treat roadmap tasks as isolated notes. If a task produces a reusable artifact, route it into the next relevant system:

- scheduled task if recurring and time-based
- Claude Cowork if file, folder, document or Microsoft 365 context is needed
- live artifact if an interactive tracker, checklist, scorecard or prompt runner is useful
- automation only after the manual workflow has worked at least twice
- future roadmap task if it needs human judgement before automation

The Reclaim Leadership Time at NEXT.io task is the source layer for future delegation, accountability, scheduled task, live artifact and automation builds.
