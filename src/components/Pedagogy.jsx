import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CheckCircle, Award, Compass, Cpu, TrendingUp, Sparkles, GraduationCap, ArrowRight, BookOpen } from 'lucide-react'
import ImageWithLoader from './ImageWithLoader'

export default function Pedagogy() {
  const { stageId } = useParams()
  
  // Set default active tab to 'early-years'
  const [activeTab, setActiveTab] = useState('early-years')

  const stages = [
    {
      id: 'early-years',
      title: 'Early Years',
      label: 'Nurturing Wonder & Sensory Discovery',
      desc: 'Sensory integration, play-way modules, and language discovery through storytelling, theatre, and interactive arts.',
      details: 'Our early childhood education is designed as a sensory-rich environment where learning happens naturally through play. Guided by progressive developmental frameworks, we focus on sensory integration, emotional intelligence, and motor skills.',
      focuses: [
        'Sensory-based cognitive modules',
        'Linguistic exploration & creative storytelling theatre',
        'Fine and gross motor skills integration',
        'Social-emotional adaptation & collaborative play'
      ],
      img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800',
      Icon: Sparkles
    },
    {
      id: 'primary-years',
      title: 'Primary Years',
      label: 'Building Foundations of Logical Reasoning',
      desc: 'Foundation of critical analysis, logic, and mathematics taught through hands-on project work and outdoor nature studies.',
      details: 'Transitioning into conceptual understanding. In the Primary Years, children develop core numeracy, reading mechanics, and scientific curiosity. Rote-learning is replaced with hands-on labs and outdoor observations.',
      focuses: [
        'Conceptual mathematical reasoning',
        'Structured reading fluency & phonics workshops',
        'Experiential science projects & outdoor learning',
        'Creative expressions in arts, music, and dance'
      ],
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
      Icon: Compass
    },
    {
      id: 'middle-years',
      title: 'Middle Years',
      label: 'Intellectual Exploration & Stewardship',
      desc: 'Intellectual exploration, robotics, coding, scientific experiments, and community stewardship programs.',
      details: 'Encouraging independent research, creative building, and collaborative social projects. Middle Years connect abstract textbook theories directly to science experiments, basic robotics, and eco-friendly actions.',
      focuses: [
        'Creative coding, AI literacy, and basic robotics',
        'Rigorous lab experiments & scientific methodology',
        'Ecological stewardship & local community service',
        'Structured group presentations & public speaking'
      ],
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
      Icon: Cpu
    },
    {
      id: 'senior-years',
      title: 'Senior Years',
      label: 'Scholastic Rigour & Global Readiness',
      desc: 'Advanced scholastic courses, deep stream selection, and dynamic preparation for competitive college admissions.',
      details: 'Preparing learners for global university standards. Senior Years integrate the rigorous CBSE academic curricula with specialized stream selections, career counselling, college preparation, and leadership summits.',
      focuses: [
        'Advanced CBSE streams (Science, Commerce, Humanities)',
        'Personalized profile mentoring & university advice',
        'National and global college entrance preparation',
        'Student-led school leadership and summits'
      ],
      img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
      Icon: GraduationCap
    }
  ]

  // Update active tab based on path parameter (if set)
  useEffect(() => {
    if (stageId) {
      const match = stages.find(s => s.id === stageId)
      if (match) {
        setActiveTab(match.id)
      }
    }
  }, [stageId])

  // Get content for the currently active tab
  const activeStage = stages.find(s => s.id === activeTab) || stages[0]
  const ActiveIcon = activeStage.Icon

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden">
      
      {/* Background ambient glows */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] ambient-glow-2 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-1/4 w-[450px] h-[450px] ambient-glow-1 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-gold">Nurturing Learning Pathways</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-masterDeep">Our Pedagogy</h1>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-base text-brand-muted leading-relaxed font-sans max-w-xl mx-auto">
            Experiential, stage-wise education aligned with cognitive developmental milestones for progressive learning.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto no-scrollbar gap-3 pb-3 border-b border-brand-masterDeep/5 snap-x snap-mandatory max-w-4xl mx-auto">
          {stages.map(stage => {
            const Icon = stage.Icon
            const isActive = activeTab === stage.id
            return (
              <button
                key={stage.id}
                onClick={() => setActiveTab(stage.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border snap-center cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-brand-greenDeep text-white border-brand-greenDeep shadow-md scale-103'
                    : 'bg-white text-brand-charcoal hover:bg-brand-greenDeep/5 border-brand-masterDeep/5 hover:border-brand-greenDeep/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-gold' : 'text-brand-muted'}`} />
                {stage.title}
              </button>
            )
          })}
        </div>

        {/* Active Stage Details Panel */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-md border border-brand-masterDeep/5 max-w-6xl mx-auto min-h-[450px] transition-all duration-500 hover:shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-brand-greenDeep/5 text-brand-greenDeep px-3 py-1.5 rounded-full text-xs font-bold font-sans">
                  <ActiveIcon className="w-4 h-4 text-brand-gold" />
                  <span>Pathway Stage</span>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-greenDeep leading-tight">
                  {activeStage.title} — <span className="text-brand-charcoal font-normal">{activeStage.label}</span>
                </h2>
                
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-sans">
                  {activeStage.details}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest font-extrabold text-brand-gold">Academic Core Focus</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeStage.focuses.map((focus, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-brand-masterDeep/5 flex flex-wrap gap-4 items-center">
                <span className="text-xs text-brand-muted font-sans font-semibold">Interested in admissions?</span>
                <Link 
                  to="/school/dlf-sahibabad/admissions" 
                  className="inline-flex items-center gap-1.5 text-brand-greenDeep hover:text-brand-greenVibrant font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Apply Online <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Media column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3] shadow-md border-4 border-brand-greenDeep relative group/img bg-brand-bg">
                <ImageWithLoader 
                  src={activeStage.img} 
                  alt={activeStage.title} 
                  imgClassName="w-full h-full object-cover transition-transform duration-750 group-hover/img:scale-103" 
                  loading="lazy" 
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
