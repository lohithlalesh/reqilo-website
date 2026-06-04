/* 
 * REQILO TRUST BAR
 * Design: Light section with key metrics and market presence
 * Shows the "Why Reqilo" proof points in a compact bar
 */

import { useEffect, useRef } from "react";
import { Clock, Shield, Zap, Globe } from "lucide-react";

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

const metrics = [
  {
    icon: Clock,
    value: "<1 day",
    label: "Submission time",
    sub: "vs. 3–6 weeks manual",
    color: "#00d4ff",
  },
  {
    icon: Zap,
    value: "80%+",
    label: "Time reduction",
    sub: "in tender response cycle",
    color: "#2563eb",
  },
  {
    icon: Shield,
    value: "15",
    label: "HITL gates",
    sub: "per tender, AI proposes humans decide",
    color: "#00d4ff",
  },
  {
    icon: Globe,
    value: "GCC + EU",
    label: "Market coverage",
    sub: "Masdar City · EU expansion Year 2",
    color: "#2563eb",
  },
];

export default function TrustBar() {
  const ref = useReveal();

  return (
    <section className="section-light py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal stagger grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  background: `${m.color}12`,
                  border: `1px solid ${m.color}25`,
                }}
              >
                <m.icon size={18} style={{ color: m.color }} />
              </div>
              <div>
                <div className="font-display font-800 text-[#0a0f1e] text-2xl leading-none mb-1">{m.value}</div>
                <div className="text-sm font-600 text-[#374151] mb-0.5">{m.label}</div>
                <div className="text-xs text-[#9ca3af]">{m.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
