import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Mail } from 'lucide-react'

export default function CounsellingUnderProgress({ schoolId }) {
  return (
    <div className="pt-28 pb-20 min-h-[85vh] flex items-center justify-center text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-xl mx-auto px-4">
        <div className="bg-white rounded-3xl border border-gray-150 p-8 sm:p-12 shadow-xl text-center space-y-6 relative overflow-hidden">
          {/* Top decorative gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-gold via-brand-greenDeep to-brand-gold" />

          <div className="w-16 h-16 rounded-3xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-brand-gold mx-auto shadow-sm">
            <Sparkles className="w-8 h-8 text-brand-gold animate-pulse" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/70 text-[10px] font-extrabold uppercase tracking-widest">
              <span>Under Progress</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-greenDeep">
              Counselling &amp; Wellness Portal
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed max-w-md mx-auto">
              We are currently curating and compiling our student counselling, emotional wellness, and career navigation
              resources. This section will be launched shortly.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-150 text-xs text-brand-muted font-inter space-y-1">
            <p className="font-semibold text-brand-charcoal">Need guidance or urgent assistance?</p>
            <p>
              Reach out directly to the counselling desk at{' '}
              <a href="mailto:charu.seth@dlps.co.in" className="text-brand-greenDeep font-bold underline">
                charu.seth@dlps.co.in
              </a>
              .
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to={schoolId ? `/school/${schoolId}` : '/'}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-greenDeep hover:bg-brand-greenVibrant text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm w-full sm:w-auto"
            >
              <span>Back to Home</span>
            </Link>
            <a
              href="mailto:charu.seth@dlps.co.in"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-colors w-full sm:w-auto"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Counselling Desk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
