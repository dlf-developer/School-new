import React, { useState, useEffect } from 'react'
import { Link, useParams, useSearchParams, useLocation } from 'react-router-dom'
import { ExternalLink, ArrowLeft } from 'lucide-react'

// ── DLPS Useful Links ────────────────────────────────────────────────────────

const dlpsLinks = [
  {
    label: 'Edunext Parent & Student ERP',
    desc: 'Access attendance, fee payment, report cards, assignment submissions, and student circulars.',
    url: 'https://dlps.edunexttechnologies.com/',
    favicon: 'https://dlps.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'E',
    fallbackBg: '#e65100',
  },
  {
    label: 'Online Admission Registration',
    desc: 'Digital registration form for new student enrolments at DLF Public School, Sahibabad.',
    url: 'https://forms.edunexttechnologies.com/forms/dlps/registration/',
    favicon: 'https://forms.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'R',
    fallbackBg: '#d32f2f',
  },
  {
    label: 'Direct Online Fee Payment',
    desc: 'Hassle-free direct online portal for quarterly school fee payments.',
    url: 'https://dlps.edunexttechnologies.com/DirectStudentOnlineFeeInstallmentwise',
    favicon: 'https://dlps.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'F',
    fallbackBg: '#2e7d32',
  },
  {
    label: 'TC (Transfer Certificate)',
    desc: 'Online application and status verification for student Transfer Certificates.',
    url: 'https://forms.edunexttechnologies.com/website-service/dlps/transfer-certificate/',
    favicon: 'https://forms.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'T',
    fallbackBg: '#7b1fa2',
  },
  {
    label: 'School Circulars & Notifications',
    desc: 'Official notices, exam date sheets, and activity circulars from the school leadership.',
    url: 'https://forms.edunexttechnologies.com/website-service/dlps/circular/',
    favicon: 'https://forms.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'C',
    fallbackBg: '#0288d1',
  },
  {
    label: 'CBSE Academic Website',
    desc: 'Official CBSE curriculum portal — syllabus guidelines, sample papers, and textbook resources.',
    url: 'https://cbseacademic.nic.in/',
    favicon: 'https://cbseacademic.nic.in/favicon.ico',
    fallbackInitial: 'C',
    fallbackBg: '#1a237e',
  },
  {
    label: 'CBSE Main Portal',
    desc: 'Central Board of Secondary Education — board results, affiliations, and national circulars.',
    url: 'https://www.cbse.gov.in/',
    favicon: 'https://www.cbse.gov.in/favicon.ico',
    fallbackInitial: 'C',
    fallbackBg: '#b71c1c',
  },
  {
    label: 'Diksha Portal',
    desc: 'National platform for digital education content, interactive e-books, and teacher resources.',
    url: 'https://diksha.gov.in/',
    favicon: 'https://diksha.gov.in/favicon.ico',
    fallbackInitial: 'D',
    fallbackBg: '#01579b',
  },
  {
    label: 'National Digital Library',
    desc: 'IIT Kharagpur digital library offering millions of academic textbooks and journals.',
    url: 'https://ndl.iitkgp.ac.in/',
    favicon: 'https://ndl.iitkgp.ac.in/favicon.ico',
    fallbackInitial: 'N',
    fallbackBg: '#2e7d32',
  },
  {
    label: 'NCERT Textbooks & Portal',
    desc: 'Free downloadable NCERT textbooks and curriculum guidelines for Classes I–XII.',
    url: 'https://ncert.nic.in/',
    favicon: 'https://ncert.nic.in/favicon.ico',
    fallbackInitial: 'N',
    fallbackBg: '#4a148c',
  },
  {
    label: 'e-Pathshala',
    desc: 'Ministry of Education digital repo for audio, video, e-books, and learning apps.',
    url: 'https://epathshala.nic.in/',
    favicon: 'https://epathshala.nic.in/favicon.ico',
    fallbackInitial: 'e',
    fallbackBg: '#00695c',
  },
  {
    label: 'Vidyarthi Vigyan Manthan',
    desc: 'National talent search examination for scientific temperament and STEM excellence.',
    url: 'https://vvm.org.in/',
    favicon: 'https://vvm.org.in/favicon.ico',
    fallbackInitial: 'V',
    fallbackBg: '#37474f',
  },
]

