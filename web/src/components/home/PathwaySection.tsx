import React from "react";
import {
  GraduationCap,
  Briefcase,
  FlaskConical,
  Rocket,
  Wrench,
  Bot,
  HeartHandshake,
  Trophy,
  Users,
  Compass,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const PathwaySection: React.FC = () => {
  const learnerTypes = [
    { label: "Students", desc: "Undergraduate & postgraduate learners building portfolios and marquee AI careers." },
    { label: "Lifelong Learners", desc: "Professionals reskilling for autonomous agent orchestration & judgment." },
    { label: "Educators", desc: "Faculty adopting inquiry-based Socratic mentoring & living curricula." },
    { label: "Innovators", desc: "Early-stage builders creating patentable IP and applied venture spin-offs." },
  ];

  const stages = [
    {
      stage: "STAGE 1",
      title: "Foundational Skills & Readiness",
      icon: GraduationCap,
      badge: "stage1" as const,
      desc: "Enhanced STEAM curricula, student club activities, self-paced learning, and fundamental technical/AI capabilities for internship & research readiness.",
      mentoring: "Self-Directed & Guided Peer Pods",
      color: "border-blue-500/30",
    },
    {
      stage: "STAGE 2",
      title: "Practical Exposure & Internships",
      icon: Briefcase,
      badge: "stage2" as const,
      desc: "Industry-mentored projects connecting learners with corporate & ecosystem partners to solve real-world problems with production workflows.",
      mentoring: "Industry Workflow & Faculty Guided",
      color: "border-indigo-500/30",
    },
    {
      stage: "STAGE 3",
      title: "Product R&D & Deep Inquiry",
      icon: FlaskConical,
      badge: "stage3" as const,
      desc: "Designing tangible software products, applied research publications, corporate consulting deliverables, and patentable IP with high SMI scores.",
      mentoring: "R&D Advisors & HEITL Jury",
      color: "border-purple-500/30",
    },
    {
      stage: "STAGE 4",
      title: "Enterprise Incubation & Placement",
      icon: Rocket,
      badge: "stage4" as const,
      desc: "Startup incubation, spin-offs, executing commercial consulting contracts, securing patents, and marquee AI-era career placement.",
      mentoring: "Venture Studios & VCs",
      color: "border-emerald-500/30",
    },
  ];

  const pillars = [
    {
      title: "I. Learn by Doing",
      icon: Wrench,
      desc: "Experiential execution over passive lecturing. Participants learn by building, testing, failing, and iterating with immediate feedback on active projects.",
      color: "text-cyan-400 bg-cyan-500/10",
    },
    {
      title: "II. Augmented by AI",
      icon: Bot,
      desc: "Using AI smartly is critical to avoid cognitive atrophy. The learner grows in judgment while human-in-the-loop (HEITL) owns the final deliverable.",
      color: "text-indigo-400 bg-indigo-500/10",
    },
    {
      title: "III. Human-Centric Skills",
      icon: HeartHandshake,
      desc: "Premium on critical thinking, ethics, emotional intelligence, leadership, collaboration, and communication (the 4 Cs) as routine coding automates.",
      color: "text-purple-400 bg-purple-500/10",
    },
    {
      title: "IV. AI-Era Outcomes",
      icon: Trophy,
      desc: "Tangible real-world impact: Securing marquee AI-era careers, building documented code/patent portfolios, and elevating individual & institutional branding.",
      color: "text-emerald-400 bg-emerald-500/10",
    },
  ];

  return (
    <section id="pathway" className="py-24 bg-slate-900/40 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300 mb-4 backdrop-blur-md">
            <Compass className="h-3.5 w-3.5 text-purple-400" />
            <span>The Learner Transformation Journey</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            The <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent">Srujana Pathway</span> for All Learners
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            An experiential developmental trajectory enabling learners of all backgrounds—students, lifelong learners, professionals, and educators—to transition from passive consumers into creative innovators and autonomous system orchestrators.
          </p>

          {/* Learner Archetypes Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {learnerTypes.map((t) => (
              <span
                key={t.label}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300"
              >
                <strong className="text-white">{t.label}:</strong> {t.desc.split(" ")[0]} {t.desc.split(" ")[1]}
              </span>
            ))}
          </div>
        </div>

        {/* 4-Stage Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {stages.map((stg) => {
            const Icon = stg.icon;
            return (
              <Card
                key={stg.stage}
                className={`border bg-slate-950/70 backdrop-blur-md flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 ${stg.color}`}
              >
                <CardHeader className="space-y-2 pb-3">
                  <div className="flex justify-between items-center">
                    <Badge variant={stg.badge} className="text-[10px] uppercase font-mono">
                      {stg.stage}
                    </Badge>
                    <Icon className="h-5 w-5 text-slate-300" />
                  </div>
                  <CardTitle className="text-base font-bold text-white leading-tight">
                    {stg.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <p className="text-xs text-slate-300 leading-relaxed">{stg.desc}</p>
                  <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400">
                    <span className="text-slate-200 font-semibold">Mentoring:</span> {stg.mentoring}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 4 Core Mentoring Philosophy Pillars */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center font-heading text-xl sm:text-2xl font-bold text-white mb-8">
            The 4 Core Mentoring Philosophy Pillars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pil) => {
              const Icon = pil.icon;
              return (
                <div
                  key={pil.title}
                  className="rounded-xl border border-white/10 bg-slate-950/50 p-5 space-y-3 backdrop-blur-sm"
                >
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${pil.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-sm">{pil.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{pil.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
