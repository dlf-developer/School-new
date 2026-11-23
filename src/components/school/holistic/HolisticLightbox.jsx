import React from "react";
import { X } from "lucide-react";

export default function HolisticLightbox({ lightboxImage, onClose }) {
  if (!lightboxImage) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 cursor-pointer border-none outline-none z-10"
        aria-label="Close photo view"
      >
        <X className="w-6 h-6" />
      </button>
      <div
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={lightboxImage.src}
          alt={lightboxImage.title || "Full photo preview"}
          className="max-h-[78vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10 bg-black/40"
        />
        {(lightboxImage.title || lightboxImage.caption) && (
          <div className="mt-3 text-center px-5 py-2.5 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 max-w-xl">
            <h4 className="text-white font-serif text-base sm:text-lg font-bold">
              {lightboxImage.title}
            </h4>
            {lightboxImage.caption && (
              <p className="text-gray-300 text-xs mt-0.5 font-sans">
                {lightboxImage.caption}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
