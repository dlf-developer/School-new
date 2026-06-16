import React from 'react'

export default function Pedagogy() {
  const stages = [
    { id: 'early', title: 'Early Years', desc: 'Sensory integration, play-way modules, and language discovery through storytelling, theatre, and interactive arts.' },
    { id: 'primary', title: 'Primary Years', desc: 'Foundation of critical analysis, logic, and mathematics taught through hands-on project work and outdoor nature studies.' },
    { id: 'middle', title: 'Middle Years', desc: 'Intellectual exploration, robotics, coding, scientific experiments, and community stewardship programs.' },
    { id: 'senior', title: 'Senior Years', desc: 'Advanced scholastic courses, deep stream selection, and dynamic preparation for competitive college admissions.' }
  ]

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-masterVibrant">Nurturing Learning Pathways</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-masterDeep">Our Pedagogy</h2>
          <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-sm text-brand-muted leading-relaxed font-inter">
            Experiential & Developmental learning at every step, tailored to child development theories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          {stages.map((stage, idx) => (
            <div key={stage.id} className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-masterDeep/5 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-4">
                <span className="text-4xl font-serif text-brand-gold font-bold">0{idx + 1}</span>
                <h3 className="font-serif text-lg font-bold text-brand-masterDeep">{stage.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-inter">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
