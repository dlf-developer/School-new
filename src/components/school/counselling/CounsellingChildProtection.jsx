import React from 'react'
import { ChevronDown, CheckCircle2 } from 'lucide-react'
import { childProtectionSections } from '../../../data/schools/dlps/counsellingData'

export default function CounsellingChildProtection({ theme }) {
  return (
    <div className="space-y-6 pt-4 border-t border-gray-100 mt-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
          Safety First
        </span>
        <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
          Child Protection Policy (CPP)
        </h3>
        <p className="text-xs sm:text-sm text-brand-muted font-inter font-medium leading-relaxed">
          At DLF Public School, child safety is our highest priority. Our comprehensive Child Protection Policy ensures a
          secure, nurturing, and zero-tolerance environment for every student.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4 pt-4">
        {childProtectionSections.map((section, sIdx) => (
          <details
            key={sIdx}
            className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden hover:shadow-md transition-shadow duration-300"
          >
            <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
              <h4
                className={`font-serif text-sm sm:text-base font-bold text-brand-charcoal hover:text-${theme.vibrant} transition-colors pr-4`}
              >
                {section.title}
              </h4>
              <span className={`text-${theme.primary} shrink-0 transition-transform duration-300 group-open:rotate-180`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </summary>
            <div className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed font-medium mt-3 pt-3 border-t border-gray-50 space-y-3">
              <p>{section.desc}</p>
              <ul className="space-y-1.5 pl-1.5 text-xs text-brand-charcoal font-semibold">
                {section.details.map((item, iIdx) => (
                  <li key={iIdx} className="flex gap-2 items-start leading-relaxed">
                    <CheckCircle2 className={`w-3.5 h-3.5 text-${theme.accent} shrink-0 mt-0.5`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
