import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { PROJECTS } from "../../data/project";
const { mono, clash } = FONT_FAMILIES;

export default  function Portfolio({ visibleProjects }) {
    return(
         <div className="py-16" id="portfolio">
        <div className="max-w-[1140px] mx-auto px-6 md:px-16">
          <div className="flex justify-between items-start gap-8 mb-12 flex-wrap">
            <h2 className="font-extrabold leading-[1.1]" style={{ ...clash, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", letterSpacing: "-0.02em" }}>
              Selected work, 2023 — 2025
            </h2>
            <p className="text-[0.9rem] font-light leading-[1.75] max-w-[360px]" style={{ color: COLORS.muted }}>
              Each project brief, approach, and outcome is documented. Request the full case study for any project
              when you book a call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {visibleProjects.map((proj) => (
              <div
                key={proj.id}
                className={`border overflow-hidden cursor-pointer transition-all duration-200 bg-white hover:-translate-y-0.5 group ${
                  proj.large ? "md:col-span-2" : ""
                }`}
                style={{ borderColor: COLORS.border }}
              >
                <div className="relative overflow-hidden">
                  {proj.svg}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(10,10,15,0.82)" }}
                  >
                    <span
                      className="text-[0.78rem] font-bold uppercase tracking-[0.06em] border-[1.5px] px-5 py-[0.55rem]"
                      style={{ ...clash, color: COLORS.white, borderColor: "rgba(255,255,255,0.4)" }}
                    >
                      View Project →
                    </span>
                  </div>
                </div>
                <div className="px-6 pt-[1.35rem] pb-6">
                  <div className="flex gap-[0.4rem] flex-wrap mb-[0.6rem]">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className="text-[0.55rem] tracking-[0.09em] uppercase border px-[7px] py-[2px]"
                        style={{
                          ...mono,
                          color: i === 0 ? COLORS.limeDark : COLORS.muted,
                          borderColor: i === 0 ? COLORS.limeDark : COLORS.border,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-[1rem] font-bold leading-[1.25] mb-2" style={clash}>
                    {proj.title}
                  </h3>
                  <p className="text-[0.8rem] leading-[1.6] mb-4" style={{ color: COLORS.muted }}>
                    {proj.desc}
                  </p>
                  <div className="flex justify-between items-center border-t pt-[0.85rem]" style={{ borderColor: COLORS.border }}>
                    <span className="text-[0.57rem] tracking-[0.09em] uppercase" style={{ ...mono, color: COLORS.muted }}>
                      {proj.industry}
                    </span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}