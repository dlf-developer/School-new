import React from 'react'
import { X } from 'lucide-react'

export default function CounsellingLightbox({ selectedImage, onClose }) {
  if (!selectedImage) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-150 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-video w-full bg-gray-100">
          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-8 space-y-3">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
            {selectedImage.tag || selectedImage.label || 'Media Highlight'}
          </span>
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal">
            {selectedImage.title}
          </h4>
          <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed">
            {selectedImage.desc}
          </p>
        </div>
      </div>
    </div>
  )
}
