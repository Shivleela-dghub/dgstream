import { Eyebrow,BtnOutline,BtnLime} from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { PRICING } from "../../data/pricing";
import { Link } from "react-router-dom";

const { clash, mono } = FONT_FAMILIES;

export default function Pricing() {
  return (
    <section
      className="py-10">
      <div className="max-w-[1140px] mx-auto px-6 md:px-16">

        {/* Heading */}

        <div className="text-center mb-16">

          <div className="flex justify-center">
            <Eyebrow>Pricing</Eyebrow>
          </div>

          <h2 className="font-extrabold leading-[1.08] mt-4" style={{ ...clash, fontSize: "clamp(1.8rem,2.8vw,2.6rem)", letterSpacing: "-0.02em" }}>
            Simple plans, serious output.
          </h2>

          <p
            className="mx-auto mt-4 max-w-[520px] text-[15px] leading-8"
            style={{ color: COLORS.muted }}
          >
            Every plan includes senior-team delivery, structured timelines,
            and revision rounds. No hidden fees, no offshore handoffs.
          </p>

        </div>

        {/* Cards */}

        <div
          className="grid lg:grid-cols-3 border"
          style={{ borderColor: COLORS.border }}
        >
          {PRICING.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-10 border-r last:border-r-0 ${
                plan.featured ? "bg-[#0A0A0F]" : ""
              }`}
              style={{
                borderColor: plan.featured
                  ? "#0A0A0F"
                  : COLORS.border,
              }}
            >
              {plan.badge && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 px-4 py-1"
                  style={{
                    background: COLORS.lime,
                    ...mono,
                    fontSize: ".58rem",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <p
                className="uppercase tracking-[0.14em] text-[10px]"
                style={{
                  ...mono,
                  color: plan.featured
                    ? "rgba(255,255,255,.4)"
                    : COLORS.muted,
                }}
              >
                {plan.label}
              </p>

              <h3
                className="mt-5 text-2xl font-bold"
                style={{
                  ...clash,
                  color: plan.featured
                    ? COLORS.white
                    : COLORS.black,
                }}
              >
                {plan.name}
              </h3>

              <div
                className="mt-6 flex items-end gap-1"
                style={{
                  color: plan.featured
                    ? COLORS.lime
                    : COLORS.black,
                }}
              >
                <span
                  className="text-5xl font-bold leading-none"
                  style={clash}
                >
                  {plan.price}
                </span>

                <span
                  className="text-sm mb-1"
                  style={{
                    color: plan.featured
                      ? "rgba(255,255,255,.4)"
                      : COLORS.muted,
                  }}
                >
                  {plan.duration}
                </span>
              </div>

              <p
                className="mt-6 text-sm leading-7"
                style={{
                  color: plan.featured
                    ? "rgba(255,255,255,.55)"
                    : COLORS.muted,
                }}
              >
                {plan.description}
              </p>

              <div
                className="my-8 h-px"
                style={{
                  background: plan.featured
                    ? "rgba(255,255,255,.08)"
                    : COLORS.border,
                }}
              />

              <ul className="space-y-4 mb-10">
                {plan.features.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-3 text-sm leading-6"
                    style={{
                      color: item.muted
                        ? plan.featured
                          ? "rgba(255,255,255,.2)"
                          : "#B6B6B6"
                        : plan.featured
                        ? "rgba(255,255,255,.7)"
                        : COLORS.muted,
                    }}
                  >
                    <span
                      className="mt-2 h-[5px] flex-shrink-0 w-[5px] rounded-full"
                      style={{
                        background: item.muted
                          ? COLORS.border
                          : COLORS.lime,
                      }}
                    />
                    {item.text}
                  </li>
                ))}
              </ul>

              {plan.featured ? (
                <Link to='/contact'>
                  <BtnLime className="w-full">
                    {plan.button}
                  </BtnLime>
                </Link>
              ) : (
                <Link to='/contact'>
                  <BtnOutline className="w-full">
                    {plan.button}
                  </BtnOutline>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}