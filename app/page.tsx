"use client";
import HeroSection from "@/components/hero-section";
import StatisticsSection from "@/components/statistics-section";
import ClientLogosSection from "@/components/client-logos-section";


export default function PlastigesaPage() {
  return (
    <div className="min-h-screen bg-white">
      <section id="HeroSection" className="scroll-mt-24">
        <HeroSection />
      </section>
      <section id="nosotros" className="scroll-mt-24">
        <StatisticsSection />
      </section>
      <section>
        <ClientLogosSection/>
      </section>
    </div>
  );
}
