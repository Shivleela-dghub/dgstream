import { motion } from "framer-motion";

export default function Bottle() {
  return (
    <motion.div
      animate={{
        y: [0, -14, 0],
        rotate: [-1.5, 1.5, -1.5],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width="360" height="400" viewBox="0 0 280 420">

        <defs>

          {/* Bottle Glass */}

          <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity=".98"/>
            <stop offset="35%" stopColor="#f8fafc"/>
            <stop offset="100%" stopColor="#e5e7eb"/>
          </linearGradient>

          {/* Inner Glow */}

          <linearGradient id="liquid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D9FF75"/>
            <stop offset="100%" stopColor="#A3E635"/>
          </linearGradient>

          {/* Cap */}

          <linearGradient id="cap" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#374151"/>
            <stop offset="100%" stopColor="#111827"/>
          </linearGradient>

          {/* Reflection */}

          <linearGradient id="reflection" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity=".9"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </linearGradient>

          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="35"
              stdDeviation="22"
              floodOpacity=".18"
            />
          </filter>

        </defs>

        {/* Shadow */}

        <ellipse
          cx="140"
          cy="370"
          rx="58"
          ry="16"
          fill="#000"
          opacity=".08"
        />

        <g filter="url(#shadow)">

          {/* Cap */}

          <rect
            x="105"
            y="20"
            width="70"
            height="40"
            rx="12"
            fill="url(#cap)"
          />

          {/* Neck */}

          <rect
            x="118"
            y="55"
            width="44"
            height="38"
            rx="10"
            fill="#F8FAFC"
          />

          {/* Bottle */}

          <rect
            x="75"
            y="82"
            width="130"
            height="220"
            rx="38"
            fill="url(#glass)"
          />

          {/* Glass Border */}

          <rect
            x="75"
            y="82"
            width="130"
            height="220"
            rx="38"
            fill="none"
            stroke="#ffffff"
            strokeOpacity=".9"
            strokeWidth="2"
          />

          {/* Liquid */}

          <rect
            x="95"
            y="165"
            width="90"
            height="105"
            rx="22"
            fill="url(#liquid)"
          />

          {/* Label */}

          <rect
            x="100"
            y="150"
            width="80"
            height="48"
            rx="16"
            fill="#C7FF43"
          />

          <text
            x="140"
            y="175"
            fontSize="12"
            fontWeight="700"
            fill="#111827"
            textAnchor="middle"
          >
            DGSTREAM
          </text>

          <text
            x="140"
            y="192"
            fontSize="7"
            fill="#475569"
            textAnchor="middle"
          >
            3D VISUAL
          </text>

          {/* Reflection */}

          <rect
            x="92"
            y="105"
            width="12"
            height="150"
            rx="10"
            fill="url(#reflection)"
          />

          <rect
            x="170"
            y="115"
            width="5"
            height="110"
            rx="6"
            fill="white"
            opacity=".25"
          />

        </g>

        {/* Glow */}

        <motion.circle
          animate={{
            scale: [1, 1.08, 1],
            opacity: [.08,.18,.08],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          cx="140"
          cy="190"
          r="120"
          fill="#C7FF43"
        />

      </svg>
    </motion.div>
  );
}