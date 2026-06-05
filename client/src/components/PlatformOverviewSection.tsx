/*
 * PLATFORM OVERVIEW — Light Theme
 * Design: Two-column alternating sections with inline UI mockups
 * Supplier side and Buyer side products
 */

export default function PlatformOverviewSection() {
  return (
    <section id="platform" className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="mb-16">
          <span className="section-label">The Platform</span>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-navy leading-tight mt-4">
            One platform.
            <br />
            <span className="text-teal">Two firewalled products.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mt-6">
            AI proposes. Humans dispose. Audit log captures everything. Reqilo connects healthcare suppliers and buyers through a shared intelligence layer — with strict data separation between both sides.
          </p>
        </div>

        {/* Supplier side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Supplier Side</div>
            <h3 className="font-display text-3xl font-700 text-navy mb-4">Reqilo</h3>
            <p className="text-gray-600 mb-6">
              For distributors, labs, and manufacturers competing for healthcare tenders. Win more bids in less time with AI-assisted submission.
            </p>
            <div className="space-y-3">
              <div className="text-sm text-gray-700">
                <span className="font-semibold text-navy">Tenant Types:</span> Dx Diagnostics, Rx Pharma, Lx Labs, Dxm/Rxm Mfrs
              </div>
              <div className="text-sm text-gray-700">
                <span className="font-semibold text-navy">Modules:</span> Knowledge Core, TenderIQ, SolutionIQ, Ask Reqilo, InsightIQ, ConnectIQ, TrustIQ
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <svg viewBox="0 0 400 300" className="w-full h-auto">
              {/* Dashboard header */}
              <rect x="20" y="20" width="360" height="40" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" rx="4" />
              <text x="40" y="48" fontSize="14" fontWeight="600" fill="#0d1117">
                Active Tenders
              </text>

              {/* Table rows */}
              {[0, 1, 2].map((i) => (
                <g key={i}>
                  <rect x="20" y={80 + i * 50} width="360" height="45" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                  <rect x="40" y={90 + i * 50} width="200" height="25" fill="#f3f4f6" rx="3" />
                  <text x="50" y={107 + i * 50} fontSize="12" fill="#6b7280">
                    MOH-{i + 1}-2026
                  </text>
                  <rect x="280" y={90 + i * 50} width="60" height="25" fill="#d1fae5" rx="3" />
                  <text x="290" y={107 + i * 50} fontSize="12" fill="#059669" fontWeight="600">
                    {85 + i * 3}%
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Buyer side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 order-2 lg:order-1">
            <svg viewBox="0 0 400 300" className="w-full h-auto">
              {/* Table header */}
              <rect x="20" y="20" width="360" height="35" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" rx="4" />
              <text x="40" y="43" fontSize="12" fontWeight="600" fill="#6b7280">
                Supplier
              </text>
              <text x="180" y="43" fontSize="12" fontWeight="600" fill="#6b7280">
                Compliance
              </text>
              <text x="300" y="43" fontSize="12" fontWeight="600" fill="#6b7280">
                Status
              </text>

              {/* Table rows */}
              {[0, 1, 2].map((i) => (
                <g key={i}>
                  <rect x="20" y={65 + i * 50} width="360" height="45" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                  <text x="40" y={92 + i * 50} fontSize="12" fill="#0d1117" fontWeight="500">
                    Supplier {i + 1}
                  </text>
                  <rect x="180" y={75 + i * 50} width="80" height="25" fill="#dbeafe" rx="3" />
                  <text x="190" y={92 + i * 50} fontSize="12" fill="#1e40af" fontWeight="600">
                    {i === 0 ? "✓ Pass" : i === 1 ? "⚠ Review" : "✗ Fail"}
                  </text>
                  <circle cx="320" cy={97 + i * 50} r="8" fill={i === 0 ? "#10b981" : i === 1 ? "#f59e0b" : "#ef4444"} />
                </g>
              ))}
            </svg>
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Buyer Side</div>
            <h3 className="font-display text-3xl font-700 text-navy mb-4">Reqilo Px</h3>
            <p className="text-gray-600 mb-6">
              For ministries, hospitals, and consortia authoring and awarding tenders. Run defensible procurement with a full compliance trail.
            </p>
            <div className="space-y-3">
              <div className="text-sm text-gray-700">
                <span className="font-semibold text-navy">Tenant Types:</span> Gx Government, Hx Hospitals, Cx Consortia, Px-Pr Private
              </div>
              <div className="text-sm text-gray-700">
                <span className="font-semibold text-navy">Modules:</span> Knowledge Core, AuthorIQ, ReviewIQ, MarketIQ, ContractIQ, Ask Reqilo, InsightIQ, TrustIQ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
