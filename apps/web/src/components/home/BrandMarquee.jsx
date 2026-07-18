import { motion } from "framer-motion";
import { brands } from "@/data/homeData";


export default function BrandMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white py-10">

      <div className="container mb-10">

        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-700">
          Trusted by Leading Brands
        </p>

      </div>

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

      <motion.div
        className="flex gap-20"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {[...brands, ...brands].map((logo, index) => (
          <div
            key={index}
            className="flex h-14 w-40 flex-shrink-0 items-center justify-center"
          >
            <div
  key={index}
  className="flex h-14 w-40 flex-shrink-0 items-center justify-center"
>
  <span className="text-2xl font-bold tracking-wide text-slate-400 transition-all duration-300 hover:scale-110 hover:text-slate-900">
    {logo}
  </span>
</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}