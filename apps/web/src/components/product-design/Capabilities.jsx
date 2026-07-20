import { Eyebrow } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { CAPABILITIES } from "../../data/capabilities";
const { clash, mono } = FONT_FAMILIES;

export default function Capabilities({ openCap, setOpenCap,hoverCap,setHoverCap}) {
    return (
<div className="py-10" id="capabilities">
        <div className="max-w-[1140px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-end mb-14">
            <div>
              <Eyebrow>Full Capabilities</Eyebrow>
              <h2 className="font-extrabold leading-[1.08] mt-4" style={{ ...clash, fontSize: "clamp(1.8rem,2.8vw,2.6rem)", letterSpacing: "-0.02em" }}>
                Every deliverable
                <br />
                we produce.
              </h2>
            </div>
            <p className="mt-10 text-lg leading-8 text-slate-600" style={{ color: COLORS.muted }}>
              Five service areas, each with a full deliverable menu. Most projects combine two or three — the
              packages that perform best are the ones where creative and strategy share a brief.
            </p>
          </div>

          <div className="border-t" style={{ borderColor: COLORS.border }}>
            {CAPABILITIES.map((cap, idx) => {
              const isOpen = openCap === idx;
              return (
                <div key={cap.title} className="border-b" style={{ borderColor: COLORS.border }}>
                  <div
                    className="flex items-center justify-between py-6 cursor-pointer gap-4"
                    onMouseEnter={() => setHoverCap(idx)}
                    onMouseLeave={() => setHoverCap(null)}
                    onClick={() => setOpenCap(isOpen ? null : idx)}
                  >
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">{cap.icon}</div>
                    <div className="flex-1">
                      <div className="text-[0.6rem] tracking-[0.12em] uppercase mb-[0.2rem]" style={{ ...mono, color: COLORS.muted }}>
                        {cap.area}
                      </div>
                      <div className="text-[1.1rem] font-bold" style={clash}>
                        {cap.title}
                      </div>
                      {hoverCap === idx && !isOpen && (
  <div className="mt-2 flex flex-wrap gap-2">
    {cap.services.map((service) => (
      <span
        key={service.h}
        className="rounded-full bg-slate-100 px-3 py-1 text-xs"
      >
        {service.h}
      </span>
    ))}
  </div>
)}
                    </div>
                    <span className="text-[0.62rem] tracking-[0.1em] uppercase mr-4 hidden sm:inline" style={{ ...mono, color: COLORS.muted }}>
                      {cap.count}
                    </span>
                    <div
                      className="w-7 h-7 flex items-center justify-center text-[1.1rem] font-light leading-none flex-shrink-0"
                      style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}` }}
                    >
                      {isOpen ? "−" : "+"}
                    </div>
                  </div>
                  {isOpen && (
                    <div className="pb-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {cap.services.map((s) => (
                          <div key={s.h} className="p-5 border" style={{ background: COLORS.surface, borderColor: COLORS.border }}>
                            <h4 className="text-[0.88rem] font-bold mb-1" style={clash}>
                              {s.h}
                            </h4>
                            <p className="text-[0.78rem] leading-[1.6]" style={{ color: COLORS.muted }}>
                              {s.p}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div
                        className="text-[0.82rem] font-light leading-[1.7] px-5 py-4 border-l-[3px]"
                        style={{ background: COLORS.surface, borderColor: COLORS.lime, color: COLORS.muted }}
                      >
                        <strong className="font-medium" style={{ color: COLORS.black }}>
                          Best suited for:
                        </strong>{" "}
                        {cap.note}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
}