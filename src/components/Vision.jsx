import React, { useEffect, useRef } from 'react'
import { Quote } from 'lucide-react'
import gsap from 'gsap'
import ImageWithLoader from './ImageWithLoader'

export default function Vision() {
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
          x: -50,
          duration: 1,
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
          x: 50,
          duration: 1,
          ease: 'power3.out'
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="vision" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Editorial Images Column */}
        <div ref={visionImageRef} id="vision-image" className="lg:col-span-5 relative flex flex-col items-center">
          <div className="relative w-full sm:w-4/5 aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-white">
            <ImageWithLoader src="/images/home-assembly.jpg" alt="DLF Public School Campus Assembly" loading="lazy" />
            <div className="absolute inset-0 bg-brand-greenDeep/10 z-10"></div>
          </div>
          {/* Offset Quote Card */}
          <div className="relative sm:absolute bottom-[-2rem] right-0 sm:right-[-1.5rem] w-full sm:w-[85%] bg-brand-greenDeep rounded-2xl overflow-hidden shadow-lg border border-white p-5 mt-4 sm:mt-0">
            <Quote className="w-8 h-8 text-white/20" />
            <p className="text-white text-xs sm:text-sm font-serif italic mt-2">"We teach children how to think, not what to think."</p>
            <p className="text-brand-gold text-[9px] uppercase font-bold tracking-widest mt-2">&mdash; Dr. Seema Jerath, Principal</p>
          </div>
        </div>

        {/* Right Editorial Storyboard Column */}
        <div ref={visionContentRef} id="vision-content" className="lg:col-span-7 space-y-5 sm:space-y-6 mt-6 lg:mt-0">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">Visionary Leadership</span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-greenDeep leading-tight">
            Shaping a <span className="italic text-brand-gold font-normal">Generous Heart</span> with an Outstanding Mind.
          </h3>
          <div className="w-12 h-[2px] bg-brand-gold"></div>
          <p className="font-inter text-brand-muted text-sm sm:text-base leading-relaxed">
            At the heart of the school is our educational core: a customized, innovative self-designed curriculum modeled with robust student self-governance, rich collaborative networks, and real-world internships.
          </p>
          <blockquote className="border-l-4 border-brand-gold pl-4 sm:pl-6 py-1.5 my-3 sm:my-4 font-serif italic text-base sm:text-lg text-brand-greenDeep">
            "Our educational philosophy transcends classrooms. Every DLF Public School graduate is prepared to navigate a complex global landscape while honoring ecological balance."
          </blockquote>
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full border border-brand-greenDeep/20 overflow-hidden relative shrink-0 bg-brand-greenDeep/10 flex items-center justify-center">
              <span className="text-brand-greenDeep font-bold text-sm">DM</span>
            </div>
            <div>
              <h4 className="font-serif font-bold text-brand-greenDeep text-xs sm:text-sm">Dr. Mrignaini | Executive Director</h4>
              <p className="text-[8px] sm:text-[9px] text-brand-muted uppercase font-bold tracking-widest">DLF Public School Leadership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
