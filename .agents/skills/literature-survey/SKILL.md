---
name: literature-survey
description: Perform systematic, multi-source literature surveys across academic journals, institutional whitepapers (UNESCO, OECD, NITI Aayog), and empirical research. Discovers literature, rates sources across a standardized 4-factor rubric (Relevance, Depth, Source Quality, Actionability), downloads/archives full texts into raw/literature/, creates grounded atomic claim notes in wiki/semantic/sources/, and compiles structured literature review matrices for project tracks. Trigger whenever the user asks to "do a literature survey", "survey academic papers", "rate literature on X", or "download and review sources for project Y".
---

# Literature Survey Skill (Cognitive & Evaluative Edition)

This skill operationalizes rigorous, multi-source academic and institutional literature surveys for the **JP AI Future Study Group**. It ensures that every project deliverable is anchored in verifiable, high-quality empirical evidence rather than speculative commentary.

---

## 🎯 The 4-Stage Literature Survey Protocol

```
 [1. Search & Discovery]
       │ (Academic DBs, Policy Whitepapers, University Repositories)
       ▼
 [2. Multi-Factor Quality Rating]
       │ (Relevance, Depth, Source Quality, Actionability)
       ▼
 [3. Archiving & Ingestion]
       │ (Download text to raw/literature/ + Create wiki/semantic/sources/<slug>.md)
       ▼
 [4. Project Matrix & Synthesis]
       │ (Generate project literature-survey.md & inform spec.md / draft.md)
```

---

## 📊 1. The Standardized 4-Factor Evaluation Rubric

Every surveyed document is rated on a **1 to 5 scale** across four distinct dimensions:

| Dimension | Weight | Definition & Scoring Criteria |
| :--- | :---: | :--- |
| **Relevance** | 30% | **5**: Directly addresses the exact target audience, problem, and methodology.<br>**3**: Tangentially related (e.g., covers university students instead of high school, or general tech).<br>**1**: Superficial or irrelevant keyword match. |
| **Depth** | 25% | **5**: Robust empirical dataset, longitudinal findings, formal cognitive/learning models.<br>**3**: Well-reasoned observational survey or qualitative case study.<br>**1**: Superficial blog post, opinion editorial, or marketing fluff. |
| **Source Quality** | 25% | **5**: Premier peer-reviewed journal (Nature, IEEE, Springer, ACM), top global body (UNESCO, OECD, World Bank), or leading research university (Stanford, MIT, Harvard, IIT).<br>**3**: Established think-tank, industry consortium, or reputable conference.<br>**1**: Unreviewed self-published article, vendor promotional whitepaper. |
| **Actionability** | 20% | **5**: Contains concrete lesson plans, prompt templates, assessment rubrics, or policy frameworks that can be directly deployed in the classroom.<br>**3**: Conceptual frameworks requiring significant human adaptation.<br>**1**: Purely diagnostic or negative critique with no actionable recommendations. |

### Composite Score Formula:
$$\text{Composite Score} = (0.30 \times \text{Relevance}) + (0.25 \times \text{Depth}) + (0.25 \times \text{Source Quality}) + (0.20 \times \text{Actionability})$$

- **Tier 1 (4.2 – 5.0)**: *Foundational Literature* — Must be cited extensively and used to structure project specs.
- **Tier 2 (3.2 – 4.1)**: *Supporting Evidence* — Used for comparative analysis and validation.
- **Tier 3 (< 3.2)**: *Marginal* — Excluded or cited with caveats.

---

## 📥 2. Archiving & Grounding Workflow

For every surveyed piece of literature with a Composite Score $\ge 3.2$:

1. **Download / Preserve Raw Copy**:
   - Save full markdown text, summary excerpt, or PDF in `raw/literature/<slug>.<ext>`.
2. **Create Semantic Source Sheet**:
   - Save atomic summary in `wiki/semantic/sources/<slug>.md`.
   - Include standard frontmatter with the rating block:
     ```yaml
     ---
     memory_tier: semantic
     type: source
     domains: [talent-education, ethics-society]
     tags: [literature-survey, empirical, peer-reviewed]
     literature_ratings:
       relevance: 5
       depth: 4
       source_quality: 5
       actionability: 5
       composite_score: 4.7
     created: YYYY-MM-DD
     ---
     ```
3. **Compile Synthesis Matrix**:
   - Populate `projects/<project-slug>/literature-survey.md` with the comparative matrix and pedagogical takeaways.
