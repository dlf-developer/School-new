import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, MapPin, Building2, ShieldCheck, MessageSquare } from 'lucide-react'
import { schoolsData } from '../data/schoolsData'

export default function Footer() {
  const location = useLocation()

  // Detect if we are in a specific school branch context
  const match = location.pathname.match(/^\/school\/([^/]+)/)
  const schoolId = match && schoolsData[match[1]] ? match[1] : null
  const currentSchool = schoolId ? schoolsData[schoolId] : null
  const isDLWS = schoolId === 'dlf-greater-noida'

  // Dynamic Theme Colors
  const footerBg = isDLWS ? 'bg-brand-purpleDeep' : 'bg-brand-greenDeep'
  const subBarBg = isDLWS ? 'bg-[#22183d]' : 'bg-[#1b3518]'
  const goldBorder = 'border-brand-gold/30'

  return (
    <footer className={`${footerBg} text-brand-bg relative overflow-hidden border-t-2 ${goldBorder} transition-colors duration-500 font-sans`}>
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-brand-gold/[0.03] blur-3xl pointer-events-none" />

      {/* Main Grid: 4 Core Sections */}
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-10 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative z-10">
        
        {/* ── SECTION 1: DARBARI LAL FOUNDATION ── */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 pb-2 border-b border-white/10">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md p-1 shrink-0 overflow-hidden">
              <img 
                src="/images/dlf-crest.png" 
                alt="Darbari Lal Foundation Crest" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-gold block leading-none">
                Established 1996
              </span>
              <h4 className="font-serif text-sm font-black uppercase tracking-tight text-white mt-0.5">
                Darbari Lal Foundation
              </h4>
            </div>
          </div>

          <p className="text-xs text-brand-bg/75 leading-relaxed font-inter">
            Redefining education through experiential thinking, ethical leadership, and 30+ years of scholastic legacy.
          </p>

          <div className="space-y-2">
            <h5 className="text-[11px] uppercase tracking-widest font-extrabold text-brand-gold font-inter">
              Darbari Lal Foundation
            </h5>
            <ul className="space-y-1.5 text-xs text-brand-bg/85 font-semibold font-inter">
              <li>
                <Link to="/" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Foundation Home
                </Link>
              </li>
              <li>
                <Link to="/thinking-school" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; A Thinking School with a Soul
                </Link>
              </li>
              <li>
                <Link to="/vision-mission" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Vision &amp; Mission
                </Link>
              </li>
              <li>
                <Link to="/pedagogy" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Our Pedagogy &amp; Philosophy
                </Link>
              </li>
              <li>
                <Link to="/management" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Executive Management
                </Link>
              </li>
              <li>
                <Link to="/awards" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Institutional Awards &amp; Honors
                </Link>
              </li>
              <li>
                <Link to="/what-sets-us-apart" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; What Sets Us Apart
                </Link>
              </li>
              <li>
                <Link to="/parent-partners" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Parents as Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ── SECTION 2: DLF PUBLIC SCHOOL (SAHIBABAD) MAJOR LINKS ── */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-greenVibrant shrink-0" />
            <div>
              <h4 className="font-serif text-sm font-black uppercase tracking-tight text-white">
                DLF Public School
              </h4>
              <p className="text-[10px] text-brand-gold font-semibold uppercase tracking-wider">
                Sahibabad, Ghaziabad &bull; Aff. 2130384
              </p>
            </div>
          </div>

          <p className="text-xs text-brand-bg/75 leading-relaxed font-inter">
            Ranked #1 in Ghaziabad with 30+ years of 100% board excellence, science exhibitions, and state athletic records.
          </p>

          <div className="space-y-2">
            <h5 className="text-[11px] uppercase tracking-widest font-extrabold text-brand-gold font-inter">
              Sahibabad Campus Links
            </h5>
            <ul className="space-y-1.5 text-xs text-brand-bg/85 font-semibold font-inter">
              <li>
                <Link to="/school/dlf-sahibabad/admissions" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Admissions Open 2026–27 &amp; Fees
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-sahibabad/virtual-tour" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; 360° Virtual Campus Tour
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-sahibabad/leadership" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; School Leadership &amp; Principal Desk
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-sahibabad/curriculum" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; CBSE &amp; Cambridge Pathways
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-sahibabad/curriculum/academic-results" className="hover:text-brand-gold transition-colors block py-0.5 font-bold text-brand-gold">
                  &bull; Academic Results &amp; Board Toppers
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-sahibabad/holistic-learning" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Holistic Learning &amp; Sports
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-sahibabad/campus" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Zero-Waste Campus Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-sahibabad/winning-school" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Winning School &amp; Accolades
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-sahibabad/contact" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Contact DLPS Sahibabad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ── SECTION 3: DLF WORLD SCHOOL (GREATER NOIDA) MAJOR LINKS ── */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-purpleVibrant shrink-0" />
            <div>
              <h4 className="font-serif text-sm font-black uppercase tracking-tight text-white">
                DLF World School
              </h4>
              <p className="text-[10px] text-brand-gold font-semibold uppercase tracking-wider">
                Greater Noida
              </p>
            </div>
          </div>

          <p className="text-xs text-brand-bg/75 leading-relaxed font-inter">
            Futuristic 5-acre eco-campus fostering design thinking, THOTS cognitive labs, and global robotics excellence.
          </p>

          <div className="space-y-2">
            <h5 className="text-[11px] uppercase tracking-widest font-extrabold text-brand-gold font-inter">
              Greater Noida Campus Links
            </h5>
            <ul className="space-y-1.5 text-xs text-brand-bg/85 font-semibold font-inter">
              <li>
                <Link to="/school/dlf-greater-noida/admissions" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Admissions Open 2026–27 &amp; Fees
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-greater-noida/virtual-tour" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; 360° Virtual Campus Tour
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-greater-noida/principal-desk" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; From the School Head's Desk
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-greater-noida/curriculum" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Progressive CBSE Curriculum
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-greater-noida/curriculum/academic-results" className="hover:text-brand-gold transition-colors block py-0.5 font-bold text-brand-gold">
                  &bull; Academic Results &amp; Honors
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-greater-noida/holistic-learning" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; STEAM, Skating Rink &amp; Sports
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-greater-noida/campus" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; 5-Acre Futuristic Campus
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-greater-noida/winning-school" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Kalamanjusha &amp; Drone X Champions
                </Link>
              </li>
              <li>
                <Link to="/school/dlf-greater-noida/contact" className="hover:text-brand-gold transition-colors block py-0.5">
                  &bull; Contact DLWS Greater Noida
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ── SECTION 4: CAMPUS LOCATIONS & CONTACTS (OFFICIAL CONTACT US DATA) ── */}
        <div className="space-y-5 font-inter">
          <div className="flex items-center gap-2 pb-2 border-b border-white/10">
            <Building2 className="w-4 h-4 text-brand-gold shrink-0" />
            <h4 className="font-serif text-sm font-black uppercase tracking-tight text-white">
              Campus Locations &amp; Contacts
            </h4>
          </div>

          {/* School 1: DLF Public School, Sahibabad */}
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold text-white uppercase tracking-wider">
                DLF Public School, Sahibabad
              </span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-brand-greenVibrant/30 text-green-300">
                CBSE 2130384
              </span>
            </div>
            <p className="text-[11px] text-brand-bg/75 flex items-start gap-1.5 leading-snug">
              <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
              <span>Sector-II, Rajendra Nagar, Sahibabad, Ghaziabad, UP 201005</span>
            </p>
            <div className="space-y-1.5 text-xs font-semibold text-brand-bg/90">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <a href="tel:+918130971400" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
                  <Phone className="w-3 h-3 text-brand-gold shrink-0" />
                  <span>+91-8130971400</span>
                </a>
                <a href="tel:01204563955" className="flex items-center gap-1 hover:text-brand-gold transition-colors text-brand-bg/80 text-[11px]">
                  <span>0120-4563955</span>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <a href="mailto:contactus@dlps.co.in" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
                  <Mail className="w-3 h-3 text-brand-gold shrink-0" />
                  <span>contactus@dlps.co.in</span>
                </a>
                <a href="mailto:admission@dlps.co.in" className="flex items-center gap-1 hover:text-brand-gold transition-colors text-brand-bg/80 text-[11px]">
                  <span>admission@dlps.co.in</span>
                </a>
              </div>
            </div>
          </div>

          {/* School 2: DLF World School, Greater Noida */}
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold text-white uppercase tracking-wider">
                DLF World School, Greater Noida
              </span>
            </div>
            <p className="text-[11px] text-brand-bg/75 flex items-start gap-1.5 leading-snug">
              <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
              <span>HS-31, Sector Zeta-1, Greater Noida (UP), PIN 201308</span>
            </p>
            <div className="space-y-1.5 text-xs font-semibold text-brand-bg/90">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <a href="tel:+919821182700" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
                  <Phone className="w-3 h-3 text-brand-gold shrink-0" />
                  <span>+91-9821182700</span>
                </a>
                <a href="tel:+919958855700" className="flex items-center gap-1 hover:text-brand-gold transition-colors text-brand-bg/80 text-[11px]">
                  <span>+91-9958855700</span>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <a href="mailto:contact@dlws.edu.in" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
                  <Mail className="w-3 h-3 text-brand-gold shrink-0" />
                  <span>contact@dlws.edu.in</span>
                </a>
                <a href="mailto:admission@dlws.edu.in" className="flex items-center gap-1 hover:text-brand-gold transition-colors text-brand-bg/80 text-[11px]">
                  <span>admission@dlws.edu.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── BOTTOM UTILITY BAR WITH SINGLE "MANDATORY DISCLOSURES" LINK ── */}
      <div className={`${subBarBg} py-6 border-t border-white/10 text-center text-[11px] sm:text-xs text-brand-bg/75 tracking-wider font-inter`}>
        <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-bg/80">
            &copy; 2026 {currentSchool ? currentSchool.name : 'Darbari Lal Foundation'}. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-semibold">
            {/* Single Link for Mandatory Disclosures */}
            <Link 
              to="/mandatory-disclosures" 
              className="inline-flex items-center gap-1.5 text-brand-gold hover:text-yellow-300 transition-colors font-bold underline underline-offset-4"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              Mandatory Disclosures
            </Link>

            <Link to="/admission-enquiry" className="hover:text-brand-gold transition-colors">
              Admission Enquiry
            </Link>

            <Link to="/contact" className="hover:text-brand-gold transition-colors">
              Contact Us
            </Link>

            <Link to="/useful-links" className="hover:text-brand-gold transition-colors">
              Useful Links
            </Link>
          </div>
        </div>
      </div>

      {/* Large Ambient Watermark */}
      <div className="absolute bottom-[-3rem] right-0 text-[14vw] font-serif font-bold text-white/[0.02] select-none pointer-events-none leading-none">
        EST. 1996
      </div>
    </footer>
  )
}
