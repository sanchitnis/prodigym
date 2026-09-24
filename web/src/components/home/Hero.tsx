import React from "react";
import { Link } from "react-router-dom";
import {
  Dumbbell,
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Users,
  Target,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background Decorative Gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Top Badges */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md mb-6 animate-fade-in shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <Dumbbell className="h-3.5 w-3.5 text-cyan-400" />
          <span>The Cognitive Brain GYM for Human-Centric Skills & Boss of AI Agents</span>
        </div>

        {/* Main Title */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          PROJECT{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
            PROdi
          </span>
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent underline decoration-cyan-400/40 decoration-4 underline-offset-8">
            GYM
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Follow your dreams and build our common future through projects utilizing{" "}
          <strong className="text-white">Human + Augmented Intelligence</strong> — Empowering students & faculty to master human centric future skill, secure marquee internships, create patentable IP, and orchestrate AI agents with{" "}
          <strong className="text-cyan-300">you as the BOSS of agents</strong>.
        </p>

        {/* Triad Framework Banner (WHAT - HOW - RESULTING IN) */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl mb-10 text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* What */}
            <div className="space-y-2 pt-2 md:pt-0">
              <div className="inline-block rounded-md bg-indigo-500/20 px-2.5 py-0.5 text-xs font-bold text-indigo-300">
                WHAT
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                <span className="text-cyan-400 font-bold">P</span>ipeline for{" "}
                <span className="text-cyan-400 font-bold">R</span>esearch{" "}
                <span className="text-cyan-400 font-bold">O</span>riented{" "}
                <span className="text-cyan-400 font-bold">D</span>evelopment with{" "}
                <span className="text-cyan-400 font-bold">I</span>ntelligence of{" "}
                <span className="text-cyan-400 font-bold">G</span>lobal{" "}
                <span className="text-cyan-400 font-bold">Y</span>outh for{" "}
                <span className="text-cyan-400 font-bold underline">M</span>ankind.
              </p>
            </div>

            {/* How */}
            <div className="space-y-2 pt-4 md:pt-0 md:pl-6">
              <div className="inline-block rounded-md bg-purple-500/20 px-2.5 py-0.5 text-xs font-bold text-purple-300">
                HOW
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                Structured series of learning-to-innovation projects with clear outcomes, timelines, and resources — orchestrated via AI agent loops with{" "}
                <strong className="text-white">you as the BOSS of agents</strong>.
              </p>
            </div>

            {/* Resulting In */}
            <div className="space-y-2 pt-4 md:pt-0 md:pl-6">
              <div className="inline-block rounded-md bg-cyan-500/20 px-2.5 py-0.5 text-xs font-bold text-cyan-300">
                RESULTING IN
              </div>
              <div className="text-xs sm:text-sm font-semibold text-transparent bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text">
                STRATEGIC TRIAD:
                <div className="text-white font-bold text-sm tracking-wide mt-1">
                  TALENT • ECOSYSTEM • VENTURES
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#brain-gym">
            <Button size="lg" variant="gym" className="gap-2 text-sm shadow-xl">
              <Dumbbell className="h-4 w-4" />
              <span>Explore Brain GYM</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>

          <a
            href="https://github.com/sanchitnis/prodigym/blob/main/strategy/concept-note.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="gap-2 text-sm text-slate-200">
              <BookOpen className="h-4 w-4 text-indigo-400" />
              <span>Read Executive Concept Note</span>
            </Button>
          </a>

          <a href="#contact">
            <Button size="lg" variant="secondary" className="text-sm bg-slate-800/80 hover:bg-slate-700">
              Join Ecosystem
            </Button>
          </a>
        </div>

        {/* Founder's Vision Callout */}
        <div className="max-w-3xl mx-auto rounded-xl border border-white/10 bg-white/[0.02] p-6 text-left backdrop-blur-md">
          <div className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-2">
            The "Why" Behind PROdiGYM
          </div>
          <p className="text-sm italic text-slate-300 leading-relaxed">
            “My journey with AI started during my M.Tech at IIT Kanpur and PhD at IISc, eventually leading me through multinational GCCs like Motorola and LG. I saw how the world's best tech companies operate. I returned to academics because I realized our future generation has immense potential but lacks the right runway. PROdiGYM is my way of being an enabler—a catalyst to help students realize their highest aspirations in a rapidly changing world.”
          </p>
          <div className="mt-3 text-right text-xs font-medium text-slate-400">
            — <strong className="text-white">Dr. Sanjay Chitnis</strong>, Founder & Lead Studio Orchestrator{" "}
            <a
              href="https://www.linkedin.com/in/sanjaychitnis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline ml-1"
            >
              (LinkedIn →)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
