import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { 
  Phone, 
  MapPin, 
  Lock, 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  Award, 
  Leaf, 
  Globe, 
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

  const handleHashClick = (e, hash) => {
    e.preventDefault()
    if (location.pathname === '/') {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 250)
    }
  }

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Transformation (Solid/Position vs Transparent)
      if (currentScrollY > 50) {
        setIsHeaderScrolled(true)
      } else {
        setIsHeaderScrolled(false)
      }

      // Hide on Scroll Down, Show on Scroll Up
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

  // Lock scroll when mobile menu is open
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
      {/* TOP UTILITY STRIP: Smart Responsive Display */}
      <div className="bg-brand-greenDeep text-brand-bg text-[11px] font-inter tracking-wider py-2 relative z-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center">
          {/* Left Contact Info */}
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap w-full lg:w-auto">
            <span className="flex items-center gap-1.5 shrink-0">
              <Phone className="w-3.5 h-3.5 text-brand-gold" /> Admissions: +91-9871034444
            </span>
            <span className="hidden sm:flex items-center gap-1.5 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" /> Sahibabad, Ghaziabad
            </span>
          </div>
          {/* Right Portal Anchors */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a href="#cbse-disclosure" className="hover:text-brand-gold transition-colors duration-300 font-semibold uppercase tracking-widest text-[10px]">
              CBSE Mandated Disclosure
            </a>
            <span className="text-brand-gold/30">|</span>
            <a href="#alumni" className="hover:text-brand-gold transition-colors duration-300">
              Alumni
            </a>
            <span className="text-brand-gold/30">|</span>
            <a href="#portals" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" /> Parent Portal
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR (Responsive Sticky Header with Safe Offsets) */}
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
            isHeaderScrolled 
              ? 'bg-white/95 shadow-md border-brand-greenDeep/10' 
              : 'bg-brand-bg/90 backdrop-blur-md border-white/20 shadow-sm'
          }`}
        >
          {/* Brand Crest Logo & Text Combination */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-greenDeep to-brand-greenVibrant rounded-xl flex items-center justify-center shadow-md relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <span className="font-serif text-brand-gold font-extrabold text-lg sm:text-xl relative z-10">DLF</span>
              <div className="absolute inset-0 bg-brand-gold/10 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
            </div>
            <div>
              <h1 className="font-serif text-brand-greenDeep text-base sm:text-lg font-bold leading-tight tracking-tight">
                DLF Public School
              </h1>
              <p className="text-[8px] sm:text-[9px] text-brand-muted font-inter uppercase tracking-widest font-semibold">
                Ghaziabad &bull; CBSE Affiliated
              </p>
            </div>
          </Link>

          {/* Desktop Nav Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-semibold text-brand-charcoal/95">
            <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-brand-greenDeep transition-colors duration-300 cursor-pointer">
                About Us <ChevronDown className="w-3.5 h-3.5 text-brand-gold" />
              </button>
              {/* Mega Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl border border-brand-greenDeep/5 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="space-y-2 text-xs">
                  <Link to="/about-us/our-campus" className="block px-3 py-2 rounded-lg hover:bg-brand-bg hover:text-brand-greenDeep transition-colors duration-200 font-semibold">Our Campus</Link>
                  <Link to="/about-us/parent-as-partners" className="block px-3 py-2 rounded-lg hover:bg-brand-bg hover:text-brand-greenDeep transition-colors duration-200 font-semibold">Parent as Partners</Link>
                  <a href="#vision" onClick={(e) => handleHashClick(e, '#vision')} className="block px-3 py-2 rounded-lg hover:bg-brand-bg hover:text-brand-greenDeep transition-colors duration-200">Our Vision & Mission</a>
                </div>
              </div>
            </div>

            <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-brand-greenDeep transition-colors duration-300 cursor-pointer">
                Academics <ChevronDown className="w-3.5 h-3.5 text-brand-gold" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl border border-brand-greenDeep/5 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="space-y-2 text-xs">
                  <a href="#pedagogy" onClick={(e) => handleHashClick(e, '#pedagogy')} className="block px-3 py-2 rounded-lg hover:bg-brand-bg hover:text-brand-greenDeep transition-colors duration-200">Experiential Pedagogy</a>
                  <a href="#curriculum" onClick={(e) => handleHashClick(e, '#curriculum')} className="block px-3 py-2 rounded-lg hover:bg-brand-bg hover:text-brand-greenDeep transition-colors duration-200">School Curriculums</a>
                  <a href="#results" onClick={(e) => handleHashClick(e, '#results')} className="block px-3 py-2 rounded-lg hover:bg-brand-bg hover:text-brand-greenDeep transition-colors duration-200">Outstanding Board Results</a>
                </div>
              </div>
            </div>

            <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-brand-greenDeep transition-colors duration-300 cursor-pointer">
                Admissions <ChevronDown className="w-3.5 h-3.5 text-brand-gold" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl border border-brand-greenDeep/5 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="space-y-2 text-xs">
                  <a href="#procedure" onClick={(e) => handleHashClick(e, '#procedure')} className="block px-3 py-2 rounded-lg hover:bg-brand-bg hover:text-brand-greenDeep transition-colors duration-200">Procedure & Guidelines</a>
                  <a href="#fees" onClick={(e) => handleHashClick(e, '#fees')} className="block px-3 py-2 rounded-lg hover:bg-brand-bg hover:text-brand-greenDeep transition-colors duration-200">Fee Structure</a>
                  <a href="#enquiry" onClick={(e) => handleHashClick(e, '#enquiry')} className="block px-3 py-2 rounded-lg hover:bg-brand-bg hover:text-brand-greenDeep transition-colors duration-200">Online Admission Enquiry</a>
                </div>
              </div>
            </div>

            <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-brand-greenDeep transition-colors duration-300 cursor-pointer">
                Our Pillars <ChevronDown className="w-3.5 h-3.5 text-brand-gold" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-xl border border-brand-greenDeep/5 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="space-y-2 text-xs">
                  <a href="#zero-waste" onClick={(e) => handleHashClick(e, '#zero-waste')} className="block px-3 py-2 rounded-lg hover:bg-brand-bg hover:text-brand-greenDeep transition-colors duration-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-greenVibrant"></span> Zero Waste Model
                  </a>
                  <a href="#ssr" onClick={(e) => handleHashClick(e, '#ssr')} className="block px-3 py-2 rounded-lg hover:bg-brand-bg hover:text-brand-greenDeep transition-colors duration-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-purpleDeep"></span> Social Service Responsibility
                  </a>
                  <a href="#global-exchange" onClick={(e) => handleHashClick(e, '#global-exchange')} className="block px-3 py-2 rounded-lg hover:bg-brand-bg hover:text-brand-greenDeep transition-colors duration-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-gold"></span> Global Exchange Programs
                  </a>
                </div>
              </div>
            </div>

            <a href="#holistic" onClick={(e) => handleHashClick(e, '#holistic')} className="hover:text-brand-greenDeep transition-colors duration-300">
              Holistic Learning
            </a>
          </nav>

          {/* Navigation Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#virtual-tour" onClick={(e) => handleHashClick(e, '#virtual-tour')} className="text-xs font-semibold text-brand-charcoal hover:text-brand-gold transition-all flex items-center gap-1">
              <PlayCircle className="w-4 h-4" /> Virtual Tour
            </a>
            <a 
              href="#enquiry" 
              onClick={(e) => handleHashClick(e, '#enquiry')}
              className="bg-brand-greenDeep text-white hover:bg-brand-greenVibrant px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Admissions Open</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Hamburger menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Navigation Menu" 
            className="lg:hidden p-3 text-brand-greenDeep hover:bg-brand-greenDeep/5 rounded-xl transition-colors duration-300"
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
        <div className="w-full max-w-sm bg-brand-bg h-full p-6 shadow-2xl relative flex flex-col justify-between overflow-y-auto">
          {/* Close Trigger */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Navigation Menu" 
            className="absolute top-6 right-6 p-3 text-brand-greenDeep hover:bg-brand-greenDeep/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="space-y-8 mt-12">
            <div className="border-b border-brand-greenDeep/10 pb-4">
              <p className="font-serif text-brand-greenDeep text-2xl font-bold">DLF Public School</p>
              <p className="text-[10px] text-brand-muted uppercase tracking-widest font-semibold mt-1">
                Ghaziabad &bull; CBSE Affiliated
              </p>
            </div>
            
            {/* Expanded Stack Links */}
            <nav className="space-y-4 flex flex-col font-semibold text-lg text-brand-charcoal">
              <Link to="/about-us/our-campus" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-greenDeep flex items-center gap-2 py-1">
                <Award className="w-5 h-5 text-brand-gold" /> Our Campus
              </Link>
              <Link to="/about-us/parent-as-partners" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-greenDeep flex items-center gap-2 py-1">
                <Users className="w-5 h-5 text-brand-purpleDeep" /> Parent as Partners
              </Link>
              <a href="#vision" onClick={(e) => { setIsMobileMenuOpen(false); handleHashClick(e, '#vision'); }} className="hover:text-brand-greenDeep flex items-center gap-2 py-1">
                <Award className="w-5 h-5 text-brand-gold" /> About DLPS (Vision)
              </a>
              <a href="#curriculum" onClick={(e) => { setIsMobileMenuOpen(false); handleHashClick(e, '#curriculum'); }} className="hover:text-brand-greenDeep flex items-center gap-2 py-1">
                <BookOpen className="w-5 h-5 text-brand-greenVibrant" /> Academics
              </a>
              <a href="#procedure" onClick={(e) => { setIsMobileMenuOpen(false); handleHashClick(e, '#procedure'); }} className="hover:text-brand-greenDeep flex items-center gap-2 py-1">
                <Users className="w-5 h-5 text-brand-purpleDeep" /> Admissions
              </a>
              <a href="#zero-waste" onClick={(e) => { setIsMobileMenuOpen(false); handleHashClick(e, '#zero-waste'); }} className="hover:text-brand-greenDeep flex items-center gap-2 py-1">
                <Leaf className="w-5 h-5 text-brand-greenDeep" /> Zero-Waste Campus
              </a>
              <a href="#holistic" onClick={(e) => { setIsMobileMenuOpen(false); handleHashClick(e, '#holistic'); }} className="hover:text-brand-greenDeep flex items-center gap-2 py-1">
                <Activity className="w-5 h-5 text-brand-purpleVibrant" /> Holistic Learning
              </a>
            </nav>
          </div>

          {/* Footer CTAs inside mobile drawer */}
          <div className="space-y-3 pt-6 border-t border-brand-greenDeep/10">
            <a 
              href="#enquiry" 
              onClick={(e) => { setIsMobileMenuOpen(false); handleHashClick(e, '#enquiry'); }}
              className="block w-full bg-brand-greenDeep text-white text-center py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs"
            >
              Apply Now
            </a>
            <a 
              href="#virtual-tour" 
              onClick={(e) => { setIsMobileMenuOpen(false); handleHashClick(e, '#virtual-tour'); }}
              className="block w-full border border-brand-greenDeep/20 text-brand-greenDeep text-center py-3.5 rounded-xl font-bold text-xs"
            >
              <PlayCircle className="inline w-4 h-4 mr-1.5" /> Virtual Tour
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
