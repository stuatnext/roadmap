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

## How to use build prompts

For artifact tasks, do not paste the whole prompt file.

Run prompts in order:

1. Capture evidence.
2. Classify or diagnose.
3. Create the core output.
4. Extract reusable outputs.
5. Build or test the artifact.
6. Review and feed forward.

Each prompt states which model or tool to use and which sources to provide.
