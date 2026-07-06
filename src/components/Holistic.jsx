import React from 'react'
import { Music, Palette, Terminal } from 'lucide-react'
import ImageWithLoader from './ImageWithLoader'

export default function Holistic() {
  return (
    <section id="holistic" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-purpleDeep">Expression & Athleticism</span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-greenDeep">Holistic Living & Sports</h3>
          <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter">
            Nurturing emotional, kinesthetic, and creative intelligence with world-class performing spaces and modern physical centers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Large Featured Left Box */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-3xl aspect-[16/10] shadow-xl">
            <ImageWithLoader src="/images/home-stem.jpg" alt="STEM & Robotics Innovation Lab" imgClassName="group-hover:scale-105 transition-transform duration-[6s]" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-greenDeep via-brand-greenDeep/20 to-transparent z-10"></div>
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 text-white space-y-1.5 sm:space-y-2">
              <span className="bg-brand-gold text-brand-charcoal text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block">Innovation & STEM Labs</span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold">Cyber, Robotics & Innovation Forge</h4>
              <p className="text-[11px] sm:text-xs text-brand-bg/85 max-w-md font-inter">Hands-on robotics, drone development, AI prototyping, and high-spec computational modeling — where students build the future today.</p>
            </div>
          </div>

          {/* Right Side List of Centers */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            {/* Item 1: Performing Arts */}
            <div className="flex gap-4 p-4 rounded-2xl hover:bg-brand-bg border border-transparent hover:border-brand-greenDeep/5 transition-all duration-300">
              <div className="w-10 h-10 bg-brand-purpleDeep/10 rounded-xl flex items-center justify-center shrink-0 text-brand-purpleDeep">
                <Music className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-brand-greenDeep text-sm sm:text-base">Performing Arts Academy</h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed font-inter">Vocal and instrumental learning models alongside Indian classical and Western dance curricula.</p>
              </div>
            </div>

            {/* Item 2: Visual Arts */}
            <div className="flex gap-4 p-4 rounded-2xl hover:bg-brand-bg border border-transparent hover:border-brand-greenDeep/5 transition-all duration-300">
              <div className="w-10 h-10 bg-brand-gold/15 rounded-xl flex items-center justify-center shrink-0 text-brand-gold">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-brand-greenDeep text-sm sm:text-base">The Canvas Guild (Visual Arts)</h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed font-inter">Sustaining fine arts, ceramics, clay modeling, and digital media illustration pathways.</p>
              </div>
            </div>

            {/* Item 3: Innovation Labs */}
            <div className="flex gap-4 p-4 rounded-2xl hover:bg-brand-bg border border-transparent hover:border-brand-greenDeep/5 transition-all duration-300">
              <div className="w-10 h-10 bg-brand-greenDeep/10 rounded-xl flex items-center justify-center shrink-0 text-brand-greenDeep">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-brand-greenDeep text-sm sm:text-base">Cyber & Robotics Forge</h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed font-inter">Integrated coding clusters, drone development workspaces, and high-spec computational modeling.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
