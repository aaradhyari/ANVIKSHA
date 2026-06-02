import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const initialForm = {
  teamName: '',
  members: [
    { name: '', grade: '' },
    { name: '', grade: '' },
    { name: '', grade: '' },
  ],
  email: '',
  phone: '',
  school: '',
};

// 🔧 Replace with your deployed Google Apps Script web app URL
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwxMZfcLif19sRPVoFzRST6wcbHEDe1aYmrXEp8OBcDmSdNc_OiUIbq-8OlIpQD1I33/exec';

export default function Registration() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!form.teamName.trim()) newErrors.teamName = 'Team name required';
    if (!form.members[0].name.trim()) newErrors.members = 'At least one member required';
    if (form.members[0].name.trim() && !form.members[0].grade) newErrors.memberGrade = 'Grade required for each member';
    if (!form.email.includes('@')) newErrors.email = 'Valid email required';
    if (!form.phone.trim()) newErrors.phone = 'Phone required';
    if (!form.school.trim()) newErrors.school = 'School required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    if (!validate()) return;

    setSubmitting(true);
    try {
      const params = new URLSearchParams({
        teamName: form.teamName,
        member1: form.members[0]?.name || '',
        member1Grade: form.members[0]?.grade || '',
        member2: form.members[1]?.name || '',
        member2Grade: form.members[1]?.grade || '',
        member3: form.members[2]?.name || '',
        member3Grade: form.members[2]?.grade || '',
        email: form.email,
        phone: form.phone,
        school: form.school,
      });
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      });
      setSubmitted(true);
    } catch {
      setSubmitError('Failed to submit. Please try again.');
    } finally {
      setSubmitting(false);
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
              className="max-w-2xl mx-auto glass rounded-2xl p-4 sm:p-6 md:p-8 space-y-5 overflow-hidden"
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
                  <label className="block text-sm text-frosted-mint/80 mb-1.5">Team Members & Grades</label>
                  {form.members.map((member, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-2">
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => {
                          const members = [...form.members];
                          members[i] = { ...members[i], name: e.target.value };
                          setForm((prev) => ({ ...prev, members }));
                        }}
                        className="flex-1 px-4 py-3 bg-cosmic-navy border border-neon-emerald/20 rounded-xl text-frosted-mint placeholder-silver-mist/30 focus:border-neon-emerald focus:outline-none transition-colors"
                        placeholder={`Member ${i + 1} name`}
                      />
                      <select
                        value={member.grade}
                        onChange={(e) => {
                          const members = [...form.members];
                          members[i] = { ...members[i], grade: e.target.value };
                          setForm((prev) => ({ ...prev, members }));
                        }}
                        className="w-full sm:w-28 px-3 py-3 bg-cosmic-navy border border-neon-emerald/20 rounded-xl text-[#505868] focus:border-neon-emerald focus:outline-none transition-colors text-sm"
                      >
                        <option value="" className="text-[#505868]">Grade</option>
                        {[9, 10, 11, 12].map((g) => (
                          <option key={g} value={g} className="text-[#505868]">{g}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                  {errors.members && <p className="text-solar-clay text-xs mt-1">{errors.members}</p>}
                  {errors.memberGrade && <p className="text-solar-clay text-xs mt-1">{errors.memberGrade}</p>}
                </div>

                <div className="md:col-span-2">
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

                <div className="md:col-span-2">
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

                <div className="md:col-span-2">
                  <label className="block text-sm text-frosted-mint/80 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-cosmic-navy border border-neon-emerald/20 rounded-xl text-frosted-mint placeholder-silver-mist/30 focus:border-neon-emerald focus:outline-none transition-colors"
                    placeholder="+91 1234 567890"
                  />
                  {errors.phone && <p className="text-solar-clay text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {submitError && (
                <p className="text-solar-clay text-sm text-center">{submitError}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 text-lg font-semibold text-cosmic-navy bg-neon-emerald rounded-xl hover:bg-neon-emerald/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 neon-glow"
              >
                {submitting ? 'Submitting...' : 'Register Team'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
