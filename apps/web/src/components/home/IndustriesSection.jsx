import { motion } from "framer-motion";
import {
  ShoppingBag,
  Building2,
  Sparkles,
  Sofa,
  Gem,
  Globe2,
  ArrowUpRight,
} from "lucide-react";
import { industries } from "@/data/homeData";
import { FONT_FAMILIES } from "../shared/FontColors";
import { useNavigate } from "react-router-dom";

const { clash } = FONT_FAMILIES;

const iconMap = {
  shopping: ShoppingBag,
  building: Building2,
  sparkles: Sparkles,
  sofa: Sofa,
  gem: Gem,
  globe: Globe2,
};

export default function IndustriesSection() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/work') // or navigate(`/reel/${id}`)
  }
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container">

        {/* Heading */}
        <div className="max-w-3xl mb-8 md:mb-10">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-500 font-semibold">
            Industries
          </p>

          <h2
            className="font-extrabold leading-[1.08] mt-3 md:mt-4"
            style={{ ...clash, fontSize: "clamp(1.6rem,2.8vw,2.6rem)", letterSpacing: "-0.02em" }}
          >
            Industries
            <br />
            We Empower.
          </h2>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 leading-7 md:leading-8">
            Every industry has unique challenges.
            Our AI-powered creative workflows help brands
            produce premium content faster and scale marketing
            without compromising quality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon];

            return (
              <motion.div
                key={industry.title}
                onClick={handleClick}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200 bg-white p-5 md:p-8 transition-all duration-300 hover:shadow-xl md:hover:shadow-2xl cursor-pointer"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/0 via-lime-400/0 to-transparent opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-lime-400/10 cursor-pointer" />

                {/* Icon - smaller on mobile */}
                <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-lime-400">
                  <Icon size={22} className="md:size-[30px] text-black" />
                </div>

                {/* Title - smaller on mobile */}
                <h3 className="mt-5 md:mt-8 text-lg md:text-2xl font-bold">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="mt-3 md:mt-4 text-sm md:text-base leading-6 md:leading-8 text-slate-600">
                  {industry.description}
                </p>

                {/* Bottom */}
                <div className="mt-6 md:mt-10 flex items-center justify-between">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-slate-400">
                    Learn More
                  </span>

                  <motion.div whileHover={{ x: 5, y: -5 }}>
                    <ArrowUpRight size={20} className="md:size-6 text-slate-900" />
                  </motion.div>
                </div>

                {/* Bottom Border Animation */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-1 bg-lime-400"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}