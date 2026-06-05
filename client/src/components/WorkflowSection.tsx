/*
 * WORKFLOW SECTION — Light Theme
 * Design: Horizontal 4-step workflow strip with connecting lines
 * Supplier and Buyer workflows side-by-side
 */

export default function WorkflowSection() {
  const supplierSteps = [
    { num: 1, title: "Requirements Ingestion", desc: "Tender PDFs ingested + classified" },
    { num: 2, title: "Intelligent Analysis", desc: "Requirements extracted, mapped to catalog" },
    { num: 3, title: "Solution Build", desc: "AI-drafted response, compliance-checked" },
    { num: 4, title: "Submission Ready", desc: "Reviewed, signed, exported in tender format" },
  ];

  const buyerSteps = [
    { num: 1, title: "Author Spec", desc: "Clinical req → tender, region-aware" },
    { num: 2, title: "Publish & Invite", desc: "Guest portal, vetted suppliers" },
    { num: 3, title: "Review Bids", desc: "Side-by-side, gaps flagged" },
    { num: 4, title: "Award & Contract", desc: "2-approver gate, audit-locked" },
  ];

  return (
    <section id="workflow" className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="mb-16">
          <span className="section-label">How It Works</span>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-navy leading-tight mt-4">
            Simplified. Auditable.
            <br />
            <span className="text-teal">AI-powered.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mt-6">
            Two parallel workflows, one shared intelligence layer. Every step is traceable, every decision is logged.
          </p>
        </div>

        {/* Supplier workflow */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-semibold text-navy">Reqilo — Supplier Workflow</h3>
            <span className="text-sm text-gray-500">3–6 weeks → &lt;1 day</span>
          </div>
          <div className="relative">
            <div className="grid grid-cols-4 gap-4">
              {supplierSteps.map((step, i) => (
                <div key={step.num} className="relative">
                  {/* Connecting line */}
                  {i < supplierSteps.length - 1 && (
                    <div className="absolute top-6 left-[calc(50%+24px)] right-[-50%] h-px bg-gray-200" />
                  )}
                  {/* Step circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center font-bold mb-4">
                    {step.num}
                  </div>
                  {/* Step content */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="font-semibold text-navy text-sm mb-1">{step.title}</div>
                    <div className="text-xs text-gray-600">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buyer workflow */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-semibold text-navy">Reqilo Px — Buyer Workflow</h3>
            <span className="text-sm text-gray-500">15 HITL gates • 2/2 approver signatures</span>
          </div>
          <div className="relative">
            <div className="grid grid-cols-4 gap-4">
              {buyerSteps.map((step, i) => (
                <div key={step.num} className="relative">
                  {/* Connecting line */}
                  {i < buyerSteps.length - 1 && (
                    <div className="absolute top-6 left-[calc(50%+24px)] right-[-50%] h-px bg-gray-200" />
                  )}
                  {/* Step circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-cyan text-white flex items-center justify-center font-bold mb-4">
                    {step.num}
                  </div>
                  {/* Step content */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="font-semibold text-navy text-sm mb-1">{step.title}</div>
                    <div className="text-xs text-gray-600">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shared layer */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Both workflows run on the same <span className="font-semibold text-navy">Knowledge Core</span> — tender ingestion · spec extraction · compliance evidence · multi-supplier comparison · audit trail
          </p>
        </div>
      </div>
    </section>
  );
}
