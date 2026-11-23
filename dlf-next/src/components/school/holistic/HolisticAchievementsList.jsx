import React from 'react'
import { Trophy, Flame } from 'lucide-react'

export default function HolisticAchievementsList({ achievementsList = [], theme }) {
  const podiumData = [
    { level: 'International', count: 5, color: 'from-amber-500 to-amber-600', percentage: '12%' },
    { level: 'National', count: 25, color: 'from-orange-500 to-orange-600', percentage: '22%' },
    { level: 'CBSE Zonal', count: 70, color: 'from-emerald-500 to-emerald-600', percentage: '48%' },
    { level: 'State & District', count: 168, color: 'from-blue-600 to-indigo-600', percentage: '100%' },
    { level: 'Inter-School', count: 147, color: 'from-purple-600 to-purple-700', percentage: '88%' },
  ]

  const tournamentHighlights = [
    {
      title: 'World Open Taekwondo',
      achievement: 'Silver Medal',
      year: '2026',
      badge: 'International Podium',
      desc: 'Clinching silver at the prestigious World Open Taekwondo championship against top international contenders.',
    },
    {
      title: 'CBSE National Tennis',
      achievement: 'Gold Medal',
      year: '2026',
      badge: 'National Champion',
      desc: 'Dominant straight-set championship victory at the all-India CBSE National Tennis Tournament.',
    },
    {
      title: 'Asian U-16 Tennis',
      achievement: 'Runner-up',
      year: '2024',
      badge: 'Continental Finalist',
      desc: 'Representing India at the Asian U-16 Tennis Circuit, reaching the championship final.',
    },
    {
      title: 'CBSE North Zone Swimming',
      achievement: '4 Golds (Single Swimmer)',
      year: '2026',
      badge: 'Record Clean Sweep',
      desc: 'Historic sweep with 4 individual gold medals and meet records shattered by one ace swimmer.',
    },
    {
      title: 'Krida Bharti District Skating',
      achievement: '1st, 2nd, 3rd Clean Sweep',
      year: '2025',
      badge: 'Triple Podium',
      desc: 'Absolute dominance in speed skating, capturing gold, silver, and bronze on the same podium.',
    },
    {
      title: 'CBSE Clusters Multi-Sport',
      achievement: '34 Students Qualified',
      year: '2025–26',
      badge: 'Five Sports Contingent',
      desc: 'Record 34 athletes qualified for Nationals across badminton, skating, athletics, basketball, and tennis.',
    },
  ]

  return (
    <div className="space-y-12 pt-2">
      {/* ── SECTION 1: 415 PODIUMS SPORTS ACHIEVERS SHOWCASE (Item 4) ── */}
      <div className="bg-gradient-to-br from-white via-amber-50/20 to-white rounded-3xl border-2 border-brand-gold/30 shadow-xl p-6 sm:p-8 lg:p-10 space-y-8">
        {/* Header Block */}
        <div className="space-y-2 border-b border-gray-150 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-charcoal text-[11px] font-extrabold uppercase tracking-widest border border-brand-gold/30">
            <Flame className="w-3.5 h-3.5 text-brand-gold" />
            <span>Sports Excellence &bull; Athletic Mastery</span>
          </div>
          <h3 className={`font-serif text-2xl sm:text-4xl font-black text-${theme.primary}`}>
            415 podiums in 3 seasons. Two schools. One winning mentality.
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed max-w-3xl font-medium">
            At DLF Schools, competitive athletics is a core discipline of character, stamina, and strategic resilience. Over the last three seasons, our student-athletes have earned an unprecedented 415 podium finishes spanning inter-school competitions to international arenas.
          </p>
        </div>

        {/* Podiums Breakdown by Level - Visual Chart & Counters */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-xs uppercase tracking-widest text-brand-charcoal">
              Podiums Breakdown by Competitive Level
            </h4>
            <span className="text-xs font-serif font-black text-brand-gold">
              Total: 415 Podiums
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
            {podiumData.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-4 rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted block">
                    {item.level}
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-3xl font-black text-brand-charcoal">
                      {item.count}
                    </span>
                    <span className="text-[11px] text-brand-muted font-semibold">podiums</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    style={{ width: item.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Major Tournament Cards */}
        <div className="space-y-4 pt-2">
          <h4 className="font-extrabold text-xs uppercase tracking-widest text-brand-charcoal">
            Featured Championship Milestones
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tournamentHighlights.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[9px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full bg-${theme.primary}/10 text-${theme.primary}`}>
                      {t.badge}
                    </span>
                    <span className="text-[10px] font-black text-brand-gold font-mono">
                      {t.year}
                    </span>
                  </div>

                  <h5 className="font-serif text-base font-bold text-brand-charcoal group-hover:text-brand-gold transition-colors">
                    {t.title}
                  </h5>

                  <div className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                    <Trophy className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span>{t.achievement}</span>
                  </div>

                  <p className="text-[11px] text-brand-muted font-inter leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Footnote */}
        <div className="pt-2 border-t border-gray-150 text-[11px] text-brand-muted font-inter leading-relaxed italic">
          Last three seasons on record: 2023–24, 2025–26 and 2026–27 (to October 2026). Verification available with Director Physical Education &amp; Sports.
        </div>
      </div>

      {/* ── SECTION 2: INDIVIDUAL DELFITE TRAILBLAZERS ── */}
      <div className="space-y-4">
        <div className="space-y-1">
          <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
            Delfite Trailblazers
          </span>
          <h4 className={`font-serif text-2xl font-bold text-${theme.primary}`}>
            Hall of Fame &amp; Multi-Dimensional Achievers
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievementsList.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-150 shadow-sm p-4 flex gap-4 items-center hover:shadow-md transition-shadow"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-16 h-16 rounded-xl object-cover shrink-0 border border-gray-150 shadow-xs"
              />
              <div className="space-y-1">
                <span
                  className={`text-[8px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full bg-${theme.primary}/10 text-${theme.primary}`}
                >
                  {p.achievement}
                </span>
                <h5 className="font-serif text-base font-bold text-brand-charcoal pt-0.5">
                  {p.name}
                </h5>
                <p className="text-[11px] text-brand-muted leading-relaxed line-clamp-2 font-inter">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
