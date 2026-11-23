import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import { ArrowLeft } from 'lucide-react'
import CounsellingUnderProgress from './school/counselling/CounsellingUnderProgress'
import CounsellingPillars from './school/counselling/CounsellingPillars'
import CounsellingChildProtection from './school/counselling/CounsellingChildProtection'
import CounsellingConsultationForm from './school/counselling/CounsellingConsultationForm'
import CounsellingLightbox from './school/counselling/CounsellingLightbox'

export default function SchoolCounselling() {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const currentSchool = schoolId ? schools[schoolId] : null

  const theme = currentSchool?.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27',
  }

  // Set to true to reveal all sections in the future
  const SHOW_FULL_CONTENT = false
  const [selectedImage, setSelectedImage] = useState(null)

  if (!SHOW_FULL_CONTENT) {
    return <CounsellingUnderProgress schoolId={schoolId} />
  }

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
              Support &amp; Guidance
            </span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary}`}>
              Counselling, Career &amp; Wellness
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter font-medium">
              Providing emotional security, career navigation, and comprehensive healthcare systems across DLF Group
              Schools.
            </p>
          </div>
          <Link
            to={schoolId ? `/school/${schoolId}` : '/'}
            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:opacity-80 transition-opacity shrink-0`}
          >
            <ArrowLeft className="w-4 h-4" /> {schoolId ? 'Back to School Home' : 'Back to Home'}
          </Link>
        </div>

        {/* 9 Pillars and Media Highlights */}
        <CounsellingPillars theme={theme} onSelectImage={setSelectedImage} />

        {/* Child Protection Policy Accordion */}
        <CounsellingChildProtection theme={theme} />

        {/* Lower Consultation Form & Quote */}
        <CounsellingConsultationForm theme={theme} currentSchool={currentSchool} />
      </div>

      {/* Media Lightbox */}
      <CounsellingLightbox selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  )
}
