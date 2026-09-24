---
name: collect-and-maintain-perspectives
description: Collect, organize, and maintain multi-stakeholder perspectives, dialectic matrices, pro-con debates, and expert spectrums across AI domains into the Reflective Memory tier. Trigger whenever the user asks for "perspectives on X", "debate around Y", "arguments for and against Z", or wants to analyze contested views among economists, technologists, sociologists, or policymakers.
---

# Collect and Maintain Perspectives Skill (Reflective Memory Edition)

This skill captures the rich, multi-disciplinary discourse on the future of humanity in the AI era. In matters of AI policy and societal transformation, consensus is rare; mapping the landscape of competing ideas into the **Reflective Memory tier** (`wiki/reflective/perspectives/`) is the primary intellectual goal.

## Perspective Framework

When analyzing any controversial, emerging, or policy topic:
1. **Identify the Core Dilemma**: Clearly articulate the trade-off or central question (e.g. *Will AI enable mass prosperity in India via Digital Public Infrastructure, or cause structural unemployment in IT/BPO services?*).
2. **Map the Spectrum of Stances**:
   - **Techno-Optimist / Accelerationist**: Emphasizes economic productivity, innovation leapfrogging, and rapid adoption.
   - **Pragmatic Governance / Safety**: Emphasizes regulatory guardrails, systemic risk mitigation, IP protection, and compliance.
   - **Labor, Equity & Human Rights**: Emphasizes worker displacement, algorithmic bias, digital divide, and public welfare.
   - **Sovereignty & Post-Colonial**: Emphasizes domestic compute, Indic language models, data sovereignty, and independence from foreign tech monopolies.
   - **Philosophical / Civilizational**: Emphasizes human agency, cultural preservation, meaning of work, and long-term existential considerations.
3. **Build or Update the Perspective Matrix (`wiki/reflective/perspectives/<slug>.md`)**:
   - Set YAML frontmatter: `memory_tier: reflective`, `type: perspective`.
   - Include a high-level comparison table: *Stance | Key Proponents | Core Premise | Criticisms | Relevance to India*.
   - Deep-dive sections detailing evidence, cited sources (`[[source-slug]]`), and key quotes.
   - **Synthesis & Horizons Section**: Identify areas of emerging consensus vs. fundamental irreconcilable trade-offs.
4. **Link Across Memory Tiers**:
   - Ensure the perspective page links to related semantic concepts (`wiki/semantic/concepts/`), entities (`wiki/semantic/entities/`), and episodic seminars (`wiki/episodic/meetings/`).
   - Update `index.md` under Reflective Memory and log in `log.md`.
