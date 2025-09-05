"use client";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import InnovationSection from "@/components/innovation-section";
import ExperienceSection from "@/components/experience-section";
import TestimonialSection from "@/components/testimonial-section";
import ClientLogosSection from "@/components/client-logos-section";
// import ProductsSection from "@/components/products-section";
import StatisticsSection from "@/components/statistics-section";
import FAQSection from "@/components/faq-section";
import BlogSection from "@/components/blog-section";
import LocationsSection from "@/components/locations-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import AnimatedStats from "@/components/animated-stats";

export default function PlastigesaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section id="HeroSection" className="scroll-mt-24">
        <HeroSection />
      </section>

      <section id="InnovationSection" className="scroll-mt-24">
        <InnovationSection />
      </section>

      <section id="ExperienceSection" className="scroll-mt-24">
        <ExperienceSection />
      </section>

      <section id="TestimonialSection" className="scroll-mt-24">
        <TestimonialSection />
      </section>

      <section id="ClientLogosSection" className="scroll-mt-24">
        <ClientLogosSection />
      </section>

      {/* <section id="ProductsSection" className="scroll-mt-24">
        <ProductsSection />
      </section> */}
      <section id="StatisticsSection" className="scroll-mt-24">
        <StatisticsSection />
      </section>
      
      <section id="BlogSection" className="scroll-mt-24">
        <BlogSection />
      </section>

      

      <section id="AnimatedStats" className="scroll-mt-24">
        <AnimatedStats />
      </section>

      <section id="FAQSection" className="scroll-mt-24">
        <FAQSection />
      </section>

      

      <section id="LocationsSection" className="scroll-mt-24">
        <LocationsSection />
      </section>

      <section id="ContactSection" className="scroll-mt-24">
        <ContactSection />
      </section>

      <section id="Footer" className="scroll-mt-24">
        <Footer />
      </section>
    </div>
  );
}
