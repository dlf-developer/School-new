import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Stats() {
  const statsStripRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (statsStripRef.current) {
        const counters = statsStripRef.current.querySelectorAll('.counter')
        counters.forEach(counter => {
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
          <div className="text-center space-y-1">
            <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-brand-greenDeep flex justify-center items-baseline">
              <span className="counter" data-target="28">0</span><span className="text-brand-gold font-normal text-xl sm:text-3xl">+</span>
            </h3>
            <p className="text-[9px] sm:text-xs font-bold text-brand-muted uppercase tracking-widest">Years of History</p>
          </div>
          <div className="text-center space-y-1">
            <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-brand-purpleDeep flex justify-center items-baseline">
              <span className="counter" data-target="3200">0</span><span className="text-brand-gold font-normal text-xl sm:text-3xl">+</span>
            </h3>
            <p className="text-[9px] sm:text-xs font-bold text-brand-muted uppercase tracking-widest">Active Learners</p>
          </div>
          <div className="text-center space-y-1">
            <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-brand-greenDeep flex justify-center items-baseline">
              <span className="counter" data-target="15">0</span><span className="text-brand-gold font-normal text-xl sm:text-3xl">:1</span>
            </h3>
            <p className="text-[9px] sm:text-xs font-bold text-brand-muted uppercase tracking-widest">Teacher Ratio</p>
          </div>
          <div className="text-center space-y-1">
            <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-brand-purpleDeep flex justify-center items-baseline">
              <span className="counter" data-target="100">0</span><span className="text-brand-gold font-normal text-xl sm:text-3xl">%</span>
            </h3>
            <p className="text-[9px] sm:text-xs font-bold text-brand-muted uppercase tracking-widest">First Class Results</p>
          </div>
        </div>
      </div>
    </section>
  )
}
