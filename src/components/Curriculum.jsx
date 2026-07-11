import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { BookOpen, CheckCircle, Compass, Cpu, TrendingUp } from 'lucide-react'
import gsap from 'gsap'
import { useSiteData } from '../hooks/useSiteData'
import ImageWithLoader from './ImageWithLoader'

export default function Curriculum() {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const currentSchool = schoolId && schools[schoolId] ? schools[schoolId] : null
  const primaryColor = currentSchool ? currentSchool.theme.primary : 'brand-masterDeep'

  const [activeTab, setActiveTab] = useState('primary')
  const panesRef = useRef({})

  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return

    const currentPane = panesRef.current[activeTab]
    const targetPane = panesRef.current[newTab]

    if (currentPane && targetPane) {
      gsap.to(currentPane, {
        opacity: 0,
        y: 10,
        duration: 0.25,
        onComplete: () => {
          setActiveTab(newTab)
          gsap.fromTo(targetPane, 
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
          )
        }
      })
    } else {
      setActiveTab(newTab)
    }
  }

  const tabs = [
    { id: 'primary', label: 'Primary School (Grades I-V)' },
    { id: 'middle', label: 'Middle School (Grades VI-VIII)' },
    { id: 'secondary', label: 'Secondary (Grades IX-X)' },
    { id: 'senior', label: 'Senior Secondary (Grades XI-XII)' }
  ]

  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      {/* Floating Light Accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full ambient-glow-1 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">Comprehensive Curriculum</span>
          <h3 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-${primaryColor}`}>Academic Progression</h3>
          <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter">
            A thoughtfully segmented pedagogy designed specifically to align with children’s developmental stages.
          </p>
        </div>

        {/* TAB SELECTOR HEADER */}
        <div className="flex items-center w-full overflow-x-auto no-scrollbar gap-2 sm:gap-4 pb-4 mb-8 snap-x snap-mandatory">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`tab-btn px-5 py-3 sm:py-3.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 border shrink-0 snap-center cursor-pointer ${
                activeTab === tab.id
                  ? `bg-${primaryColor} text-white border-${primaryColor} active`
                  : `bg-white text-brand-charcoal hover:bg-${primaryColor}/5 border-${primaryColor}/10`
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CURRICULAR DETAIL BOARD */}
        <div id="curriculum-content" className="bg-white rounded-3xl p-6 sm:p-12 shadow-md border border-brand-greenDeep/5 min-h-[350px] transition-all duration-500 relative">
          
          {/* Tab Panel: Primary */}
          <div 
            ref={el => panesRef.current['primary'] = el}
            id="tab-primary" 
            className={`tab-pane grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${activeTab === 'primary' ? 'active' : 'hidden'}`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-brand-greenDeep/5 text-brand-greenDeep px-3 py-1 rounded-full text-xs font-bold">
                <BookOpen className="w-3.5 h-3.5" /> Play-Way & Experiential Core
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-brand-greenDeep">Nurturing Wonder & Curiosity</h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Our primary program builds a solid foundation of sensory, linguistic, and analytical capacities. We shift from rote-learning to active play-way interactions, introducing primary math concepts and language fluency through creative projects.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className="w-4 h-4 text-brand-gold" /> Project-Based Experiential Learning</li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className="w-4 h-4 text-brand-gold" /> Integrated Phonics, Theatre, and Fine Arts</li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className="w-4 h-4 text-brand-gold" /> Outdoor Nature-Study Labs</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative group mt-4 lg:mt-0">
              <ImageWithLoader src="/7C1A1486.jpg" alt="DLF Primary School Students" loading="lazy" imgClassName="object-center" />
            </div>
          </div>

          {/* Tab Panel: Middle */}
          <div 
            ref={el => panesRef.current['middle'] = el}
            id="tab-middle" 
            className={`tab-pane grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${activeTab === 'middle' ? 'active' : 'hidden'}`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-brand-gold/5 text-brand-gold px-3 py-1 rounded-full text-xs font-bold">
                <Compass className="w-3.5 h-3.5" /> Discovery & Scientific Temper
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-brand-greenDeep">Building Strong Cognitive Pathways</h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Middle school is a period of intellectual exploration. Students transition to structured laboratory experimentation, deeper literary analytical reading, civic values integration, and foundational coding skills.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className="w-4 h-4 text-brand-gold" /> Specialized STEAM Labs (Robotics & AI)</li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className="w-4 h-4 text-brand-gold" /> Active Social Service Projects</li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className="w-4 h-4 text-brand-gold" /> Life-Skill Mentorship Modules</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative group mt-4 lg:mt-0">
              <ImageWithLoader src="/images/home-classroom.jpg" alt="Middle School STEM & Robotics Lab" loading="lazy" imgClassName="object-center" />
            </div>
          </div>

          {/* Tab Panel: Secondary */}
          <div 
            ref={el => panesRef.current['secondary'] = el}
            id="tab-secondary" 
            className={`tab-pane grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${activeTab === 'secondary' ? 'active' : 'hidden'}`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-xs font-bold">
                <Cpu className="w-3.5 h-3.5" /> Rigour, Competency & Focus
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-brand-greenDeep">Excellence in Board Examinations</h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Focused guidance aimed towards building critical thinking and conceptual absolute clarity. Secondary level program ensures that board exams preparations occur alongside critical research assignments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className="w-4 h-4 text-brand-gold" /> Focused CBSE Prep & Assessment Series</li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className="w-4 h-4 text-brand-gold" /> Career Counselling Workshops</li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className="w-4 h-4 text-brand-gold" /> Speech & Public Debating Forums</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative group mt-4 lg:mt-0">
              <ImageWithLoader src="/images/home-stem.jpg" alt="DLF Secondary School Classroom" loading="lazy" imgClassName="object-center" />
            </div>
          </div>

          {/* Tab Panel: Senior Secondary */}
          <div 
            ref={el => panesRef.current['senior'] = el}
            id="tab-senior" 
            className={`tab-pane grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${activeTab === 'senior' ? 'active' : 'hidden'}`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-brand-greenVibrant/5 text-brand-greenVibrant px-3 py-1 rounded-full text-xs font-bold">
                <TrendingUp className="w-3.5 h-3.5" /> Specialization & Leadership
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-brand-greenDeep">Launching Future Pioneers</h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                With specialized streams (Science, Commerce, Humanities), the Senior Secondary curriculum provides state-of-the-art laboratory work, corporate internship linkages, and competitive exam guidance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className="w-4 h-4 text-brand-gold" /> Integrated Engineering & Medical Prep Classes</li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className="w-4 h-4 text-brand-gold" /> Dynamic Alumni-led Mentorship Networks</li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className="w-4 h-4 text-brand-gold" /> Student Council Governance Roles</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative group mt-4 lg:mt-0">
              <ImageWithLoader src="/images/home-arts.jpg" alt="DLF Senior Secondary Arts & Performance" loading="lazy" imgClassName="object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
