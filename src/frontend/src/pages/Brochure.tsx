const CIRCLE_SIZES = [180, 300, 420, 540];

const services = [
  {
    name: "Aura Healing",
    category: "Healing",
    emoji: "✨",
    desc: "Cleanse & restore your energy field",
  },
  {
    name: "Chakra Balancing",
    category: "Healing",
    emoji: "🌈",
    desc: "Align your seven energy centres",
  },
  {
    name: "Past Life Regression",
    category: "Healing",
    emoji: "🔮",
    desc: "Heal wounds from previous lifetimes",
  },
  {
    name: "Crystal Healing",
    category: "Healing",
    emoji: "💎",
    desc: "Harness the power of sacred stones",
  },
  {
    name: "Reiki Healing",
    category: "Healing",
    emoji: "🙌",
    desc: "Universal life force energy therapy",
  },
  {
    name: "Kundalini Awakening",
    category: "Healing",
    emoji: "🔥",
    desc: "Activate your dormant spiritual energy",
  },
  {
    name: "Karma Healing",
    category: "Healing",
    emoji: "☯️",
    desc: "Release karmic blocks & patterns",
  },
  {
    name: "Evil Eye Protection",
    category: "Protection",
    emoji: "🧿",
    desc: "Shield yourself from negative energies",
  },
  {
    name: "Black Magic Removal",
    category: "Protection",
    emoji: "🛡️",
    desc: "Remove dark spells & psychic attacks",
  },
  {
    name: "Tarot Card Reading",
    category: "Divination",
    emoji: "🃏",
    desc: "Gain clarity on life's path & choices",
  },
  {
    name: "Numerology Reading",
    category: "Divination",
    emoji: "🔢",
    desc: "Decode the numbers guiding your destiny",
  },
  {
    name: "Astrology Consultation",
    category: "Divination",
    emoji: "⭐",
    desc: "Cosmic insights from your birth chart",
  },
  {
    name: "Meditation Guidance",
    category: "Mind",
    emoji: "🧘",
    desc: "Find stillness, peace & inner clarity",
  },
  {
    name: "Spiritual Counseling",
    category: "Mind",
    emoji: "💬",
    desc: "Compassionate soul-level guidance",
  },
  {
    name: "Dream Interpretation",
    category: "Mind",
    emoji: "🌙",
    desc: "Uncover messages from your subconscious",
  },
];

const courses = [
  { name: "Reiki Level 1, 2 & Master Course", emoji: "🙌" },
  { name: "Tarot Card Reading Course", emoji: "🃏" },
  { name: "Numerology Course", emoji: "🔢" },
  { name: "Meditation & Mindfulness Course", emoji: "🧘" },
  { name: "Spiritual Healing Foundation Course", emoji: "✨" },
  { name: "Crystal Healing Course", emoji: "💎" },
  { name: "Aura Reading & Healing Course", emoji: "🌟" },
  { name: "Chakra Healing Course", emoji: "🌈" },
  { name: "Astrology Basics Course", emoji: "⭐" },
  { name: "Advanced Spiritual Healing Course", emoji: "🔮" },
];

const testimonials = [
  {
    text: "Seema completely transformed my life. My anxiety is gone and I feel truly alive for the first time in years!",
    name: "Priya",
    location: "India",
    stars: 5,
  },
  {
    text: "I found inner peace after just 3 sessions with Seema. Her healing gift is extraordinary and absolutely real.",
    name: "Sarah",
    location: "United Kingdom",
    stars: 5,
  },
  {
    text: "Best spiritual healer I have ever consulted. Highly recommended to everyone seeking true healing!",
    name: "Rahul",
    location: "UAE",
    stars: 5,
  },
];

const catStyle: Record<string, { bg: string; text: string; border: string }> = {
  Healing: { bg: "#e8f5e9", text: "#1b5e20", border: "#a5d6a7" },
  Protection: { bg: "#e8eaf6", text: "#1a237e", border: "#9fa8da" },
  Divination: { bg: "#fff3e0", text: "#e65100", border: "#ffcc80" },
  Mind: { bg: "#fce4ec", text: "#880e4f", border: "#f48fb1" },
};

