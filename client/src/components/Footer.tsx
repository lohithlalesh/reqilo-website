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
            <div className="mb-4 cursor-pointer" onClick={() => scrollTo("hero")}>
              <img src="/manus-storage/Reqilologo_c72a6e54.svg" alt="Reqilo" className="h-12 w-auto mb-4" />
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
