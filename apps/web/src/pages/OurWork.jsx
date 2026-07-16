import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/our-work/Hero";
import ClientsMarquee from "@/components/our-work/Marquee";
import ExploreIndustry from "@/components/our-work/ExploreIndustry";
import CaseStudies from "@/components/our-work/CaseStudies";
import CTA from "@/components/our-work/CTA";

export default function OurWork(){
    return(
        <>
        <Header />
        <Hero />
        <ClientsMarquee />
        <ExploreIndustry />
        <CaseStudies />
        <CTA />
        <Footer />
        </>
    )
}