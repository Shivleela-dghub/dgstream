import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/brand-growth/Hero";
import GrowthPartner from "@/components/brand-growth/GrowthPartner";
import GrowthStack from "@/components/brand-growth/GrowthStack";
import Capabilities from "@/components/brand-growth/Capabilities";
import ChoosePlan from "@/components/brand-growth/ChoosePlan";
import CTA from "@/components/brand-growth/CTA";

export default function BrandGrowth(){
    return (
        <>
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