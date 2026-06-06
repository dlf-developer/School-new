import React from 'react'
import { Award, Leaf, Globe } from 'lucide-react'

export default function Ticker() {
  return (
    <section className="bg-brand-greenDeep text-brand-bg py-5 sm:py-6 overflow-hidden relative border-y border-brand-gold/15">
      <div className="flex items-center whitespace-nowrap overflow-hidden">
        {/* Continuous double track for smooth infinite loop */}
        <div className="flex gap-8 sm:gap-12 animate-marquee shrink-0">
          <span className="flex items-center gap-2 text-xs sm:text-sm tracking-wider uppercase font-medium text-brand-bg/90">
            <Award className="w-4 h-4 text-brand-gold" /> Education World Top Schools Rank #1
          </span>
          <span className="text-brand-gold/30">&bull;</span>
          <span className="flex items-center gap-2 text-xs sm:text-sm tracking-wider uppercase font-medium text-brand-bg/90">
            <Leaf className="w-4 h-4 text-brand-gold" /> CSE Certified Platinum Green Campus
          </span>
          <span className="text-brand-gold/30">&bull;</span>
          <span className="flex items-center gap-2 text-xs sm:text-sm tracking-wider uppercase font-medium text-brand-bg/90">
            <Globe className="w-4 h-4 text-brand-gold" /> British Council International Dimension Award
          </span>
          <span className="text-brand-gold/30">&bull;</span>
        </div>
        <div className="flex gap-8 sm:gap-12 animate-marquee shrink-0" aria-hidden="true">
          <span className="flex items-center gap-2 text-xs sm:text-sm tracking-wider uppercase font-medium text-brand-bg/90">
            <Award className="w-4 h-4 text-brand-gold" /> Education World Top Schools Rank #1
          </span>
          <span className="text-brand-gold/30">&bull;</span>
          <span className="flex items-center gap-2 text-xs sm:text-sm tracking-wider uppercase font-medium text-brand-bg/90">
            <Leaf className="w-4 h-4 text-brand-gold" /> CSE Certified Platinum Green Campus
          </span>
          <span className="text-brand-gold/30">&bull;</span>
          <span className="flex items-center gap-2 text-xs sm:text-sm tracking-wider uppercase font-medium text-brand-bg/90">
            <Globe className="w-4 h-4 text-brand-gold" /> British Council International Dimension Award
          </span>
          <span className="text-brand-gold/30">&bull;</span>
        </div>
      </div>
    </section>
  )
}
