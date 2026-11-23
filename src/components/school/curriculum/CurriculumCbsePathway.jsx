import React, { useState } from 'react'
import { Cpu, Lightbulb, TrendingUp, Award, BookOpen } from 'lucide-react'
import ImageWithLoader from '../../ImageWithLoader'
import { cbseTabs } from '../../../data/schools/shared/curriculumShared'
import {
  kaushalBodhDomains,
  kaushalVikasCourses,
  cbseStreamsData,
} from '../../../data/schools/dlps/curriculumData'

export default function CurriculumCbsePathway({ theme, currentSchool, curriculumStats = [] }) {
  const [activeTab, setActiveTab] = useState('skill-overview')

  return (
    <div className="space-y-6">
      {/* Stats Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {curriculumStats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <span className={`font-serif text-2xl font-extrabold text-${theme.primary}`}>{stat.val}</span>
            <h4 className="text-[11px] font-bold text-brand-charcoal mt-1">{stat.label}</h4>
            <p className="text-[9px] text-brand-muted font-inter leading-relaxed mt-0.5">{stat.desc}</p>
          </div>
        ))}
      </div>

      {/* Tab Selector */}
      <div className="flex items-center w-full overflow-x-auto no-scrollbar gap-2 sm:gap-4 pb-2 snap-x snap-mandatory">
        {cbseTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 border shrink-0 snap-center cursor-pointer ${
              activeTab === tab.id
                ? `bg-${theme.primary} text-white border-${theme.primary} shadow-md`
                : `bg-white text-brand-charcoal hover:bg-${theme.primary}/5 border-${theme.primary}/10`
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CURRICULAR DETAIL BOARD */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-gray-100 min-h-[350px] relative">
        {/* Tab Panel: Skill Education Overview */}
        {activeTab === 'skill-overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-in fade-in duration-300">
            <div className="space-y-4 sm:space-y-6">
              <div
                className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}
              >
                <Cpu className="w-3.5 h-3.5" /> 21st Century Capabilities
              </div>
              <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
                NEP 2020 Skill Integration
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                Aligned with the vision of the National Education Policy 2020 and the skill education initiatives of CBSE,{' '}
                {currentSchool?.name || 'DLF Public School'} integrates skill-based learning across all stages of schooling
                to prepare students for the demands of the twenty-first century.
              </p>

              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-2">
                <h5 className={`text-[10px] sm:text-xs font-bold text-${theme.primary} uppercase tracking-wider`}>
                  Computational Thinking &amp; AI (Class III onwards)
                </h5>
                <p className="text-xs text-brand-charcoal font-semibold leading-relaxed">
                  Building digital fluency, logical reasoning, and problem-solving through age-appropriate activities and
                  projects.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative">
              <ImageWithLoader
                src="/campus/campus2.jpg"
                alt="DLF Skill Education Studio"
                loading="lazy"
                imgClassName="object-center"
              />
            </div>
          </div>
        )}

        {/* Tab Panel: Kaushal Bodh (VI-VIII) */}
        {activeTab === 'kaushal-bodh' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 sm:space-y-6">
                <div
                  className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}
                >
                  <Lightbulb className="w-3.5 h-3.5" /> Kaushal Bodh (VI–VIII)
                </div>
                <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
                  Experiential Skill Domains
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                  Experiential learning through the domains of Life Forms, Machines and Materials, and Human Services.
                  Each student undertakes projects across all three domains over the academic year, ensuring balanced
                  exposure and holistic development.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative">
                <ImageWithLoader
                  src="/campus/campus3.jpg"
                  alt="Middle School Robotics Studio"
                  loading="lazy"
                  imgClassName="object-center"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {/* Domain 1 */}
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-150 flex flex-col justify-between space-y-4">
                <div>
                  <span
                    className={`text-[9px] uppercase font-bold tracking-widest text-${theme.vibrant} bg-${theme.primary}/5 px-2.5 py-1 rounded-full`}
                  >
                    Compulsory
                  </span>
                  <h5 className="font-serif text-base font-bold text-brand-charcoal mt-3">Work with Life Forms</h5>
                  <ul className="space-y-2 text-xs font-inter font-semibold text-brand-muted mt-4">
                    {kaushalBodhDomains.lifeForms.map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full bg-${theme.accent} mt-1.5 shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Domain 2 */}
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-150 flex flex-col justify-between space-y-4">
                <div>
                  <span
                    className={`text-[9px] uppercase font-bold tracking-widest text-${theme.accent} bg-brand-gold/10 px-2.5 py-1 rounded-full`}
                  >
                    Choice
                  </span>
                  <h5 className="font-serif text-base font-bold text-brand-charcoal mt-3">
                    Work with Machines &amp; Materials
                  </h5>
                  <ul className="space-y-2 text-xs font-inter font-semibold text-brand-muted mt-4">
                    {kaushalBodhDomains.machinesAndMaterials.map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full bg-${theme.accent} mt-1.5 shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Domain 3 */}
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-150 flex flex-col justify-between space-y-4">
                <div>
                  <span
                    className={`text-[9px] uppercase font-bold tracking-widest text-${theme.vibrant} bg-${theme.primary}/5 px-2.5 py-1 rounded-full`}
                  >
                    Compulsory
                  </span>
                  <h5 className="font-serif text-base font-bold text-brand-charcoal mt-3">Work with Human Services</h5>
                  <ul className="space-y-2 text-xs font-inter font-semibold text-brand-muted mt-4">
                    {kaushalBodhDomains.humanServices.map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full bg-${theme.accent} mt-1.5 shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel: Kaushal Vikas (IX-X) */}
        {activeTab === 'kaushal-vikas' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 sm:space-y-6">
                <div
                  className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}
                >
                  <TrendingUp className="w-3.5 h-3.5" /> Kaushal Vikas (IX–X)
                </div>
                <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
                  Secondary Skill Courses
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                  In Classes IX and X, students opt for one skill subject from CBSE-approved courses. These courses bridge
                  classroom learning with industry relevance, practical mastery, and career readiness.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative">
                <ImageWithLoader
                  src="/campus/campus4.jpg"
                  alt="High School Skill Studio"
                  loading="lazy"
                  imgClassName="object-center"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {kaushalVikasCourses.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-150 space-y-2 hover:border-brand-gold/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-${theme.primary}/10 text-${theme.primary}`}
                    >
                      {c.badge}
                    </span>
                  </div>
                  <h5 className="font-serif text-base font-bold text-brand-charcoal">{c.title}</h5>
                  <p className="text-xs text-brand-muted font-inter leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Panel: Streams Offered (XI-XII) */}
        {activeTab === 'streams' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="max-w-2xl space-y-3">
              <div
                className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}
              >
                <Award className="w-3.5 h-3.5" /> Senior Secondary (XI–XII)
              </div>
              <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
                Specialized Streams Offered
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed font-medium">
                Comprehensive subject choices across Science, Commerce, and Humanities. Flexible combinations allow
                cross-disciplinary learning tailored to student aspirations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {cbseStreamsData.map((st, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-3xl p-6 sm:p-7 border border-gray-150 shadow-sm space-y-4 flex flex-col justify-between hover:border-brand-gold/50 transition-colors"
                >
                  <div className="space-y-3">
                    <span
                      className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-${theme.primary}/10 text-${theme.primary} inline-block`}
                    >
                      {st.badge}
                    </span>
                    <h5 className="font-serif text-lg font-bold text-brand-charcoal">{st.stream}</h5>
                    <p className="text-xs text-brand-muted font-inter leading-relaxed">{st.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-gray-200 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-brand-muted block">Core Subjects:</span>
                    <ul className="space-y-1.5 text-xs font-inter text-brand-charcoal font-semibold">
                      {st.subjects.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-${theme.accent} mt-1.5 shrink-0`} />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
