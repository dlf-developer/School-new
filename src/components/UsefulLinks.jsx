import React from 'react'
import { Link } from 'react-router-dom'
import { Globe, FileText, Calendar, DollarSign, MapPin, ExternalLink, ArrowLeft } from 'lucide-react'

export default function UsefulLinks() {
  const linkCategories = [
    {
      title: 'CBSE Compliance & Portals',
      description: 'Statutory links and curriculum guides regulated by the Central Board of Secondary Education.',
      links: [
        { label: 'CBSE Official Website', url: 'https://www.cbse.gov.in', desc: 'Central Board main portal for circulars, exam results, and guidelines.' },
        { label: 'CBSE Academic & Curriculum', url: 'https://cbseacademic.nic.in', desc: 'Syllabus guidelines, textbook lists, and sample question banks.' },
        { label: 'NCERT Digital Textbooks', url: 'https://ncert.nic.in/textbook.php', desc: 'Download free digital copies of NCERT textbooks (Grade I to XII).' }
      ],
      icon: Globe
    },
    {
      title: 'Parent & Student Services',
      description: 'Quick links to on-demand portals, billing systems, and calendars.',
      links: [
        { label: 'Online Fee Payment', url: '#fees', desc: 'Secure digital portal for quarterly tuition fee processing.' },
        { label: 'Parent Portal Login', url: '#parent-portal', desc: 'Access student attendance, report cards, and coordinator circulars.' },
        { label: 'Academic Holiday Calendar', url: '#calendar', desc: 'View and download the school holiday and event calendar for session 2026-27.' }
      ],
      icon: DollarSign
    },
    {
      title: 'Logistics & Manuals',
      description: 'Administrative policies, transport routes, and code guidelines.',
      links: [
        { label: 'School Bus Routes', url: '#transport', desc: 'Detailed transport routes, bus timings, and supervisor contacts.' },
        { label: 'Student Code of Conduct', url: '#rules', desc: 'Statutory rules regarding discipline, uniforms, and digital safety.' },
        { label: 'Transfer Certificate Requests', url: '#tc-request', desc: 'Online request form for transfer certificates and school leaving protocols.' }
      ],
      icon: FileText
    }
  ]

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-masterVibrant">Resource Index</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-masterDeep">Useful Links</h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter">
              Direct access to external educational boards, online fee payments, calendars, and student resources.
            </p>
          </div>
          <Link 
            to="/" 
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-masterDeep hover:opacity-80 transition-opacity shrink-0"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Group Portal
          </Link>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10 max-w-5xl mx-auto pt-4">
          {linkCategories.map((cat, idx) => {
            const CatIcon = cat.icon
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden p-8 sm:p-10 space-y-6 hover:shadow-2xl transition-all duration-300 relative"
              >
                {/* Accent strip */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-masterDeep"></div>

                {/* Section Title */}
                <div className="flex gap-4 items-center border-b border-gray-100 pb-5">
                  <div className="w-12 h-12 bg-brand-masterDeep/10 text-brand-masterDeep rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-masterDeep">{cat.title}</h3>
                    <p className="text-xs text-brand-muted leading-relaxed font-inter font-medium">{cat.description}</p>
                  </div>
                </div>

                {/* Links list */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {cat.links.map((link, lIdx) => (
                    <a 
                      key={lIdx}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="group border border-gray-100 p-6 rounded-2xl bg-gray-50/20 hover:border-brand-gold/30 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-extrabold text-brand-charcoal group-hover:text-brand-masterDeep transition-colors font-inter uppercase tracking-wide leading-tight">{link.label}</h4>
                          <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-gold transition-colors shrink-0" />
                        </div>
                        <p className="text-[10px] text-brand-muted leading-relaxed font-inter font-medium">
                          {link.desc}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
