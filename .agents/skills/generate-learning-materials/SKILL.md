---
name: generate-learning-materials
description: Generate structured educational materials, primers, reading roadmaps, workshop syllabi, executive flash-briefs, case studies, and discussion guides into the Working Memory tier (wiki/working/learning/). Trigger whenever the user asks for "learning material on X", "create a syllabus", "write an executive primer", "make a study guide", or "build a workshop roadmap".
---

# Generate Learning Materials Skill (Working Memory Edition)

This skill turns the accumulated knowledge of the Second Brain into high-impact, pedagogical artifacts for workshops, think-tank working groups, university courses, and executive briefings stored in the **Working Memory tier** (`wiki/working/learning/`).

## Material Types & Structure

### 1. Executive Concept Primers (`wiki/working/learning/<slug>.md`)
- Frontmatter: `memory_tier: working`, `type: learning`.
- **Structure**:
  - Executive Overview (1-paragraph intuition).
  - Key Drivers & Mechanics (System diagrams / bullet points).
  - The Indian Context (DPI, policy landscape, demographics).
  - Open Debates & Tensions (linking to `[[perspective-slug]]`).
  - Recommended Reading & Primary Sources (`[[source-slug]]`).
  - Episodic Seminar Links (`[[ai-meetings-overview]]`).

### 2. Modular Curriculum & Syllabi (`wiki/working/learning/curriculum-<slug>.md`)
- Designed for 4-to-8 week reading groups or expert seminar series:
  - **Module Breakdown**: Week-by-week themes, core questions, required readings (linking to wiki pages), and seminar discussion prompts.
  - **Practical Exercises**: Hands-on policy memo drafting or technical evaluation exercises.

### 3. Scenario Analysis & Case Studies (`wiki/working/learning/case-<slug>.md`)
- Real-world or prospective future scenarios:
  - *Case Example*: "Deployment of Multilingual Medical Diagnostic AI in Rural Primary Health Centers in Uttar Pradesh".
  - *Dilemma*: Data privacy vs. life-saving access vs. liability in malpractice.
  - *Discussion Questions*: Key governance and technical questions for participants.

## Workflow
1. Identify the topic, target audience, and format needed.
2. Query existing wiki nodes (`index.md`, semantic concepts, reflective perspectives, episodic seminars).
3. Draft the material with rich Obsidian `[[wiki-link]]` connections.
4. Save file into `wiki/working/learning/<slug>.md`.
5. Update `index.md` under Working Memory and record the event in `log.md`.
