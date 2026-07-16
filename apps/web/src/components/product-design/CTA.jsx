import { Eyebrow,BtnLime,BtnOutline} from "../shared/Button";
import { COLORS,FONT_FAMILIES} from "../shared/FontColors";
const { mono, clash } = FONT_FAMILIES;

export default function CTA(){
    return (
         <div className="py-20 text-center">
        <div className="max-w-[1140px] mx-auto px-6 md:px-16">
          <div className="max-w-[700px] mx-auto">
            <Eyebrow center>Start a Project</Eyebrow>
            <h2
              className="font-extrabold leading-[1.08] mt-4 mb-4"
              style={{ ...clash, fontSize: "clamp(1.8rem,3vw,2.8rem)", letterSpacing: "-0.02em", color: COLORS.black }}
            >Ready to build something your competitors can't ignore?
            </h2>
            <p className="text-[0.95rem] font-light leading-[1.8] mb-8" style={{ color: COLORS.muted }}>
              Send us your brief. We review every project personally and come back with a clear plan — scope,
              timeline, and price — within 24 hours.
            </p>
            <div className="flex gap-[0.85rem] justify-center flex-wrap">
              <BtnLime>Send Your Brief</BtnLime>
              <BtnOutline>Book a 30-min Call</BtnOutline>
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
      </div>
    )
}