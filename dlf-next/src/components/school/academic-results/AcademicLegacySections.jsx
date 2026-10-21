import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Trophy, Star, CheckCircle2, TrendingUp, Sparkles,
  BookOpen, Download, GraduationCap, Award, Medal
} from 'lucide-react'

export default function AcademicLegacySections({
  resultsData = {},
  stats = [],
  isDLWS = false,
  activeBranch = 'dlf-sahibabad',
  colors = {},
  onOpenGazette,
}) {
  const [activeTab, setActiveTab] = useState(isDLWS ? 'class-x' : 'class-xii')

  return (
    <div className="space-y-12">
      {/* ── HERO BANNER ── */}
      <div className={`relative rounded-3xl overflow-hidden ${colors.heroGradient} text-white shadow-2xl p-8 sm:p-12 lg:p-14`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-gold text-xs font-extrabold uppercase tracking-widest">
            <Trophy className="w-4 h-4 text-brand-gold" />
            <span>{resultsData.affiliation || 'Academic Benchmark'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {resultsData.headline || 'Academic Results & Board Distinctions'}
          </h1>

          <p className="text-sm sm:text-base text-white/85 max-w-2xl font-inter leading-relaxed">
            {resultsData.subtitle || 'Showcasing our unwavering commitment to scholastic brilliance, conceptual depth, and transformative student outcomes.'}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenGazette}
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
                activeTab === 'class-xii' ? colors.activeTab : 'text-brand-charcoal hover:bg-white/80'
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
              activeTab === 'class-x' ? colors.activeTab : 'text-brand-charcoal hover:bg-white/80'
            }`}
          >
            <Award className="w-4 h-4" />
            Class X Boards
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('hundred-club')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
              activeTab === 'hundred-club' ? colors.activeTab : 'text-brand-charcoal hover:bg-white/80'
            }`}
          >
            <Star className="w-4 h-4" />
            {isDLWS ? 'Distinctions Roster' : '100/100 Club'}
          </button>

          {!isDLWS ? (
            <button
              type="button"
              onClick={() => setActiveTab('placements')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === 'placements' ? colors.activeTab : 'text-brand-charcoal hover:bg-white/80'
              }`}
            >
              <Medal className="w-4 h-4" />
              University &amp; Entrance
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setActiveTab('global-honors')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === 'global-honors' ? colors.activeTab : 'text-brand-charcoal hover:bg-white/80'
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
              activeTab === 'trends' ? colors.activeTab : 'text-brand-charcoal hover:bg-white/80'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            3-Year Progression
          </button>
        </div>
      </div>

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
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white text-center space-y-6 shadow-xl">
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
    </div>
  )
}
