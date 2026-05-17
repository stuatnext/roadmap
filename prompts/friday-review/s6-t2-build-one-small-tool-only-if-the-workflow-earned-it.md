# Build one small tool only if the workflow earned it

**Sprint:** Sprint 6: Package and Automate

**Lane:** Automation

**Use this model or tool:** Claude Artifacts for simple interactive tool. Google AI Studio for Gemini-native prototype. Lovable for full-stack app. Make/Zapier/n8n for workflow automation. ChatGPT for build spec.

**Use this asset:** LLM Control Hub: tool evaluation. Manual workflow evidence.

## Starter prompt

```text
Write a build spec for the smallest useful version of this proven workflow.

Workflow: [describe]
Evidence it worked manually: [usage count, saved time, decision improved, pain reduced]
Users: [who]
Inputs: [what]
Outputs: [what]
Data sensitivity: [low, medium, high]
Need backend: [yes/no]
Need scheduled task: [yes/no]
Need Gemini-specific behaviour: [yes/no]

Output:
1. recommended tool
2. why that tool
3. what not to build
4. minimum screens or steps
5. success test after 7 days
6. maintenance risk
7. build prompt for the chosen tool
```

## Human starter action

Do not open a builder until this spec says build now.

## Expected output

One tiny artifact, app or automation based on a proven workflow.

## Success test

One small build shipped or consciously killed.

## Friday review question

Did the build reduce work or create more work?

## Kill rule

If it needs constant manual updating, it is probably wrong.
