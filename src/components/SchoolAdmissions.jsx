import React, { useState } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import {
  ArrowLeft, CheckCircle2, ClipboardList, IndianRupee, Award,
  ChevronRight, FileText, User, GraduationCap, Send, CheckCircle,
  Star, Gift, BookOpen, BadgeCheck, AlertCircle
} from 'lucide-react'

// ─── Tab 1: Admission Procedure & Guidelines ─────────────────────────────────
function AdmissionProcedure({ theme, schoolName }) {
  const [openStep, setOpenStep] = useState(null)

  const steps = [
    {
      number: '01',
      title: 'Online Enquiry & Registration',
      icon: FileText,
      summary: 'Start your journey by submitting a digital enquiry on our portal.',
      details: [
        'Complete the Online Enquiry Form with basic credentials and class preference.',
        'Receive an auto-confirmation on your registered email/mobile within 24 hours.',
        'Our Admissions team will reach out to guide next steps within 1 working day.',
        'Enquiry is non-binding and completely free of charge.'
      ]
    },
    {
      number: '02',
      title: 'Campus Interaction & Orientation',
      icon: User,
      summary: 'Visit our premium campus with parents/guardians for a guided orientation session.',
      details: [
        'Schedule a campus visit through our admissions helpline or portal.',
        'Interact with our subject mentors and school leadership team.',
        'Explore classrooms, labs, sports arenas, and creative spaces.',
        "Orientation includes a brief overview of DLF's pedagogy and school philosophy."
      ]
    },
    {
      number: '03',
      title: 'Eligibility & Age Criteria Verification',
      icon: BadgeCheck,
      summary: 'Age and previous academic eligibility is validated against CBSE norms.',
      details: [
        'CBSE-prescribed minimum age criteria strictly followed for all classes.',
        'Pre-Nursery: Child must be 3+ years as on 31st March of academic year.',
        'Nursery: 3.5+ years; KG: 4.5+ years; Class I: 5.5+ years.',
        'For Classes II onwards, previous class passing certificate required.'
      ]
    },
    {
      number: '04',
      title: 'Document Submission',
      icon: ClipboardList,
      summary: 'Submit a complete set of required documents for verification.',
      details: [
        'Birth Certificate (original + self-attested photocopy).',
        'Proof of Residence: Aadhaar / Voter ID / Utility Bill.',
        'Previous class Report Card / Transfer Certificate (TC) with SLC.',
        '4 recent passport-size photographs of the student.',
        'Parent / Guardian Aadhaar and PAN card copies.',
        'Immunization / vaccination record for pre-primary classes.'
      ]
    },
    {
      number: '05',
      title: 'Fee Payment & Seat Confirmation',
      icon: IndianRupee,
      summary: "Complete fee payment digitally to confirm your child's seat.",
      details: [
        'Registration fee is payable online (non-refundable).',
        'Annual tuition fee & session charges payable quarterly or annually.',
        'Secure payment gateway supports UPI, Net Banking, and Cards.',
        'Official receipt and Welcome Letter issued within 48 hours of payment.',
        'Admission kit dispatched to registered address post-confirmation.'
      ]
    }
  ]

  const eligibilityTable = [
    { grade: 'Pre-Nursery', minAge: '3 years', maxAge: '3.5 years', docs: 'Birth Certificate, Immunization Record' },
    { grade: 'Nursery', minAge: '3.5 years', maxAge: '4 years', docs: 'Birth Certificate, Immunization Record' },
    { grade: 'KG', minAge: '4.5 years', maxAge: '5 years', docs: 'Birth Certificate, Immunization Record' },
    { grade: 'Class I', minAge: '5.5 years', maxAge: '6.5 years', docs: 'Birth Certificate, KG Passing Certificate' },
    { grade: 'Class II–V', minAge: 'As per CBSE', maxAge: '—', docs: 'TC + Report Card from previous school' },
    { grade: 'Class VI–VIII', minAge: 'As per CBSE', maxAge: '—', docs: 'TC, SLC + Last 2 Years Report Cards' },
    { grade: 'Class IX–X', minAge: 'As per CBSE', maxAge: '—', docs: 'TC, SLC, Mark Sheets + Aadhaar' },
    { grade: 'Class XI–XII', minAge: 'As per CBSE', maxAge: '—', docs: 'Class X Result + TC + SLC' },
  ]

  return (
    <div className="space-y-10">
      {/* Steps Accordion */}
      <div className="space-y-3">
        <h3 className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant} font-inter mb-4`}>5-Step Admission Process</h3>
        {steps.map((step, idx) => {
          const Icon = step.icon
          const isOpen = openStep === idx
          return (
            <div
              key={idx}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? `border-${theme.primary}/30 shadow-md` : 'border-gray-100 hover:border-gray-200'}`}
            >
              <button
                className="w-full text-left flex items-center gap-4 p-5 cursor-pointer"
                onClick={() => setOpenStep(isOpen ? null : idx)}
              >
                <span className={`text-[11px] font-extrabold w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${isOpen ? `bg-${theme.primary} text-white` : `bg-${theme.primary}/10 text-${theme.primary}`}`}>
                  {step.number}
                </span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${isOpen ? `bg-${theme.primary}/10 text-${theme.primary}` : 'bg-gray-50 text-gray-400'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-bold text-sm ${isOpen ? `text-${theme.primary}` : 'text-brand-charcoal'}`}>{step.title}</p>
                  <p className="text-[11px] text-brand-muted font-inter mt-0.5">{step.summary}</p>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-0 border-t border-gray-50">
                  <ul className="space-y-2 mt-3">
                    {step.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-3.5 h-3.5 text-${theme.accent} shrink-0 mt-0.5`} />
                        <span className="text-xs text-brand-charcoal font-inter font-medium leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Eligibility & Age Criteria Table */}
      <div>
        <h3 className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant} font-inter mb-4`}>Age Eligibility & Document Checklist</h3>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className={`bg-${theme.primary} text-white`}>
                  <th className="text-left px-5 py-3.5 font-extrabold uppercase tracking-wider text-[10px]">Class / Grade</th>
                  <th className="text-left px-5 py-3.5 font-extrabold uppercase tracking-wider text-[10px]">Min. Age</th>
                  <th className="text-left px-5 py-3.5 font-extrabold uppercase tracking-wider text-[10px]">Max. Age</th>
                  <th className="text-left px-5 py-3.5 font-extrabold uppercase tracking-wider text-[10px]">Key Documents Required</th>
                </tr>
              </thead>
              <tbody>
                {eligibilityTable.map((row, idx) => (
                  <tr key={idx} className={`border-b border-gray-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className={`px-5 py-3.5 font-bold text-${theme.primary}`}>{row.grade}</td>
                    <td className="px-5 py-3.5 text-brand-charcoal font-medium">{row.minAge}</td>
                    <td className="px-5 py-3.5 text-brand-charcoal font-medium">{row.maxAge}</td>
                    <td className="px-5 py-3.5 text-brand-muted font-inter">{row.docs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-[10px] text-brand-muted font-inter mt-3 flex items-start gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-brand-gold" />
          Age as on 31st March of the academic year. All admissions subject to seat availability and approval of the school principal.
        </p>
      </div>
    </div>
  )
}

