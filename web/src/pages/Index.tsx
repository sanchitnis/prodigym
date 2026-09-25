import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { TrackSection } from "@/components/home/TrackSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { BrainGymSection } from "@/components/home/BrainGymSection";
import { PathwaySection } from "@/components/home/PathwaySection";
import { SolutionsShowcase } from "@/components/home/SolutionsShowcase";
import { LeaderboardSection } from "@/components/home/LeaderboardSection";
import { GovernanceSection } from "@/components/home/GovernanceSection";
import { BenchmarksSection } from "@/components/home/BenchmarksSection";
import { ContactAndJoin } from "@/components/home/ContactAndJoin";

export const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <BrainGymSection />
      <TrackSection />
      <ProjectsSection />
      <PathwaySection />
      <SolutionsShowcase />
      <LeaderboardSection />
      <GovernanceSection />
      <BenchmarksSection />
      <ContactAndJoin />
    </Layout>
  );
};
