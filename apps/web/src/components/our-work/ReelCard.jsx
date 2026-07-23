import { useState, useRef, useEffect } from 'react';
import { COLORS, FONT_FAMILIES } from "../shared/FontColors";

const { mono, clash } = FONT_FAMILIES;

const POPUP_WIDTH = 898;
const POPUP_HEIGHT = 551;

export const ReelCard = ({ reel }) => {
  const [isHover, setIsHover] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // unmuted by default
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);
  const innerTimeoutRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = isMuted;
  }, [isMuted]);

  // cleanup any pending timers on unmount
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
      clearTimeout(innerTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHover(true);
      setIsLoading(true);

      innerTimeoutRef.current = setTimeout(() => {
        const v = videoRef.current;
        if (v) {
          v.currentTime = 0;
          v.muted = isMuted;
          v.play().catch(err => console.error("Play failed:", err.name, err.message));
        }
      }, 200);
    }, 150);
  };

  // Only cancels a pending OPEN if the user moves away before the popup shows.
  // Does NOT close an already-open popup — that's done via the close button / backdrop.
  const handleMouseLeaveCard = () => {
    clearTimeout(timeoutRef.current);
  };

  const closePopup = () => {
    clearTimeout(timeoutRef.current);
    clearTimeout(innerTimeoutRef.current);
    setIsHover(false);
    const v = videoRef.current;
    if (v) { v.pause(); v.currentTime = 0; }
  };

  return (
    <>
      <div
        className="group w-[300px] cursor-pointer relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeaveCard}
      >
        {/* Normal Card */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#111]">
          <img
            src={reel.thumbnail}
            alt={reel.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div
            className="absolute top-2 left-2 inline-flex items-center justify-center px-2 py-[3px] z-10"
            style={{ background: COLORS.lime, ...mono }}
          >
            <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-black">
              Add MP4
            </span>
          </div>
          <button className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400 text-xl text-black">
            ▶
          </button>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <h4 className="text-lg font-semibold" style={clash}>{reel.title}</h4>
          <span className="text-sm text-gray-500">{reel.duration}</span>
        </div>
      </div>

      {/* Backdrop + Popup — closed only via close button or backdrop click */}
      {isHover && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[998]"
            onClick={closePopup}
          />

          <div
            className="fixed z-[999] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] bg-black"
            style={{
              width: POPUP_WIDTH,
              height: POPUP_HEIGHT,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <video
              key={reel.video}
              ref={videoRef}
              src={reel.video}
              loop
              playsInline
              autoPlay
              preload="auto"
              muted={isMuted}
              onLoadedData={() => setIsLoading(false)}
              onCanPlay={() => setIsLoading(false)}
              onError={(e) => { console.log("Video error", reel.video, e); }}
              className="w-full h-full object-cover block"
            />

            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={(e) => { e.stopPropagation(); closePopup(); }}
              className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition z-30"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent z-20 flex items-center justify-between">
              <span className="text-white text-sm font-medium">{reel.title}</span>

              <button
                onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                className="h-9 w-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition"
              >
                {isMuted ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c0.03-0.2 0.05-0.41 0.05-0.63zm2.5 0c0 0.94-0.2 1.82-0.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89 0.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-0.67 0.52-1.42 0.93-2.25 1.18v2.06c1.38-0.31 2.63-0.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-0.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89 0.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-0.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};