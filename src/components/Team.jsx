import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const members = [
  { name: 'Katyayani Saktawat', role: 'Club President', initials: 'KS', bio: 'Leading the vision for innovation and scientific excellence.' },
  { name: 'Nandani Agrawal', role: 'Vice President', initials: 'NA', bio: 'Driving research initiatives and interdisciplinary collaboration.' },
  { name: 'Aaradhya Rai', role: 'Technical Lead', initials: 'AR', bio: 'Building the tech infrastructure for all competition rounds.' },
  { name: 'Sanjan Gour', role: 'Design & Media', initials: 'SG', bio: 'Crafting the visual identity and event experience.' },
  { name: 'Kabir Singh', role: 'Events Coordinator', initials: 'KS', bio: 'Ensuring seamless execution of workshops and rounds.' },
  { name: 'Maya Joshi', role: 'Outreach Lead', initials: 'MJ', bio: 'Connecting with schools, judges, and partners.' },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-emerald text-sm uppercase tracking-[0.2em]">Our Team</span>
          <h2 className="text-3xl md:text-5xl font-bold text-frosted-mint mt-3">
            Meet the{' '}
            <span className="gradient-text">Organizers</span>
          </h2>
          <p className="mt-4 text-silver-mist/60 max-w-xl mx-auto">
            The brilliant minds behind ANVIKSHA working to make this event unforgettable.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass rounded-2xl p-6 text-center hover:glow-border-hover transition-all duration-300 cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-emerald to-midnight-evergreen mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-cosmic-navy">
                {member.initials}
              </div>
              <h3 className="text-lg font-semibold text-frosted-mint">{member.name}</h3>
              <p className="text-sm text-solar-clay font-medium mt-0.5">{member.role}</p>
              <p className="text-xs text-silver-mist/50 mt-2 leading-relaxed">{member.bio}</p>
              <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="text-silver-mist/40 hover:text-neon-emerald transition-colors" aria-label={`${member.name} Instagram`}>
                  <FaInstagram size={14} />
                </a>
                <a href="#" className="text-silver-mist/40 hover:text-neon-emerald transition-colors" aria-label={`${member.name} Twitter`}>
                  <FaTwitter size={14} />
                </a>
                <a href="#" className="text-silver-mist/40 hover:text-neon-emerald transition-colors" aria-label={`${member.name} LinkedIn`}>
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
