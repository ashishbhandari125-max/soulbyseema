import { motion } from "motion/react";

export default function BannerSection() {
  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <motion.a
          href="#services"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="block cursor-pointer"
          style={{ textDecoration: "none" }}
        >
          <img
            src="/assets/generated/soul-by-seema-banner.dim_1200x400.jpg"
            alt="Soul by Seema – Spiritual Healing & Wellness"
            className="w-full rounded-2xl object-cover"
            style={{
              border: "1px solid rgba(180, 130, 40, 0.3)",
              boxShadow:
                "0 0 30px rgba(212, 175, 55, 0.15), 0 4px 24px rgba(0,0,0,0.5)",
              display: "block",
            }}
          />
        </motion.a>
        <p
          className="text-center mt-3 text-sm"
          style={{ color: "rgba(212, 175, 55, 0.75)" }}
        >
          ✨ Explore our Spiritual Healing Services
        </p>
      </div>
    </section>
  );
}
