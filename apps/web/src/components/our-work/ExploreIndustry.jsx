import { INDUSTRIES } from "@/data/industryReels";
import { Eyebrow } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { useState } from "react";

const { mono, clash } = FONT_FAMILIES;


export default function ExploreIndustry(){
    const [activeIndustry, setActiveIndustry] = useState(0);
    return (
        <div className="py-10" id="industries">
            <div className="max-w-[1140px] mx-auto px-6 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-end mb-14">
                    <div>
                        <Eyebrow>Explore by industry</Eyebrow>
                        <h2 className="font-extrabold leading-[1.08] mt-4" style={{ ...clash, fontSize: "clamp(1.8rem,2.8vw,2.6rem)", letterSpacing: "-0.02em" }}>
                            Six industries
                            <br />
                            one system.
                        </h2>
                    </div>
                    <p className="mt-10 text-lg leading-8 text-slate-600" style={{ color: COLORS.muted }}>
                        Pick a vertical to load its reel. Every card opens the full cut-drop your own MP4s in to make this your live archive.
                    </p>
                </div>
                <div className="grid grid-cols-[320px_minmax(0,1fr)] gap-0 mt-16 border border-gray-200">

                    {/* LEFT SIDEBAR */}
                    <div className="border-r border-gray-200">

                        {INDUSTRIES.map((industry, index) => (
                        <button
                            key={industry.id}
                            onClick={() => setActiveIndustry(index)}
                            className={`relative w-full border-b border-[#E5E5E5] px-5 py-5 text-left transition-all duration-300 ${
                                activeIndustry === index
                                ? "bg-white"
                                : "bg-[#F8F8F6] hover:bg-gray-100"
                            }`}
                        >
                            {/* Left accent */}
                                <span
                                    className={`absolute left-0 top-0 h-full w-[3px] transition-all duration-300 ${
                                    activeIndustry === index
                                        ? "bg-lime-400"
                                        : "bg-transparent"
                                    }`}
                                />
                                <p
                                    className="text-[0.62rem] uppercase tracking-[0.22em]"
                                    style={{ ...mono, color: "#6B7280" }}
                                >
                                    {String(index + 1).padStart(2, "0")} / 06
                                </p>
                                <h3
                                    className="mt-2 text-[1.05rem] font-bold leading-none"
                                    style={clash}
                                >
                                    {industry.title}
                                </h3>
                                <p
                                    className="mt-2 text-[0.6rem] uppercase tracking-[0.22em]"
                                    style={{ ...mono, color: "#6B7280" }}
                                >
                                    {industry.reels.length} Reels
                                </p>
                        </button>
                        ))}
                    </div>

                  {/* RIGHT PANEL */}
                    <div className="px-5">

                    {/* Header */}
                    <div className="mt-10 mb-12 flex items-start justify-between">
                        <h2
                        className="text-[1.4rem] font-bold leading-none"
                        style={clash}
                        >
                        {INDUSTRIES[activeIndustry].title}
                        </h2>

                        <p
                        className="max-w-[280px] text-right text-sm leading-7"
                        style={{ color: COLORS.muted }}
                        >
                        {INDUSTRIES[activeIndustry].subtitle}
                        </p>
                    </div>

                    {/* Cards */}
                    <div
                    className="grid justify-start gap-8"
                    style={{
                        gridTemplateColumns: "repeat(2, 320px)",
                    }}
                    >
                        {INDUSTRIES[activeIndustry].reels.map((reel) => (
                        <div
                            key={reel.title}
                            className="group w-[300px] cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#111]">

                            <img
                                src={reel.thumbnail}
                                alt={reel.title}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div
                                className="absolute top-2 left-2 inline-flex items-center justify-center px-2 py-[3px]"
                                style={{
                                    background: COLORS.lime,
                                    ...mono,
                                }}
                            >
                                <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-black">
                                    Add MP4
                                </span>
                            </div>

                            <button
                                className="
                                absolute
                                left-1/2
                                top-1/2
                                h-16
                                w-16
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                bg-lime-400
                                text-xl
                                text-black
                                "
                            >
                                ▶
                            </button>

                            </div>

                            <div className="mt-5 flex items-center justify-between">

                            <h4
                                className="text-lg font-semibold"
                                style={clash}
                            >
                                {reel.title}
                            </h4>

                            <span className="text-sm text-gray-500">
                                {reel.duration}
                            </span>

                            </div>
                        </div>
                        ))}

                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}