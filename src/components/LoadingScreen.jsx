import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-cosmic-navy"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="text-5xl md:text-7xl font-black text-frosted-mint tracking-tight">
                <span className="text-neon-emerald">&lt;</span>
                ANVIKSHA
                <span className="text-neon-emerald">/&gt;</span>
              </span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="mt-8 h-[2px] bg-gradient-to-r from-neon-emerald via-solar-clay to-neon-emerald mx-auto"
              style={{ maxWidth: 200 }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 text-sm text-silver-mist/50 uppercase tracking-[0.3em]"
            >
              Where Curiosity Meets Creation
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
