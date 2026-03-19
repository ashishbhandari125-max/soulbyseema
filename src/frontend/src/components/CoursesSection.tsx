import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitEnquiry } from "@/hooks/useQueries";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const originalCourses = [
  {
    name: "Reiki Level 1",
    subtitle: "Foundation & Self-Healing",
    desc: "Attuned to life force energy for self-healing and healing others. Begin your sacred journey.",
    duration: "1–2 Days",
  },
  {
    name: "Reiki Level 2",
    subtitle: "Distance Healing & Symbols",
    desc: "Master distance healing and sacred Reiki symbols. Expand your healing practice exponentially.",
    duration: "1–2 Days",
  },
  {
    name: "Reiki Level 3 (Master)",
    subtitle: "Advanced Mastery",
    desc: "Deepen your connection and healing power. Step into the role of a true Reiki Master.",
    duration: "2–3 Days",
  },
  {
    name: "Reiki Grandmaster",
    subtitle: "Complete Mastery",
    desc: "The highest level — become a Reiki Grandmaster and teacher. A profound life transformation.",
    duration: "3–5 Days",
  },
  {
    name: "Angel Card Reading Course",
    subtitle: "Divination Arts",
    desc: "Learn to read Angel Cards and channel divine guidance for yourself and others.",
    duration: "1 Day",
  },
  {
    name: "Meditation Course",
    subtitle: "Inner Mastery",
    desc: "Guided techniques for deep meditation, inner peace, and spiritual awakening.",
    duration: "1–2 Days",
  },
];

const newCourses = [
  {
    name: "Crystal Healing Course",
    subtitle: "Vibrational Medicine",
    desc: "Learn to select, programme and use healing crystals for yourself and clients. Includes crystal prescriptions and chakra layouts.",
    duration: "1–2 Days",
  },
  {
    name: "Tarot Card Reading Course",
    subtitle: "Divination Arts",
    desc: "Master all 78 Tarot cards, spreads and intuitive reading techniques. Offer professional readings with confidence.",
    duration: "2–3 Days",
  },
  {
    name: "Spirit Release & Protection Course",
    subtitle: "Sacred Protection",
    desc: "Specialised training in identifying, releasing spirits and building energetic protection for self and clients.",
    duration: "2 Days",
  },
  {
    name: "Hypnosis & Hypnotherapy Course",
    subtitle: "Mind Mastery",
    desc: "Certified hypnosis techniques to guide clients into trance states for healing, habit change and deep transformation.",
    duration: "3–5 Days",
  },
  {
    name: "Psychic Surgery Course",
    subtitle: "Advanced Energy Healing",
    desc: "Learn advanced psychic surgery methods to detect and remove energetic implants, cords and blockages from the subtle body.",
    duration: "3 Days",
  },
];

