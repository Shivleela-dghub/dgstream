import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { BtnLime, BtnOutline } from "../shared/Button";
import { BarchartIcon, ConversionRateIcon, FunnelstageIcon, GraphIcon } from "./showcase/HeroIcons";
import { Link } from "react-router-dom";
const { mono } = FONT_FAMILIES;

export default function Hero() {
    return (
        <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-[5rem] pb-10 md:pb-12 lg:pb-[4rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
                <div>
                    <div
                        className="mt-6 md:mt-8 lg:mt-10 flex items-center gap-[0.65rem] mb-4 md:mb-6 text-[0.6rem] md:text-[0.65rem] tracking-[0.14em] uppercase"
                        style={{ ...mono, color: COLORS.muted }}
                    >
                        <span
                            className="block w-[3px] h-[14px] uppercase"
                            style={{ background: COLORS.lime }}
                        />
                        Brand Growth
                    </div>

                    {/* Heading */}
                    <h1 className="mt-6 md:mt-8 lg:mt-10 text-[34px] sm:text-[42px] md:text-[50px] lg:text-[64px] leading-[1.08] lg:leading-[0.95] font-black tracking-tight text-slate-950">
                        Creative that
                        <br />
                        <span className="relative inline-block mb-2">performs.</span>
                        Strategy that
                        <br />
                        scales.
                    </h1>

                    <p
                        className="mt-6 md:mt-8 lg:mt-10 text-base md:text-lg leading-7 md:leading-8 text-slate-600"
                        style={{ color: COLORS.muted }}
                    >
                        Most agencies separate creative and performance. We don't. Every
                        campaign we build starts with a creative hypothesis — and ends
                        with a measurable outcome.
                    </p>

                    <div className="flex gap-3 md:gap-[0.85rem] uppercase items-center flex-wrap mt-5">
                        <Link to="/contact">
                            <BtnLime>Book a growth call</BtnLime>
                        </Link>
                        <Link to="/contact">
                            <BtnOutline>Start a project</BtnOutline>
                        </Link>
                    </div>
                </div>

                <div className="relative">
                    <div
                        className="mt-8 lg:mt-10 border p-5 md:p-6 lg:p-8"
                        style={{ background: COLORS.surface, borderColor: COLORS.border }}
                    >
                        <div
                            className="text-[0.55rem] md:text-[0.58rem] tracking-[0.1em] md:tracking-[0.12em] uppercase mb-3 md:mb-4"
                            style={{ ...mono, color: COLORS.muted }}
                        >
                            The Growth Stack — At a Glance
                        </div>

                        <div className="grid grid-cols-2 gap-2 md:gap-[10px]">
                            <div
                                className="border bg-white overflow-hidden"
                                style={{ aspectRatio: "16/10", borderColor: COLORS.border }}
                            >
                                <GraphIcon />
                            </div>
                            <div
                                className="border bg-white overflow-hidden"
                                style={{ aspectRatio: "16/10", borderColor: COLORS.border }}
                            >
                                <ConversionRateIcon />
                            </div>
                            <div
                                className="border bg-white overflow-hidden"
                                style={{ aspectRatio: "16/10", borderColor: COLORS.border }}
                            >
                                <BarchartIcon />
                            </div>
                            <div
                                className="border bg-white overflow-hidden"
                                style={{ aspectRatio: "16/10", borderColor: COLORS.border }}
                            >
                                <FunnelstageIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}