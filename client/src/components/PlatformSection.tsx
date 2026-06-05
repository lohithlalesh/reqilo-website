/* 
 * REQILO PLATFORM SECTION
 * Design: Light background, two-sided platform overview
 * Shows the split between Supplier (Reqilo) and Buyer (Reqilo Px)
 * with the Knowledge Core at center
 */

import { useEffect, useRef } from "react";
import { Shield, Zap, Brain, FileCheck, ArrowRight } from "lucide-react";

const PLATFORM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663731614958/3mTd8vRSeY4gzRrW7oajvx/reqilo_platform_diagram-SkEA8PtqE7FGQcK6u3r9TE.webp";

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

export default function PlatformSection() {
  const titleRef = useReveal();
  const imgRef = useReveal(0.1);
  const cardsRef = useReveal();

  return (
    <section id="platform" className="section-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="reveal max-w-3xl mb-16">
          <div className="section-label text-[#00a8cc] mb-4">The Platform Play</div>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-[#0a0f1e] leading-tight mb-5">
            One platform.{" "}
            <span className="text-gradient-cyan">Two firewalled products.</span>
            <br />Both sides of the deal.
          </h2>
          <p className="text-lg text-[#4b5563] leading-relaxed">
            AI proposes. Humans dispose. Audit log captures everything. Reqilo connects healthcare suppliers and buyers through a shared intelligence layer with strict data separation between both sides.
          </p>
        </div>

        {/* Platform diagram image */}
        <div ref={imgRef} className="reveal mb-16">
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-2xl relative">
            <img
              src={PLATFORM_IMG}
              alt="Reqilo Two-Sided Platform Diagram"
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: 'inset 0 0 0 1px rgba(0,212,255,0.1)' }} />
          </div>
        </div>

        {/* Two product cards */}
        <div ref={cardsRef} className="reveal stagger grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Supplier Card */}
          <div className="card-light p-8 border-cyan-accent">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="section-label text-[#00a8cc] mb-2">Supplier Side</div>
                <h3 className="font-display text-2xl font-700 text-[#0a0f1e]">Reqilo</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#0a0f1e] flex items-center justify-center">
                <Zap size={18} className="text-[#00d4ff]" />
              </div>
            </div>
            <p className="text-[#4b5563] text-sm leading-relaxed mb-6">
              For distributors, labs, and manufacturers competing for healthcare tenders. Win more bids in less time with AI-assisted submission.
            </p>
            <div className="mb-6">
              <div className="section-label text-[#9ca3af] mb-3">Tenant Types</div>
              <div className="flex flex-wrap gap-2">
                {["Dx Diagnostics", "Rx Pharma", "Lx Labs", "Dxm/Rxm Mfrs"].map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-[#f0f9ff] text-[#0891b2] text-xs font-medium rounded-md border border-[#bae6fd]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label text-[#9ca3af] mb-3">Modules</div>
              <div className="flex flex-wrap gap-1.5">
                {["Knowledge Core", "TenderIQ", "SolutionIQ", "Ask Reqilo", "InsightIQ", "ConnectIQ", "TrustIQ"].map((m) => (
                  <span key={m} className="px-2 py-0.5 bg-gray-50 text-[#374151] text-xs font-mono-brand rounded border border-gray-200">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Buyer Card */}
          <div className="card-light p-8 border-t-2 border-t-[#2563eb]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="section-label text-[#2563eb] mb-2">Buyer Side</div>
                <h3 className="font-display text-2xl font-700 text-[#0a0f1e]">Reqilo Px</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center">
                <Shield size={18} className="text-[#2563eb]" />
              </div>
            </div>
            <p className="text-[#4b5563] text-sm leading-relaxed mb-6">
              For ministries, hospitals, and consortia authoring and awarding tenders. Run defensible procurement with a full compliance trail.
            </p>
            <div className="mb-6">
              <div className="section-label text-[#9ca3af] mb-3">Tenant Types</div>
              <div className="flex flex-wrap gap-2">
                {["Gx Government", "Hx Hospitals", "Cx Consortia", "Px-Pr Private"].map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-[#eff6ff] text-[#2563eb] text-xs font-medium rounded-md border border-[#bfdbfe]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label text-[#9ca3af] mb-3">Modules</div>
              <div className="flex flex-wrap gap-1.5">
                {["Knowledge Core", "AuthorIQ", "ReviewIQ", "MarketIQ", "ContractIQ", "Ask Reqilo", "InsightIQ", "TrustIQ"].map((m) => (
                  <span key={m} className="px-2 py-0.5 bg-gray-50 text-[#374151] text-xs font-mono-brand rounded border border-gray-200">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