// ── DLWS Useful Links ────────────────────────────────────────────────────────
const dlwsLinks = [
  {
    label: 'Edunext Parent & Student Login',
    desc: 'Student and parent login portal for attendance, fee payment, report cards, and circulars.',
    url: 'https://dlws.edunexttechnologies.com/Index',
    favicon: 'https://dlws.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'E',
    fallbackBg: '#e65100',
  },
  {
    label: 'Office 365 Email Login',
    desc: 'School email, OneDrive, Outlook, and Microsoft 365 productivity suite.',
    url: 'https://portal.office.com',
    favicon: 'https://res.cdn.office.net/officehub/images/content/images/favicon_msa-64_2x.ico',
    fallbackInitial: 'O',
    fallbackBg: '#0078d4',
  },
  {
    label: 'Microsoft Teams Login',
    desc: 'Virtual classrooms, live lectures, assignments, and school team collaboration.',
    url: 'https://Teams.microsoft.com',
    favicon: 'https://statics.teams.cdn.office.net/hashedassets-launcher/icons/favicon-32x32.png',
    fallbackInitial: 'T',
    fallbackBg: '#464eb8',
  },
  {
    label: 'Detailed Assessment (DA) Login',
    desc: 'Personalised assessment platform tracking student learning progress and diagnostic gaps.',
    url: 'https://student.detailedassessment.com/',
    favicon: 'https://student.detailedassessment.com/favicon.ico',
    fallbackInitial: 'D',
    fallbackBg: '#00796b',
  },
  {
    label: 'Mindspark Learning Portal',
    desc: 'Adaptive AI-driven Maths and English learning program for skill practice and mastery.',
    url: 'https://learn.mindspark.in/Student/onboard/login/en',
    favicon: 'https://learn.mindspark.in/favicon.ico',
    fallbackInitial: 'M',
    fallbackBg: '#f57f17',
  },
  {
    label: 'First in Math Portal',
    desc: 'Game-based mathematics skill building, speed practice, and numerical fluency.',
    url: 'https://www.firstinmath.in/',
    favicon: 'https://www.firstinmath.in/favicon.ico',
    fallbackInitial: 'F',
    fallbackBg: '#c62828',
  },
  {
    label: 'Direct Fee Payment',
    desc: 'Hassle-free direct online portal for quarterly DLWS school fee payments.',
    url: 'https://dlws.edunexttechnologies.com/DirectStudentOnlineFeeInstallmentwise',
    favicon: 'https://dlws.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'F',
    fallbackBg: '#2e7d32',
  },
  {
    label: 'Online Admission Registration',
    desc: 'Digital registration form for new student enrolments at DLF World School, Greater Noida.',
    url: 'https://forms.edunexttechnologies.com/forms/dlws/registration/',
    favicon: 'https://forms.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'R',
    fallbackBg: '#d32f2f',
  },
  {
    label: 'TC (Transfer Certificate)',
    desc: 'Online application and verification status for student Transfer Certificates.',
    url: 'https://forms.edunexttechnologies.com/website-service/dlws/transfer-certificate/',
    favicon: 'https://forms.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'T',
    fallbackBg: '#7b1fa2',
  },
  {
    label: 'School Circulars & Notices',
    desc: 'Official announcements, academic schedules, and coordinator circulars.',
    url: 'https://forms.edunexttechnologies.com/website-service/dlws/circular/',
    favicon: 'https://forms.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'C',
    fallbackBg: '#0288d1',
  },
  {
    label: 'News & Achievements',
    desc: 'Latest campus news, student awards, sports highlights, and event updates.',
    url: 'https://forms.edunexttechnologies.com/website-service/dpsgbn/news/',
    favicon: 'https://forms.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'N',
    fallbackBg: '#f57c00',
  },
  {
    label: 'Edunext User Manual & Help',
    desc: 'Step-by-step documentation and user guides for navigating the parent and student portal.',
    url: 'https://edunexttechnologies.com/portal-help.php',
    favicon: 'https://edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'U',
    fallbackBg: '#455a64',
  },
  {
    label: 'Bus Tracking App (Android)',
    desc: 'Download the Safetrax live school bus tracking app on Android.',
    url: 'https://play.google.com/store/apps/details?id=in.mtap.iincube.safetrax.parent',
    favicon: 'https://www.gstatic.com/android/market_images/web/favicon_v2.ico',
    fallbackInitial: 'A',
    fallbackBg: '#388e3c',
  },
  {
    label: 'Bus Tracking App (iOS)',
    desc: 'Download the Safebus live school bus tracking app on iPhone / iPad.',
    url: 'https://apps.apple.com/in/app/safebus-parents-bus-tracking/id1525988997',
    favicon: 'https://apps.apple.com/favicon.ico',
    fallbackInitial: 'i',
    fallbackBg: '#37474f',
  },
]

