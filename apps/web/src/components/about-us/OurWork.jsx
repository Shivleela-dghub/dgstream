import { useEffect, useState } from "react";
import { Eyebrow } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { PRINCIPLES } from "@/data/aboutUsPrinciples";
const { clash, mono } = FONT_FAMILIES;

export default function OurWork() {
    const [activeCard, setActiveCard] = useState(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    return (
        <div className="py-14 sm:py-20 lg:py-24 border-t border-[#E2E2DC]">
            <div className="max-w-[1140px] mx-auto px-6 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:items-end mb-10 lg:mb-14">
                    <div>
                        <Eyebrow>How We Work</Eyebrow>

                        <h2
                            className="mt-6 leading-[0.95]"
                            style={{
                                ...clash,
                                fontSize: "clamp(2.5rem,7vw,4.6rem)",
                                letterSpacing: "-0.04em",
                            }}
                        >
                            The principles behind
                            <br />
                            every project.
                        </h2>
                    </div>

                    <p
                        className="mt-0 lg:mt-20 text-base sm:text-lg leading-[1.7rem] sm:leading-[1.8rem] max-w-[560px]"
                        style={{ color: COLORS.muted }}
                    >
                        Four things we don't compromise on, regardless of budget,
                        timeline, or industry.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 lg:mt-20 border-t border-l border-[#E2E2DC]">
                    {PRINCIPLES.map((item, index) => (
                        <div
                            key={item.id}
                            onMouseEnter={() => {
                                setActiveCard(index);
                            }}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();

                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;

                                setMouse({ x, y });
                            }}

                            className={`
                                relative
                                min-h-[220px]
                                sm:min-h-[260px]
                                lg:min-h-[280px]
                                px-6
                                sm:px-8
                                lg:px-10
                                py-10
                                lg:py-12
                                border-r
                                border-b
                                border-[#E2E2DC]
                                transition-all
                                duration-500
                                `}
                        >
                            {/*cursor glow*/}
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
                            {/*left lime border*/}
                            <span
                                className={`absolute left-0 top-0 h-full w-[2px] transition-all duration-300 ${activeCard === index
                                        ? "bg-[#C8FF00]"
                                        : "bg-transparent"
                                    }`}
                            />

                            <p
                                className="relative z-1 text-xs tracking-[0.25em] uppercase"
                                style={{
                                    ...mono,
                                    color: COLORS.lime,
                                }}
                            >
                                {item.id}
                            </p>
                            <h3
                                className="relative z-1 mt-5 text-[1.08rem] font-black"
                                style={clash}
                            >
                                {item.title}
                            </h3>
                            <p
                                className="relative z-1 mt-5 text-sm leading-[1.65rem]"
                                style={{ color: COLORS.muted }}
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}