import React from 'react'
import { useParams } from 'react-router-dom'
import { Award, Leaf, Globe, Sparkles, Zap, Trophy, ShieldCheck } from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'

const ICON_MAP = { Award, Leaf, Globe, Sparkles, Zap, Trophy, ShieldCheck }

const DEFAULT_ITEMS = [
  { id: 'tick-1', icon: 'Globe', text: 'Recognition of International Dimension in Schools' },
  { id: 'tick-2', icon: 'Leaf', text: 'Wipro Earthian Award for Sustainability' },
  { id: 'tick-3', icon: 'Award', text: 'Go Sharpener Sustainability Superstar' },
  { id: 'tick-4', icon: 'Leaf', text: 'First Plastic Neutral School in Delhi-NCR' },
  { id: 'tick-5', icon: 'Award', text: 'ET Tech X School Excellence Award' },
  { id: 'tick-6', icon: 'Award', text: 'School Excellence Recognition' },
  { id: 'tick-7', icon: 'Globe', text: 'British Council International School Award' },
  { id: 'tick-8', icon: 'Award', text: 'Microsoft Entrepreneurship & Innovation Award' }
]

export default function Ticker() {
  const { schoolId } = useParams()
  const { global } = useSiteData()
  const isDLWS = schoolId === 'dlf-greater-noida'
  const bgClass = isDLWS ? 'bg-brand-purpleDeep' : 'bg-brand-greenDeep'
  const items = (global?.ticker?.items && global.ticker.items.length > 0) ? global.ticker.items : DEFAULT_ITEMS

  return (
    <section className={`${bgClass} text-brand-bg py-5 sm:py-6 overflow-hidden relative border-y border-brand-gold/15 transition-colors duration-300`}>
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

