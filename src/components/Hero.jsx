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
  
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'master'
  const currentSchool = schoolId && schools[schoolId] ? schools[schoolId] : null
  const theme = currentSchool ? currentSchool.theme : {
    primary: 'brand-masterDeep',
    vibrant: 'brand-masterVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27'
  }

  const heroData = currentSchool ? currentSchool.hero : {
    image: '/images/home-hero.jpg',
    legacy: '30 Years of Educational Excellence',
    titleLine1: 'DLF Group',
    italicWord1: 'of Schools',
    titleLine2: 'Sculpting',
    underlineWord: 'Minds',
    titleLine3: 'Creating',
    vibrantWord: 'Pioneers',
    subtitle: 'Nurturing thinkers, sculpting scientific temperaments, and empowering global pioneers across our state-of-the-art educational institutions.',
    stats: [
      { value: '28+ Years', label: 'Legacy of Excellence' },
      { value: '3,200+', label: 'Active Learners' }
    ]
  }

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
    <section id="hero-trigger" className={`relative min-h-[92vh] sm:min-h-screen flex items-center pt-32 sm:pt-40 pb-16 overflow-hidden bg-black`}>
      {/* Background YouTube Video (Vibrant, high-visibility loop) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <iframe 
          className="w-[300%] h-[300%] -translate-x-[33%] -translate-y-[33%] object-cover opacity-85 scale-125 transition-opacity duration-1000" 
          src="https://www.youtube.com/embed/Gj3QXoCh9y8?autoplay=1&mute=1&loop=1&playlist=Gj3QXoCh9y8&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1" 
          title="DLF Public School Video Background" 
          allow="autoplay; encrypted-media"
        ></iframe>
        {/* Subtle vignette for edge framing */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent w-full md:w-3/4"></div>
      </div>

      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 relative z-10 w-full">
        {/* Frosted Glass Container around Left Content - Only show on school-specific pages, hide on master group page to display only the video */}
        {schoolId && (
          <div 
            ref={heroLeftRef} 
            className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-7 bg-brand-bg/90 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/60 shadow-2xl relative"
          >
            <div className="flex flex-wrap items-center gap-3">
              <div ref={badgeRef} className={`inline-flex items-center gap-2 bg-${theme.primary}/10 border border-${theme.primary}/20 rounded-full px-3.5 py-1.5 text-xs text-${theme.primary} font-bold`}>
                <span className={`w-2 h-2 rounded-full bg-${theme.accent} animate-ping`}></span>
                <span>{heroData.legacy}</span>
              </div>
              
              {/* YouTube Direct Link Badge */}
              <a 
                href="https://youtu.be/Gj3QXoCh9y8?si=WzZQIolRmRreErik" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white border border-red-500/30 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 shadow-md hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span>Watch on YouTube</span>
              </a>
            </div>
            
            <h2 ref={headingRef} className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.15] text-${theme.primary} font-bold tracking-tight`}>
              <span className="hero-line block">{heroData.titleLine1} <span className="italic text-brand-gold font-normal">{heroData.italicWord1}</span>,</span>
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

            <p ref={subRef} className="font-inter text-brand-charcoal/85 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed font-medium">
              {heroData.subtitle}
            </p>

            <div ref={ctasRef} className="flex flex-wrap gap-3 pt-2">
              <a 
                href="#admissions" 
                className={`bg-${theme.primary} hover:bg-${theme.vibrant} text-white px-7 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group`}
              >
                <span>Admissions Open</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#curriculum" 
                className={`bg-white border border-${theme.primary}/30 hover:border-${theme.primary} text-${theme.primary} px-7 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 group`}
              >
                <span>Explore Curriculum</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://youtu.be/Gj3QXoCh9y8?si=WzZQIolRmRreErik" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span>Watch Video</span>
              </a>
            </div>

            {/* Horizontal Accolades Strip */}
            <div ref={statsRef} className="pt-4 flex flex-wrap gap-6 border-t border-brand-greenDeep/10">
              {heroData.stats.map((stat, index) => (
                <div key={index}>
                  <p className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>{stat.value}</p>
                  <p className="text-[9px] text-brand-charcoal font-inter uppercase tracking-wider mt-0.5 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
