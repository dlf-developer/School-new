import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import { ChevronRight, ArrowLeft } from 'lucide-react'
import { dlpsBoardResults2026 } from '../data/schools/dlps/academicResultsData'
import { dlwsBoardResults2026 } from '../data/schools/dlws/academicResultsData'
import AcademicBoardCards from './school/academic-results/AcademicBoardCards'
import AcademicPosterModal from './school/academic-results/AcademicPosterModal'
import AcademicGazetteModal from './school/academic-results/AcademicGazetteModal'
import AcademicLegacySections from './school/academic-results/AcademicLegacySections'

export default function SchoolAcademicResults() {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]
  const isDLWS = activeBranch === 'dlf-greater-noida'

  // Flag: hide legacy/unverified components until correct data is provided
  const SHOW_LEGACY_SECTIONS = false

  const colors = isDLWS
    ? {
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
      }
    : {
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

  const [showGazetteModal, setShowGazetteModal] = useState(false)
  const [selectedPoster, setSelectedPoster] = useState(null)

  const activeBoardResults = isDLWS ? dlwsBoardResults2026 : dlpsBoardResults2026

  return (
    <div className="pt-24 pb-20 min-h-screen text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden font-sans">
      {/* Ambient background decoration */}
      <div
        className={`absolute top-20 left-0 w-96 h-96 rounded-full ${
          isDLWS ? 'bg-brand-purpleVibrant/5' : 'bg-brand-greenVibrant/5'
        } blur-3xl pointer-events-none -z-10`}
      />
      <div
        className={`absolute bottom-40 right-0 w-96 h-96 rounded-full ${
          isDLWS ? 'bg-brand-purpleDeep/5' : 'bg-brand-greenDeep/5'
        } blur-3xl pointer-events-none -z-10`}
      />

      <div className="w-[94%] max-w-[1360px] mx-auto space-y-12">
        {/* ── BREADCRUMB & BACK LINK ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-gray-100 pb-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-brand-muted">
            <Link to="/" className="hover:text-brand-charcoal transition-colors">
              Darbari Lal Foundation
            </Link>
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

        {/* ── OFFICIAL BOARD RESULT 2026 FEATURED POSTER SPOTLIGHT ── */}
        <AcademicBoardCards
          activeBoardResults={activeBoardResults}
          isDLWS={isDLWS}
          currentSchool={currentSchool}
          onSelectPoster={setSelectedPoster}
        />

        {/* ── LEGACY HISTORICAL SECTIONS (IF ENABLED) ── */}
        {SHOW_LEGACY_SECTIONS && (
          <AcademicLegacySections
            resultsData={resultsData}
            stats={stats}
            isDLWS={isDLWS}
            activeBranch={activeBranch}
            colors={colors}
            onOpenGazette={() => setShowGazetteModal(true)}
          />
        )}
      </div>

      {/* ── MODAL: HIGH RESOLUTION POSTER LIGHTBOX ── */}
      <AcademicPosterModal
        selectedPoster={selectedPoster}
        onClose={() => setSelectedPoster(null)}
      />

      {/* ── MODAL: RESULT GAZETTE / PRINT SUMMARY ── */}
      <AcademicGazetteModal
        isOpen={showGazetteModal}
        onClose={() => setShowGazetteModal(false)}
        currentSchool={currentSchool}
        resultsData={resultsData}
        stats={stats}
        isDLWS={isDLWS}
        colors={colors}
      />
    </div>
  )
}
