import {motion} from "framer-motion";

export default function FloatingMaterial() {
    return (
        <>
        {/*floating left card*/}
       
        {/*floating right card*/}
        <motion.div
            animate={{
                y: [0, 8, 0],
                rotate: [2, -2, 2],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="absolute right-8 top-20 w-52 rounded-[24px]
            border border-slate-200 bg-white/80
            backdrop-blur-xl p-5 shadow-xl"
            >
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                Render
            </p>

            <div className="mt-5 space-y-4">

                <div className="flex items-center justify-between">

                <span className="text-sm text-slate-600">
                    Quality
                </span>

                <span className="font-semibold">
                    4K
                </span>

                </div>

                <div className="flex items-center justify-between">

                <span className="text-sm text-slate-600">
                    HDR
                </span>

                <span className="text-lime-500">
                    Enabled
                </span>

                </div>

                <div className="flex items-center justify-between">

                <span className="text-sm text-slate-600">
                    AI
                </span>

                <span className="text-lime-500">
                    Active
                </span>

                </div>

            </div>
        </motion.div>
        {/*floating sphere*/}
        <motion.div
            animate={{
                y: [0, -18, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
            }}
            className="absolute right-28 bottom-36 h-16 w-16 rounded-full
            bg-gradient-to-br from-white via-slate-300 to-slate-500 shadow-2xl"
        />
        {/*floating glass cube*/}
        <motion.div
            animate={{
                rotate: [0, 20, 0],
                y: [0, -12, 0],
            }}
            transition={{
                duration: 7,
                repeat: Infinity,
            }}
            className="absolute left-20 bottom-32 h-14 w-14
            rounded-xl border border-white
            bg-white/40 backdrop-blur-xl shadow-xl"
        />
        {/*light beam*/}

        <motion.div
            animate={{
                opacity: [.15,.4,.15],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
            }}
            className="absolute left-1/2 top-24
            h-[420px] w-[220px]
            -translate-x-1/2
            bg-gradient-to-b
            from-lime-300/30
            to-transparent
            blur-3xl"
        />
        </>
    )
}
