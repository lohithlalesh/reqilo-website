/*
 * FOOTER — Light Theme
 * Design: Navy background with white text, minimal links
 */

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-navy text-white px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <button onClick={() => scrollTo("hero")} className="font-bold text-lg mb-2 hover:opacity-80 transition">
              Reqilo
            </button>
            <p className="text-sm text-gray-400">Healthcare Procurement Intelligence</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => scrollTo("platform")} className="hover:text-white transition">Platform</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-white transition">Solutions</button></li>
              <li><button onClick={() => scrollTo("knowledge-core")} className="hover:text-white transition">Technology</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => scrollTo("why-now")} className="hover:text-white transition">Why Now</button></li>
              <li><button onClick={() => scrollTo("moat")} className="hover:text-white transition">The Moat</button></li>
              <li><button onClick={() => scrollTo("contact")} className="hover:text-white transition">Contact</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
              <li><a href="#" className="hover:text-white transition">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">© 2026 Reqilo. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
