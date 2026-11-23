import React, { useState } from 'react'
import { Award, CheckCircle2, Send } from 'lucide-react'

export default function CounsellingConsultationForm({ theme, currentSchool }) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'parent',
    category: 'academic',
    notes: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: 'parent',
        category: 'academic',
        notes: '',
      })
    }, 6000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 items-stretch">
      {/* Quote Block */}
      <div
        className={`lg:col-span-5 bg-${theme.primary}/5 rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-gray-100`}
      >
        <div className="space-y-4">
          <Award className={`w-10 h-10 text-${theme.accent}`} />
          <blockquote className="font-serif italic text-base sm:text-lg text-brand-charcoal leading-relaxed">
            "Our wellness core ensures that while children target academic benchmarks, they remain emotionally secure,
            physically strong, and mentally peaceful."
          </blockquote>
        </div>
        <div className="pt-6 border-t border-gray-200 mt-6 text-xs text-brand-muted font-inter">
          <strong>Wellness &amp; Guidance Center</strong>
          <br />
          {currentSchool?.name || 'DLF Group Schools'}
        </div>
      </div>

      {/* Booking / Enquiry Form */}
      <div className="lg:col-span-7 bg-white border border-gray-150/15 rounded-3xl p-8 shadow-lg relative overflow-hidden flex flex-col justify-center">
        {formSubmitted ? (
          <div className="text-center py-10 space-y-3">
            <div
              className={`w-12 h-12 bg-${theme.primary}/10 text-${theme.primary} rounded-full flex items-center justify-center mx-auto`}
            >
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>Consultation Scheduled!</h4>
            <p className="text-xs text-brand-muted max-w-xs mx-auto font-inter">
              Thank you. Our resident counsellor will contact you within the next working day to confirm time slots.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
                Request a Confidential Consultation
              </h3>
              <p className="text-xs text-brand-muted font-inter">
                Schedule a 1-on-1 confidential meeting with our counselling team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal block">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-gold bg-gray-50/50"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 Mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-gold bg-gray-50/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal block">
                  I am a
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-gold bg-gray-50/50 text-brand-charcoal"
                >
                  <option value="parent">Parent / Guardian</option>
                  <option value="student">Student</option>
                  <option value="teacher">Faculty Member</option>
                  <option value="other">Prospective Parent</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal block">
                  Nature of Query
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-gold bg-gray-50/50 text-brand-charcoal"
                >
                  <option value="academic">Academic / Career Guidance</option>
                  <option value="emotional">Emotional / Behavioural Support</option>
                  <option value="inclusion">Special Needs / Inclusion Support</option>
                  <option value="general">General Wellness Consultation</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal block">
                Additional Notes (Optional &amp; Confidential)
              </label>
              <textarea
                rows={3}
                placeholder="Mention any specific timings or areas you would like to discuss..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-gold bg-gray-50/50 resize-none"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3.5 rounded-xl bg-${theme.primary} hover:bg-${theme.vibrant} text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Consultation Request</span>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
