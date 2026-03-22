import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Camera,
  Clock,
  Globe,
  Home as HomeIcon,
  Moon,
  Sparkles,
  Star,
  Wind,
} from "lucide-react";
import type { CSSProperties } from "react";

const CHAKRA_COLORS = [
  "#9400D3",
  "#4B0082",
  "#0066FF",
  "#00C851",
  "#FFD700",
  "#FF8C00",
  "#FF3333",
];

const expertiseItems = [
  { icon: Sparkles, label: "Online Reiki Healing Sessions" },
  { icon: Star, label: "Angel Card Reading" },
  { icon: Wind, label: "Aura Cleansing & Energy Balancing" },
  { icon: Moon, label: "Guided Meditation" },
  { icon: Clock, label: "Past Life Regression Therapy (PLRT)" },
  { icon: Camera, label: "Photo Reading" },
  { icon: HomeIcon, label: "Home & Space Energy Clearing" },
];

const RINGS = [
  { size: 192, speed: "18s", dir: "cw", color: "#9400D3" },
  { size: 168, speed: "14s", dir: "ccw", color: "#4B0082" },
  { size: 144, speed: "22s", dir: "cw", color: "#0066FF" },
  { size: 120, speed: "10s", dir: "ccw", color: "#00C851" },
  { size: 96, speed: "16s", dir: "cw", color: "#FFD700" },
  { size: 72, speed: "12s", dir: "ccw", color: "#FF8C00" },
  { size: 48, speed: "20s", dir: "cw", color: "#FF3333" },
];

const ORBS = [
  {
    id: "orb-violet",
    color: "#9400D3",
    radius: 110,
    speed: "7s",
    delay: "0s",
    size: 10,
  },
  {
    id: "orb-blue",
    color: "#0066FF",
    radius: 90,
    speed: "5s",
    delay: "1s",
    size: 8,
  },
  {
    id: "orb-green",
    color: "#00C851",
    radius: 130,
    speed: "9s",
    delay: "2s",
    size: 9,
  },
  {
    id: "orb-yellow",
    color: "#FFD700",
    radius: 75,
    speed: "4s",
    delay: "0.5s",
    size: 7,
  },
  {
    id: "orb-orange",
    color: "#FF8C00",
    radius: 115,
    speed: "8s",
    delay: "1.5s",
    size: 8,
  },
  {
    id: "orb-red",
    color: "#FF3333",
    radius: 95,
    speed: "6s",
    delay: "3s",
    size: 9,
  },
];

