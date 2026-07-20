import { Eyebrow } from "../shared/Button";
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";
const { mono, clash } = FONT_FAMILIES;

export default function Hero() {
    return (
        <div className="max-w-[1140px] mx-auto px-6 md:px-16 py-[5rem] pb-[4rem]">
            <div>
                <div className="mt-10 flex items-center gap-[0.65rem] mb-6 text-[0.65rem] tracking-[0.14em] uppercase" style={{ ...mono, color: COLORS.muted }}>
                    <span className="block w-[3px] h-[14px] uppercase" style={{ background: COLORS.lime }} />
                    get in touch
                </div>
                {/* Heading */}
                <h1 className="mt-10 text-[64px] leading-[0.95] font-black tracking-tight text-slate-950">
                    Let's talk about your
                    <br />
                    brand.
                </h1>
                <p className="max-w-[520px] mt-10 text-[1rem] leading-[1.8rem]" style={{ color: COLORS.muted }}>
                    Tell us what you're working on. We review every brief personally and come back with a clear plan — scope, timeline, and price — within 24 hours.
                </p>
            </div>
        </div>
    )
}