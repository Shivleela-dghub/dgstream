import { motion } from "framer-motion";
import {
  Bot,
  Box,
  Building2,
  Monitor,
  TrendingUp,
  Palette,
  Sparkles,
  Rocket,
  Play,
} from "lucide-react";
import { useMotionValue, useSpring} from "framer-motion";

const cards = [
  { icon: Bot, title: "AI", bg: "bg-lime-400", text: "text-black" },
  { icon: Box, title: "3D", bg: "bg-black", text: "text-white" },
  { icon: Building2, title: "Architecture", bg: "bg-white", text: "text-black" },
  { icon: Monitor, title: "Digital", bg: "bg-white", text: "text-black" },
  { icon: Sparkles, title: "Creative", bg: "bg-black", text: "text-white" },
  { icon: TrendingUp, title: "Growth", bg: "bg-lime-400", text: "text-black" },
  { icon: Palette, title: "Brand", bg: "bg-black", text: "text-white" },
  { icon: Rocket, title: "Launch", bg: "bg-white", text: "text-black" },
  { icon: Play, title: "Video", bg: "bg-black", text: "text-white" },
];

export default function HeroServiceGrid() {
    const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const x = useSpring(mouseX, {
  stiffness: 120,
  damping: 20,
});

const y = useSpring(mouseY, {
  stiffness: 120,
  damping: 20,
});

const handleMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  mouseX.set((e.clientX - centerX) / 25);
  mouseY.set((e.clientY - centerY) / 25);
};

const handleLeave = () => {
  mouseX.set(0);
  mouseY.set(0);
};
  return (
    <div className="relative">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
  <div className="h-72 w-72 rounded-full bg-lime-300/20 blur-[120px]" />
</div>
         <motion.div
  style={{
    x,
    y,
  }}
  onMouseMove={handleMove}
  onMouseLeave={handleLeave}
  className="grid grid-cols-3 gap-5"
>
      {cards.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              scale: 0.6,
              rotate: -10,
            }}
            animate={{
              y: [0, -5, 0],
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              delay: index * 0.25,
  duration: 3 + index * 0.3,
  repeat: Infinity,
  repeatType: "mirror",
            }}
            whileHover={{
              scale: 1.08,
              y: -10,
              rotate: 2,
            }}
            className={`
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              ${item.bg}
              aspect-square
              flex
              flex-col
              items-center
              justify-center
              shadow-sm
              transition-all
              duration-300
              hover:shadow-2xl
              cursor-pointer
            `}
          >
            {/* Glow */}

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-br from-lime-300/30 via-transparent to-white/10"
            />

            {/* Animated Ring */}

            <motion.div
              initial={{ scale: 0 }}
              whileHover={{
                scale: 2,
              }}
              transition={{
                duration: 0.5,
              }}
              className="absolute h-10 w-10 rounded-full border border-white/30"
            />

            {/* Icon */}

            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: 8,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Icon
                size={34}
                className={`${item.text} relative z-10`}
              />
            </motion.div>

            {/* Label */}

            <span
              className={`mt-4 text-[11px] uppercase tracking-[0.22em] font-semibold ${item.text}`}
            >
              {item.title}
            </span>

            {/* Bottom Accent */}

            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              className="absolute bottom-0 left-0 h-1 bg-lime-400"
            />
          </motion.div>
        );
      })}
    </motion.div>
    </div>
   
  );
}