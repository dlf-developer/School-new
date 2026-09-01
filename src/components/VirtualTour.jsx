import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Aperture, Play } from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'

export default function VirtualTour() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]
  const isDLWS = activeBranch === 'dlf-greater-noida'

  const theme = currentSchool?.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27'
  }

  const schoolName = currentSchool?.name || (isDLWS ? 'DLF World School' : 'DLF Public School')
  const videoId = isDLWS ? 'ZH1-SnSJRac' : 'Gj3QXoCh9y8'
  const videoTitle = isDLWS ? 'DLF World School — Campus Life' : 'DLF Public School — School Life'
  const posterImg = isDLWS ? '/dlws.jpeg' : '/images/home-assembly.jpg'

  return (
    <section id="virtual-tour" className="py-12 sm:py-16 bg-transparent relative overflow-hidden font-sans">
      <div className="w-[96%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-${theme.primary} rounded-3xl overflow-hidden p-6 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative shadow-2xl`}>
          {/* Decorative background shape */}
          <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-brand-gold/10 -z-10"></div>
          
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-white">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">Experience Campus Life</span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-tight">Can't Visit in Person? See Our School in Action</h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-inter font-medium">
              {isDLWS
                ? 'Step inside DLF World School — explore our state-of-the-art laboratories, modern classrooms, creative arts wings, and expansive athletic grounds in Greater Noida.'
                : 'Step inside DLF Public School — explore our premium experiential labs, vibrant assembly grounds, creative arts wings, and classrooms buzzing with curiosity.'
              }
            </p>
            <button 
              onClick={() => setIsVideoPlaying(true)}
              className="bg-brand-gold hover:bg-brand-goldlight text-brand-charcoal px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-lg shadow-brand-gold/10 flex items-center gap-2 cursor-pointer"
            >
              <Aperture className="w-4 h-4" /> Watch the Video
            </button>
          </div>

          <div className="lg:col-span-7 relative">
            <div className={`relative bg-black rounded-2xl overflow-hidden aspect-video shadow-2xl border-4 border-${theme.primary}/30`}>
              {isVideoPlaying ? (
                <iframe 
                  className="w-full h-full" 
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title={videoTitle}
                  allow="autoplay; encrypted-media"
                  style={{ border: 'none' }}
                ></iframe>
              ) : (
                <>
                  <img
                    src={posterImg}
                    alt={`${schoolName} Campus`}
                    className="w-full h-full object-cover opacity-75"
                  />
                  <div className={`absolute inset-0 bg-${theme.primary}/40 flex flex-col items-center justify-center p-4 text-center`} id="video-overlay">
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <button 
                        onClick={() => setIsVideoPlaying(true)}
                        aria-label={`Play ${schoolName} Video`}
                        className={`w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-${theme.primary} shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300 mx-auto`}
                      >
                        <Play className={`w-6 h-6 fill-current text-${theme.primary} translate-x-0.5`} />
                      </button>
                      <p className="text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase drop-shadow-md">
                        {videoTitle}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
