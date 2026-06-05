/* 
 * REQILO KNOWLEDGE CORE SECTION
 * Design: Dark navy - Vercel-style infrastructure showcase
 * Shows the AI engine that powers both sides
 * Animated primitives, compliance badges
 */

import { useEffect, useRef } from "react";
import { Database, Cpu, Shield, FileSearch, GitBranch, Lock } from "lucide-react";

const KNOWLEDGE_CORE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663731614958/3mTd8vRSeY4gzRrW7oajvx/reqilo_knowledge_core-3dP5HDg3UfSgJgQFSZwYk9.webp";

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

const primitives = [
  { icon: FileSearch, label: "Tender Ingestion", desc: "PDFs parsed, classified, structured" },
  { icon: Cpu, label: "Spec Extraction", desc: "Requirements mapped to catalog" },
  { icon: Shield, label: "Compliance Evidence", desc: "Regulatory checks automated" },
  { icon: GitBranch, label: "Multi-Supplier Compare", desc: "Side-by-side gap analysis" },
  { icon: Lock, label: "Audit Trail", desc: "Immutable decision log" },
  { icon: Database, label: "Domain Graph", desc: "Compounds with every tender" },
];

const complianceBadges = ["UAE PDPL", "KSA PDPL", "GDPR", "SOC 2", "ISO 27001", "EU AI Act", "MDR"];

export default function KnowledgeCoreSection() {
  const titleRef = useReveal();
  const contentRef = useReveal(0.05);
  const badgesRef = useReveal();

  return (
    <section id="knowledge-core" className="section-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="reveal mb-16">
          <div className="section-label text-[#00d4ff] mb-4">The Engine</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-800 text-white leading-tight mb-4">
                Knowledge Core.
                <br />
                <span className="text-gradient-cyan">The moat that compounds.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Every tender ingested deepens the Knowledge Core. Product taxonomies, supplier credentials, compliance evidence create a domain graph that sharpens with every customer.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="card-dark p-4 rounded-xl">
                <div className="font-mono-brand text-[#00d4ff] text-xs mb-1">THE PRIMITIVES ARE UNIVERSAL</div>
                <div className="text-white/50 text-xs leading-relaxed">
                  tender ingestion, spec extraction, compliance evidence, multi-supplier comparison, audit trail
                  <br />
                  <span className="text-white/30 italic mt-1 block">Knowledge Core abstracts all of it.</span>
                </div>
              </div>
              <div className="card-dark p-4 rounded-xl">
                <div className="font-mono-brand text-[#2563eb] text-xs mb-1">SAME ARCHITECTURE. SAME AI.</div>
                <div className="text-white/50 text-xs">Different domain ontology. The moat compounds with every vertical.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content: primitives + image */}
        <div ref={contentRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Primitives grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {primitives.map((p, i) => (
              <div
                key={p.label}
                className="card-dark p-4 rounded-xl group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center mb-3 group-hover:bg-[#00d4ff]/20 transition-colors">
                  <p.icon size={16} className="text-[#00d4ff]" />
                </div>
                <div className="font-display font-600 text-white text-xs mb-1">{p.label}</div>
                <div className="text-white/40 text-xs leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>

          {/* Knowledge Core visualization */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden cyan-glow">
                <img
                  src={KNOWLEDGE_CORE_IMG}
                  alt="Knowledge Core Engine"
                  className="w-full h-full object-cover animate-pulse-slow"
                  loading="lazy"
                />
              </div>
              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-[#0a0f1e]/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10">
                  <div className="font-display font-800 text-white text-lg">Knowledge</div>
                  <div className="font-display font-800 text-[#00d4ff] text-lg">Core</div>
                  <div className="section-label text-white/30 text-[9px] mt-1">THE ENGINE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance badges */}
        <div ref={badgesRef} className="reveal">
          <div className="border-t border-white/10 pt-8">
            <div className="section-label text-white/30 mb-4">Compliance & Security Posture</div>
            <div className="flex flex-wrap gap-2">
              {complianceBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/70 hover:border-[#00d4ff]/40 hover:text-white transition-all"
                >
                  {badge}
                </span>
              ))}
              <span className="px-3 py-1.5 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full text-xs font-medium text-[#00d4ff]">
                HIPAA-ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
