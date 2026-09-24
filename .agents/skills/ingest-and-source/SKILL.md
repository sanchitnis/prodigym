---
name: ingest-and-source
description: Ingest articles, papers, policy drafts, interview transcripts, and meeting recordings into the Second Brain under the Cognitive Memory Architecture. Saves raw copies in raw/, creates atomic records in wiki/semantic/sources/ or wiki/episodic/, updates concepts, entities, perspectives, and comparisons, updates index.md, and logs the operation in log.md. Trigger whenever the user provides a URL, document, or asks to "file this", "add to sources", or "ingest".
---

# Ingest and Source Skill (Cognitive Memory Edition)

You are the knowledge archivist for the Second Brain. Your job is to ingest external information and translate it into atomic, grounded, and cross-linked knowledge nodes within the **Cognitive Memory Architecture**.

## Ingestion Workflow

1. **Classify Cognitive Tier**:
   - **Episodic Memory (`wiki/episodic/`)**: Use for dated seminars, study group sessions, interviews, talks, and meeting transcripts.
     - Destination: `wiki/episodic/meetings/<slug>.md` or `wiki/episodic/interviews/<slug>.md`.
     - Update the overarching schedule in `wiki/episodic/meetings/ai-meetings-overview.md`.
   - **Semantic Memory (`wiki/semantic/sources/`)**: Use for research papers, government gazettes, reports, benchmark results, and articles.
     - Destination: `wiki/semantic/sources/<slug>.md`.

2. **Preserve Raw Copy**:
   - If a local file, PDF, or ephemeral source is provided, ensure a copy is saved in `raw/<filename>`.
   - Never edit files inside `raw/`.

3. **Populate Frontmatter with Cognitive Metadata**:
   ```yaml
   ---
   memory_tier: semantic  # or episodic
   type: source          # or meeting, interview
   domains: [...]
   countries: [...]
   tags: [...]
   created: YYYY-MM-DD
   last_updated: YYYY-MM-DD
   source_count: 1
   ---
   ```

4. **Extract Atomic Grounded Claims**:
   - 2-4 sentence executive summary.
   - Key extracted factual claims, data points, metrics, and direct quotes.
   - Specific implications for India and human agency.

5. **Distribute & Cross-Link Across Memory Tiers**:
   - Link to `wiki/semantic/concepts/` (world knowledge).
   - Link to `wiki/semantic/entities/` (institutions and programs).
   - Link to `wiki/reflective/perspectives/` (dialectic debates).
   - Link to `wiki/working/learning/` (primers and curricula).
   - If a new claim contradicts existing wiki content: **Do not erase the old claim.** Document both claims with dates and citations, highlighting the divergence.

6. **Update Index & Log**:
   - Update `index.md` under the appropriate memory tier and domain.
   - Append an entry to `log.md`:
     `## [YYYY-MM-DD] ingest | <Source / Episode Title>` with what was created or updated.
