import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CoursesSection from "@/components/CoursesSection";
import DailySacredMessage from "@/components/DailySacredMessage";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MoonPhaseWidget from "@/components/MoonPhaseWidget";
import Navigation from "@/components/Navigation";
import PaymentSection from "@/components/PaymentSection";
import ServicesSection from "@/components/ServicesSection";
import SoulReadingQuiz from "@/components/SoulReadingQuiz";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#12061E" }}>
      <Navigation />
      <HeroSection />
      <DailySacredMessage />
      <AboutSection />
      <ServicesSection />
      <MoonPhaseWidget />
      <CoursesSection />
      <TestimonialsSection />
      <SoulReadingQuiz />
      <HowItWorksSection />
      <ContactSection />
      <PaymentSection />
      <Footer />
    </div>
  );
}
