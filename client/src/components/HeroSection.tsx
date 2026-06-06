/* 
 * REQILO HERO SECTION
 * Design: Dark navy with constellation background, large display type
 * Vercel-style: bold headline, sub, dual CTAs, animated stats bar
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import ConstellationCanvas from "./ConstellationCanvas";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663731614958/3mTd8vRSeY4gzRrW7oajvx/reqilo_hero_bg-3oW7rWitcKHH4neuu897Dk.webp";

function AnimatedCounter({ end, suffix = "", duration = 1200 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f1729 0%, #1a2847 50%, #2d1b4e 100%)",
      }}
    >
      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729]/90 via-[#1a2847]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729] via-transparent to-transparent" />
      {/* Animated constellation overlay */}
      <ConstellationCanvas />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-2 mb-6">
            <div className="section-label text-[#00d4ff]">Healthcare Procurement Intelligence</div>
            <div className="w-1 h-1 rounded-full bg-[#00d4ff]" />
            <div className="section-label text-[rgba(255,255,255,0.4)]">GCC · Europe</div>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-800 text-white leading-[1.05] tracking-tight mb-6">
            From Requirement
            <br />
            to{" "}
            <span className="text-gradient-cyan">Submission.</span>
          </h1>

          {/* Sub */}
          <p className="text-lg sm:text-xl text-[rgba(255,255,255,0.65)] leading-relaxed mb-8 max-w-xl font-light">
            The AI platform that connects healthcare suppliers and buyers from tender ingestion to award, with a full audit trail and compliance built in.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <button
              onClick={() => scrollTo("products")}
              className="btn-cyan text-sm py-3 px-6 font-semibold"
            >
              Explore the Platform
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white border border-white/20 rounded-md hover:bg-white/10 transition-all duration-180"
            >
              Request a Demo
            </button>
          </div>

          {/* Stats bar */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-8 border-t border-white/10">
            <div>
              <div className="font-display text-3xl font-800 text-white">
                <AnimatedCounter end={80} suffix="%" />
                <span className="text-[#00d4ff]">+</span>
              </div>
              <div className="text-xs text-[rgba(255,255,255,0.5)] mt-1 font-medium">Reduction in submission time</div>
            </div>
            <div>
              <div className="font-display text-3xl font-800 text-white">
                {"<"}<AnimatedCounter end={1} suffix=" day" />
              </div>
              <div className="text-xs text-[rgba(255,255,255,0.5)] mt-1 font-medium">From 3 to 6 weeks of manual work</div>
            </div>
            <div>
              <div className="font-display text-3xl font-800 text-[#00d4ff]">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-xs text-[rgba(255,255,255,0.5)] mt-1 font-medium">Decisions in immutable audit log</div>
            </div>
            <div>
              <div className="font-display text-3xl font-800 text-white">
                <AnimatedCounter end={15} />
              </div>
              <div className="text-xs text-[rgba(255,255,255,0.5)] mt-1 font-medium">HITL gates per tender</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/30" />
        <div className="w-1 h-1 rounded-full bg-white/30" />
      </div>
    </section>
  );
}
