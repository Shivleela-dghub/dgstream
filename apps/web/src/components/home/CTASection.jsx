import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FONT_FAMILIES,COLORS} from "../shared/FontColors";
import { BtnLime, BtnOutline, Eyebrow } from "../shared/Button";

const {clash} = FONT_FAMILIES;
export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-10">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/20 blur-[140px]" />

      {/* Grid Pattern */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg,#fff 1px,transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Floating Circles */}

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-20 top-24 h-32 w-32 rounded-full bg-lime-400/10 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-20 bottom-20 h-40 w-40 rounded-full bg-white/5 blur-3xl"
      />

      <div className="container relative z-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-4xl text-center"
        >
                      <Eyebrow center>Let's Build Together</Eyebrow>
          
          <h2  className="font-extrabold leading-[1.08] mt-4 mb-4"
                        style={{ ...clash, fontSize: "clamp(1.8rem,3vw,2.8rem)", letterSpacing: "-0.02em", color: COLORS.black }}
          >
            Ready to create
            <br />
            something amazing?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Whether you're launching a new brand, visualizing your next product,
            or scaling with AI-powered content—we're here to make it happen.
          </p>
           <div className="mt-5 flex gap-[0.85rem] justify-center flex-wrap">
                        <Link to="/contact"><BtnLime>Book a strategy call</BtnLime></Link>
                        <Link to="/work"><BtnOutline>View Our Work</BtnOutline></Link>
                      </div>
        </motion.div>
      </div>
    </section>
  );
}