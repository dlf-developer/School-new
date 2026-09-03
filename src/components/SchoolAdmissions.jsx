import React, { useState } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import {
  ArrowLeft, CheckCircle2, ClipboardList, IndianRupee, Award,
  ChevronRight, FileText, User, AlertCircle, Phone, Calendar,
  Download, HelpCircle, ShieldAlert, GraduationCap, Check, ExternalLink,
  Sparkles, ArrowRight, ChevronDown, Trophy, Info, Globe, X
} from 'lucide-react'

// ─── Tab 1: Enquiry Form ──────────────────────────────────────────────────────
function EnquiryForm({ theme, currentSchool }) {
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

// ─── Tab 2: Fee Structure (Boxed Grades with Tabular Accordion) ───────────────
function FeeStructure({ theme, currentSchool, onGoToEnquiry }) {
  const isDLWS = currentSchool?.id === 'dlf-greater-noida'
  const customFees = currentSchool?.feeStructure
  const [selectedGrade, setSelectedGrade] = useState(null)

  const defaultDLPSNotes = [
    'There is an annual charge of INR 380 across all grades for I-Card and School Dairy.',
    'There will be additional science fees for Class XI-XII Science streams.',
    'There will be additional fees in Classes IX-XII levied by CBSE for exam and registration purposes.',
    'There will be an additional fee in Class XI for an aptitude test.',
    'There will be additional fees in the respective grades for the outsourced programs.',
  ]

  const defaultDLWSNotes = [
    'Nutrition Meal (Qtr): 2,600 (PreN-N),   4,000 (KG-XII)',
    'Transport Fee: Contact Transport Department',
    'The external programme fee is tentative and depends on the final charges communicated by the external partner. Any change in the fee will be informed before the due date.',
  ]

  const notesList = customFees?.notes && Array.isArray(customFees.notes) && customFees.notes.length > 0
    ? customFees.notes
    : isDLWS
      ? defaultDLWSNotes
      : defaultDLPSNotes

  const feeRows = customFees?.rows || [
    { grade: 'Class - Foundation', composite: '10,407', assessment: '—', total: '10,407', qtrTotal: '31,221' },
    { grade: 'Class - Pre K.G.', composite: '11,893', assessment: '—', total: '11,893', qtrTotal: '35,679' },
    { grade: 'Class - J.K.G.', composite: '14,867', assessment: '—', total: '14,867', qtrTotal: '44,601' },
    { grade: 'Class - S.K.G.', composite: '16,133', assessment: '—', total: '16,133', qtrTotal: '48,399' },
    { grade: 'Class - I', composite: '15,500', assessment: '733', total: '16,233', qtrTotal: '48,699' },
    { grade: 'Class - II', composite: '14,800', assessment: '733', total: '15,533', qtrTotal: '46,599' },
    { grade: 'Class - III', composite: '14,067', assessment: '733', total: '14,800', qtrTotal: '44,400' },
    { grade: 'Class - IV', composite: '13,333', assessment: '733', total: '14,067', qtrTotal: '42,201' },
    { grade: 'Class - V', composite: '12,440', assessment: '733', total: '13,173', qtrTotal: '39,519' },
    { grade: 'Class - VI', composite: '12,667', assessment: '733', total: '13,400', qtrTotal: '40,200' },
    { grade: 'Class - VII', composite: '11,800', assessment: '733', total: '12,533', qtrTotal: '37,599' },
    { grade: 'Class - VIII', composite: '12,233', assessment: '733', total: '12,967', qtrTotal: '38,901' },
    { grade: 'Class - IX', composite: '11,767', assessment: '733', total: '12,500', qtrTotal: '37,500' },
    { grade: 'Class - X', composite: '11,767', assessment: '733', total: '12,500', qtrTotal: '37,500' },
    { grade: 'Class - XI', composite: '12,400', assessment: '733', total: '13,133', qtrTotal: '39,399' },
    { grade: 'Class - XII', composite: '12,400', assessment: '733', total: '13,133', qtrTotal: '39,399' },
  ]

  return (
    <div className="space-y-8">
      {/* Overview & One-Time Charges Header */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>Session 2026-27</span>
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Fee Structure — {currentSchool?.name}</h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter mt-1 font-medium">
              Click on any grade box below to view its individual fee breakdown.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-2xl text-xs font-bold shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Quarterly Billing Cycle</span>
          </div>
        </div>

        {/* 3 One-Time Fee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-150/60 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">One-Time / Non-Refundable</span>
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Registration Fee</h4>
            <p className={`text-2xl font-bold text-${theme.primary} font-serif`}>₹ {customFees?.registrationFee || '1,500'}/-</p>
            <p className="text-[11px] text-brand-muted font-inter">Payable at the time of Registration.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-150/60 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">One-Time / Non-Refundable</span>
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Admission Fee</h4>
            <p className={`text-2xl font-bold text-${theme.primary} font-serif`}>₹ {customFees?.admissionFee || '51,000'}/-</p>
            <p className="text-[11px] text-brand-muted font-inter">Payable upon seat confirmation.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-150/60 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">One-Time / Refundable</span>
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Security Deposit</h4>
            <p className={`text-2xl font-bold text-${theme.primary} font-serif`}>₹ {customFees?.securityDeposit || '10,000'}/-</p>
            <p className="text-[11px] text-brand-muted font-inter">Refundable as per withdrawal policy.</p>
          </div>
        </div>
      </div>

      {/* Grade Boxes (Accordion revealing tabular fee upon click) */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div className="space-y-1">
          <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
            Select Grade to View Fee Breakdown
          </h3>
          <p className="text-xs text-brand-muted font-inter font-medium">
            Tap any grade box below to view its complete fee breakdown in an instant modal.
          </p>
        </div>

        {/* Box Grid - Ultra Compact & Touch Friendly */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5">
          {feeRows.map((row, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedGrade(idx)}
              className="group p-2.5 sm:p-3 rounded-2xl border border-gray-200 bg-gray-50/70 hover:bg-white hover:border-brand-gold/70 hover:shadow-md text-left transition-all duration-200 flex flex-col justify-between gap-1.5 cursor-pointer active:scale-[0.98]"
            >
              <div className="space-y-0.5">
                <span className="text-[9px] font-black uppercase tracking-wider text-brand-muted block">
                  Grade
                </span>
                <span className={`font-serif font-bold text-xs sm:text-sm leading-tight text-brand-charcoal block group-hover:text-${theme.primary} transition-colors truncate`}>
                  {row.class || row.grade}
                </span>
              </div>
              <div className={`flex items-center justify-between text-[10px] font-bold text-${theme.primary} pt-1 border-t border-gray-150/70 group-hover:border-brand-gold/30`}>
                <span>View Fee</span>
                <ChevronRight className="w-3.5 h-3.5 text-brand-gold transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>
          ))}
        </div>

        {/* ── MODAL: DETAILED FEE BREAKDOWN POPUP ── */}
        {selectedGrade !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200"
            onClick={() => setSelectedGrade(null)}
          >
            <div 
              className="relative max-w-lg w-full bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-7 space-y-5 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-gray-150 pb-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-gold/15 text-brand-charcoal font-bold text-[10px] uppercase tracking-wider border border-brand-gold/30">
                    <Sparkles className="w-3 h-3 text-brand-gold" />
                    <span>Session 2026-27 &bull; Fee Breakdown</span>
                  </div>
                  <h4 className={`font-serif text-xl sm:text-2xl font-black text-${theme.primary}`}>
                    Fee Breakdown — {feeRows[selectedGrade].class || feeRows[selectedGrade].grade}
                  </h4>
                  <p className="text-xs text-brand-muted font-inter">
                    Official verified fee components for {currentSchool?.name || 'DLF School'}.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedGrade(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-brand-charcoal flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label="Close Fee Breakdown Modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* 2-Column Clean Table */}
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-2xs">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className={`bg-${theme.primary} text-white text-xs uppercase font-extrabold tracking-wider`}>
                      <th className="py-3 px-4 sm:px-5">Fee Component</th>
                      <th className="py-3 px-4 sm:px-5 text-right">{isDLWS ? 'Details / Amount' : 'Amount (₹)'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs sm:text-sm font-inter">
                    {isDLWS ? (
                      <>
                        {/* Row 1: Composite fee (Monthly) */}
                        <tr>
                          <td className="py-3 px-4 sm:px-5 font-semibold text-brand-charcoal">
                            Composite fee (Monthly)
                          </td>
                          <td className="py-3 px-4 sm:px-5 text-right font-bold text-brand-charcoal font-serif">
                            ₹ {feeRows[selectedGrade].composite}
                          </td>
                        </tr>

                        {/* Row 2: External Programs */}
                        <tr className="bg-gray-50/70">
                          <td className="py-3 px-4 sm:px-5 font-semibold text-brand-charcoal align-middle">
                            External Programs
                          </td>
                          <td className="py-3 px-4 sm:px-5 text-right font-medium text-brand-charcoal">
                            {feeRows[selectedGrade].external && feeRows[selectedGrade].external !== '—' ? (
                              <div className="flex flex-wrap justify-end gap-1.5 py-0.5">
                                {feeRows[selectedGrade].external.split(',').map((prog, pIdx) => (
                                  <span
                                    key={pIdx}
                                    className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs"
                                  >
                                    {prog.trim()}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span className="text-gray-400 italic font-normal">—</span>
                            )}
                          </td>
                        </tr>

                        {/* Row 3: Total Quarterly Installment (3 Months) */}
                        <tr className={`bg-${theme.primary}/10 font-bold`}>
                          <td className={`py-3.5 px-4 sm:px-5 text-${theme.primary}`}>
                            Total Quarterly Installment (3 Months)
                          </td>
                          <td className={`py-3.5 px-4 sm:px-5 text-right font-extrabold text-${theme.primary} text-sm sm:text-base font-serif`}>
                            ₹ {feeRows[selectedGrade].qtrTotal || (parseInt(feeRows[selectedGrade].total.replace(/,/g, '')) * 3).toLocaleString()}
                          </td>
                        </tr>
                      </>
                    ) : (
                      <>
                        <tr>
                          <td className="py-3 px-4 sm:px-5 font-semibold text-brand-charcoal">
                            Monthly Composite Tuition Fee
                          </td>
                          <td className="py-3 px-4 sm:px-5 text-right font-bold">
                            ₹ {feeRows[selectedGrade].composite}
                          </td>
                        </tr>

                        {/* DLPS Assessment Fee */}
                        {feeRows[selectedGrade].assessment && feeRows[selectedGrade].assessment !== '—' && (
                          <tr>
                            <td className="py-3 px-4 sm:px-5 font-semibold text-brand-charcoal">Assessment / Digital Learning Fee</td>
                            <td className="py-3 px-4 sm:px-5 text-right font-bold">₹ {feeRows[selectedGrade].assessment}</td>
                          </tr>
                        )}

                        <tr className="bg-gray-50/80 font-bold">
                          <td className="py-3 px-4 sm:px-5 text-brand-charcoal">Total Monthly Payable</td>
                          <td className={`py-3 px-4 sm:px-5 text-right font-extrabold text-${theme.primary}`}>
                            ₹ {feeRows[selectedGrade].total}
                          </td>
                        </tr>
                        <tr className={`bg-${theme.primary}/10 font-bold`}>
                          <td className={`py-3.5 px-4 sm:px-5 text-${theme.primary}`}>Total Quarterly Installment (3 Months)</td>
                          <td className={`py-3.5 px-4 sm:px-5 text-right font-extrabold text-${theme.primary} text-sm sm:text-base font-serif`}>
                            ₹ {feeRows[selectedGrade].qtrTotal || (parseInt(feeRows[selectedGrade].total.replace(/,/g, '')) * 3).toLocaleString()}
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedGrade(null)
                    onGoToEnquiry()
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-${theme.primary} hover:bg-${theme.vibrant} text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Enquire for this Grade</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedGrade(null)}
                  className="px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* ── CAMBRIDGE CURRICULUM FEE STRUCTURE ENQUIRY CARD (DLPS ONLY) ── */}
      {!isDLWS && (
        <div className="bg-gradient-to-br from-blue-50/70 via-white to-amber-50/50 rounded-3xl border border-brand-gold/30 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 font-extrabold text-[10px] uppercase tracking-wider border border-blue-200">
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>Cambridge International Curriculum</span>
            </div>
            <h4 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
              Cambridge Curriculum Fee Structure
            </h4>
            <p className="text-xs sm:text-sm text-brand-charcoal font-inter leading-relaxed">
              Fill the above enquire form we will connect with you.
            </p>
          </div>

          <button
            type="button"
            onClick={onGoToEnquiry}
            className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-${theme.primary} hover:bg-${theme.vibrant} text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105 cursor-pointer shrink-0`}
          >
            <FileText className="w-4 h-4" />
            <span>Fill Online Enquiry Form</span>
          </button>
        </div>
      )}

      {/* ── NOTE: ADDITIONAL CHARGES & PROGRAM FEES (DYNAMIC) ── */}
      {notesList && notesList.length > 0 && (
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-brand-charcoal">
            <Info className="w-4 h-4 text-brand-gold shrink-0" />
            <h4 className="font-serif text-base sm:text-lg font-bold italic">Note:</h4>
          </div>

          {isDLWS ? (
            <div className="space-y-3.5 text-xs sm:text-sm text-brand-charcoal font-inter leading-relaxed pl-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 pb-3 border-b border-gray-100">
                <span className="font-bold text-brand-charcoal w-48 shrink-0">Nutrition Meal (Qtr)</span>
                <span className="font-semibold text-brand-charcoal">2,600 (PreN-N),&nbsp;&nbsp;&nbsp;4,000 (KG-XII)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 pb-3 border-b border-gray-100">
                <span className="font-bold text-brand-charcoal w-48 shrink-0">Transport Fee</span>
                <span className="font-medium text-brand-muted">Contact Transport Department</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 pt-0.5">
                <span className="font-bold text-brand-charcoal w-48 shrink-0">Note:</span>
                <div className="text-brand-muted leading-relaxed space-y-1">
                  <p>The external programme fee is tentative and depends on the final charges communicated by the external partner.</p>
                  <p>Any change in the fee will be informed before the due date.</p>
                </div>
              </div>
            </div>
          ) : (
            <ol className="space-y-2.5 text-xs sm:text-sm text-brand-charcoal/90 font-inter leading-relaxed pl-1">
              {notesList.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-bold text-brand-muted shrink-0">{idx + 1})</span>
                  <span>{note}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Tab 3: Admissions Process & Guidelines (Infographic Flowchart + Documents) ─
function AdmissionProcedure({ theme, currentSchool }) {
  const flowchartSteps = [
    {
      num: '01',
      title: 'Online Enquiry',
      desc: 'Fill out the digital enquiry form on the official Edunext portal to generate your unique Enquiry ID.',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-800',
      gradient: 'from-emerald-600 to-teal-700',
      icon: FileText
    },
    {
      num: '02',
      title: 'Admissions Call',
      desc: 'Our Admissions Desk connects with you via phone/WhatsApp to guide you through age criteria and requirements.',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      gradient: 'from-blue-600 to-cyan-700',
      icon: Phone
    },
    {
      num: '03',
      title: 'Digital Registration',
      desc: 'Complete the online registration form, upload photographs & pay the ₹ 1,500 registration fee.',
      bg: 'bg-violet-50',
      border: 'border-violet-200',
      text: 'text-violet-800',
      gradient: 'from-violet-600 to-purple-700',
      icon: ClipboardList
    },
    {
      num: '04',
      title: 'Campus Walkthrough',
      desc: 'Visit our campus with your child for an interactive tour and introductory mentor session.',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-800',
      gradient: 'from-amber-600 to-orange-700',
      icon: Calendar
    },
    {
      num: '05',
      title: 'Interaction / Test',
      desc: 'Foundational child interaction (Pre-Primary) or competency evaluation (Classes I–XII).',
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      text: 'text-rose-800',
      gradient: 'from-rose-600 to-pink-700',
      icon: GraduationCap
    },
    {
      num: '06',
      title: 'Seat Allotment',
      desc: 'Receive formal admission offer; submit required verification documents & fee to confirm seat.',
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-800',
      gradient: 'from-teal-600 to-green-700',
      icon: CheckCircle2
    },
  ]

  const importantDocuments = [
    {
      title: 'Admission Procedure and Guidelines',
      desc: 'Age eligibility matrix, learning continuum evaluation, CBSE transfer clauses for Classes X & XII, and fee payment guidelines.',
      type: 'Official PDF',
      size: '104 KB',
      file: '/documents/admission-procedure-and-guidelines.pdf',
      downloadName: 'Admission_Procedure_and_Guidelines.pdf',
    },
    {
      title: 'Registration Procedure and Guidelines',
      desc: 'Step-by-step registration flow, document upload checklist, and interaction schedule generation.',
      type: 'Official PDF',
      size: '93 KB',
      file: '/documents/registration-procedure-and-guidelines.pdf',
      downloadName: 'Registration_Procedure_and_Guidelines.pdf',
    },
    {
      title: 'Student Withdrawal & TC Policy',
      desc: 'Official 3-month written notice rules, security deposit refund terms, and Transfer Certificate procedures.',
      type: 'Official PDF',
      size: '66 KB',
      file: '/documents/student-withdrawal-and-tc-policy.pdf',
      downloadName: 'Student_Withdrawal_and_TC_Policy.pdf',
    },
  ]

  return (
    <div className="space-y-10">
      {/* Colour Infographic Flowchart */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-8">
        <div>
          <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>Infographic Flowchart</span>
          <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
            Admission Process Flowchart
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted font-inter mt-1 font-medium">
            Step-by-step visual infographic guiding parents through the entire enrollment journey.
          </p>
        </div>

        {/* Infographic Cards with Color Badges and Step Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flowchartSteps.map((step, idx) => {
            const StepIcon = step.icon
            return (
              <div
                key={idx}
                className={`relative rounded-3xl border p-6 ${step.bg} ${step.border} space-y-4 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-extrabold text-white px-3.5 py-1 rounded-full bg-gradient-to-r ${step.gradient} shadow-sm`}>
                      Step {step.num}
                    </span>
                    <div className={`w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center ${step.text}`}>
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className={`font-serif text-lg font-bold ${step.text}`}>{step.title}</h4>
                  <p className="text-xs text-brand-charcoal/80 font-inter leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/5 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-brand-muted">
                  <span>Stage {idx + 1} of 6</span>
                  <ChevronRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Important Documents Section at Bottom */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div>
          <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>Official Resources</span>
          <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
            Important Documents &amp; Guidelines
          </h3>
          <p className="text-xs text-brand-muted font-inter font-medium mt-1">
            Download and review official policy documents, registration guides, and withdrawal terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {importantDocuments.map((doc, idx) => (
            <div
              key={idx}
              className="group bg-gray-50/70 hover:bg-white rounded-2xl border border-gray-150 hover:border-brand-gold/50 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 shadow-xs">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-brand-charcoal group-hover:text-brand-greenDeep transition-colors">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-brand-muted font-inter mt-1.5 leading-relaxed">
                    {doc.desc}
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-gray-150/70 flex items-center justify-between gap-3">
                <span className="text-[11px] font-semibold text-brand-muted">
                  Direct Download
                </span>
                <a
                  href={doc.file}
                  download={doc.downloadName}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-${theme.primary} hover:bg-${theme.vibrant} text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs hover:scale-105 cursor-pointer shrink-0`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Tab 4: Scholarships & Concessions ───────────────────────────────────────
function Scholarships({ theme, currentSchool }) {
  const sponsoredScholarships = [
    { name: "Vranda Harmonious Personality of the Year Award", class: "Class I" },
    { name: "Sanchay Mahato Scholarship for Excellence", class: "Class VI" },
    { name: "Smt. Jagdish Rani Scholarship for Excellence", class: "Class VII" },
    { name: "Smt. Lali Bai Scholarship for Excellence", class: "Class VIII" },
    { name: "Late Shri Baldev Raj Bhardwaj Scholarship for Excellence", class: "Class IX" },
    { name: "Principal Sudesh Sekhri Scholarship for Excellence", class: "Class X" },
    { name: "Smt. Pyaro Devi Scholarship for Meritorious Student", class: "Class XII" },
    { name: "Vijay Verma Memorial Scholarship for Science Topper", class: "Class XII" },
    { name: "Sudershana Bhardwaj Scholarship for All Rounder", class: "All-Round Excellence" },
    { name: "Vimla Mehra Scholarship for Outstanding Personality", class: "Outstanding Personality" },
    { name: "Satyendra Mohan Bhardwaj Memorial Scholarship", class: "Outstanding Person of Year" },
    { name: "Shri B.K Wadhawan Bhardwaj Memorial Award", class: "Innovation & Initiative" },
    { name: "Mahima Kapoor Most Concerned Delfite of the Year Award", class: "Social Responsibility" },
    { name: "Major Mohit Sharma AC, SM, National Achievers Award", class: "National Achievers (2 Students)" },
    { name: "Aishwariya Kala Shrimani Award", class: "Fine & Performing Arts" },
    { name: "Entrepreneur of the Year Award", class: "Student Entrepreneurship" },
    { name: "Sh. Harish Chand Mehta Rolling Trophy", class: "Budding Sports Person" },
    { name: "Moon Beam Scholarship", class: "Merit & Leadership" },
    { name: "Smt. Deepa Samrat Humanitarian of the Year Award", class: "Humanitarian Service" },
    { name: "Smt. Rammi Wadhawan Exemplary Citizen of the Year Award", class: "Civic Excellence" },
    { name: "Sh. B. K. Jerath Memorial Award for All-Rounder of the Year", class: "All-Rounder Memorial" },
    { name: "Smt. Krishna Jerath Entrepreneur of the Year Memorial Award", class: "Entrepreneurship Memorial" },
    { name: "Sh. M. L. Sekhri Literary Luminary Award", class: "Literary Excellence" },
  ]

  const concessionsList = [
    {
      title: "1. Indian Armed Forces Concession",
      badge: "Defense Concession",
      eligibility: "Students whose parent is currently serving or retired from the Indian Armed Forces."
    },
    {
      title: "2. Alumni Concession",
      badge: "Alumni Privilege",
      eligibility: "Alumni who have either passed out of the school in 12th grade or spent at least 6 academic years in the school."
    },
    {
      title: "3. Sibling Concession",
      badge: "Family Benefit",
      eligibility: "Students with siblings already studying in the school or any two siblings getting admitted simultaneously."
    },
    {
      title: "4. Staff Ward Concession",
      badge: "Employee Support",
      eligibility: "Children of all staff members, applicable till the time the parent is employed with any branch of Darbari Lal Foundation."
    },
  ]

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
              In line with DLF Public School's philosophy of encouraging students towards excellence, top performers selected on the basis of consolidated year-end results are eligible for various scholarships under the Academic Scholarship Scheme.
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-gold/20 via-brand-gold/10 to-transparent p-5 rounded-2xl border border-brand-gold/30 shrink-0 text-center space-y-1 min-w-[240px]">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-charcoal block">Dispersed Last Academic Year</span>
            <p className={`font-serif text-3xl font-black text-${theme.primary}`}>₹ 29.75 Lakhs</p>
            <span className="text-[10px] text-brand-muted font-inter font-bold block">Academic &amp; Sports Scholarships</span>
          </div>
        </div>

        {/* Section 1 & 2: Fee & Sports Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Fee Scholarships for Classes XI & XII */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-150 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-${theme.primary}/10 text-${theme.primary}`}>
                  Class XI &amp; XII
                </span>
                <Award className="w-5 h-5 text-brand-gold" />
              </div>
              <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>
                1. Fee Scholarships (Classes XI &amp; XII)
              </h4>
              <div className="space-y-2 text-xs font-inter text-brand-charcoal">
                <p>
                  <strong>Eligibility:</strong> Students who have appeared in the Class X Board examination and secured <strong>93% or above</strong> are eligible for full fee scholarship.
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl text-[11px] text-amber-950 font-inter leading-relaxed">
              <strong>Note for Renewal:</strong> Students availing this scholarship must maintain an overall average aggregate of <strong>85%</strong> with no absenteeism in any exam to continue the scholarship in Class XII.
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
              <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>
                2. Sports Scholarship Scheme
              </h4>
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

      {/* Section 3: 23 Sponsored Scholarships Grid */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div>
          <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>Memorial &amp; Excellence Trophies</span>
          <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
            3. Sponsored Scholarships &amp; Named Awards
          </h3>
          <p className="text-xs text-brand-muted font-inter font-medium mt-1">
            23 prestigious annual scholarships instituted by benefactors to honor excellence in academics, sports, leadership, and humanitarian service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {sponsoredScholarships.map((award, idx) => (
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
                <h5 className="font-serif text-xs font-bold text-brand-charcoal leading-snug">
                  {award.name}
                </h5>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-xs text-brand-muted font-inter font-medium text-center">
          <strong>Policy Note:</strong> Only one concession or scholarship can be applied per student.
        </div>
      </div>

      {/* Section 4: Concessions (4 Categories) */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div>
          <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>Special Benefits</span>
          <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
            Concessions Framework
          </h3>
          <p className="text-xs text-brand-muted font-inter font-medium mt-1">
            Special tuition fee concessions offered for Defense personnel, Alumni families, Siblings, and DLF Staff wards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {concessionsList.map((conc, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl border border-gray-150 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-${theme.primary}/10 text-${theme.primary}`}>
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

// ─── Main Admissions Page Component ───────────────────────────────────────────
export default function SchoolAdmissions() {
  const { schoolId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const { schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]

  const theme = currentSchool?.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27'
  }

  const tabs = [
    { id: 'enquiry', label: 'Enquiry Form', Icon: FileText },
    { id: 'fee-structure', label: 'Fee Structure', Icon: IndianRupee },
    { id: 'procedure', label: 'Admissions Process', Icon: ClipboardList },
    { id: 'scholarships', label: 'Scholarships', Icon: Award },
  ]

  const activeTab = searchParams.get('tab') || 'enquiry'
  const setTab = (id) => setSearchParams({ tab: id })

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-10">

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Enrolment</span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary}`}>Admissions</h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter font-medium">
              Simple, structured, transparent, and digital admission process at {currentSchool?.name}.
            </p>
          </div>
          <Link
            to={`/school/${activeBranch}`}
            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:opacity-80 transition-opacity shrink-0`}
          >
            <ArrowLeft className="w-4 h-4" /> Back to {currentSchool?.shortLocation || 'School'} Home
          </Link>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => {
            const TabIcon = tab.Icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 border ${
                  isActive
                    ? `bg-${theme.primary} text-white border-${theme.primary} shadow-md`
                    : 'bg-white text-brand-charcoal border-gray-200 hover:bg-gray-50'
                }`}
              >
                <TabIcon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Active Tab Content */}
        {activeTab === 'enquiry' && <EnquiryForm theme={theme} currentSchool={currentSchool} />}
        {activeTab === 'fee-structure' && <FeeStructure theme={theme} currentSchool={currentSchool} onGoToEnquiry={() => setTab('enquiry')} />}
        {activeTab === 'procedure' && <AdmissionProcedure theme={theme} currentSchool={currentSchool} />}
        {activeTab === 'scholarships' && <Scholarships theme={theme} currentSchool={currentSchool} />}

      </div>
    </div>
  )
}
