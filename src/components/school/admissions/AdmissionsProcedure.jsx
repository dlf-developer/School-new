import React from 'react'
import {
  FileText, ClipboardList, CheckCircle2, ChevronRight,
  Download, GraduationCap, Calendar, Users, Award
} from 'lucide-react'
import { dlpsAdmissionDocuments } from '../../../data/schools/dlps/admissionsData'
import { dlwsAdmissionDocuments } from '../../../data/schools/dlws/admissionsData'

export default function AdmissionsProcedure({ theme, currentSchool }) {
  const isDLWS = currentSchool?.id === 'dlf-greater-noida'

  const flowchartSteps = [
    {
      num: '01',
      title: 'Online Enquiry & Registration',
      desc: 'Fill out the initial dynamic enquiry form to generate your unique Enquiry ID and mobile login credentials.',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-800',
      gradient: 'from-amber-500 to-amber-700',
      icon: FileText,
    },
    {
      num: '02',
      title: 'Online Registration Form',
      desc: 'Log in with your Enquiry ID to complete the formal registration form and upload mandatory student records.',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-800',
      gradient: 'from-emerald-600 to-teal-700',
      icon: ClipboardList,
    },
    {
      num: '03',
      title: 'Document Verification',
      desc: 'Upload child birth certificate, passport photos, previous school report cards & transfer certificate.',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      text: 'text-sky-800',
      gradient: 'from-sky-600 to-blue-700',
      icon: CheckCircle2,
    },
    {
      num: '04',
      title: 'Date Intimation',
      desc: 'Receive formal email and SMS confirmation with scheduled date and time slot for parent & child interaction.',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-800',
      gradient: 'from-indigo-600 to-purple-700',
      icon: Calendar,
    },
    {
      num: '05',
      title: 'Interaction / Assessment',
      desc: isDLWS
        ? 'Informal child interaction (Foundation to Jr. KG) or competency assessment (Sr. KG to Class XII).'
        : 'Foundational child interaction (Pre-Primary) or competency evaluation (Classes SKG–XII).',
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      text: 'text-rose-800',
      gradient: 'from-rose-600 to-pink-700',
      icon: GraduationCap,
    },
    {
      num: '06',
      title: 'Seat Allotment',
      desc: 'Receive formal admission offer; submit required verification documents & fee to confirm seat.',
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-800',
      gradient: 'from-teal-600 to-green-700',
      icon: CheckCircle2,
    },
  ]

  const importantDocuments = isDLWS ? dlwsAdmissionDocuments : dlpsAdmissionDocuments

  return (
    <div className="space-y-10">
      {/* Colour Infographic Flowchart */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-8">
        <div>
          <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>
            Infographic Flowchart
          </span>
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
                    <span
                      className={`text-xs font-extrabold text-white px-3.5 py-1 rounded-full bg-gradient-to-r ${step.gradient} shadow-sm`}
                    >
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
          <span className={`text-xs uppercase font-extrabold tracking-widest text-${theme.vibrant}`}>
            Official Resources
          </span>
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
              className={`group bg-gray-50/70 hover:bg-white rounded-2xl border border-gray-150 hover:border-brand-gold/50 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5`}
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 shadow-xs">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4
                    className={`font-serif text-base font-bold text-brand-charcoal group-hover:text-${theme.primary} transition-colors`}
                  >
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
