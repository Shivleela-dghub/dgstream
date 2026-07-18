import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroServiceGrid from "./HeroServiceGrid";
import { BtnLime, BtnOutline } from "../shared/Button";
import { COLORS,FONT_FAMILIES } from "../shared/FontColors";

const { mono} = FONT_FAMILIES;

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
    <div className="max-w-[1140px] mx-auto px-6 md:px-16 py-20 pb-[4rem]">
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


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}

            <motion.div
              variants={fadeUp}
              className="mb-6 flex items-center gap-3"
            >
              <div>
                  <div className="flex items-center gap-[0.65rem] mb-6 text-[0.65rem] tracking-[0.14em] uppercase" style={{ ...mono, color: COLORS.muted }}>
                    <span className="block w-[3px] h-[14px] uppercase" style={{ background: COLORS.lime }} />
                      AI Visual Growth Studio
                    </div>
              </div>


            </motion.div>

            {/* Heading */}
            <h1 className="text-[64px] leading-[0.95] font-black tracking-tight text-slate-950">
                            We grow <br /> brands through <br /> 
                            <span className="relative inline-block mb-2">
                              better                             
                            </span>
                            creative
            </h1>

              

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 220 }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                }}
                className="h-1 bg-lime-400"
              />

          

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
              className="mt-5 flex flex-wrap gap-8"
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
                  <Link to="/work">

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
  );
}   
