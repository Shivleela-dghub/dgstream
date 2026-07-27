import { useState } from "react";
import Hero from "@/components/product-design/Hero";
import { PROJECTS } from "@/data/project";
import Header from "@/components/Header";
import Capabilities from "@/components/product-design/Capabilities";
import Process from "@/components/product-design/Process";
import CTA from "@/components/product-design/CTA";
import Footer from "@/components/Footer";
import Pricing from "@/components/product-design/Pricing";
import SEO from "@/components/SEO";

export default function ProductDesign() {
    const [selectedCategory, setSelectedCategory] = useState("all");
      const visibleProjects = PROJECTS.filter((p) => selectedCategory === "all" || p.cat === selectedCategory);
        const [openCap, setOpenCap] = useState(null);
        const [hoverCap, setHoverCap] = useState(null);


  return (
    <>
      <SEO
        title="Product Design | DG Stream"
        description="DG Stream transforms products into compelling visual experiences through AI-powered product design, 3D visualization, product rendering, creative branding, packaging design, product photography, motion graphics, and interactive digital experiences. Our design approach combines innovation, aesthetics, and technology to help brands showcase products that engage customers, build trust, and increase conversions across digital and retail channels."
        canonical="https://dgstream.in/product-design" 
      />
      <Header />
      <Hero />
      <Capabilities openCap={openCap} setOpenCap={setOpenCap} hoverCap={hoverCap} setHoverCap={setHoverCap} />
      <Process />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}