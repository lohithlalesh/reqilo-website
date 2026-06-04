/* 
 * REQILO MOAT SECTION
 * Design: Light background, 4 defensibility cards + market names
 * "Why this is defensible — and why it gets harder to copy."
 */

import { useEffect, useRef } from "react";
import { Lock, Scale, Network, Users } from "lucide-react";

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

const moatCards = [
  {
    icon: Lock,
    title: "Two-Sided Structural Lock-In",
    desc: "Suppliers want to be where the buyers run tenders. Buyers want suppliers who can respond fast. Firewalled but adjacent — same platform, opposite incentives.",
    color: "#00d4ff",
  },
  {
    icon: Scale,
    title: "Regulatory Posture as Moat",
    desc: "PDPL day-one, GDPR + SOC 2 + ISO 27001 + EU AI Act in Phase 1. Government and hospital buyers cannot procure from vendors without this stack.",
    color: "#2563eb",
  },
  {
    icon: Network,
    title: "Domain Graph That Compounds",
    desc: "Every tender ingested deepens the Knowledge Core. Product taxonomies, supplier credentials, compliance evidence — a graph that sharpens with every customer.",
    color: "#00d4ff",
  },
  {
    icon: Users,
    title: "GCC-First Relationships",
    desc: "Founder-led customer development inside MOHs, GPOs and consortia. Relationships that take 5 years to build, blocking generic global SaaS players.",
    color: "#2563eb",
  },
];

const marketNames = [
  "PureHealth", "SEHA", "NUPCO", "Bahrain MOH", "Kuwait MOH",
  "Saudi MOH", "Abu Dhabi DOH", "DHA", "MOH UAE",
];

export default function MoatSection() {
  const titleRef = useReveal();
  const cardsRef = useReveal();
  const marketsRef = useReveal();

  return (
    <section id="moat" className="section-muted py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="reveal mb-16">
          <div className="section-label text-[#00a8cc] mb-4">The Moat</div>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-[#0a0f1e] leading-tight mb-4">
            Why this is defensible —
            <br />
            <span className="text-gradient-cyan">and why it gets harder to copy.</span>
          </h2>
          <p className="text-lg text-[#4b5563] max-w-2xl">
            Four structural advantages that compound with every customer and every tender processed.
          </p>
        </div>

        <div ref={cardsRef} className="reveal stagger grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {moatCards.map((card) => (
            <div key={card.title} className="card-light p-7 group">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${card.color}12`,
                  border: `1px solid ${card.color}25`,
                }}
              >
                <card.icon size={20} style={{ color: card.color }} />
              </div>
              <h3 className="font-display font-700 text-[#0a0f1e] text-lg mb-3">{card.title}</h3>
              <p className="text-[#4b5563] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Market names */}
        <div ref={marketsRef} className="reveal">
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="section-label text-[#9ca3af] mb-4">Target Market — GCC Procurement Institutions</div>
            <div className="flex flex-wrap gap-2">
              {marketNames.map((name) => (
                <span
                  key={name}
                  className="px-3 py-1.5 bg-[#f8fafc] border border-gray-200 rounded-full text-sm font-medium text-[#374151] hover:border-[#00d4ff] hover:text-[#0891b2] transition-all cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
