/* 
 * REQILO TICKER SECTION
 * Design: Light strip between hero and platform sections
 * Shows market names and compliance badges in a scrolling marquee
 */

export default function TickerSection() {
  const items = [
    "PureHealth", "SEHA", "NUPCO", "Bahrain MOH", "Kuwait MOH",
    "UAE PDPL", "GDPR", "SOC 2", "ISO 27001", "EU AI Act",
    "Saudi MOH", "Abu Dhabi DOH", "DHA", "MDR", "HIPAA-ready",
    "PureHealth", "SEHA", "NUPCO", "Bahrain MOH", "Kuwait MOH",
    "UAE PDPL", "GDPR", "SOC 2", "ISO 27001", "EU AI Act",
  ];

  return (
    <div className="bg-[#f0f4f8] border-y border-gray-200 py-3 overflow-hidden">
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: "ticker 30s linear infinite",
          width: "max-content",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-xs font-medium text-[#6b7280] flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#00d4ff] inline-block flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
