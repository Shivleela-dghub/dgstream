import { useEffect, useState } from "react";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
const { mono, clash } = FONT_FAMILIES;
import { PROCESS_STEPS } from "../../data/ProcessSteps";
import { Eyebrow } from "../shared/Button";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10 md:py-14 lg:py-16" style={{ color: COLORS.white }}>
      <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 lg:items-end mb-10 md:mb-12 lg:mb-14">
          <div>
            <div
              className="inline-flex items-center gap-[0.55rem] text-[0.7rem] tracking-[0.14em] uppercase mb-[0.85rem]"
              style={{ ...mono, color: "rgba(255,255,255,0.45)" }}
            >
              <Eyebrow>How a Project Runs</Eyebrow>
            </div>
            <h2
              className="font-extrabold leading-[1.12] md:leading-[1.08] mt-3 md:mt-4"
              style={{ ...clash, fontSize: "clamp(1.6rem,5vw,2.6rem)", letterSpacing: "-0.02em" }}
            >
              From brief to live in four weeks.
            </h2>
          </div>
          <p
            className="mt-0 lg:mt-10 text-base md:text-lg leading-7 md:leading-8 text-slate-600"
            style={{ color: COLORS.muted }}
          >
            Fixed brief, fixed timeline, fixed price. No open-ended creative
            retainers — just a clear scope and a clear delivery date. Growth
            marketing is the exception; that runs monthly.
          </p>
        </div>

        <>
          {/* ===== DESKTOP: Timeline + Cards (lg and up) ===== */}

          {/* Process Track */}
          <div className="relative hidden lg:block mb-16">
            {/* Background Line */}
            <div
              className="absolute left-0 right-0 top-7 h-[2px]"
              style={{ background: "rgba(255,255,255,.08)" }}
            />

            {/* Progress Line */}
            <div
              className="absolute left-0 top-7 h-[2px] bg-lime-400 transition-all ease-linear"
              style={{
                width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%`,
                transitionDuration: "2200ms",
              }}
            />

            {/* Steps */}
            <div className="relative z-20 flex justify-between">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex flex-col items-center">
                    <div
                      className={`relative flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-500 ${activeStep === index
                          ? "scale-110 border-lime-400 bg-lime-400"
                          : "scale-100 border-white/15 bg-[#0E0E12]"
                        }`}
                    >
                      {activeStep === index && (
                        <div className="absolute inset-0 animate-ping rounded-full border-2 border-lime-400 opacity-30" />
                      )}
                      <div
                        className={`absolute inset-0 rounded-full transition-all duration-500 ${activeStep === index ? "shadow-[0_0_45px_rgba(200,255,0,.55)]" : ""
                          }`}
                      />
                      {Icon && (
                        <Icon
                          className={`relative z-10 h-6 w-6 ${activeStep === index ? "text-black" : "text-muted"
                            }`}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cards */}
          <div className="hidden lg:flex justify-between items-start gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.title}
                className={`w-[230px] min-h-[500px] flex flex-col border transition-all duration-700 ${activeStep === index
                    ? "border-lime-400 bg-white p-6"
                    : "border-black/10 px-6 py-5"
                  }`}
              >
                <p
                  className="text-xs uppercase tracking-[0.18em] mb-3"
                  style={{
                    ...mono,
                    color: activeStep === index ? COLORS.lime : "rgb(107, 107, 122)",
                  }}
                >
                  {step.label}
                </p>

                <h3
                  className="mb-2 h-[40px] text-[18px] font-bold whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-500"
                  style={{
                    ...clash,
                    color: activeStep === index ? COLORS.black : "rgba(107, 107, 122)",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="mt-2 text-[14px] leading-6 text-left"
                  style={{ color: "rgba(107, 107, 122)" }}
                >
                  {step.desc}
                </p>

                <div
                  className={`h-[120px] transition-opacity duration-500 ${activeStep === index ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <div
                    className="w-[150px] border p-2"
                    style={{ background: COLORS.white, borderColor: COLORS.lime }}
                  >
                    <p
                      className="mb-2 text-[11px] uppercase tracking-[0.18em]"
                      style={{ ...mono, color: COLORS.lime }}
                    >
                      Deliverable
                    </p>
                    <p className="text-sm leading-6 text-left" style={{ color: COLORS.black }}>
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== MOBILE / TABLET: Vertical stacked cards (below lg) ===== */}

          <div className="flex lg:hidden flex-col gap-4">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <div
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={`flex gap-4 border p-4 md:p-5 transition-all duration-500 cursor-pointer ${isActive ? "border-lime-400 bg-white" : "border-white/10 bg-transparent"
                    }`}
                >
                  {/* Icon */}
                  <div
                    className={`relative flex h-11 w-11 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isActive
                        ? "border-lime-400 bg-lime-400"
                        : "border-white/15 bg-[#0E0E12]"
                      }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 animate-ping rounded-full border-2 border-lime-400 opacity-30" />
                    )}
                    {Icon && (
                      <Icon
                        className={`relative z-10 h-5 w-5 ${isActive ? "text-black" : "text-muted"}`}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[0.65rem] uppercase tracking-[0.16em] mb-1"
                      style={{
                        ...mono,
                        color: isActive ? COLORS.lime : "rgb(107, 107, 122)",
                      }}
                    >
                      {step.label}
                    </p>

                    <h3
                      className="text-[15px] md:text-[17px] font-bold transition-colors duration-500"
                      style={{
                        ...clash,
                        color: isActive ? COLORS.black : "rgba(255,255,255,0.85)",
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="mt-1.5 text-[13px] md:text-[14px] leading-6"
                      style={{ color: isActive ? "rgba(107,107,122,1)" : "rgba(255,255,255,0.45)" }}
                    >
                      {step.desc}
                    </p>

                    {isActive && (
                      <div
                        className="mt-3 w-full sm:w-[180px] border p-2"
                        style={{ background: COLORS.white, borderColor: COLORS.lime }}
                      >
                        <p
                          className="mb-1.5 text-[10px] uppercase tracking-[0.16em]"
                          style={{ ...mono, color: COLORS.lime }}
                        >
                          Deliverable
                        </p>
                        <p className="text-[13px] leading-6" style={{ color: COLORS.black }}>
                          {step.deliverable}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress dots — shown on all screens */}
          <div className="mt-8 md:mt-10 lg:mt-14 flex justify-center gap-3">
            {PROCESS_STEPS.map((_, index) => (
              <button key={index} onClick={() => setActiveStep(index)} className="group">
                <div
                  className={`h-[3px] w-8 md:w-10 rounded-full transition-all duration-500 ${index <= activeStep ? "bg-lime-400" : "bg-white/15"
                    }`}
                />
              </button>
            ))}
          </div>
        </>
      </div>
    </div>
  );
}