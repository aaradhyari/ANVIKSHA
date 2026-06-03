import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker } from 'react-icons/hi';

export default function Contact() {
  return (
    <section id="contact" className="relative pt-24 md:pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-emerald text-sm uppercase tracking-[0.2em]">Contact</span>
          <h2 className="text-3xl md:text-5xl font-bold text-frosted-mint mt-3">
            Get In{' '}
            <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          <motion.a
            href="mailto:anviksha@innovationclub.edu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6 flex items-center gap-4 hover:glow-border-hover transition-all duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-neon-emerald/10 flex items-center justify-center group-hover:bg-neon-emerald/20 transition-colors">
              <HiMail className="w-6 h-6 text-neon-emerald" />
            </div>
            <div>
              <p className="text-sm text-silver-mist/60">Email us</p>
              <p className="text-frosted-mint font-medium">anviksha@innovationclub.edu</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-xl p-6 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-neon-emerald/10 flex items-center justify-center">
              <HiLocationMarker className="w-6 h-6 text-neon-emerald" />
            </div>
            <div>
              <p className="text-sm text-silver-mist/60">Venue</p>
              <p className="text-frosted-mint font-medium">School Auditorium & Labs</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto glass rounded-2xl overflow-hidden">
          <div className="dark-map">
          <iframe
            title="Venue Location"
            src="https://www.google.com/maps?q=A.B.+Road,+Rau,+opposite+Akashwani,+Indore,+Madhya+Pradesh+453331&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          </div>
          <div className="px-4 py-3 border-t border-neon-emerald/10 text-center">
            <a
              href="https://maps.app.goo.gl/5h3E6xWwcS3nPSmH9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neon-emerald hover:underline"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
        </div>

      <footer className="mt-24 pt-12 border-t border-neon-emerald/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-lg font-bold text-frosted-mint mb-3">
            <span className="text-neon-emerald">&lt;</span>
            ANVIKSHA
            <span className="text-neon-emerald">/&gt;</span>
          </div>
          <p className="text-xs text-silver-mist/40 tracking-wider uppercase mb-4">
            Innovation Club Presents
          </p>
          <p className="text-silver-mist/30 text-xs">
            &copy; {new Date().getFullYear()} Innovation Club. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
