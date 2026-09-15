import React from 'react'
import { Link } from 'react-router-dom'
import { Brain, Sparkles, Award, GraduationCap, Heart, Quote, CheckCircle2, ArrowRight } from 'lucide-react'
import ImageWithLoader from './ImageWithLoader'
import { useSiteData } from '../hooks/useSiteData'

const ICON_MAP = { Brain, Sparkles, Award, GraduationCap, Heart }

// Default 3 feature cards for each pillar matching design specification
const DEFAULT_PILLAR_FEATURES = {
  'Caring School': [
    { title: 'Empathy & Humane Values', desc: 'Belief that being Good is more fundamental than being just Smart.' },
    { title: 'Smiley Badges & Positivity', desc: 'Positive reinforcement culture that nurtures emotional well-being.' },
    { title: 'Social Responsibility (SSR)', desc: 'Discipline through reflection and inspiring students to give back.' }
  ],
  'Innovating School': [
    { title: 'Innovation Hub', desc: 'State-of-the-art labs fostering AI, scientific research & prototype building.' },
    { title: 'Inspire Manak Grants', desc: 'Annual ₹10,000 national innovation grants awarded to student inventors.' },
    { title: 'Student Enterprises', desc: 'Real-world entrepreneurship, sports leadership & social impact initiatives.' }
  ],
  'Skill Building School': [
    { title: 'Tinkering & Maker Labs', desc: '3D printing, robotics, automation & design thinking.' },
    { title: 'Agriculture & Life Sciences', desc: 'Biodiversity registers, plant nursery & microgreens.' },
    { title: 'Human Services & Vocational', desc: 'Healthcare, family health & culinary arts.' }
  ],
  'Winning School': [
    { title: 'Academic Excellence', desc: 'District, State & North India toppers across CBSE board examinations.' },
    { title: 'Global Platforms', desc: 'Representing India at international innovation summits & hackathons.' },
    { title: 'International Sports', desc: 'Delfites competing globally in international arenas across Kazakhstan & Africa.' }
  ],
  'Thinking School with a Soul': [
    { title: 'AQAD Questions', desc: 'Non-routine daily questions prompting students to reflect and reason.' },
    { title: 'Thinkrooms & Thinklines', desc: 'Classrooms transformed into interactive spaces of inquiry & research.' },
    { title: 'Reflection Over Rhetoric', desc: 'Failures treated as feedback, empowering deep self-governance.' }
  ]
}

const PILLAR_ROUTES = {
  'Thinking School with a Soul': '/pedagogy/early-years',
  'Innovating School': '/what-sets-us-apart',
  'Skill Building School': '/pedagogy/senior-years',
  'Winning School': '/awards',
  'Caring School': '/counselling'
}

export default function ThinkingSchool() {
  const { global } = useSiteData()
  const ts = global.thinkingSchool || {}

  const pillars = (ts.pillars || []).map(p => ({ ...p, icon: ICON_MAP[p.icon] || Brain }))

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
              const features = pillar.features || DEFAULT_PILLAR_FEATURES[pillar.title] || DEFAULT_PILLAR_FEATURES['Thinking School with a Soul']

              return (
                <div 
                  key={pillar.title} 
                  className="bg-white rounded-3xl border border-brand-masterDeep/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row overflow-hidden group"
                >
                  {/* Image Banner */}
                  <div className={`w-full md:w-1/2 aspect-[16/10] md:aspect-auto bg-brand-bg relative overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <ImageWithLoader 
                      src={pillar.image} 
                      alt={pillar.imageAlt || pillar.title} 
                      className="absolute inset-0"
                      imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      style={{ objectPosition: pillar.objectPosition || 'center 25%' }}
                      loading="lazy" 
                    />
                  </div>
                  
                  {/* Content Column */}
                  <div className={`w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center space-y-6 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center gap-3.5 md:flex-col md:items-start md:gap-3">
                        <div className={`w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-sm ${pillar.iconColor}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-masterDeep">{pillar.title}</h3>
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans">
                        {pillar.desc}
                      </p>

                      {/* 3 Small Feature Cards Grid (Matching User Spec) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {features.slice(0, 3).map((feat, fIdx) => (
                          <div 
                            key={fIdx} 
                            className="bg-brand-bg/60 rounded-2xl p-3.5 border border-brand-greenDeep/10 hover:border-brand-gold/50 transition-all duration-300 space-y-1 group/subcard"
                          >
                            <div className="flex items-center gap-2 font-bold text-xs text-brand-masterDeep">
                              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 group-hover/subcard:scale-110 transition-transform" />
                              <span>{feat.title}</span>
                            </div>
                            <p className="text-[11px] text-brand-muted leading-relaxed font-sans pl-6">
                              {feat.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* View More Button */}
                    <div className="pt-2">
                      <Link 
                        to={pillar.route || PILLAR_ROUTES[pillar.title] || "/what-sets-us-apart"} 
                        className="inline-flex items-center gap-2 bg-brand-greenDeep hover:bg-brand-greenVibrant text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                      >
                        <span>View More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
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
