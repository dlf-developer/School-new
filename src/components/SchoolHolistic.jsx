import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import { Music, Trophy, Palette, Terminal, Compass, ArrowLeft, Heart, CheckCircle2 } from 'lucide-react'

const iconMap = {
  performingArts: Music,
  sports: Trophy,
  visualArts: Palette,
  skillEnrichment: Terminal,
  schoolExcursions: Compass
}

const sectionTitles = {
  performingArts: 'Performing Arts (Dance, Music, Theatre)',
  sports: 'Sports & Athletic Development',
  visualArts: 'Visual Arts, Clay Modeling & Craft',
  skillEnrichment: 'Skill Enrichment & Computational Projects',
  schoolExcursions: 'School Excursions & Field Study'
}

export default function SchoolHolistic() {
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

  const holisticData = currentSchool?.holistic || {
    performingArts: 'Dedicated music, dance, and theatre wings to nurture creative expression.',
    sports: 'State-of-the-art sports arena featuring football, basketball, and athletics.',
    visualArts: 'Creative workshops for fine arts, pottery, and digital media styling.',
    skillEnrichment: 'Robotics labs, computational coding classes, and design thinking bootcamps.',
    schoolExcursions: 'Historical walks, ecological conservation retreats, and leadership camps.'
  }

  const keys = ['performingArts', 'sports', 'visualArts', 'skillEnrichment', 'schoolExcursions']
  const [activeSub, setActiveSub] = useState('performingArts')

  const ActiveIcon = iconMap[activeSub]

  const subsectionFeatures = {
    performingArts: [
      'Indian classical dance forms (Kathak, Bharatnatyam) and Western styling.',
      'Vocal training models in Hindustani classical and choral music.',
      'Theatre groups focusing on street plays (Nukkad Natak), speech, and drama.',
      'Acoustically sound recording rooms and dedicated dance workshops.'
    ],
    sports: [
      'A synthetic multi-lane athletics track for sprint training.',
      'Professional coaches for cricket, football, basketball, and outdoor skating.',
      'Annual intra-group and CBSE state sports championships.',
      'Customized health, dietary guidelines, and fitness cards for kids.'
    ],
    visualArts: [
      'Visual arts academy teaching sketching, acrylic painting, and canvas styling.',
      'Pottery wheel clusters and clay baking kilns for ceramics.',
      'Recycled paper crafts, waste-to-art sculpturing projects.',
      'Student art galleries showcasing work during parent-teacher orientations.'
    ],
    skillEnrichment: [
      'Integrated coding modules teaching Python, scratch blocks, and HTML.',
      'Robotics assembly workshops featuring Arduino chips and sensor setups.',
      'Public speaking, debating, and Model United Nations (MUN) training.',
      'Young entrepreneurship cells enabling student-run projects.'
    ],
    schoolExcursions: [
      'Educational historical walks to heritage sites (Qutub Minar, Red Fort).',
      'Ecological excursions to waste recycling plants and organic farms.',
      'Outward bound wilderness camps focusing on survival and rock climbing.',
      'Exchange tours and interactive sessions with global sister schools.'
    ]
  }

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>School Life</span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary}`}>Holistic Learning</h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter font-medium">
              Fostering kinetic, creative, and social intelligence beyond standard classroom boundaries.
            </p>
          </div>
          <Link 
            to={`/school/${activeBranch}`}
            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:opacity-80 transition-opacity shrink-0`}
          >
            <ArrowLeft className="w-4 h-4" /> Back to School Home
          </Link>
        </div>

        {/* Holistic Layout: Left Menu / Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-gray-100 shadow-md p-6 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 block px-3 mb-2">Sub-Sections</span>
            {keys.map(key => {
              const Icon = iconMap[key]
              const isActive = activeSub === key
              return (
                <button
                  key={key}
                  onClick={() => setActiveSub(key)}
                  className={`w-full text-left flex items-center gap-3.5 px-4 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    isActive 
                      ? `bg-${theme.primary} text-white shadow-md` 
                      : 'hover:bg-gray-50 text-brand-charcoal'
                  }`}
                >
                  <Icon className="w-4.5 h-4.5 shrink-0" />
                  <span>{key === 'performingArts' ? 'Performing Arts' : key === 'schoolExcursions' ? 'School Excursions' : key === 'skillEnrichment' ? 'Skill Enrichment' : key === 'visualArts' ? 'Visual Arts' : 'Sports Development'}</span>
                </button>
              )
            })}
          </div>

          {/* Right Detailed Content Panel */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden min-h-[400px] flex flex-col justify-between">
            <div className="p-8 sm:p-10 space-y-6">
              
              {/* Active Header */}
              <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
                <div className={`w-12 h-12 bg-${theme.primary}/10 text-${theme.primary} rounded-2xl flex items-center justify-center`}>
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal">
                    {sectionTitles[activeSub]}
                  </h3>
                  <span className={`text-[10px] uppercase font-bold text-${theme.vibrant} tracking-widest`}>Subsection Ethos</span>
                </div>
              </div>

              {/* Ethos Description */}
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium bg-gray-50/50 p-6 rounded-2xl border border-gray-100/50">
                {holisticData[activeSub]}
              </p>

              {/* Features List */}
              <div className="space-y-4 pt-2">
                <h4 className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant} font-inter`}>Core Activities & Focus Area</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {subsectionFeatures[activeSub].map((feat, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <CheckCircle2 className={`w-4 h-4 text-${theme.accent} shrink-0 mt-0.5`} />
                      <span className="text-xs font-semibold text-brand-charcoal font-inter leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Quote Strip */}
            <div className={`bg-${theme.primary}/5 border-t border-gray-100 p-6 flex items-center gap-3`}>
              <Heart className={`w-5 h-5 text-${theme.accent}`} />
              <p className="text-[10px] sm:text-xs font-inter font-bold text-brand-muted">
                At DLF Schools, physical stamina and artistic talent are sculpted equally alongside scientific temperament.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
