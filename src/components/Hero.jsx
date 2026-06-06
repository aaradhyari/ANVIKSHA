import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-emerald/5 via-transparent to-cosmic-navy" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-emerald/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-midnight-evergreen/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs uppercase tracking-[0.3em] text-neon-emerald glass-strong rounded-full">
            Innovation Club Presents
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4"
        >
          <span className="text-frosted-mint">ANVIKSHA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-silver-mist/80 font-light tracking-wide mb-8"
        >
          Where Curiosity Meets Creation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <CountdownTimer targetDate="2026-07-25T09:00:00" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#events"
            className="px-8 py-4 text-lg font-semibold text-cosmic-navy bg-neon-emerald rounded-xl hover:bg-neon-emerald/90 transition-all duration-300 neon-glow"
          >
            Explore Events
          </a>
          <a
            href="#about"
            className="px-8 py-4 text-lg font-semibold text-frosted-mint glass-strong rounded-xl hover:bg-frosted-mint/20 transition-all duration-300 glow-border-hover"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center gap-2 text-xs text-silver-mist/40 uppercase tracking-widest">
            <span className="w-8 h-px bg-silver-mist/20" />
            Scroll to explore
            <span className="w-8 h-px bg-silver-mist/20" />
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-3 text-silver-mist/40"
          >
            <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}