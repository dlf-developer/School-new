import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Trophy, Star, Award } from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'
import { dlpsBoardResultsMap } from '../data/schools/dlps/academicResultsData'
import { dlwsBoardResultsMap } from '../data/schools/dlws/academicResultsData'
import AcademicShowcaseCard from './school/academic-results/AcademicShowcaseCard'
import AcademicPosterModal from './school/academic-results/AcademicPosterModal'

export default function CbseResults() {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]
  const isDLWS = activeBranch === 'dlf-greater-noida'

  // Tab State: 'class-xii' or 'class-x' (Default to 'class-x' for DLWS, 'class-xii' for DLPS)
  const [activeTab, setActiveTab] = useState(isDLWS ? 'class-x' : 'class-xii')
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [selectedPoster, setSelectedPoster] = useState(null)

  const activeDataset = isDLWS ? dlwsBoardResultsMap : dlpsBoardResultsMap
  const currentResult = activeDataset[activeTab] || (isDLWS ? activeDataset['class-x'] : activeDataset['class-xii'])

  // 5-Second Auto-Rotation Timer for both schools
  useEffect(() => {
    if (isPaused) return

    const intervalTime = 100 // update every 100ms for smooth progress bar
    const totalTime = 5000 // 5 seconds
    const step = (intervalTime / totalTime) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((current) => (current === 'class-xii' ? 'class-x' : 'class-xii'))
          return 0
        }
        return prev + step
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [isPaused, activeTab])

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey)
    setProgress(0)
  }

  return (
    <div className="py-12 sm:py-16 text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden font-sans">
      <div className="w-[96%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* ── SECTION HEADER & CONTROLS ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200/80 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${
                isDLWS
                  ? 'bg-brand-purpleDeep/10 text-brand-purpleDeep border-brand-purpleDeep/15'
                  : 'bg-brand-greenDeep/10 text-brand-greenDeep border-brand-greenDeep/15'
              } text-[11px] font-extrabold uppercase tracking-widest border`}
            >
              <Trophy className="w-3.5 h-3.5 text-brand-gold" />
              <span>Academic Benchmark &bull; CBSE Board Results 2026</span>
            </div>
            <h3
              className={`font-serif text-2xl sm:text-4xl font-bold ${
                isDLWS ? 'text-brand-purpleDeep' : 'text-brand-greenDeep'
              } tracking-tight`}
            >
              Class X &amp; XII Board Results 2026
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed">
              Outstanding academic performance of{' '}
              {currentSchool?.name || (isDLWS ? 'DLF World School' : 'DLF Public School')} students in
              the CBSE Class X &amp; XII Board Examinations.
            </p>
          </div>

          {/* Tab Switcher Buttons (Auto rotates every 5s) */}
          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <div
              className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200/80 shadow-inner"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <button
                type="button"
                onClick={() => handleTabChange('class-x')}
                className={`relative px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  activeTab === 'class-x'
                    ? isDLWS
                      ? 'bg-brand-purpleDeep text-white shadow-md'
                      : 'bg-brand-greenDeep text-white shadow-md'
                    : 'text-brand-charcoal hover:bg-white/80'
                }`}
              >
                <Star
                  className={`w-3.5 h-3.5 ${
                    activeTab === 'class-x' ? 'text-brand-gold fill-brand-gold' : 'text-gray-400'
                  }`}
                />
                Class X Boards
                {activeTab === 'class-x' && (
                  <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                )}
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('class-xii')}
                className={`relative px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  activeTab === 'class-xii'
                    ? isDLWS
                      ? 'bg-brand-purpleDeep text-white shadow-md'
                      : 'bg-brand-greenDeep text-white shadow-md'
                    : 'text-brand-charcoal hover:bg-white/80'
                }`}
              >
                <Award
                  className={`w-3.5 h-3.5 ${
                    activeTab === 'class-xii' ? 'text-brand-gold' : 'text-gray-400'
                  }`}
                />
                Class XII Boards
                {activeTab === 'class-xii' && (
                  <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                )}
              </button>
            </div>

            {/* Subtle 5-Second Timer Bar */}
            <div className="flex items-center gap-2 text-[10px] text-brand-muted font-inter">
              <span>{isPaused ? 'Paused on hover' : 'Auto-switching in 5s'}</span>
              <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    isDLWS ? 'bg-brand-purpleVibrant' : 'bg-brand-greenVibrant'
                  } transition-all duration-100 ease-linear rounded-full`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD CONTENT (2026 BOARD SHOWCASE) ── */}
        <AcademicShowcaseCard
          currentResult={currentResult}
          currentSchool={currentSchool}
          isDLWS={isDLWS}
          activeBranch={activeBranch}
          onSelectPoster={setSelectedPoster}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        />
      </div>

      {/* ── MODAL: HIGH RESOLUTION POSTER LIGHTBOX ── */}
      <AcademicPosterModal
        selectedPoster={selectedPoster}
        onClose={() => setSelectedPoster(null)}
      />
    </div>
  )
}
