import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import { Star, ShieldCheck, ArrowLeft, Award, Zap, Smile, X, ArrowRight } from 'lucide-react'

export default function SchoolWinning({ isHomePage = false }) {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]
  const [lightboxImage, setLightboxImage] = useState(null)

  const theme = currentSchool?.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27'
  }

  const awards = [
    { 
      year: '2025-26', 
      title: 'Top Day Co-Ed Rankings', 
      by: 'CFORE', 
      desc: 'Ranked #5 in India for Leadership & Governance, and #8 in India for Academic Rigour.',
      img: '/C Fore Ranking.jpg'
    },
    { 
      year: '2024-25', 
      title: 'Plastic Neutral Certification', 
      by: 'WMARS', 
      desc: 'First school in Delhi-NCR to be recognized as 100% Plastic Neutral for active sustainability drives.',
      img: '/WMARS.jpeg'
    },
    { 
      year: '2023-24', 
      title: 'National Pedagogical Leadership Award', 
      by: 'CBSE Board', 
      desc: 'Conferred for outstanding success and leadership in student-led skill acquisition programs.',
      img: '/Skillbuilder Certificate.jpeg'
    },
    { 
      year: '2022-23', 
      title: 'International Sports Excellence', 
      by: 'SGA Africa & Kazakhstan', 
      desc: 'Honoring school athletes representing India on international platforms in skating and basketball.',
      img: '/RIDS.JPG'
    }
  ]

  const studentAchievements = [
    {
      category: 'Innovation',
      color: theme.primary,
      items: [
        { img: '/achievements/pendulum-pump.png', caption: 'Mechanical Pendulum Pump — Top 3 at CBSE National Science Exhibition out of 447 projects from 377 schools' },
        { img: '/achievements/csir-hackathon.jpg', caption: 'CSIR Jigyasa Epic Hackathon 2024 — Silver & ₹30,000 for DRISHYAMITRAM, helping visually impaired navigate public spaces' },
        { img: '/achievements/project-hornbill.jpg', caption: 'Project Hornbill — 2nd at World Robot Olympiad; also Top 3 at Eurekathon winning goodies worth $619 USD' },
        { img: '/achievements/mission-talaash.jpg', caption: "Mission Talaash — Ranked India's Top 20 innovations out of 2,512 entries from 27 states" },
      ]
    },
    {
      category: 'Sports',
      color: theme.vibrant,
      items: [
        { img: '/achievements/shreeja-swimmer.jpg', caption: 'Shreeja Singh — Won 5 Gold Medals at UP State Championship, creating 5 New State Records, crowned Best Swimmer' },
        { img: '/achievements/nandini-kansal.jpg', caption: 'Nandini Kansal — Represented India at ITF Nepal & Africa, AITA Ranking #21 (UP), #184 (U-18 Girls)' },
        { img: '/achievements/tennis-championship.jpg', caption: 'CBSE North Zone-1 Tennis Championship — Bronze in various categories' },
        { img: '/achievements/yogasana-championship.jpg', caption: '1st & 2nd position in various categories at 5th District Yogasana North East Championship' },
        { img: '/achievements/gold-yogasana.jpg', caption: 'Anirudh MM — Gold at State Yogasana Sports Championship 2025' },
      ]
    },
    {
      category: 'Commerce & Academic',
      color: theme.primary,
      items: [
        { img: '/achievements/melbourne-competition.jpg', caption: 'University of Melbourne India Case Competition 2025 — Ranked 2nd, earned AUD 1,000, competing against 350+ teams' },
        { img: '/achievements/ncert.jpg', caption: '90+ Delfites acted in 35+ NCERT Educational Videos' },
        { img: '/achievements/ramjas-extempore.png', caption: 'Overall Winning Trophy at Ramjas Inter-School Extempore Competition' },
        { img: '/achievements/kritika-germany.jpg', caption: 'Kritika Shukla — Represented India at international event in Germany' },
      ]
    },
    {
      category: 'Performing Arts & Outreach',
      color: theme.vibrant,
      items: [
        { img: '/achievements/nrityanjali.jpg', caption: 'Nrityanjali — 1st position, showcasing classical dance excellence on stage' },
        { img: '/achievements/toi-winners.jpg', caption: 'TOI School Rankings — Recognized among the leading schools for academic and co-curricular excellence' },
        { img: '/achievements/sho-for-a-day.jpg', caption: "Anushka's Nari Shakti Moment — Anushka Dhama (Class XII) became SHO for a day at Shalimar Garden Police Station" },
      ]
    }
  ]

  return (
    <div className={`${isHomePage ? 'py-10' : 'pt-28 pb-20 min-h-screen'} text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden font-sans`}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out forwards;
        }
      `}</style>

      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>School Accolades</span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary}`}>A Winning School</h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter font-medium">
              Beyond standard parameters: sculpting academic toppers, international sports champions, and ecological pioneers.
            </p>
          </div>
          {!isHomePage && (
            <Link 
              to={`/school/${activeBranch}`}
              className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:opacity-80 transition-opacity shrink-0`}
            >
              <ArrowLeft className="w-4 h-4" /> Back to School Home
            </Link>
          )}
        </div>

        {/* Counter Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 text-center">
          {[
            { val: '100%', label: 'Board Success', desc: 'Consistent perfect scores in Science & Commerce streams.' },
            { val: 'No. 5', label: 'Leadership & Governance', desc: 'National rank among the country\'s co-educational schools.' },
            { val: '15+', label: 'Global Innovation Grants', desc: 'Awarded to students for sustainable tech prototypes.' },
            { val: '30+', label: 'Years of Legacy', desc: 'Empowering generation after generation of innovators.' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md space-y-2 hover:shadow-lg transition-shadow">
              <span className={`font-serif text-3xl sm:text-4xl font-extrabold text-${theme.primary}`}>{stat.val}</span>
              <h4 className="text-xs font-bold text-brand-charcoal leading-snug">{stat.label}</h4>
              <p className="text-[10px] text-brand-muted leading-relaxed font-inter font-medium">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Achievements Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Left Column: Ethos card */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-lg space-y-6 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-${theme.primary}`}></div>
            <div className="space-y-2">
              <h3 className={`font-serif text-2xl font-bold text-${theme.primary}`}>Our Philosophy of Winning</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                We are a winning school not because we stress competition, but because we nurture individuality. We teach children to excel without losing their sensitivity, empathy, or moral values.
              </p>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex gap-3.5 items-start">
                <div className={`w-8 h-8 rounded-lg bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center shrink-0`}>
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-charcoal">Future Ready Capability</h4>
                  <p className="text-[10px] text-brand-muted font-inter">Developing critical analysis, STEM reasoning, and computational algorithms.</p>
                </div>
              </div>
              <div className="flex gap-3.5 items-start">
                <div className={`w-8 h-8 rounded-lg bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center shrink-0`}>
                  <Smile className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-charcoal">Sensible Individualism</h4>
                  <p className="text-[10px] text-brand-muted font-inter">Nurturing creative arts and self-worth along with athletic excellence.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline of National Recognitions */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className={`font-serif text-2xl font-bold text-${theme.primary} pl-2`}>National & Global Accolades</h3>
            <div className="space-y-4">
              {(isHomePage ? awards.slice(0, 1) : awards).map((aw, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-md flex flex-col sm:flex-row gap-5 sm:gap-6 items-start hover:shadow-lg transition-shadow relative overflow-hidden group"
                >
                  {aw.img && (
                    <div 
                      onClick={() => setLightboxImage(aw.img)}
                      className="w-full sm:w-32 aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative group/img cursor-zoom-in shrink-0 bg-gray-50 flex items-center justify-center"
                    >
                      <img 
                        src={aw.img} 
                        alt={aw.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">Zoom</span>
                      </div>
                    </div>
                  )}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[10px] uppercase font-bold text-${theme.vibrant} tracking-widest`}>{aw.year}</span>
                      <span className="text-[9px] bg-brand-gold/15 text-brand-gold font-bold px-2 py-0.5 rounded-full">{aw.by}</span>
                    </div>
                    <h4 className="font-serif font-bold text-brand-charcoal text-base sm:text-lg">{aw.title}</h4>
                    <p className="text-xs text-brand-muted leading-relaxed font-inter font-medium">{aw.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {isHomePage && (
              <div className="pt-4 pl-2">
                <Link 
                  to="/awards"
                  className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:opacity-85 transition-opacity group`}
                >
                  View All Achievements & Awards
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </div>

        </div>

        {isHomePage && (
          <div className="text-center pt-8">
            <Link 
              to={`/school/${activeBranch}/winning-school`}
              className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-${theme.primary} text-white font-sans text-xs uppercase font-extrabold tracking-widest hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300 group`}
            >
              View More About Our Winning Record
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
        {/* Student Achievements Photo Gallery — only on full page */}
        {!isHomePage && (
          <div className="space-y-10 pt-4">
            <div className="border-t border-gray-100 pt-8">
              <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Student Achievements Gallery</span>
              <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary} mt-1`}>Our Students, On Every Stage</h3>
              <p className="text-xs sm:text-sm text-brand-muted font-inter font-medium mt-2 max-w-2xl">
                From CBSE national exhibitions and international sports arenas to global innovation grants — Delfites shine everywhere.
              </p>
            </div>

            {studentAchievements.map((group, gIdx) => (
              <div key={gIdx} className="space-y-4">
                <h4 className={`text-xs uppercase font-extrabold tracking-widest text-${group.color} font-inter`}>{group.category}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {group.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      onClick={() => setLightboxImage(item.img)}
                      className="group cursor-zoom-in bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    >
                      <div className="aspect-square overflow-hidden bg-gray-50">
                        <img
                          src={item.img}
                          alt={item.caption}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="text-[10px] text-brand-muted font-inter font-medium leading-relaxed p-3 line-clamp-3">{item.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 cursor-pointer border-none outline-none"
          >
            <X className="w-6 h-6" />
          </button>
          <div 
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightboxImage} 
              alt="Award Certificate View" 
              className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10" 
            />
          </div>
        </div>
      )}
    </div>
  )
}
