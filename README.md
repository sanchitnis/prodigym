# PROJECT PROdiGYM: Human-AI Collaboration Meta-Venture & Brain GYM

<div align="center">

![Project Status](https://img.shields.io/badge/Project_Status-Active_Meta--Venture-6366f1?style=for-the-badge&logo=rocket&logoColor=white)
![Brain GYM](https://img.shields.io/badge/Brain_GYM-4_C_Skills_%26_HEITL-06b6d4?style=for-the-badge&logo=target&logoColor=white)
![AI Engine](https://img.shields.io/badge/AI_Engine-Gemini_%7C_Claude_%7C_GPT--4o-a855f7?style=for-the-badge&logo=openai&logoColor=white)
![Frontend Stack](https://img.shields.io/badge/Frontend-React_18_%7C_Vite_%7C_Tailwind-38bdf8?style=for-the-badge&logo=react&logoColor=white)
![Backend Stack](https://img.shields.io/badge/Backend-Supabase_%7C_Google_OAuth-10b981?style=for-the-badge&logo=supabase&logoColor=white)
![Deployment](https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

> **WHAT:** **P**ipeline for **R**esearch **O**riented **D**evelopment with **I**ntelligence of **G**lobal **Y**outh for **M**ankind  
> **HOW:** *Building Our Common Future through Human + Augmented Intelligence — A Cognitive Brain GYM and Collaborative Meta-Venture Studio where you act as the BOSS of AI agents.*  
> **RESULTING IN (STRATEGIC TRIAD):**  
> $$\mathbf{TALENT} \;\;\bullet\;\; \mathbf{ECOSYSTEM} \;\;\bullet\;\; \mathbf{VENTURES}$$  
>  
> 📄 **Executive Charter**: [Executive Concept Note & Governance Charter](strategy/concept-note.md)  
> 🌐 **Web App & Face**: [web/ directory](web/) | [Vercel Deployment Guide](docs/vercel_deployment_guide.md)

---

## 📋 Table of Contents
- [🌟 Executive Overview: PROdiGYM & The Brain GYM](#-executive-overview-prodigym--the-brain-gym)
- [👥 Contributor & User Model: Two Distinct Roles](#-contributor--user-model-two-distinct-roles)
- [⚡ Project 0: Incubating, Deploying & Scaling PROdiGYM](#-project-0-incubating-deploying--scaling-prodigym)
- [🕸️ Agentic Graph Engineering: 4 Top-Level Workstreams](#%EF%B8%8F-agentic-graph-engineering-4-top-level-workstreams)
- [🚀 The Srujana 4-Stage Pathway & Mentoring Philosophy](#-the-srujana-4-stage-pathway--mentoring-philosophy)
- [🏆 Contribution Leaderboard & Showcase](#-contribution-leaderboard--showcase)
- [📁 Repository Directory Structure](#-repository-directory-structure)
- [🤝 Ecosystem Call & Registration](#-ecosystem-call--registration)
- [🔗 Quick Reference Links](#-quick-reference-links)

---

## 🌟 Executive Overview: PROdiGYM & The Brain GYM

**PROJECT PROdiGYM** (**P**ipeline for **R**esearch **O**riented **D**evelopment with **I**ntelligence of **G**lobal **Y**outh for **M**ankind) is a global collaborative human-AI meta-venture studio and cognitive **Brain GYM**.

As AGI automates routine coding and task execution, the primary danger is cognitive atrophy ("brain rot"). PROdiGYM functions as a high-intensity cognitive workout gym:
1. **Building Human-Centric Muscle**: Mastering the **4 Cs** (Critical Thinking, Communication, Collaboration, Creativity).
2. **Mastering the Core New Superpower**: Operating as a **Human Expert In The Loop (HEITL) — the BOSS of AI Agents** managing multi-agent loops and taking 100% human accountability for outputs.

---

## 👥 Contributor & User Model: Two Distinct Roles

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                             PROdiGYM CONTRIBUTOR ARCHITECTURE                          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. CORE REPOSITORY WORKSPACE (Project 0 — Meta-Venture Studio Engineering)             │
│    • Target: AI Venture Orchestrators, Systems Architects, Mentors & AI Subagents.     │
│    • Primary Workspace: Strategy, Planning, Wiki, Logs (`strategy/`, `planning/`, etc.)│
│    • Objective: Build, deploy, resource, and scale PROdiGYM itself as a Meta-Studio.   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 2. PUBLIC WEB APP (`web/` Directory — Deployed on Vercel)                              │
│    • Target: Students, Faculty, Founders, Institutional Hubs, CTOs, & Global Audience. │
│    • Technology: React 18, TypeScript, Vite, Tailwind CSS, Supabase & Google Auth.     │
│    • Objective: Audience communication, Brain GYM workouts, IP showcase, leaderboards. │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## ⚡ Project 0: Incubating, Deploying & Scaling PROdiGYM

The foundational project within this workspace is **Project 0**—the active effort to develop, resource, deploy, and scale **PROdiGYM itself**:

- 📋 **Project 0 Task Board**: [planning/task_board.md](planning/task_board.md) — Kanban board tracking backlog, active sprints, HEITL reviews, and completed milestones.
- 📝 **Daily Standups & Contributions**: [planning/standups_and_contributions.md](planning/standups_and_contributions.md) — Continuous daily progress log for human leads, student researchers, and AI subagents.
- ⚡ **Operational Master Plan**: [planning/meta_venture_plan.md](planning/meta_venture_plan.md) — 4-phase execution roadmap & AI compute credit grant strategy.

---

## 📁 Repository Directory Structure

```
prodigym/
├── web/                               # PROdiGYM Web Application (Vercel App)
│   ├── src/                           # React 18 + TypeScript + Tailwind source code
│   │   ├── components/                # UI primitives, layout, and home sections
│   │   ├── contexts/                  # AuthContext (Google OAuth via Supabase)
│   │   ├── lib/                       # Supabase client & utility functions
│   │   ├── pages/                     # Index, AuthCallback, MemberPortal, NotFound
│   │   └── types/                     # Database types and role interfaces
│   ├── package.json                   # Web app dependencies & build scripts
│   ├── vite.config.ts                 # Vite SWC build configuration
│   ├── tailwind.config.ts             # Tailwind CSS tokens & glassmorphism
│   ├── vercel.json                    # Vercel SPA routing and security headers
│   └── index.html                     # Web entry point
├── supabase/                          # Backend Database & Auth
│   └── schema.sql                     # PostgreSQL schema, RLS policies & auth triggers
├── strategy/                          # Strategy & Global Learnings Engine
│   ├── concept-note.md                # Executive Concept Note & Governance Charter
│   └── strategy_and_learnings.md      # Learnings from 12 global models
├── planning/                          # Operational Tracking & Resource Procurement
│   ├── meta_venture_plan.md           # Project 0 operational master plan
│   ├── task_board.md                  # Project 0 Kanban task board
│   └── standups_and_contributions.md  # Daily standup log & contribution journal
├── wiki/                              # Project Obsidian Wiki knowledge base
│   ├── index.md                       # Wiki index & learning module map
│   └── spot_probe_strategy.md         # SPOT-PROBE framework reference
├── outreach/                          # Ecosystem Outreach & Communication Templates
│   ├── outreach_plan.md               # Master Outreach Plan & Persona Strategy
│   └── templates/                     # WhatsApp, Email, & LinkedIn Templates
├── notebooks/                         # AI Prompt Playbooks & Co-working templates
├── logs/                              # Multi-Agent Suggestion & Critique Logs
│   └── agent_suggestions.md           # Agent suggestion log for human review
├── docs/                              # Detailed Guides & Deployment Playbooks
│   ├── vercel_deployment_guide.md     # Step-by-step Vercel deployment guide
│   ├── supabase_and_google_auth_setup.md # Supabase & Google OAuth setup guide
│   └── getting_started_guide.md       # Onboarding guide
├── AGENTS.md                          # Agentic Graph Engineering guidelines
├── vercel.json                        # Root Vercel build configuration
└── README.md                          # Repository documentation (this file)
```

---

## 🤝 Ecosystem Call & Registration

Whether you want to join as a student participant, mentor, academic hub, or corporate partner:
- 🌐 **Web App**: Run locally with `cd web && npm run dev` or deploy to Vercel.
- 📋 **Google Form Registration**: Managed directly by Initiative Lead **Dr. Sanjay Chitnis** (`sanjay.chitnis@gmail.com`).
- 📧 **Direct Contact**: `sanjay.chitnis@gmail.com`
