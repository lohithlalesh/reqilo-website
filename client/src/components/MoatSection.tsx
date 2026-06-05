/*
 * MOAT SECTION — Light Theme
 * Design: Four defensibility cards with navy text and teal accents
 */

export default function MoatSection() {
  const moats = [
    {
      title: "Two-Sided Structural Lock-In",
      desc: "Suppliers want to be where the buyers run tenders. Buyers want suppliers who can respond fast. Firewalled but adjacent — the network effect is asymmetric and defensible.",
    },
    {
      title: "Domain Graph Compounds",
      desc: "Every tender ingested sharpens the Knowledge Core. Taxonomies, supplier credentials, compliance evidence. After 500 tenders, the moat is insurmountable.",
    },
    {
      title: "Regulatory Moat",
      desc: "Compliance is not a feature — it's the product. PDPL, GDPR, AI Act, MDR. Reqilo is built for regulation, not retrofitted. Competitors will chase.",
    },
    {
      title: "Vertical Expansion Playbook",
      desc: "Same Knowledge Core. Same AI. Different domain ontology. Energy, Aviation, Engineering. Each vertical deepens the graph and expands the moat.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="mb-16">
          <span className="section-label">The Moat</span>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-navy leading-tight mt-4">
            Why this is defensible —
            <br />
            <span className="text-teal">and why it gets harder to copy.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mt-6">
            Four structural advantages that compound with every customer and every tender processed.
          </p>
        </div>

        {/* Moats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {moats.map((moat, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-700 text-navy">{moat.title}</h3>
              </div>
              <p className="text-gray-600">{moat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
