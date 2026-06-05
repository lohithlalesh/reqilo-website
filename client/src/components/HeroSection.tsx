/*
 * REQILO HERO — Light Theme
 * Design: White background, navy heading, cyan accents
 * Full-width centred layout with two CTAs and buyer logos below
 */

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Subheading */}
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="section-label">Healthcare Procurement Intelligence</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-600">GCC • Europe</span>
        </div>

        {/* Main heading */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-display font-800 text-navy leading-tight mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          From Requirement <br />
          to <span className="text-teal">Submission.</span>
        </h1>

        {/* Subheading copy */}
        <p
          className={`text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          The AI procurement platform for healthcare distributors, hospitals, and ministries across the GCC and Europe.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button className="px-6 py-3 bg-navy text-white font-medium rounded hover:bg-opacity-90 transition">
            Request Access
          </button>
          <button className="px-6 py-3 border border-gray-300 text-navy font-medium rounded hover:bg-gray-50 transition">
            See How It Works
          </button>
        </div>

        {/* Buyer logos */}
        <div
          className={`pt-12 border-t border-gray-200 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-6">Trusted by leading healthcare buyers</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {["NUPCO", "SEHA", "PureHealth", "Bahrain MOH"].map((org) => (
              <div key={org} className="text-sm font-semibold text-gray-400">
                {org}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
