import { BtnLime, BtnOutline } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { ClientResultsIcon, CreativePerformanceIcon, DisciplineIcon, TeamGrowthIcon } from "./showcase/HeroIcons";
const { mono, clash } = FONT_FAMILIES;

export default function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
            <div className="container px-4 sm:px-6 py-14 sm:py-20 lg:py-32">
                <div className="grid items-center gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-2">
                    <div>
                        <div className="mt-6 sm:mt-10 flex items-center gap-[0.65rem] mb-6 text-[0.65rem] tracking-[0.14em] uppercase" style={{ ...mono, color: COLORS.muted }}>
                            <span className="block w-[3px] h-[14px] uppercase" style={{ background: COLORS.lime }} />
                            About dg stream
                        </div>
                        {/* Heading */}
                        <h1
                            className="mt-4 sm:mt-10 text-[40px] sm:text-[52px] md:text-[64px] leading-[0.95] tracking-tight text-slate-950"
                            style={clash}
                        >
                            Creative and
                            <br />
                            growth,
                            <span className="relative inline-block ml-2 sm:ml-3">
                                under

                                {/* Line under "under" */}
                                <span className="absolute left-0 bottom-[-8px] sm:bottom-[-12px] w-[110px] sm:w-[150px] md:w-[180px] h-[3px] bg-[#C8FF00]" />
                            </span>
                            <br />

                            <span className="relative inline-block">
                                one roof.

                                {/* Line under "one roof" */}
                                <span className="absolute left-0 bottom-[-8px] sm:bottom-[-12px] w-[170px] sm:w-[230px] md:w-[280px] h-[3px] bg-[#C8FF00]" />
                            </span>
                        </h1>
                        <p className="mt-6 sm:mt-10 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600" style={{ color: COLORS.muted }}>
                            We started DG Stream because we were tired of watching great creative underperform, and great performance marketing run on ugly, forgettable work. So we built a team that does both — properly.
                        </p>
                        <div className="flex gap-3 sm:gap-[0.85rem] uppercase items-center flex-wrap mt-6 sm:mt-10">
                            <BtnLime>See our work</BtnLime>
                            <BtnOutline>Start a project</BtnOutline>
                        </div>
                    </div>
                    <div className="border p-5 sm:p-8" style={{ background: COLORS.surface, borderColor: COLORS.border }}>
                        <div className="text-[0.58rem] tracking-[0.12em] uppercase mb-4" style={{ ...mono, color: COLORS.muted }}>
                            DG Stream — At a Glance
                        </div>
                        <div className="grid grid-cols-2 gap-[10px]">
                            <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                                <CreativePerformanceIcon />
                            </div>
                            <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                                <TeamGrowthIcon />
                            </div>
                            <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                                <DisciplineIcon />
                            </div>
                            <div className="border bg-white overflow-hidden" style={{ aspectRatio: "16/10", borderColor: COLORS.border }}>
                                <ClientResultsIcon />
                            </div>
                        </div>
                        <div
                            className="mt-4 inline-block text-[0.58rem] tracking-[0.1em] uppercase px-[0.7rem] py-[0.35rem]"
                            style={{ ...mono, background: COLORS.black, color: COLORS.white }}
                        >
                            One Team, Six Disciplines
                        </div>
                        <div className="grid grid-cols-3 border-t mt-6 pt-6 gap-y-4" style={{ borderColor: COLORS.border }}>
                            {[
                                ["6", "core disciplines"],
                                ["90+", "Projects Shipped"],
                                ["2", "Continents Served"],
                            ].map(([num, label]) => (
                                <div key={label}>
                                    <span className="block text-[1.3rem] sm:text-[1.6rem] font-extrabold" style={{ ...clash, color: COLORS.black }}>
                                        {num}
                                    </span>
                                    <span className="block text-[0.58rem] tracking-[0.1em] uppercase mt-1" style={{ ...mono, color: COLORS.muted }}>
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}