import React from 'react'
import { useSiteData } from '../hooks/useSiteData'

export default function Testimonials() {
  const { global } = useSiteData()
  const { sectionLabel, sectionTitle, cards } = global.testimonials || {}

  return (
    <section className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-greenDeep">{sectionLabel}</span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-greenDeep">{sectionTitle}</h3>
          <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {(cards || []).map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-greenDeep/5 shadow-md flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-brand-charcoal/90 italic leading-relaxed font-inter">
                "{card.quote}"
              </p>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-brand-greenDeep/5">
                <div className={`w-9 h-9 bg-${card.color}/20 rounded-full flex items-center justify-center font-bold text-${card.color} text-xs font-serif`}>
                  {card.initials}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-greenDeep">{card.name}</h4>
                  <p className="text-[9px] text-brand-muted uppercase tracking-widest font-inter">{card.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
