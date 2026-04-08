import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Treatments", path: "/treatments" },
  { label: "Press", path: "#" },
  { label: "Contact Us", path: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-prana-cream/90 backdrop-blur-md border-b border-border/50">
      <div className="prana-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-serif text-2xl md:text-3xl font-semibold text-prana-chocolate tracking-wider">
          Prana
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-prana-terracotta ${
                location.pathname === link.path ? "text-prana-terracotta" : "text-prana-charcoal/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="text-prana-charcoal/60 hover:text-prana-terracotta transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-prana-charcoal/60 hover:text-prana-terracotta transition-colors" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button
            className="md:hidden text-prana-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-prana-cream border-t border-border/50 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="block px-6 py-3 text-sm font-medium text-prana-charcoal/70 hover:text-prana-terracotta transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
