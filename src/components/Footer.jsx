import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'
import { Facebook, Twitter, Instagram, Youtube } from './Icons'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleHashClick = (e, hash) => {
    e.preventDefault()
    if (location.pathname === '/') {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      navigate('/' + hash, { replace: true })
    } else {
      navigate('/' + hash)
    }
  }

  return (
    <footer className="bg-brand-greenDeep text-brand-bg relative overflow-hidden border-t-2 border-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Crest Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center shadow-md">
              <span className="font-serif text-brand-greenDeep font-bold text-xl">DLF</span>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold leading-tight tracking-tight">DLF Public School</h4>
              <p className="text-[9px] text-brand-gold uppercase tracking-widest font-semibold font-inter">Ghaziabad &bull; CBSE Affiliated</p>
            </div>
          </div>
          <p className="text-xs text-brand-bg/75 leading-relaxed font-inter">
            Redefining education with continuous innovation, dynamic experiential pedagogy, and zero-waste models.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook Page" className="w-8 h-8 bg-brand-greenVibrant/20 rounded-full flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-greenDeep transition-all"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Twitter Page" className="w-8 h-8 bg-brand-greenVibrant/20 rounded-full flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-greenDeep transition-all"><Twitter className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram Page" className="w-8 h-8 bg-brand-greenVibrant/20 rounded-full flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-greenDeep transition-all"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Youtube Channel" className="w-8 h-8 bg-brand-greenVibrant/20 rounded-full flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-greenDeep transition-all"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-serif font-bold text-base text-brand-gold">Quick Navigation</h4>
          <div className="w-8 h-[1px] bg-brand-gold"></div>
          <ul className="space-y-2 text-xs font-semibold text-brand-bg/85 font-inter">
            <li><a href="#vision" onClick={(e) => handleHashClick(e, '#vision')} className="hover:text-brand-gold transition-colors block py-1">&bull; School Vision</a></li>
            <li><a href="#pedagogy" onClick={(e) => handleHashClick(e, '#pedagogy')} className="hover:text-brand-gold transition-colors block py-1">&bull; Experiential Pedagogy</a></li>
            <li><a href="#curriculum" onClick={(e) => handleHashClick(e, '#curriculum')} className="hover:text-brand-gold transition-colors block py-1">&bull; Academic Portals</a></li>
            <li><a href="#zero-waste" onClick={(e) => handleHashClick(e, '#zero-waste')} className="hover:text-brand-gold transition-colors block py-1">&bull; Zero Waste Model</a></li>
            <li><a href="#procedure" onClick={(e) => handleHashClick(e, '#procedure')} className="hover:text-brand-gold transition-colors block py-1">&bull; Admission Guidelines</a></li>
          </ul>
        </div>

        {/* Mandatory Disclosures */}
        <div className="space-y-4">
          <h4 className="font-serif font-bold text-base text-brand-gold">CBSE Disclosures</h4>
          <div className="w-8 h-[1px] bg-brand-gold"></div>
          <ul className="space-y-2 text-xs font-semibold text-brand-bg/85 font-inter">
            <li><a href="#cbse" onClick={(e) => handleHashClick(e, '#cbse')} className="hover:text-brand-gold transition-colors block py-1">&bull; Mandatory Public Disclosure</a></li>
            <li><a href="#fees" onClick={(e) => handleHashClick(e, '#fees')} className="hover:text-brand-gold transition-colors block py-1">&bull; Fee Structure Details</a></li>
            <li><a href="#committee" onClick={(e) => handleHashClick(e, '#committee')} className="hover:text-brand-gold transition-colors block py-1">&bull; Parents Teachers Association</a></li>
            <li><a href="#safety" onClick={(e) => handleHashClick(e, '#safety')} className="hover:text-brand-gold transition-colors block py-1">&bull; Safety Certificates</a></li>
            <li><a href="#academic-calendar" onClick={(e) => handleHashClick(e, '#academic-calendar')} className="hover:text-brand-gold transition-colors block py-1">&bull; Year Academic Calendar</a></li>
          </ul>
        </div>

        {/* Contact Coordinates */}
        <div className="space-y-4 font-inter">
          <h4 className="font-serif font-bold text-base text-brand-gold">Contact School</h4>
          <div className="w-8 h-[1px] bg-brand-gold"></div>
          <p className="text-xs text-brand-bg/75 leading-relaxed">
            DLF Public School, Sector-II,<br />
            Rajendra Nagar, Sahibabad,<br />
            Ghaziabad, Uttar Pradesh 201005
          </p>
          <div className="space-y-1.5 text-xs">
            <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-brand-gold" /> +91-120-2632490 / 2632491</p>
            <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-brand-gold" /> info@dlps.co.in</p>
          </div>
        </div>
      </div>

      <div className="bg-brand-greenDeep/80 py-6 border-t border-white/10 text-center text-[10px] sm:text-[11px] text-brand-bg/70 tracking-wider">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 DLF Public School, Ghaziabad. All Rights Reserved.</p>
          <p className="flex gap-4 font-inter font-semibold">
            <Link to="/" className="hover:text-brand-gold">Home</Link>
            <Link to="/about-us/our-campus" className="hover:text-brand-gold">Our Campus</Link>
            <Link to="/about-us/parent-as-partners" className="hover:text-brand-gold">Parents as Partners</Link>
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
