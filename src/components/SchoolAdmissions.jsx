import React, { useState } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import {
  ArrowLeft, CheckCircle2, ClipboardList, IndianRupee, Award,
  ChevronRight, FileText, User, AlertCircle, Phone, Calendar,
  Download, HelpCircle, ShieldAlert, GraduationCap, Check, ExternalLink,
  Sparkles, ArrowRight, ChevronDown, Trophy
} from 'lucide-react'

// ─── Tab 1: Enquiry Form ──────────────────────────────────────────────────────
function EnquiryForm({ theme, currentSchool }) {
  const isDLWS = currentSchool?.id === 'dlf-greater-noida'
  const enquiryUrl = isDLWS
    ? 'https://dlws.edunexttechnologies.com/mvc/std/DynamicEnquiryForm'
    : 'https://dlps.edunexttechnologies.com/mvc/std/DynamicEnquiryForm'

  return (
    <div className="space-y-8">
      {/* Banner / Header Card */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-10 space-y-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold font-extrabold text-[10px] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Session 2026-27 Admissions Open
            </div>
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
              Online Enquiry &amp; Registration Form
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed font-medium">
              Begin your child's educational journey at {currentSchool?.name || 'DLF School'}. Complete the official Edunext digital enquiry form to generate your Enquiry Number.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-2 shrink-0 w-full sm:w-auto">
            <a
              href={enquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto bg-${theme.primary} hover:bg-${theme.vibrant} text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:scale-105`}
            >
              <ExternalLink className="w-4 h-4" />
              Fill Online Enquiry Form
            </a>
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              ✓ Portal Active
            </span>
          </div>
        </div>

        {/* 4-Step Registration Process Flow */}
        <div className="pt-6 border-t border-gray-100 space-y-4">
          <h4 className="font-extrabold text-xs uppercase tracking-widest text-brand-charcoal">Online Registration Steps:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'Submit Enquiry', desc: 'Fill out the online enquiry form on the portal.' },
              { num: '02', title: 'Get Enquiry No.', desc: 'System automatically generates your unique Enquiry Number.' },
              { num: '03', title: 'Complete Form', desc: 'Use Enquiry Number + mobile to submit full registration.' },
              { num: '04', title: 'Interaction Date', desc: 'Date & time for interaction/assessment sent via email.' },
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-2">
                <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-${theme.primary}/10 text-${theme.primary} inline-block`}>
                  Step {step.num}
                </span>
                <h5 className="font-bold text-xs text-brand-charcoal">{step.title}</h5>
                <p className="text-[11px] text-brand-muted font-inter leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guidelines & Checklist Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Required Documents */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-8 space-y-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className={`w-9 h-9 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center shrink-0`}>
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>Upload Requirements for Online Form</h4>
              <p className="text-[11px] text-brand-muted font-inter">Ensure soft copies are ready before starting online registration.</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {[
              { title: 'Recent Photographs', desc: 'Photograph of child and both parents (JPEG/JPG format, max 2MB).' },
              { title: 'Valid Email Address', desc: 'Active email ID for receiving portal credentials and interaction schedule.' },
              { title: 'Aadhaar Card Details', desc: 'Essential during form submission. If pending, apply on priority.' },
              { title: 'Registration Fee', desc: 'Rs. 1,500/- registration fee payable digitally upon form completion.' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                <CheckCircle2 className={`w-4 h-4 text-${theme.vibrant} shrink-0 mt-0.5`} />
                <div className="space-y-0.5">
                  <span className="font-bold text-xs text-brand-charcoal">{item.title}</span>
                  <p className="text-[11px] text-brand-muted font-inter leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Important Admission Notes */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-gray-100 p-8 space-y-5 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5" />
              </span>
              <h4 className="font-serif text-lg font-bold text-brand-charcoal">Important Notice</h4>
            </div>

            <div className="space-y-3 text-xs text-brand-muted font-inter leading-relaxed">
              <p className="p-3 bg-amber-50/60 border border-amber-100 rounded-xl text-amber-900 font-medium">
                Registration does <strong>not guarantee admission</strong> unless all criteria and interaction requirements are satisfied.
              </p>
              <p>
                Incomplete registration forms or forms with inaccurate details will automatically stand cancelled.
              </p>
              <p className="p-3 bg-red-50/60 border border-red-100 rounded-xl text-red-900 font-medium">
                <strong>No Capitation Fee:</strong> The school accepts no donations. Beware of third parties offering guaranteed admissions.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-inter">
            <span className="text-brand-muted font-medium">Form Support Helpline:</span>
            <a href="tel:+919871034444" className={`font-bold text-${theme.primary} hover:underline`}>
              +91-9871034444
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Tab 2: Fee Structure (Boxed Grades with Tabular Accordion) ───────────────
function FeeStructure({ theme, currentSchool }) {
  const isDLWS = currentSchool?.id === 'dlf-greater-noida'
  const customFees = currentSchool?.feeStructure
  const [selectedGrade, setSelectedGrade] = useState(null)

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
        <div>
          <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
            Select Grade to View Fee Table
          </h3>
          <p className="text-xs text-brand-muted font-inter font-medium mt-1">
            Click any grade box to reveal detailed monthly &amp; quarterly breakdown.
          </p>
        </div>

        {/* Box Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {feeRows.map((row, idx) => {
            const isSelected = selectedGrade === idx
            return (
              <button
                key={idx}
                onClick={() => setSelectedGrade(isSelected ? null : idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between gap-2 cursor-pointer ${
                  isSelected
                    ? `bg-${theme.primary} text-white border-${theme.primary} shadow-md scale-105`
                    : 'bg-gray-50 text-brand-charcoal hover:bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <span className={`text-[10px] font-extrabold uppercase tracking-wider ${isSelected ? 'text-white/70' : 'text-brand-muted'}`}>
                  Grade
                </span>
                <span className="font-serif font-bold text-sm leading-tight">
                  {row.class || row.grade}
                </span>
                <div className="flex items-center justify-between text-[11px] font-extrabold pt-1">
                  <span>₹ {row.total}/mo</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-180' : ''}`} />
                </div>
              </button>
            )
          })}
        </div>

        {/* Revealed Tabular Fee for Selected Grade */}
        {selectedGrade !== null && (
          <div className="mt-6 bg-gray-50 rounded-2xl p-6 border border-gray-200 space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>
                Fee Breakdown — {feeRows[selectedGrade].class || feeRows[selectedGrade].grade}
              </h4>
              <button
                onClick={() => setSelectedGrade(null)}
                className="text-xs font-bold text-gray-500 hover:text-gray-700 underline"
              >
                Close
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className={`bg-${theme.primary} text-white text-xs uppercase font-extrabold tracking-wider`}>
                    <th className="py-3 px-5">Fee Component</th>
                    <th className="py-3 px-5">Billing Frequency</th>
                    <th className="py-3 px-5 text-right">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs font-inter">
                  <tr>
                    <td className="py-3 px-5 font-semibold">Monthly Composite Tuition Fee</td>
                    <td className="py-3 px-5 text-brand-muted">Monthly</td>
                    <td className="py-3 px-5 text-right font-bold">₹ {feeRows[selectedGrade].composite}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-5 font-semibold">Assessment / Digital Learning Fee</td>
                    <td className="py-3 px-5 text-brand-muted">Monthly</td>
                    <td className="py-3 px-5 text-right font-bold">₹ {feeRows[selectedGrade].assessment || '—'}</td>
                  </tr>
                  <tr className="bg-gray-50 font-bold">
                    <td className="py-3.5 px-5 text-brand-charcoal">Total Monthly Payable</td>
                    <td className="py-3.5 px-5 text-brand-muted">Monthly</td>
                    <td className={`py-3.5 px-5 text-right font-extrabold text-${theme.primary}`}>
                      ₹ {feeRows[selectedGrade].total}
                    </td>
                  </tr>
                  <tr className={`bg-${theme.primary}/10 font-bold`}>
                    <td className={`py-3.5 px-5 text-${theme.primary}`}>Total Quarterly Installment (3 Months)</td>
                    <td className={`py-3.5 px-5 text-${theme.primary}`}>Quarterly (Apr / Jul / Oct / Jan)</td>
                    <td className={`py-3.5 px-5 text-right font-extrabold text-${theme.primary} text-sm font-serif`}>
                      ₹ {feeRows[selectedGrade].qtrTotal || (parseInt(feeRows[selectedGrade].total.replace(/,/g, '')) * 3).toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
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
      title: 'Admissions Guidelines 2026-27',
      desc: 'Complete official handbook detailing eligibility criteria, age cutoffs, and seat matrix.',
      type: 'PDF Document',
      size: '1.2 MB',
      url: currentSchool?.id === 'dlf-greater-noida' ? 'https://www.dlws.edu.in' : 'https://www.dlps.co.in/admission-guidline.aspx',
    },
    {
      title: 'Registration Guideline & Checklist',
      desc: 'Required documents checklist, photograph dimensions, and Aadhaar verification rules.',
      type: 'PDF Document',
      size: '850 KB',
      url: currentSchool?.id === 'dlf-greater-noida' ? 'https://www.dlws.edu.in' : 'https://dlps.co.in/reg-admission-procedure.aspx',
    },
    {
      title: 'Student Withdrawal Guidelines',
      desc: 'Official 3-month notice period rules, security deposit refund terms, and TC application guidelines.',
      type: 'PDF Document',
      size: '620 KB',
      url: currentSchool?.id === 'dlf-greater-noida' ? 'https://www.dlws.edu.in' : 'https://dlps.co.in/fees-structure.aspx',
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
            <a
              key={idx}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 hover:bg-white rounded-2xl border border-gray-150 hover:border-brand-gold/40 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-brand-charcoal group-hover:text-brand-masterDeep transition-colors">
                    {doc.title}
                  </h4>
                  <p className="text-[11px] text-brand-muted font-inter mt-1 leading-relaxed">
                    {doc.desc}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-brand-masterDeep">
                <span>{doc.type} ({doc.size})</span>
                <Download className="w-4 h-4 text-brand-gold group-hover:translate-y-0.5 transition-transform" />
              </div>
            </a>
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

        {/* Download & Contact Bar */}
        <div className="p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-serif text-sm font-bold text-brand-charcoal">Scholarship &amp; Concession Application Forms</h4>
            <p className="text-xs text-brand-muted font-inter">Inquire or collect application forms directly from the School Accounts &amp; Fee Department.</p>
          </div>
          <a
            href={currentSchool?.id === 'dlf-greater-noida' ? 'https://www.dlws.edu.in' : 'https://dlps.co.in/scholarship.aspx'}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-${theme.primary} text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl flex items-center gap-2 shrink-0 hover:bg-${theme.vibrant} transition-colors shadow-md`}
          >
            <Download className="w-4 h-4" /> Download Official Policy
          </a>
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
        {activeTab === 'fee-structure' && <FeeStructure theme={theme} currentSchool={currentSchool} />}
        {activeTab === 'procedure' && <AdmissionProcedure theme={theme} currentSchool={currentSchool} />}
        {activeTab === 'scholarships' && <Scholarships theme={theme} currentSchool={currentSchool} />}

      </div>
    </div>
  )
}
