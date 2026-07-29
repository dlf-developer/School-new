import React, { useState } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import {
  ArrowLeft, CheckCircle2, ClipboardList, IndianRupee, Award, Trophy,
  ChevronRight, FileText, User, AlertCircle, Phone, Calendar,
  Download, HelpCircle, ShieldAlert, GraduationCap, Check, ExternalLink,
  Building2, Sparkles, BookOpen, Cpu, Users
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
              <SparklesIcon className="w-3.5 h-3.5" /> Session 2026-27 Admissions Open
            </div>
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
              Online Enquiry &amp; Registration
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed font-medium">
              Begin your child's educational journey at {currentSchool?.name || 'DLF Public School'}. Complete the online enquiry form to receive your Enquiry Number and proceed with registration.
            </p>
          </div>
          
          <div className="flex flex-col items-center sm:items-end gap-2 shrink-0 w-full sm:w-auto">
            <a
              href={enquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto bg-brand-gold text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-goldlight transition-all shadow-md hover:shadow-lg`}
            >
              <ExternalLink className="w-4 h-4" />
              Fill Online Enquiry Form ↗
            </a>
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Official Edunext Portal Active
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
function FeeStructure({ theme, currentSchool }) {
  const isDLWS = currentSchool?.id === 'dlf-greater-noida'
  const customFees = currentSchool?.feeStructure

  const dlpsFeeData = [
    { class: 'Class - Foundation', category: 'foundation', composite: '10,407', assessment: '—', total: '10,407' },
    { class: 'Class - Pre K.G.', category: 'foundation', composite: '11,893', assessment: '—', total: '11,893' },
    { class: 'Class - J.K.G.', category: 'foundation', composite: '14,867', assessment: '—', total: '14,867' },
    { class: 'Class - S.K.G.', category: 'foundation', composite: '16,133', assessment: '—', total: '16,133' },
    { class: 'Class - I', category: 'primary', composite: '15,500', assessment: '733', total: '16,233' },
    { class: 'Class - II', category: 'primary', composite: '14,800', assessment: '733', total: '15,533' },
    { class: 'Class - III', category: 'primary', composite: '14,067', assessment: '733', total: '14,800' },
    { class: 'Class - IV', category: 'primary', composite: '13,333', assessment: '733', total: '14,067' },
    { class: 'Class - V', category: 'primary', composite: '12,440', assessment: '733', total: '13,173' },
    { class: 'Class - VI', category: 'middle', composite: '12,667', assessment: '733', total: '13,400' },
    { class: 'Class - VII', category: 'middle', composite: '11,800', assessment: '733', total: '12,533' },
    { class: 'Class - VIII', category: 'middle', composite: '12,233', assessment: '733', total: '12,967' },
    { class: 'Class - IX', category: 'secondary', composite: '11,767', assessment: '733', total: '12,500' },
    { class: 'Class - X', category: 'secondary', composite: '11,767', assessment: '733', total: '12,500' },
    { class: 'Class - XI', category: 'senior', composite: '12,400', assessment: '733', total: '13,133' },
    { class: 'Class - XII', category: 'senior', composite: '12,400', assessment: '733', total: '13,133' },
  ]

  const feeData = customFees?.rows || dlpsFeeData
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Grades', icon: Building2 },
    { id: 'foundation', label: 'Foundation (Pre-KG – SKG)', icon: Sparkles },
    { id: 'primary', label: 'Primary (Class I – V)', icon: BookOpen },
    { id: 'middle', label: 'Middle (Class VI – VIII)', icon: Cpu },
    { id: 'secondary', label: 'Secondary (Class IX & X)', icon: GraduationCap },
    { id: 'senior', label: 'Senior (Class XI & XII)', icon: Award },
  ]

  const filteredFees = selectedCategory === 'all'
    ? feeData
    : feeData.filter(item => {
        if (item.category) return item.category === selectedCategory
        const name = item.class.toLowerCase()
        if (selectedCategory === 'foundation') return name.includes('foundation') || name.includes('k.g') || name.includes('nursery')
        if (selectedCategory === 'primary') return name.includes('- i') || name.includes('- ii') || name.includes('- iii') || name.includes('- iv') || name.includes('- v')
        if (selectedCategory === 'middle') return name.includes('- vi') || name.includes('- vii') || name.includes('- viii')
        if (selectedCategory === 'secondary') return name.includes('- ix') || name.includes('- x')
        if (selectedCategory === 'senior') return name.includes('- xi') || name.includes('- xii')
        return true
      })

  return (
    <div className="space-y-8">
      {/* Overview & One-Time Charges Header */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>Session 2026-27</span>
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Fee Structure Guidelines — {currentSchool?.name}</h3>
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
            <p className={`text-2xl font-bold text-${theme.primary} font-serif`}>₹ {customFees?.registrationFee || '1,500'}/-</p>
            <p className="text-[11px] text-brand-muted font-inter">Payable at the time of Registration.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-150/60 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">One-Time / Non-Refundable</span>
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Admission Fee</h4>
            <p className={`text-2xl font-bold text-${theme.primary} font-serif`}>₹ {customFees?.admissionFee || '51,000'}/-</p>
            <p className="text-[11px] text-brand-muted font-inter">Payable upon seat confirmation after selection.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-150/60 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">One-Time / Refundable</span>
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Security Deposit</h4>
            <p className={`text-2xl font-bold text-${theme.primary} font-serif`}>₹ {customFees?.securityDeposit || '10,000'}/-</p>
            <p className="text-[11px] text-brand-muted font-inter">Refundable as per student withdrawal policy.</p>
          </div>
        </div>

        {/* Note on Annual Auxiliary Charge / Nutrition Meal */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 flex items-center gap-3 text-xs text-amber-900 font-inter">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            {isDLWS ? (
              <><strong>Nutrition Meal (Quarterly):</strong> {customFees?.nutritionMeal}</>
            ) : (
              <><strong>Annual Auxiliary Charge:</strong> Nominal charge of <strong>₹ 380/- per annum</strong> for Student I-Card &amp; School Diary.</>
            )}
          </span>
        </div>
      </div>

      {/* Boxed Grade Selection Buttons */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-10 space-y-6">
        <div>
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-brand-gold">Interactive Fee Breakdown</h4>
          <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary} mt-1`}>
            Select Grade Level to View Fee Schedule
          </h3>
          <p className="text-xs text-brand-muted font-inter mt-1">
            Click on any grade box below to reveal the exact composite fee table for that specific grade level.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => {
            const CatIcon = cat.icon
            const isSelected = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 rounded-2xl border text-left flex flex-col justify-between gap-3 transition-all cursor-pointer ${
                  isSelected
                    ? `bg-${theme.primary} text-white border-${theme.primary} shadow-md`
                    : 'bg-gray-50/70 text-brand-charcoal border-gray-100 hover:bg-gray-100 hover:border-gray-200'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isSelected ? 'bg-white/20 text-white' : 'bg-white text-brand-gold border border-gray-100 shadow-xs'}`}>
                  <CatIcon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold font-inter leading-tight">{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Filtered Fee Table */}
        <div className="pt-4 overflow-x-auto border border-gray-100 rounded-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className={`bg-${theme.primary} text-white text-xs uppercase font-extrabold tracking-wider font-inter`}>
                <th className="py-4 px-6">Grade / Class</th>
                <th className="py-4 px-6">Composite Fee (Monthly ₹)</th>
                <th className="py-4 px-6">{isDLWS ? 'External Programs' : 'Assessment Fee (₹)'}</th>
                <th className="py-4 px-6 text-right">Total Monthly Fee (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-brand-charcoal font-inter font-medium">
              {filteredFees.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50 hover:bg-gray-50'}>
                  <td className="py-3.5 px-6 font-bold">{row.class}</td>
                  <td className="py-3.5 px-6">₹ {row.composite}</td>
                  <td className="py-3.5 px-6">{row.external || (row.assessment === '—' ? '—' : `₹ ${row.assessment}`)}</td>
                  <td className={`py-3.5 px-6 text-right font-extrabold text-${theme.primary}`}>₹ {row.total}</td>
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
            <div className="p-3.5 bg-gray-50 border border-gray-100 rounded-xl text-brand-charcoal font-semibold text-[11px] flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Please write child's name, class, and registration number at the back of the Cheque/Demand Draft.</span>
            </div>
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
    { step: '01', title: 'Online Enquiry Form', desc: 'Fill inquiry details on official portal to generate unique Enquiry Number.', icon: FileText },
    { step: '02', title: 'Admissions Call & Guidance', desc: 'Personalized phone call & counselling guidance from Admissions Officer.', icon: Phone },
    { step: '03', title: 'Online Registration', desc: 'Submit completed registration form online with soft copy documents.', icon: ClipboardList },
    { step: '04', title: 'Campus Visit & Interaction', desc: 'Parent & candidate visit school for campus tour and student interaction.', icon: User },
    { step: '05', title: 'Assessment / Interaction', desc: 'Foundation student interaction or Class I-XII proficiency assessment.', icon: GraduationCap },
    { step: '06', title: 'Seat Allotment & Enrollment', desc: 'Receive offer letter, complete fee submission, and finalize enrollment.', icon: CheckCircle2 },
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

  const importantDocs = [
    {
      title: 'Admissions Guidelines 2026-27',
      desc: 'Complete overview of session admission eligibility, seat matrix, and admission policies.',
      category: 'Admission Policy',
      fileName: 'Admissions_Guidelines_2026.pdf'
    },
    {
      title: 'Registration Guideline & Checklist',
      desc: 'Step-by-step guide for online registration form submission and document uploads.',
      category: 'Form Checklist',
      fileName: 'Registration_Guidelines.pdf'
    },
    {
      title: 'Student Withdrawal Guidelines',
      desc: 'Official notice period requirements, caution money refund timelines, and TC issuance policy.',
      category: 'School Policy',
      fileName: 'Student_Withdrawal_Policy.pdf'
    },
    {
      title: 'Scholarship & Merit Policy',
      desc: 'Criteria for academic, sports, and merit-cum-means financial assistance for Class IX–XII.',
      category: 'Financial Merit',
      fileName: 'Scholarship_Policy_2026.pdf'
    }
  ]

  return (
    <div className="space-y-8">
      {/* 6-Step Visual Infographic Flowchart */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-8">
        <div>
          <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>Interactive Flowchart</span>
          <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary} mt-1`}>
            Step-by-Step Admission Process Flowchart
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted font-inter mt-1 font-medium">
            Structured, transparent, and learner-centric admission evaluation journey.
          </p>
        </div>

        {/* Infographic Flowchart Grid with Connecting Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {processFlow.map((item, idx) => {
            const StepIcon = item.icon
            return (
              <div
                key={idx}
                className="bg-gray-50/80 rounded-2xl p-6 border border-gray-150/70 space-y-3 relative group hover:border-brand-gold/50 hover:bg-white transition-all shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-xl bg-${theme.primary} text-white font-inter shadow-sm`}>
                    Stage {item.step}
                  </span>
                  <div className={`w-9 h-9 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center`}>
                    <StepIcon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-base font-bold text-brand-charcoal">{item.title}</h4>
                  <p className="text-xs text-brand-muted font-inter leading-relaxed mt-1">{item.desc}</p>
                </div>

                {idx < processFlow.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-brand-gold font-bold">
                    →
                  </div>
                )}
              </div>
            )
          })}
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

      {/* Important Documents Download Section */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>Official Guidelines</span>
            <h4 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary} mt-0.5`}>Important Admission Documents</h4>
          </div>
          <Download className="w-5 h-5 text-brand-gold" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {importantDocs.map((doc, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-5 border border-gray-150/70 space-y-3 flex flex-col justify-between hover:border-brand-gold/40 transition-all">
              <div className="space-y-2">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-2.5 py-0.5 rounded-full inline-block">
                  {doc.category}
                </span>
                <h5 className="font-serif text-sm font-bold text-brand-charcoal leading-snug">{doc.title}</h5>
                <p className="text-[11px] text-brand-muted font-inter leading-relaxed">{doc.desc}</p>
              </div>

              <button
                onClick={() => alert(`Downloading official document: ${doc.fileName}`)}
                className={`w-full py-2.5 px-3 rounded-xl border border-gray-200 hover:border-${theme.primary} bg-white hover:bg-gray-50 text-xs font-bold text-brand-charcoal flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs`}
              >
                <FileText className="w-3.5 h-3.5 text-brand-gold" />
                <span>Download PDF</span>
              </button>
            </div>
          ))}
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

// ─── Tab 4: Scholarships & Concessions ─────────────────────────────────────────
function Scholarships({ theme }) {
  const sponsoredAwards = [
    { title: 'Vranda Harmonious Personality of the Year Award', scope: 'Class I Topper' },
    { title: 'Sanchay Mahato Scholarship for Excellence', scope: 'Class VI Excellence' },
    { title: 'Smt. Jagdish Rani Scholarship for Excellence', scope: 'Class VII Excellence' },
    { title: 'Smt. Lali Bai Scholarship for Excellence', scope: 'Class VIII Excellence' },
    { title: 'Late Shri Baldev Raj Bhardwaj Scholarship', scope: 'Class IX Excellence' },
    { title: 'Principal Sudesh Sekhri Scholarship for Excellence', scope: 'Class X Board Excellence' },
    { title: 'Smt. Pyaro Devi Scholarship for Meritorious Student', scope: 'Class XII Overall Merit' },
    { title: 'Vijay Verma Memorial Scholarship', scope: 'Class XII Science Topper' },
    { title: 'Major Mohit Sharma AC, SM, National Achievers Award', scope: 'National Achievers (2 Awards)' },
    { title: 'Sudershana Bhardwaj Scholarship', scope: 'All Rounder Excellence' },
    { title: 'Vimla Mehra Scholarship', scope: 'Outstanding Personality' },
    { title: 'Satyendra Mohan Bhardwaj Memorial Scholarship', scope: 'Outstanding Person of the Year' },
    { title: 'Shri. B.K. Wadhawan Bhardwaj Memorial Award', scope: 'Innovation & Initiative' },
    { title: 'Mahima Kapoor Award', scope: 'Most Concerned Delfite of the Year' },
    { title: 'Aishwariya "Kala Shrimani" Award', scope: 'Visual & Fine Arts Mastery' },
    { title: 'Entrepreneur of the Year Award', scope: 'Innovation & Enterprise' },
    { title: 'Sh. Harish Chand Mehta Rolling Trophy', scope: 'Budding Sports Person' },
    { title: 'Moon Beam Scholarship', scope: 'Special Merit Recognition' },
    { title: 'Smt. Deepa Samrat Award', scope: 'Humanitarian of the Year' },
    { title: 'Smt. Rammi Wadhawan Award', scope: 'Exemplary Citizen of the Year' },
    { title: 'Sh. B.K. Jerath Memorial Award', scope: 'All Rounder of the Year' },
    { title: 'Smt. Krishna Jerath Memorial Award', scope: 'Entrepreneur of the Year' },
    { title: 'Sh. M.L. Sekhri Memorial Award', scope: 'Literary Luminary' }
  ]

  const concessionsList = [
    { title: 'Indian Armed Forces Concession', eligibility: 'Children of serving or retired personnel of the Indian Armed Forces.', icon: ShieldAlert },
    { title: 'Alumni Concession', eligibility: 'Children of alumni who passed Grade XII or spent at least 6 academic years at DLPS.', icon: GraduationCap },
    { title: 'Sibling Concession', eligibility: 'Students with elder siblings studying in school or dual sibling new admissions.', icon: Users },
    { title: 'Staff Ward Concession', eligibility: 'Children of all staff members currently employed across Darbari Lal Foundation branches.', icon: Building2 }
  ]

  return (
    <div className="space-y-8">
      {/* Banner / Stat Card */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-gray-100 pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>Official Scholarship Framework</span>
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
              Academic &amp; Sports Scholarship Scheme
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed font-medium">
              In line with DLF Public School's philosophy of encouraging students towards multi-dimensional excellence, top performers selected on the basis of year-end consolidated results are awarded prestigious scholarships.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-brand-gold text-white p-6 rounded-2xl shadow-md shrink-0 w-full sm:w-auto text-center space-y-1">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-white/80 block">Dispersed Last Academic Year</span>
            <p className="text-3xl font-extrabold font-serif">₹ 29.75 Lakhs+</p>
            <span className="text-[10px] text-white/90 font-medium block">Academic &amp; Sports Scholarships Awarded</span>
          </div>
        </div>

        {/* 2 Core Criteria Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Fee Scholarships XI & XII */}
          <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-150 space-y-3 relative">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center shrink-0`}>
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-gold">Class XI &amp; XII Board Merit</span>
                <h4 className="font-serif text-base font-bold text-brand-charcoal">Fee Scholarships (Classes XI &amp; XII)</h4>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-brand-muted font-inter leading-relaxed pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Eligibility:</strong> Students appearing in Class-X Board examination securing <strong>93% or above</strong> aggregate score.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Renewal Condition:</strong> Must maintain an overall average aggregate of <strong>85%</strong> with no absenteeism in any examination to continue scholarship into Class XII.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Sports Scholarship */}
          <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-150 space-y-3 relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-gold">Athletic Excellence</span>
                <h4 className="font-serif text-base font-bold text-brand-charcoal">Sports Scholarship Scheme</h4>
              </div>
            </div>

            <ul className="space-y-1.5 text-xs text-brand-muted font-inter leading-relaxed pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Secured top position in District / State / National / International competitions in recognized sports events.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Maintain minimum <strong>60% academic aggregate</strong> in previous academic year + Physical Education recommendation.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4 Official Concessions */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div className="border-b border-gray-100 pb-4">
          <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>Category Waivers</span>
          <h4 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary} mt-0.5`}>Special School Fee Concessions</h4>
          <p className="text-xs text-brand-muted font-inter mt-1">Note: Only one concession can be applied per student.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {concessionsList.map((conc, i) => {
            const ConcIcon = conc.icon
            return (
              <div key={i} className="bg-gray-50 rounded-2xl p-5 border border-gray-150 space-y-2.5 hover:border-brand-gold/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                  <ConcIcon className="w-4.5 h-4.5" />
                </div>
                <h5 className="font-serif text-sm font-bold text-brand-charcoal">{conc.title}</h5>
                <p className="text-[11px] text-brand-muted font-inter leading-relaxed">{conc.eligibility}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* 23 Sponsored Scholarships & Memorial Awards */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>Hall of Honor</span>
            <h4 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary} mt-0.5`}>23 Sponsored Memorial Scholarships &amp; Rolling Trophies</h4>
          </div>
          <Award className="w-6 h-6 text-brand-gold" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {sponsoredAwards.map((award, idx) => (
            <div key={idx} className="bg-gray-50/70 p-4 rounded-xl border border-gray-100 flex items-start gap-3 hover:bg-white hover:border-brand-gold/30 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 text-xs font-bold font-inter mt-0.5">
                {idx + 1}
              </div>
              <div className="space-y-0.5">
                <h5 className="font-bold text-xs text-brand-charcoal font-serif">{award.title}</h5>
                <span className="text-[10px] font-bold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-full inline-block">
                  {award.scope}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100 text-center space-y-2">
          <p className="text-xs text-brand-muted font-inter">
            To apply for Sports Scholarships or enquire about Fee Concessions, please visit the <strong>School Fee Desk</strong> or call <strong>+91-9818166400</strong>.
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
          {activeTab === 'fee-structure' && <FeeStructure theme={theme} currentSchool={currentSchool} />}
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
            <a href="tel:+919818166400" className={`bg-white text-${theme.primary} font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-brand-gold hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2`}>
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
