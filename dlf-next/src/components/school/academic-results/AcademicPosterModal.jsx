import React from 'react'
import { X, Download } from 'lucide-react'

export default function AcademicPosterModal({ selectedPoster, onClose }) {
  if (!selectedPoster) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[95vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white cursor-pointer transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        <img
          src={selectedPoster.image}
          alt={`DLF School ${selectedPoster.tag || ''} Official Declaration`}
          className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/20"
        />

        <div className="flex items-center gap-4 mt-4">
          <a
            href={selectedPoster.image}
            download={selectedPoster.downloadName || 'DLF-Board-Result-2026.jpg'}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-gold text-brand-charcoal font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-yellow-400 transition-all"
          >
            <Download className="w-4 h-4" />
            Download Original Gazette
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
