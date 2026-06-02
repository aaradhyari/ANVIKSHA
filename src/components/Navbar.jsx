import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rounds', href: '#rounds' },
  { label: 'Rules', href: '#rules' },
  { label: 'Judging', href: '#judging' },
  { label: 'Workshop', href: '#workshop' },
  { label: 'Team', href: '#team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-neon-emerald/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-lg md:text-xl font-bold text-frosted-mint">
            <span className="text-neon-emerald">&lt;</span>
            ANVIKSHA
            <span className="text-neon-emerald">/&gt;</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-silver-mist/80 hover:text-neon-emerald transition-colors duration-200 rounded-lg hover:bg-neon-emerald/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              className="ml-3 px-5 py-2 text-sm font-semibold text-cosmic-navy bg-neon-emerald rounded-lg hover:bg-neon-emerald/90 transition-all duration-200 neon-glow"
            >
              Register
            </a>
          </div>

          <button
            className="md:hidden text-frosted-mint p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cosmic-navy/90 backdrop-blur-lg overflow-hidden border-b border-neon-emerald/10"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-silver-mist/80 hover:text-neon-emerald hover:bg-neon-emerald/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#register"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-center font-semibold text-cosmic-navy bg-neon-emerald rounded-lg mt-2"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
