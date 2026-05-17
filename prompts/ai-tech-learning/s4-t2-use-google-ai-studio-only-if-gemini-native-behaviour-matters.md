# Use Google AI Studio only if Gemini-native behaviour matters

**Sprint:** Sprint 4: Manual AI Workflows

**Lane:** AI Prototyping

**Use this model or tool:** Google AI Studio for Gemini prototype. ChatGPT Project for build or kill decision. Claude Artifacts if simple HTML is enough.

**Use this asset:** LLM Control Hub: ai-tool-evaluation, golden tests. Any workflow notes from Follow-Up System.

## Starter prompt

```text
I want to test whether Google AI Studio is useful for this workflow before building anything permanent.

Workflow: [describe workflow]
Goal: [what this should help me do]
Users: [me, NEXT.io team, SUG prospect, client, public audience]
Inputs: [files, forms, CRM data, notes, text, voice, image, video]
Outputs: [dashboard, summary, scorecard, recommendation, message, agent response]

Constraints: must be simple, useful within 7 days, and not become a build rabbit hole.

Build me a small Gemini-powered prototype concept. Include:
1. what it does
2. why Google AI Studio is or is not the right tool
3. interaction flow
4. prompt or system instruction
5. data needed
6. risks
7. success test
8. build, test manually or kill decision

Do not generate a complex app unless the workflow is clear.
```

## Human starter action

Only open Google AI Studio after writing the workflow, inputs and output. If the workflow is unclear, stay manual.

## Expected output

One tiny prototype concept, test result or kill decision.

## Success test

One prototype tested or one clear kill decision.

## Friday review question

Did AI Studio teach me something useful, or was it procrastination?

## Kill rule

If the goal is not Gemini-specific, use Claude Artifacts or stay manual.
