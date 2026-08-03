import { useEffect, useState } from "react";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { BtnLime, BtnOutline } from "../shared/Button";
import { SvgAICreative, Svg3DViz, SvgArchViz, SvgBranding } from "./showcase/ShowcaseIcons";
import { Link } from "react-router-dom";

const { mono, clash } = FONT_FAMILIES;

export default function Hero() {
  return (
    <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20 pb-10 md:pb-12 lg:pb-[4rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
        <div>
          <div
            className="mt-8 md:mt-8 lg:mt-10 flex items-center gap-[0.65rem] mb-4 md:mb-6 text-[0.6rem] md:text-[0.65rem] tracking-[0.14em] uppercase"
            style={{ ...mono, color: COLORS.muted }}
          >
            <span
              className="block w-[3px] h-[14px] uppercase"
              style={{ background: COLORS.lime }}
            />
            Product Designs — Capabilities
          </div>

          {/* Heading */}
          <h1 className="mt-6 md:mt-8 lg:mt-10 text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] leading-[1.05] lg:leading-[0.95] font-black tracking-tight text-slate-950">
            What we{" "}
            <span className="relative inline-block mb-2">
              build
              <span className="absolute left-0 -bottom-1 md:-bottom-2 h-1 w-full bg-lime-400" />
            </span>
            <br />
            for your brand.
          </h1>

          <p
            className="mt-6 md:mt-8 lg:mt-10 text-base md:text-lg leading-7 md:leading-8 text-slate-600"
            style={{ color: COLORS.muted }}
          >
            Six creative disciplines — AI visuals, 3D product experiences,
            architectural renders, digital products, growth marketing, and
            branding — built to help brands compete in the US and European
            markets.
          </p>

          <div className="flex gap-3 md:gap-[0.85rem] items-center flex-wrap mt-6 md:mt-8 lg:mt-10">
            <BtnLime
              onClick={() =>
                document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Capabilities
            </BtnLime>
            <Link to="/contact">
              <BtnOutline>Start a Project</BtnOutline>
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
              What We Produce — 5 Service Areas
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-[10px]">
              <div
                className="border bg-white overflow-hidden"
                style={{ aspectRatio: "16/10", borderColor: COLORS.border }}
              >
                <SvgAICreative />
              </div>
              <div
                className="border bg-white overflow-hidden"
                style={{ aspectRatio: "16/10", borderColor: COLORS.border }}
              >
                <Svg3DViz />
              </div>
              <div
                className="border bg-white overflow-hidden"
                style={{ aspectRatio: "16/10", borderColor: COLORS.border }}
              >
                <SvgArchViz />
              </div>
              <div
                className="border bg-white overflow-hidden"
                style={{ aspectRatio: "16/10", borderColor: COLORS.border }}
              >
                <SvgBranding />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}