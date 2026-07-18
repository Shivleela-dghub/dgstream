import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { expertise } from "@/data/homeData";
import VisualizationGraphic from "@/components/home/graphics/VisualizationGraphic";
import ArchitectureGraphic from "@/components/home/graphics/ArchitectureGraphic";
import BrandGraphic from "@/components/home/graphics/BrandGraphic";
import MarketingGraphic from "@/components/home/graphics/MarketingGraphic";
import { FONT_FAMILIES } from "../shared/FontColors";

const { clash} = FONT_FAMILIES;

const graphicMap = {
  1: <VisualizationGraphic />,
  2: <ArchitectureGraphic />,
  3:<BrandGraphic />,
  4:<MarketingGraphic />
 };

export default function ExpertiseSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="py-20 bg-white">
      <div className="container">

        {/* Heading */}

        <div className="max-w-3xl mb-10">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-500 font-semibold">
            What We Create
          </p>

           <h2 className="font-extrabold leading-[1.08] mt-4 whitespace-nowrap" style={{ ...clash, fontSize: "clamp(1.8rem,2.8vw,2.6rem)", letterSpacing: "-0.02em" }}>
            Creative solutions for ambitious brands.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From immersive visual experiences to strategic brand systems, we
            craft work that helps businesses stand out and grow.
          </p>
        </div>

        {/* Accordion */}

        {/* Content */}

    <div className="flex flex-col lg:flex-row gap-16">

        {/* Left Side */}
            <div className="w-full lg:w-[45%]">

                {expertise.map((item) => (
                    <motion.div
                    layout
                    key={item.id}
                    onMouseEnter={() => setActive(item.id)}
                    className="cursor-pointer border-b border-slate-200 py-8"
                    >
                    <div className="flex item-start gap-5">

                        {/* Number */}

                    <motion.div
        animate={{
            scale: active === item.id ? 1.2 : 1,
        }}
        transition={{
            duration: 0.3,
            ease: "easeOut",
        }}
        className="mt-2 flex h-5 w-5 items-center justify-center flex-shrink-0"
        >
        <div
            className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors duration-300 ${
            active === item.id
                ? "border-lime-400"
                : "border-slate-300"
            }`}
        >
            <motion.div
            animate={{
                scale: active === item.id ? 1 : 0.5,
            }}
            transition={{
                duration: 0.3,
            }}
            className={`h-2 w-2 rounded-full ${
                active === item.id
                ? "bg-lime-400"
                : "bg-slate-300"
            }`}
            />
        </div>
        </motion.div>

                        {/* Content */}

                        <div className="flex-1">

                        <motion.h3
                            layout
                            className={`text-[1.1rem] font-bold transition-colors duration-300 ${
                            active === item.id
                                ? "text-black"
                                : "text-slate-500"
                            }`}
                        >
                            {item.title}
                        </motion.h3>

                        <AnimatePresence>

                            {active === item.id && (

                            <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: .35 }}
                                className="overflow-hidden"
                            >

                                {item.services.map((service) => (

                                <motion.li
                                    key={service}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: .25 }}
                                    className="mt-4 flex items-center gap-3 text-slate-600"
                                >

                                    <span className="h-2 w-2 rounded-full bg-lime-400" />

                                    {service}

                                </motion.li>

                                ))}

                            </motion.ul>

                            )}

                        </AnimatePresence>

                        </div>

                    </div>

                    </motion.div>

                ))}
            </div>
        
       {/* Right Side */}
<div className="hidden lg:flex lg:w-[42%] sticky top-28 justify-center items-start">
  <div className="relative w-full h-[520px] overflow-hidden">

    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, x: 40, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -40, scale: 0.96 }}
        transition={{ duration: 0.45 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {graphicMap[active]}
      </motion.div>
    </AnimatePresence>

  </div>
</div>
    </div>
    </div>
    </section>
  );
}