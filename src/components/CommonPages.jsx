import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Mail, Phone, MapPin, Map, ExternalLink, X } from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'
import Alumni from './Alumni'
import SchoolNews from './SchoolNews'

export default function CommonPages() {
  const { global } = useSiteData()
  const { schoolId } = useParams()
  const location = useLocation()
  const path = location.pathname

  const [activeMapModal, setActiveMapModal] = useState(null)

  const news = global?.news || {
    sectionLabel: 'Press Room',
    sectionTitle: 'DLF in the News',
    sectionSubtitle: 'Media coverage, national rankings, and institutional recognitions.',
    articles: []
  }

  const [formData, setFormData] = useState({
    school: schoolId || 'dlf-sahibabad',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ school: schoolId || 'dlf-sahibabad', name: '', email: '', phone: '', subject: '', message: '' })
    }, 4000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // ── News ──────────────────────────────────────────────────────────────────
  if (path.includes('news')) {
    return <SchoolNews />
  }

  // ── Alumni ────────────────────────────────────────────────────────────────
  if (path.includes('alumni')) {
    return <Alumni />
  }

  // ── Careers ───────────────────────────────────────────────────────────────
  if (path.includes('careers')) {
    return (
      <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
        <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">

          {/* Page Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-greenVibrant">Work With Us</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-greenDeep">Careers at DLF Schools</h2>
            <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
            <p className="text-sm text-brand-muted leading-relaxed font-inter">
              Join a community of progressive educators, mentors, and administrators redefining school education in India. Select your campus below to view current openings and apply.
            </p>
          </div>

          {/* Two School Career Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* DLPS Card */}
            <a
              href="https://forms.edunexttechnologies.com/forms/dlps/recruitment/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Top colour bar */}
              <div className="h-1.5 w-full bg-brand-greenDeep" />
              {/* Campus thumbnail */}
              <div className="h-44 overflow-hidden relative bg-brand-greenDeep">
                <img
                  src="/images/home-hero.jpg"
                  alt="DLF Public School Sahibabad Campus"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-greenDeep/20 to-brand-greenDeep/60" />
                <div className="absolute bottom-4 left-5">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/30">
                    Sahibabad · Ghaziabad
                  </span>
                </div>
              </div>
              {/* Body */}
              <div className="p-7 space-y-4 flex flex-col flex-1">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-greenVibrant shrink-0" />
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-greenDeep">DLF Public School</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal">CBSE Affiliation No. 2130384</h3>
                  <p className="text-xs text-brand-muted font-inter leading-relaxed">
                    We recruit passionate PGTs, TGTs, PRTs, and administrative support staff. Click to view current openings and submit your application directly via the recruitment portal.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-brand-greenDeep font-bold text-xs uppercase tracking-wider mt-auto pt-4 border-t border-gray-100 group-hover:gap-3 transition-all">
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  <span>Apply at DLPS Careers Portal</span>
                </div>
              </div>
            </a>

            {/* DLWS Card */}
            <a
              href="https://forms.edunexttechnologies.com/forms/dlws/recruitment/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Top colour bar */}
              <div className="h-1.5 w-full bg-brand-purpleDeep" />
              {/* Campus thumbnail */}
              <div className="h-44 overflow-hidden relative bg-brand-purpleDeep">
                <img
                  src="/dlws.jpeg"
                  alt="DLF World School Greater Noida Campus"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-purpleDeep/20 to-brand-purpleDeep/60" />
                <div className="absolute bottom-4 left-5">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/30">
                    Greater Noida
                  </span>
                </div>
              </div>
              {/* Body */}
              <div className="p-7 space-y-4 flex flex-col flex-1">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-purpleVibrant shrink-0" />
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-purpleDeep">DLF World School</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal">CBSE Affiliation No. 2131920</h3>
                  <p className="text-xs text-brand-muted font-inter leading-relaxed">
                    We recruit dedicated educators, counsellors, and administrative professionals. Click to explore available roles and submit your application via the DLWS recruitment portal.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-brand-purpleDeep font-bold text-xs uppercase tracking-wider mt-auto pt-4 border-t border-gray-100 group-hover:gap-3 transition-all">
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  <span>Apply at DLWS Careers Portal</span>
                </div>
              </div>
            </a>

          </div>

          {/* Bottom note */}
          <p className="text-center text-xs text-brand-muted font-inter max-w-xl mx-auto">
            Both portals are managed via <strong>Edunext Technologies</strong>. For general HR queries, email <a href="mailto:hr@dlps.co.in" className="text-brand-greenDeep font-bold hover:underline">hr@dlps.co.in</a>
          </p>

        </div>
      </div>
    )
  }


  // ── Sports Arena ──────────────────────────────────────────────────────────
  if (path.includes('sports-arena')) {
    return (
      <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
        <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-greenVibrant">Athletics & Fitness</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-greenDeep">Sports Arena</h2>
            <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
            <p className="text-sm text-brand-muted leading-relaxed font-inter">Nurturing sporting excellence, teamwork, and health through world-class athletic programs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="bg-white p-8 rounded-3xl border border-brand-greenDeep/5 shadow-md space-y-4">
              <h3 className="font-serif text-xl font-bold text-brand-greenDeep">Sports Facilities</h3>
              <p className="text-xs text-brand-muted leading-relaxed font-inter">Includes international standard basketball courts, a synthetic athletics track, specialized cricket pitches, and state-of-the-art tennis courts.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-brand-greenDeep/5 shadow-md space-y-4">
              <h3 className="font-serif text-xl font-bold text-brand-greenDeep">Coaching & Training</h3>
              <p className="text-xs text-brand-muted leading-relaxed font-inter">Professional coaching in athletics, cricket, basketball, football, and skating to build national and state-level champions.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── DLPS Sahibabad (Ghaziabad) — Departments Data ──────────────────────────
  const dlpsDepts = [
    {
      id: 'reception', label: 'Reception',
      icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
      phones: ['+91-8130971400', '+91-120-4563955'], emails: ['contactus@dlps.co.in']
    },
    {
      id: 'admissions', label: 'Admissions',
      icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      phones: ['+91-9818166400'], emails: ['admission@dlps.co.in']
    },
    {
      id: 'transport', label: 'Transport',
      icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
      phones: ['+91-9311386400'], emails: ['transport@dlps.co.in']
    },
    {
      id: 'fees', label: 'Fees / Accounts',
      icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      phones: ['+91-9311387400'], emails: ['accounts@dlps.co.in']
    },
    {
      id: 'hr', label: 'HR & Careers',
      icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
      phones: [], emails: ['hr@dlps.co.in']
    },
    {
      id: 'it', label: 'Technical Support',
      icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      phones: [], emails: ['it.support@dlps.co.in']
    }
  ]

  const dlpsSocials = [
    {
      label: 'Facebook', href: 'https://www.facebook.com/dlfps/',
      bg: 'bg-[#1877F2]',
      icon: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    },
    {
      label: 'WhatsApp', href: 'https://wa.me/919818166400',
      bg: 'bg-[#25D366]',
      icon: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    },
    {
      label: 'LinkedIn', href: 'https://www.linkedin.com/company/dlfps',
      bg: 'bg-[#0077B5]',
      icon: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    },
    {
      label: 'Instagram', href: 'https://www.instagram.com/dlfpublicschool/',
      bg: 'bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]',
      icon: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    },
    {
      label: 'Twitter/X', href: 'https://twitter.com/DLFPS1996',
      bg: 'bg-[#1DA1F2]',
      icon: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
    }
  ]

  // ── DLWS Greater Noida — Departments Data ────────────────────────────────
  const dlwsDepts = [
    {
      id: 'reception', label: 'Reception',
      icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
      phones: ['+91-9821182700'], emails: ['contact@dlws.edu.in']
    },
    {
      id: 'admissions', label: 'Admissions',
      icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      phones: ['+91-9958855700'], emails: ['admission@dlws.edu.in']
    },
    {
      id: 'transport', label: 'Transport',
      icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
      phones: ['+91-9289915700'], emails: ['transport@dlws.edu.in']
    },
    {
      id: 'fees', label: 'Fees / Accounts',
      icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      phones: ['+91-9310106856'], emails: ['accounts@dlws.edu.in']
    },
    {
      id: 'it', label: 'Technical Support',
      icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      phones: [], emails: ['it.support@dlws.edu.in']
    }
  ]

  const dlwsSocials = [
    {
      label: 'LinkedIn', href: 'https://www.linkedin.com/company/darbari-lal-foundation-world-school',
      bg: 'bg-[#0077B5]',
      icon: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    },
    {
      label: 'Twitter/X', href: 'https://twitter.com/DlfGreaterNoida?t=OmKx0IpAsUpQEjRa5_-NDA&s=08',
      bg: 'bg-[#1DA1F2]',
      icon: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
    },
    {
      label: 'Facebook', href: 'https://www.facebook.com/dlwsgn',
      bg: 'bg-[#1877F2]',
      icon: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    },
    {
      label: 'Instagram', href: 'https://www.instagram.com/dlfworldschool/?utm_medium=copy_link',
      bg: 'bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]',
      icon: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    },
    {
      label: 'YouTube', href: 'https://youtube.com/channel/UCNhBwOlJJAP0PXPv1VKQWVA',
      bg: 'bg-[#FF0000]',
      icon: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
    },
    {
      label: 'WhatsApp', href: 'https://wa.me/919910966700',
      bg: 'bg-[#25D366]',
      icon: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    }
  ]

  // Determine which page to render based on schoolId parameter
  const isSahibabad = schoolId === 'dlf-sahibabad'
  const isGreaterNoida = schoolId === 'dlf-greater-noida'

  // Dynamic colors:
  // - G. Noida: Purple & Gold (since it's school-specific, we keep its purple theme)
  // - Sahibabad / Master Portal: Green & Gold
  const primaryBg = isGreaterNoida ? 'bg-brand-purpleDeep/5' : 'bg-brand-greenDeep/5'
  const primaryText = isGreaterNoida ? 'text-brand-purpleDeep' : 'text-brand-greenDeep'
  const primaryBorder = isGreaterNoida ? 'border-brand-purpleDeep/10' : 'border-brand-greenDeep/10'
  const primaryBtn = isGreaterNoida ? 'bg-brand-purpleDeep hover:bg-brand-purpleVibrant' : 'bg-brand-greenDeep hover:bg-brand-greenVibrant'
  const sideColor = isGreaterNoida ? 'bg-brand-purpleDeep' : 'bg-brand-greenDeep'

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden">
      {/* Ambient glows */}
      <div className={`absolute top-1/4 left-[-10%] w-[350px] h-[350px] ${isGreaterNoida ? 'bg-brand-purpleDeep/5' : 'bg-brand-greenDeep/5'} rounded-full blur-3xl pointer-events-none`}></div>
      <div className="absolute bottom-1/4 right-[-10%] w-[350px] h-[350px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-14 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className={`text-xs uppercase tracking-widest font-extrabold ${isGreaterNoida ? 'text-brand-purpleVibrant bg-brand-purpleDeep/5 border-brand-purpleDeep/10' : 'text-brand-greenVibrant bg-brand-greenDeep/5 border-brand-greenDeep/10'} px-3 py-1.5 rounded-full border inline-block font-inter`}>
            {isSahibabad ? 'Sahibabad Campus' : isGreaterNoida ? 'Greater Noida Campus' : 'Reach Out'}
          </span>
          <h2 className={`font-serif text-4xl sm:text-5xl font-bold ${isGreaterNoida ? 'text-brand-purpleDeep' : 'text-brand-greenDeep'} tracking-tight`}>
            {isSahibabad ? 'Contact DLF Public School' : isGreaterNoida ? 'Contact DLF World School' : 'Contact Us'}
          </h2>
          <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-sm text-brand-muted leading-relaxed font-inter">
            {isSahibabad 
              ? 'Have queries about admissions, curriculum, or life at DLF Public School Sahibabad?' 
              : isGreaterNoida 
                ? 'Have queries about admissions, curriculum, or life at DLF World School Greater Noida?' 
                : 'Have queries about admissions, curriculum, or life at DLF? Our teams are ready to help.'}
          </p>
        </div>

        {/* ── Campuses Info Section (Hero Area - Side by Side) ── */}
        <div className={`grid grid-cols-1 ${!schoolId ? 'md:grid-cols-2' : 'max-w-xl'} gap-8 max-w-6xl mx-auto`}>
          {/* ── Card: DLF Public School, Sahibabad ── */}
          {(!schoolId || isSahibabad) && (
            <div className="bg-white rounded-3xl border border-brand-greenDeep/10 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-1.5 h-full ${sideColor} rounded-l-3xl`}></div>
              <div className="p-6 pl-8 space-y-4">
                <div>
                  <span className="bg-brand-gold/10 text-brand-gold text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full w-max inline-block mb-2.5 font-inter">Flagship Campus</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-greenDeep">DLF Public School</h3>
                  <p className="text-[10px] text-brand-muted font-inter uppercase tracking-wider mt-0.5">Sahibabad, Ghaziabad — CBSE Aff. No. 2130384</p>
                </div>
                <div className="space-y-2.5 text-xs font-inter text-brand-muted">
                  <p className="flex items-start gap-2.5 leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                    <span>Sector-II, Rajendra Nagar, Sahibabad, Ghaziabad, UP 201005</span>
                  </p>
                </div>

                {/* WhatsApp CTA */}
                <a href="https://wa.me/919818166400" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366]/8 border border-[#25D366]/25 rounded-2xl px-4 py-2.5 hover:bg-[#25D366]/15 transition-colors group">
                  <svg className="w-5 h-5 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div className="flex-1">
                    <span className="block text-[9px] text-brand-muted uppercase tracking-wider font-bold font-inter">WhatsApp</span>
                    <span className="text-xs text-brand-charcoal font-semibold font-inter group-hover:text-brand-greenDeep transition-colors">+91-9818166400</span>
                  </div>
                </a>

                {/* Department rows */}
                <div className="space-y-1.5">
                  <p className="text-[9px] font-bold text-brand-muted uppercase tracking-widest font-inter pb-0.5">Departments</p>
                  {dlpsDepts.map((dept) => (
                    <div key={dept.id} className="bg-brand-bg/70 rounded-xl px-3.5 py-2.5 border border-brand-greenDeep/5 space-y-1.5">
                      <div className="flex items-center gap-2 text-[9px] font-bold text-brand-greenDeep uppercase tracking-wider font-inter">
                        <span className="text-brand-gold">{dept.icon}</span>
                        {dept.label}
                      </div>
                      <div className="pl-5 space-y-1">
                        {dept.phones.map((ph) => (
                          <a key={ph} href={`tel:${ph.replace(/[\s-]/g, '')}`}
                            className="flex items-center gap-2 text-xs text-brand-muted hover:text-brand-greenDeep transition-colors font-inter">
                            <Phone className="w-3 h-3 shrink-0 text-brand-gold" />{ph}
                          </a>
                        ))}
                        {dept.emails.map((em) => (
                          <a key={em} href={`mailto:${em}`}
                            className="flex items-center gap-2 text-xs text-brand-muted hover:text-brand-greenDeep transition-colors font-inter">
                            <Mail className="w-3 h-3 shrink-0 text-brand-gold" />{em}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-[9px] font-bold text-brand-muted uppercase tracking-widest font-inter mb-2.5">Follow DLPS Sahibabad</p>
                  <div className="flex flex-wrap gap-2">
                    {dlpsSocials.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                        className={`${s.bg} w-8 h-8 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-md transition-all duration-200`}>
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Card: DLF World School, Greater Noida ── */}
          {(!schoolId || isGreaterNoida) && (
            <div className="bg-white rounded-3xl border border-brand-purpleDeep/20 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-purpleDeep rounded-l-3xl"></div>
              <div className="p-6 pl-8 space-y-4">
                {/* Header */}
                <div>
                  <span className="bg-brand-gold/10 text-brand-gold text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full w-max inline-block mb-2.5 font-inter">World School Campus</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-purpleDeep">DLF World School</h3>
                  <p className="text-[10px] text-brand-muted font-inter uppercase tracking-wider mt-0.5">Greater Noida, UP — CBSE Aff. No. 2131920</p>
                </div>

                {/* Address */}
                <p className="flex items-start gap-2.5 text-xs font-inter text-brand-muted leading-relaxed">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                  <span>HS-31, Sector Zeta-1, Greater Noida (UP), PIN 201308</span>
                </p>

                {/* WhatsApp CTA */}
                <a href="https://wa.me/919910966700" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366]/8 border border-[#25D366]/25 rounded-2xl px-4 py-2.5 hover:bg-[#25D366]/15 transition-colors group">
                  <svg className="w-5 h-5 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div className="flex-1">
                    <span className="block text-[9px] text-brand-muted uppercase tracking-wider font-bold font-inter">WhatsApp</span>
                    <span className="text-xs text-brand-purpleDeep font-semibold font-inter group-hover:text-brand-purpleVibrant transition-colors">+91-9910966700</span>
                  </div>
                </a>

                {/* Department rows */}
                <div className="space-y-1.5">
                  <p className="text-[9px] font-bold text-brand-muted uppercase tracking-widest font-inter pb-0.5">Departments</p>
                  {dlwsDepts.map((dept) => (
                    <div key={dept.id} className="bg-brand-bg/70 rounded-xl px-3.5 py-2.5 border border-brand-purpleDeep/10 space-y-1.5">
                      <div className="flex items-center gap-2 text-[9px] font-bold text-brand-purpleDeep uppercase tracking-wider font-inter">
                        <span className="text-brand-gold">{dept.icon}</span>
                        {dept.label}
                      </div>
                      <div className="pl-5 space-y-1">
                        {dept.phones.map((ph) => (
                          <a key={ph} href={`tel:${ph.replace(/[\s-]/g, '')}`}
                            className="flex items-center gap-2 text-xs text-brand-muted hover:text-brand-purpleDeep transition-colors font-inter">
                            <Phone className="w-3 h-3 shrink-0 text-brand-gold" />{ph}
                          </a>
                        ))}
                        {dept.emails.map((em) => (
                          <a key={em} href={`mailto:${em}`}
                            className="flex items-center gap-2 text-xs text-brand-muted hover:text-brand-purpleDeep transition-colors font-inter">
                            <Mail className="w-3 h-3 shrink-0 text-brand-gold" />{em}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-[9px] font-bold text-brand-muted uppercase tracking-widest font-inter mb-2.5">Follow DLWS Greater Noida</p>
                  <div className="flex flex-wrap gap-2">
                    {dlwsSocials.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                        className={`${s.bg} w-8 h-8 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-md transition-all duration-200`}>
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Direct Embedded Google Maps Section (No Modal) ── */}
        <div className="max-w-6xl mx-auto space-y-6 pt-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[2px] bg-brand-gold"></div>
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-inter">Find Us on the Map</span>
            <div className="flex-1 h-px bg-brand-greenDeep/5"></div>
          </div>

          <div className={`grid grid-cols-1 ${!schoolId ? 'md:grid-cols-2' : 'max-w-3xl mx-auto'} gap-8`}>
            {/* Sahibabad Campus Direct Map */}
            {(!schoolId || isSahibabad) && (
              <div className="bg-white rounded-3xl border border-brand-greenDeep/10 shadow-lg overflow-hidden flex flex-col justify-between">
                <div className="p-5 pb-3 bg-brand-bg/50 border-b border-brand-greenDeep/5 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-brand-greenDeep text-sm leading-tight font-sans">DLF Public School, Sahibabad</h4>
                    <p className="text-[10px] text-brand-muted font-inter">Sector II, Rajendra Nagar, Sahibabad, Ghaziabad</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=DLF+Public+School+Sahibabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-brand-gold hover:underline inline-flex items-center gap-1 shrink-0"
                  >
                    Open App ↗
                  </a>
                </div>
                <div className="aspect-[16/10] w-full bg-gray-100 min-h-[260px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7000.128406067131!2d77.349823!3d28.687726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4430cf367ba0e3f6!2sDLF+Public+School!5e0!3m2!1sen!2sin!4v1490767670966"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Sahibabad Map"
                  />
                </div>
              </div>
            )}

            {/* Greater Noida Campus Direct Map */}
            {(!schoolId || isGreaterNoida) && (
              <div className="bg-white rounded-3xl border border-brand-purpleDeep/10 shadow-lg overflow-hidden flex flex-col justify-between">
                <div className="p-5 pb-3 bg-brand-bg/50 border-b border-brand-purpleDeep/5 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-brand-purpleDeep text-sm leading-tight font-sans">DLF World School, Greater Noida</h4>
                    <p className="text-[10px] text-brand-muted font-inter">HS-31, Sector Zeta-1, Greater Noida</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=DLF+World+School+Greater+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-brand-gold hover:underline inline-flex items-center gap-1 shrink-0"
                  >
                    Open App ↗
                  </a>
                </div>
                <div className="aspect-[16/10] w-full bg-gray-100 min-h-[260px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28048.189511260713!2d77.52816!3d28.50893500000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceae353377837%3A0x90a2aa79fd19a6f4!2sDLWS+Greater+Noida+%7C+Darbari+Lal+Foundation+World+School!5e0!3m2!1sen!2sin!4v1429681042702"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Greater Noida Map"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
