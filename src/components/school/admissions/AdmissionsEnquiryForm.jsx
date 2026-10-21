import React from 'react'
import { ExternalLink } from 'lucide-react'

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
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-charcoal text-xs font-bold transition-all shrink-0 border border-gray-200"
            >
              <ExternalLink className="w-3.5 h-3.5 text-brand-gold" />
              <span>Open in Full Screen</span>
            </a>
          </div>
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

        {/* Embedded iFrame Container */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 bg-white min-h-[850px] sm:min-h-[1050px] shadow-inner">
          <iframe
            src={enquiryUrl}
            title={`${currentSchool?.name || 'DLF School'} Dynamic Admission Enquiry Form`}
            className="w-full min-h-[850px] sm:min-h-[1050px] border-0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Footer Info */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-brand-muted font-inter pt-2 border-t border-gray-100">
          <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
            🔒 256-bit SSL Encrypted &bull; Direct submission to {currentSchool?.name || 'DLF School'} Admissions Office
          </span>
          <a 
            href={enquiryUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-${theme.primary} hover:underline font-bold`}
          >
            Form not loading? Click here to open directly &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}
