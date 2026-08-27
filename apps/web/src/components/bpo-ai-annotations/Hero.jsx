import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { BtnLime, BtnOutline } from "../shared/Button";
import { Link } from "react-router-dom";

const { mono, display } = FONT_FAMILIES;

function StatBox({ value, label, lime }) {
    return (
        <div
            className="border bg-white overflow-hidden flex flex-col justify-center px-4 md:px-5"
            style={{ aspectRatio: "16/10", borderColor: COLORS.border }}
        >
            <span
                className="text-[1.6rem] md:text-[2rem] font-bold leading-none"
                style={{ ...display, color: lime ? COLORS.limeDark : COLORS.black }}
            >
                {value}
            </span>
            <span
                className="mt-1.5 text-[0.55rem] md:text-[0.58rem] tracking-[0.1em] uppercase"
                style={{ ...mono, color: COLORS.muted }}
            >
                {label}
            </span>
        </div>
    );
}

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
                        BPO & AI Annotation Services
                    </div>
                    {/* Heading */}
                    <h1 className="mt-6 md:mt-8 lg:mt-10 text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] leading-[1.05] lg:leading-[0.95] font-black tracking-tight text-slate-950">
                        <span className="block whitespace-nowrap">Human expertise.<br /></span>
                        <span className="relative inline-block mb-2">
                            AI precision.
                            <span className="absolute left-0 -bottom-1 md:-bottom-2 h-1 w-full bg-lime-400" />
                        </span>
                        <br />
                        Global scale.
                    </h1>

                    <p
                        className="mt-6 md:mt-8 lg:mt-10 text-base md:text-lg leading-7 md:leading-8 text-slate-600"
                        style={{ color: COLORS.muted }}
                    >
                        DG Stream manages vetted, trained human resource teams to power your BPO operations and AI training data pipelines — from data annotation and content moderation to back-office processing and customer intelligence.
                    </p>

                    <div className="flex gap-3 md:gap-[0.85rem] items-center flex-wrap mt-6 md:mt-8 lg:mt-10">
                        <Link to="/contact">
                            <BtnOutline>submit a Project</BtnOutline>
                        </Link>
                        <Link to="/work">
                        <BtnLime>
                            Explore Services
                        </BtnLime>
                        </Link>
                        
                    </div>
                    <div className="flex gap-x-5 gap-y-3 md:gap-8 flex-wrap mt-6 md:mt-7">
                        {[
                            "NDA-protected",
                            "Vetted human teams",
                            "99.2% accuracy SLA",
                            "48h project kickoff"
                        ].map((t) => (
                            <span
                                key={t}
                                className="flex items-center gap-[0.4rem] text-[0.58rem] md:text-[0.6rem] tracking-[0.08em] md:tracking-[0.1em] uppercase"
                                style={{ ...mono, color: COLORS.muted }}
                            >
                                <span style={{ color: COLORS.limeDark, fontSize: "0.65rem" }}>✓</span>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="mt-8 md:mt-8 lg:mt-10 grid grid-cols-2">
                        <StatBox value="99.2%" label="Annotation accuracy" lime />
                        <StatBox value="100" label="Trained annotators" />
                        <StatBox value="20" label="Languages covered" />
                        <StatBox value="48h" label="Project kickoff SLA" lime />
                    </div>
                </div>
            </div>
        </div>
    );
}