import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to every element inside the returned
 * ref's subtree that matches `selector`, and adds the `visible` class
 * once it scrolls into view — same behaviour as the original vanilla JS:
 *
 *   const obs = new IntersectionObserver(entries => {
 *     entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
 *   }, { threshold: 0.07 });
 *
 * Usage: const ref = useReveal('.scard'); return <div ref={ref}>...cards...</div>
 */
export default function useReveal(selector, deps = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll(selector);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.07 }
    );

    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}
