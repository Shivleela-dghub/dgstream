import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/our-work/Hero";
import ExploreIndustry from "@/components/our-work/ExploreIndustry";
import CaseStudies from "@/components/our-work/CaseStudies";
import CTA from "@/components/our-work/CTA";
import BrandMarquee from "@/components/shared/BrandMarquee";
import SEO from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function OurWork(){
    return(
        <>
        <SEO
            title="Work | DG Stream"
            description="Explore DG Stream's portfolio of creative, technology, and growth-driven projects across healthcare, retail, consumer brands, technology, manufacturing, hospitality, and enterprise sectors. Our work showcases expertise in branding, website development, custom software, AI solutions, 3D visualization, digital marketing, and visual storytelling that deliver measurable business impact and exceptional customer experiences."
            canonical="https://dgstream.in/work" 
        />
        <Header />
        <WhatsAppButton />
        {/* <Hero /> */}
        <BrandMarquee />
        <ExploreIndustry />
        {/* <CaseStudies /> */}
        <CTA />
        <Footer />
        </>
    )
}