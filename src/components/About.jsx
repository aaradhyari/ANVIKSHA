import { motion } from 'framer-motion';
import { HiLightBulb, HiBeaker, HiCog, HiUserGroup } from 'react-icons/hi';

const features = [
  {
    icon: HiLightBulb,
    title: 'Creativity',
    desc: 'Unleash imagination to solve complex problems with innovative approaches.',
    color: 'from-solar-clay/20 to-transparent',
  },
  {
    icon: HiBeaker,
    title: 'Research',
    desc: 'Dive deep into scientific inquiry and evidence-based exploration.',
    color: 'from-midnight-evergreen/20 to-transparent',
  },
  {
    icon: HiCog,
    title: 'Innovation',
    desc: 'Transform ideas into impactful solutions that push boundaries.',
    color: 'from-neon-emerald/10 to-transparent',
  },
  {
    icon: HiUserGroup,
    title: 'Teamwork',
    desc: 'Collaborate across disciplines to achieve extraordinary results.',
    color: 'from-silver-mist/10 to-transparent',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-emerald text-sm uppercase tracking-[0.2em]">About the Event</span>
          <h2 className="text-3xl md:text-5xl font-bold text-frosted-mint mt-3">
            Where Science Meets{' '}
            <span className="gradient-text">Innovation</span>
          </h2>
          <p className="mt-6 text-silver-mist/70 max-w-2xl mx-auto text-lg leading-relaxed">
            ANVIKSHA is a flagship competition that challenges students to think beyond textbooks,
            blending scientific thinking, sustainability, creativity, and teamwork into a
            groundbreaking experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative glass rounded-2xl p-6 hover:glow-border-hover transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-neon-emerald/10 flex items-center justify-center mb-4 group-hover:bg-neon-emerald/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-neon-emerald" />
                </div>
                <h3 className="text-lg font-semibold text-frosted-mint mb-2">{feature.title}</h3>
                <p className="text-sm text-silver-mist/60 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
