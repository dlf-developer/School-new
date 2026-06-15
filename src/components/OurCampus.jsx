import React from 'react'
import { useParams } from 'react-router-dom'
import { schoolsData } from '../data/schoolsData'
import { Shield, Tv, Key, Bus, Eye, Library, Monitor, Radio, Compass, Award, Heart } from 'lucide-react'
import ImageWithLoader from './ImageWithLoader'

export default function OurCampus() {
  const { schoolId } = useParams()
  const activeBranch = schoolId && schoolsData[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schoolsData[activeBranch]
  const theme = currentSchool.theme
  const campusData = currentSchool.campus

  const facilities = [
    { name: "Innovation Hub", icon: Compass, desc: "A creative playground for hands-on learning, prototyping, and experimental projects." },
    { name: "Multiple ICT Labs", icon: Monitor, desc: "High-speed digital labs equipped with advanced hardware and coding platforms." },
    { name: "Library & Book Burrow", icon: Library, desc: "A vast collection of literature, journals, and dedicated reading pods for quiet study." },
    { name: "Media Studio", icon: Radio, desc: "A creative recording suite supporting student-led podcasts, video creation, and broadcast news." },
    { name: "Olympic Size Skating Rink", icon: Award, desc: "An institutional-scale professional roller skating track for state and national training." },
    { name: "Lawn Tennis Court", icon: Heart, desc: "Premium outdoor courts designed to foster competitive athletic spirit and coordination." }
  ]

  const safetyFeatures = [
    { title: "3 Secure Gates", icon: Key, text: "Mandatory secure entry points with visitor screening and exit pass protocols." },
    { title: "Digital CCTV Surveillance", icon: Eye, text: "Full-campus video monitoring covering corridors, open fields, and common hubs." },
    { title: "GPS-Enabled Transportation", icon: Bus, text: "Buses tracked in real-time with automatic notifications sent directly to parents." }
  ]

  return (
    <div className="pt-24 bg-brand-bg min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      {/* Editorial Page Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-${theme.primary}/5 border border-${theme.primary}/10 text-${theme.primary} text-[11px] font-bold uppercase tracking-wider`}>
              <span>Explore {currentSchool.shortLocation}</span>
            </div>
            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-${theme.primary} leading-[1.1] tracking-tight`}>
              A Campus Built <br />
              <span className={`italic text-${theme.accent} font-normal`}>To Inspire & Breathe.</span>
            </h1>
            <p className="text-brand-muted text-base sm:text-lg leading-relaxed font-sans max-w-xl">
              Step into our campus and the difference is immediate—it doesn’t just look like a school, it feels alive. Ideas flow, voices are heard, and learning happens everywhere.
            </p>
          </div>
          <div className={`lg:col-span-6 bg-${theme.primary}/5 p-8 rounded-3xl border border-${theme.primary}/10 relative overflow-hidden`}>
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${theme.accent}/10 rounded-full blur-3xl`}></div>
            <p className={`font-serif text-xl sm:text-2xl text-${theme.primary} font-medium italic leading-relaxed relative z-10`}>
              "What began as a 16-room school has evolved into a lush green 5-acre, future-ready campus, thoughtfully designed to balance aesthetics with functionality."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className={`w-10 h-0.5 bg-${theme.accent}`}></div>
              <span className="text-xs uppercase tracking-widest font-bold text-brand-muted">DLF Legacy & Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Magazine-Style Campus Photo Gallery */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 pb-24">
        <div className="text-center mb-12">
          <h2 className={`font-serif text-3xl md:text-4xl font-bold text-${theme.primary} tracking-tight`}>
            Visual Campus Portfolio
          </h2>
          <p className={`text-xs text-${theme.accent} font-bold uppercase tracking-widest mt-2`}>
            Captured moments across our 5-acre ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Hero Photo (Aerial View) */}
          <div className={`md:col-span-8 overflow-hidden rounded-3xl border border-${theme.primary}/10 group shadow-md aspect-[16/10] relative`}>
            <ImageWithLoader 
              src="/DJI_0044.JPG" 
              alt="Aerial view of DLF Public School campus" 
              imgClassName="transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-90 z-10"></div>
            <div className="absolute bottom-6 left-6 text-white z-20">
              <p className={`text-[10px] uppercase tracking-widest font-semibold text-${theme.accent}`}>Green Aerial View</p>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">Lush 5-Acre Institutional Ecosystem</h3>
            </div>
          </div>

          {/* Side Small Photo 1 (Garden Courtyard) */}
          <div className={`md:col-span-4 overflow-hidden rounded-3xl border border-${theme.primary}/10 group shadow-sm aspect-square md:aspect-auto relative`}>
            <ImageWithLoader 
              src="/7C1A1607.jpg" 
              alt="Green school garden and courtyard paths" 
              imgClassName="transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent opacity-90 z-10"></div>
            <div className="absolute bottom-6 left-6 text-white z-20">
              <p className={`text-[10px] uppercase tracking-widest font-semibold text-${theme.accent}`}>Outdoor Spaces</p>
              <h3 className="font-serif text-lg font-bold">Sunlit Corridors & Green Play areas</h3>
            </div>
          </div>

          {/* Lower Small Photo 2 (Classroom and Smart TV) */}
          <div className={`md:col-span-4 overflow-hidden rounded-3xl border border-${theme.primary}/10 group shadow-sm aspect-square md:aspect-auto relative`}>
            <ImageWithLoader 
              src="/7C1A1603.jpg" 
              alt="Comfortable air-conditioned classroom" 
              imgClassName="transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent opacity-90 z-10"></div>
            <div className="absolute bottom-6 left-6 text-white z-20">
              <p className={`text-[10px] uppercase tracking-widest font-semibold text-${theme.accent}`}>Learning Spaces</p>
              <h3 className="font-serif text-lg font-bold">Air Conditioned Smart Classrooms</h3>
            </div>
          </div>

          {/* Lower Medium Photo 3 (School Entrance / Pathway) */}
          <div className={`md:col-span-8 overflow-hidden rounded-3xl border border-${theme.primary}/10 group shadow-md aspect-[16/10] relative`}>
            <ImageWithLoader 
              src="/7C1A1595.jpg" 
              alt="Palm lined pathway leading to DLF Public School main building" 
              imgClassName="transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-90 z-10"></div>
            <div className="absolute bottom-6 left-6 text-white z-20">
              <p className={`text-[10px] uppercase tracking-widest font-semibold text-${theme.accent}`}>Main Avenue</p>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">Architectural Blend of Modernity & Nature</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Secure System Section */}
      <section className={`bg-${theme.primary} text-white py-20 relative overflow-hidden`}>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-${theme.vibrant}/10 rounded-full blur-3xl pointer-events-none`}></div>
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className={`text-[10px] tracking-widest uppercase font-bold text-${theme.accent}`}>Nurturing Yet Protected</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2">Safety & Emotional Well-Being Centrality</h2>
            <p className="text-white/75 text-sm sm:text-base mt-4 font-sans leading-relaxed">
              Our campus is emotionally nurturing and physically secure, supported by robust entry, tracking, and surveillance infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyFeatures.map((feat, idx) => {
              const IconComp = feat.icon
              return (
                <div key={idx} className={`bg-${activeBranch === 'dlf-sahibabad' ? '[#1b3518]' : '[#2c204d]'} border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 shadow-md`}>
                  <div className={`w-12 h-12 rounded-2xl bg-${theme.accent}/15 flex items-center justify-center text-${theme.accent} mb-6`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">{feat.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed font-sans">{feat.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure Facilities Showroom Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <span className={`text-[10px] tracking-widest uppercase font-bold text-${theme.accent}`}>Global Infrastructure</span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary} mt-2 leading-tight`}>
              Built to foster academic, sports, & creative excellence
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-brand-muted text-sm sm:text-base leading-relaxed font-sans">
              Our state-of-the-art facilities promote student exploration, including high-tech ICT labs, multi-purpose halls, dedicated swimming pools, and extensive sports facilities. We blend learning spaces with collaborative zones.
            </p>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => {
            const IconComp = fac.icon
            return (
              <div 
                key={idx} 
                className={`bg-white border border-${theme.primary}/5 hover:border-${theme.primary}/15 hover:shadow-lg transition-all duration-300 rounded-3xl p-8 group`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-${theme.primary}/5 group-hover:bg-${theme.primary}/10 flex items-center justify-center text-${theme.primary} mb-6 transition-colors duration-300`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-2">{fac.name}</h3>
                <p className="text-brand-muted text-xs leading-relaxed font-sans">{fac.desc}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
