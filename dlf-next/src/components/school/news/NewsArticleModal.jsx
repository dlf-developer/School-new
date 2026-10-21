import React from 'react'
import { X, Calendar, ExternalLink } from 'lucide-react'

export default function NewsArticleModal({ article, onClose }) {
  if (!article) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-150 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close Article"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-video w-full bg-gray-100 shrink-0">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-brand-gold text-brand-charcoal text-[10px] font-extrabold uppercase tracking-widest shadow-md">
              {article.sourceBadge}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-4 overflow-y-auto">
          <div className="flex items-center gap-3 text-xs text-brand-muted font-inter">
            <span className="font-bold text-brand-charcoal">{article.source}</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal leading-snug">
            {article.title}
          </h3>

          <div className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed whitespace-pre-line">
            {article.fullText || article.excerpt}
          </div>

          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
              {article.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg bg-gray-100 text-brand-charcoal text-[11px] font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {article.externalLink && (
            <div className="pt-2">
              <a
                href={article.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-greenDeep hover:underline"
              >
                <span>Read Original Article on Source Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
