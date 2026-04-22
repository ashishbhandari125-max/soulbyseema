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

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden={!visible}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          left: "1.5rem",
          zIndex: 40,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(14px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <button
          type="button"
          onClick={() => setBookingOpen(true)}
          aria-label="Book a healing session"
          data-ocid="sticky.open_modal_button"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.45rem",
            padding: "0.6rem 1.25rem",
            borderRadius: "9999px",
            background: "rgba(18,6,30,0.82)",
            border: "1.5px solid rgba(201,162,74,0.55)",
            color: "#F0D080",
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            cursor: "pointer",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow:
              "0 4px 24px rgba(201,162,74,0.22), 0 0 0 1px rgba(201,162,74,0.08)",
            whiteSpace: "nowrap",
          }}
        >
          <span role="img" aria-hidden="true">
            🪷
          </span>
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
