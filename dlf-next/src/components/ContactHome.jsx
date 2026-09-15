import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowRight, Building2, ExternalLink } from 'lucide-react'

export default function ContactHome() {
  const campuses = [
    {
      id: 'dlf-sahibabad',
      name: 'DLF Public School',
      location: 'Sahibabad, Ghaziabad',
      address: 'Sector-II, Rajendra Nagar, Sahibabad, Ghaziabad, UP 201005',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=DLF+Public+School+Sahibabad+Ghaziabad+UP+201005',
      phones: ['+91-8130971400', '+91-120-4563955'],
      email: 'contactus@dlps.co.in',
      hours: '8:00 AM – 3:30 PM',
      bgColor: 'bg-[#1B3B22]', // DLPS Deep Forest Green Theme
      badgeBg: 'bg-brand-gold/15 text-brand-gold border-brand-gold/30',
      btnBg: 'bg-brand-gold text-brand-masterDeep hover:bg-white',
      accentColor: 'text-brand-gold',
      contactRoute: '/contact',
      badgeText: 'DLPS Sahibabad'
    },
    {
      id: 'dlf-greater-noida',
      name: 'DLF World School',
      location: 'Greater Noida',
      address: 'HS-31, Sector Zeta-1, Greater Noida (UP), PIN 201308',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=DLF+World+School+Greater+Noida+UP+201308',
      phones: ['+91-9821182700', '+91-9958855700'],
      email: 'contact@dlws.edu.in',
      hours: '8:00 AM – 3:30 PM',
      bgColor: 'bg-[#2C1844]', // DLWS Deep Royal Purple Theme
      badgeBg: 'bg-brand-gold/15 text-brand-gold border-brand-gold/30',
      btnBg: 'bg-brand-gold text-brand-masterDeep hover:bg-white',
      accentColor: 'text-brand-gold',
      contactRoute: '/contact',
      badgeText: 'DLWS G. Noida'
    }
  ]

  return (
    <section id="contact-home" className="py-20 bg-transparent relative overflow-hidden selection:bg-brand-gold/30">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] ambient-glow-1 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] ambient-glow-2 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 relative z-10 space-y-14">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-gold">Reach Out</span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-masterDeep">Contact Us</h3>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter">
            Have questions about admissions, academic programs, or campus facilities? Contact our campus coordinators directly.
          </p>
        </div>

        {/* 2 Campus Cards Grid in respective school themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          {campuses.map((campus) => (
            <div
              key={campus.id}
              className={`${campus.bgColor} text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl border border-white/10 hover:-translate-y-1.5 transition-all duration-500 group`}
            >
              {/* Background Glow Effect */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="space-y-8 relative z-10">
                {/* Top Badge & School Name */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] uppercase font-extrabold tracking-widest px-3.5 py-1 rounded-full border ${campus.badgeBg}`}>
                      {campus.badgeText}
                    </span>
                    <Building2 className="w-5 h-5 text-brand-gold/60" />
                  </div>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {campus.name}
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                    {campus.location}
                  </p>
                </div>

                {/* Details List */}
                <div className="space-y-4 pt-2 border-t border-white/10">
                  {/* Address & Separate Google Maps Line */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-3.5 text-xs text-white/90 leading-relaxed font-sans">
                      <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{campus.address}</span>
                    </div>
                    <div className="pl-7">
                      <a
                        href={campus.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-gold hover:text-white transition-colors underline group/map cursor-pointer"
                        title="Click to view campus location on Google Maps"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="w-3 h-3 group-hover/map:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5 text-xs text-white/90 font-sans">
                    <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{campus.phones.join(', ')}</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3.5 text-xs text-white/90 font-sans">
                    <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{campus.email}</span>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-center gap-3.5 text-xs text-white/70 font-sans font-semibold pt-2">
                    <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Office Hours: {campus.hours}</span>
                  </div>
                </div>
              </div>

              {/* Action Button: Redirects to School Contact Us Page */}
              <div className="pt-8 border-t border-white/10 mt-8 relative z-10">
                <Link
                  to={campus.contactRoute}
                  className={`w-full ${campus.btnBg} font-extrabold text-xs uppercase tracking-widest py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2.5 cursor-pointer group-hover:shadow-xl`}
                >
                  <span>View More Info</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
