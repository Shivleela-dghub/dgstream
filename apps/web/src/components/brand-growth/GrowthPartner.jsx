import { Eyebrow,BtnLime,BtnOutline} from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";

const { mono, clash } = FONT_FAMILIES;
 
export default function GrowthPartner(){
    return (
 <div className="py-20 border-b" style={{ borderColor: COLORS.border }}>
                <div className="max-w-[1140px] mx-auto px-6 md:px-16">
                <div>
                    <Eyebrow>Digital Growth Partner</Eyebrow>
                    <h2 className="font-extrabold leading-[1.08] mt-4" style={{ ...clash, fontSize: "clamp(1.8rem,2.8vw,2.6rem)", letterSpacing: "-0.02em" }}>
                        Powering ambitious brands to grow 
                        <br />
                        globally.
                    </h2>
                </div>
                <p className="mt-10 text-lg leading-8 text-slate-600" style={{ color: COLORS.muted }}>
                    <b className="text-[var(--black)]">DG Stream</b> helps businesses accelerate growth through SEO, Google & Meta Ads, Social Media Marketing, Website Development, Branding, AI Automation, and IT Solutions — delivering measurable results, qualified leads, and long-term digital success.
                </p>
                <div className="mt-10 grid grid-cols-2 max-w-[750px] border border-[#D9D9D9]">
                    <button
                        className="bg-[#C8FF00] px-4 py-4 text-left transition"
                        style={mono}
                    >
                        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black">
                        BOOK A FREE STRATEGY CALL
                        </span>
                    </button>

                    <button
                        className="hover:text-[#0A0A0F] transition-colors duration-300 text-left transition border-l border-[#D9D9D9] bg-white px-4 py-4"
                        style={{mono,color: COLORS.muted }}
                    >
                        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em]">
                        EXPLORE OUR WORK
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}