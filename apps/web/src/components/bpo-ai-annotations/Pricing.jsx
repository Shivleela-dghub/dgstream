import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { pricingPlans } from "@/data/bpoAnnotation";

const { mono, display } = FONT_FAMILIES;

export default function Pricing() {
    return (
        <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16 mb-12">
            <div className="text-center max-w-[640px] mx-auto">
                <div
                    className="inline-flex items-center justify-center gap-2 mb-3 text-[0.62rem] tracking-[0.14em] uppercase"
                    style={{ ...mono, color: COLORS.limeDark }}
                >
                    <span className="block w-[3px] h-[13px]" style={{ background: COLORS.limeDark }} />
                    Engagement Models
                </div>
                <h2
                    className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold leading-[1.08] tracking-tight mb-3"
                    style={{ ...display, color: COLORS.black }}
                >
                    Flexible pricing.<br />Fixed quality.
                </h2>
                <p className="text-[0.9rem] leading-relaxed font-light" style={{ color: 'rgb(107, 107, 122)' }}>
                    Whether you need a one-time batch or ongoing managed operations, we have an engagement model that works. All pricing includes QA, project management, and tooling setup.
                </p>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 md:mt-12"
                style={{ background: COLORS.white }}
            >
                {pricingPlans.map((item) => {
                    const isDark = item.featured;
                    const bodyColor = isDark ? 'rgba(255,255,255,0.6)' : COLORS.muted;
                    const titleColor = isDark ? COLORS.white : COLORS.black;
                    const badgeBorder = isDark ? 'border-[#3A4A20]' : 'border-[#CFE8A0]';
                    const badgeText = isDark ? 'text-[#C4E86B]' : 'text-[#5C9A2F]';
                    const dividerColor = isDark ? 'border-white/10' : 'border-black/10';
                    const checkColor = isDark ? COLORS.lime : COLORS.lime;

                    return (
                        <div
                            key={item.num}
                            className="flex flex-col p-7 border transition-colors duration-200"
                            style={{
                                background: isDark ? '#0B0C08' : COLORS.white,
                                borderColor: isDark ? '#0B0C08' : '#DCDCD7',
                            }}
                        >
                            <div
                                className={`inline-block self-start border ${badgeBorder} px-3 py-1 text-[0.58rem] mb-2 tracking-[0.14em] uppercase ${badgeText}`}
                            >
                                {item.badge}
                            </div>

                            <div
                                className="text-[0.98rem] font-bold mb-1"
                                style={{ ...display, color: titleColor }}
                            >
                                {item.title}
                            </div>

                            <div
                                className="text-[1.9rem] md:text-[2.1rem] font-black leading-none mb-3"
                                style={{ ...display, color: titleColor }}
                            >
                                {item.price}
                                <span
                                    className="text-[0.85rem] font-normal ml-1"
                                    style={{ color: bodyColor }}
                                >
                                    {item.priceUnit}
                                </span>
                            </div>

                            <div
                                className="text-[0.78rem] leading-relaxed font-light mb-3.5"
                                style={{ color: bodyColor }}
                            >
                                {item.desc}
                            </div>

                            {item.features && item.features.length > 0 && (
                                <ul className={`mt-4 pt-4 border-t ${dividerColor} space-y-2.5 flex-1`}>
                                    {item.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2.5"
                                        >
                                            <span
                                                className="shrink-0 leading-none mt-[0.15rem] text-[0.75rem] font-medium"
                                                style={{ color: checkColor }}
                                                aria-hidden="true"
                                            >
                                                ✓
                                            </span>
                                            <span
                                                className="text-[0.78rem] leading-relaxed font-light"
                                                style={{ color: bodyColor }}
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
    
                            <button
                                type="button"
                                onClick={() => window.location.href = item.link || '#'}
                                className={
                                    item.ctaStyle === 'btn-lime'
                                        ? "mt-6 w-full py-3 text-[0.72rem] font-bold tracking-[0.08em] uppercase transition-colors duration-200"
                                        : "mt-6 w-full py-3 text-[0.72rem] font-bold tracking-[0.08em] uppercase border transition-colors duration-200"
                                }
                                style={
                                    item.ctaStyle === 'btn-lime'
                                        ? { background: COLORS.lime, color: COLORS.black }
                                        : {
                                            borderColor: isDark ? 'rgba(255,255,255,0.25)' : COLORS.black,
                                            color: titleColor,
                                            background: 'transparent',
                                        }
                                }
                            >
                                {item.cta}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}