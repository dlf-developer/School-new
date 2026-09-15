import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react'
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
      { value: '2,200+', label: 'Active Learners' }
    ]
  }

  const heroBgRef = useRef(null)
  const heroLeftRef = useRef(null)
  const headingRef = useRef(null)
  const badgeRef = useRef(null)
  const subRef = useRef(null)
  const ctasRef = useRef(null)
  const statsRef = useRef(null)
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

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
      {/* Background Video (Master Video, DLWS Video, or DLPS YouTube loop) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {!schoolId ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="w-full h-full object-cover transition-opacity duration-1000"
          >
            <source src="/1786617107481119.mov" type="video/mp4" />
            <source src="/1786617107481119.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        ) : schoolId === 'dlf-greater-noida' ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="w-full h-full object-cover transition-opacity duration-1000"
          >
            <source src="/School_dlws.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe 
            className="w-[300%] h-[300%] -translate-x-[33%] -translate-y-[33%] object-cover opacity-85 scale-125 transition-opacity duration-1000 pointer-events-none" 
            src="https://www.youtube.com/embed/Gj3QXoCh9y8?autoplay=1&mute=1&loop=1&playlist=Gj3QXoCh9y8&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1" 
            title="DLF Public School Video Background" 
            allow="autoplay; encrypted-media"
          ></iframe>
        )}
        {/* Subtle vignette for edge framing */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent w-full md:w-3/4 pointer-events-none"></div>
      </div>

      {/* Floating Audio & Playback Controls on Master and DLWS Video */}
      {(!schoolId || schoolId === 'dlf-greater-noida') && (
        <div className="absolute bottom-6 right-6 sm:right-10 z-30 flex items-center gap-2.5">
          <button
            type="button"
            onClick={togglePlay}
            className="p-3 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-white transition-all duration-300 shadow-xl cursor-pointer hover:scale-110 active:scale-95"
            aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
            title={isPlaying ? 'Pause Video' : 'Play Video'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            className="p-3 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-white transition-all duration-300 shadow-xl cursor-pointer hover:scale-110 active:scale-95"
            aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      )}

      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Frosted Glass Container around Left Content */}
        {schoolId && (
          <div 
            ref={heroLeftRef} 
            className="lg:col-span-7 xl:col-span-8 max-w-xl lg:max-w-[560px] space-y-6 sm:space-y-7 bg-white/10 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/20 shadow-2xl relative order-2 lg:order-1"
          >
            {/* Logo Identity Block — above heading */}
            <div ref={statsRef} className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg overflow-hidden border border-white/20 shrink-0">
                <img 
                  src="/images/dlf-crest.png" 
                  alt={`${currentSchool?.name} Crest`} 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="text-left space-y-1">
                <div className="h-6 sm:h-7.5 flex items-center">
                  <img
                    src={schoolId === 'dlf-greater-noida' ? '/dlws-logo.png' : '/images/dlps-logo.png'}
                    alt={currentSchool?.name || 'DLF School'}
                    className="h-full w-auto object-contain max-h-6 sm:max-h-7.5 brightness-0 invert drop-shadow-md"
                  />
                </div>
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
                to={schoolId ? `/school/${schoolId}/admissions` : "/admission-enquiry"}
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
