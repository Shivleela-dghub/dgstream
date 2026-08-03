import { Link } from "react-router-dom";
import { Eyebrow, BtnLime, BtnOutline } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";

const { mono, clash } = FONT_FAMILIES;

export default function GrowthPartner() {
    return (
        <div className="py-10 md:py-14 lg:py-16">
            <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16">
                <div>
                    <Eyebrow>Digital Growth Partner</Eyebrow>
                    <h2
                        className="font-extrabold leading-[1.15] md:leading-[1.08] mt-3 md:mt-4"
                        style={{ ...clash, fontSize: "clamp(1.6rem,5vw,2.6rem)", letterSpacing: "-0.02em" }}
                    >
                        Powering ambitious brands to grow globally.
                    </h2>
                </div>

                <p
                    className="mt-6 md:mt-8 lg:mt-10 text-base md:text-lg leading-7 md:leading-8 text-slate-600"
                    style={{ color: COLORS.muted }}
                >
                    <b className="text-[var(--black)]">DG Stream</b> helps businesses
                    accelerate growth through SEO, Google & Meta Ads, Social Media
                    Marketing, Website Development, Branding, AI Automation, and IT
                    Solutions — delivering measurable results, qualified leads, and
                    long-term digital success.
                </p>

                <div className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 max-w-[750px] border border-[#D9D9D9]">
                    <Link to="/contact" className="bg-[#C8FF00]">
                        <button
                            className="w-full bg-[#C8FF00] px-4 py-4 text-left transition"
                            style={mono}
                        >
                            <span className="text-[0.68rem] md:text-[0.72rem] font-semibold uppercase tracking-[0.14em] md:tracking-[0.18em] text-black bg-[#C8FF00]">
                                BOOK A FREE STRATEGY CALL
                            </span>
                        </button>
                    </Link>
                    <Link to="/work">
                        <button
                            className="w-full hover:text-[#0A0A0F] transition-colors duration-300 text-left border-t sm:border-t-0 sm:border-l border-[#D9D9D9] bg-white px-4 py-4"
                            style={{ ...mono, color: COLORS.muted }}
                        >
                            <span className="text-[0.68rem] md:text-[0.72rem] font-semibold uppercase tracking-[0.14em] md:tracking-[0.18em]">
                                EXPLORE OUR WORK
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}