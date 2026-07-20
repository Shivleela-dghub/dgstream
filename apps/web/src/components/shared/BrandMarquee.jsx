import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Eyebrow } from "./Button";

export default function BrandMarquee() {
  const controls = useAnimation() // <-- MOVED IT HERE

  const logos = [
    { name: "advenzone", src: "/logos/advenzone.jpg" },
    { name: "boycott", src: "/logos/boycott.jpg" },
    { name: "dirtydogs", src: "/logos/dirtydogs.jpg" },
    { name: "gunmetal", src: "/logos/gun_metal.jpg" },
    { name: "imed academy", src: "/logos/imed.jpg" },
    { name: "shine-a-kids", src: "/logos/shine_kids.jpg" },
  ]

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, ease: "linear", duration: 5 }
    })
  }, [controls])

  return (
    <section className="relative overflow-hidden bg-white py-10">
      <div className="container mb-10">
        <div className="max-w-[1140px] mx-auto px-6 md:px-16">
          <Eyebrow>Trusted by Leading Brands</Eyebrow>
        </div>
        
      </div>

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

      <motion.div
        className="flex gap-10"
        animate={controls}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => controls.start({
          x: ["0%", "-50%"],
          transition: { repeat: Infinity, ease: "linear", duration: 5 }
        })}
      >
        {[...logos,...logos].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`} // better key
            className="flex h-14 w-40 flex-shrink-0 items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-200"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}