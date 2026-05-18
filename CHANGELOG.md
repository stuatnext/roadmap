# Changelog

## V2 guided builder

Changed the app from a roadmap view into a guided build system.

### Changed

- Replaced task overview flow with one-task, one-step build mode.
- Added step-level model and source control.
- Added current-step prompt copying.
- Added artifact source specs inside build tasks.
- Added task-level output capture.
- Added queue preview, parked tasks and killed tasks as collapsible panels.
- Added weekly review as a queue control checkpoint.

### Why

The previous app still asked Stuart to decide whether to use the command view, sprint view, or prompt view.

V2 removes that friction.

It answers one question:

What do I build next, and exactly how do I build it?


## 2026-05-18 - V2.1 live artifact + scheduled task build prompts

- Rewrote the five P1 live artifact prompt files as guided build sequences.
- Added source-pack instructions per artifact to avoid uploading irrelevant ZIPs.
- Added Claude Scheduled Task setup prompts with supported cadence only: Hourly, Daily, Weekdays, Weekly.
- Added scheduled task feed logic: scheduled output becomes evidence/import block for the Live Artifact.
- Added automation-readiness prompts as parked specs only after four proven cycles.
- Updated model router with Claude Scheduled Tasks.
- Updated task descriptions so P1 builds create artifact, scheduled task, manual test and parked automation spec.
