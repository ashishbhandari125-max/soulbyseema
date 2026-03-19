import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Courses", href: "#courses" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2" data-ocid="nav.link">
            <span className="text-xl md:text-2xl font-serif text-shimmer">
              SoulBySeema
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                className="text-sm text-soul-text-light/80 hover:text-soul-gold transition-colors duration-200 font-medium"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/admin"
              className="text-xs text-soul-text-light/40 hover:text-soul-gold transition-colors duration-200"
              data-ocid="nav.link"
            >
              Admin
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden text-soul-text-light p-2"
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(18,6,30,0.97)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                className="text-left text-soul-text-light/90 hover:text-soul-gold transition-colors duration-200 text-lg py-2 border-b border-white/10"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/admin"
              className="text-soul-text-light/40 text-sm pt-2"
              data-ocid="nav.link"
            >
              Admin Panel
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
