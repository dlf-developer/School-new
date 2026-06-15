import React from 'react'
import ParentPartners from './ParentPartners'

export default function Philosophy() {
  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-greenVibrant">Thinking School with a Soul</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-greenDeep">Our Philosophy</h2>
          <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-sm text-brand-muted leading-relaxed font-inter">
            Sculpting minds that are intellectually sharp, yet emotionally grounded, socially responsible, and deeply aware of their environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-brand-greenDeep/5 shadow-md space-y-4">
            <h3 className="font-serif text-2xl font-bold text-brand-greenDeep">Vision & Mission</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter">
              To provide child-centric experiential learning that fosters critical thinking, problem-solving, self-governance, and ecological stewardship. We strive to cultivate a scientific temperament, social responsibility, and the courage to build an eco-friendly tomorrow.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-brand-greenDeep/5 shadow-md space-y-4">
            <h3 className="font-serif text-2xl font-bold text-brand-greenDeep">Institutional Recognition</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter">
              Consistently recognized as a benchmark for educational innovation, community building, and ecological consciousness in the NCR region. We believe in providing equal opportunities and cultivating values.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-brand-greenDeep/5">
        <ParentPartners />
      </div>
    </div>
  )
}
