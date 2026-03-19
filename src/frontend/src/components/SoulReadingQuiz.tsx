import { useState } from "react";

const QUESTIONS = [
  {
    id: "season",
    q: "Aapka janam mahina? / Your birth season?",
    options: [
      { label: "🌸 Spring / Vasant", value: "spring" },
      { label: "☀️ Summer / Grishma", value: "summer" },
      { label: "🍂 Autumn / Sharad", value: "autumn" },
      { label: "❄️ Winter / Shishir", value: "winter" },
    ],
  },
  {
    id: "element",
    q: "Aapka element? / Your element?",
    options: [
      { label: "🔥 Fire / Agni", value: "fire" },
      { label: "💧 Water / Jal", value: "water" },
      { label: "🌍 Earth / Prithvi", value: "earth" },
      { label: "🌬️ Air / Vayu", value: "air" },
    ],
  },
  {
    id: "color",
    q: "Kaunsa rang attract karta hai? / Which color calls you?",
    options: [
      { label: "💜 Violet / Bainagni", value: "violet" },
      { label: "💚 Green / Hara", value: "green" },
      { label: "🔵 Blue / Neela", value: "blue" },
      { label: "🟡 Gold / Sona", value: "gold" },
    ],
  },
  {
    id: "seek",
    q: "Aapko kya chahiye? / What do you seek?",
    options: [
      { label: "❤️ Love / Prem", value: "love" },
      { label: "☮️ Peace / Shanti", value: "peace" },
      { label: "✨ Abundance / Samridhi", value: "abundance" },
      { label: "🌿 Healing / Swasthya", value: "healing" },
    ],
  },
];

const PROFILES: Record<
  string,
  {
    title: string;
    titleHi: string;
    chakra: string;
    element: string;
    desc: string;
  }
