/* 
 * REQILO NAVBAR — Light Theme
 * Design: White background, navy text, minimal bottom border on scroll
 * Sticky top navigation with logo, centre nav, and right CTAs
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 ${
        isScrolled ? "border-b border-gray-200 shadow-subtle" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 text-lg font-bold text-navy hover:opacity-80 transition"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <circle cx="12" cy="12" r="10" stroke="#0d1117" strokeWidth="1.5" fill="none" />
              <circle cx="8" cy="10" r="1.5" fill="#0d1117" />
              <circle cx="16" cy="10" r="1.5" fill="#00c9a7" />
              <circle cx="12" cy="16" r="1.5" fill="#0d1117" />
              <line x1="8" y1="10" x2="16" y2="10" stroke="#0d1117" strokeWidth="0.8" opacity="0.4" />
              <line x1="8" y1="10" x2="12" y2="16" stroke="#0d1117" strokeWidth="0.8" opacity="0.4" />
              <line x1="16" y1="10" x2="12" y2="16" stroke="#00c9a7" strokeWidth="0.8" opacity="0.4" />
            </svg>
            <span>Reqilo</span>
          </button>

          {/* Centre nav — desktop */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("platform")}
              className="text-sm text-gray-700 hover:text-navy transition"
            >
              Platform
            </button>
            <div className="relative group">
              <button className="text-sm text-gray-700 hover:text-navy transition flex items-center gap-1">
                Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-light opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button
                  onClick={() => scrollTo("suppliers")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  For Suppliers
                </button>
                <button
                  onClick={() => scrollTo("buyers")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  For Buyers
                </button>
                <button
                  onClick={() => scrollTo("manufacturers")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  For Manufacturers
                </button>
              </div>
            </div>
            <button
              onClick={() => scrollTo("why-now")}
              className="text-sm text-gray-700 hover:text-navy transition"
            >
              Why Now
            </button>
            <button
              onClick={() => scrollTo("company")}
              className="text-sm text-gray-700 hover:text-navy transition"
            >
              Company
            </button>
          </div>

          {/* Right CTAs — desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="px-4 py-2 text-sm font-medium text-navy hover:bg-gray-50 rounded transition"
            >
              Sign In
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-4 py-2 text-sm font-medium text-white bg-navy hover:bg-opacity-90 rounded transition"
            >
              Request Access
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
            <button
              onClick={() => scrollTo("platform")}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
            >
              Platform
            </button>
            <button
              onClick={() => scrollTo("solutions")}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollTo("why-now")}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
            >
              Why Now
            </button>
            <button
              onClick={() => scrollTo("company")}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
            >
              Company
            </button>
            <div className="px-4 pt-2 space-y-2 border-t border-gray-200">
              <button
                onClick={() => scrollTo("contact")}
                className="w-full px-4 py-2 text-sm font-medium text-navy hover:bg-gray-50 rounded transition"
              >
                Sign In
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-navy hover:bg-opacity-90 rounded transition"
              >
                Request Access
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
