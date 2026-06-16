import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { schoolsData } from '../data/schoolsData'
import { 
  Phone, 
  Lock, 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  Award, 
  BookOpen, 
  Users,
  Activity,
  PlayCircle
} from 'lucide-react'

export default function Header() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 50) {
        setIsHeaderScrolled(true)
      } else {
        setIsHeaderScrolled(false)
      }

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsHeaderHidden(true)
      } else {
        setIsHeaderHidden(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* TOP UTILITY STRIP */}
      <div className={`bg-${theme.primary} text-brand-bg text-[11px] font-inter tracking-wider py-2 relative z-50 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center">
          
          {/* Left Contact Info */}
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap w-full lg:w-auto">
            <span className="flex items-center gap-1.5 shrink-0">
              <Phone className={`w-3.5 h-3.5 text-${theme.accent}`} /> 
              Admissions: {currentSchool ? currentSchool.phone : '+91-9871034444'}
            </span>
          </div>

          {/* Right Portal Anchors */}
          <div className="hidden lg:flex items-center gap-4 shrink-0 font-semibold uppercase tracking-widest text-[10px]">
            {schoolId ? (
              <Link to={`/school/${schoolId}/disclosures`} className={`hover:text-${theme.accent} transition-colors duration-300`}>
                CBSE Mandated Disclosure
              </Link>
            ) : (
              <Link to="/contact" className={`hover:text-${theme.accent} transition-colors duration-300`}>
                CBSE Mandated Disclosure
              </Link>
            )}
            <span className={`text-${theme.accent}/30`}>|</span>
            <Link to="/alumni" className={`hover:text-${theme.accent} transition-colors duration-300`}>
              Alumni
            </Link>
            <span className={`text-${theme.accent}/30`}>|</span>
            <a href="#portals" className={`hover:text-${theme.accent} transition-colors duration-300 flex items-center gap-1`}>
              <Lock className="w-3.5 h-3.5" /> Parent Portal
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <header 
        id="main-header" 
        className={`fixed left-0 w-full z-40 transition-all duration-500 py-3 px-4 md:px-12 ${
          isHeaderScrolled ? 'top-0' : 'top-9'
        }`}
        style={{ transform: isHeaderHidden ? 'translateY(-100%)' : 'translateY(0)' }}
      >
        <div 
          id="header-inner" 
          className={`max-w-7xl mx-auto rounded-2xl border px-4 md:px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${
            !schoolId
              ? (isHeaderScrolled 
                  ? 'bg-brand-masterDeep border-white/10 text-white shadow-lg' 
                  : 'bg-brand-masterDeep/90 backdrop-blur-lg border-white/15 text-white/90 shadow-md')
              : (isHeaderScrolled 
                  ? 'bg-white/95 shadow-md border-brand-greenDeep/10 text-brand-charcoal' 
                  : 'bg-brand-bg/90 backdrop-blur-md border-white/20 shadow-sm text-brand-charcoal')
          }`}
        >
          {/* Brand Crest Logo & Text */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-${theme.primary} to-${theme.vibrant} rounded-xl flex items-center justify-center shadow-md relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
              <span className={`font-serif text-${theme.accent} font-extrabold text-sm sm:text-base relative z-10`}>DLF</span>
              <div className={`absolute inset-0 bg-${theme.accent}/10 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000`}></div>
            </div>
            <div>
              <h1 className={`font-serif ${!schoolId ? 'text-white' : `text-${theme.primary}`} text-base font-bold leading-tight tracking-tight`}>
                {currentSchool ? currentSchool.name : 'DLF Schools'}
              </h1>
              <p className="text-[8px] sm:text-[9px] text-brand-gold font-inter uppercase tracking-widest font-semibold">
                {currentSchool ? currentSchool.cbseInfo : 'CBSE Affiliated'}
              </p>
            </div>
          </Link>

          {/* Desktop Nav Menu */}
          <nav className={`hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-semibold ${!schoolId ? 'text-white/95' : 'text-brand-charcoal/95'}`}>
            
            {/* Menu 1: Group / Portal Level Info - Rendered only on common nav bar */}
            {!schoolId && (
              <div className="relative group py-2">
                <button className="flex items-center gap-1 hover:text-brand-gold transition-colors duration-300 cursor-pointer">
                  About Us <ChevronDown className={`w-3.5 h-3.5 text-${theme.accent}`} />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-brand-masterDeep text-white rounded-xl shadow-xl border border-white/10 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="space-y-2 text-xs">
                    <Link to="/philosophy" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold">Our Philosophy</Link>
                    <Link to="/pedagogy" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold">Our Pedagogy</Link>
                    <Link to="/what-sets-us-apart" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold">What Sets Us Apart</Link>
                    <Link to="/news" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors">DLF in the News</Link>
                  </div>
                </div>
              </div>
            )}

            {/* Menu 2: Switch / View Campuses */}
            <div className="relative group py-2">
              <button className={`flex items-center gap-1 hover:text-${!schoolId ? 'brand-gold' : theme.vibrant} transition-colors duration-300 cursor-pointer`}>
                Our Schools <ChevronDown className={`w-3.5 h-3.5 text-${theme.accent}`} />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 ${!schoolId ? 'bg-brand-masterDeep text-white border-white/10' : 'bg-white text-brand-charcoal border-brand-greenDeep/5'} rounded-xl shadow-xl border p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0`}>
                <div className="space-y-2 text-xs">
                  <Link to="/school/dlf-sahibabad" className={`block px-3 py-2 rounded-lg ${!schoolId ? 'hover:bg-white/10 hover:text-brand-greenVibrant' : 'hover:bg-brand-bg hover:text-brand-greenVibrant'} font-bold transition-colors`}>DLF Public School, Sahibabad</Link>
                  <Link to="/school/dlf-greater-noida" className={`block px-3 py-2 rounded-lg ${!schoolId ? 'hover:bg-white/10 hover:text-brand-purpleVibrant' : 'hover:bg-brand-bg hover:text-brand-purpleVibrant'} font-bold transition-colors`}>DLF World School, G. Noida</Link>
                  <div className={`border-t ${!schoolId ? 'border-white/10' : `border-${theme.primary}/10`} my-2`}></div>
                  <Link to="/" className={`block px-3 py-2 rounded-lg ${!schoolId ? 'hover:bg-white/10 hover:text-brand-gold' : `hover:bg-brand-bg hover:text-${theme.primary}`} font-semibold transition-colors`}>Back to Group Website</Link>
                </div>
              </div>
            </div>

            {/* If inside school context, render school-specific submenus */}
            {schoolId ? (
              <>
                <Link to={`/school/${schoolId}/campus`} className={`hover:text-${theme.vibrant} transition-colors duration-300`}>
                  Campus
                </Link>

                <a href="#leadership" onClick={(e) => handleHashClick(e, '#leadership')} className={`hover:text-${theme.vibrant} transition-colors duration-300`}>
                  Leadership
                </a>

                <Link to={`/school/${schoolId}/admissions`} className={`hover:text-${theme.vibrant} transition-colors duration-300`}>
                  Admissions
                </Link>

                <Link to={`/school/${schoolId}/curriculum`} className={`hover:text-${theme.vibrant} transition-colors duration-300`}>
                  Curriculum
                </Link>

                <a href="#holistic" onClick={(e) => handleHashClick(e, '#holistic')} className={`hover:text-${theme.vibrant} transition-colors duration-300`}>
                  Holistic Learning
                </a>
              </>
            ) : (
              <>
                <Link to="/philosophy" className="hover:text-brand-gold transition-colors duration-300">
                  Philosophy
                </Link>
                <Link to="/pedagogy" className="hover:text-brand-gold transition-colors duration-300">
                  Pedagogy
                </Link>
                <Link to="/sports-arena" className="hover:text-brand-gold transition-colors duration-300">
                  Sports Arena
                </Link>
                <Link to="/contact" className="hover:text-brand-gold transition-colors duration-300">
                  Contact Us
                </Link>
              </>
            )}
          </nav>

          {/* Navigation Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {schoolId ? (
              <>
                <a href="#virtual-tour" onClick={(e) => handleHashClick(e, '#virtual-tour')} className="text-xs font-semibold text-brand-charcoal hover:text-brand-gold transition-all flex items-center gap-1">
                  <PlayCircle className="w-4 h-4" /> Virtual Tour
                </a>
                <Link 
                  to={`/school/${schoolId}/admissions`}
                  className={`bg-${theme.primary} text-white hover:bg-${theme.vibrant} px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 relative overflow-hidden group`}
                >
                  <span className="relative z-10">Admissions Open</span>
                  <ArrowRight className="w-3.5 h-3.5 relative z-10 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </>
            ) : (
              <Link 
                to="/contact"
                className="bg-brand-gold text-brand-masterDeep hover:bg-brand-goldlight px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 relative overflow-hidden group"
              >
                <span className="relative z-10">Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 relative z-10 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          {/* Hamburger Menu Trigger */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Navigation Menu" 
            className={`lg:hidden p-3 ${!schoolId ? 'text-white hover:bg-white/10' : `text-${theme.primary} hover:bg-${theme.primary}/5`} rounded-xl transition-colors duration-300`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      <div 
        id="mobile-nav-drawer" 
        className={`fixed inset-0 bg-brand-charcoal/95 backdrop-blur-md z-50 transform transition-transform duration-500 ease-out flex justify-end ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className={`w-full max-w-sm ${!schoolId ? 'bg-brand-masterDeep text-white' : 'bg-brand-bg text-brand-charcoal'} h-full p-6 shadow-2xl relative flex flex-col justify-between overflow-y-auto`}>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Navigation Menu" 
            className={`absolute top-6 right-6 p-3 ${!schoolId ? 'text-white hover:bg-white/10' : `text-${theme.primary} hover:bg-${theme.primary}/10`} rounded-full transition-colors`}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="space-y-8 mt-12">
            <div className={`border-b border-${theme.primary}/10 pb-4`}>
              <p className={`font-serif ${!schoolId ? 'text-white' : `text-${theme.primary}`} text-2xl font-bold`}>
                {currentSchool ? currentSchool.name : 'DLF Schools'}
              </p>
              <p className="text-[10px] text-brand-gold uppercase tracking-widest font-semibold mt-1">
                {currentSchool ? currentSchool.cbseInfo : 'CBSE Affiliated'}
              </p>
            </div>
            
            {/* Expanded Stack Links */}
            <nav className={`space-y-3 flex flex-col font-semibold text-base ${!schoolId ? 'text-white/90' : 'text-brand-charcoal'}`}>
              {schoolId && (
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} py-1.5 border-b border-${theme.primary}/10 text-xs uppercase tracking-widest font-extrabold flex items-center gap-1.5`}>
                  &larr; Back to Group Website
                </Link>
              )}
              {!schoolId && (
                <>
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold py-1 border-b border-white/10">Unified Group Portal</Link>
                  <Link to="/philosophy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold py-1">Our Philosophy</Link>
                  <Link to="/pedagogy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold py-1">Our Pedagogy</Link>
                  <Link to="/what-sets-us-apart" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold py-1">What Sets Us Apart</Link>
                </>
              )}
              
              <div className={`border-t border-${theme.primary}/10 my-2 pt-2`}>
                <p className="text-[10px] uppercase font-bold tracking-wider text-brand-muted mb-2">Our School Portals</p>
                <Link to="/school/dlf-sahibabad" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-greenVibrant flex items-center gap-2 py-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-brand-greenVibrant"></span> DLF Public School, Sahibabad
                </Link>
                <Link to="/school/dlf-greater-noida" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-purpleVibrant flex items-center gap-2 py-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-brand-purpleVibrant"></span> DLF World School, G. Noida
                </Link>
                <div className={`border-t border-${theme.primary}/10 my-1`}></div>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${!schoolId ? 'brand-gold' : theme.vibrant} flex items-center gap-2 py-1.5 font-bold`}>
                  <span className="w-2 h-2 rounded-full bg-brand-gold"></span> Unified Group Website
                </Link>
              </div>

              {schoolId && (
                <div className={`border-t border-${theme.primary}/10 my-2 pt-2 space-y-1`}>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-brand-muted mb-2">{currentSchool.name} Links</p>
                  <Link to={`/school/${schoolId}/campus`} onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} block py-1`}>Campus Infrastructure</Link>
                  <Link to={`/school/${schoolId}/admissions`} onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} block py-1`}>Enrollment & Admissions</Link>
                  <Link to={`/school/${schoolId}/curriculum`} onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} block py-1`}>School Curriculum</Link>
                  <Link to={`/school/${schoolId}/disclosures`} onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} block py-1`}>Mandatory CBSE Disclosures</Link>
                </div>
              )}
            </nav>
          </div>

          {/* Footer CTAs inside mobile drawer */}
          <div className={`space-y-3 pt-6 border-t border-${theme.primary}/10`}>
            {schoolId ? (
              <>
                <Link 
                  to={`/school/${schoolId}/admissions`}
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={`block w-full bg-${theme.primary} text-white text-center py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs`}
                >
                  Apply Now
                </Link>
                <a 
                  href="#virtual-tour" 
                  onClick={(e) => { setIsMobileMenuOpen(false); handleHashClick(e, '#virtual-tour'); }}
                  className={`block w-full border border-${theme.primary}/20 text-${theme.primary} text-center py-3.5 rounded-xl font-bold text-xs`}
                >
                  <PlayCircle className="inline w-4 h-4 mr-1.5" /> Virtual Tour
                </a>
              </>
            ) : (
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="block w-full bg-brand-gold text-brand-masterDeep text-center py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-brand-goldlight transition-colors"
              >
                Contact Us
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
