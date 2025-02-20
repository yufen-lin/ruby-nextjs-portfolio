import HeroSection from "@/components/home/HeroSection";
import ContactSection from "@/components/home/ContactSection";
import AboutSection from "@/components/home/AboutSection";

export default function Home() {
  return (
    <div className="mx-auto py-10 sm:container">
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
