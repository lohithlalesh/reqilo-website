/* 
 * REQILO HOME PAGE
 * Design: Precision Engineering — Dark Sections with Light Canvas
 * Assembles all sections in order
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TickerSection from "@/components/TickerSection";
import PlatformSection from "@/components/PlatformSection";
import TrustBar from "@/components/TrustBar";
import ProductsSection from "@/components/ProductsSection";
import WorkflowSection from "@/components/WorkflowSection";
import KnowledgeCoreSection from "@/components/KnowledgeCoreSection";
import WhyNowSection from "@/components/WhyNowSection";
import StackSection from "@/components/StackSection";
import AIPhilosophySection from "@/components/AIPhilosophySection";
import MoatSection from "@/components/MoatSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TickerSection />
      <PlatformSection />
      <TrustBar />
      <ProductsSection />
      <WorkflowSection />
      <KnowledgeCoreSection />
      <AIPhilosophySection />
      <WhyNowSection />
      <StackSection />
      <MoatSection />
      <CTASection />
      <Footer />
    </div>
  );
}
