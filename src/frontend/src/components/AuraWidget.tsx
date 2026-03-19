import { useState } from "react";

const AURAS = [
  {
    name: "Ruby Red",
    nameHi: "माणिक लाल",
    chakra: "Root Chakra",
    chakraHi: "मूलाधार",
    meaning: "You are grounded, strong, and full of primal life force.",
    color: "#E53E3E",
  },
  {
    name: "Saffron Orange",
    nameHi: "केसरी नारंगी",
    chakra: "Sacral Chakra",
    chakraHi: "स्वाधिष्ठान",
    meaning: "Your creativity and passion are flowing freely today.",
    color: "#DD6B20",
  },
  {
    name: "Golden Yellow",
    nameHi: "सुनहरा पीला",
    chakra: "Solar Plexus",
    chakraHi: "मणिपुर",
    meaning: "Your personal power and confidence shine brilliantly.",
    color: "#D69E2E",
  },
  {
    name: "Emerald Green",
    nameHi: "पन्ना हरा",
    chakra: "Heart Chakra",
    chakraHi: "अनाहत",
    meaning: "Love and healing energy radiate from your heart.",
    color: "#38A169",
  },
  {
    name: "Sky Blue",
    nameHi: "आकाशी नीला",
    chakra: "Throat Chakra",
    chakraHi: "विशुद्ध",
    meaning: "Truth, clarity and divine communication guide you.",
    color: "#3182CE",
  },
  {
    name: "Indigo",
    nameHi: "इंडिगो",
    chakra: "Third Eye",
    chakraHi: "आज्ञा",
    meaning: "Your intuition is awakened — trust your inner vision.",
    color: "#4C51BF",
  },
  {
    name: "Violet Crown",
    nameHi: "बैंगनी मुकुट",
    chakra: "Crown Chakra",
    chakraHi: "सहस्रार",
    meaning: "You are connected to divine consciousness and higher realms.",
    color: "#805AD5",
  },
];

function getAuraIndex(): number {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDate();
  const month = now.getMonth();
  return (hour + day * 3 + month * 7) % 7;
}

export default function AuraWidget() {
  const [expanded, setExpanded] = useState(false);
  const aura = AURAS[getAuraIndex()];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 1000,
        fontFamily: "inherit",
      }}
      data-ocid="aura.widget"
    >
      {expanded && (
        <div
          style={{
            background: "rgba(18,6,30,0.92)",
            backdropFilter: "blur(16px)",
            border: `1px solid ${aura.color}55`,
            borderRadius: "16px",
            padding: "16px 20px",
            marginBottom: "12px",
            maxWidth: "240px",
            boxShadow: `0 0 24px ${aura.color}44`,
            animation: "fadeInUp 0.3s ease",
          }}
        >
          <div
            style={{
              color: "#C9A24A",
              fontSize: "10px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            Aaj Ka Aura / Today's Aura
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: aura.color,
                boxShadow: `0 0 16px ${aura.color}`,
                flexShrink: 0,
              }}
            />
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "14px" }}>
                {aura.name}
              </div>
              <div style={{ color: "#C9A24A", fontSize: "12px" }}>
                {aura.nameHi}
              </div>
            </div>
          </div>
          <div
            style={{ color: "#A78BFA", fontSize: "12px", marginBottom: "6px" }}
          >
            {aura.chakra} · {aura.chakraHi}
          </div>
          <div style={{ color: "#e2d9f3", fontSize: "12px", lineHeight: 1.5 }}>
            {aura.meaning}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        data-ocid="aura.toggle"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(18,6,30,0.85)",
          backdropFilter: "blur(12px)",
          border: `1px solid ${aura.color}66`,
          borderRadius: "50px",
          padding: "8px 14px 8px 8px",
          cursor: "pointer",
          boxShadow: `0 0 20px ${aura.color}44`,
          animation: "auraPulse 2.5s ease-in-out infinite",
        }}
      >
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: aura.color,
            boxShadow: `0 0 12px ${aura.color}`,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            color: "#C9A24A",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.5px",
            whiteSpace: "nowrap",
          }}
        >
          Your Aura Today
        </span>
      </button>

      <style>{`
        @keyframes auraPulse {
          0%, 100% { box-shadow: 0 0 20px ${aura.color}44; }
          50% { box-shadow: 0 0 32px ${aura.color}88; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
