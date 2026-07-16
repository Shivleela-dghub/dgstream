import { useState } from "react";
import { COLORS,FONT_FAMILIES } from "./FontColors";
const {mono,clash } = FONT_FAMILIES;


export function BtnLime({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-block cursor-pointer text-[0.78rem] font-extrabold uppercase tracking-[0.04em] px-[1.9rem] py-[0.82rem] ${className}`}
      style={{ ...clash, background: COLORS.lime, color: COLORS.black }}
      {...props}
    >
      {children}
    </button>
  );
}

export function BtnBlack({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-block cursor-pointer text-[0.78rem] font-bold uppercase tracking-[0.04em] px-[1.9rem] py-[0.82rem] ${className}`}
      style={{ ...clash, background: COLORS.black, color: COLORS.white }}
      {...props}
    >
      {children}
    </button>
  );
}

export function BtnOutline({ children, className = "", ...props }) {
  const [hover, setHover] = useState(false);
  return (
    <button
       onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`inline-block cursor-pointer text-[0.78rem] font-extrabold uppercase tracking-[0.04em] px-[1.9rem] py-[0.8rem] border-[1.5px] transition-colors duration-300 ${className}`}
      style={{
        ...clash,
        color: COLORS.black,
        borderColor: hover ? COLORS.black : COLORS.border,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export function Eyebrow({ children, dark = false, center = false }) {
  return (
    <div
      className={`inline-flex items-center gap-[0.55rem] text-[0.7rem] tracking-[0.14em] uppercase ${
        center ? "justify-center" : ""
      }`}
      style={{ ...mono, color: dark ? "rgba(255,255,255,0.45)" : COLORS.black }}
    >
      <span className="block w-[3px] h-[15px] flex-shrink-0" style={{ background: COLORS.lime }} />
      {children}
    </div>
  );
}