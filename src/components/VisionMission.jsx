import React, { useState } from 'react'
import { Eye, Target, Sparkles, Download, ChevronDown, ChevronUp } from 'lucide-react'
import ImageWithLoader from './ImageWithLoader'
import { useSiteData } from '../hooks/useSiteData'

export default function VisionMission() {
  const { global } = useSiteData()
  const vm = global.visionMission || {}

  const [expandedVision, setExpandedVision] = useState(false)
  const [expandedMission, setExpandedMission] = useState(false)

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

        {/* Redesigned Vision & Mission Stacked Cards (formatted similarly to Thinking School) */}
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          
          {/* Vision Card */}
          <div className="bg-white rounded-3xl border border-brand-masterDeep/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row overflow-hidden group">
            <div className="w-full md:w-1/2 aspect-[16/10] md:aspect-auto bg-brand-bg relative overflow-hidden md:order-1">
              <ImageWithLoader 
                src="/7C1A1603.jpg" 
                alt="Our Vision Illustration" 
                className="absolute inset-0"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                loading="lazy" 
              />
            </div>
            
            <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center space-y-3 md:order-2">
              <div className="flex items-center gap-3.5 md:flex-col md:items-start md:gap-3">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-brand-gold/10 to-brand-gold/25 flex items-center justify-center shadow-sm text-brand-gold">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-masterDeep">{vm.vision?.title || "Our Vision"}</h3>
              </div>
              
              <div className="space-y-2">
                <p className="font-serif text-base sm:text-lg text-brand-greenDeep italic font-bold leading-relaxed">
                  {vm.vision?.quote}
                </p>
                
                {expandedVision && (
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans pt-2 border-t border-gray-100">
                    We envision a transformative learning environment where students discover their creative self, cultivate scientific inquiry, and build character to lead as empathetic, responsible planetary stewards in an interconnected global community.
                  </p>
                )}

                <button 
                  onClick={() => setExpandedVision(!expandedVision)}
                  className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-brand-greenDeep hover:text-brand-greenVibrant transition-colors cursor-pointer self-start mt-2"
                >
                  {expandedVision ? (
                    <>View Less <ChevronUp className="w-3.5 h-3.5" /></>
                  ) : (
                    <>View More <ChevronDown className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-3xl border border-brand-masterDeep/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row overflow-hidden group">
            <div className="w-full md:w-1/2 aspect-[16/10] md:aspect-auto bg-brand-bg relative overflow-hidden md:order-2">
              <ImageWithLoader 
                src="/7C1A1764.jpg" 
                alt="Our Mission Illustration" 
                className="absolute inset-0"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                loading="lazy" 
              />
            </div>
            
            <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center space-y-3 md:order-1">
              <div className="flex items-center gap-3.5 md:flex-col md:items-start md:gap-3">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-brand-greenDeep/10 to-brand-greenVibrant/20 flex items-center justify-center shadow-sm text-brand-greenDeep">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-masterDeep">{vm.mission?.title || "Our Mission"}</h3>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans font-semibold">
                  {vm.mission?.text}
                </p>
                
                {expandedMission && (
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans pt-2 border-t border-gray-100">
                    To deliver developmental education that fosters critical analysis, collaborative problem-solving, values of social responsibility (SSR), and ecological stewardship, ensuring our learners grow with strong cultural roots and 21st-century capabilities.
                  </p>
                )}

                <button 
                  onClick={() => setExpandedMission(!expandedMission)}
                  className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-brand-greenDeep hover:text-brand-greenVibrant transition-colors cursor-pointer self-start mt-2"
                >
                  {expandedMission ? (
                    <>View Less <ChevronUp className="w-3.5 h-3.5" /></>
                  ) : (
                    <>View More <ChevronDown className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </div>
            </div>
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
