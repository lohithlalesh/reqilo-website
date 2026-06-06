/* 
 * REQILO CTA + CONTACT SECTION
 * Design: Dark navy, dual CTA paths for Supplier and Buyer
 * Simple contact form
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

export default function CTASection() {
  const titleRef = useReveal();
  const formRef = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", role: "supplier", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00d4ff]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="reveal text-center mb-16">
          <div className="section-label text-[#00d4ff] mb-4">Get Started</div>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-white leading-tight mb-6">
            Ready to transform
            <br />
            <span className="text-gradient-cyan">your procurement?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Whether you're competing for tenders or running them — Reqilo has a product built for your side of the deal.
          </p>
        </div>

        {/* Dual CTA cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="card-dark p-8 rounded-2xl border-cyan-accent group hover:bg-white/6 transition-all">
            <div className="section-label text-[#00d4ff] mb-3">For Suppliers</div>
            <h3 className="font-display font-700 text-white text-2xl mb-3">Win more tenders,<br />lose less time.</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Distributors, labs, and manufacturers competing for GCC and EU healthcare tenders. Submit in under a day.
            </p>
            <div className="space-y-2 mb-6">
              {["Dx Diagnostics", "Rx Pharma", "Lx Labs"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle size={14} className="text-[#00d4ff] flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
            <a
              href="#contact-form"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-cyan text-sm py-2.5 px-5 w-full justify-center"
            >
              Get Supplier Access <ArrowRight size={14} />
            </a>
          </div>

          <div className="card-dark p-8 rounded-2xl border-t-2 border-t-[#2563eb] group hover:bg-white/6 transition-all">
            <div className="section-label text-[#2563eb] mb-3">For Buyers</div>
            <h3 className="font-display font-700 text-white text-2xl mb-3">Defensible procurement,<br />faster.</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Ministries, hospitals, and consortia running healthcare tenders in the GCC and Europe. Full audit trail included.
            </p>
            <div className="space-y-2 mb-6">
              {["Gx Government", "Hx Hospitals", "Cx Consortia"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle size={14} className="text-[#2563eb] flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
            <a
              href="#contact-form"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 text-sm font-semibold text-white bg-[#2563eb] rounded-md hover:bg-[#1d4ed8] transition-all"
            >
              Get Buyer Access <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div ref={formRef} className="reveal" id="contact-form">
          <div className="max-w-2xl mx-auto">
            <div className="card-dark p-8 rounded-2xl">
              {submitted ? (
                <div className="text-center py-8">
                  <img src="/manus-storage/Reqilologo_c72a6e54.svg" alt="Reqilo" className="h-20 w-auto mx-auto mb-6" />
                  <div className="w-16 h-16 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-[#00d4ff]" />
                  </div>
                  <h3 className="font-display font-700 text-white text-xl mb-2">Request received.</h3>
                  <p className="text-white/50 text-sm">We will be in touch within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <img src="/manus-storage/Reqilologo_c72a6e54.svg" alt="Reqilo" className="h-12 w-auto" />
                    <h3 className="font-display font-700 text-white text-xl">Request a Demo</h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/50 text-xs font-medium mb-1.5">Full Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                          placeholder="Mohammed Osman"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-medium mb-1.5">Work Email</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                          placeholder="you@organization.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5">Organization</label>
                      <input
                        type="text"
                        required
                        value={form.org}
                        onChange={(e) => setForm({ ...form, org: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                        placeholder="Hospital, Ministry, or Distributor name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5">I am a</label>
                      <div className="flex gap-2">
                        {[
                          { value: "supplier", label: "Supplier / Distributor" },
                          { value: "buyer", label: "Buyer / Institution" },
                          { value: "investor", label: "Investor / Partner" },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setForm({ ...form, role: opt.value })}
                            className={`flex-1 py-2 text-xs font-medium rounded-lg border transition-all ${
                              form.role === opt.value
                                ? "bg-[#00d4ff]/10 border-[#00d4ff]/40 text-[#00d4ff]"
                                : "bg-white/5 border-white/10 text-white/40 hover:text-white/60"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5">Message (optional)</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#00d4ff]/50 transition-colors resize-none"
                        placeholder="Tell us about your procurement challenge..."
                      />
                    </div>
                    <button type="submit" className="btn-cyan w-full justify-center py-3">
                      Send Request <ArrowRight size={16} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
