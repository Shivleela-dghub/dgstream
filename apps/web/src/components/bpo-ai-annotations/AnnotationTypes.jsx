import { annotationTypes } from '@/data/bpoAnnotation';
import useReveal from '../../hooks/useReveal';
import { COLORS, FONT_FAMILIES } from '../shared/FontColors';

const { mono, display } = FONT_FAMILIES;

export default function AnnotationTypes() {
  const headerRef = useReveal('.reveal-item');
  const gridRef = useReveal('.reveal-card');

  return (
    <div
      id="annotation-types"
      className="py-16 md:py-20 border-t"
      style={{ background: COLORS.surface, borderColor: COLORS.border }}
    >
      {/* Local styles for the fade-in reveal — scoped here so this
          component has zero external CSS dependencies */}
      <style>{`
        .reveal-item, .reveal-card {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity .5s cubic-bezier(.4,0,.2,1), transform .5s cubic-bezier(.4,0,.2,1);
        }
        .reveal-item.visible, .reveal-card.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <div ref={headerRef} className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16 mb-12 md:mb-14">
        <div className="reveal-item grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          <div>
            <div
              className="inline-flex items-center gap-2 mb-3 text-[0.62rem] tracking-[0.14em] uppercase"
              style={{ ...mono, color: COLORS.limeDark }}
            >
              <span className="block w-[3px] h-[13px]" style={{ background: COLORS.limeDark }} />
              Annotation Formats
            </div>
            <h2
              className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold leading-[1.08] tracking-tight"
              style={{ ...display, color: COLORS.black }}
            >
              Every annotation type.<br />Every data format.
            </h2>
          </div>
          <p className="text-[0.9rem] leading-relaxed font-light" style={{ color: COLORS.muted }}>
            Our teams are trained across all major annotation types and tooling
            platforms. Hover each to see what we produce.
          </p>
        </div>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px max-w-[1140px] mx-auto"
        style={{ background: COLORS.border }}
      >
        {annotationTypes.map((item) => (
          <div
            key={item.num}
            className="reveal-card group bg-white p-7 transition-colors duration-200 hover:bg-[#0A0A0F]"
          >
            <span
              className="block mb-3.5 text-[0.58rem] tracking-[0.14em] uppercase transition-colors duration-200 group-hover:text-[#C8FF00]"
              style={{ ...mono, color: COLORS.limeDark }}
            >
              {item.num}
            </span>
            <div
              className="text-[0.98rem] font-bold mb-2 transition-colors duration-200 group-hover:text-white"
              style={{ ...display, color: COLORS.black }}
            >
              {item.title}
            </div>
            <div
              className="text-[0.78rem] leading-relaxed font-light mb-3.5 transition-colors duration-200 group-hover:text-white/40"
              style={{ color: COLORS.muted }}
            >
              {item.desc}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.52rem] tracking-wider uppercase px-2.5 py-1 border transition-colors duration-200 group-hover:border-[rgba(200,255,0,.25)] group-hover:text-[#8AB300]"
                  style={{ ...mono, borderColor: COLORS.border, color: COLORS.muted }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}