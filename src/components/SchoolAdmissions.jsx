import React, { useState } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import {
  ArrowLeft, CheckCircle2, ClipboardList, IndianRupee, Award,
  ChevronRight, FileText, User, AlertCircle, Phone, Calendar,
  Download, HelpCircle, ShieldAlert, GraduationCap, Check, ExternalLink
} from 'lucide-react'

// ─── Tab 1: Enquiry Form ──────────────────────────────────────────────────────
function EnquiryForm({ theme }) {
  return (
    <div className="space-y-8">
      {/* Banner / Header Card */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-10 space-y-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold font-extrabold text-[10px] uppercase tracking-wider">
              <SparklesIcon className="w-3.5 h-3.5" /> Session 2026-27 Admissions Open
            </div>
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
              Online Enquiry &amp; Registration
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed font-medium">
              Begin your child's educational journey at DLF Public School. Complete the online inquiry to receive your Enquiry Number and proceed with enrollment.
            </p>
          </div>
          
          <div className="flex flex-col items-center sm:items-end gap-2 shrink-0 w-full sm:w-auto">
            <button
              disabled
              className="w-full sm:w-auto bg-gray-200 text-gray-500 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-2xl flex items-center justify-center gap-2 cursor-not-allowed border border-gray-300 shadow-inner"
            >
              <ExternalLink className="w-4 h-4" />
              Fill Enquiry Form
            </button>
            <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider bg-brand-gold/10 px-3 py-1 rounded-full">
              Link Coming Soon
            </span>
          </div>
        </div>

        {/* 4-Step Registration Process Flow */}
        <div className="pt-6 border-t border-gray-100 space-y-4">
          <h4 className="font-extrabold text-xs uppercase tracking-widest text-brand-charcoal">Online Registration Steps:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'Submit Enquiry', desc: 'Fill out the online enquiry form on our website.' },
              { num: '02', title: 'Get Enquiry No.', desc: 'System automatically generates your unique Enquiry Number.' },
              { num: '03', title: 'Complete Form', desc: 'Use Enquiry Number + registered mobile to complete form.' },
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
        {/* Left: Required Documents for Online Registration */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-8 space-y-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className={`w-9 h-9 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center shrink-0`}>
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>Upload Requirements for Online Form</h4>
              <p className="text-[11px] text-brand-muted font-inter">Ensure you have soft copies ready before starting online registration.</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {[
              { title: 'Recent Photographs', desc: 'Photograph of child and both parents (JPEG/JPG format, not older than 3 months).' },
              { title: 'Valid Email Address', desc: 'Personal active email ID for receiving credentials and interaction schedule.' },
              { title: 'Aadhaar Card Details', desc: 'Essential during form submission. If Aadhaar is pending, enter 000000000000 and apply on priority.' },
              { title: 'Registration Fee', desc: 'Rs. 1,500/- registration fee to be paid online upon completing form.' }
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
                Registration does <strong>not guarantee admission</strong> unless the candidate completes the entire selection process successfully.
              </p>
              <p>
                Incomplete registration forms or forms containing incorrect details will automatically stand cancelled.
              </p>
              <p className="p-3 bg-red-50/60 border border-red-100 rounded-xl text-red-900 font-medium">
                <strong>No Donations:</strong> School does not accept any donations. Please beware of third parties making false claims of procuring admission.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-inter">
            <span className="text-brand-muted font-medium">Form Support Helpline:</span>
            <a href="tel:+919818166400" className={`font-bold text-${theme.primary} hover:underline`}>
              +91-9818166400
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function SparklesIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M7.757 16.243l-2.121 2.121m12.728 0l-2.121-2.121M7.757 7.757L5.636 5.636" />
    </svg>
  )
}

// ─── Tab 2: Fee Structure ─────────────────────────────────────────────────────
function FeeStructure({ theme }) {
  const feeData = [
    { class: 'Class - Foundation', composite: '10,407', assessment: '—', total: '10,407' },
    { class: 'Class - Pre K.G.', composite: '11,893', assessment: '—', total: '11,893' },
    { class: 'Class - J.K.G.', composite: '14,867', assessment: '—', total: '14,867' },
    { class: 'Class - S.K.G.', composite: '16,133', assessment: '—', total: '16,133' },
    { class: 'Class - I', composite: '15,500', assessment: '733', total: '16,233' },
    { class: 'Class - II', composite: '14,800', assessment: '733', total: '15,533' },
    { class: 'Class - III', composite: '14,067', assessment: '733', total: '14,800' },
    { class: 'Class - IV', composite: '13,333', assessment: '733', total: '14,067' },
    { class: 'Class - V', composite: '12,440', assessment: '733', total: '13,173' },
    { class: 'Class - VI', composite: '12,667', assessment: '733', total: '13,400' },
    { class: 'Class - VII', composite: '11,800', assessment: '733', total: '12,533' },
    { class: 'Class - VIII', composite: '12,233', assessment: '733', total: '12,967' },
    { class: 'Class - IX', composite: '11,767', assessment: '733', total: '12,500' },
    { class: 'Class - X', composite: '11,767', assessment: '733', total: '12,500' },
    { class: 'Class - XI', composite: '12,400', assessment: '733', total: '13,133' },
    { class: 'Class - XII', composite: '12,400', assessment: '733', total: '13,133' },
  ]

  return (
    <div className="space-y-8">
      {/* Overview & One-Time Charges Header */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>Session 2026-27</span>
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Fee Structure Guidelines</h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter mt-1 font-medium">
              Transparent quarterly payment cycles in accordance with state guidelines &amp; CBSE board norms.
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
            <p className={`text-2xl font-bold text-${theme.primary} font-serif`}>₹ 1,500/-</p>
            <p className="text-[11px] text-brand-muted font-inter">Payable online at the time of form submission.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-150/60 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">One-Time / Non-Refundable</span>
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Admission Fee</h4>
            <p className={`text-2xl font-bold text-${theme.primary} font-serif`}>₹ 51,000/-</p>
            <p className="text-[11px] text-brand-muted font-inter">Payable upon seat confirmation after selection.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-150/60 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">One-Time / Refundable</span>
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Security Deposit</h4>
            <p className={`text-2xl font-bold text-${theme.primary} font-serif`}>₹ 10,000/-</p>
            <p className="text-[11px] text-brand-muted font-inter">Refundable as per student withdrawal policy.</p>
          </div>
        </div>

        {/* Note on Annual Diary & I-Card */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 flex items-center gap-3 text-xs text-amber-900 font-inter">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
          <span><strong>Annual Auxiliary Charge:</strong> Nominal charge of <strong>₹ 380/- per annum</strong> for Student I-Card &amp; School Diary.</span>
        </div>
      </div>

      {/* Class-wise Monthly Composite Fee Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-8 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
              Grade-wise Monthly Composite Fee Schedule
            </h3>
            <p className="text-xs text-brand-muted font-inter font-medium mt-0.5">
              Fees are billed on a <strong>quarterly basis</strong> (April, July, October &amp; January).
            </p>
          </div>
        </div>

        {/* Clean Responsive Table */}
        <div className="overflow-x-auto border border-gray-100 rounded-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className={`bg-${theme.primary} text-white text-xs uppercase font-extrabold tracking-wider font-inter`}>
                <th className="py-4 px-6">Grade / Class</th>
                <th className="py-4 px-6">Composite Fee (₹)</th>
                <th className="py-4 px-6">Assessment Fee (₹)</th>
                <th className="py-4 px-6 text-right">Total Monthly Fee (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-brand-charcoal font-inter font-medium">
              {feeData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50 hover:bg-gray-50'}>
                  <td className="py-3.5 px-6 font-bold">{row.class}</td>
                  <td className="py-3.5 px-6">{row.composite}</td>
                  <td className="py-3.5 px-6">{row.assessment}</td>
                  <td className={`py-3.5 px-6 text-right font-extrabold text-${theme.primary}`}>{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Charges & Payment Guidelines */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Notes & Special Conditions */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-8 space-y-4 shadow-sm">
          <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>Fee Guidelines &amp; Special Notes</h4>
          
          <ul className="space-y-3 text-xs text-brand-muted font-inter leading-relaxed">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className={`w-4 h-4 text-${theme.vibrant} shrink-0 mt-0.5`} />
              <span><strong>CBSE Board Fees:</strong> Additional examination &amp; registration fees levied directly by CBSE for Grades IX–XII.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className={`w-4 h-4 text-${theme.vibrant} shrink-0 mt-0.5`} />
              <span><strong>Science Stream Practical Charges:</strong> Applicable additional science laboratory fees for Class XI &amp; XII Science streams.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className={`w-4 h-4 text-${theme.vibrant} shrink-0 mt-0.5`} />
              <span><strong>Cambridge Pathway:</strong> For Cambridge curriculum (Class I onwards), please submit an enquiry form with the Admissions Department.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className={`w-4 h-4 text-${theme.vibrant} shrink-0 mt-0.5`} />
              <span><strong>Outsourced Programs:</strong> Additional fees apply for specific grade outsourced enrichment modules.</span>
            </li>
          </ul>
        </div>

        {/* Right: Payment Modes & Department Contacts */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-gray-100 p-8 space-y-5 shadow-sm">
          <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>Accepted Payment Modes</h4>
          
          <div className="space-y-2 text-xs text-brand-muted font-inter">
            <p>Fee is payable by <strong>A/C Payee Cheque, Cash, Credit Card, Online Portal, or Demand Draft / Pay Order</strong> in favour of <strong>DLF Public School</strong>.</p>
            <p className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-brand-charcoal font-semibold text-[11px]">
              ✍️ Please write child's name, class, and registration number at the back of the Cheque/Demand Draft.
            </p>
          </div>

          <div className="pt-3 border-t border-gray-100 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-charcoal block">Department Contacts:</span>
            <div className="space-y-1.5 text-xs text-brand-muted font-inter font-medium">
              <div className="flex justify-between">
                <span>Accounts / Fee Desk:</span>
                <a href="tel:+919311387400" className="font-bold text-brand-charcoal hover:underline">+91-9311387400</a>
              </div>
              <div className="flex justify-between">
                <span>Transport Desk:</span>
                <a href="tel:+919311386400" className="font-bold text-brand-charcoal hover:underline">+91-9311386400</a>
              </div>
              <div className="flex justify-between">
                <span>Admissions Desk:</span>
                <a href="tel:+919818166400" className="font-bold text-brand-charcoal hover:underline">+91-9818166400</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Tab 3: Admissions Process & Policy ───────────────────────────────────────
function AdmissionProcedure({ theme }) {
  const [openAccordion, setOpenAccordion] = useState('docs')

  const processFlow = [
    { step: '01', title: 'Online Enquiry Form', desc: 'Fill inquiry details on school portal.' },
    { step: '02', title: 'Admissions Call', desc: 'Receive phone guidance from Admissions Officer.' },
    { step: '03', title: 'Registration', desc: 'Complete registration form online with documents.' },
    { step: '04', title: 'Campus Visit', desc: 'Parent & student visit school for interaction.' },
    { step: '05', title: 'Assessment', desc: 'Student interaction (Foundation) or test (Class 1-12).' },
    { step: '06', title: 'Admission Decision', desc: 'Seat confirmation & fee payment before due date.' },
  ]

  const ageCriteria = [
    { grade: 'Foundation', age: 'Completed 3 years as of March 31st' },
    { grade: 'Pre K.G.', age: 'Completed 4 years as of March 31st' },
    { grade: 'J.K.G.', age: 'Completed 5 years as of March 31st' },
    { grade: 'S.K.G.', age: 'Completed 6 years as of March 31st' },
    { grade: 'Class I', age: 'Completed 6 years as of March 31st' },
  ]

  const mandatoryDocs = [
    'Five Colored photographs of the Child + one photograph of each parent',
    'Birth Certificate of the child (Original + self-attested photocopy)',
    'Blood Group Report of the child & copy of Vaccination Card',
    'Aadhaar Card of the Child',
    'Aadhaar Card of both Parents',
    'Previous School Mark Sheet (Last 2 years, Class 1 onwards)',
    'Transfer Certificate (Original TC, Class 1 onwards)',
    'PEN (Permanent Education Number from previous school)',
    'APAAR ID (Automated Permanent Academic Account Registry from previous school)',
    'Caste Certificate (if applicable)'
  ]

  return (
    <div className="space-y-8">
      {/* 6-Step Visual Process Flow */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div>
          <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>Step-By-Step</span>
          <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
            Admission Process Flow
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted font-inter mt-1 font-medium">
            Structured, transparent, and learner-centric admission evaluation process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {processFlow.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-5 rounded-2xl border border-gray-150/60 space-y-2 relative overflow-hidden">
              <span className={`text-xs font-extrabold w-7 h-7 rounded-lg flex items-center justify-center bg-${theme.primary}/10 text-${theme.primary}`}>
                {item.step}
              </span>
              <h4 className="font-bold text-sm text-brand-charcoal">{item.title}</h4>
              <p className="text-xs text-brand-muted font-inter leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Age Eligibility & Mandatory Documents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Age Eligibility Table */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-gray-100 p-8 space-y-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className={`w-9 h-9 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center shrink-0`}>
              <Calendar className="w-5 h-5" />
            </span>
            <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>Age Criteria (Cut-off Date: March 31)</h4>
          </div>

          <div className="overflow-x-auto border border-gray-100 rounded-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={`bg-${theme.primary} text-white text-xs font-bold font-inter`}>
                  <th className="py-3 px-4">Grade</th>
                  <th className="py-3 px-4">Age Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs text-brand-charcoal font-inter">
                {ageCriteria.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-4 font-bold">{row.grade}</td>
                    <td className="py-2.5 px-4 text-brand-muted">{row.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Mandatory Documents Checklist (10 Items) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-8 space-y-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className={`w-9 h-9 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center shrink-0`}>
              <ClipboardList className="w-5 h-5" />
            </span>
            <div>
              <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>Mandatory Documents for Verification</h4>
              <p className="text-[11px] text-brand-muted font-inter">Carry originals + self-attested copies at time of admission.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {mandatoryDocs.map((doc, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 bg-gray-50 rounded-xl border border-gray-100">
                <Check className={`w-3.5 h-3.5 text-${theme.vibrant} shrink-0 mt-0.5`} />
                <span className="text-[11px] text-brand-charcoal font-inter font-medium leading-relaxed">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accordions: CBSE Clause & Withdrawal Policy */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 space-y-4 shadow-sm">
        <h4 className={`font-serif text-xl font-bold text-${theme.primary}`}>Special Guidelines &amp; Policies</h4>

        {/* Accordion 1: CBSE Transfer Clause (Class X & XII) */}
        <div className="border border-gray-100 rounded-2xl overflow-hidden">
          <button
            onClick={() => setOpenAccordion(openAccordion === 'cbse' ? null : 'cbse')}
            className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100/80 transition-colors"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className={`w-5 h-5 text-${theme.primary}`} />
              <span className="font-bold text-sm text-brand-charcoal">CBSE Clause for Class X &amp; XII Outstation Transfers</span>
            </div>
            <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${openAccordion === 'cbse' ? 'rotate-90' : ''}`} />
          </button>
          {openAccordion === 'cbse' && (
            <div className="p-5 border-t border-gray-100 space-y-2.5 text-xs text-brand-muted font-inter leading-relaxed">
              <p>For candidates seeking admission in Class X or XII from another district/board, admission is granted subject to CBSE guidelines:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Written application for admission along with Class IX / XI progress report and CBSE Registration Number.</li>
                <li>Copy of Transfer orders of parents or original affidavit proving shifting of house with valid reasons.</li>
                <li>Declaration by Head of the Institution in the prescribed format.</li>
                <li>Subject to availability of seats. Meritorious scholarships available (Contact <strong>+91-9818166400</strong>).</li>
              </ul>
            </div>
          )}
        </div>

        {/* Accordion 2: Withdrawal & Transfer Certificate (TC) Policy */}
        <div className="border border-gray-100 rounded-2xl overflow-hidden">
          <button
            onClick={() => setOpenAccordion(openAccordion === 'tc' ? null : 'tc')}
            className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100/80 transition-colors"
          >
            <div className="flex items-center gap-3">
              <ShieldAlert className={`w-5 h-5 text-${theme.primary}`} />
              <span className="font-bold text-sm text-brand-charcoal">Student Withdrawal &amp; Transfer Certificate (TC) Policy</span>
            </div>
            <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${openAccordion === 'tc' ? 'rotate-90' : ''}`} />
          </button>
          {openAccordion === 'tc' && (
            <div className="p-5 border-t border-gray-100 space-y-3 text-xs text-brand-muted font-inter leading-relaxed">
              <div className="space-y-1.5">
                <span className="font-bold text-brand-charcoal">1. Written Application:</span>
                <p>Written application addressed to the Principal must be submitted physically or emailed to <strong>contactus@dlps.co.in</strong>. Verbal requests are not official.</p>
              </div>
              <div className="space-y-1.5">
                <span className="font-bold text-brand-charcoal">2. Notice Period (3 Months):</span>
                <p>A minimum of <strong>3 calendar months' written notice</strong> is required for withdrawal. If notice is not served, 3 months' fees (1 quarter) is payable in lieu.</p>
              </div>
              <div className="space-y-1.5">
                <span className="font-bold text-brand-charcoal">3. Processing Time &amp; Caution Money:</span>
                <p>TC processing requires a minimum of <strong>15 working days</strong> from complete application receipt. Caution money must be claimed within <strong>6 months</strong> of withdrawal (forfeited thereafter).</p>
              </div>
              <div className="space-y-1.5">
                <span className="font-bold text-brand-charcoal">4. Grounds for Strike Off by School:</span>
                <p>School reserves right to strike off names for gross indiscipline, non-payment of fees after reminders, or continuous absence for <strong>&gt;15 consecutive days</strong> without leave.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Tab 4: Scholarships ──────────────────────────────────────────────────────
function Scholarships({ theme }) {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>Merit &amp; Support</span>
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
              Scholarships &amp; Concessions
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter mt-1 font-medium">
              Recognizing exceptional achievements in academics, sports, and supporting families.
            </p>
          </div>
          <span className="bg-brand-gold/10 text-brand-gold font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-2xl">
            Session 2026-27
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Merit & Sports */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h4 className={`font-serif text-base font-bold text-${theme.primary}`}>Merit &amp; Sports Scholarships</h4>
            <p className="text-xs text-brand-muted font-inter leading-relaxed">
              Exciting scholarships are offered for meritorious students achieving top academic percentile ranks or representing district/state/national levels in sports.
            </p>
          </div>

          {/* Card 2: Class XI Special Scholarships */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className={`font-serif text-base font-bold text-${theme.primary}`}>Class XI Merit Concessions</h4>
            <p className="text-xs text-brand-muted font-inter leading-relaxed">
              Special scholarship streams available for high-achieving Grade XI entrance candidates across Science, Commerce, and Humanities.
            </p>
          </div>
        </div>

        {/* Notice for content update */}
        <div className="p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-brand-gold font-bold text-xs">
            <HelpCircle className="w-4 h-4" />
            <span>Detailed Scholarship Framework Coming Soon</span>
          </div>
          <p className="text-xs text-brand-charcoal font-inter leading-relaxed">
            Detailed criteria, cutoff percentages, and application forms for session 2026-27 scholarships will be published shortly. For immediate inquiries, please contact the Admissions Office at <strong>+91-9818166400</strong>.
          </p>
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
            <ArrowLeft className="w-4 h-4" /> Back to School Home
          </Link>
        </div>

        {/* Tab Navigation (4 Tabs) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {tabs.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2.5 px-4 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer justify-center ${
                activeTab === id
                  ? `bg-${theme.primary} text-white shadow-lg`
                  : `bg-white text-brand-charcoal border border-gray-100 hover:border-${theme.primary}/20 hover:bg-gray-50`
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'enquiry' && <EnquiryForm theme={theme} />}
          {activeTab === 'fee-structure' && <FeeStructure theme={theme} />}
          {activeTab === 'procedure' && <AdmissionProcedure theme={theme} />}
          {activeTab === 'scholarships' && <Scholarships theme={theme} />}
        </div>

        {/* Bottom CTA Strip */}
        <div className={`bg-${theme.primary} rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md`}>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Ready to Begin Your Child's Journey?</h3>
            <p className="text-white/70 text-xs font-inter mt-1">Our admissions helpline is active Mon–Sat, 9 AM–5 PM.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a href="tel:+919818166400" className="bg-white text-brand-greenDeep font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-brand-gold hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call: +91-9818166400
            </a>
            <button onClick={() => setTab('enquiry')} className="bg-brand-gold text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-brand-goldlight transition-all duration-300 cursor-pointer text-center">
              Enquiry Form →
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