function ColorfulMandalaSVG() {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ animation: "mandala-breathe 3s ease-in-out infinite" }}
      role="img"
      aria-label="Sacred geometry mandala illustration"
    >
      <title>Sacred Geometry Mandala</title>
      <defs>
        <radialGradient id="mg1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#9400D3" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="0.3" />
        </radialGradient>
        <linearGradient id="tri1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="tri2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9400D3" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <g fill="none">
        <circle
          cx="200"
          cy="200"
          r="190"
          stroke="#9400D3"
          strokeWidth="0.8"
          opacity="0.4"
        />
        <circle
          cx="200"
          cy="200"
          r="170"
          stroke="#4B0082"
          strokeWidth="0.8"
          opacity="0.45"
        />
        <circle
          cx="200"
          cy="200"
          r="150"
          stroke="#0066FF"
          strokeWidth="0.9"
          opacity="0.5"
        />
        <circle
          cx="200"
          cy="200"
          r="130"
          stroke="#00C851"
          strokeWidth="0.9"
          opacity="0.5"
        />
        <circle
          cx="200"
          cy="200"
          r="110"
          stroke="#FFD700"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle
          cx="200"
          cy="200"
          r="90"
          stroke="#FF8C00"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle
          cx="200"
          cy="200"
          r="70"
          stroke="#FF3333"
          strokeWidth="1.2"
          opacity="0.65"
        />
        <circle
          cx="200"
          cy="200"
          r="50"
          stroke="#C9A24A"
          strokeWidth="1"
          opacity="0.7"
        />
        <circle
          cx="200"
          cy="200"
          r="30"
          stroke="#FFD700"
          strokeWidth="1"
          opacity="0.75"
        />
        <circle cx="200" cy="200" r="10" fill="url(#mg1)" opacity="0.9" />
        <polygon
          points="200,30 370,290 30,290"
          stroke="url(#tri1)"
          strokeWidth="0.8"
          opacity="0.6"
        />
        <polygon
          points="200,370 30,110 370,110"
          stroke="url(#tri2)"
          strokeWidth="0.8"
          opacity="0.6"
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 200 + 190 * Math.cos(rad);
          const y1 = 200 + 190 * Math.sin(rad);
          const x2 = 200 + 190 * Math.cos(rad + Math.PI);
          const y2 = 200 + 190 * Math.sin(rad + Math.PI);
          const lineColors = [
            "#FFD700",
            "#FF8C00",
            "#9400D3",
            "#0066FF",
            "#FFD700",
            "#FF8C00",
            "#9400D3",
            "#0066FF",
          ];
          return (
            <line
              key={`line-${angle}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={lineColors[angle / 45]}
              strokeOpacity="0.3"
            />
          );
        })}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
          (angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 200 + 110 * Math.cos(rad);
            const cy = 200 + 110 * Math.sin(rad);
            return (
              <circle
                key={`petal-${angle}`}
                cx={cx}
                cy={cy}
                r="28"
                stroke={CHAKRA_COLORS[idx % 7]}
                strokeWidth="0.8"
                opacity="0.45"
              />
            );
          },
        )}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 200 + 70 * Math.cos(rad);
          const cy = 200 + 70 * Math.sin(rad);
          return (
            <circle
              key={`inner-${angle}`}
              cx={cx}
              cy={cy}
              r="18"
              stroke={CHAKRA_COLORS[idx % 7]}
              strokeWidth="0.8"
              opacity="0.6"
            />
          );
        })}
        {[
          0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270,
          292.5, 315, 337.5,
        ].map((angle, idx) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 200 + 188 * Math.cos(rad);
          const y2 = 200 + 188 * Math.sin(rad);
          return (
            <line
              key={`spoke-${angle}`}
              x1="200"
              y1="200"
              x2={x2}
              y2={y2}
              stroke={CHAKRA_COLORS[idx % 7]}
              strokeOpacity="0.18"
            />
          );
        })}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 200 + 150 * Math.cos(rad);
          const cy = 200 + 150 * Math.sin(rad);
          return (
            <circle
              key={`dot-${angle}`}
              cx={cx}
              cy={cy}
              r="4"
              fill={CHAKRA_COLORS[idx % 7]}
              opacity="0.85"
            />
          );
        })}
        <circle cx="200" cy="200" r="5" fill="#C9A24A" opacity="0.9" />
      </g>
    </svg>
  );
}

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <>
      <style>{`
        @keyframes mandala-breathe {
          0%, 100% { transform: scale(0.97); }
          50% { transform: scale(1.03); }
        }
        @keyframes chakra-ring-cw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes chakra-ring-ccw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes orb-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes om-center-pulse {
          0%, 100% { text-shadow: 0 0 12px #FFD700, 0 0 30px rgba(201,162,74,0.7); }
          50% { text-shadow: 0 0 24px #FFD700, 0 0 60px rgba(201,162,74,0.95), 0 0 90px rgba(140,80,255,0.4); }
        }
      `}</style>
      <section id="about" className="section-ivory py-20 md:py-32" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Animated Sacred Geometry */}
            <div className="reveal flex items-center justify-center">
              <div
                className="relative flex items-center justify-center"
                style={{ width: 340, height: 340 }}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, #1a0835 0%, #0d0520 55%, #070214 100%)",
                    boxShadow:
                      "0 0 60px rgba(140,80,255,0.15), 0 0 120px rgba(80,40,180,0.08)",
                  }}
                />

                {RINGS.map((ring) => (
                  <div
                    key={ring.size}
                    className="absolute rounded-full border"
                    style={
                      {
                        width: ring.size,
                        height: ring.size,
                        top: "50%",
                        left: "50%",
                        borderColor: ring.color,
                        opacity: 0.6,
                        borderWidth: "1px",
                        animation: `chakra-ring-${ring.dir} ${ring.speed} linear infinite`,
                        transform: "translate(-50%, -50%)",
                      } as CSSProperties
                    }
                  />
                ))}

                <div
                  className="absolute"
                  style={{
                    width: 200,
                    height: 200,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <ColorfulMandalaSVG />
                </div>

                {ORBS.map((orb) => (
                  <div
                    key={orb.id}
                    className="absolute"
                    style={{
                      width: 0,
                      height: 0,
                      top: "50%",
                      left: "50%",
                      animation: `orb-rotate ${orb.speed} linear ${orb.delay} infinite`,
                    }}
                  >
                    <div
                      className="rounded-full"
                      style={{
                        width: orb.size,
                        height: orb.size,
                        background: orb.color,
                        boxShadow: `0 0 ${orb.size * 2}px ${orb.color}, 0 0 ${orb.size * 4}px ${orb.color}55`,
                        transform: `translateX(${orb.radius}px) translateY(-${orb.size / 2}px)`,
                      }}
                    />
                  </div>
                ))}

                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "36px",
                    color: "#FFD700",
                    zIndex: 10,
                    animation: "om-center-pulse 2.5s ease-in-out infinite",
                    fontFamily: "'Noto Serif', Georgia, serif",
                    userSelect: "none",
                    textShadow:
                      "0 0 12px #FFD700, 0 0 30px rgba(201,162,74,0.7)",
                  }}
                >
                  ॐ
                </div>
              </div>
            </div>

            {/* Right — Text content */}
            <div className="reveal reveal-delay-2">
              <p className="text-soul-gold font-medium tracking-widest uppercase text-sm mb-3">
                About
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-soul-text-muted mb-4 leading-tight">
                Spiritual Wellness Coach Online
              </h2>
              <p className="text-soul-gold italic text-lg mb-6">
                Namaste 🙏 — Welcome to your healing journey
              </p>
              <p className="text-soul-text-muted leading-relaxed text-base mb-5">
                Seema is a certified <strong>Reiki Grandmaster</strong> and{" "}
                <strong>Spiritual Wellness Coach</strong> — having cleared all
                levels of Reiki mastery — with over 15 years of experience in
                spiritual healing arts. Her journey began with a profound
                personal awakening that led her to study under revered masters
                across India, and she has since dedicated her life to helping
                souls heal, transform, and reconnect with their inner light.
              </p>
              <p className="text-soul-text-muted leading-relaxed text-base mb-8">
                With a rare combination of intuitive gifts and deep spiritual
                training, Seema channels healing <em>shakti</em> (divine energy)
                to address the root causes of pain, blocks, and imbalances —
                creating lasting transformation in body, mind, and soul.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {expertiseItems.map(({ icon: Icon, label }, idx) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${CHAKRA_COLORS[idx % 7]}22`,
                        border: `1px solid ${CHAKRA_COLORS[idx % 7]}55`,
                      }}
                    >
                      <Icon
                        size={14}
                        style={{ color: CHAKRA_COLORS[idx % 7] }}
                      />
                    </div>
                    <span className="text-soul-text-muted text-sm font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(201,162,74,0.08)",
                  border: "1px solid rgba(201,162,74,0.2)",
                }}
              >
                <Globe
                  size={18}
                  style={{ color: "#C9A24A" }}
                  className="mt-0.5 flex-shrink-0"
                />
                <p className="text-soul-text-muted text-sm leading-relaxed">
                  <strong>Serving clients globally</strong> — India, USA, UK,
                  Canada, UAE, Australia and worldwide via phone &amp; video
                  call. Distance is no barrier to healing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
