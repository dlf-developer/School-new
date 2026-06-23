import React from 'react'
import { Eye, Target, Sparkles, Download } from 'lucide-react'
import ImageWithLoader from './ImageWithLoader'
import { useSiteData } from '../hooks/useSiteData'

export default function VisionMission() {
  const { global } = useSiteData()
  const vm = global.visionMission || {}

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden">
      
      {/* Background ambient glows */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] ambient-glow-2 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-1/4 w-[450px] h-[450px] ambient-glow-1 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-16 relative z-10">
        
        {/* Core Hero Header Cover Banner */}
        {vm.galleryImage && (
          <div className="relative w-full h-[350px] sm:h-[450px] overflow-hidden rounded-3xl shadow-lg group mb-12">
            <ImageWithLoader 
              src={vm.galleryImage} 
              alt={vm.heroTitle || "Vision & Mission"} 
              imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
              loading="eager" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-masterDeep/90 via-brand-masterDeep/45 to-transparent flex flex-col justify-end p-8 sm:p-12">
              {vm.heroLabel && (
                <span className="text-xs uppercase tracking-widest font-extrabold text-brand-gold mb-2">
                  {vm.heroLabel}
                </span>
              )}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {vm.heroTitle || "Vision & Mission"}
              </h1>
              <div className="w-16 h-[2px] bg-brand-gold mt-4"></div>
              {vm.heroSubtitle && (
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-sans max-w-2xl mt-4">
                  {vm.heroSubtitle}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Vision & Mission Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-brand-masterDeep to-brand-masterVibrant text-white p-8 sm:p-12 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>
            
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="font-serif text-3xl font-bold">{vm.vision?.title || "Our Vision"}</h2>
              {vm.vision?.quote && (
                <p className="font-serif text-xl sm:text-2xl text-gray-100 leading-relaxed font-medium italic">
                  {vm.vision.quote}
                </p>
              )}
            </div>
            
            {vm.vision?.badge && (
              <div className="border-t border-white/10 mt-8 pt-6">
                <p className="text-xs text-brand-gold font-bold uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> {vm.vision.badge}
                </p>
              </div>
            )}
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-brand-masterDeep/5 shadow-md flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-greenDeep/5 rounded-full blur-3xl"></div>
            
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-greenDeep/5 border border-brand-greenDeep/10 flex items-center justify-center text-brand-greenDeep">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-brand-masterDeep">{vm.mission?.title || "Our Mission"}</h2>
              {vm.mission?.text && (
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-sans font-medium">
                  {vm.mission.text}
                </p>
              )}
            </div>
            
            {vm.mission?.badge && (
              <div className="border-t border-brand-masterDeep/5 mt-8 pt-6">
                <p className="text-xs text-brand-greenDeep font-bold uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> {vm.mission.badge}
                </p>
              </div>
            )}
          </div>

        </div>

        {/* PDF Document Preview Section */}
        {vm.publications && vm.publications.length > 0 && (
          <div className="max-w-2xl mx-auto space-y-6 pt-6">
            <div className="text-center space-y-3">
              <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest">
                Publications & Archives
              </span>
              <h3 className="font-serif text-3xl font-bold text-brand-masterDeep">
                {vm.publications[0].title}
              </h3>
              {vm.publications[0].desc && (
                <p className="text-xs sm:text-sm text-brand-muted max-w-xl mx-auto font-sans leading-relaxed">
                  {vm.publications[0].desc}
                </p>
              )}
            </div>

            <div className="w-[450px] max-w-full h-[600px] mx-auto rounded-2xl overflow-hidden border border-brand-masterDeep/5 shadow-md bg-white relative">
              <iframe
                src={`${vm.publications[0].url}#toolbar=0&navpanes=0&view=Fit`}
                className="w-full h-full border-none overflow-hidden"
                title={vm.publications[0].title}
                scrolling="no"
              />
            </div>
            
            <div className="text-center">
              <a 
                href={vm.publications[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-masterDeep text-white text-xs font-bold hover:bg-brand-gold transition-colors shadow-sm"
              >
                Open Full Document <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
