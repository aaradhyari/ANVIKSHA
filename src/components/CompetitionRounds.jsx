import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiGlobe, HiRefresh, HiShieldCheck } from 'react-icons/hi';

const rounds = [
  {
    icon: HiGlobe,
    title: 'Round 1: ANVIKSHA',
    subtitle: 'Present-Day World Mysteries',
    color: 'from-neon-emerald/20',
    rules: [
      'Teams analyze a real-world unsolved mystery',
      'Present evidence-based hypotheses',
      '10-minute presentation followed by Q&A',
      'Top 8 teams advance to Round 2',
    ],
    desc: 'Dive into the unknown. Teams are presented with a real-world mystery—from scientific anomalies to historical enigmas—and must construct a compelling, evidence-based hypothesis.',
  },
  {
    icon: HiRefresh,
    title: 'Round 2: RE-NIRMAN',
    subtitle: 'Crisis to Creation',
    color: 'from-solar-clay/20',
    rules: [
      'Teams receive a crisis scenario on the spot',
      'Design an innovative solution in 2 hours',
      'Prototype or blueprint required',
      'Top 4 teams proceed to finals',
    ],
    desc: 'Turn crisis into creation. Given an unforeseen global challenge, teams must rapidly ideate, design, and present a viable solution that balances innovation with practicality.',
  },
  {
    icon: HiShieldCheck,
    title: 'Round 3: The Cipher Symposium',
    subtitle: 'Final Showdown',
    color: 'from-midnight-evergreen/30',
    rules: [
      'Finalists present their complete solution',
      'Panel of expert judges Q&A session',
      'Live audience voting component',
      'Winner announced at closing ceremony',
    ],
    desc: 'The grand finale. Finalists defend their complete innovation journey before a panel of distinguished judges, with audience participation shaping the ultimate verdict.',
  },
];

export default function CompetitionRounds() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="rounds" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-emerald text-sm uppercase tracking-[0.2em]">Competition Rounds</span>
          <h2 className="text-3xl md:text-5xl font-bold text-frosted-mint mt-3">
            Three Stages of{' '}
            <span className="gradient-text">Ingenuity</span>
          </h2>
        </motion.div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {rounds.map((round, i) => (
            <motion.div
              key={round.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className={`w-full text-left glass rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:glow-border-hover ${
                  expanded === i ? 'glow-border' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neon-emerald/10 flex items-center justify-center shrink-0">
                      <round.icon className="w-6 h-6 text-neon-emerald" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-frosted-mint">{round.title}</h3>
                      <p className="text-sm text-solar-clay">{round.subtitle}</p>
                    </div>
                  </div>
                  <HiChevronDown
                    className={`w-5 h-5 text-silver-mist/50 transition-transform duration-300 ${
                      expanded === i ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-neon-emerald/10 mt-4">
                        <p className="text-silver-mist/70 mb-4 leading-relaxed">{round.desc}</p>
                        <ul className="space-y-2">
                          {round.rules.map((rule) => (
                            <li key={rule} className="flex items-center gap-2 text-sm text-silver-mist/60">
                              <span className="w-1.5 h-1.5 rounded-full bg-neon-emerald shrink-0" />
                              {rule}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
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
