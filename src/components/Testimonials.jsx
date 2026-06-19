import React from 'react'

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12">
        <div className="bg-white/85 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 sm:p-12 shadow-xl">
        <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-greenDeep">Parent & Student Voices</span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-greenDeep">What Our Community Says</h3>
          <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
        </div>

        {/* Testimonial Grid: Mobile Collapsing Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-greenDeep/5 shadow-md flex flex-col justify-between">
            <p className="text-xs sm:text-sm text-brand-charcoal/90 italic leading-relaxed font-inter">
              "Enrolling our daughter in DLF was the best academic decision we made. The focus on sustainability has transformed how she views her environment. Outstanding, empathetic team of teachers!"
            </p>
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-brand-greenDeep/5">
              <div className="w-9 h-9 bg-brand-gold/20 rounded-full flex items-center justify-center font-bold text-brand-greenDeep text-xs font-serif">
                AS
              </div>
              <div>
                <h4 className="font-bold text-xs text-brand-greenDeep">Anand Sharma</h4>
                <p className="text-[9px] text-brand-muted uppercase tracking-widest font-inter">Parent of Class VI student</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-greenDeep/5 shadow-md flex flex-col justify-between">
            <p className="text-xs sm:text-sm text-brand-charcoal/90 italic leading-relaxed font-inter">
              "The corporate internship modules at DLF gave me a real-world perspective on tech development before I entered engineering college. The school makes thinkers of us all."
            </p>
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-brand-greenDeep/5">
              <div className="w-9 h-9 bg-brand-purpleDeep/20 rounded-full flex items-center justify-center font-bold text-brand-purpleDeep text-xs font-serif">
                KV
              </div>
              <div>
                <h4 className="font-bold text-xs text-brand-greenDeep">Kavita Verma</h4>
                <p className="text-[9px] text-brand-muted uppercase tracking-widest font-inter">Alumni, Batch of 2023</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-greenDeep/5 shadow-md flex flex-col justify-between">
            <p className="text-xs sm:text-sm text-brand-charcoal/90 italic leading-relaxed font-inter">
              "Excellent board results prep, yes, but the focus on emotional counselling is what kept our son peaceful and mentally secure during his board examinations."
            </p>
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-brand-greenDeep/5">
              <div className="w-9 h-9 bg-brand-greenDeep/10 rounded-full flex items-center justify-center font-bold text-brand-greenDeep text-xs font-serif">
                RM
              </div>
              <div>
                <h4 className="font-bold text-xs text-brand-greenDeep">Dr. Rajat Mukherji</h4>
                <p className="text-[9px] text-brand-muted uppercase tracking-widest font-inter">Parent of Class XII student</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
