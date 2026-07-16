import { INDUSTRIES } from "@/data/industryReels";
import { Eyebrow } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { useState } from "react";

const { mono, clash } = FONT_FAMILIES;


export default function OurStory() {
    return (
        <div className="py-24 border-t border-[#E2E2DC]">
            <div className="max-w-[1140px] mx-auto px-6 md:px-16">

                <div className="grid grid-cols-[420px_1fr] gap-28">

                    {/* Left */}
                    <div>
                        <Eyebrow>Our Story</Eyebrow>

                        <h2
                            className="mt-6 leading-[0.92]"
                            style={{
                                ...clash,
                                fontSize: "clamp(3rem,3.2vw,4.5rem)",
                                letterSpacing: "-0.02em",
                                color: COLORS.black,
                            }}
                        >
                            Founded on a
                            <br />
                            simple idea.
                        </h2>
                    </div>

                    {/* Right */}
                    <div className="space-y-12">

                        <p
                            className="text-lg leading-[1.9rem] mb-6"
                            style={{ color: COLORS.muted }}
                        >
                            Most agencies pick a side. The creative shops make beautiful work
                            that nobody measures. The performance shops make measurable work
                            that nobody remembers. <strong style={{ color: COLORS.black }}>DG Stream</strong>{" "}
                            exists because we didn't think that trade-off should exist.
                        </p>

                        <p
                            className="text-lg leading-[1.9rem] mb-6"
                            style={{ color: COLORS.muted }}
                        >
                            We built a team of strategists, designers, engineers, and growth
                            marketers who sit in the same room — so every campaign starts with a
                            creative idea worth making, and ends with a number worth reporting.
                        </p>

                        <p
                            className="text-lg leading-[1.9rem] mb-6"
                            style={{ color: COLORS.muted }}
                        >
                            Today we work with ambitious brands across a range of industries,
                            covering everything from SEO and paid media to full product design,
                            branding, software, and AI automation — as one connected system, not
                            a stack of separate vendors.
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}