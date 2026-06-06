/* 
 * REQILO PRODUCTS SECTION
 * Design: Dark navy section with workflow diagrams and dashboard mockups
 * Shows 4-step workflows for both Supplier (Reqilo) and Buyer (Reqilo Px)
 * Vercel-style: tech showcase with live-looking UI mockups
 */

import { useEffect, useRef, useState } from "react";
import { FileText, Brain, Wrench, Send, PenLine, Globe, Search, Award } from "lucide-react";

const SUPPLIER_MOCKUP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663731614958/3mTd8vRSeY4gzRrW7oajvx/reqilo_supplier_dashboard_updated-Tc9NeMFbAsUgXiu7f3Uvd4.webp";
const BUYER_MOCKUP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663731614958/3mTd8vRSeY4gzRrW7oajvx/reqilo_buyer_dashboard_updated-c3TXeBX5mimpeGAxuLPogY.webp";

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

const supplierSteps = [
  {
    num: "01",
    icon: FileText,
    title: "Requirements Ingestion",
    desc: "Tender PDFs ingested, classified, and structured automatically.",
    color: "#00d4ff",
  },
  {
    num: "02",
    icon: Brain,
    title: "Intelligent Analysis",
    desc: "Requirements extracted, mapped to your product catalog.",
    color: "#00d4ff",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Solution Build",
    desc: "AI-drafted response, compliance-checked against regulations.",
    color: "#2563eb",
  },
  {
    num: "04",
    icon: Send,
    title: "Submission Ready",
    desc: "Reviewed, signed, exported in tender format. In under a day.",
    color: "#2563eb",
  },
];

const buyerSteps = [
  {
    num: "01",
    icon: PenLine,
    title: "Author Spec",
    desc: "Clinical requirement converted to tender, region-aware.",
    color: "#00d4ff",
  },
  {
    num: "02",
    icon: Globe,
    title: "Publish & Invite",
    desc: "Guest portal for vetted suppliers. Controlled visibility.",
    color: "#00d4ff",
  },
  {
    num: "03",
    icon: Search,
    title: "Review Bids",
    desc: "Side-by-side comparison, compliance gaps flagged automatically.",
    color: "#2563eb",
  },
  {
    num: "04",
    icon: Award,
    title: "Award & Contract",
    desc: "2-approver gate, audit-locked. 100% defensible record.",
    color: "#2563eb",
  },
];

function WorkflowStep({ step, index, isLast }: { step: typeof supplierSteps[0]; index: number; isLast: boolean }) {
  return (
    <div className="flex items-start gap-4 relative">
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border"
          style={{
            background: `rgba(${step.color === "#00d4ff" ? "0, 212, 255" : "37, 99, 235"}, 0.1)`,
            borderColor: `rgba(${step.color === "#00d4ff" ? "0, 212, 255" : "37, 99, 235"}, 0.3)`,
          }}
        >
          <step.icon size={18} style={{ color: step.color }} />
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2 min-h-[2rem]" style={{ background: "linear-gradient(to bottom, rgba(0,212,255,0.3), transparent)" }} />
        )}
      </div>
      <div className="pb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono-brand text-xs" style={{ color: step.color }}>{step.num}</span>
          <h4 className="font-display font-600 text-white text-sm">{step.title}</h4>
        </div>
        <p className="text-[rgba(255,255,255,0.5)] text-xs leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<"supplier" | "buyer">("supplier");
  const titleRef = useReveal();
  const contentRef = useReveal(0.05);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="reveal mb-12">
          <div className="section-label text-[#00d4ff] mb-4">Products</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-5xl font-800 text-white leading-tight max-w-xl">
              Built for the side
              <br />
              <span className="text-gradient-cyan">you're on.</span>
            </h2>
            {/* Tab switcher */}
            <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 self-start sm:self-auto">
              <button
                onClick={() => setActiveTab("supplier")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === "supplier"
                    ? "bg-[#00d4ff] text-[#0a0f1e] font-600"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Supplier Side
              </button>
              <button
                onClick={() => setActiveTab("buyer")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === "buyer"
                    ? "bg-[#2563eb] text-white font-600"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Buyer Side
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="reveal">
          {activeTab === "supplier" ? (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Left: workflow */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-700 text-white mb-2">Reqilo</h3>
                  <p className="text-white/50 text-sm">For the side that has to win the tender.</p>
                </div>
                <div>
                  {supplierSteps.map((step, i) => (
                    <WorkflowStep key={step.num} step={step} index={i} isLast={i === supplierSteps.length - 1} />
                  ))}
                </div>
                <button
                  onClick={() => scrollTo("contact")}
                  className="mt-4 btn-cyan text-sm py-2.5 px-5"
                >
                  Get Supplier Access
                </button>
              </div>
              {/* Right: mockup */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-float">
                  <img
                    src={SUPPLIER_MOCKUP}
                    alt="Reqilo Supplier Dashboard"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Left: workflow */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-700 text-white mb-2">Reqilo Px</h3>
                  <p className="text-white/50 text-sm">For the side that runs the tender.</p>
                </div>
                <div>
                  {buyerSteps.map((step, i) => (
                    <WorkflowStep key={step.num} step={step} index={i} isLast={i === buyerSteps.length - 1} />
                  ))}
                </div>
                <button
                  onClick={() => scrollTo("contact")}
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white border border-[#2563eb] bg-[#2563eb]/10 rounded-md hover:bg-[#2563eb]/20 transition-all"
                >
                  Get Buyer Access
                </button>
              </div>
              {/* Right: mockup */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-float">
                  <img
                    src={BUYER_MOCKUP}
                    alt="Reqilo Px Buyer Dashboard"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
