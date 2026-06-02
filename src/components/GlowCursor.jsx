import { useEffect, useRef } from 'react';

export default function GlowCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] w-8 h-8 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(66, 232, 155, 0.4) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease-out',
        left: 0,
        top: 0,
      }}
    />
  );
}
