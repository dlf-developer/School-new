import React from 'react'
import { useParams } from 'react-router-dom'
import { ArrowRight, Leaf, Users, Globe, ArrowUpRight } from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'

const ICON_MAP = { Leaf, Users, Globe, ArrowRight }

export default function Pillars() {
  const { schoolId } = useParams()
  const { global, schools } = useSiteData()

  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]
  const theme = currentSchool.theme

  const cardBgClass = activeBranch === 'dlf-sahibabad' ? 'bg-[#1b3518]' : 'bg-[#2c204d]'

  const { sectionLabel, sectionTitle, sectionSubtitle, cards } = global.pillars || {}

  return (
    <section id="zero-waste" className={`py-16 sm:py-24 bg-${theme.primary} text-brand-bg relative overflow-hidden`}>
      {/* Floating shapes */}
      <div className={`absolute right-0 bottom-0 w-[30rem] sm:w-[50rem] h-[30rem] sm:h-[50rem] rounded-full bg-${theme.vibrant}/10 blur-3xl -z-10`}></div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <span className={`text-xs uppercase tracking-widest font-bold text-${theme.accent}`}>
              {sectionLabel}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">{sectionTitle}</h3>
            <p className="text-xs sm:text-sm text-brand-bg/80 leading-relaxed font-inter">
              {sectionSubtitle}
            </p>
          </div>
          <div className="shrink-0 w-full sm:w-auto">
            <a
              href="#procedure"
              className={`group flex items-center justify-center gap-2 border border-${theme.accent}/30 hover:border-${theme.accent}/80 px-6 py-3 rounded-xl text-xs font-bold text-white uppercase tracking-wider transition-all duration-300 w-full sm:w-auto`}
            >
              <span>Explore Our Pillars</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* GRID OF UNIQUE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {(cards || []).map((card) => {
            const Icon = ICON_MAP[card.icon] || Leaf
            const iconColorClass = card.iconTheme === 'purple'
              ? 'bg-brand-purpleDeep/20 text-brand-purpleVibrant'
              : `bg-${theme.accent}/15 text-${theme.accent}`

            return (
              <div
                key={card.id}
                className={`${cardBgClass} border border-white/10 rounded-2xl p-6 sm:p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group min-h-[320px] relative overflow-hidden shadow-lg`}
              >
                <div>
                  <div className={`w-10 h-10 ${iconColorClass} rounded-xl flex items-center justify-center mb-5`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">{card.title}</h4>
                  <p className="text-xs sm:text-sm text-brand-bg/75 mt-3 leading-relaxed font-inter">
                    {card.desc}
                  </p>
                </div>
                <div className={`flex items-center gap-1.5 text-xs font-semibold text-${theme.accent} mt-6 uppercase tracking-wider group-hover:text-white transition-colors`}>
                  Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
