import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FileText, ShieldAlert, ArrowLeft, Building2, CheckCircle2, Clock, FileCheck } from 'lucide-react'
import { schoolsData } from '../data/schoolsData'

export default function MandatoryDisclosures() {
  const location = useLocation()
  
  // Detect if visited from a school context or master group
  const match = location.pathname.match(/^\/school\/([^/]+)/)
  const schoolId = match && schoolsData[match[1]] ? match[1] : null
  const currentSchool = schoolId ? schoolsData[schoolId] : null

  const theme = currentSchool?.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27'
  }

  return (
    <div className="pt-28 pb-20 min-h-screen text-brand-charcoal selection:bg-brand-gold/30 font-sans relative overflow-hidden">
      {/* Ambient decorative blobs */}
      <div className="absolute top-24 left-1/4 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-brand-greenDeep/5 blur-3xl pointer-events-none -z-10" />

      <div className="w-[94%] max-w-[1000px] mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-brand-muted">
            <Link to="/" className="hover:text-brand-charcoal transition-colors">Darbari Lal Foundation</Link>
            <span>/</span>
            <span className="text-brand-charcoal font-bold">Mandatory Disclosures</span>
          </nav>

          <Link
            to={schoolId ? `/school/${schoolId}` : '/'}
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-greenDeep hover:text-brand-greenVibrant transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-gray-150 shadow-xl overflow-hidden p-8 sm:p-12 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-gold/15 text-brand-gold mx-auto shadow-inner">
            <ShieldAlert className="w-8 h-8 text-brand-gold" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="inline-block px-3.5 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-800 text-[11px] font-extrabold uppercase tracking-widest">
              Status: TBD (To Be Disclosed)
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-charcoal">
              CBSE Mandatory Public Disclosures
            </h1>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter">
              Statutory documents, regulatory certificates, trust registrations, and state approvals corresponding to Darbari Lal Foundation Schools are currently under regular annual compilation for Session 2026–27.
            </p>
          </div>

          {/* Status Box */}
          <div className="max-w-xl mx-auto p-6 rounded-2xl bg-gray-50 border border-dashed border-gray-300 text-left space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-brand-charcoal uppercase tracking-wider">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>Compilation Status: In Progress</span>
            </div>
            <p className="text-xs text-brand-muted font-inter leading-relaxed">
              In accordance with Central Board of Secondary Education (CBSE) circular guidelines, the full disclosure gazette containing Affiliation Extension, Society Trust Deed, NOC, Building Safety, Fire Safety, and Water Sanitation certifications will be published here shortly.
            </p>
          </div>

          {/* School Affiliation References */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-4 text-left">
            <div className="p-5 rounded-2xl bg-white border border-gray-150 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-greenDeep" />
                <h4 className="font-serif text-sm font-bold text-brand-charcoal">DLF Public School</h4>
              </div>
              <p className="text-[11px] text-brand-muted">
                Sector-II, Rajendra Nagar, Sahibabad, Ghaziabad, UP
              </p>
              <span className="inline-block text-[10px] font-extrabold text-brand-greenDeep bg-brand-greenDeep/10 px-2 py-0.5 rounded-md">
                CBSE Affiliation No. 2130384
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-150 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-purpleDeep" />
                <h4 className="font-serif text-sm font-bold text-brand-charcoal">DLF World School</h4>
              </div>
              <p className="text-[11px] text-brand-muted">
                HS-31, Sector Zeta-1, Greater Noida (UP), PIN 201308
              </p>
              <span className="inline-block text-[10px] font-extrabold text-brand-purpleDeep bg-brand-purpleDeep/10 px-2 py-0.5 rounded-md">
                CBSE Affiliation No. 2131920
              </span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Link
              to="/school/dlf-sahibabad"
              className="px-6 py-2.5 rounded-xl bg-brand-greenDeep text-white text-xs font-bold hover:bg-brand-greenVibrant transition-all shadow-sm"
            >
              Visit DLPS Sahibabad
            </Link>
            <Link
              to="/school/dlf-greater-noida"
              className="px-6 py-2.5 rounded-xl bg-brand-purpleDeep text-white text-xs font-bold hover:bg-brand-purpleVibrant transition-all shadow-sm"
            >
              Visit DLWS Greater Noida
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
