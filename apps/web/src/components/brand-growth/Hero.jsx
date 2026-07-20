import {COLORS,FONT_FAMILIES} from "../shared/FontColors";
import {BtnLime, BtnOutline} from "../shared/Button";
import { BarchartIcon, ConversionRateIcon, FunnelstageIcon, GraphIcon } from "./showcase/HeroIcons";
import { Link } from "react-router-dom";
const { mono, clash } = FONT_FAMILIES;

export default function Hero() {
    return (
            <div className="max-w-[1140px] mx-auto px-6 md:px-16 py-[5rem] pb-[4rem]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <div className="mt-10 flex items-center gap-[0.65rem] mb-6 text-[0.65rem] tracking-[0.14em] uppercase" style={{ ...mono, color: COLORS.muted }}>
                            <span className="block w-[3px] h-[14px] uppercase" style={{ background: COLORS.lime }} />
                            Brand Growth
                        </div>
                         {/* Heading */}
                        <h1 className="mt-10 text-[64px] leading-[0.95] font-black tracking-tight text-slate-950">
                            Creative that 
                            <br />
                            <span className="relative inline-block mb-2">
                               performs.
                            </span>
                              Strategy that
                            <br />scales.
                        </h1>
                        <p className="mt-10 text-lg leading-8 text-slate-600" style={{ color: COLORS.muted }}>
                           Most agencies separate creative and performance. We don't. Every campaign we build starts with a creative hypothesis — and ends with a measurable outcome.
                        </p>
                        <div className="flex gap-[0.85rem] uppercase items-center flex-wrap mt-5">
                            <BtnLime>Book a growth call</BtnLime>
                            <Link to="/work"><BtnOutline>See case studies</BtnOutline></Link>
                        </div>
                    </div>
                    <div className="relative">
                    <div className="mt-10 border p-8" style={{ background: COLORS.surface, borderColor: COLORS.border }}>
                    <div className="text-[0.58rem] tracking-[0.12em] uppercase mb-4" style={{ ...mono, color: COLORS.muted }}>
                        The Growth Stack — At a Glance
                    </div>
                    <div className="grid grid-cols-2 gap-[10px]">
                        <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                            <GraphIcon />
                        </div>
                        <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                            <ConversionRateIcon />
                        </div>
                        <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                            <BarchartIcon />
                        </div>
                        <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                            <FunnelstageIcon />
                        </div>
                    </div>
                     {/* <div
                className="mt-4 inline-block text-[0.58rem] tracking-[0.1em] uppercase px-[0.7rem] py-[0.35rem]"
                style={{ ...mono, background: COLORS.black, color: COLORS.white }}
              >
                6 channels,one team
                    </div>
              <div className="grid grid-cols-3 border-t mt-6 pt-6" style={{ borderColor: COLORS.border }}>
                {[
                  ["6", "Growth Channels"],
                  ["6", "Core Services"],
                  ["3", "plan tiers"],
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
              </div> */}
                </div>
                </div>
                </div>
                
            </div>
    )
}