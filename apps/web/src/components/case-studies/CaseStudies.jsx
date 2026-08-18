import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:items-end mb-10 lg:mb-14">
          <div>
            <Eyebrow>Full Breakdowns</Eyebrow>
            <h2 className="font-extrabold leading-[1.08] mt-4" style={{ ...clash, fontSize: "clamp(1.8rem,2.8vw,2.6rem)", letterSpacing: "-0.02em" }}>
              Case studies,
              <br />
              brand by brand.
            </h2>
          </div>
          <p className="mt-4 lg:mt-10 text-base lg:text-lg leading-7 lg:leading-8 text-slate-600" style={{ color: COLORS.muted }}>
            The brief, the work, and the results — one row per brand.
          </p>
        </div>

        <div className="border-t border-[#E5E5E5]" />

        {caseStudies.length === 0 ? (
          <div className="py-20 text-center text-slate-400">No case studies published yet.</div>
        ) : (
          caseStudies.map((study, index) => (
            <div
              key={study._id ?? study.slug ?? index}
              className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:py-10 border-b border-[#E5E5E5] hover:bg-gray-100 transition-colors px-2 -mx-2"
            >
              <div className="flex items-center gap-4">
                <div
                  className="text-[0.62rem] lg:text-[0.68rem] tracking-[0.18em] uppercase"
                  style={{ ...mono, color: "#6B7280" }}
                >
                  CS.{String(index + 1).padStart(2, "0")}
                </div>

                <h3
                  className="text-[1.4rem] lg:text-[1.8rem] font-bold leading-tight lg:leading-none"
                  style={clash}
                >
                  {study.title}
                </h3>
              </div>

              <Link
                to={`/case-studies/${study.slug}`}
                className="group flex items-center gap-2 uppercase font-bold text-[0.72rem]"
                style={clash}
              >
                View Case Study
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
}