import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Award, BookOpen, Clock, PlayCircle } from 'lucide-react'

export default function CommonPages() {
  const location = useLocation()
  const path = location.pathname

  const [formData, setFormData] = useState({
    school: 'dlf-sahibabad',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        school: 'dlf-sahibabad',
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 4000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (path.includes('news')) {
    return (
      <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-greenVibrant">Press Room</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-greenDeep">DLF in the News</h2>
            <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
            <p className="text-sm text-brand-muted leading-relaxed font-inter">
              Media coverage, national rankings, and institutional recognitions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="bg-white p-8 rounded-3xl border border-brand-greenDeep/5 shadow-md space-y-4">
              <span className="text-xs font-bold text-brand-gold">Times of India Rankings</span>
              <h3 className="font-serif text-xl font-bold text-brand-greenDeep">Ranked #1 School in Ghaziabad for 2026</h3>
              <p className="text-xs text-brand-muted leading-relaxed font-inter">
                DLF Public School, Sahibabad has been ranked as the #1 School in Ghaziabad by Times School Rankings, honoring educational excellence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-brand-greenDeep/5 shadow-md space-y-4">
              <span className="text-xs font-bold text-brand-gold">EducationWorld India</span>
              <h3 className="font-serif text-xl font-bold text-brand-greenDeep">Co-Ed Day School National Top 100</h3>
              <p className="text-xs text-brand-muted leading-relaxed font-inter">
                DLF schools are recognized among India's top progressive co-educational day schools for excellence in pedagogy and leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (path.includes('alumni')) {
    return (
      <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-greenVibrant">Global Network</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-greenDeep">Alumni Network</h2>
            <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
            <p className="text-sm text-brand-muted leading-relaxed font-inter">
              Stay connected with thousands of DLF alumni pioneering in technology, science, business, and arts globally.
            </p>
          </div>
          <div className="bg-white max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl border border-brand-greenDeep/5 shadow-md space-y-6 text-center">
            <h3 className="font-serif text-2xl font-bold text-brand-greenDeep">Connect With Your Alma Mater</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter">
              Register in our global database to receive updates, participate in mentorship initiatives, and attend alumni reunions.
            </p>
            <div className="pt-4">
              <a href="mailto:alumni@dlfps.com" className="inline-block bg-brand-greenDeep hover:bg-brand-greenVibrant text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md">
                Register as Alumni
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (path.includes('careers')) {
    return (
      <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-greenVibrant">Work With Us</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-greenDeep">Careers</h2>
            <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
            <p className="text-sm text-brand-muted leading-relaxed font-inter">
              Join a community of progressive educators, mentors, and administrators redefining school education in India.
            </p>
          </div>
          <div className="bg-white max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl border border-brand-greenDeep/5 shadow-md space-y-6 text-center">
            <h3 className="font-serif text-2xl font-bold text-brand-greenDeep">Open Positions</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter">
              We recruit passionate PGTs, TGTs, PRTs, and administrative support staff. Mail your updated curriculum vitae to our recruitment panel.
            </p>
            <div className="pt-4">
              <a href="mailto:careers@dlfps.com" className="inline-block bg-brand-greenDeep hover:bg-brand-greenVibrant text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md">
                Email CV to Careers Team
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (path.includes('sports-arena')) {
    return (
      <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-greenVibrant">Athletics & Fitness</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-greenDeep">Sports Arena</h2>
            <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
            <p className="text-sm text-brand-muted leading-relaxed font-inter">
              Nurturing sporting excellence, teamwork, and health through world-class athletic programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="bg-white p-8 rounded-3xl border border-brand-greenDeep/5 shadow-md space-y-4">
              <h3 className="font-serif text-xl font-bold text-brand-greenDeep">Sports Facilities</h3>
              <p className="text-xs text-brand-muted leading-relaxed font-inter">
                Includes international standard basketball courts, a synthetic athletics track, specialized cricket pitches, and state-of-the-art tennis courts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-brand-greenDeep/5 shadow-md space-y-4">
              <h3 className="font-serif text-xl font-bold text-brand-greenDeep">Coaching & Training</h3>
              <p className="text-xs text-brand-muted leading-relaxed font-inter">
                Professional coaching in athletics, cricket, basketball, football, and skating to build national and state-level champions.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default: Contact Us
  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden">
      {/* Decorative ambient blur spheres */}
      <div className="absolute top-1/4 left-[-10%] w-[350px] h-[350px] bg-brand-greenDeep/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[-10%] w-[350px] h-[350px] bg-brand-purpleDeep/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-greenVibrant bg-brand-greenDeep/5 px-3 py-1.5 rounded-full border border-brand-greenDeep/10 inline-block font-inter">Reach Out</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-greenDeep tracking-tight">Contact Us</h2>
          <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-sm text-brand-muted leading-relaxed font-inter">
            Have queries about admissions, curriculum, or life at DLF? Our team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-brand-greenDeep/5 shadow-xl p-8 relative overflow-hidden">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-brand-greenDeep/15 text-brand-greenDeep rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-greenDeep">Message Sent Successfully!</h3>
                <p className="text-sm text-brand-muted max-w-sm mx-auto font-inter">
                  Thank you for reaching out. We will forward your inquiry to the selected school campus coordinator and respond back shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-greenDeep mb-1">Get in Touch</h3>
                  <p className="text-xs text-brand-muted font-inter">Complete the fields below to dispatch an official inquiry.</p>
                </div>

                <div className="space-y-4">
                  {/* Select Campus Dropdown */}
                  <div>
                    <label htmlFor="school" className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2 font-inter">Select School Campus</label>
                    <div className="relative">
                      <select
                        id="school"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                        required
                        className="w-full bg-brand-bg/50 border border-brand-greenDeep/10 rounded-2xl px-4 py-3.5 text-sm font-semibold text-brand-charcoal focus:outline-none focus:border-brand-greenDeep focus:ring-1 focus:ring-brand-greenDeep transition-all font-inter appearance-none cursor-pointer"
                      >
                        <option value="dlf-sahibabad">DLF Public School, Sahibabad</option>
                        <option value="dlf-greater-noida">DLF World School, Greater Noida</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-brand-muted">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Name and Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2 font-inter">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-brand-bg/50 border border-brand-greenDeep/10 rounded-2xl px-4 py-3.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-greenDeep focus:ring-1 focus:ring-brand-greenDeep transition-all font-inter font-medium placeholder-brand-muted/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2 font-inter">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-brand-bg/50 border border-brand-greenDeep/10 rounded-2xl px-4 py-3.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-greenDeep focus:ring-1 focus:ring-brand-greenDeep transition-all font-inter font-medium placeholder-brand-muted/50"
                      />
                    </div>
                  </div>

                  {/* Email and Subject Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2 font-inter">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="name@example.com"
                        className="w-full bg-brand-bg/50 border border-brand-greenDeep/10 rounded-2xl px-4 py-3.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-greenDeep focus:ring-1 focus:ring-brand-greenDeep transition-all font-inter font-medium placeholder-brand-muted/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2 font-inter">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Admissions Enquiry, Transfer request..."
                        className="w-full bg-brand-bg/50 border border-brand-greenDeep/10 rounded-2xl px-4 py-3.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-greenDeep focus:ring-1 focus:ring-brand-greenDeep transition-all font-inter font-medium placeholder-brand-muted/50"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2 font-inter">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Type details of your inquiry here..."
                      className="w-full bg-brand-bg/50 border border-brand-greenDeep/10 rounded-2xl px-4 py-3.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-greenDeep focus:ring-1 focus:ring-brand-greenDeep transition-all font-inter font-medium placeholder-brand-muted/50 resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-greenDeep hover:bg-brand-greenVibrant text-white py-4 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Send Message</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Branch Coordinates Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Sahibabad */}
            <div className="bg-white p-8 rounded-3xl border border-brand-greenDeep/5 shadow-md space-y-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-greenDeep"></div>
              <div>
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block mb-1">Flagship Campus</span>
                <h3 className="font-serif text-2xl font-bold text-brand-greenDeep">DLF Public School</h3>
              </div>
              <div className="space-y-4 text-xs font-inter text-brand-muted">
                <p className="flex items-start gap-3 leading-relaxed">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" /> 
                  <span>Loni Road, Sector-II, Rajendra Nagar, Sahibabad, Ghaziabad, UP 201005</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-gold shrink-0" /> 
                  <span>+91-9871034444</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-gold shrink-0" /> 
                  <span>contact@dlfps.com</span>
                </p>
              </div>
            </div>

            {/* Card 2: Greater Noida */}
            <div className="bg-white p-8 rounded-3xl border border-brand-purpleDeep/5 shadow-md space-y-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-purpleDeep"></div>
              <div>
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block mb-1">Futuristic Campus</span>
                <h3 className="font-serif text-2xl font-bold text-brand-purpleDeep">DLF World School</h3>
              </div>
              <div className="space-y-4 text-xs font-inter text-brand-muted">
                <p className="flex items-start gap-3 leading-relaxed">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" /> 
                  <span>HS-17, Delta Sector, Delta-I, Greater Noida, UP 201308</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-gold shrink-0" /> 
                  <span>+91-9871034444</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-gold shrink-0" /> 
                  <span>contact@dlfworldschool.com</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
