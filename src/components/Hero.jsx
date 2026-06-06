import React, { useEffect, useRef } from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
  const heroBgRef = useRef(null)
  const heroLeftRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroBgRef.current) {
        gsap.to(heroBgRef.current, {
          scale: 1,
          duration: 10,
          ease: 'power1.out'
        })
      }

      if (heroLeftRef.current) {
        gsap.from(heroLeftRef.current, {
          opacity: 0,
          x: -30,
          duration: 1.2,
          delay: 0.2,
          ease: 'power3.out'
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-24 sm:pt-32 pb-12 overflow-hidden bg-brand-greenDeep">
      {/* Full Viewport Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          ref={heroBgRef}
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1920" 
          alt="DLF Public School Campus Building" 
          className="w-full h-full object-cover object-center scale-105" 
        />
        {/* Left-to-Right Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/85 to-transparent w-full md:w-3/4 lg:w-2/3"></div>
        {/* Subtle darkening for remaining area */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 w-full">
        {/* Left Side Core Editorial Copy */}
        <div ref={heroLeftRef} className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 bg-brand-greenDeep/10 border border-brand-greenDeep/20 rounded-full px-3.5 py-1.5 text-xs text-brand-greenDeep font-bold backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping"></span>
            <span>28+ Years of Educational Legacy</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] text-brand-greenDeep font-bold tracking-tight">
            Sculpting <span className="italic text-brand-purpleDeep font-normal">Minds</span>,<br />
            Empowering <span className="relative inline-block">
              <span className="relative z-10">Souls</span>
              <svg className="absolute bottom-1.5 sm:bottom-2 left-0 w-full h-2 sm:h-3 text-brand-gold/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>,<br />
            Creating <span className="italic font-normal text-brand-gold">Pioneers</span>.
          </h2>

          <p className="font-inter text-brand-charcoal/80 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed font-medium">
            At DLF Public School, Ghaziabad, we believe that education is about cultivating a scientific temperament, social responsibility, and the courage to build an eco-friendly tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="#enquiry" 
              className="bg-brand-greenDeep hover:bg-brand-greenVibrant text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-xl shadow-brand-greenDeep/20 flex items-center justify-center gap-2.5 group"
            >
              <span>2026 Admissions</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#curriculum" 
              className="bg-brand-bg/50 backdrop-blur-sm border border-brand-greenDeep/30 hover:border-brand-greenDeep text-brand-greenDeep px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Sports Scholarship 2026-27</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Horizontal Accolades Strip */}
          <div className="pt-6 sm:pt-10 flex flex-wrap gap-6 sm:gap-10">
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-brand-greenDeep">Ranked #1</p>
              <p className="text-[9px] sm:text-[10px] text-brand-charcoal font-inter uppercase tracking-wider mt-1 font-bold">In Ghaziabad</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-brand-purpleDeep">100%</p>
              <p className="text-[9px] sm:text-[10px] text-brand-charcoal font-inter uppercase tracking-wider mt-1 font-bold">Board Success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
