import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Compass, HeartHandshake, Award, BookOpen, Globe } from 'lucide-react'

export default function PortalHome() {
  return (
    <div className="py-12 bg-transparent text-brand-charcoal selection:bg-brand-gold/30">
      
      {/* Cinematic Portal Welcome Hero */}
      <section className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 pt-4 pb-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-brand-masterDeep/5 border border-brand-masterDeep/10 rounded-full px-4 py-1.5 text-xs text-brand-masterDeep font-bold">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping"></span>
          <span>Unified Group Portal</span>
        </div>
        
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-masterDeep leading-[1.05] tracking-tight">
          Explore Our Educational Campuses
        </h2>
        
        <p className="font-inter text-brand-muted text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Nurturing thinkers, sculpting scientific temperaments, and empowering global pioneers across our state-of-the-art educational institutions.
        </p>

        <div className="w-24 h-[2px] bg-brand-gold mx-auto mt-4"></div>
      </section>

      {/* Side-by-Side Asymmetric School Choice Section */}
      <section className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch mt-8">
          
          {/* Card: DLF Public School (Sahibabad) */}
          <Link 
            to="/school/dlf-sahibabad" 
            id="link-sahibabad"
            className="group relative bg-white border border-brand-greenDeep/8 rounded-3xl p-8 lg:p-12 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-greenDeep/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-greenDeep/10 text-brand-greenDeep flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-brand-gold">Deep Green Legacy</span>
                <h2 className="font-serif text-3xl font-bold text-brand-greenDeep leading-tight">DLF Public School, Sahibabad</h2>
                <p className="text-xs text-brand-muted leading-relaxed font-inter">
                  Our flagship institution where progressive pedagogy meets dynamic child-centric learning, fostering scientific temperament and zero-waste ideals.
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-8 border-t border-brand-greenDeep/5 mt-8 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-greenDeep">Enter School Portal</span>
              <div className="w-10 h-10 rounded-full bg-brand-greenDeep text-white flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-300 shadow-md">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card: DLF World School (Greater Noida) */}
          <Link 
            to="/school/dlf-greater-noida" 
            id="link-greater-noida"
            className="group relative bg-white border border-brand-purpleDeep/8 rounded-3xl p-8 lg:p-12 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purpleDeep/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-purpleDeep/10 text-brand-purpleDeep flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-brand-gold">Deep Purple Innovation</span>
                <h2 className="font-serif text-3xl font-bold text-brand-purpleDeep leading-tight">DLF World School, Greater Noida</h2>
                <p className="text-xs text-brand-muted leading-relaxed font-inter">
                  A high-performance modern campus built to foster digital-age design thinking, creative intelligence, and future leadership capabilities.
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-8 border-t border-brand-purpleDeep/5 mt-8 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purpleDeep">Enter School Portal</span>
              <div className="w-10 h-10 rounded-full bg-brand-purpleDeep text-white flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-300 shadow-md">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
          
        </div>
      </section>
    </div>
  )
}
