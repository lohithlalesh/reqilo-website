/* 
 * REQILO PLATFORM STACK + FUTURE VERTICALS SECTION
 * Design: Dark section with bottom-up stack diagram and verticals
 * "Healthcare first. The Knowledge Core scales beyond it."
 */

import { useEffect, useRef } from "react";
import { Heart, Zap, Plane, HardHat, ArrowRight } from "lucide-react";

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

const stackLayers = [
  {
    phase: "FOUNDATION",
    phaseColor: "#00d4ff",
    title: "Knowledge Core",
    desc: "The shared intelligence layer every product runs on",
    bg: "rgba(0, 212, 255, 0.06)",
    border: "rgba(0, 212, 255, 0.2)",
  },
  {
    phase: "MVP",
    phaseColor: "#2563eb",
    title: "Supplier Platform (Reqilo Dx · Rx · Lx)",
    desc: "Distributors submit tenders in <1 day · Lx in Phase 1",
    bg: "rgba(37, 99, 235, 0.06)",
    border: "rgba(37, 99, 235, 0.2)",
  },
  {
    phase: "PHASE 1",
    phaseColor: "#00d4ff",
    title: "Buyer-Side Platform (Reqilo Px)",
    desc: "Hospitals + MOHs + GPOs run smarter tenders",
    bg: "rgba(0, 212, 255, 0.06)",
    border: "rgba(0, 212, 255, 0.2)",
  },
  {
    phase: "PHASE 3",
    phaseColor: "#2563eb",
    title: "Manufacturer Intelligence",
    desc: "Dxm · Rxm · regulatory + market signals",
    bg: "rgba(37, 99, 235, 0.06)",
    border: "rgba(37, 99, 235, 0.2)",
  },
];

const verticals = [
  {
    icon: Heart,
    name: "Reqilo Health",
    status: "Active · Today",
    statusColor: "#00d4ff",
    desc: "Dx · Rx · Lx · Px · Manufacturers",
    active: true,
  },
  {
    icon: Zap,
    name: "Reqilo Energy",
    status: "Vertical 2",
    statusColor: "rgba(255,255,255,0.3)",
    desc: "Oil & Gas tenders, EPC RFQs, NOC + supplier qualification",
    active: false,
  },
  {
    icon: Plane,
    name: "Reqilo Aviation",
    status: "Vertical 3",
    statusColor: "rgba(255,255,255,0.3)",
    desc: "MRO procurement, OEM compliance, FAA/EASA cert tracking",
    active: false,
  },
  {
    icon: HardHat,
    name: "Reqilo Engineering",
    status: "Vertical 4",
    statusColor: "rgba(255,255,255,0.3)",
    desc: "Mega-project EPC, multi-vendor evaluation, infrastructure",
    active: false,
  },
];

export default function StackSection() {
  const titleRef = useReveal();
  const stackRef = useReveal();
  const verticalsRef = useReveal();

  return (
    <section id="stack" className="section-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#00d4ff]/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Platform Stack */}
        <div ref={titleRef} className="reveal mb-16">
          <div className="section-label text-[#00d4ff] mb-4">The Platform Stack</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-800 text-white leading-tight mb-4">
                One foundation.
                <br />
                <span className="text-gradient-cyan">The commerce layer</span>
                <br />
                for healthcare.
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                Built supplier-first. Buyer-side stacks on top. Manufacturer layer follows. All on one Knowledge Core.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="section-label text-white/30 mb-3 text-[10px]">WHY IT WORKS</div>
              <p className="text-white/70 text-sm font-medium mb-2">Each layer makes the next one easier.</p>
              <p className="text-white/40 text-xs leading-relaxed">
                Same Knowledge Core for both sides. Two-sided platform leverage from day one. Suppliers want to be where buyers run tenders. Buyers want suppliers who can respond fast.
              </p>
            </div>
          </div>
        </div>

        {/* Stack diagram */}
        <div ref={stackRef} className="reveal mb-20">
          <div className="space-y-2">
            {[...stackLayers].reverse().map((layer, i) => (
              <div
                key={layer.phase}
                className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:scale-[1.01]"
                style={{ background: layer.bg, borderColor: layer.border }}
              >
                <div
                  className="section-label text-[10px] px-2 py-1 rounded-md flex-shrink-0 min-w-[70px] text-center"
                  style={{ color: layer.phaseColor, background: `${layer.phaseColor}15`, border: `1px solid ${layer.phaseColor}30` }}
                >
                  {layer.phase}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-600 text-white text-sm">{layer.title}</div>
                  <div className="text-white/40 text-xs mt-0.5">{layer.desc}</div>
                </div>
                <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ background: layer.phaseColor, opacity: 0.4 }} />
              </div>
            ))}
          </div>
        </div>

        {/* Future Verticals */}
        <div ref={verticalsRef} className="reveal">
          <div className="border-t border-white/10 pt-16">
            <div className="section-label text-[#00d4ff] mb-4">The Platform Play</div>
            <h3 className="font-display text-3xl sm:text-4xl font-800 text-white mb-3">
              Healthcare first.
              <br />
              <span className="text-gradient-cyan">The Knowledge Core scales beyond it.</span>
            </h3>
            <p className="text-white/50 text-sm mb-10 italic">
              Same architecture. Same AI. Different domain ontology. The moat compounds with every vertical.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {verticals.map((v) => (
                <div
                  key={v.name}
                  className={`card-dark p-5 rounded-xl ${v.active ? "border-[#00d4ff]/30" : ""}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: v.active ? "rgba(0, 212, 255, 0.1)" : "rgba(255,255,255,0.05)",
                        border: v.active ? "1px solid rgba(0, 212, 255, 0.2)" : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <v.icon size={18} style={{ color: v.active ? "#00d4ff" : "rgba(255,255,255,0.3)" }} />
                    </div>
                    <span
                      className="section-label text-[9px] px-2 py-0.5 rounded-full"
                      style={{
                        color: v.statusColor,
                        background: v.active ? "rgba(0, 212, 255, 0.1)" : "rgba(255,255,255,0.05)",
                        border: `1px solid ${v.active ? "rgba(0, 212, 255, 0.2)" : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      {v.status}
                    </span>
                  </div>
                  <div className="font-display font-700 text-white text-sm mb-1">{v.name}</div>
                  <div className="text-white/40 text-xs leading-relaxed">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
