import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-prana-chocolate text-prana-warm-white">
    <div className="prana-container py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
        {/* Brand */}
        <div className="lg:col-span-2">
          <h3 className="font-serif text-2xl font-semibold mb-4 text-prana-warm-white">Prana</h3>
          <p className="text-sm leading-relaxed text-prana-warm-white/60 max-w-sm">
            Bridging ancient Ayurvedic wisdom with modern dermatological science to deliver holistic, 
            personalized skincare that nurtures body, mind, and spirit.
          </p>
          <div className="flex gap-4 mt-6">
            {["IG", "FB", "LI"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-9 h-9 rounded-full border border-prana-warm-white/20 flex items-center justify-center text-xs font-medium text-prana-warm-white/60 hover:text-prana-warm-white hover:border-prana-warm-white/50 transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-prana-warm-white/80">Navigate</h4>
          {["Home", "Our Story", "Treatments", "Press"].map((item) => (
            <Link key={item} to="#" className="block text-sm text-prana-warm-white/50 hover:text-prana-warm-white transition-colors mb-2">
              {item}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-prana-warm-white/80">Services</h4>
          {["Skin Rejuvenation", "Acne & Balance", "Anti-Aging", "Facial Treatments"].map((item) => (
            <Link key={item} to="/treatments" className="block text-sm text-prana-warm-white/50 hover:text-prana-warm-white transition-colors mb-2">
              {item}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-prana-warm-white/80">Contact</h4>
          <p className="text-sm text-prana-warm-white/50 mb-2">hello@pranaskincare.in</p>
          <p className="text-sm text-prana-warm-white/50 mb-2">+91 98765 43210</p>
          <p className="text-sm text-prana-warm-white/50">Mumbai, Maharashtra</p>
        </div>
      </div>

      <div className="border-t border-prana-warm-white/10 mt-12 pt-8 text-center">
        <p className="text-xs text-prana-warm-white/40">© 2026 Prana Skincare. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