// ── Favicon component with fallback initial ───────────────────────────────────
function FaviconIcon({ src, initial, bg }) {
  const [failed, setFailed] = React.useState(false)
  if (failed) {
    return (
      <span
        className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-base shrink-0 shadow-sm"
        style={{ background: bg }}
      >
        {initial}
      </span>
    )
  }
  return (
    <img
      src={src}
      alt=""
      onError={() => setFailed(true)}
      className="w-10 h-10 rounded-xl object-contain bg-white border border-gray-100 p-1.5 shrink-0 shadow-sm"
    />
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function UsefulLinks() {
  const { schoolId } = useParams()
  const [searchParams] = useSearchParams()
  const location = useLocation()

  const initialSchool = schoolId || searchParams.get('school') || (location.pathname.includes('greater-noida') ? 'dlf-greater-noida' : 'dlf-sahibabad')
  const defaultTab = initialSchool === 'dlf-greater-noida' ? 'dlws' : 'dlps'

  const [activeTab, setActiveTab] = useState(defaultTab)

  useEffect(() => {
    if (initialSchool === 'dlf-greater-noida') {
      setActiveTab('dlws')
    } else if (initialSchool === 'dlf-sahibabad') {
      setActiveTab('dlps')
    }
  }, [initialSchool])

  const links = activeTab === 'dlps' ? dlpsLinks : dlwsLinks
  const tabTheme = activeTab === 'dlps'
    ? { primary: '#1a5c38', vibrant: '#2e9954', label: 'DLF Public School', sub: 'Sahibabad · Ghaziabad' }
    : { primary: '#3b2f7a', vibrant: '#6c57d4', label: 'DLF World School', sub: 'Greater Noida' }

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-10">

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-masterVibrant">Resource Index</span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-masterDeep">Useful Links</h1>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter">
              Direct access to all official portals, learning platforms, fee systems, and compliance links for both campuses.
            </p>
          </div>
          <Link
            to="/"
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-masterDeep hover:opacity-80 transition-opacity shrink-0"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Darbari Lal Foundation
          </Link>
        </div>

        {/* School Tab Switcher */}
        <div className="flex gap-3 flex-wrap">
          {[
            { id: 'dlps', label: 'DLF Public School', sub: 'Sahibabad', color: 'brand-greenDeep', dot: 'bg-brand-greenVibrant' },
            { id: 'dlws', label: 'DLF World School', sub: 'Greater Noida', color: 'brand-purpleDeep', dot: 'bg-brand-purpleVibrant' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                activeTab === tab.id
                  ? `bg-${tab.color} text-white border-${tab.color} shadow-md`
                  : 'bg-white text-brand-charcoal border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${tab.dot} ${activeTab !== tab.id ? 'opacity-50' : ''}`} />
              <span>{tab.label}</span>
              <span className={`text-[9px] font-normal ${activeTab === tab.id ? 'text-white/70' : 'text-brand-muted'}`}>
                {tab.sub}
              </span>
            </button>
          ))}
        </div>

        {/* Active school banner */}
        <div
          className="flex items-center justify-between gap-4 px-6 py-4 rounded-2xl"
          style={{ background: `${tabTheme.primary}12`, borderLeft: `4px solid ${tabTheme.primary}` }}
        >
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: tabTheme.primary }}>
              {tabTheme.label} — {tabTheme.sub} Useful Links
            </p>
            <p className="text-xs text-brand-muted font-inter mt-0.5">
              Showing {links.length} verified digital portals and external learning tools.
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Favicon + External Icon */}
                <div className="flex items-start justify-between gap-3">
                  <FaviconIcon src={link.favicon} initial={link.fallbackInitial} bg={link.fallbackBg} />
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-brand-gold transition-colors shrink-0 mt-1" />
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-xs sm:text-sm font-extrabold text-brand-charcoal group-hover:text-brand-masterDeep transition-colors leading-snug">
                    {link.label}
                  </h3>
                  <p className="text-[11px] text-brand-muted font-inter leading-relaxed">
                    {link.desc}
                  </p>
                </div>
              </div>

              {/* Action link */}
              <div
                className="text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 pt-4 mt-4 border-t border-gray-50 transition-all group-hover:gap-2.5"
                style={{ color: tabTheme.primary }}
              >
                <span>Open Link</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}
