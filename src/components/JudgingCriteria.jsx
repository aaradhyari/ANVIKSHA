import { motion } from 'framer-motion';

const criteria = [
  { label: 'Innovation', value: 95, color: 'from-neon-emerald to-midnight-evergreen' },
  { label: 'Research', value: 90, color: 'from-neon-emerald to-midnight-evergreen' },
  { label: 'Feasibility', value: 85, color: 'from-solar-clay to-midnight-evergreen' },
  { label: 'Presentation', value: 80, color: 'from-solar-clay to-midnight-evergreen' },
  { label: 'Teamwork', value: 75, color: 'from-midnight-evergreen to-neon-emerald' },
  { label: 'Q&A Performance', value: 70, color: 'from-midnight-evergreen to-neon-emerald' },
];

export default function JudgingCriteria() {
  return (
    <section id="judging" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-emerald text-sm uppercase tracking-[0.2em]">Judging Criteria</span>
          <h2 className="text-3xl md:text-5xl font-bold text-frosted-mint mt-3">
            What the Judges{' '}
            <span className="gradient-text">Look For</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {criteria.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-frosted-mint font-medium">{item.label}</span>
                <span className="text-neon-emerald font-mono-custom text-sm">{item.value}%</span>
              </div>
              <div className="w-full h-2 bg-cosmic-navy rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                  className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                  style={{ boxShadow: '0 0 10px rgba(66, 232, 155, 0.3)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