const whyPoints = [
  {
    emoji: "🏆",
    title: "15+ Years Experience",
    desc: "Over a decade and a half of dedicated spiritual healing practice",
  },
  {
    emoji: "🎓",
    title: "Certified Reiki Grandmaster",
    desc: "Highest level certification in Reiki energy healing",
  },
  {
    emoji: "🌍",
    title: "500+ Clients Worldwide",
    desc: "Clients healed across India, USA, UK, Canada, UAE & Australia",
  },
  {
    emoji: "💻",
    title: "Online & In-Person",
    desc: "Flexible healing sessions from the comfort of your home",
  },
  {
    emoji: "🎯",
    title: "Personalized Healing Plans",
    desc: "Customized approach tailored to your unique soul journey",
  },
  {
    emoji: "🔒",
    title: "Safe & Confidential",
    desc: "Compassionate, non-judgmental, and completely private sessions",
  },
];

function GoldDivider() {
  return (
    <div
      style={{
        height: 4,
        background:
          "linear-gradient(90deg, #2d1254, #d4af37, #f5d76e, #d4af37, #2d1254)",
        borderRadius: 2,
      }}
    />
  );
}

function SectionHeader({
  overline,
  title,
  subtitle,
  dark,
}: {
  overline: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div style={{ textAlign: "center", marginBottom: 16 }}>
      {dark ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 60,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(212,175,55,0.6))",
            }}
          />
          <p
            style={{
              color: "rgba(212,175,55,0.7)",
              letterSpacing: 4,
              fontSize: 11,
              margin: 0,
              fontFamily: "sans-serif",
            }}
          >
            {overline}
          </p>
          <div
            style={{
              width: 60,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(212,175,55,0.6), transparent)",
            }}
          />
        </div>
      ) : (
        <p
          style={{
            color: "#7c5cbf",
            letterSpacing: 3,
            fontSize: 11,
            margin: "0 0 8px",
            fontFamily: "sans-serif",
          }}
        >
          {overline}
        </p>
      )}
      <h2
        style={{
          color: dark ? "#f5d76e" : "#2d1254",
          fontSize: dark ? 42 : 30,
          fontWeight: "normal",
          margin: "0 0 8px",
          fontFamily: "Georgia, serif",
          letterSpacing: dark ? 3 : 1,
          textShadow: dark ? "0 0 30px rgba(212,175,55,0.4)" : "none",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: dark ? "rgba(255,255,255,0.55)" : "#6b5b6b",
            fontSize: 13,
            fontFamily: "sans-serif",
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        style={{
          width: 60,
          height: 3,
          background: "linear-gradient(90deg, #d4af37, #f5d76e)",
          margin: "14px auto 0",
          borderRadius: 2,
        }}
      />
    </div>
  );
}

