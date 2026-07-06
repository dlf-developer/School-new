import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
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
  PlayCircle,
  Home,
  BookMarked,
  GraduationCap,
  Sparkles,
  Trophy,
  Newspaper,
  Handshake,
  PhoneCall,
  Compass
} from 'lucide-react'

export default function Header() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const navigate = useNavigate()
  const location = useLocation()
  const { schools } = useSiteData()

  // 1. Detect if we are in a school route context
  const match = location.pathname.match(/^\/school\/([^/]+)/)
  const schoolId = match && schools[match[1]] ? match[1] : null
  const currentSchool = schoolId ? schools[schoolId] : null

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
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0)

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
        {/* Scroll Progress Bar — fixed at very top of viewport */}
      <div className="fixed top-0 left-0 w-full z-[9999] h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full transition-[width] duration-75 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background: schoolId
              ? `linear-gradient(90deg, ${theme.primary === 'brand-greenDeep' ? '#1a5c3a' : '#4a1a6e'}, ${theme.primary === 'brand-greenDeep' ? '#2d8a57' : '#7b3db5'})`
              : 'linear-gradient(90deg, #C59B27, #e8c060)'
          }}
        />
      </div>

      {/* TOP UTILITY STRIP */}
      <div className={`bg-${theme.primary} text-brand-bg text-[11px] font-inter tracking-wider py-2 relative z-50 overflow-hidden ${schoolId ? `border-t border-white/10` : ''}`}>
        <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 flex justify-between items-center">
          
          {/* Left Contact Info */}
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap w-full lg:w-auto">
            <span className="flex items-center gap-1.5 shrink-0">
              <Phone className={`w-3.5 h-3.5 text-${theme.accent}`} /> 
              Admissions: {currentSchool ? currentSchool.phone : '+91-9871034444'}
            </span>
          </div>

          {/* Right Portal Anchors */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0 font-semibold uppercase tracking-widest text-[10px]">
            {schoolId ? (
              <Link to={`/school/${schoolId}/disclosures`} className={`hover:text-${theme.accent} transition-colors duration-300`}>
                CBSE Disclosure
              </Link>
            ) : (
              <Link to="/school/dlf-sahibabad/disclosures" className={`hover:text-${theme.accent} transition-colors duration-300`}>
                CBSE Disclosure
              </Link>
            )}
            <span className={`text-${theme.accent}/30`}>|</span>
            <Link to="/alumni" className={`hover:text-${theme.accent} transition-colors duration-300`}>
              Alumni
            </Link>
            <span className={`text-${theme.accent}/30`}>|</span>
            <Link to="/careers" className={`hover:text-${theme.accent} transition-colors duration-300`}>
              Careers
            </Link>
            <span className={`text-${theme.accent}/30`}>|</span>
            <Link to="/useful-links" className={`hover:text-${theme.accent} transition-colors duration-300`}>
              Useful Links
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
          className={`w-[96%] max-w-[1600px] mx-auto rounded-2xl border px-4 md:px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${
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
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-500 bg-white`}>
              <img 
                src="/images/dlf-crest.png" 
                alt="DLF Public School Crest" 
                className="w-full h-full object-contain p-0.5"
              />
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
            
            {/* Menu 1: Group / Portal Level Info */}
            {!schoolId && (
              <div className="relative group py-2">
                <button className="flex items-center gap-1 hover:text-brand-gold transition-colors duration-300 cursor-pointer">
                  About Us <ChevronDown className={`w-3.5 h-3.5 text-${theme.accent}`} />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-brand-masterDeep text-white rounded-xl shadow-xl border border-white/10 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="space-y-2 text-xs">
                    <Link to="/thinking-school" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold">A Thinking School with a Soul</Link>
                    <Link to="/vision-mission" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold">Vision & Mission</Link>
                    <Link to="/management" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold">Our Management</Link>
                    <Link to="/parent-partners" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold">Parents as Partners</Link>
                    <Link to="/awards" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold">School Awards</Link>
                  </div>
                </div>
              </div>
            )}

            {/* Menu 1b: Our Pedagogy Dropdown */}
            {!schoolId && (
              <div className="relative group py-2">
                <button className="flex items-center gap-1 hover:text-brand-gold transition-colors duration-300 cursor-pointer">
                  Our Pedagogy <ChevronDown className={`w-3.5 h-3.5 text-${theme.accent}`} />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-brand-masterDeep text-white rounded-xl shadow-xl border border-white/10 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="space-y-2 text-xs">
                    <Link to="/pedagogy/early-years" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold">Early Years</Link>
                    <Link to="/pedagogy/primary-years" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold">Primary Years</Link>
                    <Link to="/pedagogy/middle-years" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold">Middle Years</Link>
                    <Link to="/pedagogy/senior-years" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold transition-colors font-semibold">Senior Years</Link>
                  </div>
                </div>
              </div>
            )}

            {/* Menu 2: Our Schools — simple dropdown on master, mega menu on school routes */}
            <div className="relative group py-2">
              <button className={`flex items-center gap-1 hover:text-${!schoolId ? 'brand-gold' : theme.vibrant} transition-colors duration-300 cursor-pointer`}>
                Our Schools <ChevronDown className={`w-3.5 h-3.5 text-${theme.accent}`} />
              </button>

              {/* ── MASTER SITE: simple dropdown ── */}
              {!schoolId && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-brand-masterDeep text-white border border-white/10 rounded-xl shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="space-y-2 text-xs">
                    <Link to="/school/dlf-sahibabad" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-greenVibrant font-bold transition-colors">DLF Public School, Sahibabad</Link>
                    <Link to="/school/dlf-greater-noida" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-purpleVibrant font-bold transition-colors">DLF World School, G. Noida</Link>
                    <div className="border-t border-white/10 my-2"></div>
                    <Link to="/" className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-gold font-semibold transition-colors">Back to Group Website</Link>
                  </div>
                </div>
              )}

              {/* ── SCHOOL SITE: full mega menu ── */}
              {schoolId && (
                <div
                  className="absolute top-full left-1/2 -translate-x-[30%] mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                  style={{ width: '1008px', zIndex: 200 }}
                >
                  {/* Caret */}
                  <div className="absolute -top-2 left-[30%] -translate-x-1/2 w-4 h-2 overflow-hidden">
                    <div className="w-3 h-3 bg-white rotate-45 mx-auto translate-y-1.5 shadow-sm" />
                  </div>

                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex">

                    {/* ── PART 1: Switch Campus ── */}
                    <div className="w-[33.33%] p-5 bg-gray-50 border-r border-gray-100 flex flex-col gap-3">
                      <p className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">Switch Campus</p>

                      {/* DLF Public School card - show only if NOT active */}
                      {schoolId !== 'dlf-sahibabad' && (
                        <Link
                          to="/school/dlf-sahibabad"
                          className="group/card flex flex-col rounded-xl border border-gray-100 bg-white hover:border-brand-greenDeep/30 hover:shadow-md transition-all duration-300 overflow-hidden"
                        >
                          <div className="h-20 w-full overflow-hidden relative bg-brand-greenDeep">
                            <img 
                              src="/DJI_0044.JPG" 
                              alt="DLF Public School Sahibabad Campus" 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-greenDeep/10"></div>
                          </div>
                          <div className="p-3.5 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-brand-greenVibrant shrink-0" />
                              <span className="text-[11px] font-extrabold text-brand-greenDeep uppercase tracking-wide leading-tight">DLF Public School</span>
                            </div>
                            <p className="text-[9.5px] text-gray-500 pl-4">Sahibabad, Ghaziabad · CBSE Aff. 2130384</p>
                            <div className="flex gap-1.5 pl-4 mt-1.5 flex-wrap">
                              {['Campus', 'Admissions', 'Curriculum'].map(lbl => (
                                <Link
                                  key={lbl}
                                  to={`/school/dlf-sahibabad/${lbl.toLowerCase()}`}
                                  className="text-[9px] bg-brand-greenDeep/10 text-brand-greenDeep hover:bg-brand-greenDeep hover:text-white px-2 py-0.5 rounded-full font-semibold transition-all"
                                  onClick={e => e.stopPropagation()}
                                >{lbl}</Link>
                              ))}
                            </div>
                          </div>
                        </Link>
                      )}

                      {/* DLF World School card - show only if NOT active */}
                      {schoolId !== 'dlf-greater-noida' && (
                        <Link
                          to="/school/dlf-greater-noida"
                          className="group/card flex flex-col rounded-xl border border-gray-100 bg-white hover:border-brand-purpleDeep/30 hover:shadow-md transition-all duration-300 overflow-hidden"
                        >
                          <div className="h-20 w-full overflow-hidden relative bg-brand-purpleDeep">
                            <img 
                              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=600" 
                              alt="DLF World School Greater Noida Campus" 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-purpleDeep/10"></div>
                          </div>
                          <div className="p-3.5 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-brand-purpleVibrant shrink-0" />
                              <span className="text-[11px] font-extrabold text-brand-purpleDeep uppercase tracking-wide leading-tight">DLF World School</span>
                            </div>
                            <p className="text-[9.5px] text-gray-500 pl-4">Greater Noida · CBSE Aff. 2131920</p>
                            <div className="flex gap-1.5 pl-4 mt-1.5 flex-wrap">
                              {['Campus', 'Admissions', 'Curriculum'].map(lbl => (
                                <Link
                                  key={lbl}
                                  to={`/school/dlf-greater-noida/${lbl.toLowerCase()}`}
                                  className="text-[9px] bg-brand-purpleDeep/10 text-brand-purpleDeep hover:bg-brand-purpleDeep hover:text-white px-2 py-0.5 rounded-full font-semibold transition-all"
                                  onClick={e => e.stopPropagation()}
                                >{lbl}</Link>
                              ))}
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>

                    {/* ── PART 2: Philosophy & Ethos ── */}
                    <div className="w-[33.33%] p-5 border-r border-gray-100 flex flex-col">
                      <p className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-3">Philosophy & Ethos</p>
                      <div className="grid grid-cols-1 gap-0.5">
                        {[
                          { label: 'Group Home', to: '/', Icon: Home },
                          { label: 'Thinking School', to: '/thinking-school', Icon: BookMarked },
                          { label: 'Vision & Mission', to: '/vision-mission', Icon: Compass },
                          { label: 'Our Pedagogy', to: '/pedagogy', Icon: GraduationCap },
                          { label: 'What Sets Us Apart', to: '/what-sets-us-apart', Icon: Sparkles },
                        ].map(({ label, to, Icon: NavIcon }) => (
                          <Link
                            key={to}
                            to={to}
                            className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-brand-masterDeep/5 group/link transition-colors duration-200"
                          >
                            <NavIcon className="w-3.5 h-3.5 text-gray-400 group-hover/link:text-brand-masterDeep transition-colors shrink-0" />
                            <span className="text-[11.5px] font-semibold text-brand-charcoal group-hover/link:text-brand-masterDeep transition-colors">{label}</span>
                            <ArrowRight className="w-3 h-3 text-gray-300 group-hover/link:text-brand-masterDeep group-hover/link:translate-x-0.5 transition-all ml-auto" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* ── PART 3: Governance & Community ── */}
                    <div className="w-[33.33%] p-5 flex flex-col justify-between">
                      <div>
                        <p className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-3">Governance & Community</p>
                        <div className="grid grid-cols-1 gap-0.5">
                          {[
                            { label: 'Our Management', to: '/management', Icon: Users },
                            { label: 'Parents as Partners', to: '/parent-partners', Icon: Handshake },
                            { label: 'School Awards', to: '/awards', Icon: Award },
                            { label: 'Sports Arena', to: '/sports-arena', Icon: Trophy },
                            { label: 'DLF in the News', to: '/news', Icon: Newspaper },
                            { label: 'Alumni Network', to: '/alumni', Icon: Handshake },
                            { label: 'Contact Us', to: '/contact', Icon: PhoneCall },
                          ].map(({ label, to, Icon: NavIcon }) => (
                            <Link
                              key={to}
                              to={to}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-brand-masterDeep/5 group/link transition-colors duration-200"
                            >
                              <NavIcon className="w-3.5 h-3.5 text-gray-400 group-hover/link:text-brand-masterDeep transition-colors shrink-0" />
                              <span className="text-[11.5px] font-semibold text-brand-charcoal group-hover/link:text-brand-masterDeep transition-colors">{label}</span>
                              <ArrowRight className="w-3 h-3 text-gray-300 group-hover/link:text-brand-masterDeep group-hover/link:translate-x-0.5 transition-all ml-auto" />
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-gray-100 mt-4">
                        <Link
                          to="/"
                          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-brand-masterDeep text-white text-[11px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                        >
                          Visit Group Website <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {schoolId ? (
              <>
                <Link to={`/school/${schoolId}/campus`} className={`hover:text-${theme.vibrant} transition-colors duration-300 font-semibold`}>
                  Campus
                </Link>

                <Link to={`/school/${schoolId}/admissions`} className={`hover:text-${theme.vibrant} transition-colors duration-300 font-semibold`}>
                  Admissions
                </Link>

                <Link to={`/school/${schoolId}/curriculum`} className={`hover:text-${theme.vibrant} transition-colors duration-300 font-semibold`}>
                  Curriculum
                </Link>

                <Link to={`/school/${schoolId}/holistic-learning`} className={`hover:text-${theme.vibrant} transition-colors duration-300 font-semibold`}>
                  Holistic Learning
                </Link>

                {/* About School Dropdown */}
                <div className="relative group py-2">
                  <button className={`flex items-center gap-1 hover:text-${theme.vibrant} transition-colors duration-300 cursor-pointer font-semibold`}>
                    About School <ChevronDown className={`w-3.5 h-3.5 text-${theme.accent}`} />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white text-brand-charcoal rounded-xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="space-y-2 text-xs">
                      <Link to={`/school/${schoolId}/leadership`} className={`block px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold`}>Leadership</Link>
                      <Link to={`/school/${schoolId}/counselling`} className={`block px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold`}>Counselling & Wellness</Link>
                      <Link to={`/school/${schoolId}/winning-school`} className={`block px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold`}>Winning School</Link>
                      <Link to={`/school/${schoolId}/editorials`} className={`block px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold`}>DLF Editorials</Link>
                      <Link to={`/school/${schoolId}/disclosures`} className={`block px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold`}>CBSE Disclosures</Link>
                      <Link to={`/school/${schoolId}/contact`} className={`block px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-${theme.vibrant} transition-colors font-bold`}>Contact School</Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/what-sets-us-apart" className="hover:text-brand-gold transition-colors duration-300 font-semibold">
                  What Sets Us Apart
                </Link>
                <Link to="/contact" className="hover:text-brand-gold transition-colors duration-300 font-semibold">
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
                    <nav className={`space-y-3 flex flex-col font-semibold text-base ${!schoolId ? 'text-white/90' : 'text-brand-charcoal'}`}>
              {schoolId && (
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} py-1.5 border-b border-${theme.primary}/10 text-xs uppercase tracking-widest font-extrabold flex items-center gap-1.5`}>
                  &larr; Back to Group Website
                </Link>
              )}
              {!schoolId && (
                <>
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold py-1 border-b border-white/10">Unified Group Portal</Link>
                  <Link to="/thinking-school" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold py-1">A Thinking School with a Soul</Link>
                  <Link to="/vision-mission" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold py-1">Vision & Mission</Link>
                  <Link to="/management" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold py-1">Our Management</Link>
                  <Link to="/parent-partners" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold py-1">Parents as Partners</Link>
                  <Link to="/awards" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold py-1">School Awards</Link>
                  <Link to="/what-sets-us-apart" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold py-1">What Sets Us Apart</Link>
                  
                  <div className="border-t border-white/10 my-2 pt-2">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-brand-gold mb-1.5">Our Pedagogy</p>
                    <Link to="/pedagogy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold block py-1 pl-3 text-xs">Our Pedagogy (Overview)</Link>
                    <Link to="/pedagogy/early-years" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold block py-1 pl-3 text-xs">Early Years</Link>
                    <Link to="/pedagogy/primary-years" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold block py-1 pl-3 text-xs">Primary Years</Link>
                    <Link to="/pedagogy/middle-years" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold block py-1 pl-3 text-xs">Middle Years</Link>
                    <Link to="/pedagogy/senior-years" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold block py-1 pl-3 text-xs">Senior Years</Link>
                  </div>

                  <Link to="/useful-links" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold py-1">Useful Links</Link>
                  <Link to="/alumni" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold py-1">Alumni Network</Link>
                  <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-gold py-1">Careers</Link>
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
                  <Link to={`/school/${schoolId}/leadership`} onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} block py-1`}>School Leadership</Link>
                  <Link to={`/school/${schoolId}/admissions`} onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} block py-1`}>Enrollment & Admissions</Link>
                  <Link to={`/school/${schoolId}/curriculum`} onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} block py-1`}>School Curriculum</Link>
                  <Link to={`/school/${schoolId}/holistic-learning`} onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} block py-1`}>Holistic Learning</Link>
                  <Link to={`/school/${schoolId}/counselling`} onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} block py-1`}>Counselling & Wellness</Link>
                  <Link to={`/school/${schoolId}/winning-school`} onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} block py-1`}>Winning School</Link>
                  <Link to={`/school/${schoolId}/editorials`} onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} block py-1`}>DLF Editorials</Link>
                  <Link to={`/school/${schoolId}/disclosures`} onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} block py-1`}>Mandatory CBSE Disclosures</Link>
                  <Link to={`/school/${schoolId}/contact`} onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-${theme.vibrant} block py-1`}>Contact School</Link>
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
