import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroServiceGrid from "./HeroServiceGrid";
import { BtnLime, BtnOutline } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";

const { mono } = FONT_FAMILIES;

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

  return (
    <div className="relative max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20 pb-10 md:pb-12 lg:pb-[4rem]">
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
          className="absolute -left-24 top-0 h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full bg-lime-300/20 blur-3xl"
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
          className="absolute right-0 bottom-0 h-64 w-64 md:h-80 md:w-80 lg:h-[420px] lg:w-[420px] rounded-full bg-slate-300/20 blur-3xl"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
        {/* LEFT */}

        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow */}

          <motion.div variants={fadeUp} className="mb-4 md:mb-6 flex items-center gap-3">
            <div>
              <div
                className="flex items-center gap-[0.65rem] mb-4 md:mb-6 text-[0.6rem] md:text-[0.65rem] tracking-[0.14em] uppercase"
                style={{ ...mono, color: COLORS.muted }}
              >
                <span
                  className="block w-[3px] h-[14px] uppercase"
                  style={{ background: COLORS.lime }}
                />
                AI Visual Growth Studio
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] leading-[1.05] lg:leading-[0.95] font-black tracking-tight text-slate-950">
            We grow <br /> brands through <br />
            <span className="relative inline-block mb-2">better</span>
            creative
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 220 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
            }}
            className="h-1 bg-lime-400 max-w-[180px] md:max-w-[220px]"
          />

          {/* Description */}

          <motion.p
            variants={fadeUp}
            className="mt-6 md:mt-8 lg:mt-10 text-base md:text-lg leading-7 md:leading-8 text-slate-600"
          >
            AI-powered visuals, 3D product experiences and
            performance-driven growth strategies built for brands
            competing in the US and European markets.
          </motion.p>

          {/* Buttons */}

          <motion.div
            variants={fadeUp}
            className="mt-6 md:mt-5 flex flex-wrap gap-4 md:gap-8"
          >
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
            >
              <BtnLime className="whitespace-nowrap">
                <Link to="/contact">Start a Project</Link>
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
                <Link to="/work">View Our Work</Link>
              </BtnOutline>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT */}

        <HeroServiceGrid />
      </div>
    </div>
  );
}