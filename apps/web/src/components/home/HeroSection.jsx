import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroServiceGrid from "./HeroServiceGrid";
import { ArrowRight } from "lucide-react";
import { BtnLime, BtnOutline } from "../shared/Button";

export default function HeroSection() {
    const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* Background Blobs */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
  animate={{
    x: [0, 60, 0],
    y: [0, -30, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-lime-300/20 blur-3xl"
/>

<motion.div
  animate={{
    x: [0, -50, 0],
    y: [0, 40, 0],
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-slate-300/20 blur-3xl"
/>
      </div>

      <div className="container py-24 lg:py-32">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

            <motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="max-w-xl"
>
                {/* Eyebrow */}

                <motion.div
  variants={fadeUp}
  className="mb-6 flex items-center gap-3"
>

                <span className="h-5 w-1 bg-lime-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-700">
                    AI Visual Growth Studio
                </span>

                </motion.div>

                {/* Heading */}

               <div className="space-y-1">

  {[
    "We grow",
    "brands through",
    "better creative",
  ].map((line) => (
    <motion.h1
      key={line}
      variants={fadeLeft}
      className="text-5xl font-black leading-none tracking-tight text-slate-950 lg:text-7xl"
    >
      {line}
    </motion.h1>
  ))}

  <motion.div
    initial={{ width: 0 }}
    animate={{ width: 220 }}
    transition={{
      delay: 0.7,
      duration: 0.8,
    }}
    className="mt-4 h-1 bg-lime-400"
  />

</div>

                {/* Description */}

                <motion.p
  variants={fadeUp} className="mt-10 text-lg leading-8 text-slate-600">

                AI-powered visuals, 3D product experiences and
                performance-driven growth strategies built for brands
                competing in the US and European markets.

                </motion.p>

                {/* Buttons */}

                <motion.div
  variants={fadeUp}
  className="mt-10 flex flex-wrap gap-8"
>
<motion.div
  animate={{ x: [0, 4, 0] }}
  transition={{
    duration: 1.2,
    repeat: Infinity,
  }}
>
<BtnLime className="whitespace-nowrap">
  <Link to="/contact">
    Start a Project
  </Link>
</BtnLime>
</motion.div>
<motion.div
  whileHover={{
    y: -3,
    scale: 1.03,
  }}
  whileTap={{
    scale: 0.97,
  }}
>
                <BtnOutline className="border-var(--black) text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                    <Link to="/healthcare">

                    View Our Work

                    </Link>
                </BtnOutline>
                </motion.div>

                </motion.div>
            </motion.div>

          {/* RIGHT */}

          <HeroServiceGrid />

        </div>

      </div>

    </section>
  );
}   
