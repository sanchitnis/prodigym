---
name: lint-and-integrity
description: Run health checks, schema audits, orphan page detection, and link integrity verification across the 5 Cognitive Memory tiers of the Second Brain wiki. Identifies ungrounded claims, missing memory_tier fields, stale pages, and broken [[wiki-links]]. Trigger whenever the user asks to "lint the wiki", "check wiki health", "find orphan pages", or "audit knowledge graph".
---

# Lint & Integrity Skill (Cognitive Memory Edition)

Maintains the structural integrity, freshness, and analytical reliability of the Second Brain Wiki across all five **Cognitive Memory Tiers** (`episodic`, `semantic`, `reflective`, `working`, `procedural`).

## Audit Checks

1. **Cognitive Tier & Frontmatter Verification**:
   - Check that all markdown files in `wiki/` contain valid YAML frontmatter matching `references/taxonomy.md` with:
     - `memory_tier` (`episodic` | `semantic` | `reflective` | `working` | `procedural`)
     - `type`, `domains`, `created`, `last_updated`
2. **Orphan & Broken Link Detection**:
   - Identify pages across cognitive tiers that have 0 inbound links or 0 outbound links.
   - Detect broken `[[wiki-links]]` referencing non-existent files.
3. **Traceability & Grounding Audit**:
   - Flag reflective perspectives, concepts, or working primers that do not cite at least one source in `wiki/semantic/sources/` or an episode in `wiki/episodic/meetings/`.
4. **Episodic Integrity Audit**:
   - Ensure all sessions in `wiki/episodic/meetings/` are properly indexed in `wiki/episodic/meetings/ai-meetings-overview.md`.
   - Verify that Google Drive recording links are reachable and valid.
5. **Index Coherence**:
   - Verify that every file in `wiki/` is cataloged in `index.md` under its respective Cognitive Memory Pillar.

## Output Report
Generate a clean markdown report listing:
- 🔴 Critical Issues (Broken links, invalid frontmatter or missing `memory_tier`).
- 🟡 Quality Warnings (Orphan pages, ungrounded claims, missing index entries).
- 🟢 Health Summary Statistics (Total nodes per cognitive tier, link density, domain distribution).
