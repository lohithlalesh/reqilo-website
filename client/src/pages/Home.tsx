/*
 * REQILO HOME PAGE — Light Theme
 * Design: White background, navy text, cyan/teal accents
 * Vercel-inspired layout with clean section separation
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemStripSection from "@/components/ProblemStripSection";
import PlatformOverviewSection from "@/components/PlatformOverviewSection";
import WorkflowSection from "@/components/WorkflowSection";
import KnowledgeCoreSection from "@/components/KnowledgeCoreSection";
import WhyNowSection from "@/components/WhyNowSection";
import MoatSection from "@/components/MoatSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProblemStripSection />
      <PlatformOverviewSection />
      <WorkflowSection />
      <KnowledgeCoreSection />
      <WhyNowSection />
      <MoatSection />
      <CTASection />
      <Footer />
    </div>
  );
}
