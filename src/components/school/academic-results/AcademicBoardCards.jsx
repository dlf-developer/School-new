import React from 'react'
import { Trophy, Medal, Eye, ZoomIn, Download } from 'lucide-react'

export default function AcademicBoardCards({
  activeBoardResults = [],
  isDLWS = false,
  currentSchool = null,
  onSelectPoster,
}) {
  return (
    <div className="space-y-10 sm:space-y-12">
      {activeBoardResults.map((card, idx) => (
        <div
          key={card.id || idx}
          className={`${
            isDLWS
              ? 'bg-gradient-to-br from-purple-50/50 via-white to-amber-50/30 border-2 border-brand-purpleDeep/25'
              : 'bg-gradient-to-br from-amber-50/50 via-white to-green-50/40 border-2 border-brand-gold/30'
          } rounded-3xl shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10 relative`}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Column: Official Poster with Click-to-Enlarge Lightbox */}
            <div className="w-full lg:w-5/12 flex flex-col items-center">
              <div
                onClick={() => onSelectPoster && onSelectPoster(card)}
                className={`group relative rounded-2xl overflow-hidden shadow-2xl border-4 ${
                  isDLWS
                    ? 'border-brand-purpleDeep/30 hover:border-brand-purpleDeep'
                    : 'border-brand-gold/40 hover:border-brand-gold'
                } cursor-pointer transition-all duration-300 max-w-sm w-full bg-white`}
              >
                <img
                  src={card.image}
                  alt={`${currentSchool?.name || 'DLF School'} - ${card.tag}`}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-[2px]">
                  <div className="w-10 h-10 rounded-full bg-brand-gold text-brand-charcoal flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                  <span>Click to Enlarge Poster</span>
                </div>

                <div
                  className={`absolute top-3 left-3 ${
                    isDLWS ? 'bg-brand-purpleDeep/95' : 'bg-brand-greenDeep/95'
                  } backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md border border-white/20`}
                >
                  {card.grade || card.shortLabel} &bull; 2026 Declaration
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
                <h2
                  className={`font-serif text-2xl sm:text-4xl font-black ${
                    isDLWS ? 'text-brand-purpleDeep' : 'text-brand-greenDeep'
                  } tracking-tight`}
                >
                  {card.headline}
                </h2>
                <p className="text-xs sm:text-sm text-brand-charcoal/80 font-inter leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* School Topper Spotlight */}
              {card.topper && (
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-gold/40 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold px-2.5 py-0.5 rounded-full bg-brand-gold/15">
                      {card.topper.role}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-black text-brand-charcoal">
                      {card.topper.name} —{' '}
                      <span
                        className={`${
                          isDLWS ? 'text-brand-purpleDeep' : 'text-brand-greenDeep'
                        } font-extrabold`}
                      >
                        {card.topper.score}
                      </span>
                    </h3>
                    <p className="text-xs font-semibold text-brand-charcoal/90">
                      {card.topper.highlight}
                    </p>
                  </div>

                  <div
                    className={`w-14 h-14 rounded-2xl bg-brand-gold/15 flex items-center justify-center shrink-0 ${
                      isDLWS ? 'text-brand-purpleDeep' : 'text-brand-greenDeep'
                    }`}
                  >
                    <Medal className="w-8 h-8 text-brand-gold" />
                  </div>
                </div>
              )}

              {/* 4-Metric Grid from Poster */}
              {card.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {card.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-white p-3.5 rounded-xl border border-gray-150 text-center shadow-sm"
                    >
                      <span className="text-[9.5px] uppercase font-bold text-brand-muted block">
                        {m.label}
                      </span>
                      <span
                        className={`font-serif text-xl sm:text-2xl font-black ${
                          mIdx === 1
                            ? 'text-brand-gold'
                            : mIdx === 3
                            ? isDLWS
                              ? 'text-brand-purpleVibrant'
                              : 'text-brand-greenVibrant'
                            : isDLWS
                            ? 'text-brand-purpleDeep'
                            : 'text-brand-greenDeep'
                        }`}
                      >
                        {m.value}
                      </span>
                      <span className="text-[9px] text-brand-muted block">{m.sub}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Meritorious Achievers List */}
              {card.roster && card.roster.length > 0 && (
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
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-brand-charcoal shadow-2xs"
                      >
                        <span>{st.name}</span>
                        <strong
                          className={`${
                            isDLWS ? 'text-brand-purpleDeep' : 'text-brand-greenDeep'
                          } font-serif`}
                        >
                          {st.score}
                        </strong>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action CTA */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectPoster && onSelectPoster(card)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${
                    isDLWS
                      ? 'bg-brand-purpleDeep hover:bg-brand-purpleVibrant'
                      : 'bg-brand-greenDeep hover:bg-brand-greenVibrant'
                  } text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm`}
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
  )
}
