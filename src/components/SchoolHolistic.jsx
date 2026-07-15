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
    performingArts: 'Performing Arts bring learning to life through movement, music and expression. Whether it is dance, theatre or vocal and instrumental music, students are encouraged to explore rhythm, storytelling and stagecraft. Performances are thoughtfully woven into the school culture—be it assemblies, Annual functions, Celebrations or thematic presentations during Scholastic Months —giving every child a platform to showcase talent and build stage presence.',
    sports: 'Our sports infrastructure reflects both scale and ambition—designed to offer students diverse, high-quality training environments. The campus features a newly developed synthetic football turf, providing professional-grade conditions. Alongside this, students have access to dedicated volleyball and lawn tennis courts, encouraging both team spirit and individual excellence. The standout Olympic-size skating rink provides a unique platform to develop balance and precision. The school houses two well-maintained swimming pools, indoor basketball and badminton courts, and the only pickleball court in the vicinity.',
    visualArts: 'Visual Arts at the school go beyond conventional drawing and painting. Students engage with a wide range of mediums—sketching, painting, sculpture, mixed media, digital design—allowing them to experiment, take creative risks and develop their own artistic voice. The focus is not merely on technique, but on observation, interpretation and original expression. Art becomes a way of thinking, not just creating. This is further enhanced by our art-integrated academic approach, where arts intersect with curriculum topics to deepen conceptual understanding.',
    skillEnrichment: 'A vibrant network of Clubs enriches student life, offering diverse avenues to explore interests and build skills—from AI Coding, Data Science, and Financial Literacy to Mass Media, MUN, Language Clubs, Sports, Yoga, and Performing Arts. The THOTS Lab and Innovation Hub are dedicated spaces where the spirit of inquiry is fuelled. Our scholastic resources are backed by a central library with 20,000+ books, class libraries (Nursery-XII) and the DEAR (Drop Everything And Read) scheduled period.',
    schoolExcursions: 'Educational excursions are not a break from learning—they are learning in motion. Delfites participate in a rich variety of journeys: heritage walks, industry visits, science explorations, biodiversity parks, village immersions, museums, and leadership camps. Visits to institutions such as the President\'s Estate, National Physical Laboratory, Parliament Museum, and research centres enable students to witness knowledge in action. Outdoor camps in Lohagarh Farms, Dharamshala, and Chakrata build resilience. Our students also participate in international exchange tours to Russia, Malaysia, and other global destinations.'
  }

  const subsectionPhotos = {
    performingArts: [
      { src: '/achievements/Nrityanjali.jpeg', caption: 'Classical dance performance at Nrityanjali Inter-School Competition' }
    ],
    sports: [
      { src: '/achievements/Nandini Kansal.jpg', caption: 'Nandini Kansal — Represented India at ITF Nepal & Africa, AITA #21 (UP)' },
      { src: '/achievements/Shreeja Singh at UP State Championship.jpg', caption: 'Shreeja Singh — 5 Golds & 5 State Records, Best Swimmer at UP State Championship' }
    ],
    visualArts: [
      { src: '/achievements/Unique Hospital Bed.jpg', caption: 'Design & sculpture models created by students at the Design Studio' }
    ],
    skillEnrichment: [
      { src: '/achievements/Pendulum Pump.png', caption: 'Mechanical Pendulum Pump — Top 3 at CBSE National Science Exhibition' }
    ],
    schoolExcursions: [
      { src: '/achievements/ramjas (1).jpg', caption: 'Students participating in inter-school outreach and educational camps' }
    ]
  }

  const keys = ['performingArts', 'sports', 'visualArts', 'skillEnrichment', 'schoolExcursions']
  const [activeSub, setActiveSub] = useState('performingArts')

  const ActiveIcon = iconMap[activeSub]

  const subsectionFeatures = {
    performingArts: [
      'Acoustically sound Performing Arts Room for vocal & instrumental music.',
      'Training models in Hindustani classical, Western vocal, and choral music.',
      'Indian classical dance forms (Kathak, Bharatnatyam) and Western styling.',
      'Theatre groups focusing on street plays (Nukkad Natak), speech, and drama.'
    ],
    sports: [
      'Olympic-size skating rink for precision and speed training.',
      'Professional synthetic football turf for training and competitive play.',
      'Two well-maintained swimming pools catering to different age groups and safety levels.',
      'Pickleball Court — introducing students to emerging global sports (only court in vicinity).',
      'Indoor basketball and badminton courts for year-round athletic engagement.'
    ],
    visualArts: [
      'Visual Arts academy focusing on sketching, painting, and digital design.',
      'Clay modeling, pottery wheels, and sculpture making at the Design Studio.',
      'Art-Integrated Academics: dramatization and movement used to teach school subjects.',
      'Student Art Galleries showcasing original work during orientations.'
    ],
    skillEnrichment: [
      'Central Library housing more than 20,000 books across diverse genres.',
      'Class library in each section (Nursery to XII) with books issued every Friday.',
      'DEAR (Drop Everything And Read) scheduled periods in the curriculum.',
      'Tinkering and research spaces: THOTS Lab, Innovation Hub, and FIM Lab.'
    ],
    schoolExcursions: [
      'Visits to NPL, Parliament Museum, and research centres to witness knowledge in action.',
      'Heritage walks, biodiversity park studies, and city forest explorations.',
      'Adventure and leadership camps in Lohagarh Farms, Dharamshala, and Chakrata.',
      'International learning journeys to Russia, Malaysia, and other global destinations.'
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

              {/* Subsection Photos */}
              {subsectionPhotos[activeSub]?.length > 0 && (
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  <h4 className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant} font-inter`}>Gallery</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {subsectionPhotos[activeSub].map((photo, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm group">
                        <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                          <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <p className="text-[9px] text-brand-muted font-inter p-2 leading-tight line-clamp-2">{photo.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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

        {/* ── TRAILBLAZERS & ACHIEVERS SECTION ── */}
        <div className="space-y-8 border-t border-gray-100 pt-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Delfite Trailblazers</span>
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Multi-Dimensional Excellence</h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter font-medium leading-relaxed">
              Every Delfite is encouraged to explore diverse passions and master at least one sport, one art, and one skill. Meet the trailblazers leading the charge globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {[
              {
                name: "Arsalan Alam",
                achievement: "Research Scholar & Innovator",
                desc: "Accepted at SPARC for a summer internship program amongst North American scholars. He also received a $10,000 grant from International Venture Capital firms, crediting DLF's Design Thinking classes from Class VI onwards.",
                img: "/achievements/Aadya Singh.jpg"
              },
              {
                name: "Shreeja Singh",
                achievement: "Champion Swimmer (Class IX)",
                desc: "Won 5 Gold Medals at the UP State Championship in Lucknow, breaking 5 state records. She earned the title of 'Best Swimmer' and qualified for the Swimming Nationals.",
                img: "/achievements/Shreeja Singh at UP State Championship.jpg"
              },
              {
                name: "Ishika Singh",
                achievement: "DPL Cricket All-Rounder",
                desc: "Selected for the Delhi Premier League (DPL) as a prime all-rounder, playing for the South Delhi Superstarz team on regional and national stages.",
                img: "/achievements/Ishika Singh cricket.jpg"
              },
              {
                name: "Nandini Kansal",
                achievement: "ITF International Tennis Player",
                desc: "Represented India at the International Tennis Federation (ITF) tournaments in Nepal and Africa. Ranked #21 in Uttar Pradesh (AITA) and #184 under-18 girls in India.",
                img: "/achievements/Nandini Kansal.jpg"
              },
              {
                name: "Uday Kaul",
                achievement: "ITF Tennis Representative",
                desc: "Represented India at the prestigious ITF Tournament held in Kazakhstan. Currently holds an All India Tennis Association (AITA) Men's Ranking of 262.",
                img: "/achievements/Uday Kaul.jpg"
              }
            ].map((p, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-gray-100 shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50 border-b border-gray-50">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 pt-2 space-y-2">
                    <span className={`text-[9px] uppercase tracking-widest font-extrabold px-2.5 py-1 rounded-full bg-${theme.primary}/10 text-${theme.primary}`}>
                      {p.achievement}
                    </span>
                    <h4 className="font-serif text-base font-bold text-brand-charcoal pt-1">{p.name}</h4>
                    <p className="text-[11px] text-brand-muted leading-relaxed font-inter font-medium">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
