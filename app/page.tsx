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
      <div className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
        <section id="nosotros" className="scroll-mt-24">
          <StatisticsSection />
        </section>

        
      </div>
      <section>
          <ClientLogosSection />
        </section>
    </div>
  );
}