> = {
  "spring-fire-violet-love": {
    title: "Radiant Love Healer",
    titleHi: "प्रेम ज्योति",
    chakra: "Heart & Crown",
    element: "Fire",
    desc: "You are a beacon of unconditional love. Your soul carries ancient wisdom of heart healing. You transform pain into profound compassion wherever you go.",
  },
  "spring-fire-violet-peace": {
    title: "Sacred Fire Mystic",
    titleHi: "अग्नि साधक",
    chakra: "Solar Plexus",
    element: "Fire",
    desc: "Your inner fire burns with spiritual purpose. You seek peace through transformation and alchemy of the soul. A true spiritual warrior of light.",
  },
  "spring-fire-violet-abundance": {
    title: "Golden Light Bringer",
    titleHi: "स्वर्णिम प्रकाश",
    chakra: "Crown Chakra",
    element: "Fire",
    desc: "You radiate divine abundance. Your presence uplifts every space you enter. The universe showers its blessings upon your golden path.",
  },
  "spring-fire-violet-healing": {
    title: "Divine Healer Soul",
    titleHi: "दिव्य उपचारक",
    chakra: "Heart Chakra",
    element: "Fire",
    desc: "Born to heal, your soul carries medicine for the world. Ancient healing wisdom flows through your very being.",
  },
  "summer-water-green-love": {
    title: "Sacred Water Spirit",
    titleHi: "जल आत्मा",
    chakra: "Sacral Chakra",
    element: "Water",
    desc: "Flowing with love and creativity, you nourish all those around you. Your emotional depth is your greatest spiritual gift.",
  },
  "summer-water-green-peace": {
    title: "Serene Ocean Soul",
    titleHi: "शांत सागर",
    chakra: "Throat Chakra",
    element: "Water",
    desc: "Like the deep ocean, your peace is boundless. You carry the wisdom of the tides and the healing of ancient waters.",
  },
  "summer-water-blue-abundance": {
    title: "Cosmic Abundance Bearer",
    titleHi: "ब्रह्मांड वाहक",
    chakra: "Third Eye",
    element: "Water",
    desc: "Abundance flows to you like rivers to the sea. You are a natural channel for divine prosperity and cosmic gifts.",
  },
  "summer-water-blue-healing": {
    title: "Lunar Healer",
    titleHi: "चंद्र उपचारक",
    chakra: "Crown & Heart",
    element: "Water",
    desc: "Your healing gifts are as deep as the moon's pull on the ocean. You heal through presence, intuition, and sacred emotion.",
  },
  "autumn-earth-gold-love": {
    title: "Earth Mother Soul",
    titleHi: "धरती माँ आत्मा",
    chakra: "Root Chakra",
    element: "Earth",
    desc: "Grounded in deep love, you are a pillar of strength for all. Your nurturing energy creates sacred space wherever you stand.",
  },
  "autumn-earth-gold-peace": {
    title: "Ancient Wisdom Keeper",
    titleHi: "प्राचीन ज्ञानी",
    chakra: "Root & Third Eye",
    element: "Earth",
    desc: "You carry the peace of the mountains and the wisdom of ancient trees. Your stillness is a sacred medicine for restless souls.",
  },
  "autumn-earth-green-abundance": {
    title: "Harvest Blessing Soul",
    titleHi: "फसल का आशीर्वाद",
    chakra: "Heart & Root",
    element: "Earth",
    desc: "You naturally attract abundance like the fertile earth draws rain. Your grateful heart multiplies every blessing tenfold.",
  },
  "autumn-earth-green-healing": {
    title: "Forest Healer Spirit",
    titleHi: "वन उपचारक",
    chakra: "Heart Chakra",
    element: "Earth",
    desc: "Nature itself works through your hands. Your healing energy is as gentle and powerful as the ancient forest.",
  },
  "winter-air-blue-love": {
    title: "Star Light Soul",
    titleHi: "तारों की रोशनी",
    chakra: "Crown Chakra",
    element: "Air",
    desc: "Your love is as vast as the winter sky. You carry the light of distant stars within your heart, illuminating the path for others.",
  },
  "winter-air-blue-peace": {
    title: "Cosmic Peace Keeper",
    titleHi: "शांति के रक्षक",
    chakra: "Third Eye",
    element: "Air",
    desc: "You carry peace across dimensions. Your calm presence dissolves conflict and creates harmony wherever you breathe.",
  },
  "winter-air-violet-abundance": {
    title: "Divine Light Bearer",
    titleHi: "दिव्य प्रकाश वाहक",
    chakra: "Crown & Third Eye",
    element: "Air",
    desc: "You are a bridge between earthly and divine realms. Abundance comes to you through your spiritual attunement and divine connection.",
  },
  "winter-air-violet-healing": {
    title: "Celestial Healer",
    titleHi: "आकाशीय उपचारक",
    chakra: "Crown Chakra",
    element: "Air",
    desc: "Your healing works beyond the physical realm. You channel cosmic healing frequencies to transform lives at the soul level.",
  },
};

function getProfile(answers: string[]): (typeof PROFILES)[string] {
  const key = answers.join("-");
  if (PROFILES[key]) return PROFILES[key];
  // Fallback
  const vals = Object.values(PROFILES);
  const hash = answers.reduce((acc, a) => acc + a.length, 0);
  return vals[hash % vals.length];
}

