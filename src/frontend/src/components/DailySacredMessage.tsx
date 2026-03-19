const MESSAGES = [
  {
    hi: "Aaj aapki aatma prakash se bhari hai",
    en: "Today your soul is filled with divine light",
  },
  { hi: "Healing aapka janamhaq hai", en: "Healing is your birthright" },
  {
    hi: "Aap bramhand ki shakti se jude hain",
    en: "You are connected to the power of the universe",
  },
  {
    hi: "Har pal mein chupi hai ek nai shuruaat",
    en: "Every moment holds a beautiful new beginning",
  },
  {
    hi: "Aapka dil ek pavitra mandir hai",
    en: "Your heart is a sacred temple",
  },
  {
    hi: "Prem hi sabse bada upchar hai",
    en: "Love is the greatest medicine of all",
  },
  {
    hi: "Aap jo chahte hain, woh aapki taraf aa raha hai",
    en: "What you desire is already flowing towards you",
  },
  {
    hi: "Aapki aatma mein divya shakti hai",
    en: "Divine power resides within your soul",
  },
  { hi: "Shanti aapka asli swaroop hai", en: "Peace is your true nature" },
  {
    hi: "Aaj ka din aapke liye khushiyan laata hai",
    en: "Today brings immense joy and blessings",
  },
  {
    hi: "Aap surakshit hain, aap priy hain",
    en: "You are safe, you are loved, you are whole",
  },
  {
    hi: "Bramhand aapki madad karta hai",
    en: "The universe conspires to help you",
  },
  {
    hi: "Aapki awaaz mein jadoo hai",
    en: "There is magic in your voice and your story",
  },
  {
    hi: "Sab kuch theek ho raha hai",
    en: "Everything is healing and aligning for you now",
  },
  {
    hi: "Aap anant shakti ke srot hain",
    en: "You are a source of infinite energy and light",
  },
  {
    hi: "Darr se mukti hi asli azaadi hai",
    en: "Freedom from fear is the ultimate liberation",
  },
  {
    hi: "Aapka wajood ek chamatkaar hai",
    en: "Your very existence is a divine miracle",
  },
  {
    hi: "Prani maatra mein Ishwar hai",
    en: "The divine lives in every living being",
  },
  {
    hi: "Aapki taqdeer aapke haath mein hai",
    en: "Your destiny is held in your own sacred hands",
  },
  {
    hi: "Aaj sachchi khushi ka din hai",
    en: "Today is a day of true joy and gratitude",
  },
  {
    hi: "Aapki soul journey anokhi aur sundar hai",
    en: "Your soul journey is unique and beautiful",
  },
  {
    hi: "Sachchi shakti andar se aati hai",
    en: "True strength always comes from within",
  },
  {
    hi: "Aap jahan bhi hain, wahaan Ishwar hain",
    en: "Wherever you are, the divine is with you",
  },
  {
    hi: "Aapki aankhen noor se bhari hain",
    en: "Your eyes are filled with divine radiance",
  },
  {
    hi: "Zindagi ek anmol tohfa hai",
    en: "Life is the most precious gift of all",
  },
  { hi: "Aapke sapne poore honge", en: "Your dreams are already coming true" },
  {
    hi: "Dua mein badi taqat hai",
    en: "There is immense power in prayer and intention",
  },
  {
    hi: "Aap khud ko pyar karen",
    en: "Love yourself unconditionally and completely",
  },
  {
    hi: "Har takleef ek sabaq hai",
    en: "Every hardship carries a sacred lesson",
  },
  {
    hi: "Aaj ka din divya hai",
    en: "Today is divinely orchestrated just for you",
  },
];

function getDailyMessage() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return MESSAGES[dayOfYear % MESSAGES.length];
}

export default function DailySacredMessage() {
  const msg = getDailyMessage();
  const whatsappText = encodeURIComponent(
    `✨ Aaj ka Sandesh:\n"${msg.hi}"\n"${msg.en}"\n\n— SoulBySeema.com`,
  );
  const shareUrl = `https://wa.me/?text=${whatsappText}`;

  return (
    <section
      style={{
        padding: "60px 20px 40px",
        position: "relative",
        overflow: "hidden",
      }}
      data-ocid="sacred_message.section"
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(201,162,74,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        {/* Heading */}
        <div
          style={{
            color: "#C9A24A",
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Aaj ka Sandesh · Today's Sacred Message
        </div>

        {/* Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(201,162,74,0.25)",
            borderRadius: "20px",
            padding: "40px 36px",
            boxShadow:
              "0 0 40px rgba(201,162,74,0.1), inset 0 1px 0 rgba(255,255,255,0.07)",
            position: "relative",
          }}
        >
          {/* OM Symbol */}
          <div
            style={{
              fontSize: "56px",
              color: "#C9A24A",
              lineHeight: 1,
              marginBottom: "20px",
              animation: "omGlow 3s ease-in-out infinite",
              display: "block",
              textShadow:
                "0 0 20px rgba(201,162,74,0.6), 0 0 40px rgba(201,162,74,0.3)",
            }}
          >
            ॐ
          </div>

          {/* Hindi Message */}
          <p
            style={{
              color: "#E8D5A0",
              fontSize: "22px",
              fontWeight: 600,
              marginBottom: "12px",
              lineHeight: 1.5,
              animation: "shimmerText 4s ease-in-out infinite",
            }}
          >
            "{msg.hi}"
          </p>

          {/* English Message */}
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "16px",
              fontStyle: "italic",
              marginBottom: "28px",
              lineHeight: 1.6,
            }}
          >
            "{msg.en}"
          </p>

          {/* Share Button */}
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="sacred_message.button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(37,211,102,0.15)",
              border: "1px solid rgba(37,211,102,0.4)",
              color: "#25D366",
              padding: "10px 22px",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <title>WhatsApp</title>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Share This Message
          </a>
        </div>
      </div>

      <style>{`
        @keyframes omGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(201,162,74,0.6), 0 0 40px rgba(201,162,74,0.3); }
          50% { text-shadow: 0 0 40px rgba(201,162,74,0.9), 0 0 80px rgba(201,162,74,0.5); }
        }
        @keyframes shimmerText {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
      `}</style>
    </section>
  );
}
