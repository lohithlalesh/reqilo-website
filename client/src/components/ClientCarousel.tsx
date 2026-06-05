/*
 * CLIENT CAROUSEL COMPONENT
 * Dynamic carousel showing customer testimonials or case studies
 * Auto-rotates with manual controls
 */

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clients = [
  {
    name: "NUPCO",
    region: "Saudi Arabia",
    desc: "Reduced tender review time from 3 weeks to 2 days with Reqilo Px",
    stat: "85% faster",
  },
  {
    name: "SEHA",
    region: "Abu Dhabi",
    desc: "Increased supplier participation by 40% with transparent, auditable process",
    stat: "40% growth",
  },
  {
    name: "PureHealth",
    region: "UAE",
    desc: "Automated compliance checks saved 60 hours per tender cycle",
    stat: "60 hours saved",
  },
  {
    name: "Bahrain MOH",
    region: "Bahrain",
    desc: "Full audit trail eliminated procurement disputes and appeals",
    stat: "100% defensible",
  },
];

export default function ClientCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % clients.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % clients.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + clients.length) % clients.length);
    setAutoPlay(false);
  };

  return (
    <div className="relative">
      {/* Carousel container */}
      <div className="overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {clients.map((client, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <div className="text-center">
                <div className="font-display text-4xl font-800 text-[#00d4ff] mb-2">{client.stat}</div>
                <h3 className="font-display text-2xl font-700 text-white mb-2">{client.name}</h3>
                <p className="text-white/50 text-sm mb-4">{client.region}</p>
                <p className="text-white/70 text-base leading-relaxed max-w-md mx-auto">{client.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          {clients.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                setAutoPlay(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-[#00d4ff] w-6" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
          >
            <ChevronLeft size={18} className="text-white" />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
          >
            <ChevronRight size={18} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
