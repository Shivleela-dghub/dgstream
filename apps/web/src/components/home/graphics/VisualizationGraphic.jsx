import { motion } from "framer-motion";
import Bottle from "@/components/home/graphics/Bottle";
import FloatingMaterial from "./FloatingMaterial";

export default function VisualizationGraphic() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-[40px]">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white" />

      {/* Lime Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.3, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px]
        -translate-x-1/2 -translate-y-1/2 rounded-full
        bg-lime-300 blur-[120px]"
      />

      {/* Top Glow */}

      <div
        className="absolute left-1/2 top-0 h-[180px] w-[180px]
        -translate-x-1/2 rounded-full bg-lime-200 blur-[80px] opacity-60"
      />

      {/* Grid */}

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 900 620"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0H0V40"
              stroke="#CBD5E1"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>

        <rect
          width="900"
          height="620"
          fill="url(#grid)"
        />
      </svg>

      {/* Orbit Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-[42%]
        h-[360px] w-[360px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full border border-lime-300/60"
      />

      {/* Orbit Ring */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-[42%]
        h-[280px] w-[280px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full border border-slate-300"
      />

      {/* Orbit Dots */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-[42%]
        h-[360px] w-[360px]
        -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-lime-400 shadow-lg shadow-lime-300" />

        <div className="absolute bottom-0 left-12 h-3 w-3 rounded-full bg-slate-400" />
      </motion.div>

      {/* Platform Shadow */}

      <div
        className="absolute bottom-16 left-1/2
        h-8 w-[320px]
        -translate-x-1/2 rounded-full
        bg-black/10 blur-xl"
      />

     {/* Premium Product */}
    <Bottle />
    <FloatingMaterial />

    </div>
  );
}