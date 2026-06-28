import React, { useState } from 'react'
import { Image as ImageIcon, Link as LinkIcon, Check, AlertCircle } from 'lucide-react'
import ImageLibraryModal from './ImageLibraryModal'

export default function ImageUrlPicker({ label, value, onChange, description = '', className = '' }) {
  const [isValid, setIsValid] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleUrlChange = (val) => {
    onChange(val)
    if (!val) {
      setIsValid(true)
      return
    }
    const isPath = val.startsWith('/')
    const isUrl = val.startsWith('http://') || val.startsWith('https://')
    setIsValid(isPath || isUrl)
  }

  const handleSelectFromLibrary = (url) => {
    handleUrlChange(url)
  }

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-xs font-semibold text-gray-300 tracking-wider uppercase flex items-center gap-1.5">
          <ImageIcon className="h-3.5 w-3.5 text-brand-gold" />
          {label}
        </label>
      )}
      {description && (
        <span className="text-xs text-gray-500 mb-1">{description}</span>
      )}

      <div className="relative rounded-xl border border-gray-800 bg-[#0a0a0f]/50 transition-all">
        {/* Text Input Row */}
        <div className="relative flex items-center border-b border-gray-800/60">
          <span className="absolute left-3 text-gray-600">
            <LinkIcon className="h-4 w-4" />
          </span>
          <input
            type="text"
            value={value || ''}
            onChange={(e) => handleUrlChange(e.target.value)}
            placeholder="e.g. /images/cover.jpg or https://..."
            className="w-full bg-transparent text-white pl-9 pr-32 py-2.5 text-xs focus:outline-none placeholder-gray-600"
          />
          <button 
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="absolute right-2 px-3 py-1.5 rounded bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-wider cursor-pointer border border-brand-gold/20 transition-all flex items-center gap-1"
          >
            <ImageIcon className="h-3 w-3" />
            Library
          </button>
        </div>

        {/* Preview Zone */}
        <div className="p-3 min-h-[140px] flex flex-col items-center justify-center relative overflow-hidden">
          {value ? (
            isValid ? (
              <div className="relative group max-w-full">
                <img
                  src={value}
                  alt="Preview"
                  className="max-h-[160px] max-w-full object-contain rounded border border-gray-800"
                  onError={() => setIsValid(false)}
                />
                <div className="absolute top-2 right-2 bg-green-500/80 text-white px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                  <Check className="h-3 w-3" /> Ready
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-200 rounded">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-brand-gold text-black text-[10px] font-bold uppercase tracking-wider rounded shadow-lg transition-transform scale-95 group-hover:scale-100"
                  >
                    Select Different Image
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 flex flex-col items-center justify-center text-red-400 gap-1.5">
                <AlertCircle className="h-6 w-6" />
                <span className="text-xs font-medium">Unable to load image preview</span>
                <span className="text-[10px] text-gray-500 max-w-[240px]">Ensure path is relative (e.g. /image.png) or starts with http/https</span>
              </div>
            )
          ) : (
            <div className="text-center py-6 flex flex-col items-center justify-center text-gray-500 gap-2">
              <ImageIcon className="h-8 w-8 text-gray-700" />
              <div>
                <p className="text-xs font-semibold text-gray-400">No Image Selected</p>
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="text-[10px] text-brand-gold hover:text-brand-gold/80 mt-1 uppercase tracking-wider font-bold"
                >
                  Click to select from Library
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <ImageLibraryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelect={handleSelectFromLibrary} 
      />
    </div>
  )
}
