import { ChevronDown } from "lucide-react";
import { useState } from "react";
import AppointmentPopup from "./AppointmentPopup";
import SacredLotus from "./SacredLotus";

const orbs = [
  {
    w: 300,
    h: 300,
    top: "10%",
    left: "5%",
    delay: "0s",
    dur: "14s",
    type: 0,
    opacity: 0.25,
  },
  {
    w: 180,
    h: 180,
    top: "60%",
    left: "80%",
    delay: "3s",
    dur: "11s",
    type: 1,
    opacity: 0.3,
  },
  {
    w: 120,
    h: 120,
    top: "30%",
    left: "70%",
    delay: "1s",
    dur: "9s",
    type: 2,
    opacity: 0.2,
  },
  {
    w: 200,
    h: 200,
    top: "75%",
    left: "15%",
    delay: "5s",
    dur: "13s",
    type: 0,
    opacity: 0.2,
  },
  {
    w: 80,
    h: 80,
    top: "20%",
    left: "45%",
    delay: "2s",
    dur: "8s",
    type: 1,
    opacity: 0.35,
  },
  {
    w: 50,
    h: 50,
    top: "50%",
    left: "55%",
    delay: "4s",
    dur: "7s",
    type: 0,
    opacity: 0.4,
  },
  {
    w: 60,
    h: 60,
    top: "85%",
    left: "65%",
    delay: "6s",
    dur: "10s",
    type: 2,
    opacity: 0.25,
  },
  {
    w: 40,
    h: 40,
    top: "40%",
    left: "25%",
    delay: "1.5s",
    dur: "6s",
    type: 1,
    opacity: 0.45,
  },
];

function getOrbBg(type: number, opacity: number) {
  if (type === 0)
    return `radial-gradient(circle, rgba(201,162,74,${opacity}) 0%, transparent 70%)`;
  if (type === 1)
    return `radial-gradient(circle, rgba(139,92,246,${opacity}) 0%, transparent 70%)`;
  return `radial-gradient(circle, rgba(59,130,246,${opacity * 0.6}) 0%, transparent 70%)`;
}

const orbKeys = ["a", "b", "c", "d", "e", "f", "g", "h"];

const WHATSAPP_NUMBER = "919999885995";

export default function HeroSection() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Namaste%20Seema%20ji%2C%20I%20would%20like%20to%20book%20a%20session`;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #12061E 0%, #1A0A2A 40%, #07162F 100%)",
      }}
    >
      {orbs.map((orb, i) => (
        <div
          key={orbKeys[i]}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.w,
            height: orb.h,
            top: orb.top,
            left: orb.left,
            background: getOrbBg(orb.type, orb.opacity),
            animation: `floatOrb ${orb.dur} ease-in-out ${orb.delay} infinite`,
          }}
        />
      ))}

      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Ccircle cx='200' cy='200' r='180' fill='none' stroke='%23C9A24A' stroke-width='0.5'/%3E%3Ccircle cx='200' cy='200' r='140' fill='none' stroke='%23C9A24A' stroke-width='0.5'/%3E%3Ccircle cx='200' cy='200' r='100' fill='none' stroke='%23C9A24A' stroke-width='0.5'/%3E%3Cpolygon points='200,30 370,290 30,290' fill='none' stroke='%23C9A24A' stroke-width='0.5'/%3E%3Cpolygon points='200,370 30,110 370,110' fill='none' stroke='%23C9A24A' stroke-width='0.5'/%3E%3C%2Fsvg%3E")`,
          backgroundSize: "400px 400px",
          backgroundRepeat: "repeat",
        }}
      />

      <div
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none lotus-hero-pos"
        style={{ zIndex: 1 }}
      >
        <SacredLotus />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in"
          style={{
            background: "rgba(201,162,74,0.15)",
            border: "1px solid rgba(201,162,74,0.35)",
          }}
        >
          <span className="text-soul-gold text-sm font-medium tracking-widest uppercase">
            Namaste 🙏
          </span>
        </div>

        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-6 animate-fade-in-up text-soul-text-light"
          style={{ animationDelay: "0.1s" }}
        >
          Heal Your Soul.
          <br />
          <span className="text-shimmer">Transform Your Life.</span>
        </h1>

        <p
          className="text-soul-gold text-base sm:text-lg md:text-xl font-medium tracking-wide mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          Spiritual Wellness Coach Online &nbsp;·&nbsp; Online Reiki Healing
          Sessions &nbsp;·&nbsp; Aura Cleansing &amp; Energy Balancing
        </p>

        <p
          className="text-soul-text-light/60 text-sm md:text-base mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.35s" }}
        >
          Serving clients globally — India, USA, UK, Canada, UAE, Australia
          &amp; worldwide
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="btn-gold text-base"
            data-ocid="hero.primary_button"
          >
            🪷 Book Appointment
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass text-base"
            data-ocid="hero.secondary_button"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              role="img"
              aria-label="WhatsApp"
            >
              <title>WhatsApp</title>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quick WhatsApp
          </a>

          <button
            type="button"
            onClick={scrollToServices}
            className="btn-glass text-base"
          >
            Explore Services
          </button>
        </div>

        <p
          className="text-xs italic mt-5 animate-fade-in-up"
          style={{
            animationDelay: "0.6s",
            color: "rgba(201,162,74,0.55)",
            letterSpacing: "0.02em",
          }}
        >
          ✦ Limited sessions available this month — secure yours today
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-soul-gold/50">
        <ChevronDown size={28} />
      </div>

      <AppointmentPopup
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </section>
  );
}
