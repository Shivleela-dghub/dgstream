import { PRICING_PLANS } from "@/data/choosePlanBrandGrowth";
import { Eyebrow } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
import PricingCard from "./PricingCard";
const { mono, clash } = FONT_FAMILIES;
export default function ChoosePlan(){
    return (
    <div className="py-10">
        <div className="max-w-[1140px] mx-auto px-6 md:px-16">
            <div>
                <Eyebrow>Choose Your Plan</Eyebrow>
                <h2 className="font-extrabold leading-[1.08] mt-4" style={{ ...clash, fontSize: "clamp(1.8rem,2.8vw,2.6rem)", letterSpacing: "-0.02em" }}>
                    Every tier adds a real
                    <br />
                    capability, not filler.
                </h2>
            </div> 
            {/* Cards */}

            <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
                {PRICING_PLANS.map((plan) => (
                    <PricingCard
                    key={plan.id}
                    plan={plan}
                    />
                ))}
            </div>
            <div className="mt-20 border-t border-[#E5E5E0] pt-10">
                <p className="text-center text-[0.8rem] leading-4 text-[#6B6B7A] whitespace-nowrap">
                    All plans run month-to-month. Managed ad spend is billed directly to your
                    ad accounts on top of the management fee — every dollar goes to media,
                    not markup.
                </p> 
            </div>
        </div>
        
 
        </div>
    )
}