# Reclaim Leadership Time at NEXT.io

This is a prompt sequence, not one giant prompt. Run one prompt at a time. Do not paste this whole file into an LLM unless you want a task brief.

**Best model:** ChatGPT Project  
**Fallback:** Claude Chat or Project  
**Asset to use:** Stuart Executive Growth System

**Task goal:** A Leadership Time Reclaim Register that becomes source material for future roadmap tasks, scheduled tasks, live artifacts, and automations.

**Success test:** At least 5 tasks classified, 1 task redirected this week, and at least 2 future build candidates captured for the roadmap.

**Privacy rule:** Use anonymised examples. Do not paste confidential personal data, client data, employee performance details, compensation data, emails, CRM exports or sensitive commercial information into any external tool unless approved and safe.

---

## Prompt 1: Capture and classify

```text
I am creating a Leadership Time Reclaim Register for NEXT.io.

Here is my raw list of executional work, chasing, fixing, middleman tasks, CRM tasks, and ownership gaps from this week:

[paste messy list]

Classify each item into:
1. stop doing
2. delegate
3. standardise
4. schedule
5. build artifact
6. automate later
7. keep

For each item, give:
task
correct owner
why it should not sit with me
my retained role
recurring or one-off
risk if ignored

Do not write scripts yet.
Do not suggest automations yet.
Only classify.
```

## Prompt 2: Create the register

```text
Using the classified list below, create a Leadership Time Reclaim Register.

[paste classified list]

Use this table:
task currently landing on me
why this is a trap
correct owner
my retained role
standard required
recurring or one-off
first enforcement date
risk if not fixed

Keep it sharp.
Prioritise the 5 highest-leverage items.
```

## Prompt 3: Write boundary scripts

```text
Using this Leadership Time Reclaim Register:

[paste register]

Write practical redirect scripts for each task.

For each script, give:
1. soft version
2. direct version
3. escalation version

Tone:
clear, professional, firm, not passive aggressive.

Do not make me sound lazy.
Frame this as ownership clarity and commercial focus.
```

## Prompt 4: Create reusable future-build outputs

```text
Using this Leadership Time Reclaim Register:

[paste register]

Extract future build candidates into separate sections:
1. Scheduled task candidates
2. Claude Cowork candidates
3. Live artifact candidates
4. Automation candidates
5. Roadmap tasks
6. Kill list

For each candidate, include:
name
problem solved
trigger
input
output
owner
manual workflow needed first
success test
why now or why later

Only mark something automation-ready if the workflow is repeatable and clear.
```

## Prompt 5: Turn scheduled task candidates into scheduled task prompts

```text
Using these scheduled task candidates:

[paste scheduled task candidates]

Create ready-to-use scheduled task prompts.

For each one, include:
task title
frequency
prompt
what I should do when I receive it
success test

Keep each prompt under 120 words.
```

## Prompt 6: Turn live artifact candidates into artifact specs

```text
Using these live artifact candidates:

[paste artifact candidates]

Create a simple live artifact spec for each.

For each artifact, include:
purpose
user
fields
buttons
views
local storage needs
copy/export needs
what not to build
success test

Keep it simple.
No backend unless absolutely required.
```

## Prompt 7: Turn automation candidates into automation specs

```text
Using these automation candidates:

[paste automation candidates]

Create automation specs.

For each automation, include:
trigger
apps involved
input data
action steps
output
human approval gate
failure risk
privacy risk
manual test required before automation
success test

Do not build anything yet.
Only write the spec.
```

## Prompt 8: Friday review

```text
Here is my Leadership Time Reclaim Register and what happened this week:

[paste register]
[paste outcomes]

Review:
1. what I stopped owning
2. what I failed to stop owning
3. what should be delegated next
4. what should become a scheduled task
5. what should become a live artifact
6. what should be parked
7. what should be killed
8. one boundary I need to enforce next week

Keep it practical.
Give me only next week’s top 3 actions.
```

---

## How to use the sequence

Run the prompts in order. Skip a later prompt only if the previous output proves the task should be parked or killed. Save useful outputs in the task notes before marking complete.
