import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import { Heart, Compass, ShieldAlert, ArrowLeft, Send, CheckCircle2, Award } from 'lucide-react'

export default function SchoolCounselling() {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]

  const theme = currentSchool?.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27'
  }

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    grade: 'Class IX',
    topic: 'Career Counselling',
    note: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', grade: 'Class IX', topic: 'Career Counselling', note: '' })
    }, 4000)
  }

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Support & Guidance</span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary}`}>Counselling, Career & Wellness</h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter font-medium">
              Providing emotional security, career navigation, and comprehensive healthcare systems.
            </p>
          </div>
          <Link 
            to={`/school/${activeBranch}`}
            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:opacity-80 transition-opacity shrink-0`}
          >
            <ArrowLeft className="w-4 h-4" /> Back to School Home
          </Link>
        </div>

        {/* Counselling & Wellbeing 9 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {[
            {
              title: "Social–Emotional Learning & Counselling",
              desc: "Providing a safe, confidential space for self-expression and guidance. Guided by professional child psychologists to help students build emotional intelligence, resilience, and self-awareness.",
              details: ["Confidential individual sessions", "Peer support groups", "Meditation & mindfulness practices", "Structured SEL programs"],
              icon: Heart
            },
            {
              title: "Values & Character Education",
              desc: "Character formation woven into the student experience across grades. Focuses on empathy, integrity, respect, responsibility, and ethical decision-making.",
              details: ["Awakening program (Classes I–V)", "Awakened Citizen's program (Classes VI–VIII) by RK Mission", "AACT (Class IX)", "Happy Fridge, Goodwill Piggy Bank & Birthday Hawan"],
              icon: Award
            },
            {
              title: "Digital & Cyber Wellbeing",
              desc: "Preparing students to navigate the digital world safely. Focuses on cyber safety, healthy screen habits, online boundaries, digital identity, and responsible social media use.",
              details: ["Peer educators' sessions", "Parent awareness initiatives", "Cyber safety guidelines & seminars"],
              icon: ShieldAlert
            },
            {
              title: "Peer Support & Student Leadership",
              desc: "Empowering students as wellbeing ambassadors. Strengthening peer care, belonging, and student voice within the school community.",
              details: ["Peer educator programs", "Empathy manager leadership roles", "Buddy systems for new/younger students"],
              icon: Compass
            },
            {
              title: "Inclusion & Diverse Learning Support",
              desc: "Committed to an inclusive learning environment. Celebrates diversity and provides specialized classroom accommodations.",
              details: ["Individualized Learning Plans (ILP)", "Classroom & academic accommodations", "Sensorium & Cosmosium support for CWSN"],
              icon: Heart
            },
            {
              title: "Health & Holistic Lifestyle",
              desc: "Promoting physical fitness, balanced nutrition, and preventive awareness. Integrating healthy habits into the regular weekly routine.",
              details: ["Thursday Special: Fitness, yoga & sports exposure", "Regular health checkups & nursery logs", "Certified resident nurse on duty"],
              icon: ShieldAlert
            },
            {
              title: "Safe & Supportive School Climate",
              desc: "Maintaining a culture of absolute safety, respect, and positive behavior through clear institutional guidelines and restorative practices.",
              details: ["Anti-bullying peer education sessions", "POCSO & child safety awareness sessions", "Juvenile Justice (JJ) Act seminars"],
              icon: ShieldAlert
            },
            {
              title: "Parent Partnership & Outreach",
              desc: "Collaborative school–home support networks that equip families to navigate mental health, adolescence, and digital challenges.",
              details: ["Induction & orientation sessions", "Parent Listening Circle sessions", "Mother-daughter awareness program"],
              icon: Compass
            },
            {
              title: "Career Guidance & Life Readiness",
              desc: "Supporting students in discovering their strengths, mapping academic pathways, and matching aspirations to global opportunities.",
              details: ["Margdarshak mentoring system", "Career fairs & university interactions", "Corporate internships & alumni connect"],
              icon: Compass
            }
          ].map((pillar, idx) => {
            const PillarIcon = pillar.icon
            return (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-md space-y-5 hover:shadow-lg transition-shadow relative overflow-hidden group flex flex-col justify-between">
                <div className={`absolute top-0 left-0 w-full h-1 bg-${theme.primary}`}></div>
                <div className="space-y-4">
                  <div className={`w-10 h-10 bg-${theme.primary}/10 text-${theme.primary} rounded-2xl flex items-center justify-center shrink-0`}>
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-brand-charcoal leading-snug">{pillar.title}</h3>
                  <p className="text-[11px] text-brand-muted leading-relaxed font-inter font-medium">
                    {pillar.desc}
                  </p>
                </div>
                <ul className="space-y-1.5 text-[10px] text-brand-charcoal font-inter pt-4 border-t border-gray-50 mt-4">
                  {pillar.details.map((det, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-3 h-3 text-${theme.accent} shrink-0`} />
                      <span className="font-semibold">{det}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Lower Consultation Form & Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 items-stretch">
          
          {/* Quote Block */}
          <div className={`lg:col-span-5 bg-${theme.primary}/5 rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-gray-100`}>
            <div className="space-y-4">
              <Award className={`w-10 h-10 text-${theme.accent}`} />
              <blockquote className="font-serif italic text-base sm:text-lg text-brand-charcoal leading-relaxed">
                "Our wellness core ensures that while children target academic benchmarks, they remain emotionally secure, physically strong, and mentally peaceful."
              </blockquote>
            </div>
            <div className="pt-6 border-t border-gray-200 mt-6 text-xs text-brand-muted font-inter">
              <strong>Wellness & Guidance Center</strong><br />
              {currentSchool.name}
            </div>
          </div>

          {/* Booking / Enquiry Form */}
          <div className="lg:col-span-7 bg-white border border-gray-150/15 rounded-3xl p-8 shadow-lg relative overflow-hidden flex flex-col justify-center">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-3">
                <div className={`w-12 h-12 bg-${theme.primary}/10 text-${theme.primary} rounded-full flex items-center justify-center mx-auto`}>
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>Consultation Scheduled!</h4>
                <p className="text-xs text-brand-muted max-w-xs mx-auto font-inter">
                  Thank you. Our resident counsellor will contact you within the next working day to confirm time slots.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className={`font-serif text-xl font-bold text-${theme.primary}`}>Schedule a Consultation</h3>
                  <p className="text-[10px] text-brand-muted font-inter">Request a callback or slot with our Counselling team.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-brand-charcoal">Parent / Student Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe" 
                      className={`w-full bg-brand-bg/50 border border-${theme.primary}/10 rounded-xl p-3 text-xs focus:outline-none focus:border-${theme.primary} font-inter`} 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-brand-charcoal">Student Class / Grade</label>
                    <select 
                      value={formData.grade}
                      onChange={e => setFormData({...formData, grade: e.target.value})}
                      className={`w-full bg-white border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-${theme.primary} font-inter`}
                    >
                      <option>Class Pre-Nursery to V</option>
                      <option>Class VI to VIII</option>
                      <option>Class IX</option>
                      <option>Class X</option>
                      <option>Class XI</option>
                      <option>Class XII</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-brand-charcoal">Topic of Consultation</label>
                    <select 
                      value={formData.topic}
                      onChange={e => setFormData({...formData, topic: e.target.value})}
                      className={`w-full bg-white border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-${theme.primary} font-inter`}
                    >
                      <option>Career Counselling (Stream / College)</option>
                      <option>Emotional Well-being & Stress</option>
                      <option>Behavioral Guidance</option>
                      <option>Other / General Wellness Query</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-brand-charcoal">Callback Mobile*</label>
                    <input type="tel" required placeholder="+91 XXXXX XXXXX" className={`w-full bg-brand-bg/50 border border-${theme.primary}/10 rounded-xl p-3 text-xs focus:outline-none focus:border-${theme.primary} font-inter`} />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold uppercase tracking-wider text-brand-charcoal">Brief Message / Preference Note (Optional)</label>
                  <textarea 
                    rows="2" 
                    value={formData.note}
                    onChange={e => setFormData({...formData, note: e.target.value})}
                    placeholder="E.g., Preferred timings, specific query details..." 
                    className={`w-full bg-brand-bg/50 border border-${theme.primary}/10 rounded-xl p-3 text-xs focus:outline-none focus:border-${theme.primary} font-inter resize-none`}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`w-full bg-${theme.primary} hover:bg-${theme.vibrant} text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer`}
                >
                  <span>Submit Consultation Request</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}
