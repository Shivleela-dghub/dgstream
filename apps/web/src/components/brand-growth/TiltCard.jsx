import { useRef, useState } from "react";

/**
 * 3D tilt hover card.
 * - Rotates toward the cursor based on pointer position within the card
 * - Glow/spotlight follows the cursor
 * - Scales up + shadow lifts on hover, snaps back on leave
 */
export default function TiltCard({
  children,
  maxTilt = 14,     // max rotation in degrees
  scale = 1.04,      // hover scale
  glare = true,      // enable spotlight glow
  className = "",
}) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    // cursor position within the card, 0 -> 1
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    // convert to -0.5 -> 0.5, then to rotation degrees
    const rotateY = (px - 0.5) * 2 * maxTilt;   // left/right tilt
    const rotateX = -(py - 0.5) * 2 * maxTilt;  // up/down tilt

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
    });

    setGlarePos({ x: px * 100, y: py * 100, opacity: 0.35 });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform:
        "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    });
    setGlarePos((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-xl transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {/* spotlight glare that follows the cursor */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.35), transparent 55%)`,
          }}
        />
      )}

      {/* card content, sits above the glare layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
