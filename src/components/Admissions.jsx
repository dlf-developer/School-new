import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CheckCircle, Send } from 'lucide-react'
import gsap from 'gsap'
import { useSiteData } from '../hooks/useSiteData'

export default function Admissions() {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const currentSchool = schoolId && schools[schoolId] ? schools[schoolId] : null
  const primaryColor = currentSchool ? currentSchool.theme.primary : 'brand-masterDeep'

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const successBoxRef = useRef(null)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setIsFormSubmitted(true)
  }

  useEffect(() => {
    if (isFormSubmitted && successBoxRef.current) {
      gsap.fromTo(successBoxRef.current, 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.4, display: 'flex', ease: 'power2.out' }
      )
    }
  }, [isFormSubmitted])

  const resetInquiryForm = () => {
    document.getElementById('inquiryForm').reset()
    if (successBoxRef.current) {
      gsap.to(successBoxRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        onComplete: () => {
          setIsFormSubmitted(false)
        }
      })
    }
  }

  return (
    <section id="procedure" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
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
                  Complete the digital admission enquiry query with basic credentials and preferences on our digital school board portal.
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
                <h4 className="font-serif font-bold text-brand-greenDeep text-base sm:text-lg">Interaction & Orientation</h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed font-inter">
                  Visit our premium campus with parents to interact with mentors and explore our learning methodologies.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 sm:gap-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold font-serif shadow-md shrink-0 text-sm">
                3
              </div>
              <div>
                <h4 className="font-serif font-bold text-brand-greenDeep text-base sm:text-lg">Document Verification</h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed font-inter">
                  Submit necessary previous transcripts, complete verification, and process secure fees digitally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Admission Inquiry Interactive Form */}
        <div className="lg:col-span-6 bg-brand-bg rounded-3xl p-6 sm:p-12 border border-brand-greenDeep/5 shadow-xl relative" id="enquiry">
          <div className="absolute top-4 right-4 text-brand-gold font-serif text-[40px] sm:text-[60px] opacity-10 select-none font-bold">DLF</div>
          
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-greenDeep mb-6">Online Enquiry Portal</h3>
          
          <form id="inquiryForm" className="space-y-4" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-brand-charcoal">Parent's Full Name*</label>
                <input type="text" required className="w-full bg-white border border-brand-greenDeep/10 rounded-xl p-3 text-xs sm:text-sm focus:outline-none focus:border-brand-greenDeep transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-brand-charcoal">Mobile Number*</label>
                <input type="tel" required className="w-full bg-white border border-brand-greenDeep/10 rounded-xl p-3 text-xs sm:text-sm focus:outline-none focus:border-brand-greenDeep transition-all" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-brand-charcoal">Email Address*</label>
              <input type="email" required className="w-full bg-white border border-brand-greenDeep/10 rounded-xl p-3 text-xs sm:text-sm focus:outline-none focus:border-brand-greenDeep transition-all" placeholder="john@example.com" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-brand-charcoal">Student Name*</label>
                <input type="text" required className="w-full bg-white border border-brand-greenDeep/10 rounded-xl p-3 text-xs sm:text-sm focus:outline-none focus:border-brand-greenDeep transition-all" placeholder="Sarah Doe" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-brand-charcoal">Class Seeking*</label>
                <select className="w-full bg-white border border-brand-greenDeep/10 rounded-xl p-3 text-xs sm:text-sm focus:outline-none focus:border-brand-greenDeep transition-all">
                  <option>Primary School</option>
                  <option>Middle School</option>
                  <option>Secondary</option>
                  <option>Senior Secondary</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-brand-charcoal">How Did You Hear About Us?</label>
              <select className="w-full bg-white border border-brand-greenDeep/10 rounded-xl p-3 text-xs sm:text-sm focus:outline-none focus:border-brand-greenDeep transition-all">
                <option>Times of India School Rankings</option>
                <option>Word of Mouth Recommendation</option>
                <option>Online Search</option>
                <option>Social Media Platforms</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-brand-greenDeep hover:bg-brand-greenVibrant text-white text-xs font-bold uppercase tracking-widest py-4 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 mt-4 cursor-pointer">
              <span>Submit Registration Inquiry</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          <div 
            ref={successBoxRef}
            id="form-success-box" 
            className="hidden absolute inset-0 bg-white/95 rounded-3xl p-6 sm:p-8 flex-col items-center justify-center text-center space-y-4"
          >
            <div className="w-14 h-14 bg-brand-greenDeep/10 text-brand-greenDeep rounded-full flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-brand-greenDeep" />
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-greenDeep">Registration Received!</h4>
            <p className="text-xs sm:text-sm text-brand-muted max-w-sm font-inter">
              Thank you for your enquiry. Our Admissions team will reach out to you within the next 24 working hours to guide your journey.
            </p>
            <button onClick={resetInquiryForm} className="text-xs font-bold text-brand-greenDeep uppercase tracking-wider hover:underline">
              Submit another form
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
