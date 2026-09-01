import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import gsap from 'gsap'
import { useSiteData } from '../hooks/useSiteData'

export default function Stats() {
  const statsStripRef = useRef(null)
  const { schoolId } = useParams()
  const { global, schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const isDLWS = activeBranch === 'dlf-greater-noida'

  const dlpsCounters = global.stats?.counters || [
    {
      id: "stat-1",
      target: 30,
      suffix: "+",
      label: "Years of History",
      color: "brand-greenDeep",
    },
    {
      id: "stat-2",
      target: 2200,
      suffix: "+",
      label: "Active Learners",
      color: "brand-gold",
    },
    {
      id: "stat-3",
      target: 15,
      suffix: ":1",
      label: "Teacher Ratio",
      color: "brand-greenDeep",
    },
    {
      id: "stat-4",
      target: 100,
      suffix: "%",
      label: "First Class Results",
      color: "brand-gold",
    }
  ]

  const dlwsCounters = [
    {
      id: "stat-1",
      target: 10,
      suffix: "+",
      label: "Years of Excellence",
      color: "brand-purpleDeep",
    },
    {
      id: "stat-3",
      target: 15,
      suffix: ":1",
      label: "Teacher Ratio",
      color: "brand-gold",
    },
    {
      id: "stat-4",
      target: 100,
      suffix: "%",
      label: "First Class Results",
      color: "brand-purpleDeep",
    }
  ]

  const counters = isDLWS ? dlwsCounters : dlpsCounters

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
  }, [activeBranch])

  return (
    <section ref={statsStripRef} className="py-10 bg-transparent border-y border-gray-100 relative">
      <div className="w-[96%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${counters.length === 3 ? 'grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto' : 'grid-cols-2 lg:grid-cols-4'} gap-6 sm:gap-12`}>
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
