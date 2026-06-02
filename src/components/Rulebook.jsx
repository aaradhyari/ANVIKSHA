import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const rules = [
  { q: 'Who can participate?', a: 'Any student from grades 9-12 enrolled in the school. Teams of 3-4 members.' },
  { q: 'What is the registration fee?', a: 'Registration is free for all participants. Limited to first 30 teams.' },
  { q: 'How are teams evaluated?', a: 'Teams are judged on innovation, research depth, feasibility, presentation quality, teamwork, and Q&A performance.' },
  { q: 'Can we bring external materials?', a: 'Laptops and presentation tools are allowed. External references must be cited.' },
  { q: 'What is the dress code?', a: 'Smart casual / semi-formal. Team coordination is encouraged.' },
  { q: 'Are there prizes?', a: 'Yes. Winners receive trophies, certificates, and mentorship opportunities.' },
];

export default function Rulebook() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="rules" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-emerald text-sm uppercase tracking-[0.2em]">Rulebook</span>
          <h2 className="text-3xl md:text-5xl font-bold text-frosted-mint mt-3">
            Guidelines &{' '}
            <span className="gradient-text">Policies</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {rules.map((rule, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full text-left glass rounded-xl p-5 transition-all duration-300 cursor-pointer hover:glow-border-hover ${
                  openIndex === i ? 'glow-border' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-frosted-mint font-medium">{rule.q}</span>
                  <HiChevronDown
                    className={`w-5 h-5 text-silver-mist/40 transition-transform duration-300 shrink-0 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-silver-mist/60 text-sm mt-3 pt-3 border-t border-neon-emerald/10 leading-relaxed"
                    >
                      {rule.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
