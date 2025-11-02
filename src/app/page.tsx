import BenefitSection from "@/components/BenefitSection";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import Services from "@/components/Services";
export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitSection />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
    </>
  );
}
