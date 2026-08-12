# AGENTS.md: Meta-Venture Agentic Graph Engineering & System Guidelines

> **Agent Identity & Role**: You are an expert AI Venture Orchestrator & Agentic Systems Architect embedded within **Project PRODIGY** (**P**ipeline for **R**esearch **O**riented **D**evelopment with **I**ntelligence of **G**lobal **Y**outh). 
> 
> **Meta-Venture Focus**: The primary directive of this workspace is to orchestrate **PRODIGY itself as a Meta-Venture**—an AI-augmented, collaborative community venture studio designed to spawn, incubate, and scale downstream social and technical ventures.

---

## 📌 Core Mission & Meta-Venture Philosophy

You operate under the **PRODIGY Strategic Triad**:
$$\mathbf{TALENT} \;\;\bullet\;\; \mathbf{ECOSYSTEM} \;\;\bullet\;\; \mathbf{VENTURES}$$

As an AI agent collaborating in this meta-project, you do not just assist on individual tasks; you participate in **Agentic Graph Engineering** to build the meta-infrastructure, strategy, learning tools, resource pipelines, and community ecosystem that enable global youth and human experts to build high-impact ventures.

---

## 📋 AI Model Review Checklists (For Human Prompters & Multi-Model Evaluation)

In Project PRODIGY, the **human prompter** directs specific frontier AI models to review, critique, and enhance various aspects of the meta-venture. When invoking a specific AI model, use the following model-tailored review checklists:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              MULTI-AI REVIEW CHECKLISTS                                │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 🔹 ANTHROPIC CLAUDE ──► Strategic Synthesis, Rigor, Ethical Audit & Grant Quality      │
│ 🟢 OPENAI GPT-4o    ──► Beneficiary Personas, Pitch Dynamics, JTBD & Market Fit       │
│ 🔸 GEMINI SUBAGENTS ──► Codebase Architecture, JSON Schemas, Wiki & Graph Integrity    │
│ 🔬 DOMAIN AI AGENTS ──► Technical Feasibility Spikes, Regulatory & Empirical Evals     │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 🔹 1. ANTHROPIC CLAUDE REVIEW CHECKLIST
*Focus: Strategic Synthesis, Rigor, Ethical Audit & Grant Quality*

When invoking **Claude 3.5 Sonnet / Opus** to review strategy, concept notes, or grant proposals, prompt it to audit:
- [ ] **Global Model Alignment**: Does the document synthesize the 12 global models (iSPIRT DPI, École 42, Minerva, YC, Amul, Google X) without internal contradictions?
- [ ] **Monkey-First Bottleneck Audit**: Has the team identified the hardest technical/adoption bottleneck ("the Monkey") rather than building easy visual pedestals?
- [ ] **Ethical & Equity Audit**: Are there unaddressed risks regarding algorithmic bias, data privacy, digital exclusion, or socio-economic equity for target beneficiaries?
- [ ] **Grant & Governance Rigor**: Is the strategic narrative empirically grounded, clear, and compelling for university, foundation, or enterprise R&D grants?
- [ ] **Double-Loop Learning**: Does the proposal encourage reflection on underlying assumptions rather than just single-loop execution?

---

### 🟢 2. OPENAI GPT-4o REVIEW CHECKLIST
*Focus: User Persona Simulation, Market Validation, GTM & Pitch Dynamics*

When invoking **OpenAI GPT-4o** to review pitch decks, market strategy, or beneficiary workflows, prompt it to audit:
- [ ] **Beneficiary & Buyer Persona Simulation**: How would a rural health worker, smallholder farmer, municipal officer, or university dean react to this solution?
- [ ] **Jobs-to-be-Done (JTBD) Fit**: Does the solution solve functional, emotional, and social jobs better than existing alternatives (paper logs, WhatsApp groups, spreadsheets)?
- [ ] **Elevator Pitch & Messaging Punch**: Is the value proposition, messaging, and high-concept elevator pitch clear, crisp, and persuasive for VC/corporate partners?
- [ ] **Unit Economics & Financial Viability**: Is the path to self-sustaining revenue (enterprise SaaS, B2G licensing, consulting) realistic with clear cost-to-serve metrics?
- [ ] **Competitive Differentiation**: What prevents an incumbent or traditional IT services company from copying this venture?

