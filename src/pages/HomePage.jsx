import HeroSection from "../components/HeroSection";
import NoteScreen from "../components/NoteScreen";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQPage from "./FAQPage";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Note Screenshot */}
      <NoteScreen />

      {/* Features */}
      <Features />

      <FAQPage id="faq" />

      {/** Testimonials */}
      <Testimonials />
    </div>
  );
}
