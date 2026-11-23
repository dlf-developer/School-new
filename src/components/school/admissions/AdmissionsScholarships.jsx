import React from 'react'
import { Award, Trophy, Check, CheckCircle2 } from 'lucide-react'
import { dlpsSponsoredScholarships, dlpsConcessionsList } from '../../../data/schools/dlps/admissionsData'

export default function AdmissionsScholarships({ theme, currentSchool }) {
  const isDLWS = currentSchool?.id === 'dlf-greater-noida'

  return (
    <div className="space-y-10">
      {/* Overview & Philosophy Header Card */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-gray-100 pb-6">
          <div className="space-y-2 max-w-3xl">
            <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>
              Academic &amp; Talent Concessions
            </span>
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
              Scholarship Scheme — {currentSchool?.name}
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed font-medium">
              In line with {currentSchool?.name || 'DLF School'}'s philosophy of encouraging students towards excellence,
              top performers selected on the basis of consolidated year-end results are eligible for various scholarships
              under the Academic Scholarship Scheme.
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-gold/20 via-brand-gold/10 to-transparent p-5 rounded-2xl border border-brand-gold/30 shrink-0 text-center space-y-1 min-w-[240px]">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-charcoal block">
              Dispersed Last Academic Year
            </span>
            <p className={`font-serif text-3xl font-black text-${theme.primary}`}>₹ 29.75 Lakhs</p>
            <span className="text-[10px] text-brand-muted font-inter font-bold block">
              Academic &amp; Sports Scholarships
            </span>
          </div>
        </div>

        {/* Section 1 & 2: Fee & Sports Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Fee Scholarships for Classes XI & XII */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-150 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-${theme.primary}/10 text-${theme.primary}`}
                >
                  Class XI &amp; XII
                </span>
                <Award className="w-5 h-5 text-brand-gold" />
              </div>
              <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>
                1. Fee Scholarships (Classes XI &amp; XII)
              </h4>
              <div className="space-y-2 text-xs font-inter text-brand-charcoal">
                <p>
                  <strong>Eligibility:</strong> Students who have appeared in the Class X Board examination and secured{' '}
                  <strong>93% or above</strong> are eligible for fee scholarship.
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl text-[11px] text-amber-950 font-inter leading-relaxed">
              <strong>Note for Renewal:</strong> Students availing this scholarship must maintain an overall average
              aggregate of <strong>85%</strong> with no absenteeism in any exam to continue the scholarship in Class
              XII.
            </div>
          </div>

          {/* 2. Sports Scholarship */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-150 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Sports Excellence
                </span>
                <Trophy className="w-5 h-5 text-brand-gold" />
              </div>
              <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>2. Sports Scholarship Scheme</h4>
              <ul className="space-y-1.5 text-xs font-inter text-brand-muted">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Secured position in district/state/national/international sports events.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Minimum academic score of 60% in previous academic year.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Official recommendation from PE Department required.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Must apply every year for annual renewal.</span>
                </li>
              </ul>
            </div>

            <div className="p-3.5 bg-white border border-gray-200 rounded-xl text-[11px] text-brand-charcoal font-inter font-semibold">
              🏆 Enquire for the Sports Application Form at the Fee Department.
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Sponsored Scholarships Grid (DLPS Specific, or general) */}
      {!isDLWS && (
        <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
          <div>
            <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>
              Memorial &amp; Excellence Trophies
            </span>
            <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
              3. Sponsored Scholarships &amp; Named Awards
            </h3>
            <p className="text-xs text-brand-muted font-inter font-medium mt-1">
              23 prestigious annual scholarships instituted by benefactors to honor excellence in academics, sports,
              leadership, and humanitarian service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {dlpsSponsoredScholarships.map((award, idx) => (
              <div
                key={idx}
                className="bg-gray-50 hover:bg-white rounded-2xl border border-gray-150 hover:border-brand-gold/40 p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-brand-muted block">
                    {award.class}
                  </span>
                  <h5 className="font-serif text-xs font-bold text-brand-charcoal leading-snug">{award.name}</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-xs text-brand-muted font-inter font-medium text-center">
            <strong>Policy Note:</strong> Only one concession or scholarship can be applied per student.
          </div>
        </div>
      )}

      {/* Section 4: Concessions (4 Categories) */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div>
          <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>
            Special Benefits
          </span>
          <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
            Concessions Framework
          </h3>
          <p className="text-xs text-brand-muted font-inter font-medium mt-1">
            Concessions offered for Defense personnel, Alumni families, Siblings, and DLF Staff wards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {dlpsConcessionsList.map((conc, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl border border-gray-150 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-${theme.primary}/10 text-${theme.primary}`}
                >
                  {conc.badge}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-serif text-base font-bold text-brand-charcoal">{conc.title}</h4>
              <p className="text-xs text-brand-muted font-inter leading-relaxed">
                <strong>Eligibility:</strong> {conc.eligibility}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
