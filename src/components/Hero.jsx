import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  
  // Default to Sahibabad if no schoolId is present in path
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]
  const theme = currentSchool.theme
  const heroData = currentSchool.hero

  const heroBgRef = useRef(null)
  const heroLeftRef = useRef(null)
  const headingRef = useRef(null)
  const badgeRef = useRef(null)
  const subRef = useRef(null)
  const ctasRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          opacity: 0,
          y: -12,
          duration: 0.8,
          delay: 0.3,
          ease: 'power3.out'
        })
      }

      if (headingRef.current) {
        const lines = headingRef.current.querySelectorAll('.hero-line')
        gsap.from(lines, {
          opacity: 0,
          y: 40,
          duration: 1.1,
          delay: 0.5,
          stagger: 0.14,
          ease: 'power4.out'
        })
      }

      const sequence = [subRef.current, ctasRef.current, statsRef.current].filter(Boolean)
      gsap.from(sequence, {
        opacity: 0,
        y: 24,
        duration: 0.9,
        delay: 1.0,
        stagger: 0.15,
        ease: 'power3.out'
      })
    })
    return () => ctx.revert()
  }, [activeBranch])

  return (
    <section id="hero-trigger" className={`relative min-h-[90vh] sm:min-h-screen flex items-center pt-24 sm:pt-32 pb-12 overflow-hidden bg-${theme.primary}`}>
      {/* Full Viewport Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          ref={heroBgRef}
          src={heroData.image} 
          alt={`${currentSchool.name} Campus`} 
          className="w-full h-full object-cover object-center" 
        />
        {/* Left-to-Right Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/85 to-transparent w-full md:w-3/4 lg:w-2/3"></div>
        {/* Subtle darkening for remaining area */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 relative z-10 w-full">
        {/* Left Side Core Editorial Copy */}
        <div ref={heroLeftRef} className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-8">
          <div ref={badgeRef} className={`inline-flex items-center gap-2 bg-${theme.primary}/10 border border-${theme.primary}/20 rounded-full px-3.5 py-1.5 text-xs text-${theme.primary} font-bold backdrop-blur-sm`}>
            <span className={`w-2 h-2 rounded-full bg-${theme.accent} animate-ping`}></span>
            <span>{heroData.legacy}</span>
          </div>
          
          <h2 ref={headingRef} className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] text-${theme.primary} font-bold tracking-tight`}>
            <span className="hero-line block">{heroData.titleLine1} <span className="italic text-brand-purpleDeep font-normal">{heroData.italicWord1}</span>,</span>
            <span className="hero-line block">
              Empowering <span className="relative inline-block">
                <span className="relative z-10">{heroData.underlineWord}</span>
                <svg className={`absolute bottom-1.5 sm:bottom-2 left-0 w-full h-2 sm:h-3 text-${theme.accent}/60 -z-10`} viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>,
            </span>
            <span className="hero-line block">Creating <span className={`italic font-normal text-${theme.accent}`}>{heroData.vibrantWord}</span>.</span>
          </h2>

          <p ref={subRef} className="font-inter text-brand-charcoal/80 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed font-medium">
            {heroData.subtitle}
          </p>

          <div ref={ctasRef} className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="#enquiry" 
              className={`bg-${theme.primary} hover:bg-${theme.vibrant} text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-xl shadow-${theme.primary}/20 flex items-center justify-center gap-2.5 group`}
            >
              <span>Admissions Open</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#curriculum" 
              className={`bg-brand-bg/50 backdrop-blur-sm border border-${theme.primary}/30 hover:border-${theme.primary} text-${theme.primary} px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 group`}
            >
              <span>Explore Curriculum</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Horizontal Accolades Strip */}
          <div ref={statsRef} className="pt-6 sm:pt-10 flex flex-wrap gap-6 sm:gap-10">
            {heroData.stats.map((stat, index) => (
              <div key={index}>
                <p className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>{stat.value}</p>
                <p className="text-[9px] sm:text-[10px] text-brand-charcoal font-inter uppercase tracking-wider mt-1 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