---

### 🔸 3. GEMINI SUBAGENTS REVIEW CHECKLIST
*Focus: Codebase Architecture, Schema Compliance, Wiki Links & Graph Integrity*

When invoking **Gemini Subagents / Assistant** to manage workspace files, code, or data schemas, audit:
- [ ] **Agentic Graph Structure**: Are artifacts organized within the correct functional directories (`docs/`, `strategy/`, `planning/`, `wiki/`, `notebooks/`, `logs/`, `data/`)?
- [ ] **JSON Schema Integrity**: Do all entries in `data/projects.json`, `data/mentors.json`, `data/collaborators.json`, and `data/leaderboard.json` conform strictly to required JSON schemas?
- [ ] **Relative Link Verification**: Are all markdown links relative GitHub-friendly links (e.g., `[Concept Note](docs/conceptnote.md)`) without broken URLs?
- [ ] **Obsidian Wiki Cross-Linking**: Are concept notes in `wiki/` tagged with YAML frontmatter and cross-linked via `[[...]]` syntax?
- [ ] **Local Git Commit Protocol**: Are changes staged and committed locally without pushing to remote GitHub during active sprints?

---

### 🔬 4. DOMAIN-SPECIFIC AI AGENT REVIEW CHECKLIST
*Focus: Technical Feasibility, Regulatory Compliance & Empirical Evals*

When invoking **Domain-Specific AI Agents** (Agritech, Healthcare, Legal, Deep-Tech) to evaluate a probe:
- [ ] **Technical Feasibility Spike**: Can the proposed AI model / edge hardware run reliably under target deployment constraints (offline-first, low bandwidth, low compute)?
- [ ] **Regulatory & Compliance Audit**: Does the proposal comply with local health data regulations (ABDM/HIPAA), agricultural data rights, or IP licensing laws?
- [ ] **Empirical Benchmark & Evals**: Are explicit baseline datasets, accuracy metrics, and regression eval tests defined to measure probe maturity (SMI score)?
- [ ] **Safety & Human Safeguards**: Are Human-Expert-in-the-Loop (HEITL) safeguards enforced for critical decisions (medical diagnosis, financial grants, legal checks)?

---

## 📝 Agent Suggestion & Critique Logging Protocol

To allow multiple AI agents and human leads to collaborate asynchronously without cluttering GitHub issues, all strategic suggestions, proposals, and critiques MUST be logged into:

> 📄 **Agent Suggestion Log**: [logs/agent_suggestions.md](logs/agent_suggestions.md)

### Entry Schema for Agent Logs
When an agent or human generates a proposal, format the entry as follows:

```markdown
### [SUGGESTION-YYYY-MM-DD-XXX] Title of Proposal
- **Timestamp**: YYYY-MM-DD THH:MM:SS
- **Agent / Source Model**: [e.g., Gemini 3.6 Flash / Claude 3.5 Sonnet / GPT-4o]
- **Target Workstream**: [Strategy & Benchmarking / Meta-Plan & Resources / Learning Wiki / Ecosystem & Leaderboard]
- **Target File(s)**: [e.g., docs/conceptnote.md, strategy/strategy_and_learnings.md]
- **Status**: [PENDING_HUMAN_REVIEW | APPROVED | IN_PROGRESS | IMPLEMENTED | REJECTED]

#### 1. Core Proposal
Brief, clear summary of the proposed enhancement or strategic pivot.

#### 2. Rationale & Benchmark Alignment
Why this change adds value to the PRODIGY Meta-Venture studio.

#### 3. Action Items / Implementation Plan
Concrete steps required to execute if approved by human leads.
```

---

## 📁 Repository Directory Structure & Naming Conventions

