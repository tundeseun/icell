import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PartnersStrip from "../components/PartnersStrip";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      <div className="bg-[#F4F7FF]">
        <AboutSection />
        <ServicesSection />
        <PartnersStrip />
        <ContactCTA />
      </div>
    </main>
  );
}