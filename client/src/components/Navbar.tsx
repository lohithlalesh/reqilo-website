/* 
 * REQILO NAVBAR
 * Design: Sticky frosted glass nav, Space Grotesk logo, clean links
 * Light theme with deep navy text, cyan accent on CTA
 */

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
            <div className="w-8 h-8 rounded-lg bg-[#0a0f1e] flex items-center justify-center flex-shrink-0">
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
              <span className="font-display font-700 text-[#0a0f1e] text-lg leading-none tracking-tight">Reqilo</span>
              <div className="section-label text-[#6b7280] text-[9px] leading-none mt-0.5">REQUIRED INTELLIGENCE.</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Platform", id: "platform" },
              { label: "Products", id: "products" },
              { label: "How It Works", id: "workflow" },
              { label: "Technology", id: "knowledge-core" },
              { label: "Company", id: "why-now" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-3 py-2 text-sm font-medium text-[#374151] hover:text-[#0a0f1e] transition-colors duration-150 rounded-md hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="btn-outline text-sm py-2 px-4"
            >
              Sign In
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-primary text-sm py-2 px-4"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-[#374151] hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {[
              { label: "Platform", id: "platform" },
              { label: "Products", id: "products" },
              { label: "How It Works", id: "workflow" },
              { label: "Technology", id: "knowledge-core" },
              { label: "Company", id: "why-now" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-3 py-2.5 text-sm font-medium text-[#374151] hover:text-[#0a0f1e] hover:bg-gray-50 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <button onClick={() => scrollTo("contact")} className="btn-outline w-full justify-center">
                Sign In
              </button>
              <button onClick={() => scrollTo("contact")} className="btn-primary w-full justify-center">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
