import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function SectionDivider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

  return (
    <div ref={ref} className="relative h-16 md:h-20 flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neon-emerald/30 to-transparent" />
          <div className="w-2 h-2 rotate-45 border border-neon-emerald/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neon-emerald/30 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}
