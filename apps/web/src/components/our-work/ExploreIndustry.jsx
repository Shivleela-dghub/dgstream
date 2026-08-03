import { INDUSTRIES } from "@/data/industryReels";
import { Eyebrow } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { useState, useRef } from "react";
import { ReelCard } from "./ReelCard";

const { mono, clash } = FONT_FAMILIES;

export default function ExploreIndustry() {
    const [activeIndustry, setActiveIndustry] = useState(0);

    return (
        <div className="py-10 md:py-14 lg:py-16" id="industries">
            <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 lg:items-end mb-8 md:mb-10 lg:mb-14">
                    <div>
                        <Eyebrow>Explore by industry</Eyebrow>
                        <h2
                            className="font-extrabold leading-[1.15] md:leading-[1.08] mt-3 md:mt-4"
                            style={{ ...clash, fontSize: "clamp(1.6rem,5vw,2.6rem)", letterSpacing: "-0.02em" }}
                        >
                            Six industries
                            <br />
                            one system.
                        </h2>
                    </div>
                    <p
                        className="mt-0 lg:mt-10 text-base md:text-lg leading-7 md:leading-8 text-slate-600"
                        style={{ color: COLORS.muted }}
                    >
                        Pick a vertical to load its reel. Every card opens the full
                        cut-drop your own MP4s in to make this your live archive.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-0 mt-8 md:mt-12 lg:mt-16 border border-gray-200">
                    {/* SIDEBAR — horizontal scroll strip on mobile, vertical list on desktop */}
                    <div className="border-b lg:border-b-0 lg:border-r border-gray-200 flex lg:block overflow-x-auto lg:overflow-visible">
                        {INDUSTRIES.map((industry, index) => (
                            <button
                                key={industry.id}
                                onClick={() => setActiveIndustry(index)}
                                className={`relative flex-shrink-0 w-[180px] lg:w-full border-r lg:border-r-0 lg:border-b border-[#E5E5E5] px-4 md:px-5 py-4 md:py-5 text-left transition-all duration-300 ${activeIndustry === index ? "bg-white" : "bg-[#F8F8F6] hover:bg-gray-100"
                                    }`}
                            >
                                {/* Left/top accent */}
                                <span
                                    className={`absolute left-0 top-0 lg:h-full h-[3px] w-full lg:w-[3px] transition-all duration-300 ${activeIndustry === index ? "bg-lime-400" : "bg-transparent"
                                        }`}
                                />

                                <h3 className="mt-2 text-[0.95rem] md:text-[1.05rem] font-bold leading-none" style={clash}>
                                    {industry.title}
                                </h3>
                                <p
                                    className="mt-2 text-[0.58rem] md:text-[0.6rem] uppercase tracking-[0.18em] md:tracking-[0.22em]"
                                    style={{ ...mono, color: "#6B7280" }}
                                >
                                    {industry.reels.length} Reels
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="px-4 md:px-5">
                        {/* Header */}
                        <div className="mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-8 lg:mb-12 flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                            <h2 className="text-[1.15rem] md:text-[1.4rem] font-bold leading-none" style={clash}>
                                {INDUSTRIES[activeIndustry].title}
                            </h2>

                            <p
                                className="sm:max-w-[280px] sm:text-right text-sm leading-6 md:leading-7"
                                style={{ color: COLORS.muted }}
                            >
                                {INDUSTRIES[activeIndustry].subtitle}
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 justify-start gap-4 md:gap-6 lg:gap-8 pb-6 md:pb-8">
                            {INDUSTRIES[activeIndustry].reels.map((reel) => (
                                <ReelCard key={reel.title} reel={reel} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}