/**
 * videoHelper.js — Utility for parsing & embedding videos (YouTube, Instagram, Uploads)
 */

export function parseYouTubeId(input = '') {
  if (!input) return ''
  const str = input.trim()
  
  // If it's already an 11-character ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) {
    return str
  }

  // Handle standard watch URL
  const matchWatch = str.match(/[?&]v=([a-zA-Z0-9_-]{11})/)
  if (matchWatch) return matchWatch[1]

  // Handle youtu.be short URL
  const matchShort = str.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/)
  if (matchShort) return matchShort[1]

  // Handle embed URL
  const matchEmbed = str.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/)
  if (matchEmbed) return matchEmbed[1]

  // Handle shorts URL
  const matchShorts = str.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/)
  if (matchShorts) return matchShorts[1]

  return ''
}

export function getYouTubeThumbnail(videoId) {
  if (!videoId) return ''
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}

export function parseInstagramCode(input = '') {
  if (!input) return ''
  const str = input.trim()
  
  // Match data-instgrm-permalink=".../reel/CODE" or href=".../reel/CODE" or url
  const match = str.match(/instagram\.com\/(?:reel|p|tv)\/([a-zA-Z0-9_-]+)/i)
  if (match) return match[1]

  // If provided directly as alphanumeric code
  if (/^[a-zA-Z0-9_-]{9,25}$/.test(str)) {
    return str
  }

  return ''
}

export function getInstagramEmbedUrl(urlOrCode = '') {
  const code = parseInstagramCode(urlOrCode)
  if (!code) return ''
  return `https://www.instagram.com/reel/${code}/embed/`
}

export function detectVideoType(url = '') {
  if (!url) return 'youtube'
  const lower = url.toLowerCase()
  if (lower.includes('youtube.com') || lower.includes('youtu.be')) return 'youtube'
  if (lower.includes('instagram.com')) return 'instagram'
  if (lower.endsWith('.mp4') || lower.endsWith('.webm') || lower.endsWith('.mov') || lower.startsWith('data:video') || lower.startsWith('blob:')) return 'upload'
  return 'youtube'
}

export function resolveAutoThumbnail(item = {}) {
  if (item?.thumbnail && item.thumbnail.trim()) {
    return item.thumbnail
  }

  const url = item?.videoUrl || ''
  const type = item?.videoType || detectVideoType(url)

  if (type === 'youtube') {
    const ytId = parseYouTubeId(url)
    if (ytId) return getYouTubeThumbnail(ytId)
  }

  if (type === 'instagram') {
    const code = parseInstagramCode(url)
    if (code) return `https://images.weserv.nl/?url=https://www.instagram.com/p/${code}/media/?size=l`
  }

  return ''
}

export function extractVideoFrame(fileOrUrl) {
  return new Promise((resolve) => {
    try {
      const video = document.createElement('video')
      video.crossOrigin = 'anonymous'
      video.muted = true
      video.playsInline = true
      video.preload = 'metadata'

      const url = typeof fileOrUrl === 'string' ? fileOrUrl : URL.createObjectURL(fileOrUrl)
      video.src = url

      video.onloadedmetadata = () => {
        video.currentTime = Math.min(1.0, (video.duration && video.duration > 0 ? video.duration / 4 : 0.5))
      }

      video.onseeked = () => {
        try {
          const canvas = document.createElement('canvas')
          canvas.width = video.videoWidth || 640
          canvas.height = video.videoHeight || 360
          const ctx = canvas.getContext('2d')
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
          const dataUrl = canvas.toDataURL('image/jpeg', 0.85)
          resolve(dataUrl)
        } catch {
          resolve('')
        }
      }

      video.onerror = () => resolve('')
    } catch {
      resolve('')
    }
  })
}
