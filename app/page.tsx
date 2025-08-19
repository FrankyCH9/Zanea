"use client";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import InnovationSection from "@/components/innovation-section";
import ExperienceSection from "@/components/experience-section";
import TestimonialSection from "@/components/testimonial-section";
import ClientLogosSection from "@/components/client-logos-section";
import ProductsSection from "@/components/products-section";
import StatisticsSection from "@/components/statistics-section";
import FAQSection from "@/components/faq-section";
import BlogSection from "@/components/blog-section";
import LocationsSection from "@/components/locations-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function PlastigesaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <InnovationSection />
      <ExperienceSection />
      <TestimonialSection />
      <ClientLogosSection />
      <ProductsSection />
      <StatisticsSection />
      <FAQSection />
      <BlogSection />
      <LocationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
