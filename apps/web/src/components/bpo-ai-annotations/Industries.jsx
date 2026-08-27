import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { industries } from "@/data/bpoAnnotation";

const { mono, display } = FONT_FAMILIES;

export default function Industries() {
    return (
        <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16 mb-12">
            <div className="text-center max-w-[640px] mx-auto">
                <div
                    className="inline-flex items-center justify-center gap-2 mb-3 text-[0.62rem] tracking-[0.14em] uppercase"
                    style={{ ...mono, color: COLORS.limeDark }}
                >
                    <span className="block w-[3px] h-[13px]" style={{ background: COLORS.limeDark }} />
                    Industries We Serve
                </div>
                <h2
                    className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold leading-[1.08] tracking-tight mb-3"
                    style={{ ...display, color: COLORS.black }}
                >
                    Built for any sector<br />that runs on data.
                </h2>
                <p className="text-[0.9rem] leading-relaxed font-light" style={{ color: 'rgb(107, 107, 122)' }}>
                    Our teams operate across 8 verticals. Each industry has specific annotation standards, quality benchmarks, and compliance requirements — we know them all.
                </p>
            </div>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px max-w-[1140px] mx-auto"
                style={{ background: COLORS.border }}
            >
                {industries.map((item) => (
                    <div
                        key={item.num}
                        className="group bg-white p-7 border border-[#DCDCD7] transition-colors duration-200 hover:bg-[#EFEFEB] hover:border-[#5C9A2F]"
                    >
                        <span
                            className="block mb-3.5 text-[0.58rem] tracking-[0.14em] uppercase transition-colors duration-200 group-hover:text-[#C8FF00]"
                            style={{ ...mono, color: COLORS.limeDark }}
                        >
                            {item.num}
                        </span>
                        <div
                            className="text-[0.98rem] font-bold mb-2 transition-colors duration-200 group-hover:text-white"
                            style={{ ...display, color: COLORS.black }}
                        >
                            {item.title}
                        </div>
                        <div
                            className="text-[0.78rem] leading-relaxed font-light mb-3.5 transition-colors duration-200 group-hover:text-white/40"
                            style={{ color: COLORS.muted }}
                        >
                            {item.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}