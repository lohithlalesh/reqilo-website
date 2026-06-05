/*
 * CTA SECTION — Light Theme
 * Design: Dual CTA cards with contact form
 */

import { useState } from "react";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    type: "supplier",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="w-full bg-navy px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-white leading-tight mb-6">
            Ready to transform
            <br />
            healthcare procurement?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join leading healthcare buyers and suppliers across the GCC and Europe.
          </p>
        </div>

        {/* Dual CTA cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Supplier CTA */}
          <div className="bg-white/5 rounded-lg p-8 border border-white/10 hover:border-teal transition">
            <h3 className="font-display text-2xl font-700 text-white mb-3">For Suppliers</h3>
            <p className="text-gray-300 mb-6">
              Win more tenders in less time with AI-assisted submission.
            </p>
            <button className="w-full px-6 py-3 bg-teal text-navy font-semibold rounded hover:bg-opacity-90 transition">
              Get Supplier Access
            </button>
          </div>

          {/* Buyer CTA */}
          <div className="bg-white/5 rounded-lg p-8 border border-white/10 hover:border-cyan transition">
            <h3 className="font-display text-2xl font-700 text-white mb-3">For Buyers</h3>
            <p className="text-gray-300 mb-6">
              Run defensible procurement with a full compliance trail.
            </p>
            <button className="w-full px-6 py-3 bg-cyan text-navy font-semibold rounded hover:bg-opacity-90 transition">
              Get Buyer Access
            </button>
          </div>
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto bg-white/5 rounded-lg p-8 border border-white/10">
          <h3 className="font-display text-2xl font-700 text-white mb-6">Request a Demo</h3>

          {submitted ? (
            <div className="bg-teal/20 border border-teal rounded-lg p-6 text-center">
              <p className="text-white font-semibold">Thank you! We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-teal"
                  required
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-teal"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Organization Name"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-teal"
                required
              />

              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-teal"
              >
                <option value="supplier" className="bg-navy">Supplier / Distributor</option>
                <option value="buyer" className="bg-navy">Buyer / Institution</option>
                <option value="investor" className="bg-navy">Investor / Partner</option>
              </select>

              <textarea
                placeholder="Tell us about your procurement challenge..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-teal resize-none"
              />

              <button
                type="submit"
                className="w-full px-6 py-3 bg-teal text-navy font-semibold rounded hover:bg-opacity-90 transition"
              >
                Send Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
