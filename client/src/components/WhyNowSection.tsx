/* 
 * REQILO WHY NOW SECTION
 * Design: Light background, 4 force cards
 * "Three forces converge — first time in 20 years."
 */

import { useEffect, useRef } from "react";
import { Scale, Building2, Brain, Globe } from "lucide-react";

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

const forces = [
  {
    icon: Scale,
    title: "Regulatory Tailwind",
    badge: "Force 1",
    badgeColor: "#00d4ff",
    desc: "UAE PDPL, KSA PDPL, EU AI Act and MDR are forcing buyers to demand traceable, auditable procurement. Manual processes can't keep up.",
    detail: "Government and hospital buyers cannot procure from vendors without a compliant stack.",
  },
  {
    icon: Building2,
    title: "GCC Mega-Spend",
    badge: "Force 2",
    badgeColor: "#2563eb",
    desc: "PureHealth, SEHA, NUPCO, Bahrain MOH and Kuwait MOH have all consolidated procurement. The buyer side is centralizing fast.",
    detail: "Centralized procurement creates a winner-takes-most dynamic for compliant platforms.",
  },
  {
    icon: Brain,
    title: "AI Maturity",
    badge: "Force 3",
    badgeColor: "#00d4ff",
    desc: "Claude Sonnet 4.6 and equivalents finally hit the accuracy bar for regulated document workflows. Two years ago this product wasn't buildable.",
    detail: "The technology window is now and Reqilo is first to market with a domain-specific stack.",
  },
  {
    icon: Globe,
    title: "EU Expansion Lane",
    badge: "Force 4",
    badgeColor: "#2563eb",
    desc: "GDPR-ready architecture from day one plus an in-region partner means Reqilo lands in EU healthcare procurement in Year 2 without rebuilding.",
    detail: "Same Knowledge Core. Same AI. Different domain ontology. The moat compounds with every vertical.",
  },
];

export default function WhyNowSection() {
  const titleRef = useReveal();
  const cardsRef = useReveal();

  return (
    <section id="why-now" className="section-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="reveal mb-16">
          <div className="section-label text-[#00a8cc] mb-4">Why Now</div>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-[#0a0f1e] leading-tight mb-4">
            Three forces converge
            <br />
            <span className="text-gradient-cyan">for the first time in 20 years</span>
          </h2>
          <p className="text-lg text-[#4b5563] max-w-2xl">
            The regulatory environment, market consolidation, and AI capability have aligned simultaneously. The window is now.
          </p>
        </div>

        <div ref={cardsRef} className="reveal stagger grid grid-cols-1 sm:grid-cols-2 gap-6">
          {forces.map((force) => (
            <div key={force.title} className="card-light p-8 group">
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${force.badgeColor}12`,
                    border: `1px solid ${force.badgeColor}30`,
                  }}
                >
                  <force.icon size={22} style={{ color: force.badgeColor }} />
                </div>
                <span
                  className="section-label text-[10px] px-2 py-1 rounded-full border"
                  style={{
                    color: force.badgeColor,
                    borderColor: `${force.badgeColor}30`,
                    background: `${force.badgeColor}10`,
                  }}
                >
                  {force.badge}
                </span>
              </div>
              <h3 className="font-display font-700 text-[#0a0f1e] text-xl mb-3">{force.title}</h3>
              <p className="text-[#4b5563] text-sm leading-relaxed mb-4">{force.desc}</p>
              <p className="text-[#9ca3af] text-xs leading-relaxed italic border-t border-gray-100 pt-4">{force.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
