import React from 'react'
import { Brain, Sparkles, Award, GraduationCap, Heart, Quote, Image as ImageIcon } from 'lucide-react'
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
            <p className="text-xs sm:text-sm text-brand-muted mt-4 font-semibold uppercase tracking-wider">
              The Heartbeat of DLF Public School
            </p>
          </div>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-sans max-w-3xl mx-auto pt-4">
            Welcome to a school where curiosity is louder than conformity, where classrooms become Thinkrooms, where walls make you think through Thinkline Questions, where innovation meets empathy, and where children are prepared not just for careers, but for life itself. We proudly call ourselves A Thinking School with a Soul because we believe education must shape both the mind and the conscience.
          </p>
        </div>

        {/* The 5 Pillars of Our School */}
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest">Our Core Values</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-masterDeep">How We Bring Our Ethos to Life</h2>
            <p className="text-brand-muted text-sm max-w-xl mx-auto">
              Our unique pillars of reflection, skill acquisition, care, and outstanding achievement define who we are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div 
                  key={pillar.title} 
                  className="bg-white p-8 rounded-3xl border border-brand-masterDeep/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center ${pillar.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-brand-masterDeep group-hover:text-brand-gold transition-colors">{pillar.title}</h3>
                    <p className="text-xs text-brand-muted leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Visual Gallery Showcase */}
        <div className="max-w-6xl mx-auto space-y-8 pt-8">
          <div className="flex items-center justify-between border-b border-brand-masterDeep/5 pb-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-masterDeep flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-brand-gold" />
              Minds in Action Gallery
            </h2>
            <span className="text-xs text-brand-muted font-semibold uppercase tracking-wider hidden sm:inline-block">Folder 1 Imagery</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl border border-brand-masterDeep/5 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all duration-300 group"
              >
                <div className="overflow-hidden bg-brand-bg aspect-[4/3] relative">
                  <ImageWithLoader 
                    src={img.src} 
                    alt={img.title} 
                    imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                    loading="lazy" 
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-xs font-semibold text-brand-masterDeep font-sans">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Concluding Block */}
        <div className="bg-brand-greenDeep text-white p-8 sm:p-12 rounded-3xl shadow-xl max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="space-y-6 text-center relative z-10 max-w-2xl mx-auto">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-gold">Nurturing Authentic Intelligence</h4>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans">
              In a world racing towards artificial intelligence, we remain committed to nurturing authentic intelligence—minds that think sharply, hearts that feel deeply, and individuals who dare to make a difference.
            </p>
            <div className="w-12 h-[1px] bg-brand-gold/30 mx-auto my-4"></div>
            <p className="text-sm sm:text-base font-serif italic text-brand-bg">
              "Because at DLF Public School, we are not just building achievers. We are shaping thoughtful human beings with the courage to think differently and the soul to care deeply."
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
