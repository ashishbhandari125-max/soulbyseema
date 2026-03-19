import { useEffect, useState } from "react";

interface OmLoaderProps {
  onDone: () => void;
}

const PARTICLES = [
  {
    id: "p1",
    left: "44%",
    bottom: "42%",
    duration: "2.6s",
    delay: "0s",
    size: 3,
    color: "rgba(201,162,74,0.9)",
  },
  {
    id: "p2",
    left: "51%",
    bottom: "40%",
    duration: "3.1s",
    delay: "0.5s",
    size: 2,
    color: "rgba(255,255,255,0.9)",
  },
  {
    id: "p3",
    left: "47%",
    bottom: "43%",
    duration: "2.4s",
    delay: "1.1s",
    size: 2,
    color: "rgba(180,100,255,0.8)",
  },
  {
    id: "p4",
    left: "53%",
    bottom: "41%",
    duration: "2.9s",
    delay: "0.8s",
    size: 3,
    color: "rgba(201,162,74,0.9)",
  },
  {
    id: "p5",
    left: "49%",
    bottom: "44%",
    duration: "3.3s",
    delay: "1.6s",
    size: 2,
    color: "rgba(255,255,255,0.9)",
  },
  {
    id: "p6",
    left: "55%",
    bottom: "39%",
    duration: "2.7s",
    delay: "0.3s",
    size: 2,
    color: "rgba(180,100,255,0.8)",
  },
  {
    id: "p7",
    left: "42%",
    bottom: "45%",
    duration: "3.0s",
    delay: "1.3s",
    size: 3,
    color: "rgba(201,162,74,0.9)",
  },
  {
    id: "p8",
    left: "57%",
    bottom: "46%",
    duration: "2.8s",
    delay: "0.6s",
    size: 2,
    color: "rgba(255,255,255,0.9)",
  },
  {
    id: "p9",
    left: "40%",
    bottom: "38%",
    duration: "3.4s",
    delay: "1.9s",
    size: 3,
    color: "rgba(180,100,255,0.8)",
  },
  {
    id: "p10",
    left: "60%",
    bottom: "42%",
    duration: "2.5s",
    delay: "0.4s",
    size: 2,
    color: "rgba(201,162,74,0.9)",
  },
  {
    id: "p11",
    left: "46%",
    bottom: "47%",
    duration: "3.2s",
    delay: "1.7s",
    size: 2,
    color: "rgba(255,255,255,0.9)",
  },
  {
    id: "p12",
    left: "52%",
    bottom: "36%",
    duration: "2.9s",
    delay: "0.9s",
    size: 3,
    color: "rgba(180,100,255,0.8)",
  },
  {
    id: "p13",
    left: "38%",
    bottom: "44%",
    duration: "3.1s",
    delay: "2.1s",
    size: 2,
    color: "rgba(201,162,74,0.9)",
  },
  {
    id: "p14",
    left: "62%",
    bottom: "40%",
    duration: "2.7s",
    delay: "1.4s",
    size: 2,
    color: "rgba(255,255,255,0.9)",
  },
];

const RAYS = Array.from({ length: 14 }, (_, i) => i);

