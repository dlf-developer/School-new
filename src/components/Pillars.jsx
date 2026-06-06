import React from 'react'
import { ArrowRight, Leaf, Users, Globe, ArrowUpRight } from 'lucide-react'

export default function Pillars() {
  return (
    <section id="zero-waste" className="py-16 sm:py-24 bg-brand-greenDeep text-brand-bg relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute right-0 bottom-0 w-[30rem] sm:w-[50rem] h-[30rem] sm:h-[50rem] rounded-full bg-brand-greenVibrant/10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">Defining Innovations</span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">What Sets Us Apart?</h3>
            <p className="text-xs sm:text-sm text-brand-bg/80 leading-relaxed font-inter">
              Our values are translated directly into action through institutional practices that shape empathetic leadership and ecological awareness.
            </p>
          </div>
          <div className="shrink-0 w-full sm:w-auto">
            <a href="#procedure" className="group flex items-center justify-center gap-2 border border-brand-gold/30 hover:border-brand-gold/80 px-6 py-3 rounded-xl text-xs font-bold text-white uppercase tracking-wider transition-all duration-300 w-full sm:w-auto">
              <span>Explore Our Pillars</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* GRID OF UNIQUE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Zero-Waste */}
          <div className="bg-brand-greenVibrant/10 border border-white/10 rounded-2xl p-6 sm:p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group min-h-[320px] relative overflow-hidden">
            <div>
              <div className="w-10 h-10 bg-brand-gold/15 rounded-xl flex items-center justify-center text-brand-gold mb-5">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">Zero Waste Campus</h4>
              <p className="text-xs sm:text-sm text-brand-bg/75 mt-3 leading-relaxed font-inter">
                Recognized with the elite Platinum rank by CSE, our campus implements structured zero-waste initiatives run completely by the Student Eco-Force.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-gold mt-6 uppercase tracking-wider group-hover:text-white transition-colors">
              Learn More <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Social Responsibility */}
          <div className="bg-brand-greenVibrant/10 border border-white/10 rounded-2xl p-6 sm:p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group min-h-[320px] relative overflow-hidden">
            <div>
              <div className="w-10 h-10 bg-brand-purpleDeep/20 rounded-xl flex items-center justify-center text-brand-purpleVibrant mb-5">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">Social Duty (SSR)</h4>
              <p className="text-xs sm:text-sm text-brand-bg/75 mt-3 leading-relaxed font-inter">
                At DLF, social duty is integrated into school reports. Every student works directly in local Sahibabad community projects.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-gold mt-6 uppercase tracking-wider group-hover:text-white transition-colors">
              Learn More <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: Global Internship */}
          <div className="bg-brand-greenVibrant/10 border border-white/10 rounded-2xl p-6 sm:p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group min-h-[320px] relative overflow-hidden">
            <div>
              <div className="w-10 h-10 bg-brand-gold/15 rounded-xl flex items-center justify-center text-brand-gold mb-5">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">Global Classrooms</h4>
              <p className="text-xs sm:text-sm text-brand-bg/75 mt-3 leading-relaxed font-inter">
                We pioneered senior student corporate internship modules alongside deep exchange networks with educational institutes globally.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-gold mt-6 uppercase tracking-wider group-hover:text-white transition-colors">
              Learn More <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
