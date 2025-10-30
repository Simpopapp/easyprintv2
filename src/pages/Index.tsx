import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PossibilitiesSection from "@/components/PossibilitiesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import ClientsCarousel from "@/components/ClientsCarousel";
import BlogCards from "@/components/BlogCards";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import FloatingSocialIcons from "@/components/FloatingSocialIcons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PossibilitiesSection />
      <AboutSection />
      <PortfolioGrid />
      <ClientsCarousel />
      <BlogCards />
      <ContactSection />
      <MapSection />
      <Footer />
      <FloatingSocialIcons />
    </div>
  );
};

export default Index;
