import React from 'react'
import { ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react'

export default function AdmissionsEnquiryForm({ theme, currentSchool }) {
  const isDLWS = currentSchool?.id === 'dlf-greater-noida'
  const enquiryUrl = isDLWS
    ? 'https://dlws.edunexttechnologies.com/mvc/std/DynamicEnquiryForm'
    : 'https://dlps.edunexttechnologies.com/mvc/std/DynamicEnquiryForm'

  return (
    <div className="space-y-8">
      {/* ── UNIFIED OFFICIAL EDUNEXT ENQUIRY & REGISTRATION CARD ── */}
      <div className="bg-white rounded-3xl border-2 border-brand-gold/30 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10 space-y-6">
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
          <div className="space-y-1.5 max-w-2xl">
            <h3 className={`font-serif text-2xl sm:text-3xl font-black text-${theme.primary}`}>
              Online Enquiry &amp; Registration Form
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed font-medium">
              Begin your child's educational journey at {currentSchool?.name || 'DLF School'}. Complete the official Edunext digital enquiry form below to generate your Enquiry Number.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={enquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-${theme.primary} hover:opacity-90 text-white text-xs font-bold transition-all shrink-0 shadow-sm cursor-pointer`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Full Screen</span>
            </a>
          </div>
        </div>

        {/* Mobile Optimised Notice (for iOS and Touch devices) */}
        <div className="sm:hidden bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 flex flex-col gap-3">
          <div className="flex items-start gap-2.5">
            <ExternalLink className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 leading-relaxed font-medium">
              Using a mobile device? For the smoothest iOS experience, you can open the official portal directly:
            </p>
          </div>
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-3 px-4 rounded-xl bg-${theme.primary} text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform`}
            style={{ touchAction: 'manipulation', minHeight: '48px' }}
          >
            <span>Launch Mobile Form Fullscreen</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4-Step Online Registration Steps */}
        <div className="space-y-3">
          <h4 className="font-extrabold text-xs uppercase tracking-widest text-brand-charcoal">
            Online Registration Steps:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              { num: '01', title: 'Submit Enquiry', desc: 'Fill out the online enquiry form below.' },
              { num: '02', title: 'Get Enquiry No.', desc: 'System automatically generates your unique Enquiry Number.' },
              { num: '03', title: 'Complete Form', desc: 'Use Enquiry Number + mobile to submit full registration.' },
              { num: '04', title: 'Interaction Date', desc: 'Date & time for interaction/assessment sent via email.' },
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-1.5">
                <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-lg bg-${theme.primary}/10 text-${theme.primary} inline-block`}>
                  Step {step.num}
                </span>
                <h5 className="font-bold text-xs text-brand-charcoal">{step.title}</h5>
                <p className="text-[11px] text-brand-muted font-inter leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded iFrame Container with iOS Touch scrolling enhancements */}
        <div 
          className="relative w-full rounded-2xl overflow-hidden border border-gray-200 bg-white min-h-[750px] sm:min-h-[1050px] shadow-inner"
          style={{ WebkitOverflowScrolling: 'touch', overflowY: 'auto', touchAction: 'pan-y' }}
        >
          <iframe
            src={enquiryUrl}
            title={`${currentSchool?.name || 'DLF School'} Dynamic Admission Enquiry Form`}
            className="w-full min-h-[750px] sm:min-h-[1050px] border-0"
            loading="lazy"
            scrolling="yes"
            tabIndex={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Footer Info */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-brand-muted font-inter pt-2 border-t border-gray-100">
          <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600 inline shrink-0" />
            256-bit SSL Encrypted &bull; Direct submission to {currentSchool?.name || 'DLF School'} Admissions Office
          </span>
          <a 
            href={enquiryUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-${theme.primary} hover:underline font-bold inline-flex items-center gap-1`}
          >
            <span>Form not loading on your browser? Click here to open directly</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  )
}
