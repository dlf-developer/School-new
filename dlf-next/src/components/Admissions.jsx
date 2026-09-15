import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'

export default function Admissions() {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const currentSchool = schoolId && schools[schoolId] ? schools[schoolId] : null
  const primaryColor = currentSchool ? currentSchool.theme.primary : 'brand-masterDeep'

  return (
    <section id="procedure" className="py-12 sm:py-16 bg-transparent relative overflow-hidden">
      <div className="w-[96%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        {/* Left Side: Procedure Steps */}
        <div className="lg:col-span-6 space-y-8 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">Admissions 2026-27</span>
            <h3 className={`font-serif text-3xl sm:text-4xl font-bold text-${primaryColor}`}>Begin Your Journey</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter">
              Our entry selection guidelines are simple, structured, transparent, and completely digital.
            </p>
          </div>

          {/* Process Steps Timeline */}
          <div className="space-y-6 sm:space-y-8">
            {/* Step 1 */}
            <div className="flex gap-4 sm:gap-6 relative">
              <div className={`absolute top-10 left-5 bottom-[-2rem] w-[2px] bg-${primaryColor}/10`}></div>
              <div className={`w-9 h-9 sm:w-10 sm:h-10 bg-${primaryColor} text-white rounded-full flex items-center justify-center font-bold font-serif shadow-md shrink-0 text-sm`}>
                1
              </div>
              <div>
                <h4 className={`font-serif font-bold text-${primaryColor} text-base sm:text-lg`}>Online Enquiry Form</h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed font-inter">
                  Complete the digital admission enquiry query with basic information about your child.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 sm:gap-6 relative">
              <div className="absolute top-10 left-5 bottom-[-2rem] w-[2px] bg-brand-greenDeep/10"></div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-greenVibrant text-white rounded-full flex items-center justify-center font-bold font-serif shadow-md shrink-0 text-sm">
                2
              </div>
              <div>
                <h4 className="font-serif font-bold text-brand-greenDeep text-base sm:text-lg">Registration &amp; Interaction</h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed font-inter">
                  Fill out the Registration Form so that you can visit our campuses with interact with mentors and explore our learning methodologies.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 sm:gap-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold font-serif shadow-md shrink-0 text-sm">
                3
              </div>
              <div>
                <h4 className="font-serif font-bold text-brand-greenDeep text-base sm:text-lg">Admission Decision</h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed font-inter">
                  Submit necessary previous transcripts, complete verification, and process secure fees digitally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image Card with Overlay Button */}
        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] border border-brand-greenDeep/5 shadow-2xl relative group">
            <img
              src="/baby_girl.jpeg"
              alt="DLF Student"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ objectPosition: 'center 20%' }}
            />
            
            {/* Online Admission Enquiry Highlighted Button Card */}
            <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:max-w-md">
              <Link
                to="/admission-enquiry"
                className="flex items-center justify-between gap-4 bg-brand-greenDeep hover:bg-brand-greenVibrant text-white px-7 py-5 rounded-2xl border-2 border-brand-gold hover:border-white shadow-2xl shadow-brand-greenDeep/60 transition-all duration-300 hover:scale-105 cursor-pointer group/btn ring-4 ring-brand-gold/30"
              >
                <span className="font-serif text-lg sm:text-xl font-extrabold text-white tracking-wide">
                  Online Admission Enquiry
                </span>
                <div className="w-11 h-11 rounded-full bg-brand-gold text-brand-masterDeep flex items-center justify-center shrink-0 group-hover/btn:translate-x-1.5 transition-transform duration-300 shadow-lg">
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
