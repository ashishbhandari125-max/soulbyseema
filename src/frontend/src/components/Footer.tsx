import { Heart, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "About Seema", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Courses", href: "#courses" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact & Booking", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0A051A" }} className="text-soul-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-shimmer mb-3">
              SoulBySeema
            </h3>
            <p className="text-soul-text-light/50 text-sm leading-relaxed mb-4">
              Healing souls, transforming lives
            </p>
            <p className="text-soul-gold/70 text-sm italic mb-6">
              Namaste 🙏 — Your journey to healing begins here
            </p>
            <p className="text-soul-text-light/40 text-xs">
              Healing clients globally since 2010
            </p>
            <p className="text-soul-text-light/40 text-xs mt-1">
              Available via phone &amp; video call worldwide
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-soul-text-light/80 uppercase tracking-widest text-xs mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(href)}
                    className="text-soul-text-light/50 hover:text-soul-gold transition-colors duration-200 text-sm"
                    data-ocid="footer.link"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-soul-text-light/80 uppercase tracking-widest text-xs mb-5">
              Connect
            </h4>
            <div className="space-y-3 mb-4">
              <a
                href="mailto:soulbyseema.official@gmail.com"
                className="flex items-center gap-3 text-soul-text-light/60 hover:text-soul-gold transition-colors duration-200 text-sm"
              >
                <Mail size={15} style={{ color: "#C9A24A" }} />
                soulbyseema.official@gmail.com
              </a>
              <a
                href="https://wa.me/919999885995"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-soul-text-light/60 hover:text-soul-gold transition-colors duration-200 text-sm"
              >
                <Phone size={15} style={{ color: "#C9A24A" }} />
                +91 9999885995
              </a>
            </div>
            <p className="text-soul-text-light/40 text-xs leading-relaxed">
              Reach out via email or WhatsApp for bookings and enquiries.
            </p>
          </div>
        </div>

        <div
          className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderColor: "rgba(201,162,74,0.15)" }}
        >
          <p className="text-soul-text-light/40">
            © {year} SoulBySeema.com. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-soul-text-light/30 hover:text-soul-text-light/50 transition-colors flex items-center gap-1"
          >
            Built with <Heart size={10} className="text-soul-gold/50" /> using
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
