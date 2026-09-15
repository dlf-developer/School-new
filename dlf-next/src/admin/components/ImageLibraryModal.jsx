import React from 'react'
import { useSiteData } from '../../hooks/useSiteData'
import { X, ImageIcon } from 'lucide-react'

export default function ImageLibraryModal({ isOpen, onClose, onSelect }) {
  const { global } = useSiteData()
  const library = global.imageLibrary || []

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Dialog */}
      <div className="relative bg-[#0a0a10] border border-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800/80 bg-[#07070c]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-gold/10 rounded-lg">
              <ImageIcon className="h-5 w-5 text-brand-gold" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-wide">Select Image</h2>
              <p className="text-xs text-gray-400">Choose an image from your media library</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
          {library.length === 0 ? (
            <div className="text-center py-12">
              <ImageIcon className="h-12 w-12 text-gray-700 mx-auto mb-4" />
              <p className="text-base text-gray-300 font-medium">Your library is empty</p>
              <p className="text-sm text-gray-500 mt-1 mb-6">Upload images in the Media Library section first.</p>
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {library.map((img) => (
                <button
                  key={img.id}
                  onClick={() => {
                    onSelect(img.url)
                    onClose()
                  }}
                  className="group relative bg-[#07070c] rounded-xl border border-gray-800 overflow-hidden hover:border-brand-gold hover:shadow-[0_0_15px_rgba(197,155,39,0.15)] transition-all text-left flex flex-col"
                >
                  <div className="aspect-square bg-gray-900/50 p-2 flex items-center justify-center">
                    <img src={img.url} alt={img.name} className="max-w-full max-h-full object-contain rounded-lg transition-transform group-hover:scale-105" />
                  </div>
                  <div className="p-3 border-t border-gray-800">
                    <p className="text-[11px] text-gray-300 font-medium truncate" title={img.name}>{img.name}</p>
                  </div>
                  
                  {/* Select Overlay */}
                  <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-brand-gold text-black text-xs font-bold px-3 py-1.5 rounded shadow-lg translate-y-2 group-hover:translate-y-0 transition-all">
                      Select
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </div>
  )
}
