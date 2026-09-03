import React from 'react'
import { useParams } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'

export default function SchoolVirtualTour() {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const isDLWS = activeBranch === 'dlf-greater-noida'

  const videoId = isDLWS ? 'ZH1-SnSJRac' : 'Gj3QXoCh9y8'
  const title = isDLWS 
    ? 'DLF World School, Greater Noida — Campus Virtual Tour' 
    : 'DLF Public School, Sahibabad — Campus Virtual Tour'

  return (
    <div className="pt-24 sm:pt-28 pb-12 sm:pb-16 min-h-[85vh] flex items-center justify-center bg-transparent text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-charcoal p-2 sm:p-4 rounded-3xl shadow-2xl border-2 border-brand-gold/40 relative overflow-hidden">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
            {isDLWS ? (
              <video
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="/School_dlws.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ border: 'none' }}
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
