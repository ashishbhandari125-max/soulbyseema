import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useState } from "react";

const WHATSAPP_NUMBER = "919999885995";

const SERVICES = [
  "Online Reiki Healing Session",
  "Angel Card Reading",
  "Aura Cleansing & Energy Balancing",
  "Guided Meditation",
  "Past Life Regression Therapy (PLRT)",
  "Photo Reading",
  "Home & Space Energy Clearing",
  "Crystal Remedies",
  "Crystal Healing",
  "Spirit Release",
  "Spirit Protection",
  "Psychic Surgery",
  "Professional Tarot & Angel Card Reading",
  "Hypnosis",
  "Chakra Balancing",
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AppointmentPopup({ open, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    tob: "",
    pob: "",
    service: "",
    preferredDate: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Namaste Seema ji, I would like to book a healing session.",
      `Name: ${form.name}`,
      `Date of Birth: ${form.dob}`,
      `Time of Birth: ${form.tob || "Not specified"}`,
      `Place of Birth: ${form.pob}`,
      `Service: ${form.service}`,
      `Preferred Date: ${form.preferredDate}`,
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="max-w-lg w-full border-0 p-0 overflow-hidden"
        style={{
          background: "rgba(18,6,30,0.97)",
          border: "1px solid rgba(201,162,74,0.35)",
          borderRadius: "20px",
          backdropFilter: "blur(20px)",
        }}
        data-ocid="appointment.dialog"
      >
        <div
          className="px-7 pt-7 pb-4"
          style={{ borderBottom: "1px solid rgba(201,162,74,0.18)" }}
        >
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-xl font-serif">
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{
                  background: "rgba(201,162,74,0.18)",
                  border: "1px solid rgba(201,162,74,0.4)",
                }}
              >
                🪷
              </span>
              <span style={{ color: "#f0d070" }}>
                Book Your Healing Session
              </span>
            </DialogTitle>
            <p
              className="text-sm mt-1"
              style={{ color: "rgba(242,237,247,0.55)" }}
            >
              Fill in your details and we'll connect over WhatsApp to confirm.
            </p>
          </DialogHeader>
        </div>

        <form
          onSubmit={handleSubmit}
          className="px-7 py-5 space-y-4"
          style={{ maxHeight: "70vh", overflowY: "auto" }}
        >
          <div className="space-y-1.5">
            <Label
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "rgba(201,162,74,0.85)" }}
            >
              Full Name *
            </Label>
            <Input
              required
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="appointment-input"
              data-ocid="appointment.input"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: "rgba(201,162,74,0.85)" }}
              >
                Date of Birth *
              </Label>
              <Input
                required
                type="date"
                value={form.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
                className="appointment-input"
                data-ocid="appointment.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: "rgba(201,162,74,0.85)" }}
              >
                Time of Birth
                <span
                  className="ml-1 normal-case"
                  style={{ color: "rgba(242,237,247,0.4)", fontSize: "0.7rem" }}
                >
                  (if known)
                </span>
              </Label>
              <Input
                type="time"
                value={form.tob}
                onChange={(e) => handleChange("tob", e.target.value)}
                className="appointment-input"
                data-ocid="appointment.input"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "rgba(201,162,74,0.85)" }}
            >
              Place of Birth *
            </Label>
            <Input
              required
              placeholder="City, Country"
              value={form.pob}
              onChange={(e) => handleChange("pob", e.target.value)}
              className="appointment-input"
              data-ocid="appointment.input"
            />
          </div>

          <div className="space-y-1.5">
            <Label
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "rgba(201,162,74,0.85)" }}
            >
              Select Service *
            </Label>
            <Select
              required
              value={form.service}
              onValueChange={(v) => handleChange("service", v)}
            >
              <SelectTrigger
                className="appointment-input"
                data-ocid="appointment.select"
              >
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent
                style={{
                  background: "#1a0a2a",
                  border: "1px solid rgba(201,162,74,0.3)",
                  color: "#f2edf7",
                }}
              >
                {SERVICES.map((s) => (
                  <SelectItem
                    key={s}
                    value={s}
                    className="focus:bg-soul-gold/10 cursor-pointer"
                    style={{ color: "#f2edf7" }}
                  >
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "rgba(201,162,74,0.85)" }}
            >
              Preferred Session Date *
            </Label>
            <Input
              required
              type="date"
              value={form.preferredDate}
              onChange={(e) => handleChange("preferredDate", e.target.value)}
              className="appointment-input"
              data-ocid="appointment.input"
            />
          </div>

          <div className="space-y-1.5">
            <Label
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "rgba(201,162,74,0.85)" }}
            >
              Your Message / Query
              <span
                className="ml-1 normal-case"
                style={{ color: "rgba(242,237,247,0.4)", fontSize: "0.7rem" }}
              >
                (optional)
              </span>
            </Label>
            <Textarea
              placeholder="Share what you'd like help with..."
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={3}
              className="appointment-input resize-none"
              data-ocid="appointment.textarea"
            />
          </div>

          <button
            type="submit"
            className="btn-gold w-full justify-center text-sm mt-2"
            data-ocid="appointment.submit_button"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Send Booking Request via WhatsApp
          </button>

          <p
            className="text-center text-xs pb-1"
            style={{ color: "rgba(242,237,247,0.35)" }}
          >
            🔒 You will be redirected to WhatsApp to confirm your booking
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
