// shared/CTASection.jsx
import { Link } from "react-router-dom";
import { Eyebrow, BtnLime, BtnOutline } from "./Button";
import { COLORS, FONT_FAMILIES } from "./FontColors";
const { mono, clash } = FONT_FAMILIES;

export default function CTASection({
  eyebrow = "Start a Project",
  heading,
  description,
  primaryLabel,
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo = "/contact",
  badges = [],
}) {
  return (
    <div className="py-10 md:py-14 lg:py-16 text-center">
      <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16">
        <Eyebrow center>{eyebrow}</Eyebrow>

        <h2
          className="font-extrabold leading-[1.15] md:leading-[1.08] mt-3 md:mt-4 mb-3 md:mb-4"
          style={{
            ...clash,
            fontSize: "clamp(1.6rem,6vw,2.8rem)",
            letterSpacing: "-0.02em",
            color: COLORS.black,
          }}
        >
          {heading}
        </h2>

        <p
          className="mx-auto text-center max-w-[560px] text-[0.88rem] md:text-[0.95rem] font-light leading-[1.7] md:leading-[1.8] mb-6 md:mb-8"
          style={{ color: COLORS.muted }}
        >
          {description}
        </p>

        <div className="flex gap-3 md:gap-[0.85rem] justify-center flex-wrap">
          <Link to={primaryTo}><BtnLime>{primaryLabel}</BtnLime></Link>
          <Link to={secondaryTo}><BtnOutline>{secondaryLabel}</BtnOutline></Link>
        </div>

        {badges.length > 0 && (
          <div className="flex justify-center gap-x-5 gap-y-3 md:gap-8 flex-wrap mt-6 md:mt-7">
            {badges.map((t) => (
              <span
                key={t}
                className="flex items-center gap-[0.4rem] text-[0.58rem] md:text-[0.6rem] tracking-[0.08em] md:tracking-[0.1em] uppercase"
                style={{ ...mono, color: COLORS.muted }}
              >
                <span style={{ color: COLORS.limeDark, fontSize: "0.65rem" }}>✓</span>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}