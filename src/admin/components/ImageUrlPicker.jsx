import React, { useState } from 'react'
import { Image as ImageIcon, Link as LinkIcon, Check, AlertCircle } from 'lucide-react'

export default function ImageUrlPicker({ label, value, onChange, description = '', className = '' }) {
  const [isValid, setIsValid] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  const handleUrlChange = (val) => {
    onChange(val)
    setUploadError('')
    if (!val) {
      setIsValid(true)
      return
    }
    const isPath = val.startsWith('/')
    const isUrl = val.startsWith('http://') || val.startsWith('https://')
    setIsValid(isPath || isUrl)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer?.files?.[0]
    if (file) {
      uploadFile(file)
    }
  }

  const handleFileChange = (e) => {
    const file = e.target?.files?.[0]
    if (file) {
      uploadFile(file)
    }
  }

  const uploadFile = (file) => {
    if (!file.type.startsWith('image/')) {
      setUploadError('Only image files are accepted')
      return
    }

    setIsUploading(true)
    setUploadError('')

    const reader = new FileReader()
    reader.onload = async (event) => {
      try {
        const base64 = event.target.result
        const filename = file.name

        const response = await fetch('/api/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ filename, base64 })
        })

        if (!response.ok) {
          throw new Error('Upload failed on server')
        }

        const data = await response.json()
        if (data.url) {
          onChange(data.url)
          setIsValid(true)
        } else {
          throw new Error(data.error || 'Invalid server response')
        }
      } catch (err) {
        setUploadError(err.message || 'Error uploading file')
      } finally {
        setIsUploading(false)
      }
    }
    reader.onerror = () => {
      setUploadError('FileReader failed')
      setIsUploading(false)
    }
    reader.readAsDataURL(file)
  }

  // Create unique id for file input
  const inputId = `file-input-${label ? label.replace(/\s+/g, '-').toLowerCase() : 'image'}`

  return (
    <div 
      className={`flex flex-col gap-1.5 ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {label && (
        <label className="text-xs font-semibold text-gray-300 tracking-wider uppercase flex items-center gap-1.5">
          <ImageIcon className="h-3.5 w-3.5 text-brand-gold" />
          {label}
        </label>
      )}
      {description && (
        <span className="text-xs text-gray-500 mb-1">{description}</span>
      )}

      <div className={`relative rounded-xl border transition-all ${
        isDragging 
          ? 'border-brand-gold bg-brand-gold/5 shadow-[0_0_15px_rgba(197,155,39,0.15)]' 
          : 'border-gray-800 bg-[#0a0a0f]/50'
      }`}>
        {/* Hidden File Input */}
        <input
          type="file"
          id={inputId}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />

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
            className="w-full bg-transparent text-white pl-9 pr-24 py-2.5 text-xs focus:outline-none placeholder-gray-600"
          />
          <label 
            htmlFor={inputId}
            className="absolute right-2 px-3 py-1.5 rounded bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-wider cursor-pointer border border-brand-gold/20 transition-all"
          >
            Browse
          </label>
        </div>

        {/* Preview / Drop Zone */}
        <div className="p-3 min-h-[140px] flex flex-col items-center justify-center relative overflow-hidden">
          {isUploading ? (
            <div className="flex flex-col items-center justify-center gap-2 text-gray-400 py-6">
              <span className="h-6 w-6 border-2 border-brand-gold border-t-transparent rounded-full animate-spin"></span>
              <span className="text-[11px] font-semibold uppercase tracking-wider">Uploading to public folder...</span>
            </div>
          ) : uploadError ? (
            <div className="text-center py-6 flex flex-col items-center justify-center text-red-400 gap-1.5">
              <AlertCircle className="h-6 w-6 animate-bounce" />
              <span className="text-xs font-semibold">{uploadError}</span>
              <button 
                type="button" 
                onClick={() => setUploadError('')}
                className="text-[10px] underline text-gray-500 hover:text-gray-400"
              >
                Clear Error
              </button>
            </div>
          ) : value ? (
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
                  <p className="text-[10px] text-gray-300 text-center px-4">
                    Drag new file here or click Browse to replace
                  </p>
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
              <ImageIcon className="h-8 w-8 text-gray-700 animate-pulse" />
              <div>
                <p className="text-xs font-semibold text-gray-400">Drag & Drop Image Here</p>
                <p className="text-[10px] text-gray-600 mt-0.5">Or use the Browse button above</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
