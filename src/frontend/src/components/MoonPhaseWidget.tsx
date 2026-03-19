const PHASES = [
  {
    name: "New Moon",
    nameHi: "अमावस्या",
    icon: "🌑",
    illumination: 0,
    meaning: "New beginnings await. Plant your intentions in sacred soil.",
    meaningHi: "नई शुरुआत का समय। अपनी इच्छाओं के बीज बोएं।",
    color: "#4A4458",
  },
  {
    name: "Waxing Crescent",
    nameHi: "बढ़ता चन्द्रमा",
    icon: "🌒",
    illumination: 25,
    meaning: "Your intentions are growing. Nurture your dreams with faith.",
    meaningHi: "आपके सपने फल-फूल रहे हैं। विश्वास से आगे बढ़ें।",
    color: "#7C6F9F",
  },
  {
    name: "First Quarter",
    nameHi: "प्रथम चतुर्थांश",
    icon: "🌓",
    illumination: 50,
    meaning: "Take action. Overcome challenges with courage and grace.",
    meaningHi: "कार्य करने का समय। साहस से आगे बढ़ें।",
    color: "#9B8EC4",
  },
  {
    name: "Waxing Gibbous",
    nameHi: "शुक्ल पक्ष",
    icon: "🌔",
    illumination: 75,
    meaning: "Refinement and gratitude. Your blessings are multiplying.",
    meaningHi: "कृतज्ञता का समय। आशीर्वाद बढ़ रहे हैं।",
    color: "#C4B5E8",
  },
  {
    name: "Full Moon",
    nameHi: "पूर्णिमा",
    icon: "🌕",
    illumination: 100,
    meaning:
      "Peak energy. Illuminate your truth and release what no longer serves.",
    meaningHi: "ऊर्जा का चरम। जो काम नहीं आता उसे छोड़ें।",
    color: "#F0E6C8",
  },
  {
    name: "Waning Gibbous",
    nameHi: "कृष्ण पक्ष",
    icon: "🌖",
    illumination: 75,
    meaning: "Share your wisdom. Gratitude opens infinite abundance.",
    meaningHi: "अपनी बुद्धि साझा करें। कृतज्ञता से प्रचुरता आती है।",
    color: "#A89FBF",
  },
  {
    name: "Last Quarter",
    nameHi: "अंतिम चतुर्थांश",
    icon: "🌗",
    illumination: 50,
    meaning: "Release and let go. Make space for new divine blessings.",
    meaningHi: "छोड़ें और मुक्त हों। नए आशीर्वाद के लिए जगह बनाएं।",
    color: "#7A7095",
  },
  {
    name: "Waning Crescent",
    nameHi: "घटता चन्द्रमा",
    icon: "🌘",
    illumination: 25,
    meaning: "Rest and reflect. The divine is preparing something beautiful.",
    meaningHi: "विश्राम और चिंतन। ईश्वर कुछ सुंदर तैयार कर रहे हैं।",
    color: "#5A5275",
  },
];

function getMoonPhase(): { phase: (typeof PHASES)[0]; illumination: number } {
  // Known new moon reference: Jan 6, 2000
  const knownNewMoon = new Date(2000, 0, 6).getTime();
  const lunarCycle = 29.53058867 * 24 * 60 * 60 * 1000;
  const now = Date.now();
  const elapsed = (now - knownNewMoon) % lunarCycle;
  const fraction = elapsed / lunarCycle; // 0-1
  const phaseIndex = Math.floor(fraction * 8) % 8;
  const illumination = Math.round(
    Math.abs(Math.cos((fraction * 2 - 0.5) * Math.PI)) * 100,
  );
  return { phase: PHASES[phaseIndex], illumination };
}

export default function MoonPhaseWidget() {
  const { phase, illumination } = getMoonPhase();

  return (
    <section
      style={{ padding: "60px 20px", position: "relative" }}
      data-ocid="moon.section"
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, ${phase.color}15 0%, transparent 70%)`,
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            color: "#C9A24A",
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Aaj ka Chandra · Today's Moon
        </div>
        <h2
          style={{
            color: "#ffffff",
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 700,
            marginBottom: "40px",
          }}
        >
          Lunar Energy & Guidance
        </h2>

        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
            border: `1px solid ${phase.color}44`,
            borderRadius: "24px",
            padding: "40px",
            boxShadow: `0 0 40px ${phase.color}22`,
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Moon visual */}
          <div
            style={{
              fontSize: "96px",
              lineHeight: 1,
              filter: `drop-shadow(0 0 20px ${phase.color}) drop-shadow(0 0 40px ${phase.color}88)`,
              animation: "moonPulse 3s ease-in-out infinite",
            }}
          >
            {phase.icon}
          </div>

          {/* Phase info */}
          <div>
            <h3
              style={{
                color: phase.color,
                fontSize: "28px",
                fontWeight: 700,
                marginBottom: "4px",
              }}
            >
              {phase.name}
            </h3>
            <p
              style={{
                color: "#C9A24A",
                fontSize: "18px",
                marginBottom: "8px",
              }}
            >
              {phase.nameHi}
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: `${phase.color}22`,
                border: `1px solid ${phase.color}44`,
                borderRadius: "50px",
                padding: "6px 16px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: phase.color,
                }}
              />
              <span
                style={{
                  color: phase.color,
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                {illumination}% Illuminated
              </span>
            </div>
            <p
              style={{
                color: "#E8D5A0",
                fontSize: "17px",
                lineHeight: 1.6,
                maxWidth: "500px",
                margin: "0 auto 8px",
              }}
            >
              {phase.meaning}
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "15px",
                fontStyle: "italic",
                lineHeight: 1.6,
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              {phase.meaningHi}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes moonPulse {
          0%, 100% { filter: drop-shadow(0 0 20px ${phase.color}) drop-shadow(0 0 40px ${phase.color}88); }
          50% { filter: drop-shadow(0 0 30px ${phase.color}) drop-shadow(0 0 60px ${phase.color}cc); }
        }
      `}</style>
    </section>
  );
}
