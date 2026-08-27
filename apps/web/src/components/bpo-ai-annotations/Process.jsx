import { processSteps } from '@/data/bpoAnnotation';
import useReveal from '../../hooks/useReveal';
import { COLORS, FONT_FAMILIES } from '../shared/FontColors';

const { mono, display } = FONT_FAMILIES;

export default function Process() {
  const gridRef = useReveal('.reveal-card');

  return (
    <div
      className="py-10 md:py-14 border-t"
      style={{ background: COLORS.white, borderColor: 'rgba(255,255,255,.06)' }}
    >
      {/* Local styles for the fade-in reveal — scoped here so this
          component has zero external CSS dependencies */}
      <style>{`
        .reveal-card {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity .5s cubic-bezier(.4,0,.2,1), transform .5s cubic-bezier(.4,0,.2,1);
        }
        .reveal-card.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16 mb-12">
        <div className="text-center max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center justify-center gap-2 mb-3 text-[0.62rem] tracking-[0.14em] uppercase"
            style={{ ...mono, color: COLORS.limeDark }}
          >
            <span className="block w-[3px] h-[13px]" style={{ background: COLORS.limeDark }} />
            How We Work
          </div>
          <h2
            className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold leading-[1.08] tracking-tight mb-3"
            style={{ ...display, color: COLORS.black }}
          >
            From brief to delivery<br />in 48 hours.
          </h2>
          <p className="text-[0.9rem] leading-relaxed font-light" style={{ color:'rgb(107, 107, 122)' }}>
            A documented, repeatable process that removes ambiguity and ensures every
            project starts with a shared understanding of quality standards, scope, and timeline.
          </p>
        </div>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px max-w-[1140px] mx-auto"
        style={{ background: 'rgba(255,255,255,.07)' }}
      >
        {processSteps.map((step, i) => (
          <div
            key={step.num}
            className={`reveal-card relative p-7 border-b lg:border-b-0 ${
              i < processSteps.length - 1 ? 'lg:border-r' : ''
            }`}
            style={{ background: COLORS.ink, borderColor: COLORS.border }}
          >
            <span
              className="block mb-4 text-[0.58rem] tracking-[0.14em] uppercase"
              style={{ ...mono, color: COLORS.lime }}
            >
              {step.num}
            </span>
            <h3
              className="text-[0.95rem] font-bold mb-1.5 leading-snug"
              style={{ ...display, color: COLORS.black }}
            >
              {step.title}
            </h3>
            <p className="text-[0.76rem] leading-relaxed font-light" style={{ color: 'rgb(107, 107, 122)' }}>
              {step.desc}
            </p>

            {i < processSteps.length - 1 && (
              <div
                className="hidden lg:block absolute z-10"
                style={{
                  right: '-2px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 18,
                  height: 18,
                  background: COLORS.lime,
                  clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}