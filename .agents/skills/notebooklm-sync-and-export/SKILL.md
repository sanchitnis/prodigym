---
name: notebooklm-sync-and-export
description: Create, curate, and maintain bridge packs for Google NotebookLM within the Working Memory tier (wiki/working/notebooklm/). Prepares focused source packs from the Second Brain for upload to NotebookLM, creates audio overview / podcast script blueprints, generates NotebookLM grounding prompts, and ingests NotebookLM synthesis digests back into the wiki. Trigger whenever the user asks to "link to NotebookLM", "prepare a NotebookLM source pack", "generate audio overview notes", "sync with NotebookLM", or "export study guide to NotebookLM".
---

# NotebookLM Sync & Export Skill (Working Memory Edition)

This skill acts as the bridge between this persistent **Obsidian Second Brain** and **Google NotebookLM**, operating within the **Working Memory tier** (`wiki/working/notebooklm/`). It leverages NotebookLM's multi-source grounding and Audio Overview (podcast generation) capabilities while preserving the long-term, cross-linked knowledge graph in this repository.

## Capabilities & Workflows

### 1. Curate Source Packs for NotebookLM (`wiki/working/notebooklm/<slug>.md`)
When preparing a dedicated NotebookLM notebook on a specific topic (e.g., *Indian Sovereign Compute & Semiconductor Geopolitics*):
- Select relevant raw files from `raw/`, semantic concepts from `wiki/semantic/concepts/`, and seminar notes from `wiki/episodic/meetings/`.
- Create a bridge page in `wiki/working/notebooklm/<slug>.md`:
  - Frontmatter: `memory_tier: working`, `type: notebooklm`.
  - NotebookLM URL / Workspace link.
  - Included sources and timestamps.
  - Recommended system grounding prompts for NotebookLM chat.

### 2. Audio Overview / Deep Dive Podcast Blueprints
To prepare or document NotebookLM Audio Overviews:
- Generate structured prompt guides and source highlights to shape NotebookLM's two-host dialogue.
- Document transcript highlights, key debates covered, and timestamps.

### 3. Bi-Directional Ingestion
- Ingest valuable summaries, briefing documents, or Q&A transcripts generated inside NotebookLM back into this repository as source nodes in `wiki/semantic/sources/notebooklm-<slug>.md` or synthesis nodes in `wiki/reflective/synthesis/`.
- Ensure all insights are tagged with `memory_tier` and cross-linked with `[[wiki-links]]` to maintain graph coherence.
- Update `index.md` and `log.md`.
