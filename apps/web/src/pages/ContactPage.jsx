import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import SEO from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContactPage(){
    return(
        <>
        <SEO
            title="Contact | DG Stream"
            description="Connect with DG Stream, your trusted AI Visual Growth Studio, to discuss branding, website design, custom software development, AI solutions, intelligent automation, 3D visualization, digital marketing, and business growth strategies. Our team collaborates with startups, enterprises, and growing brands to create innovative digital experiences and deliver measurable business results through creativity, technology, and AI-powered solutions."
            canonical="https://dgstream.in/contact" 
        />
        <Header />
        <WhatsAppButton />
        <Hero />
        <ContactForm />
        <Footer />
        </>
    )
}