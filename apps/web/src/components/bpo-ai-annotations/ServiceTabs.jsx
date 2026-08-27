import { useState } from 'react';
import { servicePanels, panelContent } from '@/data/bpoAnnotation';
import useReveal from '../../hooks/useReveal';
import { COLORS, FONT_FAMILIES } from '../shared/FontColors';

const { mono, display } = FONT_FAMILIES;

function ServiceCard({ icon, title, desc, tags }) {
  return (
    <div
      className="reveal-card border bg-white p-7 md:p-8 transition-shadow duration-200 hover:shadow-lg"
      style={{ borderColor: COLORS.border }}
    >
      <div
        className="w-9 h-9 border flex items-center justify-center text-[0.62rem] mb-5 tracking-wide"
        style={{ borderColor: COLORS.border, color: COLORS.limeDark, ...mono }}
      >
        {icon}
      </div>
      <h3
        className="text-[1rem] font-bold mb-2 leading-snug"
        style={{ ...display, color: COLORS.black }}
      >
        {title}
      </h3>
      <p
        className="text-[0.8rem] leading-relaxed mb-4 font-light"
        style={{ color: COLORS.muted }}
      >
        {desc}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag, i) => (
          <span
            key={tag}
            className="text-[0.52rem] tracking-wider uppercase px-2.5 py-1 border"
            style={{
              ...mono,
              borderColor: i === 0 ? COLORS.limeDark : COLORS.border,
              color: i === 0 ? COLORS.limeDark : COLORS.muted,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ServiceTabs() {
  const [activePanel, setActivePanel] = useState('bpo');
  const content = panelContent[activePanel];

  // Re-runs the reveal animation whenever the active panel changes,
  // mirroring the original tab-click handler that re-triggered .visible
  const gridRef = useReveal('.reveal-card', [activePanel]);

  return (
    <>
      {/* Local styles for the reveal animation + hiding the tab scrollbar —
          scoped here so this component has zero external CSS dependencies */}
      <style>{`
        .reveal-card {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity .5s cubic-bezier(.4,0,.2,1), transform .5s cubic-bezier(.4,0,.2,1);
        }
        .reveal-card.visible { opacity: 1; transform: translateY(0); }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* SERVICE NAV */}
      <div
        id="services"
        className="sticky top-[62px] z-[150] backdrop-blur border-t border-b"
        style={{ background: 'rgba(255,255,255,.97)', borderColor: COLORS.border }}
      >
        <div className="max-w-[1140px] mx-auto flex overflow-x-auto px-6 md:px-10 lg:px-16 no-scrollbar">
          {servicePanels.map((panel) => {
            const isActive = activePanel === panel.id;
            return (
              <button
                key={panel.id}
                onClick={() => setActivePanel(panel.id)}
                className="relative whitespace-nowrap px-5 py-3.5 text-[0.6rem] tracking-[0.1em] uppercase transition-colors"
                style={{ ...mono, color: isActive ? COLORS.black : COLORS.muted }}
              >
                {panel.label}
                <span
                  className="absolute left-0 right-0 -bottom-px h-[2px] transition-opacity duration-300"
                  style={{ background: COLORS.limeDark, opacity: isActive ? 1 : 0 }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* PANEL */}
      <div className="bg-white">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12 md:mb-14">
            <div>
              <div
                className="inline-flex items-center gap-2 mb-3 text-[0.62rem] tracking-[0.14em] uppercase"
                style={{ ...mono, color: COLORS.limeDark }}
              >
                <span className="block w-[3px] h-[13px]" style={{ background: COLORS.limeDark }} />
                {content.eyebrow}
              </div>
              <h2
                className="text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] font-bold leading-[1.08] tracking-tight"
                style={{ ...display, color: COLORS.black }}
              >
                {content.heading[0]}<br />{content.heading[1]}
              </h2>
            </div>
            <p className="text-[0.9rem] leading-relaxed font-light" style={{ color: COLORS.muted }}>
              {content.intro}
            </p>
          </div>

          <div
            key={activePanel}
            ref={gridRef}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${content.gridCols === 2 ? '' : 'lg:grid-cols-3'}`}
          >
            {content.cards.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}