import { motion } from 'framer-motion';

const images = [
  { id: 1, label: 'Innovation Lab', span: 'row-span-2' },
  { id: 2, label: 'Research Session', span: '' },
  { id: 3, label: 'Team Collaboration', span: '' },
  { id: 4, label: 'Tech Expo', span: 'col-span-2' },
  { id: 5, label: 'Award Ceremony', span: '' },
  { id: 6, label: 'Workshop', span: 'row-span-2' },
  { id: 7, label: 'Networking', span: '' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-emerald text-sm uppercase tracking-[0.2em]">Gallery</span>
          <h2 className="text-3xl md:text-5xl font-bold text-frosted-mint mt-3">
            Moments of{' '}
            <span className="gradient-text">Innovation</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative glass rounded-xl overflow-hidden cursor-pointer ${img.span}`}
              style={{ minHeight: img.span ? '200px' : '160px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-emerald/10 via-transparent to-midnight-evergreen/20 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-xl border border-neon-emerald/30 bg-neon-emerald/5 flex items-center justify-center">
                  <svg className="w-6 h-6 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-cosmic-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm text-frosted-mint">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
