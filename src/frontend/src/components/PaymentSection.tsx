import { useScrollReveal } from "@/hooks/useScrollReveal";

const indianMethods = [
  { name: "UPI", icon: "₹" },
  { name: "PhonePe", icon: "📱" },
  { name: "Google Pay", icon: "G" },
  { name: "PayTM", icon: "P" },
  { name: "Bank Transfer", icon: "🏦" },
];

const intlMethods = [
  { name: "PayPal", icon: "PP" },
  { name: "Wise", icon: "W" },
  { name: "SWIFT Transfer", icon: "🌐" },
  { name: "Western Union", icon: "WU" },
];

export default function PaymentSection() {
  const ref = useScrollReveal();

  return (
    <section
      className="py-20 md:py-28"
      style={{
        background: "linear-gradient(180deg, #0D0A1E 0%, #12061E 100%)",
      }}
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <p className="text-soul-gold font-medium tracking-widest uppercase text-sm mb-3">
            Payments
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-soul-text-light mb-4">
            Flexible Payment Options Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Indian clients */}
          <div className="glass-card p-7 reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🇮🇳</span>
              <h3 className="font-serif text-xl font-semibold text-soul-text-light">
                Indian Clients
              </h3>
            </div>
            <div className="space-y-3">
              {indianMethods.map(({ name, icon }) => (
                <div key={name} className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: "rgba(201,162,74,0.15)",
                      color: "#C9A24A",
                    }}
                  >
                    {icon}
                  </span>
                  <span className="text-soul-text-light/80 text-sm">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* International clients */}
          <div className="glass-card p-7 reveal reveal-delay-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🌍</span>
              <h3 className="font-serif text-xl font-semibold text-soul-text-light">
                International Clients
              </h3>
            </div>
            <div className="space-y-3">
              {intlMethods.map(({ name, icon }) => (
                <div key={name} className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: "rgba(201,162,74,0.15)",
                      color: "#C9A24A",
                    }}
                  >
                    {icon}
                  </span>
                  <span className="text-soul-text-light/80 text-sm">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center reveal">
          <p
            className="inline-block text-soul-gold italic text-sm md:text-base max-w-2xl leading-relaxed px-6 py-4 rounded-xl"
            style={{
              background: "rgba(201,162,74,0.08)",
              border: "1px solid rgba(201,162,74,0.2)",
            }}
          >
            💛 Payment details are shared personally after session confirmation
            — ensuring secure, personalized service for every client
          </p>
        </div>
      </div>
    </section>
  );
}
