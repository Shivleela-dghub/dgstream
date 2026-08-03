import { Eyebrow } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { APPROACH } from "@/data/aboutUsApproach";
const { clash, mono } = FONT_FAMILIES;

export default function OurApproach() {
    return (
        <div className="py-14 sm:py-20 lg:py-24 border-t border-[#E2E2DC]">
            <div className="max-w-[1140px] mx-auto px-6 md:px-16">

                <div>
                    <Eyebrow>Our Approach</Eyebrow>

                    <h2
                        className="mt-6 leading-[0.95]"
                        style={{
                            ...clash,
                            fontSize: "clamp(2.5rem,7vw,4.6rem)",
                            letterSpacing: "-0.04em",
                        }}
                    >
                        From brief to shipped, four
                        <br />
                        stages.
                    </h2>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 lg:mt-20 border-t border-l border-[#E2E2DC]">
                    {APPROACH.map((item, index) => (
                        <div
                            key={item.id}
                            className={`
                                relative
                                min-h-[220px]
                                sm:min-h-[260px]
                                lg:min-h-[280px]
                                px-6
                                sm:px-8
                                lg:px-10
                                py-10
                                lg:py-12
                                border-r
                                border-b
                                border-[#E2E2DC]
                                bg-[var(--surface2)]
                                hover:bg-[#F5F5F2]
                                transition-all
                                duration-500
                                
                                `}
                        >
                            <p
                                className="relative z-1 text-xs tracking-[0.25em] uppercase"
                                style={{
                                    ...mono,
                                    color: COLORS.limeDark,
                                }}
                            >
                                {item.id}
                            </p>
                            <h3
                                className="relative z-1 mt-5 text-[1.08rem] font-black"
                                style={clash}
                            >
                                {item.title}
                            </h3>
                            <p
                                className="relative z-1 mt-5 text-sm leading-[1.65rem]"
                                style={{ color: COLORS.muted }}
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}