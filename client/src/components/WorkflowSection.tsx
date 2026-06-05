/* 
 * REQILO WORKFLOW SECTION
 * Design: Light background, horizontal step-flow diagrams
 * Shows simplified workflows for both sides with numbered nodes
 */

import { useEffect, useRef } from "react";
import { FileText, Brain, Wrench, Send, PenLine, Globe, Search, Award, ArrowRight } from "lucide-react";

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

const supplierFlow = [
  { num: 1, icon: FileText, title: "Requirements\nIngestion", desc: "Tender PDFs ingested + classified", color: "#00d4ff" },
  { num: 2, icon: Brain, title: "Intelligent\nAnalysis", desc: "Requirements extracted, mapped to catalog", color: "#00d4ff" },
  { num: 3, icon: Wrench, title: "Solution\nBuild", desc: "AI-drafted response, compliance-checked", color: "#2563eb" },
  { num: 4, icon: Send, title: "Submission\nReady", desc: "Reviewed, signed, exported in tender format", color: "#2563eb" },
];

const buyerFlow = [
  { num: 1, icon: PenLine, title: "Author\nSpec", desc: "Clinical req → tender, region-aware", color: "#00d4ff" },
  { num: 2, icon: Globe, title: "Publish\n& Invite", desc: "Guest portal, vetted suppliers", color: "#00d4ff" },
  { num: 3, icon: Search, title: "Review\nBids", desc: "Side-by-side, gaps flagged", color: "#2563eb" },
  { num: 4, icon: Award, title: "Award\n& Contract", desc: "2-approver gate, audit-locked", color: "#2563eb" },
];

function FlowStep({ step, isLast }: { step: typeof supplierFlow[0]; isLast: boolean }) {
  return (
    <div className="flex items-center gap-0 flex-1 min-w-0">
      <div className="flex flex-col items-center flex-1 min-w-0">
        {/* Node */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 relative border"
          style={{
            background: `linear-gradient(135deg, ${step.color}15, ${step.color}08)`,
            borderColor: `${step.color}30`,
          }}
        >
          <step.icon size={22} style={{ color: step.color }} />
          <div
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-700 font-display"
            style={{ background: step.color, color: step.color === "#00d4ff" ? "#0a0f1e" : "white" }}
          >
            {step.num}
          </div>
        </div>
        <div className="text-center px-1">
          <div className="font-display font-700 text-[#0a0f1e] text-sm leading-tight mb-1 whitespace-pre-line">{step.title}</div>
          <div className="text-[#6b7280] text-xs leading-relaxed">{step.desc}</div>
        </div>
      </div>
      {!isLast && (
        <div className="flex-shrink-0 w-8 flex items-center justify-center -mt-10">
          <ArrowRight size={16} className="text-[#d1d5db]" />
        </div>
      )}
    </div>
  );
}

export default function WorkflowSection() {
  const titleRef = useReveal();
  const supplierRef = useReveal();
  const buyerRef = useReveal();

  return (
    <section id="workflow" className="section-muted py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="reveal text-center mb-16">
          <div className="section-label text-[#00a8cc] mb-4">How It Works</div>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-[#0a0f1e] leading-tight mb-4">
            Simplified. Auditable.{" "}
            <span className="text-gradient-cyan">AI-powered.</span>
          </h2>
          <p className="text-lg text-[#4b5563] max-w-2xl mx-auto">
            Two parallel workflows, one shared intelligence layer. Every step is traceable, every decision is logged.
          </p>
        </div>

        {/* Supplier workflow */}
        <div ref={supplierRef} className="reveal mb-12">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#00d4ff]" />
              <span className="section-label text-[#00a8cc]">Reqilo — Supplier Workflow</span>
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-[#9ca3af] font-medium">3 to 6 weeks to less than 1 day</span>
            </div>
            <div className="flex items-start gap-0">
              {supplierFlow.map((step, i) => (
                <FlowStep key={step.num} step={step} isLast={i === supplierFlow.length - 1} />
              ))}
            </div>
          </div>
        </div>

        {/* Buyer workflow */}
        <div ref={buyerRef} className="reveal">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#2563eb]" />
              <span className="section-label text-[#2563eb]">Reqilo Px — Buyer Workflow</span>
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-[#9ca3af] font-medium">15 HITL gates with 2 approver signatures</span>
            </div>
            <div className="flex items-start gap-0">
              {buyerFlow.map((step, i) => (
                <FlowStep key={step.num} step={step} isLast={i === buyerFlow.length - 1} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#9ca3af]">
            Both workflows run on the same{" "}
            <span className="font-mono-brand text-[#0a0f1e] font-medium">Knowledge Core</span>
            {" "}with tender ingestion, spec extraction, compliance evidence, multi-supplier comparison, and audit trail
          </p>
        </div>
      </div>
    </section>
  );
}
