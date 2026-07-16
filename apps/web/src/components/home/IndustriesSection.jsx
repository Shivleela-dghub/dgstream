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

const iconMap = {
  shopping: ShoppingBag,
  building: Building2,
  sparkles: Sparkles,
  sofa: Sofa,
  gem: Gem,
  globe: Globe2,
};

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">

        {/* Heading */}

        <div className="max-w-3xl mb-16">

          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 font-semibold">
            Industries
          </p>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black leading-tight">
            Industries
            <br />
            We Empower.
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Every industry has unique challenges.
            Our AI-powered creative workflows help brands
            produce premium content faster and scale marketing
            without compromising quality.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry, index) => {

            const Icon = iconMap[industry.icon];

            return (

              <motion.div
                key={industry.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-2xl"
              >

                {/* Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/0 via-lime-400/0 to-transparent opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-lime-400/10" />

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400">

                  <Icon
                    size={30}
                    className="text-black"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold">

                  {industry.title}

                </h3>

                {/* Description */}

                <p className="mt-4 leading-8 text-slate-600">

                  {industry.description}

                </p>

                {/* Bottom */}

                <div className="mt-10 flex items-center justify-between">

                  <span className="text-xs uppercase tracking-[0.25em] text-slate-400">

                    Learn More

                  </span>

                  <motion.div
                    whileHover={{
                      x: 5,
                      y: -5,
                    }}
                  >

                    <ArrowUpRight
                      size={24}
                      className="text-slate-900"
                    />

                  </motion.div>

                </div>

                {/* Bottom Border Animation */}

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileHover={{
                    width: "100%",
                  }}
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