import { motion } from "framer-motion";

export default function BrandGraphic() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-50 to-white">

      {/* Background Grid */}

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        width="100%"
        height="100%"
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
              fill="none"
              stroke="#64748b"
              strokeWidth=".8"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2
        h-[420px] w-[420px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-lime-300/30 blur-[90px]"
      />

      {/* Brand Book */}

      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-10 top-16"
      >
        <div className="w-46 rounded-[24px] border border-slate-200 bg-white p-5 shadow-xl">
          <p className="text-xs tracking-[0.35em] uppercase text-slate-400">
            Brand Book
          </p>

          <div className="mt-6 h-12 w-12 rounded-xl bg-lime-400" />

          <div className="mt-5 h-2 rounded bg-slate-200" />
          <div className="mt-3 h-2 w-28 rounded bg-slate-100" />
          <div className="mt-3 h-2 w-20 rounded bg-slate-100" />
        </div>
      </motion.div>

      {/* Main Logo */}

      <motion.div
        animate={{
          y: [0, -14, 0],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-[52%]
        -translate-x-1/2 -translate-y-1/2"
      >
        <svg width="300" height="280">

          <defs>

            <linearGradient id="logoFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C7FF43"/>
              <stop offset="100%" stopColor="#84cc16"/>
            </linearGradient>

          </defs>

          {/* Construction Circle */}

          <circle
            cx="150"
            cy="150"
            r="110"
            fill="none"
            stroke="#dbe4ee"
            strokeDasharray="8 8"
          />

          {/* Outer Square */}

          <rect
            x="70"
            y="70"
            width="160"
            height="140"
            rx="26"
            fill="white"
            stroke="#e2e8f0"
            strokeWidth="2"
          />

          {/* Brand Mark */}

          <polygon
            points="150,90 205,120 205,180 150,210 95,180 95,120"
            fill="url(#logoFill)"
          />

          {/* Inner Cut */}

          <polygon
            points="150,118 182,136 182,165 150,183 118,165 118,136"
            fill="white"
          />

          {/* Guides */}

          <line
            x1="150"
            y1="40"
            x2="150"
            y2="260"
            stroke="#e2e8f0"
          />

          <line
            x1="40"
            y1="150"
            x2="260"
            y2="150"
            stroke="#e2e8f0"
          />

        </svg>
      </motion.div>

      {/* Color Palette */}

      <motion.div
        animate={{
          y: [0, 8, 0],
          rotate: [2, -2, 2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute right-8 top-20"
      >
        <div className="w-56 rounded-[24px] border border-slate-200 bg-white p-6 shadow-xl">

          <p className="text-xs tracking-[0.35em] uppercase text-slate-400">
            Palette
          </p>

          <div className="mt-6 flex gap-4">

            <div className="h-12 w-12 rounded-full bg-lime-400" />

            <div className="h-12 w-12 rounded-full bg-slate-900" />

            <div className="h-12 w-12 rounded-full bg-slate-200" />

          </div>

          <div className="mt-6 h-2 rounded bg-slate-200" />

        </div>
      </motion.div>

      {/* Typography */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute right-16 bottom-24"
      >
        <div className="rounded-[22px] border border-slate-200 bg-white px-8 py-6 shadow-xl">

          <h2 className="text-5xl font-black text-slate-900">
            Aa
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Clash Display
          </p>

        </div>
      </motion.div>

      {/* Floating Color Chips */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-20 bottom-28 flex gap-4"
      >
        <div className="h-14 w-14 rounded-full bg-lime-400 shadow-xl" />
        <div className="h-14 w-14 rounded-full bg-slate-900 shadow-xl" />
        <div className="h-14 w-14 rounded-full bg-white border shadow-xl" />
      </motion.div>

    </div>
  );
}