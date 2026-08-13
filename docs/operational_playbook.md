# PRODIGY Operational Playbook (Cohort 1)

> **Philosophy**: Do things that don't scale. We will manually test our assumptions using standard tools before we build any complex software to automate them.

## The "Manual-First" Tech Stack
For our initial cohorts (10-15 students), we avoid complex bespoke platforms. We rely on:

1. **WhatsApp Groups**: For daily communication, instant feedback, and peer support.
2. **Google Sheets**: For tracking task completions, points, leaderboards, and basic project management.
3. **GitHub**: For maintaining this repository as our source of truth, managing tasks via issues/projects, and hosting the static website (GitHub Pages).
4. **Google Forms**: For intake, registration, and survey data collection.

## Standard Operating Procedure (SOP)

### 1. Onboarding
- Interested participants fill out the [Registration Form](https://docs.google.com/forms/d/e/1FAIpQLSf6CkQQXXr3306tPjUFi6nODpdLXT-F6uyFrLpoEcK5iBAa5Q/viewform).
- Core team reviews applications and adds accepted participants to the Cohort 1 WhatsApp Group.
- Participants are granted necessary access to GitHub and related shared resources.

### 2. Sprints & Tasks
- We operate in 1-2 week sprints.
- New micro-tasks (from the Community Backlog or Sprint Plan) are posted on GitHub and announced via WhatsApp.
- Participants claim tasks by commenting on GitHub or dropping a message in WhatsApp.

### 3. Review & Points
- Completed tasks are submitted by opening a Pull Request (PR) or submitting a link.
- Peer Mentors and Core Team review the submissions.
- Approved tasks earn points (tracked manually in Google Sheets). The leaderboard on the website (`data/leaderboard.json`) is updated weekly by a community volunteer.

### 4. Transition to Automation
- Only when a manual process breaks due to volume (the "Monkey First" bottleneck) will we consider automating it or building a custom tool.
- Any automation will be built collaboratively as a Stage 3/4 project by the community itself.
