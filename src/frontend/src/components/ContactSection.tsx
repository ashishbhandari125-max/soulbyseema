import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitEnquiry } from "@/hooks/useQueries";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock, Loader2, Mail, Phone } from "lucide-react";
import { useState } from "react";

const serviceOptions = [
  "Reiki Healing (All Levels)",
  "Angel Card Reading",
  "Aura Cleaning",
  "Guided Meditation",
  "Past Life Regression",
  "Photo Reading",
  "Home & Space Energy Clearing",
  "Reiki Level 1 Course",
  "Reiki Level 2 Course",
  "Reiki Level 3 (Master) Course",
  "Reiki Grandmaster Course",
  "Angel Card Reading Course",
  "Meditation Course",
  "Other / General Enquiry",
];

type FormState = {
  name: string;
  email: string;
  country: string;
  phone: string;
  service: string;
  timezone: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  country: "",
  phone: "",
  service: "",
  timezone: "",
  message: "",
};

function sendWhatsAppNotification(form: FormState) {
  const lines = [
    "🙏 *New Enquiry – SoulBySeema*",
    "",
    `👤 *Name:* ${form.name}`,
    `📧 *Email:* ${form.email}`,
    `🌍 *Country:* ${form.country}`,
    `📱 *Phone/WhatsApp:* ${form.phone}`,
    `✨ *Service:* ${form.service || "Not specified"}`,
    `⏰ *Preferred Time:* ${form.timezone || "Not specified"}`,
    `💬 *Message:* ${form.message || "No message"}`,
  ];
  const text = encodeURIComponent(lines.join("\n"));
  window.open(`https://wa.me/919999885995?text=${text}`, "_blank");
}

export default function ContactSection() {
  const ref = useScrollReveal();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const { mutate, isPending } = useSubmitEnquiry();

  const set =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const snapshot = { ...form };
    mutate(form, {
      onSuccess: () => {
        setSubmitted(true);
        setForm(initialForm);
        sendWhatsAppNotification(snapshot);
      },
    });
  };

  return (
    <section id="contact" className="section-ivory py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p
            className="font-medium tracking-widest uppercase text-sm mb-3"
            style={{ color: "#C9A24A" }}
          >
            Contact
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-soul-text-muted mb-4">
            Begin Your Healing Journey
          </h2>
          <p className="text-soul-text-muted-light italic text-lg">
            Reach out and let the healing begin
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* WhatsApp column */}
          <div className="reveal">
            <div
              className="rounded-2xl p-8 h-full flex flex-col justify-between"
              style={{
                background: "rgba(201,162,74,0.06)",
                border: "1px solid rgba(201,162,74,0.2)",
              }}
            >
              <div>
                <h3 className="font-serif text-2xl font-semibold text-soul-text-muted mb-2">
                  WhatsApp Booking
                </h3>
                <p className="text-soul-text-muted-light text-sm leading-relaxed mb-8">
                  Chat directly with Seema for instant booking. The fastest way
                  to schedule your session.
                </p>

                <a
                  href="https://wa.me/919999885995?text=Namaste%20Seema%20ji%2C%20I%20would%20like%20to%20book%20a%20session"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-full text-white font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl mb-8"
                  style={{
                    background:
                      "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  }}
                  data-ocid="contact.primary_button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                    role="img"
                    aria-label="WhatsApp"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-soul-text-muted text-sm">
                    <Phone size={15} style={{ color: "#C9A24A" }} />
                    <span>+91 9999885995</span>
                  </div>
                  <div className="flex items-center gap-3 text-soul-text-muted text-sm">
                    <Mail size={15} style={{ color: "#C9A24A" }} />
                    <a
                      href="mailto:soulbyseema.official@gmail.com"
                      className="hover:text-soul-gold transition-colors"
                    >
                      soulbyseema.official@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-soul-text-muted text-sm">
                    <Clock size={15} style={{ color: "#C9A24A" }} />
                    <span>Monday – Saturday, 9 AM – 7 PM IST</span>
                  </div>
                </div>
              </div>

              <p className="text-soul-text-muted-light text-xs mt-6 italic">
                Also available for international time zones — please mention
                your timezone when booking.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal reveal-delay-2">
            <div
              className="rounded-2xl p-8"
              style={{
                background: "#fff",
                border: "1px solid rgba(201,162,74,0.15)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              <h3 className="font-serif text-2xl font-semibold text-soul-text-muted mb-6">
                Send an Enquiry
              </h3>

              {submitted ? (
                <div
                  className="py-10 text-center"
                  data-ocid="contact.success_state"
                >
                  <div className="text-5xl mb-4">🙏</div>
                  <h4 className="font-serif text-xl text-soul-text-muted mb-2">
                    Thank You!
                  </h4>
                  <p className="text-soul-text-muted-light leading-relaxed">
                    Seema will contact you within 24 hours. Namaste 🙏
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-gold text-sm mt-6"
                    data-ocid="contact.secondary_button"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-soul-text-muted text-sm mb-1 block">
                        Full Name *
                      </Label>
                      <Input
                        required
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Your full name"
                        className="border-soul-rose-dark focus:border-soul-gold"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <Label className="text-soul-text-muted text-sm mb-1 block">
                        Email *
                      </Label>
                      <Input
                        required
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="your@email.com"
                        className="border-soul-rose-dark focus:border-soul-gold"
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-soul-text-muted text-sm mb-1 block">
                        Country *
                      </Label>
                      <Input
                        required
                        value={form.country}
                        onChange={set("country")}
                        placeholder="India / UK / USA..."
                        className="border-soul-rose-dark"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <Label className="text-soul-text-muted text-sm mb-1 block">
                        Phone / WhatsApp *
                      </Label>
                      <Input
                        required
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="+91 XXXXX XXXXX"
                        className="border-soul-rose-dark"
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-soul-text-muted text-sm mb-1 block">
                      Service Interested In
                    </Label>
                    <Select
                      value={form.service}
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, service: v }))
                      }
                    >
                      <SelectTrigger
                        className="border-soul-rose-dark"
                        data-ocid="contact.select"
                      >
                        <SelectValue placeholder="Select a service or course" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-soul-text-muted text-sm mb-1 block">
                      Preferred Time / Timezone
                    </Label>
                    <Input
                      value={form.timezone}
                      onChange={set("timezone")}
                      placeholder="e.g. Mornings IST / 3pm GMT"
                      className="border-soul-rose-dark"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <Label className="text-soul-text-muted text-sm mb-1 block">
                      Message
                    </Label>
                    <Textarea
                      value={form.message}
                      onChange={set("message")}
                      rows={3}
                      placeholder="Tell Seema about your healing needs..."
                      className="border-soul-rose-dark"
                      data-ocid="contact.textarea"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="btn-gold w-full justify-center text-base mt-2"
                    data-ocid="contact.submit_button"
                  >
                    {isPending && (
                      <Loader2 size={16} className="animate-spin" />
                    )}
                    {isPending ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
