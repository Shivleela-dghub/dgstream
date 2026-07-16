import { Eyebrow,BtnLime,BtnOutline} from "../shared/Button";
import { COLORS,FONT_FAMILIES} from "../shared/FontColors";
const { mono, clash } = FONT_FAMILIES;

export default function CTA(){
    return (
         <div className="py-20 text-center border-t border-[#E5E5E5]">
        <div className="max-w-[1140px] mx-auto px-6 md:px-16">
            <Eyebrow center>Start a Project</Eyebrow>
            <h2
              className="font-extrabold leading-[1.08] mt-4 mb-4"
              style={{ ...clash, fontSize: "clamp(1.8rem,3vw,2.8rem)", letterSpacing: "-0.02em", color: COLORS.black }}
            >Want to work with us?
            </h2>
            <p className="mx-auto text-center text-[0.95rem] font-light leading-[1.8] mb-8" style={{ color: COLORS.muted }}>
              Tell us about your brand and where you want it to go. We'll come back with a clear plan — scope, timeline, and price — within 24 hours.
            </p>
            <div className="flex gap-[0.85rem] justify-center flex-wrap">
              <BtnLime>send your brief</BtnLime>
              <BtnOutline>book a 30 min call</BtnOutline>
            </div>
            <div className="flex justify-center gap-8 flex-wrap mt-7">
              {["Response within 24 hours", "No long-term contracts on project work", "Senior team on every project"].map((t) => (
                <span key={t} className="flex items-center gap-[0.4rem] text-[0.6rem] tracking-[0.1em] uppercase" style={{ ...mono, color: COLORS.muted }}>
                  <span style={{ color: COLORS.limeDark, fontSize: "0.65rem" }}>✓</span>
                  {t}
                </span>
              ))}
            </div>
         
        </div>
      </div>
    )
}