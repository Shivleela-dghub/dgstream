import { useState } from "react";
import { Eyebrow, BtnLime, BtnOutline } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { CAPABILITIES } from "@/data/brandGrowthCapabilities";
import CardCorners from "../shared/CardCorners";

const { mono, clash } = FONT_FAMILIES;

export default function Capabilities() {
    const [activeCard, setActiveCard] = useState(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [cardMouse, setCardMouse] = useState({});
    const [particles, setParticles] = useState([]);

    const ICON_CENTER = { x: 24, y: 24 };

    const spawnParticles = (index) => {
        const id = Date.now();

        const newParticles = Array.from({ length: 6 }).map((_, i) => ({
            id: `${id}-${i}`,
            index,
            angle: (Math.PI * 2 * i) / 6,
            distance: 28 + Math.random() * 12,
        }));

        setParticles((prev) => [...prev, ...newParticles]);

        setTimeout(() => {
            setParticles((prev) => prev.filter((p) => !String(p.id).startsWith(String(id))));
        }, 600);
    };

    return (
        <div className="py-10 md:py-14 lg:py-16">
            <style>{`
        @keyframes particleBurst {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)) scale(0); opacity: 0; }
        }
        @keyframes ringPulse {
          0% { transform: scale(0.7); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>

            <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] gap-6 md:gap-12 lg:gap-20 md:items-end">
                    <div>
                        <Eyebrow>What We Do</Eyebrow>
                        <h2
                            className="font-extrabold leading-[1.15] md:leading-[1.08] mt-3 md:mt-4"
                            style={{ ...clash, fontSize: "clamp(1.6rem,5vw,2.6rem)", letterSpacing: "-0.02em" }}
                        >
                            Everything your business needs. One trusted digital partner.
                        </h2>
                    </div>

                    <div className="flex md:justify-end items-end h-full">
                        <p
                            className="uppercase tracking-[0.18em] md:tracking-[0.22em] text-[0.7rem] md:text-xs"
                            style={{ ...mono, color: COLORS.muted }}
                        >
                            <span className="font-bold text-black">06</span>
                            <span className="mx-2">/</span>
                            <span>06</span>
                            <span className="ml-4 normal-case tracking-normal">Capabilities</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-0 md:border-l md:border-t border-[#E2E2DC] mt-8 md:mt-12 lg:mt-20">
                    {CAPABILITIES.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                onMouseEnter={() => {
                                    setActiveCard(index);
                                    spawnParticles(index);
                                }}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    setMouse({ x, y });

                                    const cx = rect.width / 2;
                                    const cy = rect.height / 2;

                                    setCardMouse((prev) => ({
                                        ...prev,
                                        [index]: {
                                            dx: (x - cx) / cx,
                                            dy: (y - cy) / cy,
                                        },
                                    }));
                                }}
                                onMouseLeave={() => {
                                    setActiveCard(null);
                                    setCardMouse((prev) => ({
                                        ...prev,
                                        [index]: { dx: 0, dy: 0 },
                                    }));
                                }}
                                className={`
                  group
                  relative
                  border border-[#E2E2DC] md:border-0 md:border-r md:border-b
                  border-t-2 border-t-[#C8FF00] md:border-t-2 md:border-t-[#C8FF00]
                  p-6 md:p-8 lg:p-10
                  min-h-[240px] md:min-h-[280px] lg:min-h-[320px]
                  flex
                  flex-col
                  transition-all
                  duration-500
                  hover:border-[#CFFF3B]
                `}
                            >
                                <CardCorners />
                                <div className="absolute top-3 right-3 md:top-4 md:right-4 overflow-hidden h-[4rem] md:h-[6rem]">
                                    <p
                                        className={`
                      text-[3.6rem] md:text-[5.2rem]
                      leading-none
                      font-bold
                      transition-transform duration-300
                      ${activeCard === index ? "-translate-y-1 text-[#0A0A0F]" : "translate-y-0 text-[#0A0A0F]"}
                    `}
                                        style={{ clash, opacity: 0.035 }}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </p>
                                </div>

                                {/* cursor glow */}
                                <div
                                    className="absolute pointer-events-none rounded-full blur-3xl z-0"
                                    style={{
                                        left: mouse.x,
                                        top: mouse.y,
                                        width: 180,
                                        height: 180,
                                        transform: "translate(-50%, -50%)",
                                        background: "#EEF7CF",
                                        opacity: activeCard === index ? 1 : 0,
                                    }}
                                />

                                {/* left lime border */}
                                <span
                                    className={`absolute left-0 top-0 h-full w-[2px] transition-all duration-300 ${activeCard === index ? "bg-[#C8FF00]" : "bg-transparent"
                                        }`}
                                />

                                <div className="relative z-10">
                                    <div className="relative mb-6 md:mb-8 lg:mb-10 w-fit">
                                        {/* Glow */}
                                        <div
                                            className={`
                        absolute inset-0 rounded-full blur-2xl transition-all duration-500
                        ${activeCard === index ? "bg-[#C8FF00] opacity-40 scale-[2]" : "opacity-0 scale-75"}
                      `}
                                        />

                                        {/* Rings */}
                                        {activeCard === index &&
                                            [0, 1, 2].map((i) => (
                                                <span
                                                    key={i}
                                                    className="absolute inset-0 rounded-full border pointer-events-none"
                                                    style={{
                                                        borderColor: "#C8FF00",
                                                        animation: "ringPulse 1.6s ease-out infinite",
                                                        animationDelay: `${i * 0.4}s`,
                                                    }}
                                                />
                                            ))}

                                        {/* Particle burst */}
                                        {particles
                                            .filter((p) => p.index === index)
                                            .map((p) => (
                                                <span
                                                    key={p.id}
                                                    className="absolute rounded-full pointer-events-none z-20"
                                                    style={{
                                                        left: ICON_CENTER.x,
                                                        top: ICON_CENTER.y,
                                                        width: 5,
                                                        height: 5,
                                                        background: "#C8FF00",
                                                        "--dx": `${Math.cos(p.angle) * p.distance}px`,
                                                        "--dy": `${Math.sin(p.angle) * p.distance}px`,
                                                        animation: "particleBurst 0.6s ease-out forwards",
                                                    }}
                                                />
                                            ))}

                                        {/* Icon */}
                                        <Icon
                                            className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 relative z-10"
                                            style={{
                                                color: "#C8FF00",
                                                transform: `translate(
                          ${(cardMouse[index]?.dx || 0) * 6}px,
                          ${(cardMouse[index]?.dy || 0) * 6}px
                        )`,
                                            }}
                                        />
                                    </div>

                                    <p
                                        className="text-[0.7rem] md:text-xs uppercase tracking-[0.18em] md:tracking-[0.22em]"
                                        style={{ ...mono, color: COLORS.muted }}
                                    >
                                        {item.category}
                                    </p>

                                    <h3
                                        className="mt-5 md:mt-6 lg:mt-8 text-lg md:text-xl leading-tight md:leading-none font-bold transition-colors duration-500"
                                        style={{ ...clash, color: COLORS.black }}
                                    >
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 md:mt-6 lg:mt-8 text-[0.82rem] md:text-sm leading-6" style={{ color: COLORS.muted }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}