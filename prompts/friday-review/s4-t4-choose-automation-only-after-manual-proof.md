# Choose automation only after manual proof

**Sprint:** Sprint 4: Manual AI Workflows

**Lane:** Automation Gate

**Use this model or tool:** ChatGPT Project for decision. Claude Artifacts, Google AI Studio, Lovable or Make only after decision.

**Use this asset:** LLM Control Hub: tool evaluation, golden tests. Executive Growth System: workflow notes.

## Starter prompt

```text
Evaluate whether this workflow deserves automation.

Workflow: [describe]
Manual usage count: [number]
Pain solved: [describe]
Time saved: [estimate]
Quality improved: [yes/no]
Risk reduced: [yes/no]
Would I miss it if removed: [yes/no]
Data needed: [describe]
Failure risk: [describe]

Output:
1. automate now, keep manual, simplify, or kill
2. best tool choice
3. smallest build version
4. what not to build
5. 7-day success test
```

## Human starter action

Fill the workflow facts before asking AI. No facts, no automation.

## Expected output

A build, defer or kill decision for one workflow.

## Success test

One automation decision made without hype.

## Friday review question

What did I refuse to build?

## Kill rule

If the manual workflow has not been used at least 5 times, do not automate.
