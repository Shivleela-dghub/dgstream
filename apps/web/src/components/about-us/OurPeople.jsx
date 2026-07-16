import { Eyebrow } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import { PEOPLE } from "@/data/aboutUsPeople";
const { clash, mono } = FONT_FAMILIES;

export default function OurPeople() {
    return (
        <div className="py-24 border-t border-[#E2E2DC]">
            <div className="max-w-[1140px] mx-auto px-6 md:px-16">
                <div className="grid grid-cols-[680px_420px]">    
                    <div>
                        <Eyebrow>The People</Eyebrow>

                        <h2
                            className="mt-6 leading-[0.95]"
                            style={{
                                ...clash,
                                fontSize: "clamp(3rem,3.2vw,4.6rem)",
                                letterSpacing: "-0.02em",
                            }}
                        >
                        One team,every discipline<br />
                            you need.
                        </h2>
                    </div>
                    <p
                        className="mt-20 text-lg leading-[1.8rem]"
                        style={{ color: COLORS.muted }}
                    >
                        No outsourced vendors stitched together<br />— every discipline sits in-house.
                    </p>
                </div>
                <div className="grid grid-cols-4 gap-6 mt-20">
                    {PEOPLE.map((item, index) => {
                        const Icon = item.icon;
                        return (

                        
                        <div
                            key={item.id}
                            className={`
                                relative
                                min-h-[280px]
                                px-10
                                py-12
                                border
                                border-[#E2E2DC]
                                transition-all
                                duration-500
                                
                                `} 
                        >
                             {/* Icon */}
                            <Icon className="w-10 h-10" />
                            
                            <h3
                                className="mt-5 text-[1.08rem] font-black"
                                style={clash}
                            >
                                {item.title}
                            </h3>
                            <p
                                className="mt-5 text-[0.8rem] leading-[1.65rem]"
                                style={{ color: COLORS.muted }}
                            >
                                {item.description}
                            </p>
                        </div>
                        )
})}
                </div>
            </div>
        </div>


    )
}