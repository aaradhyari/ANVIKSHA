import { motion } from 'framer-motion';
import { HiMicrophone, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const speakers = [
  {
    name: 'Dr. Aris Thorne',
    role: 'Quantum Computing Researcher',
    topic: 'The Future of Computation',
    image: null,
    initials: 'AT',
  },
  {
    name: 'Prof. Maya Larsen',
    role: 'Biotech Innovator',
    topic: 'Biology Meets AI',
    image: null,
    initials: 'ML',
  },
  {
    name: 'Eng. Rohan Kapoor',
    role: 'Sustainable Engineering Lead',
    topic: 'Green Tech Revolution',
    image: null,
    initials: 'RK',
  },
];

export default function Workshop() {
  return (
    <section id="workshop" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-emerald text-sm uppercase tracking-[0.2em]">Workshop</span>
          <h2 className="text-3xl md:text-5xl font-bold text-frosted-mint mt-3">
            Meet Our{' '}
            <span className="gradient-text">Speakers</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-2xl p-6 text-center hover:glow-border-hover transition-all duration-300 cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-emerald to-midnight-evergreen mx-auto mb-4 flex items-center justify-center text-xl font-bold text-cosmic-navy">
                {speaker.initials}
              </div>
              <h3 className="text-lg font-semibold text-frosted-mint">{speaker.name}</h3>
              <p className="text-sm text-solar-clay mt-1">{speaker.role}</p>
              <div className="mt-3 px-3 py-1.5 inline-block text-xs text-neon-emerald glass rounded-full">
                Topic: {speaker.topic}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 md:p-8 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-frosted-mint mb-4">Workshop Details</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-silver-mist/70">
            <div className="flex items-center gap-2">
              <HiCalendar className="w-4 h-4 text-neon-emerald" />
              <span>July 25-26, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMicrophone className="w-4 h-4 text-neon-emerald" />
              <span>Interactive Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <HiLocationMarker className="w-4 h-4 text-neon-emerald" />
              <span>Auditorium & Labs</span>
            </div>
          </div>
          <p className="mt-4 text-silver-mist/60 text-sm leading-relaxed">
            Hands-on workshops covering AI, sustainable engineering, and scientific communication.
            All participants receive certificates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
