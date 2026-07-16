import { useEffect, useState } from "react";
import {COLORS,FONT_FAMILIES} from "../shared/FontColors";
import {BtnLime, BtnOutline} from "../shared/Button";
import {SvgAICreative, Svg3DViz, SvgArchViz, SvgBranding} from "./showcase/ShowcaseIcons";

const { mono, clash } = FONT_FAMILIES;

export default function Hero() {
  return (
     <div className="border-b" style={{ borderColor: COLORS.border }}>
        <div className="max-w-[1140px] mx-auto px-6 md:px-16 py-[5rem] pb-[4rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-end">
            <div>
              <div className="flex items-center gap-[0.65rem] mb-6 text-[0.65rem] tracking-[0.14em] uppercase" style={{ ...mono, color: COLORS.muted }}>
                <span className="block w-[3px] h-[14px] uppercase" style={{ background: COLORS.lime }} />
                Product Designs — Capabilities
              </div>
             {/* Heading */}
              <h1 className="mt-10 text-[64px] leading-[0.95] font-black tracking-tight text-slate-950">
                  What we{" "}
                  <span className="relative inline-block mb-2">
                  build
                  <span className="absolute left-0 -bottom-2 h-1 w-full bg-lime-400" />
                  </span>
                  <br />
                  for your brand.
              </h1>
              <p className="mt-10 text-lg leading-8 text-slate-600" style={{ color: COLORS.muted }}>
                Six creative disciplines — AI visuals, 3D product experiences, architectural renders, digital products, growth marketing, and branding — built to help brands compete in the US and European markets.
              </p>
              <div className="flex gap-[0.85rem] items-center flex-wrap mt-10">
                <BtnLime>Explore Capabilities</BtnLime>
                <BtnOutline>Start Project</BtnOutline>
              </div>
            </div>

            <div className="border p-8" style={{ background: COLORS.surface, borderColor: COLORS.border }}>
              <div className="text-[0.58rem] tracking-[0.12em] uppercase mb-4" style={{ ...mono, color: COLORS.muted }}>
                What We Produce — 5 Service Areas
              </div>
              <div className="grid grid-cols-2 gap-[10px]">
                <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                  <SvgAICreative />
                </div>
                <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                  <Svg3DViz />
                </div>
                <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                  <SvgArchViz />
                </div>
                <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                  <SvgBranding />
                </div>
              </div>
              <div
                className="mt-4 inline-block text-[0.58rem] tracking-[0.1em] uppercase px-[0.7rem] py-[0.35rem]"
                style={{ ...mono, background: COLORS.black, color: COLORS.white }}
              >
                6 Categories
              </div>
              <div className="grid grid-cols-3 border-t mt-6 pt-6" style={{ borderColor: COLORS.border }}>
                {[
                  ["48+", "Projects live"],
                  ["12", "Industries"],
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
  );
}