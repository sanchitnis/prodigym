import React, { useState, useEffect } from "react";
import { Trophy, Medal, Building2, Flame, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import type { DBLeaderboardEntry, DBHubNode } from "@/types/database";

const fallbackStudents: DBLeaderboardEntry[] = [
  {
    id: "lead-1",
    user_id: null,
    name: "Contributor Lead Alpha",
    institution: "Institute of Technology Hub 1",
    stage: "Stage 3",
    points: 1250,
    velocity: "+45/wk",
    badge: "HEITL Master",
    rank: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "lead-2",
    user_id: null,
    name: "Student Researcher Beta",
    institution: "Global Youth STEAM Network",
    stage: "Stage 2",
    points: 980,
    velocity: "+30/wk",
    badge: "SPOT-PROBE Specialist",
    rank: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "lead-3",
    user_id: null,
    name: "AI Guild Innovator Gamma",
    institution: "Premier Academic Node",
    stage: "Stage 2",
    points: 820,
    velocity: "+25/wk",
    badge: "Brain GYM Pro",
    rank: 3,
    created_at: new Date().toISOString(),
  },
];

const fallbackHubs: DBHubNode[] = [
  {
    id: "hub-1",
    institution_name: "Institute of Technology Hub 1",
    executive_sponsor: "Dr. Academic Director",
    active_students: 45,
    completed_probes: 12,
    tier: "Premier Academic Hub",
    spocs_count: 4,
    created_at: new Date().toISOString(),
  },
  {
    id: "hub-2",
    institution_name: "Global Youth STEAM Network",
    executive_sponsor: "Dean of Engineering",
    active_students: 30,
    completed_probes: 8,
    tier: "Partner Community Hub",
    spocs_count: 4,
    created_at: new Date().toISOString(),
  },
  {
    id: "hub-3",
    institution_name: "Innovation Node Delta",
    executive_sponsor: "Director of Innovation",
    active_students: 22,
    completed_probes: 5,
    tier: "Regional Emerging Hub",
    spocs_count: 4,
    created_at: new Date().toISOString(),
  },
];

export const LeaderboardSection: React.FC = () => {
  const [students, setStudents] = useState<DBLeaderboardEntry[]>(fallbackStudents);
  const [hubs, setHubs] = useState<DBHubNode[]>(fallbackHubs);

  useEffect(() => {
    async function loadLeaderboard() {
      if (!isSupabaseConfigured()) return;
      try {
        const { data: stdData } = await supabase
          .from("leaderboard_entries")
          .select("*")
          .order("points", { ascending: false });
        if (stdData && stdData.length > 0) setStudents(stdData as DBLeaderboardEntry[]);

        const { data: hubData } = await supabase
          .from("hub_nodes")
          .select("*")
          .order("active_students", { ascending: false });
        if (hubData && hubData.length > 0) setHubs(hubData as DBHubNode[]);
      } catch (err) {
        console.warn("Using fallback leaderboard:", err);
      }
    }
    loadLeaderboard();
  }, []);

  return (
    <section id="leaderboard" className="py-20 bg-slate-900/40 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-3">
            <Trophy className="h-3.5 w-3.5 text-amber-400" />
            <span>Gamified Recognition Engine</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Contribution Leaderboards
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Recognizing individual student excellence (4 C skills, probe velocity) and institutional academic hub participation.
          </p>
        </div>

        {/* Tabs for Individual vs Institutional */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="students" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-slate-950/80 border border-white/10 p-1">
                <TabsTrigger value="students" className="gap-2 text-xs sm:text-sm">
                  <Award className="h-4 w-4 text-cyan-400" />
                  <span>Student Innovators</span>
                </TabsTrigger>
                <TabsTrigger value="hubs" className="gap-2 text-xs sm:text-sm">
                  <Building2 className="h-4 w-4 text-purple-400" />
                  <span>Institutional Academic Hubs</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Students Table */}
            <TabsContent value="students">
              <Card className="border border-white/10 bg-slate-950/80 backdrop-blur-xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                    <thead className="bg-white/5 text-slate-400 uppercase text-[11px] font-semibold border-b border-white/10">
                      <tr>
                        <th className="py-3 px-4">Rank</th>
                        <th className="py-3 px-4">Contributor</th>
                        <th className="py-3 px-4">Institution</th>
                        <th className="py-3 px-4">Stage</th>
                        <th className="py-3 px-4">Points</th>
                        <th className="py-3 px-4">Velocity</th>
                        <th className="py-3 px-4">Badge</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {students.map((st, idx) => (
                        <tr key={st.id || idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-3 px-4 font-mono font-bold">
                            {idx === 0 ? (
                              <span className="text-amber-400 font-bold">🥇 #1</span>
                            ) : idx === 1 ? (
                              <span className="text-slate-300 font-bold">🥈 #2</span>
                            ) : idx === 2 ? (
                              <span className="text-amber-600 font-bold">🥉 #3</span>
                            ) : (
                              `#${idx + 1}`
                            )}
                          </td>
                          <td className="py-3 px-4 font-semibold text-white">{st.name}</td>
                          <td className="py-3 px-4 text-slate-400">{st.institution}</td>
                          <td className="py-3 px-4">
                            <Badge variant="stage2" className="text-[10px] py-0">
                              {st.stage}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 font-mono font-bold text-cyan-400">
                            {st.points} pts
                          </td>
                          <td className="py-3 px-4 text-emerald-400 font-mono text-xs">
                            {st.velocity}
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant="gym" className="text-[10px]">
                              {st.badge}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            {/* Hubs Table */}
            <TabsContent value="hubs">
              <Card className="border border-white/10 bg-slate-950/80 backdrop-blur-xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                    <thead className="bg-white/5 text-slate-400 uppercase text-[11px] font-semibold border-b border-white/10">
                      <tr>
                        <th className="py-3 px-4">Rank</th>
                        <th className="py-3 px-4">Institution Name</th>
                        <th className="py-3 px-4">Executive Sponsor</th>
                        <th className="py-3 px-4">Active Students</th>
                        <th className="py-3 px-4">Completed Probes</th>
                        <th className="py-3 px-4">SPOCs</th>
                        <th className="py-3 px-4">Tier</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {hubs.map((hb, idx) => (
                        <tr key={hb.id || idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-amber-400">#{idx + 1}</td>
                          <td className="py-3 px-4 font-semibold text-white">{hb.institution_name}</td>
                          <td className="py-3 px-4 text-slate-400">{hb.executive_sponsor || "Dean of R&D"}</td>
                          <td className="py-3 px-4 font-mono text-cyan-300">{hb.active_students} Students</td>
                          <td className="py-3 px-4 font-mono text-purple-300">{hb.completed_probes} Probes</td>
                          <td className="py-3 px-4 font-mono text-slate-400">{hb.spocs_count} SPOCs</td>
                          <td className="py-3 px-4">
                            <Badge variant="gym" className="text-[10px]">
                              {hb.tier}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
