import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const animate = () => {
      ringPos.current.x += (mouseRef.current.x - ringPos.current.x) * 0.1;
      ringPos.current.y += (mouseRef.current.y - ringPos.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px';
        ringRef.current.style.top = ringPos.current.y + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    const observe = () => {
      const interactables = document.querySelectorAll('button, a, input, textarea, [data-cursor]');
      interactables.forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    observe();
    const obs = new MutationObserver(observe);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      {/* Inner dot: crosshair style */}
      <div ref={dotRef} style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s, height 0.2s, background 0.2s',
        width: isHovering ? '6px' : '4px',
        height: isHovering ? '6px' : '4px',
        background: 'var(--cyan)',
        boxShadow: '0 0 8px var(--cyan)',
      }} />
      {/* Outer ring: square tactical reticle */}
      <div ref={ringRef} style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 99998,
        transform: 'translate(-50%, -50%) rotate(45deg)',
        transition: 'width 0.15s, height 0.15s, border-color 0.2s, opacity 0.2s',
        width: isHovering ? '28px' : '20px',
        height: isHovering ? '28px' : '20px',
        border: `1px solid ${isHovering ? 'var(--cyan)' : 'rgba(0,212,255,0.5)'}`,
        boxShadow: isHovering ? '0 0 12px rgba(0,212,255,0.3)' : 'none',
      }} />
    </>
  );
}
