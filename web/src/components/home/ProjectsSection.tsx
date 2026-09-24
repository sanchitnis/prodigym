import React from "react";
import {
  FolderGit2,
  FileCode2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  GitBranch,
  Terminal,
  BookOpen,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProjectsSection: React.FC = () => {
  const artifacts = [
    {
      step: "0",
      file: "0_context.md",
      stage: "Foundation",
      title: "Standing Project Context",
      desc: "Bedrock facts, domain background, institutional constraints, style guide, and citation standards. Read cold by AI and human before work begins.",
      badge: "border-slate-500/40 text-slate-300 bg-slate-500/10",
    },
    {
      step: "1",
      file: "1_intent.md",
      stage: "Envision",
      title: "Problem Statement & Audience",
      desc: "Capturing the raw opportunity, pain point, target stakeholders, and definition of done before any drafting commences.",
      badge: "border-blue-500/40 text-blue-300 bg-blue-500/10",
    },
    {
      step: "2",
      file: "2_spec.md",
      stage: "Scope",
      title: "Architecture & Non-Goals",
      desc: "The Spec Gate: Detailed document structure, target tone, evidence requirements, and explicit non-goals locked with human approval.",
      badge: "border-purple-500/40 text-purple-300 bg-purple-500/10",
    },
    {
      step: "3",
      file: "3_draft.md",
      stage: "Build",
      title: "First-Pass Synthesis & Draft",
      desc: "AI agents generate high-speed comprehensive drafts with atomic citations; human experts supply domain grounding and strategic nuance.",
      badge: "border-indigo-500/40 text-indigo-300 bg-indigo-500/10",
    },
    {
      step: "4",
      file: "4_review.md",
      stage: "Test",
      title: "Red-Team & Human Sign-off",
      desc: "Two-layer review: Automated fact/spec grounding check + Human Expert In The Loop (HEITL) judgment on ethics and political sensitivity.",
      badge: "border-rose-500/40 text-rose-300 bg-rose-500/10",
    },
    {
      step: "5",
      file: "5_final.md",
      stage: "Deploy",
      title: "Committed Deliverable",
      desc: "Polished, authoritative deliverable committed for institutional deployment, client delivery, or venture spin-off.",
      badge: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10",
    },
    {
      step: "6",
      file: "6_feedback.md",
      stage: "Iterate",
      title: "Field Impact & Next Loop",
      desc: "Real-world reception, comments, field outcomes, and the follow-up intent prompt that triggers the next project loop.",
      badge: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900/60 border-t border-b border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-4 backdrop-blur-md">
            <FolderGit2 className="h-3.5 w-3.5 text-cyan-400" />
            <span>AI-Native Project Execution Engine</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            The 0-Indexed <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Artifact Loop</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every project in PROdiGYM runs on committed, durable markdown files numbered sequentially (0 onwards). This guarantees that files appear in exact chronological and concept dependency order across terminals, IDEs, and Git repositories.
          </p>
        </div>

        {/* The 7 Artifact Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto mb-16">
          {artifacts.map((art) => (
            <Card
              key={art.file}
              className="border border-white/10 bg-slate-950/70 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <CardHeader className="space-y-2 pb-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${art.badge}`}>
                    Step {art.step} • {art.stage}
                  </span>
                  <FileCode2 className="h-4 w-4 text-slate-400" />
                </div>
                <CardTitle className="text-sm font-mono font-bold text-cyan-300">
                  {art.file}
                </CardTitle>
                <div className="text-xs font-bold text-white leading-snug">
                  {art.title}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-slate-300 leading-relaxed">
                  {art.desc}
                </p>
              </CardContent>
            </Card>
          ))}

          {/* Quick Launch Card */}
          <div className="rounded-2xl border border-dashed border-cyan-500/40 bg-cyan-950/20 p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Terminal className="h-4 w-4" />
                <span>Quick Scaffold</span>
              </div>
              <h4 className="font-heading font-bold text-white text-sm mb-1">
                Launch Your Project
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Copy <code>projects/_template-project/</code> to your new project slug and start by drafting <code>0_context.md</code> with your AI agent.
              </p>
            </div>
            <a
              href="https://github.com/sanchitnis/prodigym/tree/main/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-cyan-500/20"
            >
              <span>Explore Projects Repo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Playbook Link Banner */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-slate-950/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h5 className="font-heading font-bold text-white text-sm">
                AI-Native Project Playbook
              </h5>
              <p className="text-xs text-slate-300">
                Learn the division of labor between AI agents (speed, synthesis) and human experts (moral compass, domain authority).
              </p>
            </div>
          </div>
          <a
            href="https://github.com/sanchitnis/prodigym/blob/main/ai-native-project-playbook.md"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition-colors shrink-0"
          >
            Read Full Playbook
          </a>
        </div>
      </div>
    </section>
  );
};
