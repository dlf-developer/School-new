import React, { useState, useEffect } from 'react'
import { Link, useParams, useSearchParams, useLocation } from 'react-router-dom'
import { ExternalLink, ArrowLeft } from 'lucide-react'

// ── DLPS Useful Links ────────────────────────────────────────────────────────

const dlpsLinks = [
  {
    label: 'Edunext Parent & Student Portal',
    desc: 'Access attendance, report cards, fee receipts, circulars, and student-teacher communication.',
    url: 'https://dlps.edunexttechnologies.com/',
    image: '/images/usefullinks/erp-parent-portal-login.jpg',
    favicon: 'https://dlps.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'E',
    fallbackBg: '#e65100',
  },
  {
    label: 'Office 365 Email Login',
    desc: 'School email, Outlook inbox, OneDrive cloud storage, and Microsoft 365 productivity suite.',
    url: 'https://portal.office.com',
    image: '/images/usefullinks/office.jpg',
    favicon: 'https://res.cdn.office.net/officehub/images/content/images/favicon_msa-64_2x.ico',
    fallbackInitial: 'O',
    fallbackBg: '#0078d4',
  },
  {
    label: 'Detailed Assessment (DA) Login',
    desc: 'Personalised assessment platform tracking student learning progress and diagnostic gaps.',
    url: 'https://student.detailedassessment.com/',
    image: '/images/usefullinks/DAL.jpg',
    favicon: 'https://student.detailedassessment.com/favicon.ico',
    fallbackInitial: 'D',
    fallbackBg: '#00796b',
  },
  {
    label: 'Microsoft Teams Login',
    desc: 'Virtual classrooms, live lectures, assignments, and school collaboration channels.',
    url: 'https://Teams.microsoft.com',
    image: '/images/usefullinks/team.jpg',
    favicon: 'https://statics.teams.cdn.office.net/hashedassets-launcher/icons/favicon-32x32.png',
    fallbackInitial: 'T',
    fallbackBg: '#464eb8',
  },
  {
    label: 'Mindspark Learning Portal',
    desc: 'Adaptive AI-driven Maths and English learning program for skill practice and concept mastery.',
    url: 'https://learn.mindspark.in/Student/onboard/login/en',
    image: '/images/usefullinks/mindspark.jpg',
    favicon: 'https://learn.mindspark.in/favicon.ico',
    fallbackInitial: 'M',
    fallbackBg: '#f57f17',
  },
  {
    label: 'First in Math Portal',
    desc: 'Game-based mathematics skill building, speed practice, and numerical fluency.',
    url: 'https://www.firstinmath.in/',
    image: '/images/usefullinks/FIM.jpg',
    favicon: 'https://www.firstinmath.in/favicon.ico',
    fallbackInitial: 'F',
    fallbackBg: '#c62828',
  },
  {
    label: 'KidsLoop Early Learning Hub',
    desc: 'Interactive digital curriculum, multimedia lessons, and foundational childhood activities.',
    url: 'https://auth.kidsloop.live/?continue=https%3A%2F%2Fhub.kidsloop.live%2F%23%2F',
    image: '/images/usefullinks/kidsloop.jpg',
    favicon: 'https://hub.kidsloop.live/favicon.ico',
    fallbackInitial: 'K',
    fallbackBg: '#8e24aa',
  },
  {
    label: 'Direct Online Fee Payment',
    desc: 'Hassle-free direct online portal for quarterly DLPS school fee payments without login.',
    url: 'https://dlps.edunexttechnologies.com/DirectStudentOnlineFeeInstallmentwise',
    image: '/images/usefullinks/direct-fee-payment.jpg',
    favicon: 'https://dlps.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'F',
    fallbackBg: '#2e7d32',
  },
  {
    label: 'School Circulars & Notifications',
    desc: 'Official notices, exam date sheets, and activity circulars from the school leadership.',
    url: 'https://forms.edunexttechnologies.com/website-service/dlps/circular/',
    image: '/images/usefullinks/circular.jpg',
    favicon: 'https://forms.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'C',
    fallbackBg: '#0288d1',
  },
  {
    label: 'TC (Transfer Certificate)',
    desc: 'Online application and status verification for student Transfer Certificates.',
    url: 'https://forms.edunexttechnologies.com/website-service/dlps/transfer-certificate/',
    image: '/images/usefullinks/tc.jpg',
    favicon: 'https://forms.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'T',
    fallbackBg: '#7b1fa2',
  },
  {
    label: 'Edunext User Manual & Help',
    desc: 'Step-by-step documentation, portal guidelines, and user manuals for parents.',
    url: 'https://edunexttechnologies.com/portal-help.php',
    image: '/images/usefullinks/user-manual.jpg',
    favicon: 'https://edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'U',
    fallbackBg: '#455a64',
  },
  {
    label: 'School Calendar',
    desc: 'Official academic calendar with key term dates, examination weeks, and school holidays.',
    url: 'https://forms.edunexttechnologies.com/website-service/dlps/calendar/',
    image: '/images/usefullinks/School-Calendar.png',
    favicon: 'https://forms.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'C',
    fallbackBg: '#00897b',
  },
]

