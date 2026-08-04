import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { caseStudyService } from "@/services/caseStudyService";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { Users, Megaphone, AlertTriangle, FileText, Target, Puzzle, PlayCircle } from "lucide-react";
const { clash, mono } = FONT_FAMILIES;

const PDF_COLORS = {
  darkTeal: "#1B4B43",
  lime: "#7CB342",
  limeText: "#5C9A2F",
  lightBg: "#F5F6F5",
  navy: "#1F2937",
};

// icons cycle through for bullet points, since content is just plain strings
const CHALLENGE_ICONS = [Users, Megaphone, AlertTriangle, FileText];
const SOLUTION_ICONS = [Target, Megaphone, AlertTriangle, PlayCircle];

function IconBadge({ Icon }) {
  return (
    <span
      className="flex items-center justify-center rounded-full shrink-0"
      style={{ width: 28, height: 28, background: PDF_COLORS.lime }}
    >
      <Icon size={15} color="#fff" strokeWidth={2.2} />
    </span>
  );
}

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const [study, setStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    caseStudyService.getCaseStudyBySlug(slug)
      .then(setStudy)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="p-20 text-center">Loading...</div>;

  if (!study) {
    return (
      <div className="py-24 text-center">
        <p style={{ ...mono, color: "#6B7280" }} className="uppercase text-xs tracking-[0.18em]">
          Case study not found
        </p>
        <Link to="/case-studies" className="inline-block mt-6 font-bold underline" style={clash}>
          Back to all case studies
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="max-w-[1140px] mx-auto px-6 md:px-16">

        {/* Back link */}
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.14em]"
          style={{ ...mono, color: "#6B7280" }}
        >
          ← All case studies
        </Link>

        {/* HERO: black image box + floating lime card */}
        <div className="relative mt-8">
          <div
            className="w-full bg-black"
            style={{ aspectRatio: "16/8", minHeight: 260 }}
          >
            {study.heroImage && (
              <img src={study.heroImage} alt={study.title} className="w-full h-full object-cover opacity-90" />
            )}
          </div>

          {/* Floating info card */}
          <div
            className="absolute bottom-0 right-0 translate-y-[20%] w-[92%] md:w-[62%] p-6 md:p-8"
            style={{ background: PDF_COLORS.lime }}
          >
            <h1
              className="font-extrabold text-white leading-none"
              style={{ ...clash, fontSize: "clamp(1.8rem,3.4vw,2.4rem)" }}
            >
              {study.title}
            </h1>
            {study.tagline && (
              <p className="mt-3 text-white/95 leading-6 text-[0.95rem] max-w-[440px]">
                {study.tagline}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-6 mt-5">
              {study.industry && (
                <span className="flex items-center gap-2 text-white/95 text-[0.8rem]">
                  🌭 {study.industry}
                </span>
              )}
              {study.location && (
                <span className="flex items-center gap-2 text-white/95 text-[0.8rem]">
                  📍 {study.location}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* spacer to clear the floating card overlap */}
        <div className="h-16 md:h-20" />

        {/* About */}
        {study.about?.length > 0 && (
          <div>
            <p
              className="text-[0.78rem] font-semibold mb-4 pl-3 border-l-4"
              style={{ borderColor: PDF_COLORS.lime, color: PDF_COLORS.navy }}
            >
              About {study.title}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {study.about.map((para, i) => (
                <p key={i} className="text-[0.95rem] leading-7" style={{ color: "#374151" }}>
                  {para}
                </p>
              ))}
            </div>
            {study.websiteUrl && (
              <a
                href={study.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-5 text-[0.85rem] underline"
                style={{ color: PDF_COLORS.limeText }}
              >
                {study.websiteUrl}
              </a>
            )}
          </div>
        )}

        {/* thick lime divider */}
        <div className="mt-14 mb-14 h-[3px]" style={{ background: PDF_COLORS.lime }} />

        {/* Challenge — light gray card */}
        {study.challenge?.heading && (
          <div className="p-6 md:p-10" style={{ background: PDF_COLORS.lightBg }}>
            <p
              className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold mb-4 pl-3 border-l-4"
              style={{ borderColor: PDF_COLORS.lime, color: "#6B7280" }}
            >
              The Challenge
            </p>
            <h3
              className="font-normal leading-tight mb-5"
              style={{ fontSize: "clamp(1.4rem,2.6vw,1.9rem)", color: PDF_COLORS.navy }}
            >
              {study.challenge.heading.split(" ").map((word, i, arr) =>
                i >= arr.length - 4 ? (
                  <span key={i} style={{ color: PDF_COLORS.limeText, fontWeight: 700 }}>{word} </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h3>
            {study.challenge.intro && (
              <p className="text-[0.95rem] leading-7 mb-6" style={{ color: "#374151" }}>
                {study.challenge.intro}
              </p>
            )}
            {study.challenge.points?.length > 0 && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {study.challenge.points.map((point, i) => {
                  const Icon = CHALLENGE_ICONS[i % CHALLENGE_ICONS.length];
                  return (
                    <li key={i} className="flex items-center gap-3 text-[0.9rem]" style={{ color: "#374151" }}>
                      <IconBadge Icon={Icon} />
                      {point}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}

        {/* Solution */}
        {study.solution?.heading && (
          <div className="mt-16">
            <h3
              className="font-normal leading-tight mb-4"
              style={{ fontSize: "clamp(1.5rem,2.8vw,2.1rem)", color: PDF_COLORS.navy }}
            >
              {study.solution.heading}
            </h3>
            {study.solution.intro && (
              <p className="text-[0.95rem] leading-7 mb-8 max-w-[760px]" style={{ color: "#374151" }}>
                {study.solution.intro}
              </p>
            )}

            {study.solution.points?.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] border" style={{ borderColor: "#E5E5E5" }}>
                {/* left panel */}
                <div className="bg-black flex flex-col items-start justify-center p-8 min-h-[260px]">
                  <p
                    className="uppercase font-extrabold leading-tight mb-6"
                    style={{ ...clash, fontSize: "1.6rem", color: PDF_COLORS.lime }}
                  >
                    Our<br />Solution
                  </p>
                  <Puzzle size={72} color={PDF_COLORS.lime} strokeWidth={1.5} />
                </div>
                {/* right list */}
                <div className="flex flex-col justify-center gap-6 p-8">
                  {study.solution.points.map((point, i) => {
                    const Icon = SOLUTION_ICONS[i % SOLUTION_ICONS.length];
                    return (
                      <div key={i} className="flex items-center gap-4 text-[0.95rem]" style={{ color: "#374151" }}>
                        <IconBadge Icon={Icon} />
                        {point}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Testimonial — dark teal diagonal section */}
        {study.testimonial?.quote && (
          <div className="mt-16 relative overflow-hidden" style={{ background: PDF_COLORS.darkTeal }}>
            {/* diagonal light strip */}
            <div
              className="absolute top-0 left-0 w-full"
              style={{
                height: "45%",
                background: "#EAF3E5",
                clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)",
              }}
            />
            <div className="relative px-8 md:px-16 pt-24 pb-16 md:pt-28 md:pb-20">
              <span
                className="block leading-none mb-4"
                style={{ ...clash, fontSize: "3.5rem", color: PDF_COLORS.lime }}
              >
                “
              </span>
              <p
                className="font-normal leading-snug max-w-[640px] text-white"
                style={{ fontSize: "clamp(1.3rem,2.4vw,1.8rem)" }}
              >
                {study.testimonial.quote}
              </p>
              <p className="mt-6 text-[0.85rem] text-white/70">
                {study.testimonial.author}
                {study.testimonial.role ? <><br />{study.testimonial.role}</> : null}
              </p>
              {study.websiteUrl && (
                <a
                  href={study.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-8 font-semibold text-[0.85rem] px-6 py-3"
                  style={{ background: PDF_COLORS.lime, color: "#fff" }}
                >
                  <PlayCircle size={18} /> Check Out Website
                </a>
              )}
            </div>
          </div>
        )}

        {/* Back to all */}
        <div className="mt-20 pt-10 border-t border-[#E5E5E5] text-center">
          <Link to="/case-studies" className="inline-block font-bold uppercase text-[0.85rem]" style={clash}>
            View all case studies →
          </Link>
        </div>
      </div>
    </div>
  );
}