// ─── Tab 2: Fee Structure ─────────────────────────────────────────────────────
function FeeStructure({ theme }) {
  const feeData = [
    {
      section: 'Pre-Primary (Pre-Nursery, Nursery, KG)',
      color: theme.primary,
      rows: [
        { head: 'Registration Fee (One-time)', amount: '₹ 1,500', period: 'One-time', note: 'Non-refundable' },
        { head: 'Admission Fee (One-time)', amount: '₹ 20,000', period: 'One-time', note: 'Non-refundable' },
        { head: 'Tuition Fee', amount: '₹ 3,200', period: 'Per Month', note: 'Payable quarterly' },
        { head: 'Annual Development Charges', amount: '₹ 12,000', period: 'Per Annum', note: 'Payable in April' },
        { head: 'Smart Class & Activity Fee', amount: '₹ 4,800', period: 'Per Annum', note: 'Payable in April' },
      ]
    },
    {
      section: 'Primary (Class I – V)',
      color: theme.vibrant,
      rows: [
        { head: 'Registration Fee (One-time)', amount: '₹ 1,500', period: 'One-time', note: 'Non-refundable' },
        { head: 'Admission Fee (One-time)', amount: '₹ 25,000', period: 'One-time', note: 'Non-refundable' },
        { head: 'Tuition Fee', amount: '₹ 4,200', period: 'Per Month', note: 'Payable quarterly' },
        { head: 'Annual Development Charges', amount: '₹ 14,000', period: 'Per Annum', note: 'Payable in April' },
        { head: 'Computer & Smart Class Fee', amount: '₹ 5,500', period: 'Per Annum', note: 'Payable in April' },
      ]
    },
    {
      section: 'Middle School (Class VI – VIII)',
      color: theme.primary,
      rows: [
        { head: 'Registration Fee (One-time)', amount: '₹ 1,500', period: 'One-time', note: 'Non-refundable' },
        { head: 'Admission Fee (One-time)', amount: '₹ 28,000', period: 'One-time', note: 'Non-refundable' },
        { head: 'Tuition Fee', amount: '₹ 5,000', period: 'Per Month', note: 'Payable quarterly' },
        { head: 'Annual Development Charges', amount: '₹ 15,000', period: 'Per Annum', note: 'Payable in April' },
        { head: 'Lab & Computer Fee', amount: '₹ 6,000', period: 'Per Annum', note: 'Payable in April' },
      ]
    },
    {
      section: 'Secondary (Class IX – X)',
      color: theme.vibrant,
      rows: [
        { head: 'Registration Fee (One-time)', amount: '₹ 1,500', period: 'One-time', note: 'Non-refundable' },
        { head: 'Admission Fee (One-time)', amount: '₹ 30,000', period: 'One-time', note: 'Non-refundable' },
        { head: 'Tuition Fee', amount: '₹ 6,000', period: 'Per Month', note: 'Payable quarterly' },
        { head: 'Annual Development Charges', amount: '₹ 16,000', period: 'Per Annum', note: 'Payable in April' },
        { head: 'Lab & Practical Fee', amount: '₹ 7,000', period: 'Per Annum', note: 'Payable in April' },
      ]
    },
    {
      section: 'Senior Secondary (Class XI – XII)',
      color: theme.primary,
      rows: [
        { head: 'Registration Fee (One-time)', amount: '₹ 1,500', period: 'One-time', note: 'Non-refundable' },
        { head: 'Admission Fee (One-time)', amount: '₹ 32,000', period: 'One-time', note: 'Non-refundable' },
        { head: 'Tuition Fee (Science)', amount: '₹ 7,500', period: 'Per Month', note: 'Payable quarterly' },
        { head: 'Tuition Fee (Commerce / Hum.)', amount: '₹ 6,800', period: 'Per Month', note: 'Payable quarterly' },
        { head: 'Annual Development Charges', amount: '₹ 18,000', period: 'Per Annum', note: 'Payable in April' },
        { head: 'Lab & Practical Fee (Science)', amount: '₹ 9,000', period: 'Per Annum', note: 'Payable in April' },
      ]
    }
  ]

  const [activeSection, setActiveSection] = useState(0)

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 bg-brand-gold/5 border border-brand-gold/20 rounded-2xl p-4">
        <AlertCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
        <p className="text-[11px] text-brand-charcoal font-inter leading-relaxed">
          <strong>Note:</strong> Fee structure shown is indicative for the 2025–26 academic session. Actual fee may vary. 
          For confirmed current-year fee details, please contact the admissions office at <strong>+91-9871034444</strong>.
          All fees are subject to annual revision as per school policy.
        </p>
      </div>

      {/* Section Tabs */}
      <div className="flex flex-wrap gap-2">
        {feeData.map((sec, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSection(idx)}
            className={`text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
              activeSection === idx
                ? `bg-${theme.primary} text-white shadow-md`
                : `bg-${theme.primary}/5 text-${theme.primary} hover:bg-${theme.primary}/10`
            }`}
          >
            {sec.section.split(' ')[0]} {sec.section.split(' ')[1] || ''}
          </button>
        ))}
      </div>

      {/* Active Fee Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className={`bg-${theme.primary} px-6 py-4`}>
          <h3 className="font-serif text-base font-bold text-white">{feeData[activeSection].section}</h3>
          <p className="text-[10px] text-white/70 font-inter mt-0.5">Academic Year 2025–26 (Indicative)</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-3 font-extrabold uppercase tracking-wider text-[10px] text-gray-500">Fee Head</th>
                <th className="text-left px-6 py-3 font-extrabold uppercase tracking-wider text-[10px] text-gray-500">Amount</th>
                <th className="text-left px-6 py-3 font-extrabold uppercase tracking-wider text-[10px] text-gray-500">Frequency</th>
                <th className="text-left px-6 py-3 font-extrabold uppercase tracking-wider text-[10px] text-gray-500">Note</th>
              </tr>
            </thead>
            <tbody>
              {feeData[activeSection].rows.map((row, idx) => (
                <tr key={idx} className={`border-b border-gray-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                  <td className="px-6 py-4 font-semibold text-brand-charcoal">{row.head}</td>
                  <td className={`px-6 py-4 font-extrabold text-${theme.primary}`}>{row.amount}</td>
                  <td className="px-6 py-4 text-brand-muted">{row.period}</td>
                  <td className="px-6 py-4 text-brand-muted font-inter italic text-[10px]">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: IndianRupee, title: 'Payment Modes', desc: 'UPI, NEFT, RTGS, Demand Draft, Credit / Debit Cards accepted.' },
          { icon: CheckCircle2, title: 'Quarterly Option', desc: 'Tuition fee may be paid quarterly (April, July, October, January).' },
          { icon: Gift, title: 'Sibling Concession', desc: '10% concession on tuition fee for the second child enrolled in same campus.' },
        ].map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 space-y-2">
            <div className={`w-9 h-9 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center`}>
              <Icon className="w-4.5 h-4.5" />
            </div>
            <h4 className="font-bold text-sm text-brand-charcoal">{title}</h4>
            <p className="text-[11px] text-brand-muted font-inter leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Tab 3: Scholarships ──────────────────────────────────────────────────────
function Scholarships({ theme, schoolName }) {
  const [formData, setFormData] = useState({ name: '', grade: 'Class VI', category: 'Merit-Based Academic', mobile: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', grade: 'Class VI', category: 'Merit-Based Academic', mobile: '' }) }, 5000)
  }

  const scholarships = [
    {
      icon: Star,
      title: 'Merit-Based Academic Scholarship',
      badge: 'Top Performers',
      eligibility: 'Students scoring 90%+ in previous class annual examination.',
      benefit: 'Up to 25% concession on annual tuition fee for the awarded session.',
      details: [
        'Applicable from Class II onwards (not for new Class I admissions).',
        'Previous year report card with 90%+ aggregate required.',
        'Reviewed annually — maintained only if performance is sustained.',
        'Cannot be combined with sibling concession simultaneously.'
      ]
    },
    {
      icon: Award,
      title: 'Sports Excellence Scholarship',
      badge: 'Athletic Achievers',
      eligibility: 'State or National level sports representation certificate required.',
      benefit: 'Up to 20% concession on annual tuition fee.',
      details: [
        'Applicable for students representing state/national in CBSE/SGF recognized sports.',
        'Certificate from competent authority (Sports Authority of India or equivalent) required.',
        'Reviewed each academic year based on continued sports participation.',
        'Covers major sports: Cricket, Football, Athletics, Swimming, Badminton, Chess.'
      ]
    },
    {
      icon: BookOpen,
      title: 'Need-Based Financial Aid',
      badge: 'Economic Support',
      eligibility: 'Family annual income below ₹3 lakh per annum with strong academics.',
      benefit: 'Up to 30% concession on tuition fee; case-by-case evaluation.',
      details: [
        'Income certificate from competent authority mandatory.',
        'Student must maintain 75%+ attendance and 70%+ academic score.',
        'Application reviewed by the School Finance & Welfare Committee.',
        'Limited seats available per academic session — apply early.'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Sibling Concession Programme',
      badge: 'Family Benefit',
      eligibility: 'Second and subsequent children from the same family enrolled in DLF school.',
      benefit: '10% concession on tuition fee for the second child enrolled.',
      details: [
        'Applicable automatically upon verification of sibling enrollment.',
        'First child must be an active student in the same campus.',
        'Applicable on tuition fee only (not on other charges).',
        'No separate application required — verified at admission.'
      ]
    }
  ]

  return (
    <div className="space-y-10">
      {/* Scholarship Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scholarships.map((s, idx) => {
          const Icon = s.icon
          return (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden relative group">
              <div className={`absolute top-0 left-0 w-full h-1 bg-${theme.primary}`} />
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-${theme.primary}/8 text-${theme.primary}`}>
                    {s.badge}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-brand-charcoal leading-tight">{s.title}</h3>
                  <p className={`text-[10px] font-bold text-${theme.vibrant} mt-1 uppercase tracking-wider`}>{s.benefit}</p>
                </div>
                <p className="text-[11px] text-brand-muted font-inter leading-relaxed border-t border-gray-50 pt-3">
                  <strong className="text-brand-charcoal">Eligibility:</strong> {s.eligibility}
                </p>
                <ul className="space-y-1.5">
                  {s.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className={`w-3.5 h-3.5 text-${theme.accent} shrink-0 mt-0.5`} />
                      <span className="text-[11px] text-brand-charcoal font-inter font-medium leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      {/* Scholarship Application Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className={`bg-${theme.primary}/5 border border-${theme.primary}/10 rounded-2xl p-8 space-y-4`}>
          <Award className={`w-8 h-8 text-${theme.accent}`} />
          <h3 className={`font-serif text-xl font-bold text-${theme.primary}`}>How to Apply for a Scholarship</h3>
          <ol className="space-y-3 text-xs font-inter">
            {[
              'Submit the scholarship enquiry form (right) with student details.',
              'Attach scanned copy of relevant eligibility documents (mark sheet / certificate).',
              'Our Admissions team will evaluate and revert within 3–5 working days.',
              'Approval communicated via official letter and fee adjustment made at the time of admission.',
              "Scholarships are awarded at principal's discretion and subject to seat availability."
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className={`w-6 h-6 rounded-full bg-${theme.primary} text-white text-[10px] font-extrabold flex items-center justify-center shrink-0`}>{i + 1}</span>
                <span className="text-brand-charcoal font-medium leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-8">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <div className={`w-12 h-12 bg-${theme.primary}/10 text-${theme.primary} rounded-full flex items-center justify-center mx-auto`}>
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>Application Received!</h4>
              <p className="text-xs text-brand-muted font-inter max-w-xs mx-auto">
                Our team will review your scholarship application and contact you within 3–5 working days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className={`font-serif text-lg font-bold text-${theme.primary}`}>Scholarship Enquiry</h3>
                <p className="text-[10px] text-brand-muted font-inter">Submit your interest and we'll guide you through the process.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 col-span-2">
                  <label className="text-[9px] font-bold uppercase tracking-wider text-brand-charcoal">Student Name*</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name" className={`w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-${theme.primary} font-inter`} />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-bold uppercase tracking-wider text-brand-charcoal">Class Applying For*</label>
                  <select value={formData.grade} onChange={e => setFormData({ ...formData, grade: e.target.value })}
                    className={`w-full bg-white border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-${theme.primary} font-inter`}>
                    {['Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII'].map(g => <option key={g}>{g}</option>)}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-bold uppercase tracking-wider text-brand-charcoal">Scholarship Category*</label>
                  <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}
                    className={`w-full bg-white border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-${theme.primary} font-inter`}>
                    <option>Merit-Based Academic</option>
                    <option>Sports Excellence</option>
                    <option>Need-Based Financial Aid</option>
                    <option>Sibling Concession</option>
                  </select>
                </div>
                <div className="space-y-1 col-span-2">
                  <label className="text-[9px] font-bold uppercase tracking-wider text-brand-charcoal">Parent Mobile*</label>
                  <input type="tel" required value={formData.mobile} onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="+91 XXXXX XXXXX" className={`w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-${theme.primary} font-inter`} />
                </div>
              </div>
              <button type="submit" className={`w-full bg-${theme.primary} hover:bg-${theme.vibrant} text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer`}>
                Submit Scholarship Enquiry <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Main Admissions Page ─────────────────────────────────────────────────────
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
    { id: 'procedure', label: 'Admission Procedure & Guidelines', Icon: ClipboardList },
    { id: 'fee-structure', label: 'Fee Structure', Icon: IndianRupee },
    { id: 'scholarships', label: 'Scholarships', Icon: Award },
  ]

  const activeTab = searchParams.get('tab') || 'procedure'
  const setTab = (id) => setSearchParams({ tab: id })

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-10">

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Enrolment</span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary}`}>Admissions 2025–26</h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter font-medium">
              Simple, structured, transparent, and completely digital admission process at {currentSchool?.name}.
            </p>
          </div>
          <Link
            to={`/school/${activeBranch}`}
            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:opacity-80 transition-opacity shrink-0`}
          >
            <ArrowLeft className="w-4 h-4" /> Back to School Home
          </Link>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          {tabs.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex-1 justify-center sm:justify-start ${
                activeTab === id
                  ? `bg-${theme.primary} text-white shadow-lg`
                  : `bg-white text-brand-charcoal border border-gray-100 hover:border-${theme.primary}/20 hover:bg-gray-50`
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'procedure' && <AdmissionProcedure theme={theme} schoolName={currentSchool?.name} />}
          {activeTab === 'fee-structure' && <FeeStructure theme={theme} />}
          {activeTab === 'scholarships' && <Scholarships theme={theme} schoolName={currentSchool?.name} />}
        </div>

        {/* Bottom CTA Strip */}
        <div className={`bg-${theme.primary} rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6`}>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Ready to Begin Your Child's Journey?</h3>
            <p className="text-white/70 text-xs font-inter mt-1">Our admissions team is available Mon–Sat, 9 AM–5 PM to assist you.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="tel:+919871034444" className="bg-white text-brand-greenDeep font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-brand-gold hover:text-white transition-all duration-300 text-center">
              Call: +91-9871034444
            </a>
            <button onClick={() => setTab('procedure')} className="bg-brand-gold text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-brand-goldlight transition-all duration-300 cursor-pointer">
              View Process →
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
