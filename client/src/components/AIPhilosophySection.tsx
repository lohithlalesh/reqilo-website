/* 
 * REQILO AI PHILOSOPHY SECTION
 * Design: Dark section, Vercel-style code terminal showcase
 * "AI proposes. Humans dispose. Audit log captures everything."
 * Shows the HITL principle with a terminal-style visualization
 */

import { useEffect, useRef, useState } from "react";
import { CheckCircle, AlertCircle, Clock, Lock } from "lucide-react";

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

const auditLog = [
  { time: "09:14:22", event: "Tender ingested", detail: "MOH-UAE-2026-DX-0441.pdf", status: "ok" },
  { time: "09:14:45", event: "Requirements extracted", detail: "47 line items classified", status: "ok" },
  { time: "09:15:01", event: "Catalog match", detail: "43/47 items matched (91.5%)", status: "ok" },
  { time: "09:15:18", event: "Compliance check", detail: "UAE PDPL · MDR · ISO 13485", status: "ok" },
  { time: "09:16:02", event: "Draft response generated", detail: "AI confidence: 94.2%", status: "pending" },
  { time: "09:16:15", event: "HITL gate #1 — Review required", detail: "Awaiting: procurement@company.ae", status: "waiting" },
  { time: "09:31:44", event: "Human approved", detail: "Reviewed by: J. Al-Rashidi", status: "ok" },
  { time: "09:31:44", event: "Decision logged", detail: "Immutable · SHA-256 signed", status: "locked" },
];

const statusConfig = {
  ok: { icon: CheckCircle, color: "#00d4ff", bg: "rgba(0,212,255,0.1)" },
  pending: { icon: Clock, color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  waiting: { icon: AlertCircle, color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  locked: { icon: Lock, color: "#2563eb", bg: "rgba(37,99,235,0.1)" },
};

export default function AIPhilosophySection() {
  const titleRef = useReveal();
  const terminalRef = useReveal(0.05);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setVisibleLines(i);
            if (i >= auditLog.length) clearInterval(interval);
          }, 200);
        }
      },
      { threshold: 0.3 }
    );
    const el = document.getElementById("audit-terminal");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(rgba(0,212,255,1) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div ref={titleRef} className="reveal">
            <div className="section-label text-[#00d4ff] mb-4">The HITL Principle</div>
            <h2 className="font-display text-4xl sm:text-5xl font-800 text-white leading-tight mb-6">
              AI proposes.
              <br />
              Humans dispose.
              <br />
              <span className="text-gradient-cyan">Audit log captures everything.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Every AI recommendation passes through a human gate before it affects a tender. Every decision — approve, reject, or modify — is logged immutably. No black boxes. No silent automation.
            </p>
            <div className="space-y-4">
              {[
                { label: "15 HITL gates per tender", desc: "AI does the work, humans make the call" },
                { label: "2/2 approver signatures", desc: "Award decisions require dual sign-off" },
                { label: "SHA-256 signed audit trail", desc: "Every action is cryptographically logged" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium text-sm">{item.label}</div>
                    <div className="text-white/40 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: terminal */}
          <div ref={terminalRef} className="reveal" id="audit-terminal">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Terminal header */}
              <div className="bg-[#111827] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 text-center">
                  <span className="font-mono-brand text-white/30 text-xs">reqilo-audit-log — live</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse-slow" />
              </div>
              {/* Terminal body */}
              <div className="bg-[#0d1117] p-5 space-y-2 min-h-[380px]">
                {auditLog.slice(0, visibleLines).map((line, i) => {
                  const cfg = statusConfig[line.status as keyof typeof statusConfig];
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-xs"
                      style={{ animation: "fadeIn 0.3s ease-out forwards" }}
                    >
                      <span className="font-mono-brand text-white/25 flex-shrink-0 mt-0.5">{line.time}</span>
                      <div
                        className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: cfg.bg }}
                      >
                        <cfg.icon size={11} style={{ color: cfg.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-white/80 font-medium">{line.event}</span>
                        <span className="text-white/30 ml-2">{line.detail}</span>
                      </div>
                    </div>
                  );
                })}
                {visibleLines < auditLog.length && (
                  <div className="flex items-center gap-2">
                    <span className="font-mono-brand text-white/25 text-xs">
                      {auditLog[visibleLines]?.time}
                    </span>
                    <div className="w-2 h-4 bg-[#00d4ff] opacity-70 animate-pulse" />
                  </div>
                )}
              </div>
            </div>
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(4px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
