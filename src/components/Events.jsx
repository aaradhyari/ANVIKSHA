import { motion } from 'framer-motion';
import { HiLightningBolt, HiCubeTransparent } from 'react-icons/hi';

const events = [
  {
    icon: HiLightningBolt,
    title: 'Event 1: ABC',
    summary: 'A thrilling innovation challenge where participants decode complex scientific mysteries through collaborative research and creative problem-solving.',
    link: '/event1.html',
  },
  {
    icon: HiCubeTransparent,
    title: 'Event 2: CBA',
    summary: 'An advanced engineering and design sprint where teams build prototypes to solve real-world sustainability challenges under time constraints.',
    link: '/event2.html',
  },
];

export default function Events() {
  return (
    <section id="events" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-emerald text-sm uppercase tracking-[0.2em]">Events</span>
          <h2 className="text-3xl md:text-5xl font-bold text-frosted-mint mt-3">
            Explore Our{' '}
            <span className="gradient-text">Events</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event, i) => (
            <motion.a
              key={event.title}
              href={event.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group glass rounded-2xl p-8 transition-all duration-300 hover:glow-border-hover glow-border block"
            >
              <div className="w-14 h-14 rounded-xl bg-neon-emerald/10 flex items-center justify-center mb-5 group-hover:bg-neon-emerald/20 transition-colors">
                <event.icon className="w-7 h-7 text-neon-emerald" />
              </div>
              <h3 className="text-xl font-bold text-frosted-mint mb-3">{event.title}</h3>
              <p className="text-silver-mist/70 leading-relaxed mb-5">{event.summary}</p>
              <span className="inline-flex items-center gap-2 text-sm text-neon-emerald font-medium group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
