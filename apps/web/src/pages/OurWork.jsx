import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/our-work/Hero";
import ExploreIndustry from "@/components/our-work/ExploreIndustry";
import CaseStudies from "@/components/our-work/CaseStudies";
import CTA from "@/components/our-work/CTA";
import BrandMarquee from "@/components/shared/BrandMarquee";

export default function OurWork(){
    return(
        <>
        <Header />
        <Hero />
        <BrandMarquee />
        <ExploreIndustry />
        {/* <CaseStudies /> */}
        <CTA />
        <Footer />
        </>
    )
}