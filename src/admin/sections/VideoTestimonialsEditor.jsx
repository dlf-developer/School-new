import React, { useState, useEffect } from 'react'
import { useSiteData } from '../../hooks/useSiteData'
import FieldEditor from '../components/FieldEditor'
import CardRepeater from '../components/CardRepeater'
import ImageUrlPicker from '../components/ImageUrlPicker'
import SaveBar from '../components/SaveBar'
import {
  Video,
  Play,
  Upload,
  Sparkles,
  ExternalLink,
  X,
  Clock,
  User,
  Quote,
  Tag,
  CheckCircle2,
  FileVideo
} from 'lucide-react'

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}
import {
  parseYouTubeId,
  getYouTubeThumbnail,
  parseInstagramCode,
  getInstagramEmbedUrl,
  detectVideoType,
  resolveAutoThumbnail,
  extractVideoFrame
} from '../../utils/videoHelper'

export default function VideoTestimonialsEditor() {
  const { global, saveGlobal, resetGlobal } = useSiteData()
  const [data, setData] = useState(global.videoTestimonials || {
    sectionLabel: "Community Voices",
    sectionTitle: "Video Testimonials",
    sectionSubtitle: "Hear directly from our parents, alumni, and students about their educational journeys at DLF Schools.",
    satisfactionBadge: "Parent Satisfaction",
    videos: []
  })
  const [isDirty, setIsDirty] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [previewVideo, setPreviewVideo] = useState(null)

  useEffect(() => {
    if (global.videoTestimonials) {
      setData(global.videoTestimonials)
      setIsDirty(false)
    }
  }, [global.videoTestimonials])

  const handleFieldChange = (field, value) => {
    setData(prev => ({ ...prev, [field]: value }))
    setIsDirty(true)
  }

  const handleUpdateVideos = (updatedVideos) => {
    setData(prev => ({ ...prev, videos: updatedVideos }))
    setIsDirty(true)
  }

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      saveGlobal('videoTestimonials', data)
      setIsSaving(false)
      setIsDirty(false)
    }, 400)
  }

  const handleReset = () => {
    if (confirm('Reset Video Testimonials to original defaults?')) {
      resetGlobal('videoTestimonials')
      setData(global.videoTestimonials)
      setIsDirty(false)
    }
  }

  const handleFileUpload = async (e, updateField, item) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 50 * 1024 * 1024) {
      alert('Video file exceeds 50MB. For larger videos, consider uploading to YouTube or hosting on a CDN and pasting the link.')
      return
    }

    const reader = new FileReader()
    reader.onload = async (uploadEvent) => {
      const result = uploadEvent.target?.result
      if (result) {
        updateField('videoUrl', result)
        updateField('videoType', 'upload')
        
        // Auto-extract thumbnail frame if empty
        if (!item?.thumbnail) {
          const frame = await extractVideoFrame(file)
          if (frame) updateField('thumbnail', frame)
        }
      }
    }
    reader.readAsDataURL(file)
  }

  const videoTypeOptions = [
    { label: 'YouTube (Video / Shorts)', value: 'youtube' },
    { label: 'Instagram (Reel / Post)', value: 'instagram' },
    { label: 'Uploaded Video / MP4 Link', value: 'upload' }
  ]

  return (
    <div className="space-y-6 pb-28">
      {/* Header Info */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Video className="h-5 w-5 text-brand-gold" />
            Video Testimonials Editor
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Manage the "Community Voices" video cards, thumbnail images, YouTube/Instagram/MP4 links, and quotes.
          </p>
        </div>
      </div>

      {/* Section Header Controls */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-4">
        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2 flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5" /> Section Header & Badges
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldEditor
            label="Section Badge Label"
            value={data.sectionLabel}
            onChange={(val) => handleFieldChange('sectionLabel', val)}
            placeholder="e.g. Community Voices"
            description="Upper eyebrow badge"
          />
          <FieldEditor
            label="Section Heading"
            value={data.sectionTitle}
            onChange={(val) => handleFieldChange('sectionTitle', val)}
            placeholder="e.g. Video Testimonials"
            description="Main bold title"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldEditor
            label="Section Subtitle"
            type="textarea"
            rows={2}
            value={data.sectionSubtitle}
            onChange={(val) => handleFieldChange('sectionSubtitle', val)}
            placeholder="Hear directly from our parents, alumni, and students..."
            description="Exploratory subtitle beneath headline"
          />
          <FieldEditor
            label="Side Satisfaction Badge"
            value={data.satisfactionBadge}
            onChange={(val) => handleFieldChange('satisfactionBadge', val)}
            placeholder="e.g. Parent Satisfaction"
            description="Right-aligned badge with star"
          />
        </div>
      </div>

      {/* Video Cards Repeater */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <CardRepeater
          items={data.videos || []}
          onUpdate={handleUpdateVideos}
          itemName="Video Testimonial"
          newItemTemplate={{
            id: `vtest-${Date.now()}`,
            title: "New Video Testimonial",
            speaker: "Parent / Student Name",
            quote: "A transformative school experience that nurtured my child's curious mind.",
            thumbnail: "/images/home-hero.jpg",
            duration: "02:00",
            videoType: "youtube",
            videoUrl: "https://www.youtube.com/watch?v=L_LUpnjgPso",
            tag: "Parent Perspective"
          }}
          renderItemForm={(item, index, updateField) => {
            const currentType = item.videoType || detectVideoType(item.videoUrl)
            const ytId = parseYouTubeId(item.videoUrl)
            const igCode = parseInstagramCode(item.videoUrl)

            return (
              <div className="space-y-6">
                {/* Top Row: Title and Speaker */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FieldEditor
                    label="Video Headline / Title"
                    value={item.title}
                    onChange={(val) => updateField('title', val)}
                    placeholder="e.g. Parent Reflection — Nurturing Holistic Excellence"
                    description="Main title shown on card & modal"
                  />
                  <FieldEditor
                    label="Speaker Name & Designation"
                    value={item.speaker}
                    onChange={(val) => updateField('speaker', val)}
                    placeholder="e.g. Dr. Ananya Mukherjee (Parent of Class IX)"
                    description="Identifies who is speaking"
                  />
                </div>

                {/* Highlight Quote */}
                <FieldEditor
                  label="Highlight Quote"
                  type="textarea"
                  rows={2}
                  value={item.quote}
                  onChange={(val) => updateField('quote', val)}
                  placeholder="e.g. DLF Public School doesn't just focus on marks—it shapes character, values, and leadership."
                  description="Displayed in quotes on the testimonial card"
                />

                {/* Video Source Configuration */}
                <div className="p-4 rounded-xl bg-black/40 border border-gray-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-gray-200 uppercase tracking-wider flex items-center gap-2">
                      <Video className="h-4 w-4 text-brand-gold" />
                      Video Source & Platform
                    </label>
                    <button
                      type="button"
                      onClick={() => setPreviewVideo(item)}
                      disabled={!item.videoUrl}
                      className="px-3 py-1 bg-brand-gold/15 text-brand-gold hover:bg-brand-gold/25 border border-brand-gold/30 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <Play className="h-3 w-3 fill-brand-gold" />
                      Test Play Video
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FieldEditor
                      label="Platform Type"
                      type="select"
                      options={videoTypeOptions}
                      value={currentType}
                      onChange={(val) => updateField('videoType', val)}
                      description="Choose platform format"
                    />

                    <div className="md:col-span-2">
                      <FieldEditor
                        label={
                          currentType === 'youtube'
                            ? 'YouTube URL / Video ID'
                            : currentType === 'instagram'
                            ? 'Instagram Reel / Post URL'
                            : 'Video Direct URL (.mp4 / webm)'
                        }
                        value={item.videoUrl}
                        onChange={(val) => {
                          updateField('videoUrl', val)
                          const detected = detectVideoType(val)
                          if (detected !== currentType) {
                            updateField('videoType', detected)
                          }
                        }}
                        placeholder={
                          currentType === 'youtube'
                            ? 'https://www.youtube.com/watch?v=... or ID'
                            : currentType === 'instagram'
                            ? 'https://www.instagram.com/reel/.../'
                            : 'https://cdn.example.com/video.mp4'
                        }
                        description={
                          currentType === 'youtube' && ytId
                            ? `Detected YouTube ID: ${ytId}`
                            : currentType === 'instagram' && igCode
                            ? `Detected Instagram Code: ${igCode}`
                            : 'Paste link or upload video below'
                        }
                      />
                    </div>
                  </div>

                  {/* File Upload Option for Direct Videos */}
                  {currentType === 'upload' && (
                    <div className="p-3 bg-gray-900/60 rounded-lg border border-dashed border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <FileVideo className="h-4 w-4 text-brand-gold shrink-0" />
                        <div>
                          <p className="font-semibold">Upload Local Video File</p>
                          <p className="text-[10px] text-gray-500">Supports .mp4, .webm (Max 50MB)</p>
                        </div>
                      </div>
                      <label className="px-3 py-1.5 bg-brand-gold text-black hover:bg-yellow-500 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-1.5 transition-all shadow">
                        <Upload className="h-3.5 w-3.5" />
                        Choose Video
                        <input
                          type="file"
                          accept="video/mp4,video/webm,video/ogg,video/quicktime"
                          onChange={(e) => handleFileUpload(e, updateField, item)}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}

                  {/* Quick YouTube Thumbnail fetcher helper */}
                  {currentType === 'youtube' && ytId && (
                    <div className="flex items-center justify-between text-xs bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-2.5">
                      <span className="text-yellow-400/90 text-[11px] flex items-center gap-1.5">
                        <YoutubeIcon className="h-3.5 w-3.5 text-red-500" />
                        YouTube video detected. Auto-set high-res thumbnail?
                      </span>
                      <button
                        type="button"
                        onClick={() => updateField('thumbnail', getYouTubeThumbnail(ytId))}
                        className="px-2.5 py-1 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 rounded text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Apply YouTube Thumbnail
                      </button>
                    </div>
                  )}
                </div>

                {/* Thumbnail Image Picker & Additional Meta */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <ImageUrlPicker
                      label="Card Thumbnail Image (Optional)"
                      value={item.thumbnail}
                      onChange={(val) => updateField('thumbnail', val)}
                      description={item.thumbnail ? "Custom thumbnail image" : "Auto-detected from video if left empty"}
                    />
                  </div>

                  <div className="space-y-4">
                    <FieldEditor
                      label="Duration"
                      value={item.duration}
                      onChange={(val) => updateField('duration', val)}
                      placeholder="e.g. 02:15"
                      description="Time badge on card"
                    />
                    <FieldEditor
                      label="Category Tag"
                      value={item.tag}
                      onChange={(val) => updateField('tag', val)}
                      placeholder="e.g. Parent Story"
                      description="Upper badge tag"
                    />
                  </div>
                </div>
              </div>
            )
          }}
        />
      </div>

      {/* Save Bar */}
      <SaveBar
        onSave={handleSave}
        onReset={handleReset}
        isDirty={isDirty}
        isSaving={isSaving}
      />

      {/* In-Editor Video Test Modal — Clean Video-Only Reel Player */}
      {previewVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-text"
          onClick={() => setPreviewVideo(null)}
        >
          <div
            className="relative bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/15 w-full max-w-sm sm:max-w-md h-[85vh] max-h-[720px] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Close Button */}
            <button
              type="button"
              onClick={() => setPreviewVideo(null)}
              aria-label="Close Preview"
              className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/80 hover:bg-black text-white/90 hover:text-white flex items-center justify-center border border-white/20 shadow-lg cursor-pointer transition-all duration-200 hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player */}
            <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
              {(() => {
                const type = previewVideo.videoType || detectVideoType(previewVideo.videoUrl)
                const ytId = parseYouTubeId(previewVideo.videoUrl)
                const igUrl = getInstagramEmbedUrl(previewVideo.videoUrl)

                if (type === 'youtube' && ytId) {
                  return (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0`}
                      title={previewVideo.title || "Video Preview"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )
                }

                if (type === 'instagram' && igUrl) {
                  return (
                    <iframe
                      className="w-full h-full border-0"
                      src={igUrl}
                      title={previewVideo.title || "Instagram Reel Preview"}
                      allowTransparency="true"
                      allow="encrypted-media"
                    />
                  )
                }

                if (previewVideo.videoUrl) {
                  return (
                    <video
                      controls
                      autoPlay
                      className="w-full h-full object-cover sm:object-contain"
                      src={previewVideo.videoUrl}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )
                }

                return (
                  <p className="text-xs text-gray-500">No valid video URL found</p>
                )
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
