import { useEffect, useRef } from 'react';

export default function GlowCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorRef.current.style.left = '0';
        cursorRef.current.style.top = '0';
      }
    };

    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor-glow"
      className="fixed pointer-events-none z-[9999] w-10 h-10 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(66, 232, 155, 0.3) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        left: 0,
        top: 0,
        transition: 'transform 0.1s ease-out',
      }}
    />
  );
}