import { motion } from "framer-motion";

export default function MarketingGraphic() {
  return (
    <div className="relative h-[620px] w-full overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-50 to-white">

      {/* Background Grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="marketing-grid"
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

        <rect width="100%" height="100%" fill="url(#marketing-grid)" />
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

      {/* Dashboard Card */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-[50%]
        -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-[360px] rounded-[30px] border border-slate-200 bg-white p-8 shadow-2xl">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Campaign Growth
              </p>

              <h3 className="mt-2 text-4xl font-black text-slate-900">
                +248%
              </h3>
            </div>

            <div className="rounded-full bg-lime-100 px-4 py-2 text-sm font-semibold text-lime-700">
              ↑ 24%
            </div>
          </div>

          {/* Animated Chart */}

          <svg
            width="300"
            height="160"
            className="mt-8"
          >

            <polyline
              fill="none"
              stroke="#dbe4ee"
              strokeWidth="2"
              points="
              10,140
              60,120
              110,118
              160,90
              210,70
              260,50
              "
            />

            <motion.polyline
              fill="none"
              stroke="#84cc16"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 2,
              }}
              points="
              10,140
              60,120
              110,118
              160,90
              210,70
              260,50
              "
            />

            {[10,60,110,160,210,260].map((x,i)=>{

              const y=[140,120,118,90,70,50][i];

              return(
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="6"
                  fill="#C7FF43"
                  animate={{
                    scale:[1,1.35,1]
                  }}
                  transition={{
                    duration:2,
                    repeat:Infinity,
                    delay:i*.2
                  }}
                />
              )

            })}

          </svg>

        </div>
      </motion.div>

      {/* KPI Card */}

      <motion.div
        animate={{
          rotate:[-2,2,-2],
          y:[0,-8,0]
        }}
        transition={{
          duration:6,
          repeat:Infinity
        }}
        className="absolute left-10 top-20"
      >
        <div className="w-52 rounded-[22px] border border-slate-200 bg-white p-6 shadow-xl">

          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Leads
          </p>

          <h3 className="mt-4 text-4xl font-black text-slate-900">
            18.4K
          </h3>

          <p className="mt-2 text-lime-600 font-semibold">
            +32%
          </p>

        </div>

      </motion.div>

      {/* Conversion Funnel */}

      <motion.div
        animate={{
          rotate:[2,-2,2],
          y:[0,8,0]
        }}
        transition={{
          duration:5,
          repeat:Infinity
        }}
        className="absolute right-8 top-20"
      >
        <div className="w-52 rounded-[22px] border border-slate-200 bg-white p-6 shadow-xl">

          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Funnel
          </p>

          <div className="mt-6 space-y-3">

            <div className="h-3 rounded bg-lime-400 w-full"/>

            <div className="h-3 rounded bg-lime-300 w-4/5"/>

            <div className="h-3 rounded bg-lime-200 w-3/5"/>

            <div className="h-3 rounded bg-lime-100 w-2/5"/>

          </div>

        </div>

      </motion.div>

      {/* Floating Metric */}

      <motion.div
        animate={{
          y:[0,-15,0]
        }}
        transition={{
          duration:4,
          repeat:Infinity
        }}
        className="absolute left-20 bottom-20 rounded-full bg-white border border-slate-200 px-8 py-5 shadow-xl"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
          ROAS
        </p>

        <h4 className="mt-2 text-3xl font-black text-slate-900">
          6.8×
        </h4>

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
        className="absolute right-24 bottom-28 h-16 w-16 rounded-full
        bg-gradient-to-br
        from-white
        via-slate-300
        to-slate-500
        shadow-2xl"
      />

    </div>
  );
}