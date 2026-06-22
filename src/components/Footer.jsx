import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'
import { Facebook, Twitter, Instagram, Youtube } from './Icons'
import { schoolsData } from '../data/schoolsData'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  // 1. Detect if we are in a school route context
  const match = location.pathname.match(/^\/school\/([^/]+)/)
  const schoolId = match && schoolsData[match[1]] ? match[1] : null
  const currentSchool = schoolId ? schoolsData[schoolId] : null

  // Define dynamic theme configurations based on the selected school
  const theme = currentSchool ? currentSchool.theme : {
    primary: 'brand-masterDeep',
    vibrant: 'brand-masterVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27'
  }

  const handleHashClick = (e, hash) => {
    e.preventDefault()
    const targetPath = schoolId ? `/school/${schoolId}` : '/'
    if (location.pathname === targetPath) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      navigate(targetPath + hash, { replace: true })
    } else {
      navigate(targetPath + hash)
    }
  }

  return (
    <footer className={`bg-${theme.primary} text-brand-bg relative overflow-hidden border-t-2 border-${theme.accent}/30 transition-all duration-300`}>
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Brand & Philosophy */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 bg-${theme.accent} rounded-xl flex items-center justify-center shadow-md`}>
              <span className={`font-serif text-${theme.primary} font-bold text-xl`}>DLF</span>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold leading-tight tracking-tight">
                {currentSchool ? currentSchool.name : 'DLF Schools'}
              </h4>
              <p className={`text-[9px] text-${theme.accent} uppercase tracking-widest font-semibold font-inter`}>
                {currentSchool ? `${currentSchool.shortLocation} • ${currentSchool.cbseInfo}` : 'Sahibabad & Greater Noida'}
              </p>
            </div>
          </div>
          <p className="text-xs text-brand-bg/75 leading-relaxed font-inter">
            Redefining education with continuous innovation, dynamic experiential pedagogy, and zero-waste models.
          </p>
          <div className="space-y-2">
            <h5 className={`text-xs uppercase tracking-widest font-bold text-${theme.accent} font-inter`}>About the Group</h5>
            <ul className="space-y-1.5 text-xs text-brand-bg/85 font-semibold font-inter">
              <li><Link to="/thinking-school" className={`hover:text-${theme.accent} transition-colors`}>&bull; Thinking School</Link></li>
              <li><Link to="/vision-mission" className={`hover:text-${theme.accent} transition-colors`}>&bull; Vision & Mission</Link></li>
              <li><Link to="/parent-partners" className={`hover:text-${theme.accent} transition-colors`}>&bull; Parents as Partners</Link></li>
              <li><Link to="/pedagogy" className={`hover:text-${theme.accent} transition-colors`}>&bull; Our Pedagogy</Link></li>
              <li><Link to="/what-sets-us-apart" className={`hover:text-${theme.accent} transition-colors`}>&bull; What Sets Us Apart</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 2: Group Portal Links */}
        <div className="space-y-4">
          <h4 className={`font-serif font-bold text-base text-${theme.accent}`}>Group Portals</h4>
          <div className={`w-8 h-[1px] bg-${theme.accent}`}></div>
          <ul className="space-y-2 text-xs font-semibold text-brand-bg/85 font-inter">
            <li><Link to="/" className={`hover:text-${theme.accent} transition-colors block py-1`}>&bull; Portal Home</Link></li>
            <li><Link to="/news" className={`hover:text-${theme.accent} transition-colors block py-1`}>&bull; DLF in the News</Link></li>
            <li><Link to="/careers" className={`hover:text-${theme.accent} transition-colors block py-1`}>&bull; Careers at DLF</Link></li>
            <li><Link to="/alumni" className={`hover:text-${theme.accent} transition-colors block py-1`}>&bull; Alumni Network</Link></li>
            <li><Link to="/sports-arena" className={`hover:text-${theme.accent} transition-colors block py-1`}>&bull; Sports Arena</Link></li>
            <li><Link to="/contact" className={`hover:text-${theme.accent} transition-colors block py-1`}>&bull; Contact Corporate</Link></li>
          </ul>
        </div>

        {/* Column 3: School Campuses & Context Links */}
        <div className="space-y-4">
          <h4 className={`font-serif font-bold text-base text-${theme.accent}`}>School Campuses</h4>
          <div className={`w-8 h-[1px] bg-${theme.accent}`}></div>
          <ul className="space-y-2 text-xs font-semibold text-brand-bg/85 font-inter">
            <li><Link to="/school/dlf-sahibabad" className={`hover:text-${theme.accent} transition-colors block py-1 font-bold`}>&bull; DLF Public School, Sahibabad</Link></li>
            <li><Link to="/school/dlf-greater-noida" className={`hover:text-${theme.accent} transition-colors block py-1 font-bold`}>&bull; DLF World School, G. Noida</Link></li>
            
            {schoolId && (
              <>
                <div className="border-t border-white/10 my-2 pt-2"></div>
                <p className={`text-[10px] uppercase font-bold tracking-widest text-${theme.accent}/70 mb-1`}>{currentSchool.shortLocation} Campus Links</p>
                <li><Link to={`/school/${schoolId}/campus`} className={`hover:text-${theme.accent} transition-colors block py-0.5`}>&bull; Campus Infrastructure</Link></li>
                <li><Link to={`/school/${schoolId}/admissions`} className={`hover:text-${theme.accent} transition-colors block py-0.5`}>&bull; Admissions Open</Link></li>
                <li><Link to={`/school/${schoolId}/curriculum`} className={`hover:text-${theme.accent} transition-colors block py-0.5`}>&bull; School Curriculum</Link></li>
                <li><Link to={`/school/${schoolId}/disclosures`} className={`hover:text-${theme.accent} transition-colors block py-0.5`}>&bull; Mandated Disclosures</Link></li>
                <li><a href="#vision" onClick={(e) => handleHashClick(e, '#vision')} className={`hover:text-${theme.accent} transition-colors block py-0.5`}>&bull; School Vision</a></li>
              </>
            )}
          </ul>
        </div>

        {/* Column 4: Compliance & Contact */}
        <div className="space-y-6 font-inter">
          <div className="space-y-4">
            <h4 className={`font-serif font-bold text-base text-${theme.accent}`}>Compliance & CBSE</h4>
            <div className={`w-8 h-[1px] bg-${theme.accent}`}></div>
            <ul className="space-y-2 text-xs font-semibold text-brand-bg/85">
              {schoolId ? (
                <li><Link to={`/school/${schoolId}/disclosures`} className={`hover:text-${theme.accent} transition-colors block py-0.5`}>&bull; Mandatory Public Disclosure</Link></li>
              ) : (
                <li><Link to="/contact" className={`hover:text-${theme.accent} transition-colors block py-0.5`}>&bull; Mandatory Public Disclosure</Link></li>
              )}
              <li><a href="#committee" onClick={(e) => handleHashClick(e, '#committee')} className={`hover:text-${theme.accent} transition-colors block py-0.5`}>&bull; Parents Teachers Association</a></li>
              <li><a href="#safety" onClick={(e) => handleHashClick(e, '#safety')} className={`hover:text-${theme.accent} transition-colors block py-0.5`}>&bull; Safety Certificates</a></li>
              <li><a href="#academic-calendar" onClick={(e) => handleHashClick(e, '#academic-calendar')} className={`hover:text-${theme.accent} transition-colors block py-0.5`}>&bull; Year Academic Calendar</a></li>
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <h5 className={`text-xs uppercase tracking-widest font-bold text-${theme.accent}`}>Contact Details</h5>
            <p className="text-[11px] text-brand-bg/75 leading-relaxed">
              {currentSchool ? (
                currentSchool.id === 'dlf-sahibabad' ? (
                  <>DLF Public School, Sector-II,<br />Rajendra Nagar, Sahibabad,<br />Ghaziabad, UP 201005</>
                ) : (
                  <>DLF World School, Delta-I,<br />HS-17, Delta Sector,<br />Greater Noida, UP 201308</>
                )
              ) : (
                <>DLF Schools Corporate Office,<br />Rajendra Nagar, Sahibabad,<br />Ghaziabad, UP 201005</>
              )}
            </p>
            <div className="space-y-1 text-xs font-semibold">
              <p className="flex items-center gap-2"><Phone className={`w-3.5 h-3.5 text-${theme.accent}`} /> {currentSchool ? currentSchool.phone : '+91-9871034444'}</p>
              <p className="flex items-center gap-2"><Mail className={`w-3.5 h-3.5 text-${theme.accent}`} /> {currentSchool ? (currentSchool.id === 'dlf-sahibabad' ? 'contact@dlfps.com' : 'contact@dlfworldschool.com') : 'contact@dlfps.com'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-${theme.primary}/90 py-6 border-t border-white/10 text-center text-[10px] sm:text-[11px] text-brand-bg/70 tracking-wider`}>
        <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 {currentSchool ? currentSchool.name : 'DLF Schools Group'}. All Rights Reserved.</p>
          <p className="flex gap-4 font-inter font-semibold">
            <Link to="/" className={`hover:text-${theme.accent}`}>Portal Home</Link>
            <Link to="/thinking-school" className={`hover:text-${theme.accent}`}>Thinking School</Link>
            <Link to="/pedagogy" className={`hover:text-${theme.accent}`}>Pedagogy</Link>
          </p>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-[-4rem] right-0 text-[15vw] font-serif font-bold text-white/[0.02] select-none pointer-events-none leading-none">
        EST. 1996
      </div>
    </footer>
  )
}
