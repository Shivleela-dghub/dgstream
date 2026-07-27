import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/brand-growth/Hero";
import GrowthPartner from "@/components/brand-growth/GrowthPartner";
import GrowthStack from "@/components/brand-growth/GrowthStack";
import Capabilities from "@/components/brand-growth/Capabilities";
import ChoosePlan from "@/components/brand-growth/ChoosePlan";
import CTA from "@/components/brand-growth/CTA";
import SEO from "@/components/SEO";

export default function BrandGrowth(){
    return (
        <>
        <SEO
            title="Brand Growth | DG Stream"
            description="DG Stream helps businesses accelerate brand growth through strategic branding, AI-powered marketing, SEO, performance advertising, social media marketing, content strategy, website optimization, AI automation, and growth analytics. We develop data-driven strategies that increase visibility, generate qualified leads, improve customer engagement, and create sustainable business growth for brands across diverse industries."
            canonical="https://dgstream.in/" 
        />
        <Header />
        <Hero />
        <GrowthPartner />
        <GrowthStack />
        <Capabilities />
        <ChoosePlan />
        <CTA />
        <Footer />
        </>
        
    )
}