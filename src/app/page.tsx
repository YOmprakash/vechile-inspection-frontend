import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
     <Navbar/>
     <HeroSection />
     <HowItWorks />
     <WhyChooseUs/>
     <PricingSection/>
     <Footer/>
    </div>
  );
}
