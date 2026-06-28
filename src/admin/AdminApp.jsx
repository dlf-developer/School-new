import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  School,
  Megaphone,
  BarChart3,
  Columns,
  MessageSquareQuote,
  Users2,
  Brain,
  Target,
  Handshake,
  Trophy,
  LogOut,
  ExternalLink,
  Lock,
  ChevronRight,
  Newspaper,
  Image as ImageIcon
} from 'lucide-react'

// Import all editors
import SchoolsEditor from './sections/SchoolsEditor'
import TickerEditor from './sections/TickerEditor'
import StatsEditor from './sections/StatsEditor'
import PillarsEditor from './sections/PillarsEditor'
import TestimonialsEditor from './sections/TestimonialsEditor'
import ManagementEditor from './sections/ManagementEditor'
import ThinkingSchoolEditor from './sections/ThinkingSchoolEditor'
import VisionMissionEditor from './sections/VisionMissionEditor'
import ParentPartnersEditor from './sections/ParentPartnersEditor'
import AwardsEditor from './sections/AwardsEditor'
import NewsEditor from './sections/NewsEditor'
import MediaLibraryEditor from './sections/MediaLibraryEditor'

export default function AdminApp() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('schools')

  // Auth Guard
  useEffect(() => {
    if (sessionStorage.getItem('dlf_admin_auth') !== 'true') {
      navigate('/admin/login')
    }
  }, [navigate])

  const handleLogout = () => {
    sessionStorage.removeItem('dlf_admin_auth')
    navigate('/admin/login')
  }

  const sections = [
    { id: 'schools', label: 'Branch Schools', icon: School, component: SchoolsEditor, category: 'Main Pages' },
    { id: 'thinkingSchool', label: 'Thinking School', icon: Brain, component: ThinkingSchoolEditor, category: 'Main Pages' },
    { id: 'visionMission', label: 'Vision & Mission', icon: Target, component: VisionMissionEditor, category: 'Main Pages' },
    { id: 'parentPartners', label: 'Parent Partners', icon: Handshake, component: ParentPartnersEditor, category: 'Main Pages' },
    { id: 'awards', label: 'Awards & Legacy', icon: Trophy, component: AwardsEditor, category: 'Main Pages' },
    { id: 'news', label: 'News & Press', icon: Newspaper, component: NewsEditor, category: 'Main Pages' },
    { id: 'management', label: 'Management Team', icon: Users2, component: ManagementEditor, category: 'Shared Sections' },
    { id: 'pillars', label: 'Pillars (Apart)', icon: Columns, component: PillarsEditor, category: 'Shared Sections' },
    { id: 'stats', label: 'Key Statistics', icon: BarChart3, component: StatsEditor, category: 'Shared Sections' },
    { id: 'ticker', label: 'Marquee Ticker', icon: Megaphone, component: TickerEditor, category: 'Shared Sections' },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquareQuote, component: TestimonialsEditor, category: 'Shared Sections' },
    { id: 'mediaLibrary', label: 'Media Library', icon: ImageIcon, component: MediaLibraryEditor, category: 'Assets' }
  ]

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || SchoolsEditor

  // Group sections by category
  const categories = ['Main Pages', 'Shared Sections', 'Assets']

  return (
    <div className="min-h-screen bg-[#07070c] text-white flex font-sans select-none overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#0a0a10] border-r border-gray-800/80 flex flex-col fixed h-screen z-30 shrink-0">
        {/* Brand/Logo Area */}
        <div className="p-6 border-b border-gray-800/80 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-brand-gold to-yellow-600 flex items-center justify-center text-black font-bold">
            D
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              DLF CMS <span className="text-[10px] bg-brand-gold/15 text-brand-gold px-1.5 py-0.5 rounded border border-brand-gold/30">v1.0</span>
            </h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">Control Center</p>
          </div>
        </div>

        {/* Navigation items by category */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto space-y-6 scrollbar-thin">
          {categories.map(catName => (
            <div key={catName} className="space-y-1.5">
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest px-3">
                {catName}
              </span>
              <div className="space-y-1">
                {sections
                  .filter(s => s.category === catName)
                  .map(s => {
                    const Icon = s.icon
                    const isActive = activeSection === s.id
                    return (
                      <button
                        key={s.id}
                        onClick={() => setActiveSection(s.id)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all group ${
                          isActive
                            ? 'bg-brand-gold/10 border border-brand-gold/40 text-brand-gold shadow-[0_0_12px_rgba(197,155,39,0.1)]'
                            : 'border border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800/40'
                        }`}
                        type="button"
                      >
                        <span className="flex items-center gap-2.5">
                          <Icon className={`h-4 w-4 transition-colors ${isActive ? 'text-brand-gold' : 'text-gray-500 group-hover:text-gray-400'}`} />
                          {s.label}
                        </span>
                        <ChevronRight className={`h-3 w-3 transition-transform ${isActive ? 'text-brand-gold translate-x-0.5' : 'text-transparent group-hover:text-gray-600'}`} />
                      </button>
                    )
                  })}
              </div>
            </div>
          ))}
        </nav>

        {/* Sidebar Footer Controls */}
        <div className="p-4 border-t border-gray-800/80 space-y-2 bg-[#09090e]">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded-lg bg-black/40 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 flex items-center justify-center gap-2 text-[11px] font-semibold tracking-wide transition-all"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Visit Live Site
          </a>

          <button
            onClick={handleLogout}
            className="w-full py-2 px-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 hover:text-red-300 flex items-center justify-center gap-2 text-[11px] font-semibold tracking-wide transition-all"
            type="button"
          >
            <LogOut className="h-3.5 w-3.5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Workspace Layout */}
      <main className="flex-1 ml-64 min-h-screen bg-[#07070c] overflow-y-auto">
        {/* Workspace Top Header */}
        <header className="h-16 border-b border-gray-800/60 px-8 flex items-center justify-between sticky top-0 bg-[#07070c]/80 backdrop-blur-md z-20">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
            <span>Administration</span>
            <ChevronRight className="h-3.5 w-3.5 text-gray-600" />
            <span className="text-gray-200 uppercase tracking-wider font-bold">
              {sections.find(s => s.id === activeSection)?.label}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 flex items-center gap-1.5 bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-800 font-semibold uppercase tracking-wider">
              <Lock className="h-3 w-3 text-brand-gold animate-pulse" />
              Secure Session
            </span>
          </div>
        </header>

        {/* Editor Wrapper Content Area */}
        <div className="p-8 max-w-5xl mx-auto">
          <ActiveComponent />
        </div>
      </main>
    </div>
  )
}
