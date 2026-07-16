import { BtnBlack,Eyebrow,BtnOutline} from "../shared/Button";
import { COLORS,FONT_FAMILIES} from "../shared/FontColors";
import { SvgCaseStudy } from "./showcase/ProjectSVG";

const { mono, clash } = FONT_FAMILIES;

export default function CaseStudy() {
    return (
        <div className="border-t border-b py-20" style={{ background: COLORS.surface, borderColor: COLORS.border }}>
        <div className="max-w-[1140px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <Eyebrow>Case Study — Forma Living</Eyebrow>
              <h2 className="font-extrabold leading-[1.1] mt-4 mb-6" style={{ ...clash, fontSize: "clamp(1.8rem,2.8vw,2.6rem)", letterSpacing: "-0.02em" }}>
                From no US presence to $2.4M first-month revenue — in 60 days.
              </h2>
              <p className="text-[0.92rem] font-light leading-[1.85] mb-4" style={{ color: COLORS.muted }}>
                Forma Living is a Scandinavian furniture brand with a strong European following and zero US market
                traction. They came to DG Stream four months before their planned US launch with one problem:{" "}
                <strong className="font-medium" style={{ color: COLORS.black }}>
                  no visual assets suited to American e-commerce standards.
                </strong>
              </p>
              <p className="text-[0.92rem] font-light leading-[1.85] mb-4" style={{ color: COLORS.muted }}>
                Traditional furniture photography was quoted at $180K and an 8-week lead time. We proposed something
                different — a full 3D visualization suite, AI-generated lifestyle scenes, and an interactive product
                configurator, all delivered in under four weeks for 30% of the traditional cost.
              </p>
              <p className="text-[0.92rem] font-light leading-[1.85] mb-4" style={{ color: COLORS.muted }}>
                The configurator alone reduced pre-purchase support tickets by 38%. The Meta and Google campaigns —
                built around the 3D assets — achieved a{" "}
                <strong className="font-medium" style={{ color: COLORS.black }}>
                  13.3× return on ad spend
                </strong>{" "}
                in the first month. The US launch sold out the initial inventory allocation in 60 days.
              </p>
              <div className="border-l-[3px] px-6 py-4 my-7 bg-white" style={{ borderColor: COLORS.lime }}>
                <p className="text-[1rem] font-semibold leading-[1.55] italic" style={{ color: COLORS.black }}>
                  "We expected DG Stream to save us money on production. We didn't expect them to fundamentally
                  change how we sell."
                </p>
                <cite className="block not-italic text-[0.62rem] tracking-[0.1em] uppercase mt-2" style={{ ...mono, color: COLORS.muted }}>
                  — Erik Lindström, CMO, Forma Living
                </cite>
              </div>
              <div className="flex gap-[0.85rem] flex-wrap mt-6">
                <BtnBlack>Read Full Case Study</BtnBlack>
                <BtnOutline>Start a Similar Project</BtnOutline>
              </div>
            </div>

            <div>
              <div
                className="relative overflow-hidden mb-6 flex items-center justify-center"
                style={{ background: COLORS.black, aspectRatio: "4/3" }}
              >
                <SvgCaseStudy />
                <div
                  className="absolute bottom-4 left-5 text-[0.58rem] tracking-[0.1em] uppercase"
                  style={{ ...mono, color: "rgba(255,255,255,0.35)" }}
                >
                  3D Lifestyle Render · Oslo Collection
                </div>
              </div>
              <div className="grid grid-cols-2 gap-px" style={{ background: COLORS.border }}>
                {[
                  ["$2.4M", "First-month revenue", true],
                  ["13.3×", "Return on ad spend", false],
                  ["27%", "Add-to-cart lift", false],
                  ["4 wks", "Total production time", false],
                ].map(([num, label, hl]) => (
                  <div key={label} className="bg-white text-center px-5 py-[1.35rem]">
                    <span className="block text-[2rem] font-extrabold leading-none" style={{ ...clash, color: hl ? COLORS.limeDark : COLORS.black }}>
                      {num}
                    </span>
                    <span className="block text-[0.58rem] tracking-[0.1em] uppercase mt-[0.4rem]" style={{ ...mono, color: COLORS.muted }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}