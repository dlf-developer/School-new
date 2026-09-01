import React, { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Quote, ArrowRight, Award, ShieldCheck, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { useSiteData } from '../hooks/useSiteData'
import ImageWithLoader from './ImageWithLoader'

export default function Vision() {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]

  const theme = currentSchool?.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27'
  }

  const isDLWS = activeBranch === 'dlf-greater-noida'
  const schoolName = currentSchool?.name || 'DLF Public School'
  const leadershipImg = isDLWS ? '/dlws.jpeg' : '/images/home-welcome.jpg'

  const visionImageRef = useRef(null)
  const visionContentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (visionImageRef.current) {
        gsap.from(visionImageRef.current, {
          scrollTrigger: {
            trigger: '#vision',
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          x: -40,
          duration: 0.9,
          ease: 'power3.out'
        })
      }

      if (visionContentRef.current) {
        gsap.from(visionContentRef.current, {
          scrollTrigger: {
            trigger: '#vision',
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          x: 40,
          duration: 0.9,
          ease: 'power3.out'
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="vision" className="py-12 sm:py-16 bg-transparent relative overflow-hidden font-sans">
      <div className="w-[96%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
        
        {/* Left Editorial Images Column */}
        <div ref={visionImageRef} id="vision-image" className="lg:col-span-5 relative flex flex-col items-center">
          <div className="relative w-full sm:w-[90%] aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 border-white bg-gray-100">
            <ImageWithLoader 
              src={leadershipImg} 
              alt={`${schoolName} Campus & Leadership`} 
              loading="lazy" 
            />
            <div className={`absolute inset-0 bg-${theme.primary}/10 z-10`}></div>
          </div>

          {/* Offset Quote Card */}
          <div className={`relative sm:absolute bottom-[-1.5rem] right-0 sm:right-[-1rem] w-full sm:w-[88%] bg-${theme.primary} rounded-2xl overflow-hidden shadow-xl border border-white/20 p-5 mt-4 sm:mt-0`}>
            <Quote className="w-7 h-7 text-white/20" />
            <p className="text-white text-xs sm:text-sm font-serif italic mt-1.5 leading-relaxed">
              "We teach children how to think, not what to think."
            </p>
            <p className={`text-${theme.accent} text-[9px] uppercase font-bold tracking-widest mt-2`}>
              &mdash; {isDLWS ? 'Ruchi Jain, School Head (DLWS)' : 'Dr. Seema Jerath, Principal (DLPS)'}
            </p>
          </div>
        </div>

        {/* Right Editorial Storyboard Column */}
        <div ref={visionContentRef} id="vision-content" className="lg:col-span-7 space-y-5 sm:space-y-6 mt-4 lg:mt-0">
          <div>
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
              Visionary Leadership &amp; Governance
            </span>
            <h3 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-${theme.primary} leading-tight mt-1`}>
              Shaping a <span className={`italic text-${theme.accent} font-normal`}>Generous Heart</span> with an Outstanding Mind.
            </h3>
            <div className={`w-12 h-[2.5px] bg-${theme.accent} mt-3`}></div>
          </div>

          {/* Concise Leadership Summary */}
          <p className="font-inter text-brand-muted text-xs sm:text-sm leading-relaxed font-medium">
            At {schoolName}, education is a transformative journey guided by three decades of educational vision. Under the stewardship of distinguished educationists and researchers, we foster an environment where intellectual rigour and compassionate character develop hand-in-hand.
          </p>

          {/* Key Summary Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-3">
              <div className={`w-8 h-8 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center shrink-0`}>
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className={`text-xs font-bold text-${theme.primary}`}>Academic &amp; Governance Rigour</h4>
                <p className="text-[11px] text-brand-muted leading-tight mt-0.5 font-medium">
                  Ranked #5 in India for Leadership &amp; Governance with proven 30+ year academic benchmarks.
                </p>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-3">
              <div className={`w-8 h-8 rounded-xl bg-${theme.accent}/15 text-${theme.accent} flex items-center justify-center shrink-0`}>
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className={`text-xs font-bold text-${theme.primary}`}>No Learner Left Behind</h4>
                <p className="text-[11px] text-brand-muted leading-tight mt-0.5 font-medium">
                  Child-centric mentorship nurturing individual strengths, curiosity, and ethical purpose.
                </p>
              </div>
            </div>
          </div>

          {/* School Leadership Footer with Principal/School Head Desk Link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full border border-${theme.primary}/20 overflow-hidden shrink-0 bg-${theme.primary}/10 flex items-center justify-center`}>
                <span className={`text-${theme.primary} font-bold text-xs font-serif`}>
                  {isDLWS ? 'RJ' : 'SJ'}
                </span>
              </div>
              <div>
                <h4 className={`font-serif font-bold text-${theme.primary} text-xs sm:text-sm`}>
                  {isDLWS ? 'Ruchi Jain | School Head' : 'Dr. Seema Jerath | Principal'}
                </h4>
                <p className="text-[8.5px] sm:text-[9px] text-brand-muted uppercase font-bold tracking-widest">
                  {schoolName} Leadership
                </p>
              </div>
            </div>

            <Link
              to={`/school/${activeBranch}/principal-desk`}
              className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:text-${theme.vibrant} transition-colors group cursor-pointer`}
            >
              <span>{isDLWS ? "From the School Head's Desk" : "From the Principal's Desk"}</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
