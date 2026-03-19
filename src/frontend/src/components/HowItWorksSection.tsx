import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Book Your Session",
    desc: "Contact via WhatsApp or fill the enquiry form. Choose your service and preferred time. Seema will personally confirm your appointment.",
  },
  {
    number: "02",
    title: "Connect via Phone or Video",
    desc: "At your scheduled time, connect with Seema from anywhere in the world. All you need is a quiet space and an open heart.",
  },
  {
    number: "03",
    title: "Receive Healing & Transform",
    desc: "Experience the healing energy flow across any distance. Receive personalized guidance and begin your transformation journey.",
  },
];

export default function HowItWorksSection() {
  const ref = useScrollReveal();

  return (
    <section className="section-rose py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p
            className="font-medium tracking-widest uppercase text-sm mb-3"
            style={{ color: "#C9A24A" }}
          >
            How It Works
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-soul-text-muted mb-4">
            Healing Has No Boundaries
          </h2>
          <p className="text-soul-text-muted italic text-lg max-w-2xl mx-auto">
            Distance healing is just as powerful — your energy connects across
            any distance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map(({ number, title, desc }, i) => (
            <div
              key={number}
              className={`text-center reveal reveal-delay-${i + 1}`}
            >
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                style={{
                  background: "rgba(201,162,74,0.12)",
                  border: "2px solid rgba(201,162,74,0.4)",
                }}
              >
                <span
                  className="font-serif text-3xl font-bold"
                  style={{ color: "#C9A24A" }}
                >
                  {number}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-soul-text-muted mb-3">
                {title}
              </h3>
              <p className="text-soul-text-muted leading-relaxed text-sm md:text-base">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <p className="text-soul-text-muted text-sm mb-6">
            Ready to begin your healing journey?
          </p>
          <a
            href="https://wa.me/919XXXXXXXXX?text=Namaste%20Seema%20ji%2C%20I%20would%20like%20to%20book%20a%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base"
            data-ocid="howitworks.primary_button"
          >
            Book a Session Now
          </a>
        </div>
      </div>
    </section>
  );
}
