import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Activity,
  Brain,
  Camera,
  Clock,
  Gem,
  Home as HomeIcon,
  LayoutGrid,
  Moon,
  Scissors,
  Shield,
  ShieldOff,
  Sparkle,
  Sparkles,
  Star,
  Wind,
} from "lucide-react";

type Category = "Healing" | "Protection" | "Divination" | "Mind" | "Core";

const categoryBadge: Record<
  Category,
  { label: string; style: React.CSSProperties }
> = {
  Core: { label: "", style: {} },
  Healing: {
    label: "Healing",
    style: {
      background: "rgba(201,162,74,0.18)",
      color: "#D4A843",
      border: "1px solid rgba(201,162,74,0.35)",
    },
  },
  Protection: {
    label: "Protection",
    style: {
      background: "rgba(139,92,246,0.18)",
      color: "#B794F4",
      border: "1px solid rgba(139,92,246,0.35)",
    },
  },
  Divination: {
    label: "Divination",
    style: {
      background: "rgba(20,184,166,0.18)",
      color: "#5EEAD4",
      border: "1px solid rgba(20,184,166,0.35)",
    },
  },
  Mind: {
    label: "Mind",
    style: {
      background: "rgba(244,114,182,0.18)",
      color: "#F9A8D4",
      border: "1px solid rgba(244,114,182,0.35)",
    },
  },
};

const services: {
  icon: React.ElementType;
  title: string;
  desc: string;
  wa: string;
  category: Category;
  isNew?: boolean;
}[] = [
  {
    icon: Sparkles,
    title: "Reiki Healing (All Levels)",
    desc: "Channel divine life force energy (prana shakti) to heal body, mind & soul at every level.",
    wa: "Reiki%20Healing",
    category: "Core",
  },
  {
    icon: Star,
    title: "Angel Card Reading",
    desc: "Receive divine guidance from the angelic realm. Let the cards illuminate your path forward.",
    wa: "Angel%20Card%20Reading",
    category: "Core",
  },
  {
    icon: Wind,
    title: "Aura Cleaning",
    desc: "Cleanse and restore your energy field (aura), removing blocks and negativity that dim your light.",
    wa: "Aura%20Cleaning",
    category: "Core",
  },
  {
    icon: Moon,
    title: "Guided Meditation",
    desc: "Journey inward with guided meditations designed to quiet the mind and awaken your inner wisdom.",
    wa: "Guided%20Meditation",
    category: "Core",
  },
  {
    icon: Clock,
    title: "Past Life Regression",
    desc: "Explore your soul's journey across lifetimes to heal present patterns and find deep liberation.",
    wa: "Past%20Life%20Regression",
    category: "Core",
  },
  {
    icon: Camera,
    title: "Photo Reading",
    desc: "Through your photograph, Seema reads your energy, past, present and guidance for your future.",
    wa: "Photo%20Reading",
    category: "Core",
  },
  {
    icon: HomeIcon,
    title: "Home & Space Energy Clearing",
    desc: "Remove negative energies (nazar) from your home and spaces, inviting in light, peace and abundance.",
    wa: "Home%20and%20Space%20Energy%20Clearing",
    category: "Core",
  },
  {
    icon: Activity,
    title: "Chakra Balancing",
    desc: "Align and activate all 7 chakras — from Root to Crown — restoring harmony, vitality and spiritual flow through your entire being.",
    wa: "Chakra%20Balancing",
    category: "Healing",
    isNew: true,
  },
  {
    icon: Gem,
    title: "Crystal Remedies",
    desc: "Personalised crystal prescriptions to shift your energy, attract abundance and restore balance in your life.",
    wa: "Crystal%20Remedies",
    category: "Healing",
    isNew: true,
  },
  {
    icon: Sparkle,
    title: "Crystal Healing",
    desc: "Harness the vibrational power of healing crystals placed on your body's energy centres (chakras) for deep restoration.",
    wa: "Crystal%20Healing",
    category: "Healing",
    isNew: true,
  },
  {
    icon: ShieldOff,
    title: "Spirit Release",
    desc: "Compassionate, sacred removal of earthbound spirits and unwanted spiritual attachments from your energy field.",
    wa: "Spirit%20Release",
    category: "Protection",
    isNew: true,
  },
  {
    icon: Shield,
    title: "Spirit Protection",
    desc: "Build a powerful spiritual shield around you and your loved ones, guarding against negative energies and psychic attacks.",
    wa: "Spirit%20Protection",
    category: "Protection",
    isNew: true,
  },
  {
    icon: Scissors,
    title: "Psychic Surgery",
    desc: "Advanced energetic technique to remove deep-rooted energy blocks, implants and distortions from the subtle body.",
    wa: "Psychic%20Surgery",
    category: "Healing",
    isNew: true,
  },
  {
    icon: LayoutGrid,
    title: "Tarot Card Reading",
    desc: "Illuminate your path with the ancient wisdom of Tarot. Gain clarity on love, career, relationships and life purpose.",
    wa: "Tarot%20Card%20Reading",
    category: "Divination",
    isNew: true,
  },
  {
    icon: Brain,
    title: "Hypnosis / Hypnotherapy",
    desc: "Access your subconscious mind to break habits, release trauma, overcome fears and reprogram limiting beliefs.",
    wa: "Hypnosis",
    category: "Mind",
    isNew: true,
  },
];

export default function ServicesSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="services"
      className="py-20 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, #12061E 0%, #0B1A30 50%, #07162F 100%)",
      }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <p className="text-soul-gold font-medium tracking-widest uppercase text-sm mb-3">
            Our Services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-soul-text-light mb-4">
            Sacred Healing Services
          </h2>
          <p className="text-soul-gold/70 italic text-lg">
            Shakti flows where intention goes
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map(
            ({ icon: Icon, title, desc, wa, category, isNew }, i) => {
              const badge = categoryBadge[category];
              return (
                <div
                  key={title}
                  className={`glass-card p-6 flex flex-col reveal reveal-delay-${Math.min(i + 1, 6)} relative`}
                >
                  {/* Category badge top-right */}
                  {category !== "Core" && (
                    <span
                      className="absolute top-4 right-4 text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded-full"
                      style={badge.style}
                    >
                      {badge.label}
                    </span>
                  )}

                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 animate-pulse-gold"
                    style={{
                      background: "rgba(201,162,74,0.15)",
                      border: "1px solid rgba(201,162,74,0.3)",
                    }}
                  >
                    <Icon size={20} style={{ color: "#C9A24A" }} />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-soul-text-light mb-1">
                    {title}
                  </h3>

                  {/* Consultation & Course badge for new services */}
                  {isNew && (
                    <p
                      className="text-[11px] italic mb-3"
                      style={{ color: "rgba(201,162,74,0.75)" }}
                    >
                      ✦ Available as: Consultation · Course
                    </p>
                  )}
                  {!isNew && <div className="mb-3" />}

                  <p className="text-soul-text-light/60 text-sm leading-relaxed flex-1">
                    {desc}
                  </p>
                  <a
                    href={`https://wa.me/919XXXXXXXXX?text=Namaste%20Seema%20ji%2C%20I%20would%20like%20to%20book%20a%20session%20for%20${wa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-sm mt-5 justify-center"
                    data-ocid={`services.item.${i + 1}`}
                  >
                    Book Now
                  </a>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
