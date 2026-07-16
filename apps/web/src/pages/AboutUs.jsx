import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/about-us/Hero";
import OurStory from "@/components/about-us/Ourstory";
import OurWork from "@/components/about-us/OurWork";
import OurApproach from "@/components/about-us/OurApproach";
import OurPeople from "@/components/about-us/OurPeople";
import CTA from "@/components/about-us/CTA";

export default function AboutUs(){
    return (
        <>
        <Header />
        <Hero />
        <OurStory/>
        <OurWork />
        <OurApproach />
        <OurPeople />
        <CTA />
        <Footer />
        </>
    )
}