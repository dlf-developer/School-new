import React, { useState } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import {
  ArrowLeft, CheckCircle2, ClipboardList, IndianRupee, Award,
  ChevronRight, FileText, User, AlertCircle
} from 'lucide-react'

// ─── Tab 1: Admission Procedure & Guidelines ─────────────────────────────────
function AdmissionProcedure({ theme, schoolName }) {
  const [openStep, setOpenStep] = useState(null)

  const steps = [
    {
      number: '01',
      title: 'Online Enquiry Form',
      icon: FileText,
      summary: 'Complete the digital admission enquiry query with basic credentials and preferences on our digital portal.',
      details: [
        'Fill out the online enquiry form with parent and student details.',
        'Choose the preferred class/grade and campus location.',
        'Our admissions team will guide you on next steps within 24 working hours.'
      ]
    },
    {
      number: '02',
      title: 'Interaction & Orientation',
      icon: User,
      summary: 'Visit our premium campus with parents to interact with mentors and explore our learning methodologies.',
      details: [
        'Explore our state-of-the-art facilities, laboratories, and green spaces.',
        'Understand our unique educational philosophy and learning culture.',
        'Interact with our mentors and academic counselors.'
      ]
    },
    {
      number: '03',
      title: 'Document Verification & Fee Process',
      icon: ClipboardList,
      summary: 'Submit necessary transcripts, complete verification, and process secure fees digitally.',
      details: [
        'Provide birth certificate, residence proof, and previous academic transcripts.',
        'Complete verification with the administrative office.',
        'Confirm seat allotment through our secure digital payment portal.'
      ]
    }
  ]

  return (
    <div className="space-y-10">
      {/* Steps Accordion */}
      <div className="space-y-3">
        <h3 className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant} font-inter mb-4`}>Admission Process</h3>
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

      {/* Age Eligibility & Document Checklist */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-10 space-y-4">
        <h3 className={`font-serif text-lg font-bold text-${theme.primary}`}>Age Eligibility &amp; Criteria</h3>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
          Age eligibility criteria for admission to various classes (Pre-Nursery onwards) are defined in accordance with the CBSE Board guidelines and state educational norms. Please contact the Admissions Office for the specific age criteria and corresponding checklists applicable for the current academic session.
        </p>
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150/50 space-y-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-brand-charcoal">Documents Required at the Time of Admission:</h4>
          <ul className="space-y-2 text-xs text-brand-muted font-inter">
            <li className="flex items-center gap-2">
              <CheckCircle2 className={`w-3.5 h-3.5 text-${theme.accent} shrink-0`} />
              <span>Original Birth Certificate along with a self-attested photocopy.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className={`w-3.5 h-3.5 text-${theme.accent} shrink-0`} />
              <span>Proof of Residence (e.g. Aadhaar Card, Passport, or Utility Bill).</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className={`w-3.5 h-3.5 text-${theme.accent} shrink-0`} />
              <span>Previous school Report Card and Transfer Certificate (TC) (for Class II onwards).</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className={`w-3.5 h-3.5 text-${theme.accent} shrink-0`} />
              <span>Passport-size photographs of the student and parents/guardians.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// ─── Tab 2: Fee Structure ─────────────────────────────────────────────────────
function FeeStructure({ theme }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-8 sm:p-10 space-y-6">
        <h3 className={`font-serif text-2xl font-bold text-${theme.primary}`}>Fee Structure Guidelines</h3>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
          The fee structure at DLF Public School is structured transparently and reviewed annually in accordance with educational guidelines and board regulations.
        </p>
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150/50 space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-wider text-brand-charcoal">Fee Components Include:</h4>
          <ul className="space-y-2 text-xs text-brand-muted font-inter">
            <li className="flex items-center gap-2">
              <CheckCircle2 className={`w-3.5 h-3.5 text-${theme.accent} shrink-0`} />
              <span>Registration Fee (One-time, non-refundable)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className={`w-3.5 h-3.5 text-${theme.accent} shrink-0`} />
              <span>Admission Fee (One-time, payable at the time of admission)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className={`w-3.5 h-3.5 text-${theme.accent} shrink-0`} />
              <span>Quarterly Tuition Fee &amp; Session Charges</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className={`w-3.5 h-3.5 text-${theme.accent} shrink-0`} />
              <span>Development and Lab Charges (where applicable)</span>
            </li>
          </ul>
        </div>

        <div className="flex items-start gap-3 bg-brand-gold/5 border border-brand-gold/20 rounded-2xl p-4">
          <AlertCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
          <p className="text-[11px] text-brand-charcoal font-inter leading-relaxed">
            <strong>Contact Admissions Office:</strong> For verified current-session fee details, quarterly payment cycles, and applicable concessions, please contact the admissions department directly at <strong>+91-9871034444</strong> or visit the school campus office.
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Tab 3: Scholarships ──────────────────────────────────────────────────────
function Scholarships({ theme, schoolName }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-8 sm:p-10 space-y-6">
        <h3 className={`font-serif text-2xl font-bold text-${theme.primary}`}>Scholarships &amp; Concessions</h3>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
          DLF Public School values and recognizes exceptional achievements in academics and sports, and offers assistance to support families:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150/50 space-y-3">
            <h4 className={`font-serif text-sm font-bold text-${theme.primary}`}>Merit &amp; Sports Concessions</h4>
            <p className="text-xs text-brand-muted leading-relaxed font-inter">
              Concessions are considered for students with outstanding performance in academic examinations or recognized sports events at regional, state, or national levels.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150/50 space-y-3">
            <h4 className={`font-serif text-sm font-bold text-${theme.primary}`}>Sibling Concession</h4>
            <p className="text-xs text-brand-muted leading-relaxed font-inter">
              The school offers sibling concessions where multiple children from the same family are enrolled concurrently.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 bg-brand-gold/5 border border-brand-gold/20 rounded-2xl p-4">
          <AlertCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
          <p className="text-[11px] text-brand-charcoal font-inter leading-relaxed">
            For specific eligibility requirements, application processes, and necessary documents for the current academic session, please reach out to the Admissions Office or contact us at <strong>+91-9871034444</strong>.
          </p>
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
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary}`}>Admissions</h2>
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
