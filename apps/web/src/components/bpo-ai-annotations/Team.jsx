import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { teamRoles } from "@/data/bpoAnnotation";

const { mono, display } = FONT_FAMILIES;

export default function Team() {
    return (
        <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16 mb-12">
            <div className="text-center max-w-[640px] mx-auto">
                <div
                    className="inline-flex items-center justify-center gap-2 mb-3 text-[0.62rem] tracking-[0.14em] uppercase"
                    style={{ ...mono, color: COLORS.limeDark }}
                >
                    <span className="block w-[3px] h-[13px]" style={{ background: COLORS.limeDark }} />
                    Who We Place on Your Project
                </div>
                <h2
                    className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold leading-[1.08] tracking-tight mb-3"
                    style={{ ...display, color: COLORS.black }}
                >
                   Specialists, not generalists.
                </h2>
                <p className="text-[0.9rem] leading-relaxed font-light" style={{ color: 'rgb(107, 107, 122)' }}>
                    Every team member is selected for your specific project domain. Here are the roles we manage across BPO and annotation engagements.
                </p>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 md:mt-12"
                style={{ background: COLORS.white }}
            >
                {teamRoles.map((item) => (
                    <div
                        key={item.num}
                        className="group bg-white p-7 border border-[#DCDCD7] transition-colors duration-200 hover:bg-[#EFEFEB] hover:border-[#5C9A2F]"
                    >
                        <span
                            className="block mb-3.5 text-[0.58rem] tracking-[0.14em] uppercase transition-colors duration-200 group-hover:text-[#C8FF00]"
                            style={{ ...mono, color: COLORS.limeDark }}
                        >
                            {item.role}
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
                        <div className="flex flex-wrap gap-1">
                        {item.skills.map((skill) => (
                        <div
                            className="inline-block border border-[#CFE8A0] px-3 py-1 text-[0.58rem] mb-2 tracking-[0.14em] uppercase text-[#5C9A2F]"
                        >
                            {skill}
                        </div>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}