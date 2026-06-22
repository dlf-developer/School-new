import React from 'react'
import { Compass, Eye, Target, Bookmark, Sparkles, ArrowRight, Download, Users } from 'lucide-react'
import ImageWithLoader from './ImageWithLoader'

export default function VisionMission() {
  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden">
      
      {/* Background ambient glows */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] ambient-glow-2 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-1/4 w-[450px] h-[450px] ambient-glow-1 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-20 relative z-10">
        
        {/* Core Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-gold">Our Foundation</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-masterDeep leading-tight">
            Vision & Mission
          </h1>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-base text-brand-muted leading-relaxed font-sans max-w-2xl mx-auto">
            DLF Public School’s defining framework for creating committed, socially responsible global citizens who are prepared to navigate future landscapes.
          </p>
        </div>

        {/* Vision & Mission Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-brand-masterDeep to-brand-masterVibrant text-white p-8 sm:p-12 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>
            
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="font-serif text-3xl font-bold">Our Vision</h2>
              <p className="font-serif text-xl sm:text-2xl text-gray-100 leading-relaxed font-medium italic">
                "Our defining aim is: Preparing caring, courageous and concerned citizens – of the world, for the world!"
              </p>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-6">
              <p className="text-xs text-brand-gold font-bold uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Global Leadership & Citizenship
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-brand-masterDeep/5 shadow-md flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-greenDeep/5 rounded-full blur-3xl"></div>
            
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-greenDeep/5 border border-brand-greenDeep/10 flex items-center justify-center text-brand-greenDeep">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-brand-masterDeep">Our Mission</h2>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-sans font-medium">
                To embark each learner on a journey of Self Discovery and Self Learning thereby creating committed, socially responsible global citizens who are nurtured in a safe, child-centered empowering 21st century environment rooted in Indian culture.
              </p>
            </div>
            
            <div className="border-t border-brand-masterDeep/5 mt-8 pt-6">
              <p className="text-xs text-brand-greenDeep font-bold uppercase tracking-widest flex items-center gap-2">
                <Bookmark className="w-4 h-4" /> Self Discovery & Cultural Heritage
              </p>
            </div>
          </div>

        </div>

        {/* Visual Focus & Publications */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
          
          {/* Folder Image Showcase */}
          <div className="lg:col-span-7">
            <div className="relative p-3 border border-brand-gold/20 rounded-3xl bg-white shadow-md overflow-hidden group">
              <div className="overflow-hidden rounded-2xl aspect-[16/10] relative">
                <ImageWithLoader 
                  src="/7C1A1660.jpg" 
                  alt="Students Collaboration" 
                  imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-brand-masterDeep/10"></div>
              </div>
              <div className="p-4 text-center">
                <p className="text-xs text-brand-muted italic font-medium">
                  Folder 2 Imagery — Cultivating inquiry, respect, and mutual collaboration.
                </p>
              </div>
            </div>
          </div>

          {/* Publications / Resources Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest">Alumni Connect Publications</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-masterDeep">
                Vision in Print
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans">
                Explore how the school's vision translates into real accomplishments, student narratives, and alumni engagement. Download documents from our archives.
              </p>
            </div>

            {/* Newsletter Download Card */}
            <div className="bg-white border border-brand-masterDeep/5 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-brand-masterDeep">Alumni Connect - 2nd Edition</h4>
                  <p className="text-[10px] text-brand-muted font-semibold uppercase tracking-wider">Cropped PDF Document</p>
                </div>
              </div>
              <p className="text-[11px] text-brand-muted leading-relaxed font-sans">
                Review articles from former students, educational panels, and highlights of outstanding community projects.
              </p>
              
              <a 
                href="/Alumni Connect 2nd Edition_cropped.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-brand-masterDeep transition-colors"
              >
                Open Document <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
