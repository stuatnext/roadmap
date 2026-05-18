# Stuart One Roadmap V2

A guided builder for Stuart's NEXT.io, Strait Up Growth, AI, Singapore and capability roadmap.

This is not a dashboard.

This is not a prompt archive.

This is a step-by-step build queue.

## How to use it

1. Open `index.html` through GitHub Pages or a local server.
2. Work on the one current build task shown.
3. Follow the build steps in order.
4. Run only the prompt shown for the current step.
5. Save useful output in the task notes box.
6. Mark the task complete, park it, or kill it.
7. Move to the next task.

## Local run

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Core rule

One task. One step. One prompt.

Do not paste a full prompt sequence into a model unless you intentionally want a task brief.

## What V2 changes

The app now behaves like a guided builder:

- one task visible at a time
- one build step visible at a time
- source and model control inside each step
- artifact source specs shown inside build tasks
- prompts shown step by step
- output capture per task
- weekly review as queue control
- parked and killed tasks stay accessible

## Privacy

Do not put confidential NEXT.io data, CRM exports, personal performance details, client details, compensation, subscriber-level data or sensitive commercial information into public repos or unapproved tools.

Use anonymised examples unless the tool and data handling are approved.


## Live Artifact build flow

For P1 artifact tasks, follow the prompt sequence in the current task. The intended build is:

1. Confirm source access and relevant knowledge pack.
2. Scan sources or import evidence.
3. Design the artifact behaviour.
4. Build the Claude Live Artifact.
5. Create the Claude Scheduled Task that feeds it.
6. Test with real or anonymised examples.
7. Park automation spec until four proven cycles.
8. Run Friday review and decide keep, revise, park or kill.

Claude Scheduled Tasks should use only supported cadence options: Hourly, Daily, Weekdays or Weekly. Do not assume custom cadences.
