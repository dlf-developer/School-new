import React from 'react'
import { Brain, Sparkles, Award, GraduationCap, Heart, Quote } from 'lucide-react'
import ImageWithLoader from './ImageWithLoader'
import { useSiteData } from '../hooks/useSiteData'

const ICON_MAP = { Brain, Sparkles, Award, GraduationCap, Heart }

export default function ThinkingSchool() {
  const { global } = useSiteData()
  const ts = global.thinkingSchool || {}

  const pillars = (ts.pillars || []).map(p => ({ ...p, icon: ICON_MAP[p.icon] || Brain }))
  const galleryImages = ts.gallery || []

  const _legacyPillars = [
    {
      title: 'Thinking School with a Soul',
      desc: 'We nurture a culture of research and innovation—classrooms transform into Thinkrooms, failures become feedback, and learning extends far beyond textbooks. Every lesson begins with open-ended, non-routine Thinking questions that challenge children to go beyond the rhetoric. Everyday children get A Thinking Question A Day (AQAD) that makes them reflect, reason, and explore new possibilities.',
      icon: Brain,
      color: 'from-blue-500/10 to-indigo-500/10',
      iconColor: 'text-indigo-600',
    },
    {
      title: 'Innovating School',
      desc: 'Innovation is a deliberate outcome of a carefully nurtured environment. Each year our Innovation Hub churns out multiple Innovators who receive grants of ₹10,000 each, under the Inspire Manak award, to work on their scientific innovations. Whether it is building AI-powered innovations, launching student enterprises, excelling in sports and arts, or leading social impact initiatives, every Delfite is encouraged to discover not just what they want to become, but who they want to be.',
      icon: Sparkles,
      color: 'from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-600',
    },
    {
      title: 'Winning School',
      desc: 'We are a winning school. Our students have emerged as District, State, and North India toppers in academics, earned global innovation grants, represented India at prestigious international platforms, won national hackathons, and built ventures that solve real-world problems. Yet, beyond every accolade lies a culture that teaches children to succeed without losing their sensitivity, individuality, or humanity. Similarly in sports our Delfites have represented India in Africa and Kazakhstan on international platforms.',
      icon: Award,
      color: 'from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Skill Building School',
      desc: 'A Skill-Building School where learning is translated into capability, creativity, and confidence.',
    }
  ] // _legacyPillars — not used; data sourced from useSiteData()

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden">
      
      {/* Background ambient glows */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] ambient-glow-1 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] ambient-glow-2 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-20 relative z-10">
        
        {/* Core Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-gold">Ethos & Philosophy</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-masterDeep leading-tight">
            A Thinking School <span className="italic text-brand-gold font-normal">With a Soul</span>
          </h1>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto"></div>
          
          <div className="bg-white/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-brand-masterDeep/5 shadow-sm max-w-3xl mx-auto mt-8 relative">
            <Quote className="absolute -top-4 -left-4 w-8 h-8 text-brand-gold/20" />
            <p className="font-serif text-xl sm:text-2xl text-brand-greenDeep italic font-medium leading-relaxed">
              “Don’t just teach children what to think. Teach them how to think.”
            </p>
          </div>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-sans max-w-3xl mx-auto pt-4">
            Welcome to a school where curiosity is louder than conformity, where classrooms become Thinkrooms, where walls make you think through Thinkline Questions, where innovation meets empathy, and where children are prepared not just for careers, but for life itself. We proudly call ourselves <strong>A Thinking School with a Soul</strong> because we believe education must shape both the mind and the conscience.
          </p>
        </div>

        {/* The 5 Pillars of Our School with Gallery Integration */}
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest">Our Core Values</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-masterDeep">How We Bring Our Ethos to Life</h2>
            <p className="text-brand-muted text-sm max-w-xl mx-auto">
              Our unique pillars of reflection, skill acquisition, care, and outstanding achievement define who we are.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 auto-rows-fr">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={pillar.title} 
                  className="bg-white rounded-3xl border border-brand-masterDeep/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row overflow-hidden group h-full"
                >
                  <div className={`w-full md:w-1/2 aspect-[4/3] md:aspect-auto bg-brand-bg relative overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <ImageWithLoader 
                      src={pillar.image} 
                      alt={pillar.imageAlt || pillar.title} 
                      className="absolute inset-0"
                      imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      loading="lazy" 
                    />
                  </div>
                  
                  <div className={`w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center space-y-4 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center ${pillar.iconColor}`}>
                        <Icon className="w-6 h-6 md:w-7 md:h-7" />
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-brand-masterDeep">{pillar.title}</h3>
                    </div>
                    <p className="text-sm lg:text-base text-brand-muted leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Concluding Block */}
        <div className="bg-brand-greenDeep text-white p-8 sm:p-12 rounded-3xl shadow-xl max-w-4xl mx-auto relative overflow-hidden mt-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="space-y-6 text-center relative z-10 max-w-2xl mx-auto">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-gold">Nurturing Authentic Intelligence</h4>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-sans">
              In a world racing towards artificial intelligence, we remain committed to nurturing authentic intelligence—minds that think sharply, hearts that feel deeply, and individuals who dare to make a difference.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
