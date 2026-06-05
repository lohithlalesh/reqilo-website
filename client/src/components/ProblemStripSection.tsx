/*
 * PROBLEM STRIP — Light Theme
 * Design: Three-column stat row with large numbers and minimal labels
 * High contrast, white background, thin dividers between columns
 */

export default function ProblemStripSection() {
  const stats = [
    {
      before: "3–6 Weeks",
      after: "<1 Day",
      label: "Submission time",
    },
    {
      number: "80%+",
      label: "Reduction in submission time",
    },
    {
      number: "100%",
      label: "Decisions in audit log",
    },
  ];

  return (
    <section className="w-full bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {/* First stat: before/after */}
          <div className="py-8 md:py-12 px-6 md:px-8 text-center">
            <div className="text-gray-600 text-sm mb-2">Submission time</div>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl font-bold text-gray-400 line-through">3–6 weeks</span>
              <span className="text-gray-400">→</span>
              <span className="text-3xl font-bold text-navy">&lt;1 day</span>
            </div>
            <div className="text-xs text-gray-500">From 3–6 weeks of manual work</div>
          </div>

          {/* Second stat */}
          <div className="py-8 md:py-12 px-6 md:px-8 text-center">
            <div className="text-4xl font-bold text-navy mb-2">
              80<span className="text-teal">%+</span>
            </div>
            <div className="text-sm text-gray-600">Reduction in submission time</div>
          </div>

          {/* Third stat */}
          <div className="py-8 md:py-12 px-6 md:px-8 text-center">
            <div className="text-4xl font-bold text-navy mb-2">
              100<span className="text-teal">%</span>
            </div>
            <div className="text-sm text-gray-600">Decisions in immutable audit log</div>
          </div>
        </div>
      </div>
    </section>
  );
}
