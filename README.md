# Stuart One Roadmap

A private, GitHub-ready roadmap app for Stuart Crowley.

This is a single-task execution system. It is not a dashboard, prompt dump, or generic personal productivity tool.

## How to use

1. Open `index.html` through GitHub Pages or a local server.
2. Leave scope as `All sprints`, or choose one sprint if you need focus.
3. Complete the task shown on screen.
4. Follow the steps in order: human-first action, asset, model, prompt sequence, output, success test.
5. Run the prompt sequence one prompt at a time. Do not paste the full prompt file into an LLM.
6. Save useful outputs in the task notes.
7. Mark the task complete, park it, or kill it.
8. The next task appears automatically.
9. Use the review export when you want to check progress or choose what to repeat.

## Prompt sequence rule

Each task prompt file is now a sequence.

Run:

1. capture
2. diagnose
3. build the output
4. extract reusable outputs
5. take action
6. review and feed forward

Some tasks include extra prompts for scheduled tasks, Claude Cowork workflows, live artifacts, or automation specs.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

1. Create a private GitHub repo.
2. Upload this folder.
3. Go to Settings, Pages.
4. Deploy from the root folder.

## Core rule

One roadmap. One current task. One prompt step at a time.

## Privacy

Do not store sensitive NEXT.io, client, CRM, staff or compensation data in this repo. See `docs/privacy-rules.md`.

## For future AI tools

Read `AI_CONTEXT.md` before modifying this repo.
