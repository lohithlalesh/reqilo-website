/* 
 * REQILO FOOTER
 * Design: Dark navy, minimal, compliance info, Masdar City branding
 */

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060b14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => scrollTo("hero")}>
              <div className="w-8 h-8 rounded-lg bg-[#0a0f1e] border border-white/10 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6L12 2z" stroke="#00d4ff" strokeWidth="1.5" fill="none"/>
                  <circle cx="9" cy="10" r="1.5" fill="#00d4ff"/>
                  <circle cx="15" cy="10" r="1.5" fill="#2563eb"/>
                  <circle cx="12" cy="15" r="1.5" fill="#00d4ff"/>
                  <line x1="9" y1="10" x2="15" y2="10" stroke="#00d4ff" strokeWidth="0.8" opacity="0.6"/>
                  <line x1="9" y1="10" x2="12" y2="15" stroke="#00d4ff" strokeWidth="0.8" opacity="0.6"/>
                  <line x1="15" y1="10" x2="12" y2="15" stroke="#2563eb" strokeWidth="0.8" opacity="0.6"/>
                </svg>
              </div>
              <div>
                <span className="font-display font-700 text-white text-base leading-none">Reqilo</span>
                <div className="text-[8px] text-white/30 font-medium tracking-widest uppercase mt-0.5">Required Intelligence.</div>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed mb-4">
              Healthcare procurement intelligence for the GCC and Europe.
            </p>
            <div className="text-white/25 text-xs">
              Reqilo Limited<br />
              Masdar City, Abu Dhabi · 2026
            </div>
          </div>

          {/* Platform */}
          <div>
            <div className="section-label text-white/30 mb-4 text-[10px]">Platform</div>
            <ul className="space-y-2.5">
              {[
                { label: "Overview", id: "platform" },
                { label: "Reqilo (Supplier)", id: "products" },
                { label: "Reqilo Px (Buyer)", id: "products" },
                { label: "Knowledge Core", id: "knowledge-core" },
                { label: "Platform Stack", id: "stack" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/40 text-sm hover:text-white/80 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <div className="section-label text-white/30 mb-4 text-[10px]">Solutions</div>
            <ul className="space-y-2.5">
              {[
                "Dx Diagnostics",
                "Rx Pharma",
                "Lx Labs",
                "Hospitals & MOHs",
                "Government Procurement",
                "Consortia & GPOs",
              ].map((item) => (
                <li key={item}>
                  <span className="text-white/40 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="section-label text-white/30 mb-4 text-[10px]">Company</div>
            <ul className="space-y-2.5">
              {[
                { label: "Why Now", id: "why-now" },
                { label: "The Moat", id: "moat" },
                { label: "Verticals", id: "stack" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/40 text-sm hover:text-white/80 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <div className="section-label text-white/30 mb-3 text-[10px]">Compliance</div>
              <div className="flex flex-wrap gap-1.5">
                {["PDPL", "GDPR", "SOC 2", "ISO 27001"].map((badge) => (
                  <span key={badge} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-white/30 font-mono-brand">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/25 text-xs">
            © 2026 Reqilo Limited. All rights reserved. Masdar City Free Zone, Abu Dhabi.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white/25 text-xs hover:text-white/50 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-white/25 text-xs hover:text-white/50 cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-white/25 text-xs hover:text-white/50 cursor-pointer transition-colors">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
