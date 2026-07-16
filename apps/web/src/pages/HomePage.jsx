import React from 'react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import SEO from '@/components/SEO';
import HeroSection from "@/components/home/HeroSection";
import ProcessSection from "@/components/home/ProcessSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTASection from "@/components/home/CTASection";
import BrandMarquee from "@/components/home/BrandMarquee";
import ExpertiseSection from "@/components/home/ExpertiseSection";

function HomePage() {
 
  return (
    <>
      <SEO
        title="Healthcare & Retail Digital Marketing Agency | DG Stream"
        description="DG Stream is a growth-focused digital marketing agency in Bangalore specialising in healthcare and retail. We help brands acquire customers, build trust and grow revenue."
        keywords="healthcare digital marketing agency India, retail digital marketing agency, medical marketing agency Bangalore, DG Stream"
        canonical="https://dgstream.in/" />

      <Header />
      <WhatsAppButton />

      <main className="pt-20">
     
        <HeroSection />
        <BrandMarquee />

        {/* WHAT WE DO SECTION */}
        <ExpertiseSection />

        {/* HOW WE WORK SECTION */}
        <ProcessSection />

        {/* INDUSTRIES + MARKETS SECTION */}
        <IndustriesSection />

        {/* READY TO GROW SECTION */}
        <CTASection />
        
      </main>

      <Footer />
    </>
  );
}

export default HomePage;