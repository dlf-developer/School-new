import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ContactHome() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: 'dlf-sahibabad',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact-home" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] ambient-glow-1 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-gold">Reach Out</span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-masterDeep">Contact Us</h3>
          <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter">
            Have questions about admissions, academic programs, or campus facilities? Our coordinators are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Info Card Column */}
          <div className="lg:col-span-5 bg-brand-greenDeep text-white rounded-3xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold">Get in Touch</span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold">Campus Coordinates</h4>
              </div>

              <div className="space-y-6">
                {/* Sahibabad coordinates */}
                <div className="space-y-3 pb-5 border-b border-white/10">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">DLF Public School, Sahibabad</p>
                  <div className="flex items-start gap-3.5 text-xs text-white/80 leading-relaxed font-sans">
                    <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>Sector-II, Rajendra Nagar, Sahibabad, Ghaziabad, UP 201005</span>
                  </div>
                  <div className="flex items-center gap-3.5 text-xs text-white/80 font-sans">
                    <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>+91-9871034444, +91-120-4563955</span>
                  </div>
                </div>

                {/* Greater Noida coordinates */}
                <div className="space-y-3">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">DLF World School, Greater Noida</p>
                  <div className="flex items-start gap-3.5 text-xs text-white/80 leading-relaxed font-sans">
                    <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>HS-17, Sector-Sigma II, Greater Noida, UP 201308</span>
                  </div>
                  <div className="flex items-center gap-3.5 text-xs text-white/80 font-sans">
                    <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>+91-9821182700, +91-9871034444</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8 flex items-center gap-3 text-xs text-white/60 font-sans font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>Office Hours: 8:00 AM – 3:30 PM</span>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-brand-greenDeep/5 shadow-md p-8 lg:p-10 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-greenDeep via-brand-gold to-brand-greenVibrant rounded-t-3xl"></div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-brand-greenDeep/10 text-brand-greenDeep rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-brand-greenDeep">Thank You!</h4>
                <p className="text-xs sm:text-sm text-brand-muted max-w-sm mx-auto font-sans font-medium">
                  Your inquiry message has been submitted successfully. A coordinator from the selected campus will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h4 className="font-serif text-2xl font-bold text-brand-masterDeep">Send a Message</h4>
                  <p className="text-xs text-brand-muted font-sans font-medium mt-1">Complete the fields below to submit an inquiry.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="home-name" className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-charcoal mb-1.5 font-sans">Full Name</label>
                    <input 
                      type="text" 
                      id="home-name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="Your Name"
                      className="w-full bg-brand-bg/60 border border-brand-greenDeep/10 rounded-xl px-4 py-3 text-xs text-brand-charcoal focus:outline-none focus:border-brand-greenDeep transition-all font-sans font-semibold placeholder-brand-muted/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="home-phone" className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-charcoal mb-1.5 font-sans">Phone Number</label>
                    <input 
                      type="tel" 
                      id="home-phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      placeholder="Contact No."
                      className="w-full bg-brand-bg/60 border border-brand-greenDeep/10 rounded-xl px-4 py-3 text-xs text-brand-charcoal focus:outline-none focus:border-brand-greenDeep transition-all font-sans font-semibold placeholder-brand-muted/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="home-email" className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-charcoal mb-1.5 font-sans">Email Address</label>
                    <input 
                      type="email" 
                      id="home-email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="your.email@example.com"
                      className="w-full bg-brand-bg/60 border border-brand-greenDeep/10 rounded-xl px-4 py-3 text-xs text-brand-charcoal focus:outline-none focus:border-brand-greenDeep transition-all font-sans font-semibold placeholder-brand-muted/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="home-school" className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-charcoal mb-1.5 font-sans">Select Campus</label>
                    <div className="relative">
                      <select 
                        id="home-school" 
                        name="school" 
                        value={formData.school} 
                        onChange={handleChange} 
                        required
                        className="w-full bg-brand-bg/60 border border-brand-greenDeep/10 rounded-xl px-4 py-3 text-xs text-brand-charcoal focus:outline-none focus:border-brand-greenDeep transition-all font-sans font-semibold appearance-none cursor-pointer"
                      >
                        <option value="dlf-sahibabad">DLF Public School, Sahibabad</option>
                        <option value="dlf-greater-noida">DLF World School, Greater Noida</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-brand-muted">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="home-message" className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-charcoal mb-1.5 font-sans">Message</label>
                  <textarea 
                    id="home-message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows="3" 
                    placeholder="Enter your query details..."
                    className="w-full bg-brand-bg/60 border border-brand-greenDeep/10 rounded-xl px-4 py-3 text-xs text-brand-charcoal focus:outline-none focus:border-brand-greenDeep transition-all font-sans font-semibold placeholder-brand-muted/40 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-greenDeep text-white hover:bg-brand-greenVibrant py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                >
                  Submit Inquiry 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