export default function SoulReadingQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };

  const profile = done ? getProfile(answers) : null;
  const whatsappMsg = profile
    ? encodeURIComponent(
        `Namaste Seema Ji 🙏\n\nMera Soul Profile: "${profile.title}" (${profile.titleHi})\n\nMain apna Soul Reading booking karna chahta/chahti hun.`,
      )
    : "";

  return (
    <section
      style={{ padding: "80px 20px", position: "relative" }}
      data-ocid="soul_quiz.section"
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "680px", margin: "0 auto", position: "relative" }}
      >
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div
            style={{
              color: "#C9A24A",
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Soul Discovery · आत्मा की पहचान
          </div>
          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            Discover Your Soul Profile ✨
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px" }}>
            Apni Aatma Ko Pehchanein · Uncover your sacred spiritual essence
          </p>
        </div>

        {!done ? (
          <div>
            {/* Progress dots */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "36px",
              }}
            >
              {QUESTIONS.map((_, i) => (
                <div
                  key={QUESTIONS[i].id}
                  style={{
                    width: i === step ? "28px" : "10px",
                    height: "10px",
                    borderRadius: "50px",
                    background:
                      i < step
                        ? "#C9A24A"
                        : i === step
                          ? "#C9A24A"
                          : "rgba(255,255,255,0.2)",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            {/* Question */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(201,162,74,0.2)",
                borderRadius: "20px",
                padding: "36px",
                animation: "fadeInUp 0.4s ease",
              }}
              data-ocid="soul_quiz.card"
            >
              <p
                style={{
                  color: "#E8D5A0",
                  fontSize: "20px",
                  fontWeight: 600,
                  textAlign: "center",
                  marginBottom: "28px",
                  lineHeight: 1.4,
                }}
              >
                {QUESTIONS[step].q}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                }}
              >
                {QUESTIONS[step].options.map((opt) => (
                  <button
                    type="button"
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    data-ocid={`soul_quiz.option.${opt.value}`}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(201,162,74,0.25)",
                      borderRadius: "14px",
                      padding: "18px 16px",
                      color: "#e2d9f3",
                      fontSize: "15px",
                      cursor: "pointer",
                      textAlign: "center" as const,
                      transition: "all 0.25s ease",
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(201,162,74,0.15)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(201,162,74,0.6)";
                      (e.currentTarget as HTMLElement).style.transform =
                        "scale(1.03)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(201,162,74,0.25)";
                      (e.currentTarget as HTMLElement).style.transform =
                        "scale(1)";
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          profile && (
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(201,162,74,0.35)",
                borderRadius: "24px",
                padding: "44px 36px",
                textAlign: "center" as const,
                boxShadow: "0 0 60px rgba(201,162,74,0.15)",
                animation: "fadeInUp 0.5s ease",
              }}
              data-ocid="soul_quiz.result"
            >
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>✨</div>
              <div
                style={{
                  color: "#C9A24A",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Your Soul Profile
              </div>
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "28px",
                  fontWeight: 800,
                  marginBottom: "6px",
                }}
              >
                {profile.title}
              </h3>
              <p
                style={{
                  color: "#A78BFA",
                  fontSize: "20px",
                  marginBottom: "20px",
                }}
              >
                {profile.titleHi}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "12px",
                  marginBottom: "24px",
                  flexWrap: "wrap" as const,
                }}
              >
                <span
                  style={{
                    background: "rgba(201,162,74,0.15)",
                    border: "1px solid rgba(201,162,74,0.3)",
                    color: "#C9A24A",
                    padding: "6px 14px",
                    borderRadius: "50px",
                    fontSize: "13px",
                  }}
                >
                  {profile.chakra}
                </span>
                <span
                  style={{
                    background: "rgba(139,92,246,0.15)",
                    border: "1px solid rgba(139,92,246,0.3)",
                    color: "#A78BFA",
                    padding: "6px 14px",
                    borderRadius: "50px",
                    fontSize: "13px",
                  }}
                >
                  {profile.element}
                </span>
              </div>
              <p
                style={{
                  color: "#e2d9f3",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  marginBottom: "32px",
                  maxWidth: "480px",
                  margin: "0 auto 32px",
                }}
              >
                {profile.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <a
                  href={`https://wa.me/919999885995?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="soul_quiz.book_button"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "linear-gradient(135deg, #C9A24A, #E8D5A0)",
                    color: "#12061E",
                    padding: "14px 32px",
                    borderRadius: "50px",
                    fontSize: "16px",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 0 30px rgba(201,162,74,0.4)",
                  }}
                >
                  🙏 Book Your Soul Reading with Seema
                </a>
                <button
                  type="button"
                  onClick={reset}
                  data-ocid="soul_quiz.reset_button"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.5)",
                    padding: "10px 24px",
                    borderRadius: "50px",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  Try Again / Dobara Try Karein
                </button>
              </div>
            </div>
          )
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
