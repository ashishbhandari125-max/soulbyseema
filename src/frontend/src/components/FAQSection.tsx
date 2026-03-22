import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    id: "01",
    question: "What exactly is Spiritual Healing, and how can it help me?",
    questionHi: "Spiritual Healing क्या है, और यह मेरी कैसे मदद कर सकती है?",
    answerEn:
      "Spiritual Healing is an ancient practice where a healer channels universal energy (prana/chi) to restore balance in your body, mind, and soul. It helps with physical pain, emotional trauma, stress, anxiety, relationship issues, and life blockages. It is not bound to any religion or belief system — it works purely through energy. People experience deep inner peace, mental clarity, renewed confidence, and improved overall health after sessions.",
    answerHi:
      "Spiritual Healing ek prachin vidya hai jisme healer vishwaavyapi urja (prana/chi) ke zariye aapke shareer, mann aur aatma mein santulan laate hain. Ye physical dard, emotional trauma, stress, anxiety, rishton ki pareshaniyan aur zindagi mein aane wali rukaawaton ko door karta hai. Ye kisi bhi dharm ya vishwaas se nahi bandha — sirf shuddh urja se kaam karta hai. Log sessions ke baad gehri shanti, clarity, aur behtar swasthya anubhav karte hain.",
  },
  {
    id: "02",
    question:
      "How do Online Sessions (Distance Healing) work? Is it effective?",
    questionHi:
      "Online Sessions (Distance Healing) कैसे काम करते हैं? क्या यह प्रभावी है?",
    answerEn:
      "Energy is not limited by time or space. In Distance Healing, Seema ji connects remotely with your energy field — no matter which corner of the world you are in. During the session, you simply relax at home while she channels healing energy to you. Thousands of client experiences and spiritual research confirm that Distance Healing is just as powerful and effective as an in-person session.",
    answerHi:
      "Urja samay aur sthan ki seema se pare hoti hai. Distance Healing mein Seema ji aapki energy field se door rehkar bhi connect karti hain — chahe aap duniya ke kisi bhi kone mein hon. Session ke dauran aap ghar pe aaraam se let jaate hain aur wo apni healing urja aap tak bhejti hain. Hazaron clients ke anubhav aur adhyatmik shodh ye saabit karte hain ki Distance Healing utni hi prabhavshali hai jitni seedhi mulaqat mein.",
  },
  {
    id: "03",
    question: "How do I prepare for my session?",
    questionHi: "मैं अपने session की तैयारी कैसे करूँ?",
    answerEn:
      'Preparing for your session is simple. Find a quiet, comfortable space where you will not be disturbed. Wear loose, comfortable clothing. Eat something light at least 30 minutes before. Drink a glass of water. Set a clear intention in your mind — "I am open to healing." Keep your phone on silent and allow yourself to fully surrender. No special knowledge or prior experience is needed — just an open heart.',
    answerHi:
      'Session ki taiyaari bahut aasaan hai. Ek shaant, aaram deh jagah dhundho jahan koi disturb na kare. Dhile, aaram deh kapde pahno. Session se kam se kam 30 minute pehle halka khaana khao. Ek glass paani piyo. Mann mein ek spasht irada rakho — "Main theek hona chahta/chahti hun." Phone silent karo aur khud ko poori tarah samarpan karne do. Koi khaas gyaan ya poorv anubhav zaroori nahi — sirf ek khula dil kaafi hai.',
  },
  {
    id: "04",
    question: "How can I book a session from outside India?",
    questionHi: "मैं भारत के बाहर से session कैसे book कर सकता/सकती हूँ?",
    answerEn:
      'Very easy! Seema ji serves clients worldwide. WhatsApp: +91 9999885995 | Email: soulbyseema.official@gmail.com | Or click "Book Appointment" on the website. Seema ji will personally confirm your time zone and schedule. International payments are accepted via PayPal, bank transfer, or UPI through international apps. No matter which country you are in — your healing session can happen!',
    answerHi:
      'Bilkul aasaan! Seema ji poori duniya mein clients ki seva karti hain. WhatsApp: +91 9999885995 | Email: soulbyseema.official@gmail.com | Ya website pe "Book Appointment" button dabayein. Seema ji khud aapka time zone aur schedule confirm karengi. International payment PayPal, bank transfer, ya international UPI apps ke zariye ki ja sakti hai. Aap chahe kisi bhi desh mein hon — aapka healing session ho sakta hai!',
  },
  {
    id: "05",
    question: "Is my session confidential?",
    questionHi: "क्या मेरा session गोपनीय है?",
    answerEn:
      "Yes, 100% confidential. Everything shared during your session — your personal details, life situations, struggles, and experiences — remains strictly between you and Seema ji. Nothing is ever shared with any third party. You are completely safe to open up about your deepest concerns, fears, and challenges. Your privacy and trust are our highest priority.",
    answerHi:
      "Haan, 100% gupaniya. Aapki personal jaankari, zindagi ki paristhitiyan, takleefein aur anubhav — sab kuch sirf aapke aur Seema ji ke beech rehta hai. Koi bhi cheez kisi third party ke saath share nahi ki jaati. Aap apni gehri se gehri pareshaniyan, darr aur chunautiyan bina kisi jhijhak ke share kar sakte hain. Aapki privacy aur vishwaas hamari sabse badi zimmedaari hai.",
  },
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "#12061E" }}
      data-ocid="faq.section"
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #D4AF37 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #7B2FBE 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.35em] mb-3 font-medium"
            style={{ color: "#D4AF37" }}
          >
            ✦ Have Questions? ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              background:
                "linear-gradient(135deg, #D4AF37 0%, #FFF8DC 50%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-xl md:text-2xl"
            style={{
              color: "rgba(212,175,55,0.7)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            अक्सर पूछे जाने वाले सवाल
          </p>
          <div
            className="mx-auto mt-6 h-px w-32"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            }}
          />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4" data-ocid="faq.list">
          {faqs.map((faq, index) => {
            const isOpen = openItem === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-ocid={`faq.item.${index + 1}`}
              >
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: isOpen
                      ? "rgba(212,175,55,0.06)"
                      : "rgba(255,255,255,0.03)",
                    border: isOpen
                      ? "1px solid rgba(212,175,55,0.45)"
                      : "1px solid rgba(255,255,255,0.08)",
                    boxShadow: isOpen
                      ? "0 0 30px rgba(212,175,55,0.12), inset 0 1px 0 rgba(212,175,55,0.1)"
                      : "none",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Question row */}
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center gap-5 group transition-all duration-200"
                    style={{
                      cursor: "pointer",
                    }}
                    aria-expanded={isOpen}
                    data-ocid={`faq.toggle.${index + 1}`}
                  >
                    {/* Number badge */}
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold tracking-wider transition-all duration-300"
                      style={{
                        background: isOpen
                          ? "rgba(212,175,55,0.25)"
                          : "rgba(212,175,55,0.1)",
                        border: "1px solid rgba(212,175,55,0.4)",
                        color: "#D4AF37",
                        fontFamily: "monospace",
                      }}
                    >
                      {faq.id}
                    </span>

                    {/* Question text */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-base md:text-lg font-semibold leading-snug transition-colors duration-200"
                        style={{
                          color: isOpen ? "#FFF8DC" : "rgba(255,255,255,0.9)",
                          fontFamily: "'Playfair Display', serif",
                        }}
                      >
                        {faq.question}
                      </p>
                      <p
                        className="text-sm mt-0.5"
                        style={{ color: "rgba(212,175,55,0.6)" }}
                      >
                        {faq.questionHi}
                      </p>
                    </div>

                    {/* Plus/X icon */}
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: "rgba(212,175,55,0.1)",
                        border: "1px solid rgba(212,175,55,0.3)",
                        color: "#D4AF37",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        fontSize: "20px",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </button>

                  {/* Answer panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-6 pb-6 pl-[4.5rem]">
                          {/* Divider line */}
                          <div
                            className="mb-4 h-px"
                            style={{
                              background:
                                "linear-gradient(90deg, rgba(212,175,55,0.4), transparent)",
                            }}
                          />

                          {/* English answer */}
                          <p
                            className="text-sm md:text-base leading-relaxed mb-4"
                            style={{ color: "rgba(255,255,255,0.85)" }}
                          >
                            {faq.answerEn}
                          </p>

                          {/* Language divider */}
                          <div className="flex items-center gap-3 my-4">
                            <div
                              className="h-px flex-1"
                              style={{
                                background:
                                  "linear-gradient(90deg, rgba(212,175,55,0.25), transparent)",
                              }}
                            />
                            <span
                              className="text-xs px-2 py-0.5 rounded-full"
                              style={{
                                color: "rgba(212,175,55,0.6)",
                                border: "1px solid rgba(212,175,55,0.2)",
                                background: "rgba(212,175,55,0.05)",
                              }}
                            >
                              हिंदी
                            </span>
                            <div
                              className="h-px flex-1"
                              style={{
                                background:
                                  "linear-gradient(270deg, rgba(212,175,55,0.25), transparent)",
                              }}
                            />
                          </div>

                          {/* Hindi answer */}
                          <p
                            className="text-sm md:text-base leading-relaxed"
                            style={{ color: "rgba(255,255,255,0.65)" }}
                          >
                            {faq.answerHi}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <p
            className="text-sm mb-4"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Still have questions? We're here to help.
          </p>
          <a
            href={`https://wa.me/919999885995?text=${encodeURIComponent("Namaste! I have a question about Soul by Seema healing sessions.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.1))",
              border: "1px solid rgba(212,175,55,0.5)",
              color: "#D4AF37",
              boxShadow: "0 0 20px rgba(212,175,55,0.1)",
            }}
            data-ocid="faq.primary_button"
          >
            <span>💬</span>
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
