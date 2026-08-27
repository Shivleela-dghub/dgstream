import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { qualityStats } from "@/data/bpoAnnotation";

const { mono, display } = FONT_FAMILIES;

function QualityRow({ num, title, desc, lime, last }) {
    return (
        <div
            className="grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-8 items-start py-6 md:py-7"
            style={{ borderBottom: last ? "none" : `1px solid ${COLORS.border}` }}
        >
            <span
                className="text-[1.8rem] md:text-[2.1rem] font-black leading-none w-[90px] md:w-[110px] shrink-0"
                style={{ ...display, color: lime ? COLORS.limeDark : COLORS.black }}
            >
                {num}
            </span>
            <div>
                <h4
                    className="text-[0.95rem] md:text-[1rem] font-bold text-slate-950 mb-1"
                >
                    {title}
                </h4>
                <p
                    className="text-[0.85rem] md:text-[0.9rem] leading-6"
                    style={{ color: COLORS.muted }}
                >
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default function QualityBand() {
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
                        Quality Assurance
                    </div>

                    <h2 className="text-[32px] sm:text-[38px] md:text-[44px] leading-[1.1] font-black tracking-tight text-slate-950">
                        99.2% accuracy.
                        <br />
                        Guaranteed by contract.
                    </h2>

                    <p
                        className="mt-6 text-base md:text-lg leading-7 md:leading-8"
                        style={{ color: COLORS.muted }}
                    >
                        Every project operates under a documented quality SLA. Our dual-review
                        model — human annotator plus independent QA reviewer — eliminates
                        systematic error before it reaches your model training pipeline.
                    </p>

                    <p
                        className="mt-4 text-[0.85rem] md:text-sm leading-6"
                        style={{ color: COLORS.muted }}
                    >
                        Accuracy disputes are resolved with a free re-annotation of affected
                        batches. We don't move on until your quality bar is met.
                    </p>
                </div>

                <div className="flex flex-col">
                    {qualityStats.map((stat, i) => (
                        <QualityRow
                            key={stat.title}
                            num={stat.num}
                            title={stat.title}
                            desc={stat.desc}
                            lime={stat.lime}
                            last={i === qualityStats.length - 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}