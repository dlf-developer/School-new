import React, { useState, useRef } from 'react'
import { useSiteData } from '../../hooks/useSiteData'
import { Upload, ImageIcon, Trash2, Link as LinkIcon, AlertCircle, Copy, Check } from 'lucide-react'

export default function MediaLibraryEditor() {
  const { global, saveGlobal } = useSiteData()
  const library = global.imageLibrary || []
  
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [copiedId, setCopiedId] = useState(null)
  
  const fileInputRef = useRef(null)

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
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename, base64 })
        })

        if (!response.ok) {
          throw new Error('Upload failed on server')
        }

        const data = await response.json()
        if (data.url) {
          // Append to library
          const newImage = {
            id: Date.now().toString(),
            name: filename,
            url: data.url,
            createdAt: Date.now()
          }
          const updatedLibrary = [newImage, ...library]
          saveGlobal('imageLibrary', updatedLibrary)
          
          if (fileInputRef.current) fileInputRef.current.value = ''
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

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this image from the library?')) {
      const updatedLibrary = library.filter(img => img.id !== id)
      saveGlobal('imageLibrary', updatedLibrary)
    }
  }

  const copyUrl = (url, id) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
        <div className="p-2 bg-brand-gold/10 rounded-lg">
          <ImageIcon className="h-5 w-5 text-brand-gold" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white tracking-wide">Media Library</h2>
          <p className="text-xs text-gray-400 mt-0.5">Upload and manage images used across the website.</p>
        </div>
      </div>

      {/* Upload Zone */}
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center transition-all cursor-pointer min-h-[200px] ${
          isDragging 
            ? 'border-brand-gold bg-brand-gold/5 scale-[1.02]' 
            : 'border-gray-800 bg-[#0a0a0f] hover:border-gray-700 hover:bg-gray-900/50'
        }`}
      >
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden" 
          accept="image/*"
        />
        
        {isUploading ? (
          <div className="flex flex-col items-center gap-4">
            <div className="h-8 w-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs font-semibold text-brand-gold uppercase tracking-widest animate-pulse">Uploading...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="h-12 w-12 rounded-full bg-gray-900 flex items-center justify-center">
              <Upload className="h-5 w-5 text-gray-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-300">Click to upload or drag & drop</p>
              <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG or WebP (max. 5MB)</p>
            </div>
            {uploadError && (
              <p className="text-xs text-red-400 mt-2 flex items-center gap-1 bg-red-400/10 px-3 py-1 rounded">
                <AlertCircle className="h-3 w-3" /> {uploadError}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Grid of Images */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-2">
          Library Assets <span className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full text-[10px]">{library.length}</span>
        </h3>
        
        {library.length === 0 ? (
          <div className="text-center py-12 border border-gray-800/50 rounded-xl bg-[#0a0a0f]/50">
            <ImageIcon className="h-8 w-8 text-gray-600 mx-auto mb-3" />
            <p className="text-sm text-gray-400 font-medium">Your library is empty</p>
            <p className="text-xs text-gray-600 mt-1">Upload images above to see them here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {library.map((img) => (
              <div key={img.id} className="group relative bg-[#0a0a0f] rounded-xl border border-gray-800 overflow-hidden hover:border-brand-gold/50 transition-colors">
                <div className="aspect-square bg-gray-900/50 p-2 flex items-center justify-center">
                  <img src={img.url} alt={img.name} className="max-w-full max-h-full object-contain rounded-lg" />
                </div>
                <div className="p-3 border-t border-gray-800">
                  <p className="text-[11px] text-gray-300 font-medium truncate" title={img.name}>{img.name}</p>
                </div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 backdrop-blur-sm">
                  <button
                    onClick={() => copyUrl(img.url, img.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 text-xs font-medium text-white hover:bg-gray-700 transition-colors"
                  >
                    {copiedId === img.id ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                    {copiedId === img.id ? 'Copied' : 'Copy URL'}
                  </button>
                  <button
                    onClick={() => handleDelete(img.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 text-xs font-medium text-red-400 hover:bg-red-500/20 transition-colors"
                  >
                    <Trash2 className="h-3 w-3" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
