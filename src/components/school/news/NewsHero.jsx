import React from 'react'
import { Newspaper, Eye, Mail } from 'lucide-react'
import { newsStats } from '../../../data/schools/dlps/newsData'

export default function NewsHero() {
  return (
    <div className="space-y-12">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0e271a] via-[#143e29] to-[#0a1e14] text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-brand-gold/30">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-brand-gold/15 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-gold font-bold text-xs uppercase tracking-widest">
            <Newspaper className="w-3.5 h-3.5 text-brand-gold" />
            <span>Official Press Room &bull; Media Center</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
            DLF in the <span className="italic text-brand-gold font-normal">News</span> &amp; Media Spotlight.
          </h1>

          <p className="text-white/85 text-sm sm:text-base md:text-lg font-inter leading-relaxed max-w-2xl font-medium">
            National rankings, prestigious awards, student scientific breakthroughs, and institutional milestones covered
            across leading national dailies and broadcast networks.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#media-coverage"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-gold hover:bg-brand-goldlight text-brand-charcoal font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer font-sans"
            >
              <Eye className="w-4 h-4" />
              <span>Explore Press Articles</span>
            </a>

            <a
              href="mailto:contactus@dlps.co.in"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/25 transition-all duration-300 backdrop-blur-md cursor-pointer font-sans"
            >
              <Mail className="w-4 h-4" />
              <span>Media &amp; PR Inquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {newsStats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-150 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-greenDeep/10 flex items-center justify-center text-brand-greenDeep shrink-0">
                <Icon className="w-6 h-6 text-brand-greenDeep" />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-greenDeep">{stat.value}</h3>
                <p className="text-xs text-brand-muted font-inter font-semibold mt-0.5">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