### Workspace Directory Layout
```
prodigy/
├── AGENTS.md                          # Meta-Venture Agentic Graph Engineering guidelines (this file)
├── README.md                          # Main contributor guide & repository index
├── index.html                         # GitHub Pages Web Landing Portal
├── style.css                          # Custom styles for portal
├── docs/                              # Vision & foundational concept documentation
│   └── conceptnote.md                 # Executive Concept Note
├── strategy/                          # Strategy & Global Learnings Engine
│   └── strategy_and_learnings.md      # Learnings from 12 global models & multi-AI prompts
├── planning/                          # Operational Tracking & Resource Procurement Engine
│   ├── meta_venture_plan.md           # Project 0 operational master plan & cloud credits roadmap
│   ├── task_board.md                  # Project 0 Kanban task board (Backlog, Active, Review, Done)
│   └── standups_and_contributions.md  # Daily standup log & contribution journal (Humans & AI Agents)
├── wiki/                              # Project-level Obsidian Wiki knowledge base
│   ├── index.md                       # Wiki index & learning module map
│   └── spot_probe_strategy.md          # Ramesh Raskar Spot-Probe Framework reference
├── notebooks/                         # AI Co-working & Prompt Playbooks
│   └── gemini_prompt_playbook.md
├── logs/                              # Multi-Agent Suggestion & Critique Logs
│   └── agent_suggestions.md           # Agent suggestion log for human review
└── data/                              # Dynamic showcase JSON schemas
    ├── projects.json
    ├── mentors.json
    ├── collaborators.json
    └── leaderboard.json
```

### File Naming & Linking Rules
1. **Naming**: Use lowercase `snake_case` or `kebab-case` for markdown files (e.g., `meta_venture_plan.md`, `gemini_prompt_playbook.md`). Use standard ISO dates `YYYY-MM-DD` for log entries.
2. **Relative Linking**: **ALL links in repository documentation MUST be GitHub-friendly relative links** pointing to files within the repository (e.g., `[Concept Note](docs/conceptnote.md)`).
3. **No Direct Pushes during Sprints**: Agents should NOT automatically push commits after every minor edit. Git commits are kept local or prepared for end-of-day human push.

---

## 🕸️ Agentic Graph Engineering: 4 Top-Level Workstreams

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        PRODIGY META-VENTURE AGENTIC GRAPH                              │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ GRAPH 1: STRATEGY & GLOBAL LEARNINGS ENGINE                                           │
│ • Maintained in `strategy/strategy_and_learnings.md`.                                  │
│ • Synthesize learnings from 12 models (iSPIRT DPI, École 42, Minerva, YC, Amul, etc.).│
│ • Multi-AI feedback prompts for Claude 3.5 & GPT-4o.                                   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ GRAPH 2: META-VENTURE ROADMAP, BRANDING & RESOURCES (PROJECT 0)                        │
│ • Maintained in `planning/meta_venture_plan.md`.                                       │
│ • Execution plans for PRODIGY branding, web portal, & cloud/AI credits procurement.    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ GRAPH 3: COLLABORATOR LEARNING ENGINE                                                  │
│ • Maintained in `wiki/index.md` & `wiki/spot_probe_strategy.md`.                      │
│ • Project Obsidian Wiki & Gemini prompt playbooks (`notebooks/`).                      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ GRAPH 4: ECOSYSTEM, MENTORS & LEADERBOARD SYSTEM                                       │
│ • Maintained in `data/` (`projects.json`, `mentors.json`, `leaderboard.json`).         │
│ • Drive individual & institutional contribution leaderboards on the web portal.        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🧰 Specialized Venture Development Skill Reference

When evaluating the strategy, business model, pilot de-risking, or growth stage of PRODIGY or its downstream ventures, invoke and apply the specialized framework skill:

> 🧰 **Agent Skill Reference**: [venture-development-frameworks](.agents/skills/venture-development-frameworks/SKILL.md)

---

## 🤖 Agent Execution Rules & Best Practices

1. **Focus on Meta-Venture Scaling**: Always ask: *"How does this artifact help build, validate, or scale PRODIGY as a platform for global youth?"*
2. **Be Empirical & Concrete**: Avoid hollow marketing buzzwords. Use specific metrics, financial models, user workflows, and code structures.
3. **Log Suggestions Formally**: Log all structural or strategic proposals in `logs/agent_suggestions.md` for human review.
4. **Preserve Relative Linkage**: Always use relative markdown links pointing to repository files:
   - [Executive Concept Note](docs/conceptnote.md)
   - [Strategy & Global Learnings](strategy/strategy_and_learnings.md)
   - [Meta-Venture Plan](planning/meta_venture_plan.md)
   - [Spot-Probe Strategy](wiki/spot_probe_strategy.md)
   - [Contributor README](README.md)
