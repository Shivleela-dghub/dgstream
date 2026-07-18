import {COLORS,FONT_FAMILIES} from "../shared/FontColors";
import {BtnLime, BtnOutline} from "../shared/Button";
import { ReelIcon,IndustryGridIcon,ResultsTrackedIcon,BrandwiseArchiveIcon} from "./showcase/HeroIcons";
import { Link } from "react-router-dom";
const { mono, clash } = FONT_FAMILIES;

export default function Hero() {
    return (
        <div className="border-b" style={{ borderColor: COLORS.border }}>
            <div className="max-w-[1140px] mx-auto px-6 md:px-16 py-[5rem] pb-[4rem]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <div className="mt-10 flex items-center gap-[0.65rem] mb-6 text-[0.65rem] tracking-[0.14em] uppercase" style={{ ...mono, color: COLORS.muted }}>
                            <span className="block w-[3px] h-[14px] uppercase" style={{ background: COLORS.lime }} />
                            Our Work — Live Reel Archive
                        </div>
                         {/* Heading */}
                        <h1 className="mt-10 text-[64px] leading-[0.95] font-black tracking-tight text-slate-950">
                            Campaigns that, 
                            <br />
                            <span className="relative inline-block mb-2">
                                convert<span className="absolute left-0 -bottom-2 h-1 w-full bg-lime-400"/>
                                </span>
                              ,not just 
                            <br />impress.
                        </h1>
                        <p className="mt-10 text-lg leading-8 text-slate-600" style={{ color: COLORS.muted }}>
                            A running archive of the brand films, product visuals, and campaigns we've shipped — organized by industry, backed by the numbers each one moved.
                        </p>
                        <div className="flex gap-[0.85rem] uppercase items-center flex-wrap mt-10">
                            <Link to="/home"><BtnLime>Browse Industries</BtnLime></Link>
                            <Link to="/contact"><BtnOutline>Start  a Project</BtnOutline></Link>
                        </div>
                    </div>
                    <div className="relative">
                    <div className="mt-10 border p-8" style={{ background: COLORS.surface, borderColor: COLORS.border }}>
                        <div className="text-[0.58rem] tracking-[0.12em] uppercase mb-4" style={{ ...mono, color: COLORS.muted }}>
                            What's Inside — Live Archive
                        </div>
                        <div className="grid grid-cols-2 gap-[10px]">
                            <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                                <ReelIcon />
                            </div>
                            <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                                <IndustryGridIcon />
                            </div>
                            <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                                <ResultsTrackedIcon />
                            </div>
                            <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                                <BrandwiseArchiveIcon />
                            </div>
                        </div>
                        <div
                            className="mt-2 inline-block text-[0.58rem] tracking-[0.1em] uppercase px-[0.7rem] py-[0.35rem]"
                            style={{ ...mono, background: COLORS.black, color: COLORS.white }}
                        >
                            38 case studies logged
                        </div>
                        <div className="grid grid-cols-3 border-t mt-2 pt-2" style={{ borderColor: COLORS.border }}>
                        {[
                        ["6", "Industries"],
                        ["90+", "Reels Shipped"],
                        ["4 wk", "Avg. delivery"],
                        ].map(([num, label]) => (
                        <div key={label}>
                            <span className="block text-[1.6rem] font-extrabold" style={{ ...clash, color: COLORS.black }}>
                            {num}
                            </span>
                            <span className="block text-[0.58rem] tracking-[0.1em] uppercase mt-1" style={{ ...mono, color: COLORS.muted }}>
                            {label}
                            </span>
                        </div>
                        ))}
                    </div>
                </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}