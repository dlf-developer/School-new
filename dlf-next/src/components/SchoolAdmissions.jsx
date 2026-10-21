import React from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import { ArrowLeft, FileText, IndianRupee, ClipboardList, Award } from 'lucide-react'
import AdmissionsEnquiryForm from './school/admissions/AdmissionsEnquiryForm'
import AdmissionsFeeStructure from './school/admissions/AdmissionsFeeStructure'
import AdmissionsProcedure from './school/admissions/AdmissionsProcedure'
import AdmissionsScholarships from './school/admissions/AdmissionsScholarships'

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
    accentHex: '#C59B27',
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
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
              Enrolment
            </span>
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
        {activeTab === 'enquiry' && <AdmissionsEnquiryForm theme={theme} currentSchool={currentSchool} />}
        {activeTab === 'fee-structure' && (
          <AdmissionsFeeStructure
            theme={theme}
            currentSchool={currentSchool}
            onGoToEnquiry={() => setTab('enquiry')}
          />
        )}
        {activeTab === 'procedure' && <AdmissionsProcedure theme={theme} currentSchool={currentSchool} />}
        {activeTab === 'scholarships' && <AdmissionsScholarships theme={theme} currentSchool={currentSchool} />}
      </div>
    </div>
  )
}
