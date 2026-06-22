import React from 'react'
import { Award, Sprout, Users, CheckCircle2, Quote, Shield, Calendar } from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'

const ICON_MAP = { Award, Sprout, Shield, Users }

export default function Management() {
  const { global } = useSiteData()
  const mgmtData = global.management || {}

  // Map icon name strings → actual lucide-react components
  const leadership = (mgmtData.leaders || []).map(l => ({
    ...l,
    IconComp: ICON_MAP[l.icon] || Award
  }))

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden">
      
      {/* Background ambient glows */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] ambient-glow-1 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] ambient-glow-2 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-20 relative z-10">
        
        {/* Core Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-gold">Leadership &amp; Legacy</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-masterDeep leading-tight">
            Our Management
          </h1>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-base text-brand-muted leading-relaxed font-sans max-w-2xl mx-auto">
            Meet the visionaries, educators, and social reformers who lead the Darbari Lal Foundation and guide DLF Public School.
          </p>
        </div>

        {/* 1. Genesis Section (Homage to Late Shri Darbari Lal Ji) */}
        <section className="bg-white rounded-3xl border border-brand-masterDeep/5 shadow-md p-8 sm:p-12 max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Established in 1996</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-masterDeep">
                Genesis &amp; Legacy
              </h2>
              
              <div className="bg-brand-bg/60 border-l-4 border-brand-gold p-5 rounded-r-2xl relative">
                <Quote className="absolute top-2 right-2 w-10 h-10 text-brand-gold/10 pointer-events-none" />
                <h4 className="font-serif font-bold text-brand-greenDeep text-lg">Homage to Late Shri Darbari Lal Ji</h4>
                <p className="text-xs text-brand-muted font-semibold mt-1">January 15, 1930 – May 16, 1995</p>
                <p className="text-sm text-brand-charcoal mt-3 leading-relaxed font-sans">
                  Late Shri Darbari Lal Ji, a visionary educationist and former President of the D.A.V. Managing Committee, dedicated his life to spreading the light of education. A philosopher, thinker, and social reformer, he believed in making quality education accessible to every child.
                </p>
              </div>

              <div className="space-y-4 text-brand-muted text-sm leading-relaxed font-sans">
                <p>
                  DLF Public School was established in his loving memory and continues to uphold his ideals. His birth anniversary, January 15, is celebrated each year as the Foundation Day of the school.
                </p>
                <p>
                  Run by the Darbari Lal Foundation, the school began in 1996 with a modest 16-room building and has grown into a vibrant educational institution spread across five acres of lush green campus. Inspired by his vision, the school continues its pursuit of excellence, embracing the idea that inward reflection shapes outward success.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative p-2.5 border-2 border-brand-gold/30 rounded-3xl bg-brand-bg shadow-inner w-full max-w-[280px]">
                <div className="aspect-[3/4] bg-brand-masterDeep/10 rounded-2xl flex flex-col items-center justify-center text-center p-4 border border-brand-masterDeep/5 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-brand-masterDeep/5 transition-opacity group-hover:opacity-0"></div>
                  <img 
                    src="/WhatsApp Image 2026-05-07 at 6.10.55 PM.jpeg" 
                    alt="Late Shri Darbari Lal Ji" 
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-4">
                    <Users className="w-12 h-12 text-brand-gold/60 mb-2" />
                    <p className="font-serif font-bold text-brand-masterDeep text-sm">Late Shri Darbari Lal Ji</p>
                    <p className="text-[10px] text-brand-muted">Founder &amp; Visionary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Executive Profiles (data-driven from useSiteData) */}
        <section className="space-y-12 max-w-5xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest">Profiles in Leadership</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-masterDeep">Meet Our Leaders</h2>
            <div className="w-12 h-[1px] bg-brand-gold/30 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {leadership.map((person) => {
              const PersonIcon = person.IconComp
              return (
                <div 
                  key={person.id || person.name} 
                  className="bg-white rounded-3xl border border-brand-masterDeep/5 shadow-md p-8 sm:p-12 relative overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-brand-bg rounded-full blur-3xl pointer-events-none"></div>
                  
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="space-y-6 flex-1">
                      {/* Badge and Title */}
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 text-xs font-extrabold uppercase tracking-wider rounded-full border ${person.color}`}>
                          {person.badge}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-masterDeep">
                          {person.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-brand-gold leading-relaxed font-sans uppercase tracking-wider">
                          {person.role}
                        </p>
                      </div>

                      <p className="text-sm text-brand-muted leading-relaxed font-sans border-l-2 border-brand-gold/20 pl-4">
                        {person.bio}
                      </p>

                      {/* Key highlights list */}
                      <div className="space-y-3 pt-2">
                        <h4 className="font-serif text-sm font-bold text-brand-masterDeep flex items-center gap-2">
                          <PersonIcon className="w-4 h-4 text-brand-gold" />
                          Key Credentials &amp; Contributions
                        </h4>
                        
                        <div className="grid grid-cols-1 gap-2.5 pl-1">
                          {(person.highlights || []).map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2.5 text-xs text-brand-charcoal leading-relaxed font-sans">
                              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right side portrait */}
                    <div className="w-full lg:w-72 shrink-0 flex flex-col items-center justify-center pt-6 lg:pt-0">
                      <div className="w-full aspect-[4/5] sm:max-w-[240px] bg-brand-bg border border-brand-masterDeep/5 rounded-2xl flex flex-col items-center justify-center text-center p-6 relative overflow-hidden group">
                        {person.name === 'Dr. Rakesh Khullar' ? (
                          <img 
                            src="/7C1A1641.jpg" 
                            alt={person.name} 
                            className="w-full h-full object-cover rounded-xl"
                          />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 pointer-events-none bg-brand-bg/90">
                            <PersonIcon className="w-10 h-10 text-brand-gold/60 mb-2" />
                            <p className="font-serif font-bold text-brand-masterDeep text-sm leading-tight">{person.name}</p>
                            <p className="text-[10px] text-brand-muted uppercase font-bold tracking-widest mt-1">{person.badge}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 3. Concluding Quote Block */}
        <section className="bg-brand-masterDeep text-white py-16 rounded-3xl relative overflow-hidden max-w-5xl mx-auto shadow-xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto px-6 text-center space-y-6 relative z-10">
            <Quote className="w-10 h-10 text-brand-gold mx-auto fill-brand-gold/10" />
            <p className="font-serif text-xl sm:text-2xl italic leading-relaxed text-gray-200">
              "We measure success not only by achievements, but by the ability to give back more to society than we take from it."
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="w-8 h-[1px] bg-brand-gold/40"></div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">Darbari Lal Foundation</span>
              <div className="w-8 h-[1px] bg-brand-gold/40"></div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
