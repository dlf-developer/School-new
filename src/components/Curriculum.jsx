import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BookOpen, Globe } from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'
import { dlpsCurriculumStats } from '../data/schools/dlps/curriculumData'
import { dlwsCurriculumStats } from '../data/schools/dlws/curriculumData'
import CurriculumHomeView from './school/curriculum/CurriculumHomeView'
import CurriculumCbsePathway from './school/curriculum/CurriculumCbsePathway'
import CurriculumCambridgePathway from './school/curriculum/CurriculumCambridgePathway'

export default function Curriculum({ isHomePage = false }) {
  const { schoolId, pathway } = useParams()
  const { schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const isDLWS = activeBranch === 'dlf-greater-noida'
  const currentSchool = schools[activeBranch]
  const schoolName = currentSchool?.name || 'DLF Public School'

  const [homePathway] = useState(pathway ? pathway.toLowerCase() : 'cbse')
  const activePathway = isDLWS ? 'cbse' : isHomePage ? homePathway : pathway ? pathway.toLowerCase() : 'cbse'

  const theme = currentSchool?.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27',
  }

  const curriculumStats = isDLWS ? dlwsCurriculumStats : dlpsCurriculumStats

  return (
    <section
      id="curriculum"
      className={`${
        isHomePage ? 'py-8 sm:py-10' : 'pt-36 sm:pt-40 pb-16'
      } bg-transparent relative overflow-hidden text-brand-charcoal selection:bg-brand-gold/30 font-sans`}
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full ambient-glow-1 -translate-y-1/2 opacity-40" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full ambient-glow-2 opacity-30" />

      <div className="w-[96%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        {isHomePage ? (
          <CurriculumHomeView
            theme={theme}
            isDLWS={isDLWS}
            activeBranch={activeBranch}
            schoolName={schoolName}
            curriculumStats={curriculumStats}
          />
        ) : (
          <>
            {/* Pathway Switcher Buttons on Dedicated Page */}
            {!isDLWS ? (
              <div className="flex flex-wrap justify-center items-center gap-3">
                <Link
                  to={`/school/${activeBranch}/curriculum/cbse`}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                    activePathway === 'cbse'
                      ? `bg-${theme.primary} text-white border-${theme.primary} shadow-md`
                      : `bg-white text-brand-charcoal hover:bg-gray-50 border-gray-200`
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  CBSE Pathway
                </Link>
                <Link
                  to={`/school/${activeBranch}/curriculum/cambridge`}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                    activePathway === 'cambridge'
                      ? `bg-${theme.primary} text-white border-${theme.primary} shadow-md`
                      : `bg-white text-brand-charcoal hover:bg-gray-50 border-gray-200`
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  Cambridge Pathway
                </Link>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center items-center gap-3">
                <Link
                  to={`/school/${activeBranch}/curriculum`}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer bg-${theme.primary} text-white border-${theme.primary} shadow-md`}
                >
                  <BookOpen className="w-4 h-4" />
                  Curriculum Overview
                </Link>
              </div>
            )}

            {/* Top Header for Dedicated Page */}
            <div className="text-center max-w-4xl mx-auto space-y-2">
              <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
                {isDLWS
                  ? 'Curriculum Overview'
                  : activePathway === 'cbse'
                  ? 'CBSE Pathway'
                  : 'Cambridge International School'}
              </span>
              <h3 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-${theme.primary}`}>
                {isDLWS
                  ? 'Academic Progression & Skill Core'
                  : activePathway === 'cbse'
                  ? 'Academic Progression & Skill Core'
                  : 'The Cambridge Pathway'}
              </h3>
              <div className={`w-12 h-[2.5px] bg-${theme.accent} mx-auto mt-2`} />
              <div className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium text-center max-w-3xl mx-auto pt-1">
                <p>
                  {isDLWS || activePathway === 'cbse'
                    ? 'Affiliated to the Central Board of Secondary Education (CBSE) and aligned with NEP 2020. Our progressive curriculum combines academic excellence with competency-based learning, critical thinking, and future-ready skill education across all stages.'
                    : 'Empowering future-ready global leaders through an internationally recognized Cambridge curriculum. Developing intellectual inquiry, independent thought, cultural fluency, and academic rigour from early years to secondary education.'}
                </p>
              </div>
            </div>

            {/* Render Selected Pathway */}
            {activePathway === 'cbse' ? (
              <CurriculumCbsePathway
                theme={theme}
                currentSchool={currentSchool}
                curriculumStats={curriculumStats}
              />
            ) : (
              <CurriculumCambridgePathway theme={theme} currentSchool={currentSchool} />
            )}
          </>
        )}
      </div>
    </section>
  )
}
