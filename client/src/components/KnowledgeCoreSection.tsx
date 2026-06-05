/*
 * KNOWLEDGE CORE SECTION — Light Theme
 * Design: Central node-and-spoke diagram showing platform expansion
 * Reqilo Health (Active), future verticals with dashed lines
 */

export default function KnowledgeCoreSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="mb-16">
          <span className="section-label">The Engine</span>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-navy leading-tight mt-4">
            Knowledge Core.
            <br />
            <span className="text-teal">The moat that compounds.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mt-6">
            Every tender ingested deepens the Knowledge Core. Product taxonomies, supplier credentials, compliance evidence — a domain graph that sharpens with every customer.
          </p>
        </div>

        {/* Node-and-spoke diagram */}
        <div className="mb-16 bg-gray-50 rounded-lg p-12 border border-gray-200">
          <svg viewBox="0 0 400 300" className="w-full h-auto">
            {/* Central node */}
            <circle cx="200" cy="150" r="40" fill="#00c9a7" opacity="0.1" stroke="#00c9a7" strokeWidth="2" />
            <circle cx="200" cy="150" r="30" fill="#00c9a7" stroke="#00c9a7" strokeWidth="2" />
            <text x="200" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">
              Knowledge
            </text>
            <text x="200" y="170" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">
              Core
            </text>

            {/* Spokes and verticals */}
            {[
              { name: "Health", active: true, angle: 0 },
              { name: "Energy", active: false, angle: 90 },
              { name: "Aviation", active: false, angle: 180 },
              { name: "Engineering", active: false, angle: 270 },
            ].map((v) => {
              const rad = (v.angle * Math.PI) / 180;
              const x2 = 200 + 120 * Math.cos(rad);
              const y2 = 150 + 120 * Math.sin(rad);

              return (
                <g key={v.name}>
                  {/* Line */}
                  <line
                    x1="200"
                    y1="150"
                    x2={x2}
                    y2={y2}
                    stroke={v.active ? "#00c9a7" : "#d1d5db"}
                    strokeWidth="2"
                    strokeDasharray={v.active ? "0" : "4"}
                  />
                  {/* Vertical node */}
                  <circle cx={x2} cy={y2} r="20" fill={v.active ? "#00c9a7" : "#e5e7eb"} stroke={v.active ? "#00c9a7" : "#d1d5db"} strokeWidth="2" />
                  <text x={x2} y={y2 + 5} textAnchor="middle" fontSize="10" fontWeight="bold" fill={v.active ? "white" : "#9ca3af"}>
                    {v.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {[
            { label: "Tender Ingestion", desc: "PDFs parsed, classified, structured" },
            { label: "Spec Extraction", desc: "Requirements mapped to catalog" },
            { label: "Compliance Evidence", desc: "Regulatory checks automated" },
            { label: "Multi-Supplier Compare", desc: "Side-by-side gap analysis" },
            { label: "Audit Trail", desc: "Immutable decision log" },
          ].map((cap) => (
            <div key={cap.label} className="text-center">
              <div className="font-semibold text-navy text-sm mb-1">{cap.label}</div>
              <div className="text-xs text-gray-600">{cap.desc}</div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-semibold text-navy">Same Knowledge Core. Same AI.</span> Different domain ontology. The moat compounds with every vertical.
          </p>
          <div className="flex flex-wrap gap-3">
            {["UAE PDPL", "KSA PDPL", "GDPR", "SOC 2", "ISO 27001", "EU AI Act", "MDR", "HIPAA-ready"].map((badge) => (
              <span key={badge} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
