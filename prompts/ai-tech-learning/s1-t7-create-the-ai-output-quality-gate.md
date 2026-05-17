# Create the AI Output Quality Gate

**Sprint:** Sprint 1: Relief and Control

**Lane:** AI Quality

**Use this model or tool:** ChatGPT Project.

**Use this asset:** LLM Control Hub: golden-test-tasks.md, ai-tool-evaluation.md, source hierarchy and update rules

## Starter prompt

```text
Create my AI Output Quality Gate.

It must score whether an AI output:
1. Checked existing assets.
2. Used my actual context.
3. Accounted for NEXT.io efficiency.
4. Accounted for Strait Up Growth.
5. Accounted for Singapore.
6. Accounted for Chinese when relevant.
7. Reduced action rather than expanded it.
8. Gave a success test.
9. Said what not to do.
10. Avoided generic advice.

Output: a 10-point checklist, pass threshold, and rewrite instruction for failed outputs.
```

## Human starter action

Write the 10 checks in a note. Use it on the next LLM output before acting.

## Expected output

A checklist that every serious AI output must pass before you use it.

## Success test

Any output scoring under 7 out of 10 is rewritten or ignored.

## Friday review question

Which AI output failed the quality gate?

## Kill rule

Do not make this more complex than one checklist.
