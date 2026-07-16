import { FONT_FAMILIES } from "../shared/FontColors";

const { clash } = FONT_FAMILIES;

const CLIENTS = [
  "PORTLINE",
  "ARCADE",
  "SUNDAY GOODS",
  "KESTREL",
  "MERIDIAN",
  "FOLIO",
  "IRIS",
];

export default function ClientsMarquee() {
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <>
      {/* Animation Styles */}
      <style>{`
        @keyframes marqueeLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .marquee-left {
          animation: marqueeLeft 30s linear infinite;
        }

        .marquee-right {
          animation: marqueeRight 30s linear infinite;
        }

        .marquee-wrapper:hover .marquee-left,
        .marquee-wrapper:hover .marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      <section className="marquee-wrapper overflow-hidden bg-[#0A0A0F]">

        {/* Row 1 */}

        <div className="mt-10 overflow-hidden whitespace-nowrap">
          <div className="marquee-left flex w-max">
            {items.map((item, index) => (
              <div
                key={`top-${index}`}
                className="mx-10 flex items-center gap-[1.6rem]"
              >
                <h3
                  className="uppercase font-semibold text-[1.5rem] leading-none tracking-tight text-white/85 transition-colors duration-300 hover:text-white"
                  style={clash}
                >
                  {item}
                </h3>

                <span className="text-[1.5rem] font-black text-lime-400">
                  /
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gap */}

        <div className="h-10" />

        {/* Row 2 */}

        <div className="mb-10 overflow-hidden whitespace-nowrap">
          <div className="marquee-right flex w-max">
            {items.map((item, index) => (
              <div
                key={`bottom-${index}`}
                className="mx-10 flex items-center gap-10"
              >
                <h3
                  className="uppercase font-semibold text-[1.5rem] leading-none tracking-tight text-white/85 transition-colors duration-300 hover:text-white"
                  style={clash}
                >
                  {item}
                </h3>

                <span className="text-[1.5rem] font-black text-lime-400">
                  /
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}