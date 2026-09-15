import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  Trophy, Award, Star, CheckCircle2, TrendingUp, 
  Sparkles, Download, ArrowRight, Eye, ZoomIn, X, Clock, Medal 
} from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'

export default function CbseResults() {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]
  const isDLWS = activeBranch === 'dlf-greater-noida'

  // Tab State: 'class-xii' or 'class-x'
  const [activeTab, setActiveTab] = useState('class-xii')
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [selectedPoster, setSelectedPoster] = useState(null)

  // Official 2026 Board Results Dataset for DLPS Sahibabad
  const boardResults = {
    'class-xii': {
      id: 'class-xii',
      label: 'Class XII Boards 2026',
      shortLabel: 'Class XII (2026)',
      tag: 'CBSE GRADE XII BOARD RESULT 2026',
      headline: 'Powered By Consistency. Defined By Excellence.',
      description: 'DLF Public School sets another historic benchmark in the CBSE Senior School Certificate Examinations, demonstrating unprecedented mastery across Science, Commerce & Humanities.',
      image: '/images/dlps-grade-xii-result-2026.jpg',
      downloadName: 'DLPS-CBSE-Grade-XII-Result-2026.jpg',
      topper: {
        name: 'Riddhima Tyagi',
        score: '98.40%',
        role: 'School Topper',
        highlight: 'Exceptional Performance Across All Academic Disciplines'
      },
      metrics: [
        { label: 'School Average', value: '81.24%', sub: 'Batch Average' },
        { label: 'Perfect 100s', value: '26', sub: 'In Various Subjects' },
        { label: '>90% Aggregate', value: '37/170', sub: 'Students' },
        { label: '>85% Aggregate', value: '69/170', sub: 'Students' },
      ],
      roster: [
        { name: 'Janya Babbar', score: '98.00%' },
        { name: 'Anya Chugh', score: '97.00%' },
        { name: 'Anushka Dhama', score: '96.00%' },
        { name: 'Aishi', score: '95.80%' },
        { name: 'Dhriti Ahuja', score: '95.60%' },
        { name: 'Sanchhi Sehdev', score: '95.20%' },
        { name: 'Palaksh Singh', score: '95.00%' },
        { name: 'Anish Lahori', score: '95.00%' },
      ],
      extraBadge: '168/170 students scored aggregate > 60%'
    },
    'class-x': {
      id: 'class-x',
      label: 'Class X Boards 2026',
      shortLabel: 'Class X (2026)',
      tag: 'CBSE GRADE X BOARD RESULT 2026',
      headline: 'Powered By Consistency. Defined By Excellence.',
      description: 'DLF Public School sets another historic benchmark in the CBSE Secondary School Board Examinations, demonstrating unprecedented mastery across all subjects.',
      image: '/images/dlps-grade-x-result-2026.jpg',
      downloadName: 'DLPS-CBSE-Grade-X-Result-2026.jpg',
      topper: {
        name: 'Kavya Bhardwaj',
        score: '99.40%',
        role: 'School Topper',
        highlight: '100% in English | Sanskrit | Artificial Intelligence | Social Science'
      },
      metrics: [
        { label: 'School Average', value: '88.4%', sub: 'Highest Ever' },
        { label: 'Perfect 100s', value: '53', sub: 'In Various Subjects' },
        { label: '>95% Aggregate', value: '41', sub: 'Students' },
        { label: '>90% Aggregate', value: '54%', sub: 'Of Batch' },
      ],
      roster: [
        { name: 'Bhavya Goyal', score: '98.40%' },
        { name: 'Raghav Suri', score: '98.40%' },
        { name: 'Aarjav Jain', score: '98.20%' },
        { name: 'Dhairya Killa', score: '98.00%' },
        { name: 'Garima Walia', score: '98.00%' },
        { name: 'Rajshree', score: '98.00%' },
        { name: 'Anirudh M.M', score: '97.80%' },
      ],
      extraBadge: '100% students scored aggregate > 60%'
    }
  }

  // 5-Second Auto-Rotation Timer
  useEffect(() => {
    if (isPaused || isDLWS) return

    const intervalTime = 100 // update every 100ms for smooth progress bar
    const totalTime = 5000 // 5 seconds
    const step = (intervalTime / totalTime) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Switch tab
          setActiveTab((current) => (current === 'class-xii' ? 'class-x' : 'class-xii'))
          return 0
        }
        return prev + step
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [isPaused, isDLWS, activeTab])

  // Handle manual tab switch
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey)
    setProgress(0)
  }

  const currentResult = boardResults[activeTab] || boardResults['class-xii']

  return (
    <div className="py-12 sm:py-16 text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden font-sans">
      <div className="w-[96%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* ── SECTION HEADER & CONTROLS ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200/80 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-greenDeep/10 text-brand-greenDeep text-[11px] font-extrabold uppercase tracking-widest border border-brand-greenDeep/15">
              <Trophy className="w-3.5 h-3.5 text-brand-gold" />
              <span>Academic Benchmark &bull; CBSE Board Results 2026</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-brand-greenDeep tracking-tight">
              Class X &amp; XII Board Results 2026
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed">
              Outstanding academic performance of DLF Public School students in the CBSE Class X &amp; XII Board Examinations.
            </p>
          </div>

          {/* Tab Switcher Buttons (Auto rotates every 5s) */}
          {!isDLWS && (
            <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
              <div 
                className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200/80 shadow-inner"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <button
                  type="button"
                  onClick={() => handleTabChange('class-xii')}
                  className={`relative px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    activeTab === 'class-xii'
                      ? 'bg-brand-greenDeep text-white shadow-md'
                      : 'text-brand-charcoal hover:bg-white/80'
                  }`}
                >
                  <Award className={`w-3.5 h-3.5 ${activeTab === 'class-xii' ? 'text-brand-gold' : 'text-gray-400'}`} />
                  Class XII Boards
                  {activeTab === 'class-xii' && (
                    <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleTabChange('class-x')}
                  className={`relative px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    activeTab === 'class-x'
                      ? 'bg-brand-greenDeep text-white shadow-md'
                      : 'text-brand-charcoal hover:bg-white/80'
                  }`}
                >
                  <Star className={`w-3.5 h-3.5 ${activeTab === 'class-x' ? 'text-brand-gold fill-brand-gold' : 'text-gray-400'}`} />
                  Class X Boards
                  {activeTab === 'class-x' && (
                    <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                  )}
                </button>
              </div>

              {/* Subtle 5-Second Timer Bar */}
              <div className="flex items-center gap-2 text-[10px] text-brand-muted font-inter">
                <span>{isPaused ? 'Paused on hover' : 'Auto-switching in 5s'}</span>
                <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-brand-greenVibrant transition-all duration-100 ease-linear rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── CARD CONTENT (DLPS 2026 BOARD SHOWCASE) ── */}
        {isDLWS ? (
          <div className="bg-white rounded-3xl border-2 border-brand-purpleDeep/20 shadow-md p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-purpleDeep/10 text-brand-purpleDeep flex items-center justify-center mx-auto">
              <Trophy className="w-7 h-7 text-brand-gold" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-purpleVibrant px-3 py-1 rounded-full bg-brand-purpleDeep/5 border border-brand-purpleDeep/10">
                DLF World School, Greater Noida
              </span>
              <h4 className="font-serif text-2xl font-black text-brand-purpleDeep">
                Academic Results Gazette
              </h4>
              <p className="text-xs text-brand-muted max-w-md mx-auto leading-relaxed font-inter">
                The official CBSE Academic Results and Distinctions Gazette is currently under compilation and will be published following verification.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold text-brand-charcoal">
              <Clock className="w-3.5 h-3.5 text-brand-gold" />
              <span>Status: In Compilation / To Be Declared</span>
            </div>
          </div>
        ) : (
          <div 
            className="bg-gradient-to-br from-amber-50/50 via-white to-green-50/40 rounded-3xl border-2 border-brand-gold/30 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10 relative transition-all duration-500"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              
              {/* Left Column: Official Poster with Lightbox */}
              <div className="w-full lg:w-5/12 flex flex-col items-center">
                <div 
                  onClick={() => setSelectedPoster(currentResult)}
                  className="group relative rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-gold/40 hover:border-brand-gold cursor-pointer transition-all duration-300 max-w-sm w-full bg-white"
                >
                  <img
                    src={currentResult.image}
                    alt={`DLF Public School - ${currentResult.tag}`}
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-[2px]">
                    <div className="w-10 h-10 rounded-full bg-brand-gold text-brand-charcoal flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                    <span>Click to Enlarge Poster</span>
                  </div>

                  <div className="absolute top-3 left-3 bg-brand-greenDeep/95 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md border border-white/20">
                    {currentResult.label}
                  </div>
                </div>

                <p className="text-[11px] text-brand-muted font-medium mt-3 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-brand-gold" />
                  Click image to expand high-resolution declaration poster
                </p>
              </div>

              {/* Right Column: Verified Highlights & Topper Stats */}
              <div className="w-full lg:w-7/12 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/20 text-brand-charcoal text-[11px] font-extrabold uppercase tracking-widest border border-brand-gold/40">
                    <Trophy className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{currentResult.tag}</span>
                  </div>
                  <h4 className="font-serif text-2xl sm:text-4xl font-black text-brand-greenDeep tracking-tight">
                    {currentResult.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-charcoal/80 font-inter leading-relaxed">
                    {currentResult.description}
                  </p>
                </div>

                {/* School Topper Spotlight */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-gold/40 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold px-2.5 py-0.5 rounded-full bg-brand-gold/15">
                      {currentResult.topper.role}
                    </span>
                    <h5 className="font-serif text-xl sm:text-2xl font-black text-brand-charcoal">
                      {currentResult.topper.name} — <span className="text-brand-greenDeep font-extrabold">{currentResult.topper.score}</span>
                    </h5>
                    <p className="text-xs font-semibold text-brand-charcoal/90">
                      {currentResult.topper.highlight}
                    </p>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-brand-gold/15 flex items-center justify-center shrink-0 text-brand-greenDeep">
                    <Medal className="w-8 h-8 text-brand-gold" />
                  </div>
                </div>

                {/* 4-Metric Grid from Poster */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {currentResult.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-white p-3.5 rounded-xl border border-gray-150 text-center shadow-sm">
                      <span className="text-[9.5px] uppercase font-bold text-brand-muted block">{m.label}</span>
                      <span className={`font-serif text-xl sm:text-2xl font-black ${mIdx === 1 ? 'text-brand-gold' : mIdx === 3 ? 'text-brand-greenVibrant' : 'text-brand-greenDeep'}`}>
                        {m.value}
                      </span>
                      <span className="text-[9px] text-brand-muted block">{m.sub}</span>
                    </div>
                  ))}
                </div>

                {/* Meritorious Achievers List */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-extrabold tracking-widest text-brand-muted block">
                      Distinction Scholars Roster
                    </span>
                    {currentResult.extraBadge && (
                      <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-md border border-green-150">
                        {currentResult.extraBadge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentResult.roster.map((st, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-brand-charcoal shadow-2xs">
                        <span>{st.name}</span>
                        <strong className="text-brand-greenDeep font-serif">{st.score}</strong>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to={`/school/${activeBranch}/curriculum/academic-results`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-greenDeep text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-greenVibrant transition-all shadow-sm"
                  >
                    <span>View Full Academic Results</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSelectedPoster(currentResult)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-gray-300 text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-all cursor-pointer shadow-sm"
                  >
                    <ZoomIn className="w-4 h-4 text-brand-gold" />
                    Enlarge Official Poster
                  </button>

                  <a
                    href={currentResult.image}
                    download={currentResult.downloadName}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-all shadow-sm"
                  >
                    <Download className="w-4 h-4 text-brand-muted" />
                    Download Gazette
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>

      {/* ── MODAL: HIGH RESOLUTION POSTER LIGHTBOX ── */}
      {selectedPoster && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedPoster(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[95vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPoster(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white cursor-pointer transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedPoster.image}
              alt={`DLF Public School ${selectedPoster.tag} Official Declaration`}
              className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/20"
            />

            <div className="flex items-center gap-4 mt-4">
              <a
                href={selectedPoster.image}
                download={selectedPoster.downloadName}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-gold text-brand-charcoal font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-yellow-400 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Original Gazette
              </a>
              <button
                type="button"
                onClick={() => setSelectedPoster(null)}
                className="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