function EnquiryModal({
  course,
  open,
  onClose,
}: { course: string; open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { mutate, isPending } = useSubmitEnquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      {
        name: form.name,
        email: form.email,
        country: "",
        phone: "",
        service: course,
        timezone: "",
        message: form.message,
      },
      { onSuccess: () => setSubmitted(true) },
    );
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-md"
        style={{
          background: "#1A0A2A",
          border: "1px solid rgba(201,162,74,0.3)",
          color: "#F2EDF7",
        }}
        data-ocid="courses.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-soul-text-light">
            Enquire to Enroll
          </DialogTitle>
          <p className="text-soul-gold/80 text-sm">{course}</p>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center" data-ocid="courses.success_state">
            <div className="text-4xl mb-4">🙏</div>
            <h3 className="font-serif text-xl text-soul-text-light mb-2">
              Thank You!
            </h3>
            <p className="text-soul-text-light/70 text-sm">
              Seema will contact you within 24 hours with course details and
              pricing. Namaste!
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="btn-gold text-sm mt-6"
              data-ocid="courses.close_button"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="text-soul-text-light/80 text-sm mb-1 block">
                Full Name *
              </Label>
              <Input
                required
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                placeholder="Your full name"
                className="bg-white/10 border-white/20 text-soul-text-light placeholder:text-white/30"
                data-ocid="courses.input"
              />
            </div>
            <div>
              <Label className="text-soul-text-light/80 text-sm mb-1 block">
                Email *
              </Label>
              <Input
                required
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                placeholder="your@email.com"
                className="bg-white/10 border-white/20 text-soul-text-light placeholder:text-white/30"
                data-ocid="courses.input"
              />
            </div>
            <div>
              <Label className="text-soul-text-light/80 text-sm mb-1 block">
                Message (optional)
              </Label>
              <Textarea
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                placeholder="Any questions or special requests..."
                rows={3}
                className="bg-white/10 border-white/20 text-soul-text-light placeholder:text-white/30"
                data-ocid="courses.textarea"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={isPending}
                className="btn-gold text-sm flex-1 justify-center"
                data-ocid="courses.submit_button"
              >
                {isPending && <Loader2 size={14} className="animate-spin" />}
                {isPending ? "Sending..." : "Send Enquiry"}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="btn-glass text-sm"
                data-ocid="courses.cancel_button"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function CourseCard({
  name,
  subtitle,
  desc,
  duration,
  index,
  onEnquire,
}: {
  name: string;
  subtitle: string;
  desc: string;
  duration: string;
  index: number;
  onEnquire: (name: string) => void;
}) {
  return (
    <div
      className={`glass-card p-6 flex flex-col reveal reveal-delay-${Math.min(index + 1, 6)}`}
    >
      <div
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 self-start"
        style={{
          background: "rgba(201,162,74,0.15)",
          color: "#C9A24A",
          border: "1px solid rgba(201,162,74,0.25)",
        }}
      >
        {duration}
      </div>
      <h3 className="font-serif text-xl font-semibold text-soul-text-light mb-1">
        {name}
      </h3>
      <p className="text-soul-gold text-sm mb-3 italic">{subtitle}</p>
      <p className="text-soul-text-light/60 text-sm leading-relaxed flex-1">
        {desc}
      </p>
      <p className="text-soul-text-light/40 text-xs mt-4 mb-3 italic">
        Contact for Pricing
      </p>
      <button
        type="button"
        onClick={() => onEnquire(name)}
        className="btn-gold text-sm justify-center"
        data-ocid={`courses.item.${index + 1}`}
      >
        Enquire to Enroll
      </button>
    </div>
  );
}

export default function CoursesSection() {
  const ref = useScrollReveal();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  return (
    <section
      id="courses"
      className="py-20 md:py-32"
      style={{
        background: "linear-gradient(180deg, #07162F 0%, #0D0A1E 100%)",
      }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-soul-gold font-medium tracking-widest uppercase text-sm mb-3">
            Courses
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-soul-text-light mb-4">
            Learn the Sacred Arts
          </h2>
          <p className="text-soul-text-light/60 italic text-lg">
            Sacred arts for healing, protection &amp; divination
          </p>
        </div>

        {/* Original courses grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {originalCourses.map(({ name, subtitle, desc, duration }, i) => (
            <CourseCard
              key={name}
              name={name}
              subtitle={subtitle}
              desc={desc}
              duration={duration}
              index={i}
              onEnquire={setSelectedCourse}
            />
          ))}
        </div>

        {/* Divider for new courses */}
        <div className="flex items-center gap-4 my-12">
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(201,162,74,0.5) 100%)",
            }}
          />
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full"
            style={{
              color: "#C9A24A",
              background: "rgba(201,162,74,0.1)",
              border: "1px solid rgba(201,162,74,0.3)",
            }}
          >
            ✦ New Courses
          </span>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(201,162,74,0.5) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* New courses grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newCourses.map(({ name, subtitle, desc, duration }, i) => (
            <CourseCard
              key={name}
              name={name}
              subtitle={subtitle}
              desc={desc}
              duration={duration}
              index={i + originalCourses.length}
              onEnquire={setSelectedCourse}
            />
          ))}
        </div>
      </div>

      <EnquiryModal
        course={selectedCourse ?? ""}
        open={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </section>
  );
}
