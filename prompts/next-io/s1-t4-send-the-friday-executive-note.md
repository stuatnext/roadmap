# Send the Friday Executive Note

This is a prompt sequence, not one giant prompt. Run one prompt at a time. Do not paste this whole file into an LLM unless you want a task brief.

**Best model:** ChatGPT Project  
**Fallback:** Claude Chat or Project  
**Asset to use:** Stuart Executive Growth System

**Task goal:** A short note showing progress, risk, decision needed, blocker and next focus.

**Success test:** One executive note sent or templated.

**Privacy rule:** Keep confidential names, client data, internal documents and personal data out of external tools unless the tool is approved and the data is safe to share.

---

## Prompt 1: Capture the raw situation

```text
Use ChatGPT Project. If this needs document tone, long writing, or Microsoft 365 context, use Claude Chat or Project.

I am working on this roadmap task: Send the Friday Executive Note.

Why it exists from my questionnaire answers:
You said Pierre and Ana need better communication from you, you are remote, and you need to stay top of mind as a leader rather than an executional fixer.

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
Problem: Senior leaders do not see a clean weekly commercial picture.
Cause: Remote work and reactive updates make your leadership less visible.

Give me:
1. the real problem in one sentence
2. the smallest useful version
3. the full version only if needed
4. top 3 risks
5. one recommended next action within 48 hours
6. one thing I should not do

Use this asset if useful: Stuart Executive Growth System.
Do not invent facts. Mark assumptions clearly.
```

## Prompt 3: Build the task output

```text
Build the output for this roadmap task.

Task: Send the Friday Executive Note
Required output: A short note showing progress, risk, decision needed, blocker and next focus.
Minimum version: Complete the smallest version that creates a real-world action within 48 hours.
Full version: A short note showing progress, risk, decision needed, blocker and next focus.

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

Capture separate reusable blocks: owner map, script, escalation rule, meeting/action note, scheduled reminder, and future automation or artifact candidate.

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
One executive note sent or templated.

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
