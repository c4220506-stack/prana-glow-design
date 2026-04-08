import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustLogos from "@/components/home/TrustLogos";
import ValuesSection from "@/components/home/ValuesSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GallerySection from "@/components/home/GallerySection";
import ContactSection from "@/components/home/ContactSection";
import ArticlesSection from "@/components/home/ArticlesSection";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <TrustLogos />
      <ValuesSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <ArticlesSection />
    </main>
    <Footer />
  </>
);

export default Index;
