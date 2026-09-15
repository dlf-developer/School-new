import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Play, Quote, Star, Sparkles, X, Video as VideoIcon } from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'
import {
  parseYouTubeId,
  getYouTubeThumbnail,
  getInstagramEmbedUrl,
  detectVideoType,
  resolveAutoThumbnail
} from '../utils/videoHelper'

export default function VideoTestimonials({ theme: propTheme, schoolName: propSchoolName }) {
  const { schoolId } = useParams()
  const { global, schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]
  const isDLWS = activeBranch === 'dlf-greater-noida'

  const schoolName = propSchoolName || currentSchool?.name || (isDLWS ? 'DLF World School' : 'DLF Public School')
  const theme = propTheme || currentSchool?.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27'
  }

  const sectionData = global.videoTestimonials || {
    sectionLabel: "Community Voices",
    sectionTitle: "Video Testimonials",
    sectionSubtitle: `Hear directly from our parents, alumni, and students about their educational journeys at ${schoolName}.`,
    satisfactionBadge: "Parent Satisfaction",
    videos: []
  }

  const primaryColor = theme?.primary || 'brand-greenDeep'
  const vibrantColor = theme?.vibrant || 'brand-greenVibrant'
  const [activeVideo, setActiveVideo] = useState(null)

  // Keyboard Escape listener to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveVideo(null)
    }
    if (activeVideo) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeVideo])

  const dlpsVideos = [
    {
      id: "vtest-1",
      title: "Life at DLF — School Ethos & Celebration",
      speaker: "DLF Public School (@dlfpublicschool)",
      thumbnail: "",
      videoType: "instagram",
      videoUrl: "https://www.instagram.com/reel/DCEtpffSF9d/",
      duration: "Reel",
      quote: "Experience the joyous spirit, holistic growth, and dynamic student community at DLF Public School.",
      tag: "Campus Reel"
    },
    {
      id: "vtest-2",
      title: "Student Spotlight — Joyful Learning & Growth",
      speaker: "DLF Public School (@dlfpublicschool)",
      thumbnail: "",
      videoType: "instagram",
      videoUrl: "https://www.instagram.com/reel/DUD_4iKD0kP/",
      duration: "Reel",
      quote: "Discover how DLF Public School fosters confidence, creativity, and values in every young learner.",
      tag: "Student Life"
    },
    {
      id: "vtest-3",
      title: "Student Joy & Creative Expression",
      speaker: "DLF Public School (@dlfpublicschool)",
      thumbnail: "",
      videoType: "instagram",
      videoUrl: "https://www.instagram.com/reel/DE41tJzT7xP/",
      duration: "Reel",
      quote: "Creative exploration, sporting dynamism, and classroom happiness in every corner of the campus.",
      tag: "Classroom Joy"
    },
    {
      id: "vtest-4",
      title: "Holistic Excellence & Delfite Spirit",
      speaker: "DLF Public School (@dlfpublicschool)",
      thumbnail: "",
      videoType: "instagram",
      videoUrl: "https://www.instagram.com/reel/DEFyT8bT20B/",
      duration: "Reel",
      quote: "Nurturing compassionate minds, scientific curiosity, and lifelong learners.",
      tag: "Holistic Vision"
    }
  ]

  const dlwsVideos = [
    {
      id: "vtest-1",
      title: "Life at DLWS — Future-Ready Learning",
      speaker: "DLF World School, Greater Noida",
      thumbnail: "",
      videoType: "instagram",
      videoUrl: "https://www.instagram.com/reel/DCEtpffSF9d/",
      duration: "Reel",
      quote: "Experience the progressive spirit, design thinking, and dynamic student community at DLF World School, Greater Noida.",
      tag: "Campus Reel"
    },
    {
      id: "vtest-2",
      title: "Student Spotlight — Design Thinking & Growth",
      speaker: "DLF World School, Greater Noida",
      thumbnail: "",
      videoType: "instagram",
      videoUrl: "https://www.instagram.com/reel/DUD_4iKD0kP/",
      duration: "Reel",
      quote: "Discover how DLF World School fosters confidence, creativity, and digital readiness in every young learner.",
      tag: "Student Life"
    },
    {
      id: "vtest-3",
      title: "Student Joy & Creative Makers",
      speaker: "DLF World School, Greater Noida",
      thumbnail: "",
      videoType: "instagram",
      videoUrl: "https://www.instagram.com/reel/DE41tJzT7xP/",
      duration: "Reel",
      quote: "Creative exploration, sporting dynamism, and holistic excellence at our Greater Noida campus.",
      tag: "Classroom Joy"
    },
    {
      id: "vtest-4",
      title: "Holistic Excellence & Future Leadership",
      speaker: "DLF World School, Greater Noida",
      thumbnail: "",
      videoType: "instagram",
      videoUrl: "https://www.instagram.com/reel/DEFyT8bT20B/",
      duration: "Reel",
      quote: "Nurturing compassionate leaders and future innovators at DLF World School, Greater Noida.",
      tag: "Holistic Vision"
    }
  ]

  const defaultVideos = isDLWS ? dlwsVideos : dlpsVideos
  const videos = sectionData.videos && sectionData.videos.length > 0 ? sectionData.videos : defaultVideos

  return (
    <div className="py-10 text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden font-sans">
      {/* Ambient background glows matching group sections */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] ambient-glow-1 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] ambient-glow-2 rounded-full blur-3xl pointer-events-none" />

      <div className="w-[96%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl border border-brand-masterDeep/5 p-8 sm:p-10 shadow-sm space-y-8">
          {/* Header */}
          <div className="border-b border-gray-100 pb-6 space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-masterDeep">
              {sectionData.sectionTitle || "Video Testimonials"}
            </h2>
            <p className="text-sm sm:text-base text-brand-muted font-medium leading-relaxed max-w-3xl">
              {sectionData.sectionSubtitle || `Hear directly from our parents, alumni, and students about their educational journeys at ${schoolName}.`}
            </p>
          </div>

      {/* Videos Grid — Space Around Sized Reel Cards */}
      <div className="flex flex-wrap items-stretch justify-around gap-6 sm:gap-8 mx-auto w-full">
        {videos.map((item) => {
          const thumbnailSrc = resolveAutoThumbnail(item)
          const speakerName = item.speaker || item.parent || 'Parent / Student'

          return (
            <div
              key={item.id || item.title}
              onClick={() => setActiveVideo(item)}
              className="group bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden shadow-xs hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 cursor-pointer flex flex-col justify-between w-full sm:w-[230px] md:w-[240px] max-w-[260px] shrink-0"
            >
              {/* Media Thumbnail Container — Reel Vertical Format (50% compact scale) */}
              <div className="aspect-[9/14] w-full overflow-hidden relative bg-black">
                {thumbnailSrc ? (
                  <img
                    src={thumbnailSrc}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-b from-gray-900 via-gray-950 to-black" />
                )}

                {/* Duration Badge */}
                {item.duration && (
                  <div className="absolute bottom-2.5 right-2.5 bg-black/75 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                    {item.duration}
                  </div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/95 group-hover:bg-white text-brand-charcoal flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                    <Play className="w-4 h-4 ml-0.5 text-brand-gold fill-brand-gold" />
                  </div>
                </div>
              </div>

              {/* Text / Quote Content */}
              <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <Quote className="w-4 h-4 text-brand-gold/70 shrink-0" />
                  <p className="text-xs text-brand-charcoal font-serif font-medium leading-snug italic line-clamp-2">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-2.5 border-t border-gray-200/60">
                  <h5 className="font-bold text-xs text-brand-charcoal leading-snug group-hover:text-brand-gold transition-colors line-clamp-1">
                    {item.title}
                  </h5>
                  <span className="text-[10px] text-brand-muted font-inter block mt-0.5 truncate">
                    {speakerName}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
        </div>
      </div>

      {/* Dynamic Video Modal — Clean Video-Only Reel Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/15 w-full max-w-sm sm:max-w-md h-[85vh] max-h-[720px] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              aria-label="Close video player"
              className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/80 hover:bg-black text-white/90 hover:text-white flex items-center justify-center border border-white/20 shadow-lg cursor-pointer transition-all duration-200 hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player Container */}
            <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
              {(() => {
                const type = activeVideo.videoType || detectVideoType(activeVideo.videoUrl)
                const ytId = parseYouTubeId(activeVideo.videoUrl)
                const igUrl = getInstagramEmbedUrl(activeVideo.videoUrl)

                if (type === 'youtube' && ytId) {
                  return (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0`}
                      title={activeVideo.title || "YouTube Video"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )
                }

                if (type === 'instagram' && igUrl) {
                  return (
                    <iframe
                      className="w-full h-full border-0"
                      src={igUrl}
                      title={activeVideo.title || "Instagram Reel"}
                      allowTransparency="true"
                      allow="encrypted-media"
                    />
                  )
                }

                if (activeVideo.videoUrl) {
                  return (
                    <video
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover sm:object-contain"
                      src={activeVideo.videoUrl}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )
                }

                return (
                  <div className="text-center p-6 text-white/60 space-y-2">
                    <VideoIcon className="w-8 h-8 mx-auto text-brand-gold" />
                    <p className="text-sm">Video URL is missing or invalid.</p>
                  </div>
                )
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
