import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/data/homeData";
import {
  Search,
  Sparkles,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { FONT_FAMILIES } from "../shared/FontColors";

const {clash} = FONT_FAMILIES;

const icons = [
  Search,
  Sparkles,
  Rocket,
  TrendingUp,
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setActiveStep((prev) => (prev + 1) % processSteps.length);
  }, 2000);

  return () => clearInterval(interval);
}, []);
const progress =
  (activeStep / (processSteps.length - 1)) * 100;
  return (
    <section className="bg-[#fafafa]">
      <div className="container">

        {/* Heading */}

        <div className="max-w-3xl mb-20">

          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-500 font-semibold">
            How We Work
          </p>

          <h2 className="font-extrabold leading-[1.08] mt-4 whitespace-nowrap" style={{ ...clash, fontSize: "clamp(1.8rem,2.8vw,2.6rem)", letterSpacing: "-0.02em" }}>
            Strategy first.
            <br />
            Creative second.
            <br />
            Results always.
          </h2>

        </div>

        {/* Timeline */}

        <div className="relative h-full">

          {/* Horizontal Line */}

<div className="absolute top-[40px] left-[80px] right-[80px] hidden lg:block">
    {/* Background Line */}
  <div className="h-[2px] w-full rounded-full bg-slate-200" />

  {/* Progress Line */}
  <motion.div
  animate={{
    width: `${progress}%`,
  }}
  transition={{
    duration: 0.8,
    ease: "easeInOut",
  }}
  className="absolute left-0 top-0 h-[2px] rounded-full bg-lime-400"
/>

</div>
          <div className="grid lg:grid-cols-4 gap-10">

            {processSteps.map((step, index) => {

              const Icon = icons[index];

              return (

                <motion.div
                  key={step.step}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="relative"
                >

                  {/* Circle */}

                 <motion.div
  animate={{
    scale: activeStep === index ? 1.12 : 1,
    boxShadow:
      activeStep === index
        ? "0 0 35px rgba(163,230,53,0.65)"
        : "0 8px 20px rgba(0,0,0,0.12)",
  }}
  transition={{
    duration: 0.45,
    ease: "easeInOut",
  }}
  className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-lime-400"
>
  {activeStep === index && (
  <motion.div
    initial={{
      scale: 1,
      opacity: 0.6,
    }}
    animate={{
      scale: 1.8,
      opacity: 0,
    }}
    transition={{
      duration: 1.2,
      repeat: Infinity,
      ease: "easeOut",
    }}
    className="absolute inset-0 rounded-full border-2 border-lime-400"
  />
)}
  <Icon
    size={30}
    className="text-black"
  />
</motion.div>

                  {/* Step */}

                  <motion.div
  animate={{
    y: activeStep === index ? -8 : 0,
    scale: activeStep === index ? 1.02 : 1,
  }}
  transition={{
    duration: 0.4,
    ease: "easeOut",
  }}
 className={`mt-6 h-[280px] rounded-3xl border p-6 transition-all duration-500 flex flex-col ${
    activeStep === index
      ? "border-lime-400 bg-white shadow-2xl"
      : "border-transparent bg-transparent"
  }`}
>

  <p
    className={`text-[0.62rem] uppercase tracking-[0.28em] font-semibold transition-colors duration-300 ${
      activeStep === index
        ? "text-lime-500"
        : "text-slate-400"
    }`}
  >
    {step.step}
  </p>

  <h3
    className={`mt-3 text-[1.12rem] font-bold transition-colors duration-300 ${
      activeStep === index
        ? "text-black"
        : "text-slate-500"
    }`}
  >
    {step.title}
  </h3>

  <p
    className={`mt-4 text-[0.86rem] leading-8 transition-colors duration-300 ${
      activeStep === index
        ? "text-slate-700"
        : "text-slate-500"
    }`}
  >
    {step.description}
  </p>

</motion.div>
                </motion.div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}