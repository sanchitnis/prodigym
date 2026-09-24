---
name: skill-certification-pipeline
description: Detect repeated human corrections across project drafts and reviews, extract concise rules and concrete examples, draft candidate agent skills, and route them to domain experts for formal certification before graduation. Trigger whenever the user says "turn this correction into a skill", "certify this standard", "audit repeated mistakes", or "create a project skill".
---

# Skill Certification Pipeline Skill

> "The gap for non-coding skills: code has a built-in check (it runs or it doesn't). A written standard doesn't — nothing stops a skill from encoding a subtly wrong rule until a domain expert certifies it's correct... A skill that skips the expert-review step is just an unverified assumption with a file extension."  
> — *[ai-native-project-playbook.md](../../../ai-native-project-playbook.md)*

---

## 🎯 When to Trigger

Activate this skill when:
1. A human reviewer makes the same correction twice across `review.md` ledgers or interactive sessions (e.g. style convention, citation format, definition of DPI, or policy nuance).
2. A domain expert wants to codify an institutional standard into a reusable agent playbook.
3. Conducting quarterly process reflections in `reflections/` to audit existing skills against standard changes.

---

## 🔁 The Certification Workflow

### 1. Identify the Pattern (Rule of Two)
- Isolate the exact issue being corrected (e.g., "Agent always assumes DPI means state-owned software instead of open protocols").
- Verify that this has occurred at least twice.

### 2. Draft the Candidate Skill Narrowly
- Create a candidate skill file under `.agents/skills/<skill-name>/SKILL.md` (or staging).
- Structure:
  - **The Core Rule**: 1–2 sentences stating what to do and what to avoid.
  - **Positive Example (Good)**: A concrete, realistic snippet demonstrating the correct behavior.
  - **Negative Example (Anti-pattern)**: The specific error commonly generated.
  - **Verification Check**: The exact test or question the agent should apply in Stage 4 (Review).

### 3. Route to Domain Expert Gate
- Present the candidate skill to the appropriate study group domain lead for explicit certification:
  - *Compute & Hardware*: Saurabh Bodas / Parag
  - *Vernacular AI & Education*: Rohan Katepallewar
  - *Labor & Economics*: Abhishek Suryawanshi
  - *LLM Internals & Safety*: Swanand Joshi
  - *Neuroscience & Cognition*: Dr. Abhishek Dedhe
  - *Geopolitics & China*: Mihir Shete
- Require explicit sign-off in frontmatter:
  ```yaml
  certified_by: "<Domain Expert Name>"
  certified_date: "YYYY-MM-DD"
  review_cycle: "Quarterly"
  status: "certified"
  ```

### 4. Deploy to Drafting (Build) & Verification (Test)
- Once certified, the skill is automatically referenced in `spec.md` and applied during Stage 3 (Build) and checked during Stage 4 (Test).
