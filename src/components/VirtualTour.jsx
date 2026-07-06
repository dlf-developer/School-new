import React, { useState } from 'react'
import { Aperture, Play } from 'lucide-react'

export default function VirtualTour() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section id="virtual-tour" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12">
        <div className="bg-brand-greenDeep rounded-3xl overflow-hidden p-6 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
          {/* Decorative background shape */}
          <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-brand-gold/10 -z-10"></div>
          
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-brand-bg">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">Experience Campus Life</span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-tight">Can't Visit in Person? See Our School in Action</h3>
            <p className="text-xs sm:text-sm text-brand-bg/85 leading-relaxed font-inter">
              Step inside DLF Public School — explore our premium experiential labs, vibrant assembly grounds, creative arts wings, and classrooms buzzing with curiosity.
            </p>
            <button 
              onClick={() => setIsVideoPlaying(true)}
              className="bg-brand-gold hover:bg-brand-goldlight text-brand-charcoal px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-lg shadow-brand-gold/10 flex items-center gap-2 cursor-pointer"
            >
              <Aperture className="w-4 h-4" /> Watch the Video
            </button>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative bg-black rounded-2xl overflow-hidden aspect-video shadow-2xl border-4 border-brand-greenDeep/30">
              {isVideoPlaying ? (
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/Gj3QXoCh9y8?autoplay=1&rel=0" 
                  title="DLF Public School — School Life Video" 
                  allow="autoplay; encrypted-media"
                  style={{ border: 'none' }}
                ></iframe>
              ) : (
                <>
                  <img
                    src="/images/home-assembly.jpg"
                    alt="DLF Public School Campus"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-brand-greenDeep/40 flex items-center justify-center" id="video-overlay">
                    <div className="text-center space-y-3">
                      <button 
                        onClick={() => setIsVideoPlaying(true)}
                        className="w-12 h-12 sm:w-16 sm:h-16 bg-white/95 rounded-full flex items-center justify-center text-brand-greenDeep shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300"
                      >
                        <Play className="w-5 h-5 fill-current pl-1 text-brand-greenDeep" />
                      </button>
                      <p className="text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase">DLF Public School — School Life</p>
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
