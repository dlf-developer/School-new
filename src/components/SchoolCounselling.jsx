import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import { Heart, Compass, ShieldAlert, ArrowLeft, Send, CheckCircle2, Award, ChevronDown, X, Camera } from 'lucide-react'

export default function SchoolCounselling() {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const currentSchool = schoolId ? schools[schoolId] : null

  const theme = currentSchool?.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27'
  }

  const [selectedImage, setSelectedImage] = useState(null)
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
              Providing emotional security, career navigation, and comprehensive healthcare systems across DLF Group Schools.
            </p>
          </div>
          <Link 
            to={schoolId ? `/school/${schoolId}` : "/"}
            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:opacity-80 transition-opacity shrink-0`}
          >
            <ArrowLeft className="w-4 h-4" /> {schoolId ? 'Back to School Home' : 'Back to Home'}
          </Link>
        </div>

        {/* ── COUNSELLING & WELLNESS PHOTO GALLERY (4 PICTURE PLACEHOLDERS) ── */}
        <div className="bg-gray-50/80 rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant} flex items-center gap-1.5`}>
                <Camera className="w-3.5 h-3.5" /> Media Gallery
              </span>
              <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>Counselling & Wellness Photo Highlights</h3>
              <p className="text-xs text-brand-muted font-inter">
                Visual photo placeholders for campus counseling facilities, career workshops, and wellness sessions.
              </p>
            </div>
            <span className="text-[11px] font-bold text-brand-gold bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm shrink-0 self-start sm:self-auto">
              4 Image Placeholders Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                id: "slot-1",
                label: "Photo Placeholder 1",
                title: "Confidential Guidance Room",
                desc: "One-on-one student counselling & emotional wellness hub.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "slot-2",
                label: "Photo Placeholder 2",
                title: "Career Margdarshak Seminar",
                desc: "Interactive university guidance & stream selection townhalls.",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "slot-3",
                label: "Photo Placeholder 3",
                title: "Morning Yoga & Mindfulness",
                desc: "Holistic fitness, breathing exercises, and emotional regulation.",
                image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "slot-4",
                label: "Photo Placeholder 4",
                title: "Peer Educators Workshop",
                desc: "Student ambassador training for cyber-safety & anti-bullying.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              }
            ].map((slot) => (
              <div 
                key={slot.id}
                onClick={() => setSelectedImage(slot)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="h-44 w-full relative bg-gray-100 overflow-hidden">
                  <img 
                    src={slot.image} 
                    alt={slot.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors"></div>
                  
                  {/* Explicit Placeholder Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider bg-brand-gold text-brand-charcoal px-2.5 py-1 rounded-md shadow-md">
                      {slot.label}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Camera className="w-3 h-3 text-brand-gold" /> Preview
                  </div>
                </div>

                <div className="p-3.5 space-y-1">
                  <h4 className={`font-serif text-xs font-bold text-brand-charcoal group-hover:text-${theme.primary} transition-colors leading-snug`}>
                    {slot.title}
                  </h4>
                  <p className="text-[10px] text-brand-muted font-inter leading-relaxed line-clamp-2">
                    {slot.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Counselling & Wellbeing 9 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {[
            {
              title: "Social–Emotional Learning & Counselling",
              desc: "Providing a safe, confidential space where students can express themselves and seek guidance. Helps students build emotional intelligence, resilience, and self-awareness.",
              details: ["Individual counseling", "Peer support groups", "Meditation & mindfulness practices", "Structured SEL programs"],
              icon: Heart
            },
            {
              title: "Values & Character Education",
              desc: "Character formation woven into the student experience. Programs focus on empathy, integrity, respect, responsibility, and ethical decision-making.",
              details: ["Awakening program (Classes I–V)", "Awakened Citizen's program (Classes VI–VIII) by RK Mission", "AACT (Class IX)", "Happy Fridge, Goodwill Piggy Bank & Birthday Hawan"],
              icon: Award
            },
            {
              title: "Digital & Cyber Wellbeing",
              desc: "Preparing students to navigate the digital world with awareness and responsibility. Focuses on cyber safety, healthy screen habits, online boundaries, digital identity, and responsible social media use.",
              details: ["Peer educators' sessions", "Parent awareness initiatives"],
              icon: ShieldAlert
            },
            {
              title: "Peer Support & Student Leadership",
              desc: "Empowering students as wellbeing ambassadors. Strengthening belonging, peer care, and student voice within the school community.",
              details: ["Peer educator programs", "Buddy systems", "Empathy manager leadership roles"],
              icon: Compass
            },
            {
              title: "Inclusion & Diverse Learning Support",
              desc: "Committed to an inclusive learning environment. Our support includes learning plans, classroom accommodations, collaborative teacher support, and sensitization initiatives.",
              details: ["Individualized learning plans", "Classroom accommodations & teacher support", "Sensorium & Cosmosium support for CWSN"],
              icon: Heart
            },
            {
              title: "Health & Holistic Lifestyle",
              desc: "Promoting healthy routines through programs on nutrition and healthy eating, fitness, sleep hygiene, emotional health, and preventive awareness.",
              details: ["Thursday special: Fitness, yoga, & sports exposure", "Regular health check-ups", "Holistic lifestyle education"],
              icon: ShieldAlert
            },
            {
              title: "Safe & Supportive School Climate",
              desc: "Maintaining safety and respect through strong anti-bullying frameworks, safety protocols, restorative practices, and positive behavior systems.",
              details: ["Anti-bullying peer education sessions", "POCSO awareness sessions", "Juvenile Justice (JJ) Act sessions"],
              icon: ShieldAlert
            },
            {
              title: "Parent Partnership & Outreach",
              desc: "Collaborative school–home programs that support families in navigating adolescence, mental health, and digital challenges.",
              details: ["Induction sessions", "Listening Circle sessions", "Mother-daughter program"],
              icon: Compass
            },
            {
              title: "Career Guidance & Life Readiness",
              desc: "Supporting students in discovering their strengths and future pathways through assessments, expert interactions, university guidance, and life skills education.",
              details: ["Margdarshak and Townhall sessions", "Career sessions & career fairs", "Alumni career sessions, institute visits, & internships"],
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

        {/* ── COUNSELLING & WELLNESS PICTURE GALLERY (4 PICTURE PLACEHOLDERS & SNAPSHOTS) ── */}
        <div className="space-y-6 pt-6 border-t border-gray-100 mt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant} flex items-center gap-1.5`}>
                <Camera className="w-3.5 h-3.5" /> Campus Life & Guidance
              </span>
              <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Glimpses of Wellness & Counselling in Action</h3>
              <p className="text-xs sm:text-sm text-brand-muted font-inter font-medium mt-1">
                Visual snapshots capturing one-on-one sessions, career townhalls, mindfulness mornings, and peer leadership workshops.
              </p>
            </div>
            <div className="text-xs text-brand-muted font-medium bg-gray-50 px-3.5 py-1.5 rounded-full border border-gray-200 shrink-0 self-start md:self-auto">
              4 Media Gallery Placeholders
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {[
              {
                id: 1,
                tag: "One-on-One Counselling",
                title: "Individual Guidance Sessions",
                desc: "Dedicated, confidential one-on-one space for emotional, academic, and personal guidance.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: 2,
                tag: "Career Guidance",
                title: "Margdarshak Townhalls & Fairs",
                desc: "Interactive university guidance sessions and stream selection workshops with industry experts.",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: 3,
                tag: "Mindfulness & Health",
                title: "Wellness & Yoga Mornings",
                desc: "Morning mindfulness practices, emotional regulation routines, and holistic lifestyle sessions.",
                image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: 4,
                tag: "Student Leadership",
                title: "Peer Educators' Workshop",
                desc: "Empowering student wellbeing ambassadors to lead cyber safety and anti-bullying awareness.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              }
            ].map((pic) => (
              <div 
                key={pic.id} 
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                onClick={() => setSelectedImage(pic)}
              >
                <div className="h-48 w-full overflow-hidden relative bg-gray-100">
                  <img 
                    src={pic.image} 
                    alt={pic.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/20">
                      {pic.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-brand-charcoal p-1.5 rounded-full shadow-md group-hover:scale-110 transition-transform">
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className={`font-serif text-sm font-bold text-brand-charcoal group-hover:text-${theme.primary} transition-colors leading-snug`}>
                      {pic.title}
                    </h4>
                    <p className="text-[11px] text-brand-muted font-inter leading-relaxed mt-1">
                      {pic.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-50 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                    <span>View Photo</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CHILD PROTECTION POLICY (CPP) ACCORDION ── */}
        <div className="space-y-6 pt-4 border-t border-gray-100 mt-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Safety First</span>
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Child Protection Policy (CPP)</h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter font-medium leading-relaxed">
              At DLF Public School, child safety is our highest priority. Our comprehensive Child Protection Policy ensures a secure, nurturing, and zero-tolerance environment for every student.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 pt-4">
            {[
              {
                title: "1. Scope & Legal Compliance",
                desc: "This CPP is guided by ratified international conventions and conforms strictly to child protection laws in force in India. The school maintains a zero-tolerance approach to physical violence, mental harassment, cyber bullying, ragging, or abuse in school premises, school buses, or any extended learning environment.",
                details: [
                  "Conformity with Protection of Children from Sexual Offences (POCSO) Act, 2012.",
                  "Conformity with the Juvenile Justice (Care and Protection of Children) Act, 2015.",
                  "Conformity with the Indian Penal Code (IPC) and the Information Technology Act, 2000.",
                  "Applies to all school staff, teachers, visitors, parents, visiting faculty, and third-party vendors."
                ]
              },
              {
                title: "2. Key Definitions & Covered Offenses",
                desc: "The policy establishes clear legal definitions of behaviors that are strictly prohibited and subject to immediate disciplinary and penal action:",
                details: [
                  "Child Abuse: Physical, emotional, online, or sexual abuse resulting in actual or potential harm to a child's dignity.",
                  "Ragging / Bullying: Disorderly conduct causing teasing, psychological harm, embarrassment, or fear.",
                  "Cyber Bullying & Stalking: Harassment, intimidation, or tracking using electronic devices, social media, or networks.",
                  "Physical Violence: Any act causing bodily pain, injury, or impairing the development of the child."
                ]
              },
              {
                title: "3. Complaint & Redressal Mechanism",
                desc: "Any staff member, parent, or student can report safety incidents. The school ensures complete confidentiality and protection for the complainant.",
                details: [
                  "Complaints can be handed in writing to any teacher, counselor, Principal, or Child Protection Officer.",
                  "POCSO cases are immediately routed to the Student Safety Committee (SSC) and reported to local police/Special Juvenile Police Unit within 24 hours.",
                  "Mandatory reporting of suspected child abuse (failure to report is a criminal offense).",
                  "Direct line to national Child Helpline: 1098."
                ]
              },
              {
                title: "4. Code of Conduct for Staff (Do's & Don'ts)",
                desc: "All staff members are bound by strict behavioral guidelines to maintain professional boundaries:",
                details: [
                  "DO: Respect child privacy; remain visible in classrooms/workplaces; report suspicious behavior immediately.",
                  "DON'T: Spend excessive time alone with children in secluded areas; use language that is shaming, belittling, or discriminatory.",
                  "DO: Treat all students with equal dignity regardless of race, gender, background, or ability.",
                  "DON'T: Interact with students over personal social media platforms (only official channels allowed)."
                ]
              },
              {
                title: "5. Safety Guidelines for Online Learning",
                desc: "Ensuring digital classrooms remain safe and professional spaces for both teachers and students:",
                details: [
                  "Teachers must broadcast from professional environments, use full display names, and set secure meeting rooms.",
                  "Students must use full names, appropriate profile pictures, and keep parents informed of all online sessions.",
                  "Strict prohibition on sharing students' work, opinions, or images without explicit consent.",
                  "No sharing of personal contact credentials or private messaging in school virtual spaces."
                ]
              },
              {
                title: "6. Recruitment Safeguards & Annual Audits",
                desc: "We screen and train all individuals who interact with our students to enforce institutional accountability:",
                details: [
                  "Mandatory background checks, police verification, and character certificates for all new employees.",
                  "Signed affidavits certifying that the candidate has no pending accusations under the POCSO or JJ Acts.",
                  "Bi-annual collective meetings of teachers, parents, and students to spread awareness on child safety.",
                  "Annual safety audit resulting in a 'Child Safety Checklist' report published by school management."
                ]
              }
            ].map((section, sIdx) => (
              <details 
                key={sIdx} 
                className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden hover:shadow-md transition-shadow duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h4 className={`font-serif text-sm sm:text-base font-bold text-brand-charcoal hover:text-${theme.vibrant} transition-colors pr-4`}>
                    {section.title}
                  </h4>
                  <span className={`text-${theme.primary} shrink-0 transition-transform duration-300 group-open:rotate-180`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                <div className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed font-medium mt-3 pt-3 border-t border-gray-50 space-y-3">
                  <p>{section.desc}</p>
                  <ul className="space-y-1.5 pl-1.5 text-xs text-brand-charcoal font-semibold">
                    {section.details.map((item, iIdx) => (
                      <li key={iIdx} className="flex gap-2 items-start leading-relaxed">
                        <CheckCircle2 className={`w-3.5 h-3.5 text-${theme.accent} shrink-0 mt-0.5`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
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
              {currentSchool?.name || 'DLF Group Schools'}
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

      {/* Lightbox Gallery Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white p-2 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-72 sm:h-96 w-full bg-gray-900 overflow-hidden relative">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-brand-gold text-brand-charcoal px-3 py-1 rounded-full font-inter shadow-md">
                  {selectedImage.tag}
                </span>
              </div>
            </div>
            <div className="p-6 space-y-2">
              <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed font-medium">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
