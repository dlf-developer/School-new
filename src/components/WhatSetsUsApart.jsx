import React from 'react'

export default function WhatSetsUsApart() {
  const pillars = [
    { title: 'Zero-Waste Campus', desc: 'Active waste management, paper recycling plants, rain water harvesting, and organic compost units managed directly by students.' },
    { title: 'Corporate Internships', desc: 'Real-world internships for senior students with leading enterprises to build job-readiness and technical competencies.' },
    { title: 'Global Exchanges', desc: 'International collaborative classes, cultural tours, and dynamic seminars with sister schools worldwide.' },
    { title: 'Social Responsibility', desc: 'Strong community services and developmental programs to sculpt empathetic global citizens.' }
  ]

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-greenVibrant">Distinctive Pillars</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-greenDeep">What Sets Us Apart</h2>
          <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-sm text-brand-muted leading-relaxed font-inter">
            Our benchmarks for educational innovation, ecological consciousness, and future-readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-white p-8 sm:p-12 rounded-3xl border border-brand-greenDeep/5 shadow-md space-y-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-serif text-2xl font-bold text-brand-greenDeep">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
