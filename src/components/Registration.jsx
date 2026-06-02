import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const initialForm = {
  teamName: '',
  members: ['', '', ''],
  grade: '',
  email: '',
  phone: '',
  school: '',
};

export default function Registration() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.teamName.trim()) newErrors.teamName = 'Team name required';
    if (!form.members[0].trim()) newErrors.members = 'At least one member required';
    if (!form.grade) newErrors.grade = 'Grade required';
    if (!form.email.includes('@')) newErrors.email = 'Valid email required';
    if (!form.phone.trim()) newErrors.phone = 'Phone required';
    if (!form.school.trim()) newErrors.school = 'School required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="register" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-emerald text-sm uppercase tracking-[0.2em]">Registration</span>
          <h2 className="text-3xl md:text-5xl font-bold text-frosted-mint mt-3">
            Secure Your{' '}
            <span className="gradient-text">Spot</span>
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center glass rounded-2xl p-8 glow-border"
            >
              <div className="w-16 h-16 rounded-full bg-neon-emerald/20 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-frosted-mint mb-2">Registration Successful!</h3>
              <p className="text-silver-mist/60">
                Team <span className="text-neon-emerald">{form.teamName}</span> has been registered.
                Check your email for confirmation.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto glass rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm text-frosted-mint/80 mb-1.5">Team Name</label>
                  <input
                    type="text"
                    value={form.teamName}
                    onChange={(e) => update('teamName', e.target.value)}
                    className="w-full px-4 py-3 bg-cosmic-navy border border-neon-emerald/20 rounded-xl text-frosted-mint placeholder-silver-mist/30 focus:border-neon-emerald focus:outline-none transition-colors"
                    placeholder="Enter team name"
                  />
                  {errors.teamName && <p className="text-solar-clay text-xs mt-1">{errors.teamName}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-frosted-mint/80 mb-1.5">Team Members (min 1)</label>
                  {form.members.map((member, i) => (
                    <input
                      key={i}
                      type="text"
                      value={member}
                      onChange={(e) => {
                        const members = [...form.members];
                        members[i] = e.target.value;
                        setForm((prev) => ({ ...prev, members }));
                      }}
                      className="w-full px-4 py-3 mb-2 bg-cosmic-navy border border-neon-emerald/20 rounded-xl text-frosted-mint placeholder-silver-mist/30 focus:border-neon-emerald focus:outline-none transition-colors"
                      placeholder={`Member ${i + 1} name`}
                    />
                  ))}
                  {errors.members && <p className="text-solar-clay text-xs mt-1">{errors.members}</p>}
                </div>

                <div>
                  <label className="block text-sm text-frosted-mint/80 mb-1.5">Grade/Class</label>
                  <select
                    value={form.grade}
                    onChange={(e) => update('grade', e.target.value)}
                    className="w-full px-4 py-3 bg-cosmic-navy border border-neon-emerald/20 rounded-xl text-frosted-mint focus:border-neon-emerald focus:outline-none transition-colors"
                  >
                    <option value="">Select grade</option>
                    {[9, 10, 11, 12].map((g) => (
                      <option key={g} value={g}>Grade {g}</option>
                    ))}
                  </select>
                  {errors.grade && <p className="text-solar-clay text-xs mt-1">{errors.grade}</p>}
                </div>

                <div>
                  <label className="block text-sm text-frosted-mint/80 mb-1.5">School</label>
                  <input
                    type="text"
                    value={form.school}
                    onChange={(e) => update('school', e.target.value)}
                    className="w-full px-4 py-3 bg-cosmic-navy border border-neon-emerald/20 rounded-xl text-frosted-mint placeholder-silver-mist/30 focus:border-neon-emerald focus:outline-none transition-colors"
                    placeholder="School name"
                  />
                  {errors.school && <p className="text-solar-clay text-xs mt-1">{errors.school}</p>}
                </div>

                <div>
                  <label className="block text-sm text-frosted-mint/80 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full px-4 py-3 bg-cosmic-navy border border-neon-emerald/20 rounded-xl text-frosted-mint placeholder-silver-mist/30 focus:border-neon-emerald focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-solar-clay text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm text-frosted-mint/80 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-cosmic-navy border border-neon-emerald/20 rounded-xl text-frosted-mint placeholder-silver-mist/30 focus:border-neon-emerald focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <p className="text-solar-clay text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 text-lg font-semibold text-cosmic-navy bg-neon-emerald rounded-xl hover:bg-neon-emerald/90 transition-all duration-300 neon-glow"
              >
                Register Team
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
