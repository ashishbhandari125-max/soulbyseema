import { useEffect, useState } from "react";
import AppointmentPopup from "./AppointmentPopup";

export default function StickyBookButton() {
  const [visible, setVisible] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const nearBottom = scrollY + winHeight >= docHeight - 200;
      setVisible(scrollY > 80 && !nearBottom);
    };

    // Check on mount too
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "1.5rem",
          left: "1.5rem",
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <button
          type="button"
          onClick={() => setBookingOpen(true)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.6rem 1.2rem",
            borderRadius: "9999px",
            background: "rgba(201,162,74,0.18)",
            border: "1.5px solid rgba(201,162,74,0.6)",
            color: "#F0D080",
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            cursor: "pointer",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow:
              "0 4px 24px rgba(201,162,74,0.25), 0 0 0 1px rgba(201,162,74,0.1)",
            whiteSpace: "nowrap",
          }}
        >
          <span>🪷</span>
          <span>Book a Session</span>
        </button>
      </div>

      <AppointmentPopup
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
}