// ── DLWS Useful Links ────────────────────────────────────────────────────────
const dlwsLinks = [
  {
    label: 'Edunext Parent & Student Login',
    desc: 'Student and parent login portal for attendance, fee payment, report cards, and circulars.',
    url: 'https://dlws.edunexttechnologies.com/Index',
    image: '/images/usefullinks/erp-parent-portal-login.jpg',
    favicon: 'https://dlws.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'E',
    fallbackBg: '#e65100',
  },
  {
    label: 'Office 365 Email Login',
    desc: 'School email, OneDrive, Outlook, and Microsoft 365 productivity suite.',
    url: 'https://portal.office.com',
    image: '/images/usefullinks/office.jpg',
    favicon: 'https://res.cdn.office.net/officehub/images/content/images/favicon_msa-64_2x.ico',
    fallbackInitial: 'O',
    fallbackBg: '#0078d4',
  },
  {
    label: 'Microsoft Teams Login',
    desc: 'Virtual classrooms, live lectures, assignments, and school team collaboration.',
    url: 'https://Teams.microsoft.com',
    image: '/images/usefullinks/team.jpg',
    favicon: 'https://statics.teams.cdn.office.net/hashedassets-launcher/icons/favicon-32x32.png',
    fallbackInitial: 'T',
    fallbackBg: '#464eb8',
  },
  {
    label: 'Detailed Assessment (DA) Login',
    desc: 'Personalised assessment platform tracking student learning progress and diagnostic gaps.',
    url: 'https://student.detailedassessment.com/',
    image: '/images/usefullinks/DAL.jpg',
    favicon: 'https://student.detailedassessment.com/favicon.ico',
    fallbackInitial: 'D',
    fallbackBg: '#00796b',
  },
  {
    label: 'Mindspark Learning Portal',
    desc: 'Adaptive AI-driven Maths and English learning program for skill practice and mastery.',
    url: 'https://learn.mindspark.in/Student/onboard/login/en',
    image: '/images/usefullinks/mindspark.jpg',
    favicon: 'https://learn.mindspark.in/favicon.ico',
    fallbackInitial: 'M',
    fallbackBg: '#f57f17',
  },
  {
    label: 'First in Math Portal',
    desc: 'Game-based mathematics skill building, speed practice, and numerical fluency.',
    url: 'https://www.firstinmath.in/',
    image: '/images/usefullinks/FIM.jpg',
    favicon: 'https://www.firstinmath.in/favicon.ico',
    fallbackInitial: 'F',
    fallbackBg: '#c62828',
  },
  {
    label: 'Direct Fee Payment',
    desc: 'Hassle-free direct online portal for quarterly DLWS school fee payments.',
    url: 'https://dlws.edunexttechnologies.com/DirectStudentOnlineFeeInstallmentwise',
    image: '/images/usefullinks/direct-fee-payment.jpg',
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
    image: '/images/usefullinks/tc.jpg',
    favicon: 'https://forms.edunexttechnologies.com/favicon.ico',
    fallbackInitial: 'T',
    fallbackBg: '#7b1fa2',
  },
  {
    label: 'School Circulars & Notices',
    desc: 'Official announcements, academic schedules, and coordinator circulars.',
    url: 'https://forms.edunexttechnologies.com/website-service/dlws/circular/',
    image: '/images/usefullinks/circular.jpg',
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
    image: '/images/usefullinks/user-manual.jpg',
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
              className="group relative flex flex-col justify-between bg-white rounded-2xl border border-gray-150 p-5 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Actual Website Background Image Effect */}
              {link.image && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-0">
                  <img
                    src={link.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-top opacity-[0.08] group-hover:opacity-[0.20] group-hover:scale-105 transition-all duration-500 blur-[0.3px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/60" />
                </div>
              )}

              <div className="space-y-4 relative z-10">
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
                className="relative z-10 text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 pt-4 mt-4 border-t border-gray-100 transition-all group-hover:gap-2.5"
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