export default function Brochure() {
  const handlePrint = () => window.print();

  return (
    <>
      {/* Fixed top bar */}
      <div
        className="no-print"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(135deg, #0d0520, #1a0a2e)",
          padding: "14px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 9999,
          boxShadow: "0 2px 24px rgba(212,175,55,0.35)",
          borderBottom: "1px solid rgba(212,175,55,0.25)",
        }}
      >
        <div>
          <span
            style={{
              color: "#d4af37",
              fontFamily: "Georgia, serif",
              fontSize: "18px",
              fontWeight: "bold",
              display: "block",
            }}
          >
            ॐ Soul by Seema — Premium Brochure
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            Click &quot;Download PDF&quot; → Browser print dialog → Choose
            &quot;Save as PDF&quot;
          </span>
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a
            href="https://www.soulbyseema.com"
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid rgba(212,175,55,0.6)",
              color: "#d4af37",
              padding: "8px 20px",
              borderRadius: "6px",
              fontSize: "13px",
              textDecoration: "none",
              fontFamily: "sans-serif",
            }}
          >
            🌐 Visit Website
          </a>
          <button
            type="button"
            data-ocid="brochure.primary_button"
            onClick={handlePrint}
            style={{
              background: "linear-gradient(135deg, #d4af37, #f5d76e)",
              border: "none",
              color: "#1a0a2e",
              padding: "10px 28px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              fontFamily: "Georgia, serif",
              boxShadow: "0 0 20px rgba(212,175,55,0.5)",
            }}
          >
            ⬇️ Download PDF / Save as PDF
          </button>
        </div>
      </div>

      <div
        style={{
          marginTop: "68px",
          background: "#fff",
          width: "210mm",
          margin: "0 auto",
        }}
      >
        {/* ===== PAGE 1 — COVER ===== */}
        <div
          className="brochure-page"
          style={{
            background:
              "linear-gradient(160deg, #050112 0%, #0d0520 25%, #1a0a2e 55%, #2d1254 80%, #0d0520 100%)",
            height: "297mm",
            width: "210mm",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 48px",
            position: "relative",
          }}
        >
          {CIRCLE_SIZES.map((size, i) => (
            <div
              key={size}
              style={{
                position: "absolute",
                width: size,
                height: size,
                border: `1px solid rgba(212,175,55,${0.18 - i * 0.04})`,
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />
          ))}

          {/* Corner brackets — explicit static elements */}
          <div
            style={{
              position: "absolute",
              width: 56,
              height: 56,
              top: 24,
              left: 24,
              borderTop: "2px solid rgba(212,175,55,0.4)",
              borderLeft: "2px solid rgba(212,175,55,0.4)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 56,
              height: 56,
              top: 24,
              right: 24,
              borderTop: "2px solid rgba(212,175,55,0.4)",
              borderRight: "2px solid rgba(212,175,55,0.4)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 56,
              height: 56,
              bottom: 24,
              left: 24,
              borderBottom: "2px solid rgba(212,175,55,0.4)",
              borderLeft: "2px solid rgba(212,175,55,0.4)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 56,
              height: 56,
              bottom: 24,
              right: 24,
              borderBottom: "2px solid rgba(212,175,55,0.4)",
              borderRight: "2px solid rgba(212,175,55,0.4)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: 80,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(212,175,55,0.6))",
              }}
            />
            <span
              style={{
                color: "rgba(212,175,55,0.7)",
                fontSize: "11px",
                fontFamily: "sans-serif",
                letterSpacing: "4px",
              }}
            >
              SPIRITUAL HEALING
            </span>
            <div
              style={{
                width: 80,
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(212,175,55,0.6), transparent)",
              }}
            />
          </div>

          <div
            style={{
              fontSize: "120px",
              lineHeight: 1,
              color: "#d4af37",
              marginBottom: "20px",
              textShadow:
                "0 0 60px rgba(212,175,55,0.8), 0 0 120px rgba(212,175,55,0.4), 0 0 200px rgba(139,92,246,0.3)",
            }}
          >
            ॐ
          </div>

          <div
            style={{
              width: 160,
              height: 2,
              background:
                "linear-gradient(90deg, transparent, #d4af37, #f5d76e, #d4af37, transparent)",
              margin: "0 auto 28px",
            }}
          />

          <h1
            style={{
              color: "#f5d76e",
              fontSize: "58px",
              fontWeight: "normal",
              letterSpacing: "8px",
              textAlign: "center",
              margin: "0 0 10px",
              fontFamily: "Georgia, serif",
              textShadow: "0 0 40px rgba(212,175,55,0.5)",
            }}
          >
            SOUL BY SEEMA
          </h1>

          <p
            style={{
              color: "rgba(212,175,55,0.8)",
              fontSize: "13px",
              letterSpacing: "5px",
              textAlign: "center",
              margin: "0 0 6px",
              fontFamily: "sans-serif",
            }}
          >
            REIKI GRANDMASTER &amp; SPIRITUAL HEALER
          </p>

          <div
            style={{
              display: "flex",
              gap: 8,
              margin: "20px 0",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 40,
                height: 1,
                background: "rgba(212,175,55,0.4)",
              }}
            />
            <div
              style={{
                width: 6,
                height: 6,
                background: "rgba(212,175,55,1)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                width: 6,
                height: 6,
                background: "rgba(212,175,55,0.6)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                width: 6,
                height: 6,
                background: "rgba(212,175,55,1)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                width: 40,
                height: 1,
                background: "rgba(212,175,55,0.4)",
              }}
            />
          </div>

          <p
            style={{
              color: "rgba(255,255,255,0.88)",
              fontSize: "20px",
              textAlign: "center",
              lineHeight: 1.9,
              maxWidth: "560px",
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
              margin: "0 0 12px",
            }}
          >
            &ldquo;Heal Your Soul. Transform Your Life.&rdquo;
          </p>

          <p
            style={{
              color: "rgba(212,175,55,0.7)",
              fontSize: "15px",
              textAlign: "center",
              fontFamily: "sans-serif",
              margin: "0 0 40px",
            }}
          >
            आत्मा को उपचार, ऊर्जा को संतुलन, जीवन को दिव्यता
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            {[
              "✨ 15 Services",
              "📚 10 Courses",
              "🌍 Serving Worldwide",
              "💻 Online & In-Person",
            ].map((b) => (
              <span
                key={b}
                style={{
                  background: "rgba(212,175,55,0.12)",
                  border: "1px solid rgba(212,175,55,0.35)",
                  color: "rgba(255,255,255,0.85)",
                  padding: "6px 16px",
                  borderRadius: 20,
                  fontSize: 12,
                  fontFamily: "sans-serif",
                }}
              >
                {b}
              </span>
            ))}
          </div>

          <div
            style={{
              background: "rgba(212,175,55,0.08)",
              border: "2px solid rgba(212,175,55,0.5)",
              borderRadius: 14,
              padding: "24px 48px",
              textAlign: "center",
              boxShadow: "0 0 40px rgba(212,175,55,0.15)",
              marginBottom: 28,
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 10,
                margin: "0 0 8px",
                letterSpacing: 4,
                fontFamily: "sans-serif",
              }}
            >
              BOOK YOUR SESSION — VISIT US ONLINE
            </p>
            <a
              href="https://www.soulbyseema.com"
              style={{
                color: "#f5d76e",
                fontSize: 26,
                fontWeight: "bold",
                textDecoration: "none",
                fontFamily: "Georgia, serif",
                display: "block",
                marginBottom: 4,
              }}
            >
              www.soulbyseema.com
            </a>
            <p
              style={{
                color: "rgba(212,175,55,0.5)",
                fontSize: 10,
                margin: 0,
                fontFamily: "sans-serif",
              }}
            >
              Click the link above to book your appointment
            </p>
          </div>

          <div style={{ display: "flex", gap: 40, justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 22, marginBottom: 4 }}>📱</div>
              <div
                style={{
                  color: "rgba(212,175,55,0.65)",
                  fontSize: 10,
                  letterSpacing: 2,
                  fontFamily: "sans-serif",
                }}
              >
                WhatsApp / Call
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 13,
                  fontFamily: "sans-serif",
                }}
              >
                +91 9999885995
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 22, marginBottom: 4 }}>✉️</div>
              <div
                style={{
                  color: "rgba(212,175,55,0.65)",
                  fontSize: 10,
                  letterSpacing: 2,
                  fontFamily: "sans-serif",
                }}
              >
                Email
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 13,
                  fontFamily: "sans-serif",
                }}
              >
                soulbyseema.official@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* ===== PAGE 2 — ABOUT, WHY CHOOSE, TESTIMONIALS ===== */}
        <div
          className="brochure-page"
          style={{
            background: "#fdf8ee",
            height: "297mm",
            width: "210mm",
            overflow: "hidden",
            padding: "22px 40px",
          }}
        >
          <GoldDivider />
          <div style={{ marginBottom: 8 }} />

          {/* About */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              marginBottom: 12,
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  color: "#7c5cbf",
                  letterSpacing: 3,
                  fontSize: 11,
                  margin: "0 0 8px",
                  fontFamily: "sans-serif",
                }}
              >
                ABOUT THE HEALER
              </p>
              <h2
                style={{
                  color: "#2d1254",
                  fontSize: 34,
                  fontWeight: "normal",
                  margin: "0 0 6px",
                  fontFamily: "Georgia, serif",
                }}
              >
                Meet Seema
              </h2>
              <div
                style={{
                  width: 60,
                  height: 3,
                  background: "linear-gradient(90deg, #d4af37, #f5d76e)",
                  marginBottom: 20,
                  borderRadius: 2,
                }}
              />
              <p
                style={{
                  color: "#4a3f46",
                  fontSize: 14,
                  lineHeight: 1.9,
                  margin: "0 0 14px",
                  fontFamily: "sans-serif",
                }}
              >
                Seema is a certified <strong>Reiki Grandmaster</strong>,
                spiritual healer, and soul guide with years of experience
                helping people heal, grow, and transform. She works with clients
                across India and worldwide through online and in-person
                sessions.
              </p>
              <p
                style={{
                  color: "#4a3f46",
                  fontSize: 14,
                  lineHeight: 1.9,
                  margin: 0,
                  fontFamily: "sans-serif",
                }}
              >
                Her approach combines <strong>ancient wisdom</strong> with
                modern healing techniques to bring balance, peace, and purpose
                to your life. Whether you seek healing from trauma, spiritual
                growth, or clarity in life decisions — Seema is your trusted
                guide.
              </p>
            </div>
            <div
              style={{
                background: "linear-gradient(160deg, #2d1254, #1a0a2e)",
                borderRadius: 16,
                padding: "32px 28px",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: 20 }}>
                <div style={{ fontSize: 48 }}>ॐ</div>
                <p
                  style={{
                    color: "rgba(212,175,55,0.7)",
                    fontSize: 11,
                    letterSpacing: 3,
                    margin: "8px 0 0",
                    fontFamily: "sans-serif",
                  }}
                >
                  SOUL BY SEEMA
                </p>
              </div>
              {[
                { label: "Experience", value: "15+ Years" },
                { label: "Clients Healed", value: "500+ Worldwide" },
                { label: "Certification", value: "Reiki Grandmaster" },
                { label: "Sessions", value: "Online & In-Person" },
                { label: "Global Reach", value: "India, USA, UK, UAE & More" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    borderTop: "1px solid rgba(212,175,55,0.15)",
                    padding: "10px 0",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: 11,
                      fontFamily: "sans-serif",
                    }}
                  >
                    {stat.label}
                  </span>
                  <span
                    style={{
                      color: "#f5d76e",
                      fontSize: 13,
                      fontWeight: "bold",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div style={{ marginBottom: 12 }}>
            <SectionHeader
              overline="OUR COMMITMENT TO YOU"
              title="Why Choose Soul by Seema?"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 10,
              }}
            >
              {whyPoints.map((p) => (
                <div
                  key={p.title}
                  style={{
                    background: "#fff",
                    borderRadius: 12,
                    padding: "10px 14px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    borderBottom: "3px solid #d4af37",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{p.emoji}</div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: "bold",
                      color: "#2d1254",
                      marginBottom: 6,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#6b5b6b",
                      lineHeight: 1.7,
                      fontFamily: "sans-serif",
                    }}
                  >
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <SectionHeader
              overline="REAL STORIES"
              title="What Our Clients Say"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 16,
              }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  style={{
                    background: "linear-gradient(160deg, #2d1254, #1a0a2e)",
                    borderRadius: 14,
                    padding: "14px 16px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      color: "rgba(212,175,55,0.3)",
                      fontSize: 32,
                      lineHeight: 1,
                      position: "absolute",
                      top: 12,
                      left: 18,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    &ldquo;
                  </div>
                  <div style={{ paddingTop: 24 }}>
                    <span style={{ color: "#d4af37", fontSize: 14 }}>
                      ★★★★★
                    </span>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: 13,
                        lineHeight: 1.8,
                        margin: "10px 0 14px",
                        fontStyle: "italic",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div
                      style={{
                        borderTop: "1px solid rgba(212,175,55,0.2)",
                        paddingTop: 10,
                      }}
                    >
                      <span
                        style={{
                          color: "#f5d76e",
                          fontSize: 13,
                          fontWeight: "bold",
                          fontFamily: "Georgia, serif",
                        }}
                      >
                        — {t.name}
                      </span>
                      <span
                        style={{
                          color: "rgba(255,255,255,0.45)",
                          fontSize: 11,
                          fontFamily: "sans-serif",
                        }}
                      >
                        , {t.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <GoldDivider />
          </div>
        </div>

        {/* ===== PAGE 3 — ALL 15 SERVICES ===== */}
        <div
          className="brochure-page"
          style={{
            background: "linear-gradient(180deg, #0d0520 0%, #1a0a2e 100%)",
            height: "297mm",
            width: "210mm",
            overflow: "hidden",
            padding: "40px 44px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 600,
              height: 600,
              border: "1px solid rgba(212,175,55,0.05)",
              borderRadius: "50%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />

          <SectionHeader
            overline="OUR OFFERINGS"
            title="Our Sacred Services"
            subtitle="Each service available as a Personal Consultation or a Learning Course"
            dark
          />

          {/* Category legend */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              marginBottom: 28,
              flexWrap: "wrap",
            }}
          >
            {Object.entries(catStyle).map(([cat, s]) => (
              <div
                key={cat}
                style={{ display: "flex", alignItems: "center", gap: 6 }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: s.bg,
                    border: `1px solid ${s.border}`,
                  }}
                />
                <span
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: 11,
                    fontFamily: "sans-serif",
                  }}
                >
                  {cat}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 14,
            }}
          >
            {services.map((s) => {
              const cs = catStyle[s.category] ?? {
                bg: "#f5f5f5",
                text: "#333",
                border: "#ddd",
              };
              return (
                <div
                  key={s.name}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(212,175,55,0.18)",
                    borderRadius: 12,
                    padding: "18px 16px",
                    borderLeft: `4px solid ${cs.border}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: 8,
                    }}
                  >
                    <span style={{ fontSize: 26 }}>{s.emoji}</span>
                    <span
                      style={{
                        background: cs.bg,
                        color: cs.text,
                        fontSize: 9,
                        padding: "2px 8px",
                        borderRadius: 20,
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                        border: `1px solid ${cs.border}`,
                      }}
                    >
                      {s.category}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: "bold",
                      color: "#f5d76e",
                      marginBottom: 4,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {s.name}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "sans-serif",
                      lineHeight: 1.5,
                      marginBottom: 10,
                    }}
                  >
                    {s.desc}
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <span
                      style={{
                        background: "rgba(212,175,55,0.12)",
                        border: "1px solid rgba(212,175,55,0.3)",
                        color: "rgba(212,175,55,0.9)",
                        fontSize: 9,
                        padding: "2px 8px",
                        borderRadius: 12,
                        fontFamily: "sans-serif",
                      }}
                    >
                      Consultation
                    </span>
                    <span
                      style={{
                        background: "rgba(139,92,246,0.12)",
                        border: "1px solid rgba(139,92,246,0.3)",
                        color: "rgba(178,142,255,0.9)",
                        fontSize: 9,
                        padding: "2px 8px",
                        borderRadius: 12,
                        fontFamily: "sans-serif",
                      }}
                    >
                      Course
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: 36,
              background: "rgba(212,175,55,0.08)",
              border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: 12,
              padding: "18px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 11,
                  letterSpacing: 2,
                  margin: "0 0 4px",
                  fontFamily: "sans-serif",
                }}
              >
                BOOK ANY SERVICE
              </p>
              <a
                href="https://www.soulbyseema.com"
                style={{
                  color: "#f5d76e",
                  fontSize: 18,
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontFamily: "Georgia, serif",
                }}
              >
                www.soulbyseema.com
              </a>
            </div>
            <div style={{ textAlign: "right" }}>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 11,
                  letterSpacing: 2,
                  margin: "0 0 4px",
                  fontFamily: "sans-serif",
                }}
              >
                WHATSAPP / CALL
              </p>
              <p
                style={{
                  color: "#f5d76e",
                  fontSize: 16,
                  fontWeight: "bold",
                  margin: 0,
                  fontFamily: "Georgia, serif",
                }}
              >
                +91 9999885995
              </p>
            </div>
          </div>
        </div>

        {/* ===== PAGE 4 — COURSES, BOOKING, PAYMENT ===== */}
        <div
          className="brochure-page"
          style={{
            background: "#fdf8ee",
            height: "297mm",
            width: "210mm",
            overflow: "hidden",
            padding: "40px 44px",
          }}
        >
          <GoldDivider />
          <div style={{ marginBottom: 24 }} />

          {/* Courses */}
          <div style={{ marginBottom: 44 }}>
            <SectionHeader
              overline="LEARN & GROW"
              title="Certification Courses"
              subtitle="Earn a recognized certificate and begin your own healing journey"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {courses.map((c, i) => (
                <div
                  key={c.name}
                  style={{
                    background: "#fff",
                    borderRadius: 10,
                    padding: "16px 20px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    borderLeft: "4px solid #d4af37",
                  }}
                >
                  <span style={{ fontSize: 24 }}>{c.emoji}</span>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: "bold",
                        color: "#2d1254",
                        fontFamily: "Georgia, serif",
                        marginBottom: 3,
                      }}
                    >
                      {c.name}
                    </div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <span
                        style={{
                          background: "rgba(44,18,84,0.08)",
                          color: "#2d1254",
                          fontSize: 9,
                          padding: "1px 8px",
                          borderRadius: 10,
                          fontFamily: "sans-serif",
                        }}
                      >
                        Certificate Course
                      </span>
                      <span
                        style={{
                          background: "rgba(212,175,55,0.1)",
                          color: "#7c5000",
                          fontSize: 9,
                          padding: "1px 8px",
                          borderRadius: 10,
                          fontFamily: "sans-serif",
                        }}
                      >
                        #{i + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Book + Payment */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 28,
              marginBottom: 28,
            }}
          >
            {/* How to Book */}
            <div
              style={{
                background: "linear-gradient(160deg, #2d1254, #1a0a2e)",
                borderRadius: 16,
                padding: "28px 24px",
              }}
            >
              <p
                style={{
                  color: "rgba(212,175,55,0.7)",
                  letterSpacing: 3,
                  fontSize: 11,
                  margin: "0 0 8px",
                  fontFamily: "sans-serif",
                }}
              >
                STEP BY STEP
              </p>
              <h3
                style={{
                  color: "#f5d76e",
                  fontSize: 22,
                  fontWeight: "normal",
                  margin: "0 0 20px",
                  fontFamily: "Georgia, serif",
                }}
              >
                How to Book a Session
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {[
                  { step: "01", icon: "🌐", text: "Visit www.soulbyseema.com" },
                  { step: "02", icon: "📅", text: 'Click "Book Appointment"' },
                  {
                    step: "03",
                    icon: "📝",
                    text: "Fill in your name, birth details & service",
                  },
                  {
                    step: "04",
                    icon: "✅",
                    text: "Session confirmed via WhatsApp within 24 hours",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "rgba(212,175,55,0.15)",
                        border: "1px solid rgba(212,175,55,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "#d4af37",
                        fontSize: 11,
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {s.step}
                    </div>
                    <div style={{ paddingTop: 6 }}>
                      <span style={{ fontSize: 14, marginRight: 6 }}>
                        {s.icon}
                      </span>
                      <span
                        style={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: 13,
                          fontFamily: "sans-serif",
                        }}
                      >
                        {s.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment */}
            <div
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "28px 24px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              <p
                style={{
                  color: "#7c5cbf",
                  letterSpacing: 3,
                  fontSize: 11,
                  margin: "0 0 8px",
                  fontFamily: "sans-serif",
                }}
              >
                FLEXIBLE OPTIONS
              </p>
              <h3
                style={{
                  color: "#2d1254",
                  fontSize: 22,
                  fontWeight: "normal",
                  margin: "0 0 20px",
                  fontFamily: "Georgia, serif",
                }}
              >
                Payment Methods
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {[
                  {
                    emoji: "💳",
                    method: "UPI / PhonePe / Google Pay",
                    note: "India — Instant transfer",
                  },
                  {
                    emoji: "🏦",
                    method: "Bank Transfer (NEFT/RTGS)",
                    note: "India — All major banks",
                  },
                  {
                    emoji: "🌐",
                    method: "PayPal",
                    note: "International clients",
                  },
                  {
                    emoji: "💰",
                    method: "Other Methods",
                    note: "Details shared after confirmation",
                  },
                ].map((p) => (
                  <div
                    key={p.method}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "center",
                      padding: "10px 14px",
                      background: "rgba(212,175,55,0.05)",
                      borderRadius: 8,
                      border: "1px solid rgba(212,175,55,0.15)",
                    }}
                  >
                    <span style={{ fontSize: 20 }}>{p.emoji}</span>
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: "bold",
                          color: "#2d1254",
                          fontFamily: "Georgia, serif",
                        }}
                      >
                        {p.method}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#9c8c9c",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {p.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontSize: 11,
                  color: "#9c8c9c",
                  margin: "16px 0 0",
                  fontFamily: "sans-serif",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                }}
              >
                Payment details shared personally after session confirmation.
                All transactions are safe and confidential.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #0d0520 0%, #1a0a2e 40%, #2d1254 100%)",
              borderRadius: 16,
              padding: "36px 40px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 10 }}>ॐ</div>
            <h3
              style={{
                color: "#f5d76e",
                fontSize: 28,
                fontWeight: "normal",
                margin: "0 0 8px",
                fontFamily: "Georgia, serif",
                letterSpacing: 2,
              }}
            >
              Begin Your Healing Journey Today
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: 13,
                margin: "0 0 24px",
                fontFamily: "sans-serif",
              }}
            >
              आत्मा को उपचार, ऊर्जा को संतुलन, जीवन को दिव्यता
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 16,
                flexWrap: "wrap",
                marginBottom: 20,
              }}
            >
              <a
                href="https://www.soulbyseema.com"
                style={{
                  background: "linear-gradient(135deg, #d4af37, #f5d76e)",
                  color: "#1a0a2e",
                  padding: "14px 36px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontSize: 16,
                  fontWeight: "bold",
                  fontFamily: "Georgia, serif",
                  display: "inline-block",
                  boxShadow: "0 4px 20px rgba(212,175,55,0.4)",
                }}
              >
                🌐 www.soulbyseema.com
              </a>
              <a
                href="https://wa.me/919999885995"
                style={{
                  background: "rgba(37,211,102,0.15)",
                  border: "1px solid rgba(37,211,102,0.4)",
                  color: "#25d366",
                  padding: "14px 36px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontSize: 16,
                  fontWeight: "bold",
                  fontFamily: "Georgia, serif",
                  display: "inline-block",
                }}
              >
                💬 WhatsApp: +91 9999885995
              </a>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: 11,
                margin: 0,
                fontFamily: "sans-serif",
              }}
            >
              ✉️ soulbyseema.official@gmail.com &nbsp;&bull;&nbsp; Serving India,
              USA, UK, Canada, UAE, Australia &amp; Worldwide
            </p>
          </div>

          <div style={{ marginTop: 40 }}>
            <GoldDivider />
          </div>

          <p
            style={{
              textAlign: "center",
              color: "#9c8c9c",
              fontSize: 10,
              marginTop: 16,
              fontFamily: "sans-serif",
              letterSpacing: 1,
            }}
          >
            &copy; {new Date().getFullYear()} Soul by Seema. All rights
            reserved. &nbsp;|&nbsp;{" "}
            <a
              href="https://www.soulbyseema.com"
              style={{ color: "#7c5cbf", textDecoration: "none" }}
            >
              www.soulbyseema.com
            </a>{" "}
            &nbsp;|&nbsp; Built with love using{" "}
            <a
              href="https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=soulbyseema.com"
              style={{ color: "#7c5cbf", textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          html, body { 
            margin: 0 !important; 
            padding: 0 !important;
            width: 210mm !important;
          }
          .brochure-page { 
            page-break-after: always !important;
            break-after: page !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            height: 297mm !important;
            width: 210mm !important;
            overflow: hidden !important;
            position: relative !important;
            display: block !important;
            box-sizing: border-box !important;
          }
          .brochure-page:last-child { 
            page-break-after: avoid !important; 
            break-after: avoid !important;
          }
        }
        @page { size: A4 portrait; margin: 0mm; }
        * { box-sizing: border-box; }
        body { margin: 0; }
      `}</style>
    </>
  );
}
