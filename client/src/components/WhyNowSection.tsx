/*
 * WHY NOW SECTION — Light Theme
 * Design: Four market forces cards with navy text and teal accents
 */

export default function WhyNowSection() {
  const forces = [
    {
      title: "Regulatory Tailwind",
      desc: "UAE PDPL, KSA PDPL, EU AI Act and MDR are forcing buyers to demand traceable, auditable procurement. Manual processes can't keep up.",
      highlight: "Government and hospital buyers cannot procure from vendors without a compliant stack.",
    },
    {
      title: "GCC Mega-Spend",
      desc: "PureHealth, SEHA, NUPCO, Bahrain MOH and Kuwait MOH have all consolidated procurement. The buyer side is centralizing fast.",
      highlight: "Centralized procurement creates a winner-takes-most dynamic for compliant platforms.",
    },
    {
      title: "AI Maturity",
      desc: "Claude Sonnet 4.6 and equivalents finally hit the accuracy bar for regulated document workflows. Two years ago this product wasn't buildable.",
      highlight: "The technology window is now — and Reqilo is first to market with a domain-specific stack.",
    },
    {
      title: "EU Expansion Lane",
      desc: "GDPR-ready architecture from day one plus an in-region partner means Reqilo lands in EU healthcare procurement in Year 2 without rebuilding.",
      highlight: "Same Knowledge Core. Same AI. Different domain ontology.",
    },
  ];

  return (
    <section id="why-now" className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="mb-16">
          <span className="section-label">Why Now</span>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-navy leading-tight mt-4">
            Three forces converge —
            <br />
            <span className="text-teal">first time in 20 years.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mt-6">
            The regulatory environment, market consolidation, and AI capability have aligned simultaneously. The window is now.
          </p>
        </div>

        {/* Forces grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {forces.map((force, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-teal transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <h3 className="font-display text-xl font-700 text-navy">{force.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{force.desc}</p>
              <div className="bg-white rounded p-3 border-l-2 border-teal">
                <p className="text-sm text-navy font-semibold">{force.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
