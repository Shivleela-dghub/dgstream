import { useState } from "react";
import Hero from "@/components/product-design/Hero";
import { PROJECTS } from "@/data/project";
import Header from "@/components/Header";
import Capabilities from "@/components/product-design/Capabilities";
import Process from "@/components/product-design/Process";
import CTA from "@/components/product-design/CTA";
import Footer from "@/components/Footer";
import Pricing from "@/components/product-design/Pricing";

export default function ProductDesign() {
    const [selectedCategory, setSelectedCategory] = useState("all");
      const visibleProjects = PROJECTS.filter((p) => selectedCategory === "all" || p.cat === selectedCategory);
        const [openCap, setOpenCap] = useState(null);
        const [hoverCap, setHoverCap] = useState(null);


  return (
    <>
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