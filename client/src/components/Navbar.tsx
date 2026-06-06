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
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo("hero")}>
            <img src="/manus-storage/Reqilologo_c72a6e54.svg" alt="Reqilo" className="h-16 w-auto" />
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
