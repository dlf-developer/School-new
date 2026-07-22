import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import { ArrowLeft, Award, Zap, Smile, X, ArrowRight } from 'lucide-react'

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

  const studentAchievements = [
    {
      category: 'Innovation & Science',
      color: theme.primary,
      items: [
        { img: '/achievements/Pendulum Pump.png', caption: 'Mechanical Pendulum Pump — Amongst TOP 3 Projects at CBSE National Science Exhibition out of 447 projects from 377 schools.' },
        { img: '/achievements/CSIR Innovation Award -2012.png', caption: 'CSIR Innovation Award 2012 — Won the National CSIR Innovation Award and ₹50,000 for ADIA-COOL eco air conditioner.' },
        { img: '/achievements/CSIR Jigyasa Epic Hackathon 2024.jpg', caption: 'CSIR Jigyasa Epic Hackathon 2024 — Silver and ₹30,000 for DRISHYAMITRAM assisting visually impaired navigate public spaces.' },
        { img: '/achievements/CREO.png', caption: 'Project Therophonobot — Earned national recognition at INSPIRE MANAK and a USD 7,500 innovation grant from Emergent Ventures, USA.' },
        { img: '/achievements/Mission Talaash.png', caption: 'Mission Talaash — Ranked among India\'s Top 20 innovations out of 2,512 entries for developing a Lost & Found mobile app.' },
        { img: '/achievements/Unique Hospital Bed.jpg', caption: 'Unique Hospital Bed — 1st Position at Crossroads 2015 for creating a patient-centric bed with automated hygiene features.' },
        { img: '/achievements/Project Hornbill.jpg', caption: 'Project Hornbill — 2nd at World Robot Olympiad (competing against 500 teams, bagging Gold) and Top 3 at Eurekathon ($619 USD).' }
      ]
    },
    {
      category: 'Sports Excellence',
      color: theme.vibrant,
      items: [
        { img: '/achievements/Shreeja Singh at UP State Championship.jpg', caption: 'Shreeja Singh — Won 5 Gold Medals, created 5 New State Records, and earned the title of Best Swimmer at UP State Championship.' },
        { img: '/achievements/Ishika Singh cricket.jpg', caption: 'Ishika Singh — Selected for Delhi Premier League (DPL) as an all-rounder representing South Delhi Superstarz.' },
        { img: '/achievements/Priyanandini Thakur at CBSE North Zone.jpg', caption: 'Priyanandini Thakur — Bagged 4 Gold Medals at CBSE North Zone Swimming Championship.' },
        { img: '/achievements/Nandini Kansal.jpg', caption: 'Nandini Kansal — Represented India @ ITF Nepal and Africa; AITA Ranking #21 in UP, #184 (U-18) in India.' },
        { img: '/achievements/Uday Kaul.jpg', caption: 'Uday Kaul — Represented India at ITF Tournament in Kazakhstan; AITA Men\'s Ranking 262.' },
        { img: '/achievements/Suryansh Kalkande.jpg', caption: 'Suryansh Kalkande — Won AITA National Ranking Tennis Tournaments in the Category of U-18 Doubles.' },
        { img: '/achievements/Anirudh MM.jpeg', caption: 'Anirudh MM — Gold Medal at State Yogasana Sports Championship 2025.' },
        { img: '/achievements/District Yogasana North East Championship.jpg', caption: 'District Yogasana Championship — 1st and 2nd position in various categories at 5th District Yogasana North East Championship.' },
        { img: '/achievements/2nd position at  Ghaziabad District Roll BAll Championship (1).jpg', caption: 'Roll Ball Championship — Bagged 2nd position at Ghaziabad District Roll Ball Championship.' },
        { img: '/achievements/District Tennis Championship 2025.jpg', caption: 'District Tennis — Silver and Gold in various categories at District Tennis Championship 2025.' },
        { img: '/achievements/CBSE NORTH ZONE-1 TENNIS CHAMPIONSHIP.jpg', caption: 'CBSE Tennis — Bronze at CBSE North Zone-1 Tennis Championship in various categories.' },
        { img: '/achievements/SHO for a day.jpg', caption: 'Anushka Dhama (Class XII) — Became SHO for a day at Shalimar Garden Police Station, showcasing Nari Shakti.' }
      ]
    },
    {
      category: 'Commerce & Academics',
      color: theme.primary,
      items: [
        { img: '/achievements/University of Melbourne India Case Competition 2025.jpg', caption: 'University of Melbourne Case Competition 2025 — Ranked 2nd, earned AUD 1,000 competing against 350+ teams.' },
        { img: '/achievements/Intl Commerce Olympiad 2025.jpg', caption: 'International Commerce Olympiad — Gaurangi Mittal (2025) became 1st runner up; Ananya Trivedi (2024) became 2nd runner up.' },
        { img: '/achievements/Kritika Shukla in Germany.jpg', caption: 'Kritika Shukla — Selected to represent India at an international student event in Germany.' }
      ]
    },
    {
      category: 'Performing Arts & Literary',
      color: theme.vibrant,
      items: [
        { img: '/achievements/NCERT.jpeg', caption: 'NCERT Educational Videos — 90+ Delfites acted in 35+ NCERT Educational Videos.' },
        { img: '/achievements/Nrityanjali.jpeg', caption: 'Nrityanjali — 1st position, showcasing classical dance excellence on stage.' },
        { img: '/achievements/Ramjas Extempore.png', caption: 'Ramjas Extempore — Overall Winning Trophy at Ramjas Inter-School Extempore Competition.' },
        { img: '/achievements/TOI Winners.jpeg', caption: 'TOI School Rankings — Conferred for outstanding co-curricular and academic excellence.' }
      ]
    }
  ]

  const dlwsAchievements = [
    {
      category: 'School Accolades & Awards',
      color: theme.primary,
      items: [
        { img: '/images/dlws/dlws-school-achievements-dlws-1.jpg', caption: 'Kalamanjusha Overall Rolling Trophy — DLF World School won the Overall Rolling Trophy at KC International School with 36 medalists across 15 out of 17 events.' },
        { img: '/images/dlws/dlws-hollistic-learning-educational-excursions-1.jpg', caption: 'Sustainability Superstar Award (2024 & 2025) — Conferred by Go Sharpener for 2 consecutive years for UN SDG leadership.' },
        { img: '/images/dlws/dlws-curriculum-1.jpg', caption: 'First in Math Annual Global Ranking 2025–26 — Global recognition for outstanding mathematical skills and critical thinking.' },
        { img: '/images/dlws/dlws-curriculum-2.jpg', caption: 'Project S.O.R.T. Certificate of Appreciation — Awarded by IPCA for leading waste segregation at source in the school community.' }
      ]
    },
    {
      category: 'Innovation, Robotics & STEM',
      color: theme.vibrant,
      items: [
        { img: '/images/dlws/dlws-hollistic-learning-educational-excursions-4.jpg', caption: 'World Skill Challenge National Champions (2026) — Overall Winner Title & ₹16,000 Cash Prize in Drone X Big (Faridabad Nationals).' },
        { img: '/images/dlws/dlws-hollistic-learning-educational-excursions-5.jpg', caption: 'World Skill Challenge Mystery Makers (2026) — National Overall Winner Title & ₹5,000 Cash Prize.' },
        { img: '/images/dlws/dlws-hollistic-learning-educational-excursions-6.jpg', caption: 'Manak Inspire Awards — 1st Position & ₹10,000 Cash Prize for Smart Ambulance, Fake Plate Buster, Smart Dustbin & Smart Watch innovations.' },
        { img: '/images/dlws/dlws-hollistic-learning-educational-excursions-7.jpg', caption: 'SOARFEST 2025 Aero-modelling — 1st Position in Unique Rocketeer, Youngest Innovator, and RC Flying at Sikarpur Airport, Udaipur.' }
      ]
    },
    {
      category: 'Sports & Cultural Excellence',
      color: theme.primary,
      items: [
        { img: '/images/dlws/dlws-hollistic-learning-educational-excursions-8.jpg', caption: 'UP State Swimming Championship — Amaris Patel (Class 7) won 2 Gold & 1 Silver Medal in 100m, 200m & 50m Butterfly.' },
        { img: '/images/dlws/dlws-hollistic-learning-educational-excursions-9.jpg', caption: 'Krida Bharti District Skating Championship — Gayatri Ganjoo (1st), Jayditya Sharma (2nd), Hitanshi Bhati (3rd) at YMCA Greater Noida.' },
        { img: '/images/dlws/dlws-hollistic-learning-educational-excursions-10.jpg', caption: 'WSC State E-Sports Champions — 1st Position in State Level E-Sports competition at Greater Noida.' }
      ]
    }
  ]

  const achievementsToRender = activeBranch === 'dlf-greater-noida' ? dlwsAchievements : studentAchievements

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
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-1.5 bg-${theme.primary}`}></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Our Philosophy of Winning</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                We are a winning school not because we stress competition, but because we nurture individuality. We teach children to excel without losing their sensitivity, empathy, or moral values.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-0 md:pl-8 md:border-l border-gray-100">
              <div className="flex gap-3.5 items-start">
                <div className={`w-9 h-9 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center shrink-0`}>
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal">Future Ready Capability</h4>
                  <p className="text-[10px] sm:text-xs text-brand-muted font-inter leading-relaxed mt-0.5">Developing critical analysis, STEM reasoning, and computational algorithms.</p>
                </div>
              </div>
              <div className="flex gap-3.5 items-start">
                <div className={`w-9 h-9 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center shrink-0`}>
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal">Sensible Individualism</h4>
                  <p className="text-[10px] sm:text-xs text-brand-muted font-inter leading-relaxed mt-0.5">Nurturing creative arts and self-worth along with athletic excellence.</p>
                </div>
              </div>
            </div>
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

            {achievementsToRender.map((group, gIdx) => (
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
