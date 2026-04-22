import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, Sparkles, Sun } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Book Your Session",
    titleHi: "अपना सत्र बुक करें",
    desc: "Contact via WhatsApp or fill the booking form. Choose your service and preferred time. Seema ji will personally confirm your appointment within 24 hours.",
  },
  {
    number: "02",
    icon: Sun,
    title: "Connect with Seema Ji",
    titleHi: "सीमा जी से जुड़ें",
    desc: "At your scheduled time, connect from anywhere in the world — a phone call or video session. All you need is a quiet space and an open heart.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Begin Your Journey",
    titleHi: "अपनी यात्रा शुरू करें",
    desc: "Experience healing energy flow across any distance. Receive personalised guidance and begin your transformation — body, mind, and soul.",
  },
];

const DIVIDER_GOLD = "rgba(201,162,74,0.35)";

export default function HowItWorksSection() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0e0520 0%, #12061E 100%)",
      }}
    >
      {/* Background sacred geometry */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500' viewBox='0 0 500 500'%3E%3Ccircle cx='250' cy='250' r='230' fill='none' stroke='%23C9A24A' stroke-width='0.8'/%3E%3Ccircle cx='250' cy='250' r='170' fill='none' stroke='%23C9A24A' stroke-width='0.8'/%3E%3Ccircle cx='250' cy='250' r='110' fill='none' stroke='%23C9A24A' stroke-width='0.8'/%3E%3Cpolygon points='250,40 460,360 40,360' fill='none' stroke='%23C9A24A' stroke-width='0.8'/%3E%3Cpolygon points='250,460 40,140 460,140' fill='none' stroke='%23C9A24A' stroke-width='0.8'/%3E%3C%2Fsvg%3E")`,
          backgroundSize: "500px 500px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Ambient gold orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(201,162,74,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className="text-center mb-20 reveal"
          data-ocid="howitworks.section"
        >
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(201,162,74,0.75)" }}
          >
            ✦ Your Sacred Path ✦
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-5"
            style={{ color: "#f2edf7" }}
          >
            How It Works
          </h2>
          <p
            className="text-lg md:text-xl italic font-light max-w-xl mx-auto"
            style={{ color: "rgba(201,162,74,0.8)" }}
          >
            Your Path to Healing in 3 Simple Steps
          </p>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-7">
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,162,74,0.6))",
              }}
            />
            <span style={{ color: "rgba(201,162,74,0.7)", fontSize: "1.1rem" }}>
              ॐ
            </span>
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(201,162,74,0.6))",
              }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-0">
          {steps.map(({ number, icon: Icon, title, titleHi, desc }, i) => (
            <div
              key={number}
              className={`flex flex-col md:flex-1 items-center text-center px-4 md:px-8 reveal reveal-delay-${i + 1}`}
              data-ocid={`howitworks.item.${i + 1}`}
            >
              {/* Step card */}
              <div
                className="relative w-full max-w-xs mx-auto rounded-2xl p-7 transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(201,162,74,0.10) 0%, rgba(18,6,30,0.85) 100%)",
                  border: "1px solid rgba(201,162,74,0.28)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  boxShadow:
                    "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(201,162,74,0.15)",
                }}
              >
                {/* Number badge */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 animate-pulse-gold"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(201,162,74,0.22) 0%, rgba(201,162,74,0.06) 100%)",
                    border: "2px solid rgba(201,162,74,0.55)",
                    boxShadow: "0 0 20px rgba(201,162,74,0.2)",
                  }}
                >
                  <span
                    className="font-serif text-2xl font-bold"
                    style={{ color: "#F0D080" }}
                  >
                    {number}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <Icon
                    size={28}
                    style={{ color: "rgba(201,162,74,0.85)" }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-serif text-xl font-semibold mb-1"
                  style={{ color: "#f2edf7" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm mb-4 tracking-wide"
                  style={{ color: "rgba(201,162,74,0.65)" }}
                >
                  {titleHi}
                </p>

                {/* Desc */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(242,237,247,0.62)" }}
                >
                  {desc}
                </p>
              </div>

              {/* Connector — vertical on mobile, horizontal on desktop */}
              {i < steps.length - 1 && (
                <>
                  {/* Mobile: vertical line */}
                  <div className="md:hidden flex flex-col items-center my-3">
                    <div
                      className="w-px h-10"
                      style={{
                        background: `linear-gradient(to bottom, ${DIVIDER_GOLD}, transparent)`,
                      }}
                    />
                    <span
                      style={{
                        color: "rgba(201,162,74,0.5)",
                        fontSize: "1rem",
                      }}
                    >
                      ✦
                    </span>
                    <div
                      className="w-px h-10"
                      style={{
                        background: `linear-gradient(to bottom, transparent, ${DIVIDER_GOLD})`,
                      }}
                    />
                  </div>

                  {/* Desktop: horizontal line (absolutely positioned between cards) */}
                  <div
                    className="hidden md:block absolute top-[4.5rem] pointer-events-none"
                    style={{
                      left: `calc(${(i + 1) * (100 / steps.length)}% - 28px)`,
                      width: "56px",
                      zIndex: 2,
                    }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div
                        className="w-full h-px"
                        style={{
                          background: `linear-gradient(to right, ${DIVIDER_GOLD}, rgba(201,162,74,0.6), ${DIVIDER_GOLD})`,
                        }}
                      />
                      <span
                        className="text-xs"
                        style={{ color: "rgba(201,162,74,0.45)" }}
                      >
                        ✦
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal reveal-delay-4">
          <p
            className="text-sm mb-6 italic"
            style={{ color: "rgba(242,237,247,0.5)" }}
          >
            Ready to begin your healing journey?
          </p>
          <a
            href="https://wa.me/919999885995?text=Namaste%20Seema%20ji%2C%20I%20would%20like%20to%20book%20a%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base"
            data-ocid="howitworks.primary_button"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book a Session Now
          </a>
        </div>
      </div>
    </section>
  );
}
