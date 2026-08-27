import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { hiringModels } from "@/data/bpoAnnotation"

const { mono, display } = FONT_FAMILIES;


export default function Hiring() {
    return (
        <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-16 lg:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
                <div>
                    <div
                        className="flex items-center gap-[0.65rem] mb-4 md:mb-6 text-[0.6rem] md:text-[0.65rem] tracking-[0.14em] uppercase"
                        style={{ ...mono, color: COLORS.muted }}
                    >
                        <span
                            className="block w-[3px] h-[14px]"
                            style={{ background: COLORS.lime }}
                        />
                        Our Human Resource Model
                    </div>

                    <h2 className="text-[32px] sm:text-[38px] md:text-[44px] leading-[1.1] font-black tracking-tight text-slate-950">
                        We manage the team.
                        <br />
                        You manage the output.
                    </h2>
                </div>

                <div className="flex flex-col">
                    <p
                        className="mt-6 text-base md:text-lg leading-7 md:leading-8"
                        style={{ color: COLORS.muted }}
                    >
                        DG Stream recruits, vets, trains, and manages the human resource required for your project — removing the complexity of staffing, onboarding, and quality management from your plate entirely.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 md:mt-12">
                {hiringModels.map((item) => (
                    <div
                        key={item.num}
                        className="bg-white p-7 border border-black/10 transition-colors duration-200 hover:bg-[#EFEFEB] hover:border-[#5C9A2F]"
                    >
                        <div
                            className="inline-block border border-[#CFE8A0] px-3 py-1 text-[0.58rem] mb-2 tracking-[0.14em] uppercase text-[#5C9A2F]"
                        >
                            {item.badge}
                        </div>
                        <div
                            className="text-[0.98rem] font-bold leading-tight mt-2 mb-2 transition-colors duration-200 group-hover:text-white"
                            style={{ ...display, color: COLORS.black }}
                        >
                            {item.title}
                        </div>
                        <div
                            className="text-[0.78rem] leading-relaxed font-light mt-2 mb-3.5 transition-colors duration-200 group-hover:text-white/40"
                            style={{ color: COLORS.muted }}
                        >
                            {item.desc}
                        </div>

                        {item.features && item.features.length > 0 && (
                            <ul className="mt-4 pt-4 border-t border-black/10 space-y-2.5">
                                {item.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2.5"
                                    >
                                        <span
                                            className="shrink-0 leading-none mt-[0.15rem] text-[0.75rem] font-medium"
                                            style={{ color: COLORS.lime }}
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>
                                        <span
                                            className="text-[0.78rem] leading-relaxed font-light"
                                            style={{ color: COLORS.muted }}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}