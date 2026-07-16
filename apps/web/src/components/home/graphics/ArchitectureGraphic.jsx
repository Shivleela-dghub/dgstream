import { motion } from "framer-motion";

export default function ArchitectureGraphic() {
  return (
    <div className="relative h-[620px] w-full overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-50 to-white">

      {/* Grid */}

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08]"
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
          opacity: [.25, .4, .25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2
        h-[420px] w-[420px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-lime-300/30 blur-[80px]"
      />

      {/* Blueprint */}

      <motion.div
        animate={{
          rotate: [-2, 2, -2],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-20 top-24"
      >
        <svg width="250" height="180">

          <rect
            width="250"
            height="180"
            rx="22"
            fill="white"
            stroke="#dbe4ee"
          />

          <rect
            x="25"
            y="30"
            width="180"
            height="100"
            fill="none"
            stroke="#84cc16"
            strokeWidth="2"
          />

          <line
            x1="25"
            y1="80"
            x2="205"
            y2="80"
            stroke="#94a3b8"
          />

          <line
            x1="115"
            y1="30"
            x2="115"
            y2="130"
            stroke="#94a3b8"
          />

          <circle
            cx="215"
            cy="150"
            r="10"
            fill="#C7FF43"
          />

        </svg>

      </motion.div>

      {/* Building */}

      <motion.div
        animate={{
          y: [0, -14, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-[52%]
        -translate-x-1/2 -translate-y-1/2"
      >
        <svg width="300" height="340">

          <polygon
            points="150,40 240,90 240,220 150,270 60,220 60,90"
            fill="#ffffff"
            stroke="#d7dee7"
            strokeWidth="2"
          />

          <line
            x1="150"
            y1="40"
            x2="150"
            y2="270"
            stroke="#e2e8f0"
          />

          <line
            x1="60"
            y1="90"
            x2="150"
            y2="140"
            stroke="#e2e8f0"
          />

          <line
            x1="240"
            y1="90"
            x2="150"
            y2="140"
            stroke="#e2e8f0"
          />

          {[0,1,2].map(i=>(
            <rect
              key={i}
              x={105}
              y={110+i*36}
              width="18"
              height="18"
              rx="4"
              fill="#C7FF43"
            />
          ))}

        </svg>

      </motion.div>

      {/* Scale */}

      <motion.div
        animate={{
          rotate:[1,-1,1],
          y:[0,8,0]
        }}
        transition={{
          duration:5,
          repeat:Infinity
        }}
        className="absolute right-14 top-20"
      >
        <svg width="190" height="70">

          <rect
            width="190"
            height="70"
            rx="18"
            fill="white"
            stroke="#e2e8f0"
          />

          <text
            x="20"
            y="28"
            fontSize="12"
            fill="#64748b"
          >
            SCALE
          </text>

          <line
            x1="20"
            y1="48"
            x2="165"
            y2="48"
            stroke="#94a3b8"
            strokeDasharray="4 4"
          />

          <circle
            cx="120"
            cy="48"
            r="5"
            fill="#84cc16"
          />

        </svg>

      </motion.div>

      {/* Chrome Sphere */}

      <motion.div
        animate={{
          y:[0,-16,0]
        }}
        transition={{
          duration:4,
          repeat:Infinity
        }}
        className="absolute bottom-28 right-28
        h-16 w-16 rounded-full
        bg-gradient-to-br
        from-white
        via-slate-300
        to-slate-500
        shadow-2xl"
      />

      {/* Glass Cube */}

      <motion.div
        animate={{
          rotate:[0,18,0],
          y:[0,-8,0]
        }}
        transition={{
          duration:6,
          repeat:Infinity
        }}
        className="absolute left-24 bottom-24
        h-16 w-16
        rounded-xl
        border
        border-white
        bg-white/40
        backdrop-blur-xl
        shadow-xl"
      />

    </div>
  );
}