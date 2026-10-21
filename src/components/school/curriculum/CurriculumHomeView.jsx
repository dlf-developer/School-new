import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Globe, ArrowRight } from 'lucide-react'
import ImageWithLoader from '../../ImageWithLoader'
import { cbseTabs, homeCbsePointerData } from '../../../data/schools/shared/curriculumShared'

export default function CurriculumHomeView({
  theme,
  isDLWS = false,
  activeBranch = 'dlf-sahibabad',
  schoolName = 'DLF Public School',
  curriculumStats = [],
}) {
  const [activeTab, setActiveTab] = useState('skill-overview')

  const currentHomeCbse = homeCbsePointerData[activeTab] || homeCbsePointerData['skill-overview']

  const cbsePathwayImage = {
    src: isDLWS ? '/dlws.jpeg' : '/campus/campus2.jpg',
    alt: isDLWS ? 'DLF World School CBSE & Skill Innovation' : 'CBSE & NEP 2020 Academic & Skill Core',
    tag: isDLWS ? 'DLWS CBSE' : 'CBSE Pathway',
  }

  return (
    <div className="space-y-6">
      {/* Top Header for Homepage */}
      <div className="text-center max-w-4xl mx-auto space-y-2">
        <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
          {!isDLWS ? 'Curriculum Excellence' : 'CBSE Pathway'}
        </span>
        <h3 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-${theme.primary}`}>
          {!isDLWS ? 'Academic Pathways' : 'Academic Progression & Skill Core'}
        </h3>
        <div className={`w-12 h-[2.5px] bg-${theme.accent} mx-auto mt-2`} />
        {isDLWS && (
          <div className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium text-center max-w-3xl mx-auto pt-1">
            <p>
              Affiliated to the Central Board of Secondary Education (CBSE) and aligned with NEP 2020. Our progressive
              curriculum combines academic excellence with competency-based learning, critical thinking, and
              future-ready skill education across all stages.
            </p>
          </div>
        )}
      </div>

      {/* 2 Big Redirect Buttons for DLPS (HOMEPAGE ONLY) */}
      {!isDLWS && (
        <div className="flex flex-wrap justify-center items-center gap-4 pt-1">
          <Link
            to={`/school/${activeBranch}/curriculum/cbse`}
            className="flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 border-2 bg-brand-greenDeep text-white border-brand-greenDeep hover:bg-brand-greenVibrant hover:border-brand-greenVibrant shadow-md hover:shadow-lg cursor-pointer group"
          >
            <BookOpen className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            <span>CBSE Pathway</span>
          </Link>

          <Link
            to={`/school/${activeBranch}/curriculum/cambridge`}
            className="flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 border-2 bg-brand-greenDeep text-white border-brand-greenDeep hover:bg-brand-greenVibrant hover:border-brand-greenVibrant shadow-md hover:shadow-lg cursor-pointer group"
          >
            <Globe className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            <span>Cambridge Pathway</span>
          </Link>
        </div>
      )}

      {/* Stats Ribbon - 4 Stat Cards (DLWS only) */}
      {isDLWS && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {curriculumStats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm">
              <span className={`font-serif text-2xl sm:text-3xl font-extrabold text-${theme.primary}`}>
                {stat.val}
              </span>
              <h4 className="text-[11px] font-bold text-brand-charcoal mt-1">{stat.label}</h4>
              <p className="text-[9px] text-brand-muted font-inter leading-relaxed mt-0.5">{stat.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* DLWS keeps the tabs + card component. DLPS renders the feature picture */}
      {isDLWS ? (
        <div className="space-y-5">
          {/* 4 Tabs Selector */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            {cbseTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 border shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? `bg-${theme.primary} text-white border-${theme.primary} shadow-md`
                    : `bg-white text-brand-charcoal hover:bg-${theme.primary}/5 border-gray-200`
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Summary Card with 3 Pointer Cards + Single CBSE Pathway Image */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Text & 3 Pointers */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span
                    className={`text-[10px] uppercase font-extrabold tracking-widest text-${theme.vibrant} bg-${theme.primary}/5 px-3 py-1 rounded-full inline-block mb-2`}
                  >
                    {currentHomeCbse.badge}
                  </span>
                  <h4 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
                    {currentHomeCbse.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-muted font-inter font-medium leading-relaxed mt-1">
                    {currentHomeCbse.summary}
                  </p>
                </div>

                {/* 3 Pointer Cards Stack */}
                <div className="space-y-2.5 pt-1">
                  {currentHomeCbse.pointers.map((ptr, pIdx) => {
                    const IconComponent = ptr.icon
                    return (
                      <div
                        key={pIdx}
                        className="bg-gray-50/80 rounded-2xl p-3.5 sm:p-4 border border-gray-150 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300 flex items-start gap-3.5"
                      >
                        <div
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center shrink-0 mt-0.5`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5 flex-1">
                          <h5 className="font-serif text-xs sm:text-sm font-bold text-brand-charcoal leading-snug">
                            {ptr.title}
                          </h5>
                          <p className="text-[11px] sm:text-xs text-brand-muted font-inter leading-relaxed font-medium">
                            {ptr.desc}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Right Column: Single Fixed CBSE Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-gray-100 group">
                  <ImageWithLoader
                    src={cbsePathwayImage.src}
                    alt={cbsePathwayImage.alt}
                    loading="lazy"
                    imgClassName="group-hover:scale-105 transition-transform duration-700 object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                      {cbsePathwayImage.tag}
                    </span>
                    <span className="text-[9px] font-bold text-white/90">{schoolName}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* DLPS: Clean Picture at 50% Size with No Tags */
        <div className="w-full sm:w-3/5 md:w-1/2 max-w-2xl mx-auto pt-2">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50 aspect-[16/10]">
            <ImageWithLoader
              src="/7C1A1493.jpg"
              alt="DLF Public School Academic Pathways"
              imgClassName="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* View More External Pill Button (DLWS only) */}
      {isDLWS && (
        <div className="text-center pt-3">
          <Link
            to={`/school/${activeBranch}/curriculum`}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-charcoal text-white hover:bg-brand-greenDeep transition-all duration-300 shadow-md group cursor-pointer"
          >
            <span>View Full Curriculum &amp; Academic Pathways</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      )}
    </div>
  )
}