export default function OmLoader({ onDone }: OmLoaderProps) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 3800);
    const doneTimer = setTimeout(() => onDone(), 4500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <>
      <style>{`
        @keyframes om-breathe {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 28px rgba(255,220,100,0.9)) drop-shadow(0 0 60px rgba(201,162,74,0.5)) drop-shadow(0 0 100px rgba(140,80,255,0.35)); }
          50% { transform: scale(1.07); filter: drop-shadow(0 0 60px rgba(255,240,140,1)) drop-shadow(0 0 120px rgba(201,162,74,0.8)) drop-shadow(0 0 180px rgba(140,80,255,0.55)); }
        }
        @keyframes ring-expand {
          0% { transform: translate(-50%, -50%) scale(0.55); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1.35); opacity: 0; }
        }
        @keyframes ring-expand-2 {
          0% { transform: translate(-50%, -50%) scale(0.65); opacity: 0.45; }
          100% { transform: translate(-50%, -50%) scale(1.45); opacity: 0; }
        }
        @keyframes ring-expand-3 {
          0% { transform: translate(-50%, -50%) scale(0.75); opacity: 0.3; }
          100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
        }
        @keyframes particle-rise {
          0% { transform: translateY(0) scale(1); opacity: 0.9; }
          100% { transform: translateY(-130px) scale(0.2); opacity: 0; }
        }
        @keyframes om-fade-in {
          0% { opacity: 0; transform: scale(0.72); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes text-fade-in {
          0% { opacity: 0; letter-spacing: 0.35em; }
          100% { opacity: 1; letter-spacing: 0.55em; }
        }
        @keyframes ray-pulse {
          0%, 100% { opacity: 0.15; transform: rotate(var(--ray-angle)) scaleX(0.8); }
          50% { opacity: 0.55; transform: rotate(var(--ray-angle)) scaleX(1.1); }
        }
        @keyframes ray-shimmer {
          0% { opacity: 0.1; }
          33% { opacity: 0.5; }
          66% { opacity: 0.2; }
          100% { opacity: 0.4; }
        }
        @keyframes glow-spin {
          0% { transform: translate(-50%,-50%) rotate(0deg); }
          100% { transform: translate(-50%,-50%) rotate(360deg); }
        }
        .om-loader-root {
          position: fixed; inset: 0; z-index: 9999;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          background: radial-gradient(ellipse at 50% 40%, #1a0835 0%, #0B0618 55%, #050210 100%);
          transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .om-loader-root.fading { opacity: 0; pointer-events: none; }
        .om-center {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        .om-symbol {
          font-size: clamp(90px, 18vw, 180px);
          color: #FFE066;
          line-height: 1;
          animation: om-fade-in 0.9s cubic-bezier(0.4,0,0.2,1) forwards, om-breathe 2.8s ease-in-out 0.9s infinite;
          font-family: 'Noto Serif', 'Georgia', serif;
          user-select: none;
          position: relative;
          z-index: 3;
          text-shadow:
            0 0 20px rgba(255,240,100,1),
            0 0 50px rgba(255,200,60,0.9),
            0 0 100px rgba(201,162,74,0.7),
            0 0 180px rgba(140,80,255,0.4),
            0 0 260px rgba(100,50,200,0.25);
        }
        .om-rays-container {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          z-index: 1;
          pointer-events: none;
        }
        .om-ray {
          position: absolute;
          top: 0;
          left: 0;
          width: 320px;
          height: 3px;
          transform-origin: 0% 50%;
          border-radius: 0 99px 99px 0;
          animation: ray-shimmer 2.4s ease-in-out infinite;
        }
        .om-glow-disc {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            rgba(255,220,80,0.18),
            rgba(201,162,74,0.08),
            rgba(180,100,255,0.15),
            rgba(255,220,80,0.18),
            rgba(201,162,74,0.08),
            rgba(180,100,255,0.15),
            rgba(255,220,80,0.18)
          );
          animation: glow-spin 6s linear infinite;
          pointer-events: none;
          z-index: 1;
          filter: blur(12px);
        }
        .om-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          border: 1.5px solid rgba(201,162,74,0.5);
          pointer-events: none;
        }
        .om-ring-1 {
          width: 220px; height: 220px;
          animation: ring-expand 2s ease-out 0.3s infinite;
        }
        .om-ring-2 {
          width: 290px; height: 290px;
          animation: ring-expand-2 2s ease-out 0.7s infinite;
          border-color: rgba(201,162,74,0.32);
        }
        .om-ring-3 {
          width: 360px; height: 360px;
          animation: ring-expand-3 2s ease-out 1.1s infinite;
          border-color: rgba(201,162,74,0.18);
        }
        .om-ring-4 {
          width: 440px; height: 440px;
          animation: ring-expand-3 2.4s ease-out 1.5s infinite;
          border-color: rgba(201,162,74,0.1);
        }
        .om-brand {
          margin-top: 36px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 13px;
          font-weight: 500;
          color: rgba(201,162,74,0.82);
          animation: text-fade-in 1.2s ease-out 0.8s both;
          z-index: 2;
        }
        .om-tagline {
          margin-top: 8px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 10px;
          font-weight: 400;
          color: rgba(201,162,74,0.42);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          animation: text-fade-in 1.4s ease-out 1.2s both;
          z-index: 2;
        }
        .om-particle {
          position: absolute;
          border-radius: 50%;
          animation: particle-rise linear infinite;
        }
      `}</style>
      <div className={`om-loader-root${fading ? " fading" : ""}`}>
        {/* Concentric rings */}
        <div className="om-ring om-ring-1" />
        <div className="om-ring om-ring-2" />
        <div className="om-ring om-ring-3" />
        <div className="om-ring om-ring-4" />

        {/* Floating particles */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="om-particle"
            style={{
              left: p.left,
              bottom: p.bottom,
              width: p.size,
              height: p.size,
              background: p.color,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}

        {/* Spinning conic glow disc */}
        <div className="om-glow-disc" />

        {/* Light rays shooting from OM center */}
        <div className="om-rays-container">
          {RAYS.map((i) => {
            const angle = (i / RAYS.length) * 360;
            const isGolden = i % 3 !== 2;
            const isViolet = i % 3 === 2;
            const color = isViolet
              ? "linear-gradient(to right, rgba(180,100,255,0.7), rgba(180,100,255,0.05))"
              : isGolden && i % 2 === 0
                ? "linear-gradient(to right, rgba(255,240,140,0.8), rgba(255,240,140,0.03))"
                : "linear-gradient(to right, rgba(201,162,74,0.6), rgba(201,162,74,0.03))";
            return (
              <div
                key={i}
                className="om-ray"
                style={{
                  transform: `rotate(${angle}deg)`,
                  background: color,
                  animationDelay: `${(i * 0.18) % 2.4}s`,
                  height: i % 4 === 0 ? "4px" : i % 4 === 2 ? "2px" : "3px",
                  width:
                    i % 3 === 0 ? "360px" : i % 3 === 1 ? "280px" : "220px",
                }}
              />
            );
          })}
        </div>

        {/* OM Symbol */}
        <div className="om-center">
          <div className="om-symbol">ॐ</div>
        </div>

        {/* Branding */}
        <div className="om-brand">SoulBySeema</div>
        <div className="om-tagline">Sacred Healing · Divine Light</div>
      </div>
    </>
  );
}
