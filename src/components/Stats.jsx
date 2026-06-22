import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useSiteData } from '../hooks/useSiteData'

export default function Stats() {
  const statsStripRef = useRef(null)
  const { global } = useSiteData()
  const counters = global.stats?.counters || []

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (statsStripRef.current) {
        const counterEls = statsStripRef.current.querySelectorAll('.counter')
        counterEls.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'))
          gsap.to(counter, {
            scrollTrigger: {
              trigger: counter,
              start: 'top 90%',
              once: true
            },
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power1.out'
          })
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={statsStripRef} className="py-12 bg-transparent border-y border-brand-greenDeep/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12">
          {counters.map((counter) => (
            <div key={counter.id} className="text-center space-y-1">
              <h3 className={`font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-${counter.color} flex justify-center items-baseline`}>
                <span className="counter" data-target={counter.target}>0</span>
                <span className="text-brand-gold font-normal text-xl sm:text-3xl">{counter.suffix}</span>
              </h3>
              <p className="text-[9px] sm:text-xs font-bold text-brand-muted uppercase tracking-widest">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
