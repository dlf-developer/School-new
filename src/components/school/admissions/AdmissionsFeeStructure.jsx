import React, { useState } from 'react'
import { CheckCircle2, ChevronRight, Sparkles, X, FileText, Globe, Info } from 'lucide-react'
import { defaultDLPSFeeNotes } from '../../../data/schools/dlps/admissionsData'
import { defaultDLWSFeeNotes } from '../../../data/schools/dlws/admissionsData'

export default function AdmissionsFeeStructure({ theme, currentSchool, onGoToEnquiry }) {
  const isDLWS = currentSchool?.id === 'dlf-greater-noida'
  const customFees = currentSchool?.feeStructure
  const [selectedGrade, setSelectedGrade] = useState(null)

  const notesList =
    customFees?.notes && Array.isArray(customFees.notes) && customFees.notes.length > 0
      ? customFees.notes
      : isDLWS
      ? defaultDLWSFeeNotes
      : defaultDLPSFeeNotes

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
            <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>
              Session 2026-27
            </span>
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
              Fee Structure — {currentSchool?.name}
            </h3>
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
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">
              One-Time / Non-Refundable
            </span>
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Registration Fee</h4>
            <p className={`text-2xl font-bold text-${theme.primary} font-serif`}>
              ₹ {customFees?.registrationFee || (isDLWS ? '500' : '1,500')}/-
            </p>
            <p className="text-[11px] text-brand-muted font-inter">Payable at the time of Registration.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-150/60 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">
              One-Time / Non-Refundable
            </span>
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Admission Fee</h4>
            <p className={`text-2xl font-bold text-${theme.primary} font-serif`}>
              ₹ {customFees?.admissionFee || '51,000'}/-
            </p>
            <p className="text-[11px] text-brand-muted font-inter">Payable upon seat confirmation.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-150/60 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">
              One-Time / Refundable
            </span>
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Security Deposit</h4>
            <p className={`text-2xl font-bold text-${theme.primary} font-serif`}>
              ₹ {customFees?.securityDeposit || '10,000'}/-
            </p>
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
              className={`group p-2.5 sm:p-3 rounded-2xl border border-gray-200 bg-gray-50/70 hover:bg-white hover:border-brand-gold/70 hover:shadow-md text-left transition-all duration-200 flex flex-col justify-between gap-1.5 cursor-pointer active:scale-[0.98]`}
            >
              <div className="space-y-0.5">
                <span className="text-[9px] font-black uppercase tracking-wider text-brand-muted block">
                  Grade
                </span>
                <span
                  className={`font-serif font-bold text-xs sm:text-sm leading-tight text-brand-charcoal block group-hover:text-${theme.primary} transition-colors truncate`}
                >
                  {row.class || row.grade}
                </span>
              </div>
              <div
                className={`flex items-center justify-between text-[10px] font-bold text-${theme.primary} pt-1 border-t border-gray-150/70 group-hover:border-brand-gold/30`}
              >
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
                        <tr>
                          <td className="py-3 px-4 sm:px-5 font-semibold text-brand-charcoal">
                            Composite fee (Monthly)
                          </td>
                          <td className="py-3 px-4 sm:px-5 text-right font-bold text-brand-charcoal font-serif">
                            ₹ {feeRows[selectedGrade].composite}
                          </td>
                        </tr>

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

                        <tr className={`bg-${theme.primary}/10 font-bold`}>
                          <td className={`py-3.5 px-4 sm:px-5 text-${theme.primary}`}>
                            Total Quarterly Installment (3 Months)
                          </td>
                          <td className={`py-3.5 px-4 sm:px-5 text-right font-extrabold text-${theme.primary} text-sm sm:text-base font-serif`}>
                            ₹{' '}
                            {feeRows[selectedGrade].qtrTotal ||
                              (
                                parseInt(feeRows[selectedGrade].total.replace(/,/g, '')) * 3
                              ).toLocaleString()}
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

                        {feeRows[selectedGrade].assessment && feeRows[selectedGrade].assessment !== '—' && (
                          <tr>
                            <td className="py-3 px-4 sm:px-5 font-semibold text-brand-charcoal">
                              Assessment / Digital Learning Fee
                            </td>
                            <td className="py-3 px-4 sm:px-5 text-right font-bold">
                              ₹ {feeRows[selectedGrade].assessment}
                            </td>
                          </tr>
                        )}

                        <tr className="bg-gray-50/80 font-bold">
                          <td className="py-3 px-4 sm:px-5 text-brand-charcoal">Total Monthly Payable</td>
                          <td className={`py-3 px-4 sm:px-5 text-right font-extrabold text-${theme.primary}`}>
                            ₹ {feeRows[selectedGrade].total}
                          </td>
                        </tr>
                        <tr className={`bg-${theme.primary}/10 font-bold`}>
                          <td className={`py-3.5 px-4 sm:px-5 text-${theme.primary}`}>
                            Total Quarterly Installment (3 Months)
                          </td>
                          <td className={`py-3.5 px-4 sm:px-5 text-right font-extrabold text-${theme.primary} text-sm sm:text-base font-serif`}>
                            ₹{' '}
                            {feeRows[selectedGrade].qtrTotal ||
                              (
                                parseInt(feeRows[selectedGrade].total.replace(/,/g, '')) * 3
                              ).toLocaleString()}
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
                    onGoToEnquiry && onGoToEnquiry()
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
                <span className="font-semibold text-brand-charcoal">
                  2,600 (PreKG to JKG),&nbsp;&nbsp;&nbsp;4,000 (SKG to XII)
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 pb-3 border-b border-gray-100">
                <span className="font-bold text-brand-charcoal w-48 shrink-0">Transport Fee</span>
                <span className="font-medium text-brand-muted">Contact Transport Department</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 pt-0.5">
                <span className="font-bold text-brand-charcoal w-48 shrink-0">Note:</span>
                <div className="text-brand-muted leading-relaxed space-y-1">
                  <p>
                    The external programme fee is tentative and depends on the final charges communicated by the external
                    partner.
                  </p>
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
