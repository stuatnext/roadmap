# Build one pricing scorecard for a live NEXT.io product

This is a prompt sequence, not one giant prompt. Run one prompt at a time. Do not paste this whole file into an LLM unless you want a task brief.

**Best model:** ChatGPT Deep Research  
**Fallback:** Gemini Deep Research  
**Asset to use:** Commercial Director Advisory Board

**Task goal:** One product has a defensible pricing view based on value, scarcity, demand, margin and delivery risk.

**Success test:** One scorecard completed. One data gap identified.

**Privacy rule:** Use anonymised examples. Do not paste confidential personal data, client data, employee performance details, compensation data, emails, CRM exports or sensitive commercial information into any external tool unless approved and safe.

---

## Prompt 1: Capture the raw situation

```text
Use ChatGPT Deep Research. If this needs document tone, long writing, or Microsoft 365 context, use Gemini Deep Research.

I am working on this roadmap task: Build one pricing scorecard for a live NEXT.io product.

Why it exists from my questionnaire answers:
You said pricing, product strategy, and setting revenue targets are where you feel most out of your depth, and that pricing relies too much on instinct.

The live facts are below. They may be messy:
[paste notes, examples, links, data, meeting notes, screenshots, or rough thoughts]

First, do not solve anything. Create a clean capture of the situation.

Output:
1. facts
2. assumptions
3. missing information
4. risks
5. decisions needed
6. what not to overbuild

Keep it sharp. Do not give generic advice.
```

## Prompt 2: Diagnose and prioritise

```text
Using the captured situation below:
[paste output from Prompt 1]

Diagnose the root problem for this task:
Problem: Pricing confidence is fragile.
Cause: You lack a repeatable pricing defence model tied to value, scarcity, margin and proof.

Give me:
1. the real problem in one sentence
2. the smallest useful version
3. the full version only if needed
4. top 3 risks
5. one recommended next action within 48 hours
6. one thing I should not do

Use this asset if useful: Commercial Director Advisory Board.
Do not invent facts. Mark assumptions clearly.
```

## Prompt 3: Build the task output

```text
Build the output for this roadmap task.

Task: Build one pricing scorecard for a live NEXT.io product
Required output: One product has a defensible pricing view based on value, scarcity, demand, margin and delivery risk.
Minimum version: Score one product across five criteria and write one pricing defence paragraph.
Full version: One product has a defensible pricing view based on value, scarcity, demand, margin and delivery risk.

Use the diagnosis below:
[paste output from Prompt 2]

Create the output in a format I can use immediately.

Rules:
1. Be specific to NEXT.io, Strait Up Growth, Singapore, AI leverage, Chinese, or my career where relevant.
2. Reduce action, do not expand it.
3. Include only what I need to act.
4. Add a clear success test.
5. Add a kill rule if the output gets bloated.
```

## Prompt 4: Extract reusable outputs

```text
Using the task output below:
[paste output from Prompt 3]

Extract reusable outputs so this task feeds the wider roadmap.

Create sections:
1. immediate action
2. reusable asset created
3. future scheduled task candidate
4. Claude Cowork candidate
5. live artifact candidate
6. automation candidate
7. future roadmap task
8. park or kill recommendation

Capture separate reusable blocks: decision memo, scorecard, assumptions log, missing-data list, objection scripts for Pierre/Ana/Will, and a reusable commercial framework.

Only mark something automation-ready if the manual workflow is repeatable, has a trigger, input, owner, output, and success test.
```

## Prompt 5: Create the action script or implementation steps

```text
Using the reusable outputs below:
[paste output from Prompt 4]

Create the immediate implementation plan.

Give me:
1. one action to take in the next 48 hours
2. exact script, message, checklist, or first build step
3. where to save the output
4. what to track
5. what to tell Friday Review

Keep it short. Do not create another plan.
```

## Prompt 6: Review and feed forward

```text
Here is what happened after I attempted this task:
[paste what you did, what worked, what failed, any replies, any blockers]

Review against this success test:
One scorecard completed. One data gap identified.

Answer:
1. complete, repeat, park, or kill?
2. what changed in the real world?
3. what output should feed the next roadmap task?
4. what should become a scheduled task, live artifact, Cowork workflow, automation spec, or future prompt?
5. what is my next action?

Keep the final answer under 150 words.
```

---

## How to use the sequence

Run the prompts in order. Skip a later prompt only if the previous output proves the task should be parked or killed. Save useful outputs in the task notes before marking complete.
