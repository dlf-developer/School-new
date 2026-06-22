import React from 'react'
import { Award, Leaf, Globe } from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'

const ICON_MAP = { Award, Leaf, Globe }

export default function Ticker() {
  const { global } = useSiteData()
  const items = global.ticker?.items || []

  return (
    <section className="bg-brand-greenDeep text-brand-bg py-5 sm:py-6 overflow-hidden relative border-y border-brand-gold/15">
      <div className="flex items-center whitespace-nowrap overflow-hidden">
        {/* Continuous double track for smooth infinite loop */}
        {[0, 1].map((track) => (
          <div
            key={track}
            className="flex gap-8 sm:gap-12 animate-marquee shrink-0"
            aria-hidden={track === 1 ? 'true' : undefined}
          >
            {items.map((item, idx) => {
              const Icon = ICON_MAP[item.icon] || Award
              return (
                <React.Fragment key={item.id || idx}>
                  <span className="flex items-center gap-2 text-xs sm:text-sm tracking-wider uppercase font-medium text-brand-bg/90">
                    <Icon className="w-4 h-4 text-brand-gold" />
                    {item.text}
                  </span>
                  <span className="text-brand-gold/30">&bull;</span>
                </React.Fragment>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}
