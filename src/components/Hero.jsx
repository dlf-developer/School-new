import React, { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
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
    legacy: '30+ Years of Educational Legacy',
    titleLine1: 'DLF Group',
    italicWord1: 'of Schools',
    titleLine2: 'Sculpting',
    underlineWord: 'Minds',
    titleLine3: 'Creating',
    vibrantWord: 'Pioneers',
    subtitle: 'Nurturing thinkers, sculpting scientific temperaments, and empowering global pioneers across our state-of-the-art educational institutions.',
    stats: [
      { value: '30+ Years', label: 'Legacy of Excellence' },
      { value: '3,000+', label: 'Active Learners' }
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
    <section id="hero-trigger" className={`relative min-h-[92vh] sm:min-h-screen flex items-center pt-16 sm:pt-20 pb-16 overflow-hidden bg-black`}>
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

      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Frosted Glass Container around Left Content */}
        {schoolId && (
          <div 
            ref={heroLeftRef} 
            className="lg:col-span-7 xl:col-span-8 max-w-xl lg:max-w-[560px] space-y-6 sm:space-y-7 bg-white/10 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/20 shadow-2xl relative order-2 lg:order-1"
          >
            {/* Logo Identity Block — above heading */}
            <div ref={statsRef} className="flex items-center gap-3.5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white flex items-center justify-center shadow-lg overflow-hidden border border-white/20 shrink-0">
                <img 
                  src="/images/dlf-crest.png" 
                  alt={`${currentSchool?.name} Crest`} 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="text-left space-y-0.5">
                <h3 className="font-serif text-sm sm:text-base font-bold text-white leading-tight drop-shadow-md">
                  {currentSchool?.name}
                </h3>
                <p className={`text-[9px] text-${theme.accent} font-inter uppercase tracking-widest font-semibold drop-shadow-md`}>
                  {currentSchool?.cbseInfo || 'CBSE Affiliated'}
                </p>
              </div>
            </div>

            {/* Heading */}
            <h2 ref={headingRef} className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.15] text-white font-bold tracking-tight">
              {schoolId === 'dlf-sahibabad' ? (
                <>
                  <span className="hero-line block">A Thinking <span className={`italic text-${theme.accent} font-normal`}>School</span></span>
                  <span className="hero-line block">
                    with a <span className="relative inline-block">
                      <span className="relative z-10">Soul</span>
                      <svg className={`absolute bottom-1.5 sm:bottom-2 left-0 w-full h-2 sm:h-3 text-${theme.accent}/60 -z-10`} viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                      </svg>
                    </span>.
                  </span>
                </>
              ) : (
                <>
                  <span className="hero-line block">{heroData.titleLine1} <span className={`italic text-${theme.accent} font-normal`}>{heroData.italicWord1}</span>,</span>
                  <span className="hero-line block">
                    Empowering <span className="relative inline-block">
                      <span className="relative z-10">{heroData.underlineWord}</span>
                      <svg className={`absolute bottom-1.5 sm:bottom-2 left-0 w-full h-2 sm:h-3 text-${theme.accent}/60 -z-10`} viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                      </svg>
                    </span>,
                  </span>
                  <span className="hero-line block">Creating <span className={`italic font-normal text-${theme.accent}`}>{heroData.vibrantWord}</span>.</span>
                </>
              )}
            </h2>

            <p ref={subRef} className="font-inter text-white/80 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed font-medium">
              {heroData.subtitle}
            </p>

            <div ref={ctasRef} className="flex flex-wrap gap-2.5 pt-2">
              <Link 
                to={`/school/${schoolId}/admissions`}
                className={`bg-${theme.accent} hover:opacity-90 text-white px-5 sm:px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all duration-300 shadow-lg flex items-center justify-center gap-1.5 group`}
              >
                <span>Admissions Open</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a 
                href="#virtual-tour" 
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 sm:px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all duration-300 flex items-center justify-center gap-1.5 group"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Virtual Tour</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
