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

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30 relative">
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
            { val: '28+', label: 'Years of Legacy', desc: 'Empowering generation after generation of innovators.' }
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
