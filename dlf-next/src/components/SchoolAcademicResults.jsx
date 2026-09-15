import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import { 
  Trophy, Award, Star, CheckCircle2, TrendingUp, 
  Sparkles, BookOpen, Download, GraduationCap, 
  ChevronRight, ArrowLeft, ShieldCheck, Layers, 
  Users, Printer, ExternalLink, School, Medal, 
  Flame, HelpCircle, FileCheck, Eye, ZoomIn, X, Clock
} from 'lucide-react'

export default function SchoolAcademicResults() {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]
  const isDLWS = activeBranch === 'dlf-greater-noida'

  // Flag: hide legacy/unverified components until correct data is provided
  const SHOW_LEGACY_SECTIONS = false

  // Explicit Tailwind CSS tokens to ensure Tailwind v4 extracts all utility classes
  const colors = isDLWS ? {
    heroGradient: 'bg-gradient-to-br from-brand-purpleDeep via-brand-purpleDeep to-brand-purpleVibrant',
    primaryText: 'text-brand-purpleDeep',
    vibrantText: 'text-brand-purpleVibrant',
    primaryBg: 'bg-brand-purpleDeep',
    vibrantBg: 'bg-brand-purpleVibrant',
    primaryBorder: 'border-brand-purpleDeep',
    subtleBg: 'bg-brand-purpleDeep/10',
    bannerGradient: 'from-brand-purpleDeep/10 via-brand-purpleVibrant/5 to-transparent',
    bannerBorder: 'border-brand-purpleDeep/15',
    activeTab: 'bg-brand-purpleDeep text-white shadow-md',
  } : {
    heroGradient: 'bg-gradient-to-br from-brand-greenDeep via-brand-greenDeep to-brand-greenVibrant',
    primaryText: 'text-brand-greenDeep',
    vibrantText: 'text-brand-greenVibrant',
    primaryBg: 'bg-brand-greenDeep',
    vibrantBg: 'bg-brand-greenVibrant',
    primaryBorder: 'border-brand-greenDeep',
    subtleBg: 'bg-brand-greenDeep/10',
    bannerGradient: 'from-brand-greenDeep/10 via-brand-greenVibrant/5 to-transparent',
    bannerBorder: 'border-brand-greenDeep/15',
    activeTab: 'bg-brand-greenDeep text-white shadow-md',
  }

  const resultsData = currentSchool?.academicResults || {}
  const stats = resultsData.stats || []

  // Default active tab based on school branch
  const [activeTab, setActiveTab] = useState(isDLWS ? 'class-x' : 'class-xii')
  const [showGazetteModal, setShowGazetteModal] = useState(false)
  const [selectedPoster, setSelectedPoster] = useState(null)

  const handlePrintGazette = () => {
    window.print()
  }

  // Official 2026 Board Results dataset for DLPS Sahibabad
  const boardResults2026 = [
    {
      grade: 'Class XII',
      tag: 'CBSE GRADE XII BOARD RESULT 2026',
      headline: 'Powered By Consistency. Defined By Excellence.',
      description: 'DLF Public School sets another historic benchmark in the CBSE Senior School Certificate Examinations, demonstrating unprecedented mastery across Science, Commerce & Humanities.',
      image: '/images/dlps-grade-xii-result-2026.jpg',
      downloadName: 'DLPS-CBSE-Grade-XII-Result-2026.jpg',
      topper: {
        name: 'Riddhima Tyagi',
        score: '98.40%',
        role: 'School Topper',
        highlight: 'Exceptional Mastery Across All Disciplines'
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
    {
      grade: 'Class X',
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
  ]

  return (
    <div className="pt-24 pb-20 min-h-screen text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden font-sans">
      {/* Ambient background decoration */}
      <div className={`absolute top-20 left-0 w-96 h-96 rounded-full ${isDLWS ? 'bg-brand-purpleVibrant/5' : 'bg-brand-greenVibrant/5'} blur-3xl pointer-events-none -z-10`} />
      <div className={`absolute bottom-40 right-0 w-96 h-96 rounded-full ${isDLWS ? 'bg-brand-purpleDeep/5' : 'bg-brand-greenDeep/5'} blur-3xl pointer-events-none -z-10`} />

      <div className="w-[94%] max-w-[1360px] mx-auto space-y-12">
        
        {/* ── BREADCRUMB & BACK LINK ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-gray-100 pb-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-brand-muted">
            <Link to="/" className="hover:text-brand-charcoal transition-colors">Darbari Lal Foundation</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to={`/school/${activeBranch}`} className="hover:text-brand-charcoal transition-colors">
              {currentSchool?.name || 'School'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to={`/school/${activeBranch}/curriculum`} className="hover:text-brand-charcoal transition-colors">
              Curriculum
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className={`${colors.vibrantText} font-bold`}>Academic Results</span>
          </nav>

          <Link
            to={`/school/${activeBranch}/curriculum`}
            className={`inline-flex items-center gap-2 text-xs font-bold ${colors.primaryText} hover:${colors.vibrantText} transition-colors`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Curriculum Overview
          </Link>
        </div>

        {/* ── OFFICIAL BOARD RESULT 2026 FEATURED POSTER SPOTLIGHT (ON THE TOP) ── */}
        {isDLWS ? (
          <div className="bg-white rounded-3xl border-2 border-brand-purpleDeep/20 shadow-lg p-8 sm:p-14 text-center max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-purpleDeep/10 text-brand-purpleDeep flex items-center justify-center mx-auto">
              <Trophy className="w-8 h-8 text-brand-gold" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-purpleVibrant px-3 py-1 rounded-full bg-brand-purpleDeep/5 border border-brand-purpleDeep/10">
                DLF World School, Greater Noida
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-brand-purpleDeep">
                Academic Results Gazette
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto leading-relaxed font-inter">
                The official CBSE Academic Results and Distinctions Gazette is currently in compilation and will be published shortly following verification.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold text-brand-charcoal">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>Status: In Compilation / To Be Declared</span>
            </div>
          </div>
        ) : (
          <div className="space-y-10 sm:space-y-12">
            {boardResults2026.map((card, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-amber-50/50 via-white to-green-50/40 rounded-3xl border-2 border-brand-gold/30 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10 relative"
              >
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  
                  {/* Left Column: Official Poster with Click-to-Enlarge Lightbox */}
                  <div className="w-full lg:w-5/12 flex flex-col items-center">
                    <div 
                      onClick={() => setSelectedPoster(card)}
                      className="group relative rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-gold/40 hover:border-brand-gold cursor-pointer transition-all duration-300 max-w-sm w-full bg-white"
                    >
                      <img
                        src={card.image}
                        alt={`DLF Public School - ${card.tag}`}
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
                        {card.grade} &bull; 2026 Declaration
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
                        <span>{card.tag}</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-4xl font-black text-brand-greenDeep tracking-tight">
                        {card.headline}
                      </h2>
                      <p className="text-xs sm:text-sm text-brand-charcoal/80 font-inter leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* School Topper Spotlight */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-gold/40 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold px-2.5 py-0.5 rounded-full bg-brand-gold/15">
                          {card.topper.role}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-black text-brand-charcoal">
                          {card.topper.name} — <span className="text-brand-greenDeep font-extrabold">{card.topper.score}</span>
                        </h3>
                        <p className="text-xs font-semibold text-brand-charcoal/90">
                          {card.topper.highlight}
                        </p>
                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-brand-gold/15 flex items-center justify-center shrink-0 text-brand-greenDeep">
                        <Medal className="w-8 h-8 text-brand-gold" />
                      </div>
                    </div>

                    {/* 4-Metric Grid from Poster */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {card.metrics.map((m, mIdx) => (
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
                        {card.extraBadge && (
                          <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-md border border-green-150">
                            {card.extraBadge}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {card.roster.map((st, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-brand-charcoal shadow-2xs">
                            <span>{st.name}</span>
                            <strong className="text-brand-greenDeep font-serif">{st.score}</strong>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action CTA */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedPoster(card)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-greenDeep text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-greenVibrant transition-all cursor-pointer shadow-sm"
                      >
                        <ZoomIn className="w-4 h-4" />
                        Enlarge Official Poster
                      </button>

                      <a
                        href={card.image}
                        download={card.downloadName}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-gray-300 text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-all shadow-sm"
                      >
                        <Download className="w-4 h-4 text-brand-gold" />
                        Download Gazette Poster
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── ALL OTHER COMPONENTS HIDDEN FOR NOW UNTIL VERIFIED DATA IS READY ── */}
        {SHOW_LEGACY_SECTIONS && (
          <>
            {/* ── HERO BANNER ── */}
            <div className={`relative rounded-3xl overflow-hidden ${colors.heroGradient} text-white shadow-2xl p-8 sm:p-12 lg:p-14`}>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-gold text-xs font-extrabold uppercase tracking-widest">
              <Trophy className="w-4 h-4 text-brand-gold" />
              <span>{resultsData.affiliation || 'CBSE Affiliated Academic Benchmark'}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {resultsData.headline || 'Academic Results & Board Distinctions'}
            </h1>

            <p className="text-sm sm:text-base text-white/85 max-w-2xl font-inter leading-relaxed">
              {resultsData.subtitle || 'Showcasing our unwavering commitment to scholastic brilliance, conceptual depth, and transformative student outcomes.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setShowGazetteModal(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-brand-gold text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" />
                View Official Result Gazette
              </button>

              <Link
                to={`/school/${activeBranch}/curriculum`}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 transition-all duration-300"
              >
                <BookOpen className="w-4 h-4" />
                Explore Pathways &amp; Syllabi
              </Link>
            </div>
          </div>
        </div>

        {/* ── KPI HIGHLIGHT STATS (4 CARDS) ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-extrabold uppercase tracking-widest ${colors.vibrantText}`}>
                  Metric #{idx + 1}
                </span>
                <span className={`w-8 h-8 rounded-xl ${colors.subtleBg} flex items-center justify-center ${colors.primaryText} group-hover:scale-110 transition-transform`}>
                  {idx === 0 && <CheckCircle2 className="w-4 h-4" />}
                  {idx === 1 && <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />}
                  {idx === 2 && <TrendingUp className="w-4 h-4" />}
                  {idx === 3 && <Sparkles className="w-4 h-4 text-brand-gold" />}
                </span>
              </div>
              <div className="space-y-1">
                <div className={`font-serif text-3xl sm:text-4xl font-extrabold ${colors.primaryText}`}>
                  {s.value}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal font-serif">{s.label}</h4>
                <p className="text-[11px] text-brand-muted font-inter">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── TABS NAVIGATION ── */}
        <div className="flex justify-center border-b border-gray-200 pb-2 overflow-x-auto scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-gray-100/90 gap-1.5 sm:gap-2">
            {!isDLWS && (
              <button
                type="button"
                onClick={() => setActiveTab('class-xii')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  activeTab === 'class-xii'
                    ? colors.activeTab
                    : 'text-brand-charcoal hover:bg-white/80'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                Class XII Boards
              </button>
            )}

            <button
              type="button"
              onClick={() => setActiveTab('class-x')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === 'class-x'
                  ? colors.activeTab
                  : 'text-brand-charcoal hover:bg-white/80'
              }`}
            >
              <Award className="w-4 h-4" />
              Class X Boards
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('hundred-club')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === 'hundred-club'
                  ? colors.activeTab
                  : 'text-brand-charcoal hover:bg-white/80'
              }`}
            >
              <Star className="w-4 h-4" />
              {isDLWS ? 'Subject Distinctions' : '100/100 Perfect Club'}
            </button>

            {!isDLWS ? (
              <button
                type="button"
                onClick={() => setActiveTab('placements')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  activeTab === 'placements'
                    ? colors.activeTab
                    : 'text-brand-charcoal hover:bg-white/80'
                }`}
              >
                <Medal className="w-4 h-4" />
                University &amp; Competitive Entrance
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setActiveTab('global-honors')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  activeTab === 'global-honors'
                    ? colors.activeTab
                    : 'text-brand-charcoal hover:bg-white/80'
                }`}
              >
                <Trophy className="w-4 h-4" />
                Global &amp; STEM Honors
              </button>
            )}

            <button
              type="button"
              onClick={() => setActiveTab('trends')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === 'trends'
                  ? colors.activeTab
                  : 'text-brand-charcoal hover:bg-white/80'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              3-Year Progression
            </button>
          </div>
        </div>

        {/* ── TAB 1: CLASS XII BOARD RESULTS (DLPS ONLY) ── */}
        {!isDLWS && activeTab === 'class-xii' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Stream Performance Cards */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className={`text-[10px] uppercase font-extrabold tracking-widest ${colors.vibrantText}`}>
                    Stream-Wise Breakdown
                  </span>
                  <h3 className={`font-serif text-2xl sm:text-3xl font-bold ${colors.primaryText}`}>
                    Senior Secondary Academic Performance
                  </h3>
                </div>
                <span className="hidden sm:inline-block text-xs font-semibold text-brand-muted">
                  Session 2024–25
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resultsData.classXII?.streamWise?.map((st, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4 hover:border-brand-gold/40 transition-colors">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <h4 className="font-serif text-lg font-bold text-brand-charcoal">{st.stream}</h4>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-brand-gold/15 text-brand-charcoal">
                        {st.distinctions}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <span className="text-[10px] uppercase font-bold text-brand-muted block">Highest</span>
                        <span className={`font-serif text-2xl font-extrabold ${colors.primaryText}`}>{st.highest}</span>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <span className="text-[10px] uppercase font-bold text-brand-muted block">Average</span>
                        <span className={`font-serif text-2xl font-extrabold ${colors.vibrantText}`}>{st.average}</span>
                      </div>
                    </div>

                    <p className="text-xs text-brand-muted font-inter leading-relaxed">
                      <strong className="text-brand-charcoal">Highlights:</strong> {st.highlights}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Class XII Toppers Showcase */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className={`text-[10px] uppercase font-extrabold tracking-widest ${colors.vibrantText}`}>
                    Merit Achievers
                  </span>
                  <h3 className={`font-serif text-2xl sm:text-3xl font-bold ${colors.primaryText}`}>
                    Class XII Board Examination Toppers
                  </h3>
                </div>
                <span className="text-xs font-bold text-brand-muted uppercase tracking-wider">
                  Senior Secondary Batch
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {resultsData.classXII?.toppers?.map((top, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-3xl border border-gray-150 p-4 space-y-4 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="w-full h-72 rounded-2xl overflow-hidden relative bg-gray-100 shadow-inner">
                      <img
                        src={top.image}
                        alt={top.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      <div className="absolute top-3 right-3 bg-brand-gold text-brand-charcoal text-xs font-black font-serif px-3 py-1 rounded-full shadow-lg">
                        {top.score}
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-gold bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/20 inline-block">
                          {top.stream}
                        </span>
                        <h4 className="font-serif text-lg font-bold drop-shadow-sm leading-snug">
                          {top.name}
                        </h4>
                      </div>
                    </div>

                    <div className="space-y-2 pt-1">
                      <div className="flex items-center gap-1.5 text-xs font-extrabold text-brand-charcoal">
                        <Award className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>{top.achievement}</span>
                      </div>
                      <p className="text-[11px] text-brand-muted font-inter leading-relaxed">
                        {top.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 2: CLASS X BOARD RESULTS (DLPS & DLWS) ── */}
        {activeTab === 'class-x' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Class X Highlights Bar */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
                <div>
                  <span className={`text-[10px] uppercase font-extrabold tracking-widest ${colors.vibrantText}`}>
                    Secondary School Examination (Class X)
                  </span>
                  <h3 className={`font-serif text-2xl sm:text-3xl font-bold ${colors.primaryText}`}>
                    CBSE Class X Board Results Benchmark
                  </h3>
                </div>
                <span className="text-xs font-bold text-brand-gold bg-brand-charcoal px-3 py-1 rounded-full w-fit">
                  100% Quality Pass Rate
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {resultsData.classX?.highlights?.map((hl, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-4 text-center space-y-1 border border-gray-100">
                    <span className={`font-serif text-2xl sm:text-3xl font-extrabold ${colors.primaryText}`}>
                      {hl.value}
                    </span>
                    <p className="text-xs font-bold text-brand-charcoal">{hl.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Class X Toppers Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className={`text-[10px] uppercase font-extrabold tracking-widest ${colors.vibrantText}`}>
                    Hall of Fame
                  </span>
                  <h3 className={`font-serif text-2xl sm:text-3xl font-bold ${colors.primaryText}`}>
                    Class X Board Meritorious Achievers
                  </h3>
                </div>
                <span className="text-xs font-semibold text-brand-muted">
                  Distinction Scholars
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {resultsData.classX?.toppers?.map((top, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-3xl border border-gray-150 p-4 space-y-4 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="w-full h-72 rounded-2xl overflow-hidden relative bg-gray-100 shadow-inner">
                      <img
                        src={top.image}
                        alt={top.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      <div className="absolute top-3 right-3 bg-brand-gold text-brand-charcoal text-xs font-black font-serif px-3 py-1 rounded-full shadow-lg">
                        {top.score}
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-gold bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/20 inline-block">
                          {top.stream}
                        </span>
                        <h4 className="font-serif text-lg font-bold drop-shadow-sm leading-snug">
                          {top.name}
                        </h4>
                      </div>
                    </div>

                    <div className="space-y-2 pt-1">
                      <div className="flex items-center gap-1.5 text-xs font-extrabold text-brand-charcoal">
                        <Star className="w-4 h-4 text-brand-gold fill-brand-gold shrink-0" />
                        <span>{top.achievement}</span>
                      </div>
                      <p className="text-[11px] text-brand-muted font-inter leading-relaxed">
                        {top.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 3: 100/100 PERFECT CLUB & SUBJECT DISTINCTIONS ── */}
        {activeTab === 'hundred-club' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            <div className="max-w-2xl space-y-2">
              <span className={`text-[10px] uppercase font-extrabold tracking-widest ${colors.vibrantText}`}>
                Subject Mastery
              </span>
              <h3 className={`font-serif text-2xl sm:text-4xl font-bold ${colors.primaryText}`}>
                {isDLWS ? 'Subject Distinctions & Distinction Roster' : 'The Perfect 100/100 Club'}
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted font-inter">
                Demonstrating flawless subject understanding across sciences, commerce, humanities, mathematics, and languages.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {resultsData.perfectHundreds?.map((sub, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-5 border border-gray-150 shadow-sm hover:border-brand-gold hover:shadow-md transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-muted">
                      Subject
                    </span>
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-brand-gold/15 text-brand-charcoal font-serif">
                      {sub.max}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-brand-charcoal">{sub.subject}</h4>
                  <div className="flex items-center gap-2 pt-1 border-t border-gray-100">
                    <CheckCircle2 className={`w-4 h-4 ${colors.vibrantText}`} />
                    <span className={`text-xs font-extrabold ${colors.primaryText}`}>{sub.count}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Pedagogy Callout */}
            <div className={`p-8 rounded-3xl bg-gradient-to-r ${colors.bannerGradient} border ${colors.bannerBorder} flex flex-col md:flex-row items-start md:items-center justify-between gap-6`}>
              <div className="space-y-2 max-w-2xl">
                <h4 className={`font-serif text-xl font-bold ${colors.primaryText}`}>
                  How We Achieve Flawless Board Scores
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed">
                  Our dual-system of formative assessments, structured rubrics, personalized doubt clinics, and pre-board simulated testing ensures students approach national examinations with complete calmness and command.
                </p>
              </div>
              <Link
                to={`/school/${activeBranch}/counselling`}
                className={`px-5 py-3 rounded-xl ${colors.primaryBg} text-white text-xs font-bold uppercase tracking-wider hover:${colors.vibrantBg} transition-colors shrink-0`}
              >
                Learn About Exam Wellness
              </Link>
            </div>
          </div>
        )}

        {/* ── TAB 4: PLACEMENTS (DLPS) OR GLOBAL HONORS (DLWS) ── */}
        {!isDLWS && activeTab === 'placements' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="max-w-2xl space-y-2">
              <span className={`text-[10px] uppercase font-extrabold tracking-widest ${colors.vibrantText}`}>
                Higher Education Pathways
              </span>
              <h3 className={`font-serif text-2xl sm:text-4xl font-bold ${colors.primaryText}`}>
                Competitive Exam Selections &amp; Placements
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted font-inter">
                Graduates of DLF Public School consistently secure admissions to India’s most prestigious universities and global institutes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resultsData.placements?.map((pl, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm space-y-3 hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4 text-brand-gold" />
                    <span>Pathway #{idx + 1}</span>
                  </div>
                  <h4 className={`font-serif text-lg font-bold ${colors.primaryText}`}>{pl.exam}</h4>
                  <p className="text-xs text-brand-muted font-inter leading-relaxed">
                    {pl.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {isDLWS && activeTab === 'global-honors' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="max-w-2xl space-y-2">
              <span className={`text-[10px] uppercase font-extrabold tracking-widest ${colors.vibrantText}`}>
                International &amp; National Accolades
              </span>
              <h3 className={`font-serif text-2xl sm:text-4xl font-bold ${colors.primaryText}`}>
                Global Mathematical &amp; STEM Recognitions
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted font-inter">
                At DLF World School, academic success is demonstrated through real-world problem solving and global scholastic championships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resultsData.globalAccolades?.map((ac, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-7 border border-gray-150 shadow-sm space-y-3 hover:shadow-lg transition-all flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-gold/15 text-brand-charcoal">
                        {ac.badge}
                      </span>
                      <Trophy className="w-5 h-5 text-brand-gold" />
                    </div>
                    <h4 className={`font-serif text-xl font-bold ${colors.primaryText}`}>{ac.title}</h4>
                    <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed">{ac.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Experiential Program Modules */}
            <div className="mt-8 pt-8 border-t border-gray-150 space-y-4">
              <h4 className={`font-serif text-xl font-bold ${colors.primaryText}`}>
                Experiential Learning Labs Driving These Results
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {resultsData.experientialMilestones?.map((em, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-2">
                    <h5 className="font-serif text-sm font-bold text-brand-charcoal">{em.program}</h5>
                    <p className="text-[11px] text-brand-muted font-inter leading-relaxed">{em.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 5: 3-YEAR PROGRESSION (COMPARATIVE TABLE) ── */}
        {activeTab === 'trends' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="max-w-2xl space-y-2">
              <span className={`text-[10px] uppercase font-extrabold tracking-widest ${colors.vibrantText}`}>
                Consistency &amp; Longevity
              </span>
              <h3 className={`font-serif text-2xl sm:text-4xl font-bold ${colors.primaryText}`}>
                Year-on-Year Academic Progression
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted font-inter">
                A historical look at board examination consistency over the last three academic cycles.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className={`${colors.primaryBg} text-white text-xs font-bold uppercase tracking-wider`}>
                      <th className="p-4 sm:p-5">Academic Session</th>
                      <th className="p-4 sm:p-5">Pass Percentage</th>
                      <th className="p-4 sm:p-5">School Highest</th>
                      <th className="p-4 sm:p-5">Students 90%+</th>
                      <th className="p-4 sm:p-5">Cohort Average</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs sm:text-sm font-inter">
                    {resultsData.history?.map((h, i) => (
                      <tr key={i} className="hover:bg-gray-50/80 transition-colors">
                        <td className="p-4 sm:p-5 font-bold font-serif text-brand-charcoal">{h.year}</td>
                        <td className="p-4 sm:p-5">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 font-extrabold text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {h.pass}
                          </span>
                        </td>
                        <td className={`p-4 sm:p-5 font-extrabold ${colors.primaryText}`}>{h.highest}</td>
                        <td className="p-4 sm:p-5 font-semibold text-brand-charcoal">{h.above90}</td>
                        <td className="p-4 sm:p-5 font-semibold text-brand-muted">{h.avg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── BEYOND ROTE LEARNING: PHILOSOPHY CARD ── */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-150 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className={`text-[10px] uppercase font-extrabold tracking-widest ${colors.vibrantText}`}>
              Pedagogical Ethos
            </span>
            <h3 className={`font-serif text-2xl sm:text-4xl font-bold ${colors.primaryText}`}>
              "A Thinking School With a Soul" in Academic Practice
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed">
              At DLF Schools, high board scores are not manufactured through repetitive cramming or examination anxiety. Instead, they are the natural byproduct of deep inquiry, experiential laboratories, emotional safety, and cognitive skill building.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <div className="space-y-2 p-5 rounded-2xl bg-gray-50/80 border border-gray-100">
              <div className="w-8 h-8 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-charcoal font-bold text-xs">
                01
              </div>
              <h5 className="font-serif text-sm font-bold text-brand-charcoal">Conceptual Mastery</h5>
              <p className="text-[11px] text-brand-muted font-inter leading-relaxed">
                Concepts are explored through physical models, maker spaces, and Socratic dialogues before being translated into examination answers.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-gray-50/80 border border-gray-100">
              <div className="w-8 h-8 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-charcoal font-bold text-xs">
                02
              </div>
              <h5 className="font-serif text-sm font-bold text-brand-charcoal">Low-Stress Environment</h5>
              <p className="text-[11px] text-brand-muted font-inter leading-relaxed">
                Full-time counsellors and wellness mentors accompany board batches to dissolve exam stress and build self-efficacy.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-gray-50/80 border border-gray-100">
              <div className="w-8 h-8 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-charcoal font-bold text-xs">
                03
              </div>
              <h5 className="font-serif text-sm font-bold text-brand-charcoal">Individual Diagnostic Care</h5>
              <p className="text-[11px] text-brand-muted font-inter leading-relaxed">
                Personalized remedial tracks and rubric-based evaluations ensure every child's specific doubt is untangled well before boards.
              </p>
            </div>
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className={`rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white text-center space-y-6 shadow-xl`}>
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">
              Admissions Open 2026–27
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold">
              Give Your Child the Advantage of Proven Academic Excellence
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-inter max-w-xl mx-auto">
              Experience the campus where academic brilliance meets joyful discovery, character building, and world-class infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/admission-enquiry"
              className="px-7 py-3.5 rounded-full bg-brand-gold text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-yellow-400 hover:shadow-lg transition-all"
            >
              Enquire for Admission
            </Link>
            <Link
              to={`/school/${activeBranch}/virtual-tour`}
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 transition-all"
            >
              Virtual Campus Tour
            </Link>
          </div>
        </div>
        </>
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

      {/* ── MODAL: RESULT GAZETTE / PRINT SUMMARY ── */}
      {showGazetteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <FileCheck className={`w-6 h-6 ${colors.primaryText}`} />
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal">
                    {currentSchool?.name} — Official Results Gazette
                  </h3>
                  <p className="text-xs text-brand-muted font-inter">
                    {resultsData.affiliation || 'CBSE Board Examinations'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowGazetteModal(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs font-inter text-brand-charcoal">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-2">
                <div className="flex justify-between font-bold">
                  <span>Overall Pass Percentage:</span>
                  <span className="text-green-600">100% (Zero Compartments)</span>
                </div>
                <div className="flex justify-between">
                  <span>Cohort Average Aggregate:</span>
                  <span className="font-bold">{stats[3]?.value || '88.4%'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Highest Aggregate Score:</span>
                  <span className="font-bold text-brand-gold">{stats[1]?.value || '98.8%'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Students Scoring &gt;90%:</span>
                  <span className="font-bold">{stats[2]?.value || '54%'}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="font-serif font-bold text-sm text-brand-charcoal">Merit List Summary</h5>
                <ul className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
                  {(!isDLWS ? resultsData.classXII?.toppers : resultsData.classX?.toppers)?.map((t, idx) => (
                    <li key={idx} className="p-3 flex items-center justify-between hover:bg-gray-50">
                      <div>
                        <span className="font-bold block">{t.name}</span>
                        <span className="text-[10px] text-brand-muted">{t.stream} &bull; {t.achievement}</span>
                      </div>
                      <span className={`font-serif font-extrabold text-sm ${colors.primaryText}`}>{t.score}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={handlePrintGazette}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${colors.primaryBg} text-white text-xs font-bold hover:${colors.vibrantBg} transition-colors cursor-pointer`}
              >
                <Printer className="w-4 h-4" />
                Print / Save PDF
              </button>
              <button
                type="button"
                onClick={() => setShowGazetteModal(false)}
                className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-charcoal text-xs font-bold transition-colors cursor-pointer"
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
