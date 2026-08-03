import { growthStack } from "@/data/growthStack";
import { Eyebrow } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";

const { mono, clash } = FONT_FAMILIES;

export default function GrowthStack() {
    return (
        <div className="py-10 md:py-14 lg:py-16">
            <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16">
                <div>
                    <Eyebrow>Growth Stack</Eyebrow>
                    <h2
                        className="font-extrabold leading-[1.15] md:leading-[1.08] mt-3 md:mt-4"
                        style={{ ...clash, fontSize: "clamp(1.6rem,5vw,2.6rem)", letterSpacing: "-0.02em" }}
                    >
                        Every channel.
                        <br className="hidden sm:block" /> One team.
                    </h2>
                </div>

                {/* card section */}
                <div className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-0 md:border-l md:border-t border-[#E2E2DC]">
                    {growthStack.map((service, index) => (
                        <div
                            key={service.title}
                            className={`
                group
                border border-[#E2E2DC] md:border-0 md:border-r md:border-b
                p-6 md:p-7 lg:p-8
                transition-all
                duration-300
                hover:bg-[#EFEFEB]
                ${index === 3 ? "bg-[#eef7cf]" : "bg-[#F5F5F2]"}
              `}
                        >
                            <p
                                className="uppercase tracking-[0.22em] md:tracking-[0.28em] text-[0.58rem] md:text-[0.62rem] mb-5 md:mb-8"
                                style={{ ...mono, color: "#A3E000" }}
                            >
                                {service.category}
                            </p>

                            <h3
                                className="text-[1.02rem] md:text-[1.12rem] font-bold mb-3 md:mb-4 transition-colors duration-300 group-hover:text-[#0A0A0F]"
                                style={clash}
                            >
                                {service.title}
                            </h3>

                            <p className="text-[0.82rem] md:text-[0.86rem] leading-6" style={{ color: COLORS.muted }}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}