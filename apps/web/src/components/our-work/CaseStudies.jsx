import { useEffect, useState } from "react";
import { caseStudyService } from "@/services/caseStudyService";

import { Eyebrow } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
const { clash, mono } = FONT_FAMILIES;

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    caseStudyService.getCaseStudies()
      .then(setCaseStudies)
      .finally(() => setLoading(false))
  }, [])
  if (loading) return <div className="p-20 text-center">Loading...</div>
  return (
    <div className="py-10" id="casestudies">
      <div className="max-w-[1140px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-end mb-14">
          <div>
            <Eyebrow>Full Breakdowns</Eyebrow>
            <h2 className="font-extrabold leading-[1.08] mt-4" style={{ ...clash, fontSize: "clamp(1.8rem,2.8vw,2.6rem)", letterSpacing: "-0.02em" }}>
              Case studies,
              <br />
              brand by brand.
            </h2>
          </div>
          <p className="mt-10 text-lg leading-8 text-slate-600" style={{ color: COLORS.muted }}>
            The brief, the work, and the number that followed — one row per brand.
          </p>
        </div>
        {/* Divider */}
        <div className="border-t border-[#E5E5E5]" />
        {caseStudies.map((study, index) => (
          <div
            key={study.id}
            className="grid grid-cols-[120px_1fr_300px_220px] items-center py-10 border-b border-[#E5E5E5] hover:bg-gray-100 transition-colors"
          >
            {/* Number */}
            <div
              className="text-[0.68rem] tracking-[0.18em] uppercase"
              style={{
                ...mono,
                color: "#6B7280",
              }}
            >
              CS.
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <h3
                  className="text-[1.8rem] font-bold leading-none whitespace-nowrap"
                  style={clash}
                >
                  {study.title}
                </h3>
                {/* Lime divider */}
                <span className="h-3 w-[3px] bg-lime-400"></span>
                <span
                  className="text-[0.62rem] uppercase tracking-[0.2em] whitespace-nowrap"
                  style={{
                    ...mono,
                    color: COLORS.limeDark,
                  }}
                >
                  {study.industry}
                </span>
              </div>
            </div>

            {/* Metric */}
            <div>
              <p
                className="text-[0.6rem] uppercase tracking-[0.22em]"
                style={{
                  ...mono,
                  color: "#6B7280",
                }}
              >
                {study.resultLabel}
              </p>

              <h4
                className="mt-3 text-[1.3rem] font-bold leading-none"
                style={clash}
              >
                {study.result}
              </h4>
            </div>

            {/* CTA */}
            <div className="flex justify-end">
              <button
                className="group flex items-center gap-2 uppercase font-bold text-[0.72rem]"
                style={clash}
              >
                View Case Study

                <span className="transition-transform group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}