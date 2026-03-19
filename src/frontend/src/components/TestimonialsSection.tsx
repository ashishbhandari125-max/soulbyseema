import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    service: "Reiki Healing",
    text: "Seema ji ne mere jeewan mein bahut badlaav laya. After just 3 sessions of Reiki, my chronic back pain of 5 years completely disappeared. I feel lighter and more energetic than ever. Pranam to her healing hands!",
    initials: "PS",
    color: "#7C3AED",
  },
  {
    name: "Rahul Verma",
    location: "Delhi, India",
    service: "Past Life Regression",
    text: "I came with recurring anxiety dreams and fears I couldn't explain. Through past life regression, I discovered the root cause and now I sleep peacefully. Truly life-changing experience. Thank you Seema ji!",
    initials: "RV",
    color: "#C9A24A",
  },
  {
    name: "Anjali Singh",
    location: "Bangalore, India",
    service: "Aura Cleaning",
    text: "My career was stuck and relationships strained for 2 years. After aura cleansing session, within a month I got promoted and my family relationships healed beautifully. The shakti of this healing is real.",
    initials: "AS",
    color: "#0891B2",
  },
  {
    name: "Meera Patel",
    location: "Ahmedabad, India",
    service: "Space Clearing",
    text: "We did ghar ki energy clearing before moving into our new home. The difference is palpable — our home feels so peaceful, children are sleeping better, and family harmony has improved so much.",
    initials: "MP",
    color: "#BE185D",
  },
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    service: "Reiki Healing",
    text: "I was skeptical about remote healing but Seema proved me wrong completely. During our video session I felt warmth moving through my body. My anxiety has reduced significantly and I feel more centered. Absolutely remarkable.",
    initials: "SM",
    color: "#059669",
  },
  {
    name: "David Chen",
    location: "Toronto, Canada",
    service: "Angel Card Reading",
    text: "Seema's angel card reading was incredibly accurate about my career crossroads. Her guidance gave me the clarity and courage to make a bold career move that turned out to be the best decision of my life.",
    initials: "DC",
    color: "#D97706",
  },
  {
    name: "Emma Williams",
    location: "Sydney, Australia",
    service: "Past Life Regression",
    text: "The past life regression session was profound and healing. Seema held the space beautifully throughout. I finally understand patterns in my life that make complete sense now. I feel liberated from old wounds.",
    initials: "EW",
    color: "#7C3AED",
  },
  {
    name: "Fatima Al-Hassan",
    location: "Dubai, UAE",
    service: "Photo Reading",
    text: "The photo reading was astonishingly accurate. Seema described my energy, past challenges, and future opportunities with such precision that I got goosebumps. She has a true divine gift. Highly recommend to everyone.",
    initials: "FA",
    color: "#C9A24A",
  },
];

function StarIcon({ index }: { index: number }) {
  return (
    <svg
      key={index}
      className="w-4 h-4 fill-current"
      style={{ color: "#C9A24A" }}
      viewBox="0 0 20 20"
      role="img"
      aria-label="star"
    >
      <title>Star</title>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 stars">
      <StarIcon index={1} />
      <StarIcon index={2} />
      <StarIcon index={3} />
      <StarIcon index={4} />
      <StarIcon index={5} />
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useScrollReveal();
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scroll = (dir: "prev" | "next") => {
    const next =
      dir === "next"
        ? Math.min(active + 1, testimonials.length - 1)
        : Math.max(active - 1, 0);
    setActive(next);
    const track = trackRef.current;
    if (track) {
      const card = track.children[next] as HTMLElement;
      if (card)
        card.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
    }
  };

  return (
    <section
      id="testimonials"
      className="section-ivory py-20 md:py-32"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p
            className="font-medium tracking-widest uppercase text-sm mb-3"
            style={{ color: "#C9A24A" }}
          >
            Testimonials
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: "#4A3F46" }}
          >
            Words from Our Healing Community
          </h2>
          <p className="text-soul-text-muted-light italic text-lg">
            Real transformations, real lives changed
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {testimonials.map(
            ({ name, location, service, text, initials, color }, i) => (
              <div
                key={name}
                className="rounded-2xl p-6 flex flex-col shadow-md"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(201,162,74,0.15)",
                }}
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: color }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-soul-text-muted text-sm">
                      {name}
                    </p>
                    <p className="text-soul-text-muted-light text-xs">
                      {location}
                    </p>
                  </div>
                </div>
                <Stars />
                <p className="text-soul-text-muted text-sm leading-relaxed mt-3 flex-1 italic">
                  "{text}"
                </p>
                <p
                  className="text-xs font-medium mt-4"
                  style={{ color: "#C9A24A" }}
                >
                  {service}
                </p>
              </div>
            ),
          )}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative reveal">
          <div ref={trackRef} className="testimonial-track">
            {testimonials.map(
              ({ name, location, service, text, initials, color }, i) => (
                <div
                  key={name}
                  className="testimonial-slide rounded-2xl p-6 shadow-md"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(201,162,74,0.15)",
                  }}
                  data-ocid={`testimonials.item.${i + 1}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: color }}
                    >
                      {initials}
                    </div>
                    <div>
                      <p className="font-semibold text-soul-text-muted text-sm">
                        {name}
                      </p>
                      <p className="text-soul-text-muted-light text-xs">
                        {location}
                      </p>
                    </div>
                  </div>
                  <Stars />
                  <p className="text-soul-text-muted text-sm leading-relaxed mt-3 italic">
                    "{text}"
                  </p>
                  <p
                    className="text-xs font-medium mt-4"
                    style={{ color: "#C9A24A" }}
                  >
                    {service}
                  </p>
                </div>
              ),
            )}
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={() => scroll("prev")}
              disabled={active === 0}
              className="p-2 rounded-full"
              style={{ background: "rgba(201,162,74,0.15)" }}
              data-ocid="testimonials.pagination_prev"
            >
              <ChevronLeft size={18} style={{ color: "#C9A24A" }} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    background:
                      i === active ? "#C9A24A" : "rgba(201,162,74,0.3)",
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => scroll("next")}
              disabled={active === testimonials.length - 1}
              className="p-2 rounded-full"
              style={{ background: "rgba(201,162,74,0.15)" }}
              data-ocid="testimonials.pagination_next"
            >
              <ChevronRight size={18} style={{ color: "#C9A24A" }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
