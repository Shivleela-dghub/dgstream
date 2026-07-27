import React from 'react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import SEO from '@/components/SEO';
import HeroSection from "@/components/home/HeroSection";
import ProcessSection from "@/components/home/ProcessSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTASection from "@/components/home/CTASection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import BrandMarquee from '@/components/shared/BrandMarquee';

function HomePage() {
 
  return (
    <>
      <SEO
        title="AI Visual Growth Studio | DG Stream"
        description="DG Stream, the AI Visual Growth Studio of Streamys Pvt. Ltd., helps businesses accelerate growth through AI-powered creativity, custom software development, intelligent automation, digital experiences, branding, and performance marketing"
        canonical="https://dgstream.in/" 
      />
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