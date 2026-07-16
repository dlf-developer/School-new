import React, { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  BookOpen, CheckCircle, Compass, Cpu, TrendingUp, 
  HelpCircle, Users, BookOpenCheck, ChevronDown, 
  Award, Globe, ClipboardList, Flame, Lightbulb, 
  Target, GraduationCap, ShieldCheck, ArrowRight, X 
} from 'lucide-react'
import gsap from 'gsap'
import { useSiteData } from '../hooks/useSiteData'
import ImageWithLoader from './ImageWithLoader'

export default function Curriculum() {
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

  const [activeTab, setActiveTab] = useState(activeBranch === 'dlf-sahibabad' ? 'skill-overview' : 'pathway')
  const panesRef = useRef({})

  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return

    const currentPane = panesRef.current[activeTab]
    const targetPane = panesRef.current[newTab]

    if (currentPane && targetPane) {
      gsap.to(currentPane, {
        opacity: 0,
        y: 10,
        duration: 0.25,
        onComplete: () => {
          setActiveTab(newTab)
          gsap.fromTo(targetPane, 
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
          )
        }
      })
    } else {
      setActiveTab(newTab)
    }
  }

  // ==========================================
  // CBSE (Sahibabad) Specific Content
  // ==========================================
  
  const cbseTabs = [
    { id: 'skill-overview', label: 'Skill Education' },
    { id: 'kaushal-bodh', label: 'Kaushal Bodh (VI-VIII)' },
    { id: 'kaushal-vikas', label: 'Kaushal Vikas (IX-X)' },
    { id: 'streams', label: 'Streams Offered (XI-XII)' }
  ]

  // ==========================================
  // Render Branch-Specific Curriculums
  // ==========================================

  return (
    <section id="curriculum" className="py-20 sm:py-28 bg-transparent relative overflow-hidden text-brand-charcoal selection:bg-brand-gold/30">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full ambient-glow-1 -translate-y-1/2 opacity-40"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full ambient-glow-2 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 space-y-16">
        
        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
            {activeBranch === 'dlf-sahibabad' ? 'CBSE Affiliated Pathway' : 'Cambridge International School'}
          </span>
          <h3 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-${theme.primary}`}>
            {activeBranch === 'dlf-sahibabad' ? 'Academic Progression & Skill Core' : 'The Cambridge Pathway'}
          </h3>
          <div className={`w-12 h-[2.5px] bg-${theme.accent} mx-auto`}></div>
          <div className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium text-left md:text-center space-y-3">
            {activeBranch === 'dlf-sahibabad' ? (
              <>
                <p>
                  Our school is affiliated to the <strong className="text-brand-charcoal">CENTRAL BOARD OF SECONDARY EDUCATION (CBSE)</strong>. The School offers a wide range of academic choices. Aligned with the CBSE prescribed syllabus and in sync with the National Education Policy 2020, the focus extends beyond mastering content to building competencies that matter—critical thinking, problem-solving, creativity, and adaptability.
                </p>
                <p>
                  The curriculum is designed in accordance with the guidelines and recommendations of the <strong className="text-brand-charcoal">National Education Policy (NEP) 2020</strong>, fostering academic excellence, holistic development, and competency-based learning. It aims to nurture academically competent, socially responsible, and future-ready learners by providing a balanced blend of knowledge, skills, values, and real-world learning experiences.
                </p>
              </>
            ) : (
              <p className="text-center">
                Authorized Cambridge school offering a globally recognized curriculum from Classes I–VIII, with higher grades added progressively. Nurturing learners to be confident, responsible, reflective, innovative, and engaged.
              </p>
            )}
          </div>
        </div>

        {activeBranch === 'dlf-sahibabad' ? (
          // ========================================================
          // ── CBSE LAYOUT (DLPS Sahibabad) ──
          // ========================================================
          <div className="space-y-12">
            
            {/* Stats Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { val: "2200+", label: "Students", desc: "Enrolled across progressive learning programs." },
                { val: "1:17", label: "Teacher Student Ratio", desc: "Ensuring personal attention & mentor focus." },
                { val: "CBSE Board", label: "Foundation- XII", desc: "Fully aligned to CBSE & NEP 2020 guidelines." },
                { val: "Cambridge Board", label: "I- VIII", desc: "Authorized Cambridge learning pathway." }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className={`font-serif text-2xl font-extrabold text-${theme.primary}`}>{stat.val}</span>
                  <h4 className="text-[11px] font-bold text-brand-charcoal mt-1">{stat.label}</h4>
                  <p className="text-[9px] text-brand-muted font-inter leading-relaxed mt-0.5">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Tab Selector */}
            <div className="flex items-center w-full overflow-x-auto no-scrollbar gap-2 sm:gap-4 pb-2 snap-x snap-mandatory">
              {cbseTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`tab-btn px-5 py-3 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 border shrink-0 snap-center cursor-pointer ${
                    activeTab === tab.id
                      ? `bg-${theme.primary} text-white border-${theme.primary} active`
                      : `bg-white text-brand-charcoal hover:bg-${theme.primary}/5 border-${theme.primary}/10`
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* CURRICULAR DETAIL BOARD */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-gray-100 min-h-[350px] relative">
              
              {/* Tab Panel: Skill Education Overview */}
              <div 
                ref={el => panesRef.current['skill-overview'] = el}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${activeTab === 'skill-overview' ? 'active' : 'hidden'}`}
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}>
                    <Cpu className="w-3.5 h-3.5" /> 21st Century Capabilities
                  </div>
                  <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>NEP 2020 Skill Integration</h4>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                    Aligned with the vision of the National Education Policy 2020 and the skill education initiatives of CBSE, DLF Public School integrates skill-based learning across all stages of schooling to prepare students for the demands of the twenty-first century.
                  </p>
                  
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-2">
                    <h5 className={`text-[10px] sm:text-xs font-bold text-${theme.primary} uppercase tracking-wider`}>Computational Thinking &amp; AI (Class III onwards)</h5>
                    <p className="text-xs text-brand-charcoal font-semibold leading-relaxed">
                      Building digital fluency, logical reasoning, and problem-solving through age-appropriate activities and projects.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative">
                  <ImageWithLoader src="/campus/campus2.jpg" alt="DLF Skill Education Studio" loading="lazy" imgClassName="object-center" />
                </div>
              </div>

              {/* Tab Panel: Kaushal Bodh (VI-VIII) */}
              <div 
                ref={el => panesRef.current['kaushal-bodh'] = el}
                className={`space-y-8 ${activeTab === 'kaushal-bodh' ? 'active' : 'hidden'}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 sm:space-y-6">
                    <div className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}>
                      <Lightbulb className="w-3.5 h-3.5" /> Kaushal Bodh (VI–VIII)
                    </div>
                    <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Experiential Skill Domains</h4>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                      Experiential learning through the domains of Life Forms, Machines and Materials, and Human Services. Each student undertakes projects across all three domains over the academic year, ensuring balanced exposure and holistic development. It nurtures competencies that matter in real-world contexts—critical thinking, design thinking, communication, collaboration, digital literacy and entrepreneurial mindset.
                    </p>
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative">
                    <ImageWithLoader src="/campus/campus3.jpg" alt="Middle School Robotics Studio" loading="lazy" imgClassName="object-center" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  {/* Domain 1 */}
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-150 flex flex-col justify-between space-y-4">
                    <div>
                      <span className={`text-[9px] uppercase font-bold tracking-widest text-${theme.vibrant} bg-${theme.primary}/5 px-2.5 py-1 rounded-full`}>Compulsory</span>
                      <h5 className={`font-serif text-base font-bold text-brand-charcoal mt-3`}>Work with Life Forms</h5>
                      <ul className="space-y-2 text-xs font-inter font-semibold text-brand-muted mt-4">
                        {['Biodiversity Register', 'Plant Nursery', 'Keyhole Garden and Growing Microgreens'].map((item, idx) => (
                          <li key={idx} className="flex gap-2 items-start leading-relaxed">
                            <span className={`w-1.5 h-1.5 rounded-full bg-${theme.accent} mt-1.5 shrink-0`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Domain 2 */}
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-150 flex flex-col justify-between space-y-4">
                    <div>
                      <span className={`text-[9px] uppercase font-bold tracking-widest text-${theme.accent} bg-brand-gold/10 px-2.5 py-1 rounded-full`}>Choice</span>
                      <h5 className={`font-serif text-base font-bold text-brand-charcoal mt-3`}>Work with Machines &amp; Materials</h5>
                      <ul className="space-y-2 text-xs font-inter font-semibold text-brand-muted mt-4">
                        {[
                          'Animation and Game', 'Jewellery Making', 'Handicrafts (Craft and Sculpture)', 
                          'Maker Skills', 'Tie and Die and Block Printing', 'Fundamental Culinary Skills/Young Culinary Studio', 
                          'AI Assistant', '3D Printing – From Sketch to Reality', 'Home Automation', 
                          'Bake Craft/Applied Baking Skills', 'Candle Making', 'Food Preservation through Organic Techniques'
                        ].map((item, idx) => (
                          <li key={idx} className="flex gap-2 items-start leading-relaxed">
                            <span className={`w-1.5 h-1.5 rounded-full bg-${theme.accent} mt-1.5 shrink-0`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Domain 3 */}
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-150 flex flex-col justify-between space-y-4">
                    <div>
                      <span className={`text-[9px] uppercase font-bold tracking-widest text-${theme.vibrant} bg-${theme.primary}/5 px-2.5 py-1 rounded-full`}>Compulsory</span>
                      <h5 className={`font-serif text-base font-bold text-brand-charcoal mt-3`}>Work with Human Services</h5>
                      <ul className="space-y-2 text-xs font-inter font-semibold text-brand-muted mt-4">
                        {['Healthy Mind and Healthy Body', 'Family Health Book', 'Creating Advertisements'].map((item, idx) => (
                          <li key={idx} className="flex gap-2 items-start leading-relaxed">
                            <span className={`w-1.5 h-1.5 rounded-full bg-${theme.accent} mt-1.5 shrink-0`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Panel: Kaushal Vikas (IX-X) */}
              <div 
                ref={el => panesRef.current['kaushal-vikas'] = el}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${activeTab === 'kaushal-vikas' ? 'active' : 'hidden'}`}
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}>
                    <Target className="w-3.5 h-3.5" /> Kaushal Vikas (IX–X)
                  </div>
                  <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Application-Based Projects</h4>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                    Designed for conceptual development and application-based learning through structured scientific and vocational projects.
                  </p>

                  <div className="space-y-3 pt-2 text-xs font-inter font-semibold">
                    <div className="flex gap-3 items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <span className={`text-[10px] font-bold px-2 py-1 bg-${theme.primary}/10 text-${theme.primary} rounded`}>Life Form</span>
                      <span>Roof Top Gardening</span>
                    </div>
                    <div className="flex gap-3 items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <span className={`text-[10px] font-bold px-2 py-1 bg-${theme.primary}/10 text-${theme.primary} rounded`}>Machine &amp; Material</span>
                      <span>Food Processing</span>
                    </div>
                    <div className="flex gap-3 items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <span className={`text-[10px] font-bold px-2 py-1 bg-${theme.primary}/10 text-${theme.primary} rounded`}>Human Services</span>
                      <span>Health</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative">
                  <ImageWithLoader src="/campus/campus4.jpg" alt="Secondary School Applied Labs" loading="lazy" imgClassName="object-center" />
                </div>
              </div>

              {/* Tab Panel: Streams Offered (XI-XII) */}
              <div 
                ref={el => panesRef.current['streams'] = el}
                className={`space-y-6 ${activeTab === 'streams' ? 'active' : 'hidden'}`}
              >
                <div className="space-y-3">
                  <div className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}>
                    <GraduationCap className="w-3.5 h-3.5" /> Higher Secondary Specializations
                  </div>
                  <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Specialized Streams Offered (Grades XI-XII)</h4>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium max-w-3xl">
                    We offer a wide range of academic choices in sync with the National Education Policy 2020. Students choose from 3 robust specialized pathways with flexible subject combinations:
                  </p>
                </div>

                <div className="overflow-x-auto border border-gray-150 rounded-2xl shadow-sm">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse font-inter">
                    <thead>
                      <tr className={`bg-${theme.primary}/5 text-${theme.primary} border-b border-gray-150 font-bold uppercase tracking-wider text-[10px]`}>
                        <th className="p-4 sm:p-5">Streams</th>
                        <th className="p-4 sm:p-5">Compulsory Subjects</th>
                        <th className="p-4 sm:p-5">4th Subject</th>
                        <th className="p-4 sm:p-5">5th Subject</th>
                        <th className="p-4 sm:p-5">Sixth Subject</th>
                      </tr>
                    </thead>
                    <tbody className="text-brand-charcoal font-semibold divide-y divide-gray-100">
                      <tr>
                        <td className={`p-4 sm:p-5 font-serif text-xs font-bold text-${theme.primary} bg-gray-50/50`}>STREAM 1 <span className="block text-[10px] text-brand-muted font-sans font-medium uppercase mt-0.5">Humanities</span></td>
                        <td className="p-4 sm:p-5 leading-relaxed text-xs">
                          <ol className="list-decimal pl-4 space-y-0.5">
                            <li>English</li>
                            <li>Pol.Science/ Hindustani (Vocal) Music</li>
                            <li>Economics/Home Science/Indian Dance (Kathak)</li>
                          </ol>
                        </td>
                        <td className="p-4 sm:p-5 text-xs text-brand-muted font-medium">Painting / Mathematics / History / Banking*</td>
                        <td className="p-4 sm:p-5 text-xs text-brand-muted font-medium">Psychology/ Applied Mathematics/ Physical Education / /Mass Media/Artificial Intelligence</td>
                        <td className="p-4 sm:p-5 text-xs text-brand-muted font-medium">Food production/Painting/Music/Yoga/AI/Mass Media</td>
                      </tr>
                      <tr>
                        <td className={`p-4 sm:p-5 font-serif text-xs font-bold text-${theme.primary} bg-gray-50/50`}>STREAM 2 <span className="block text-[10px] text-brand-muted font-sans font-medium uppercase mt-0.5">Commerce</span></td>
                        <td className="p-4 sm:p-5 leading-relaxed text-xs">
                          <ol className="list-decimal pl-4 space-y-0.5">
                            <li>English</li>
                            <li>Business Studies/ Hindustani (Vocal) Music</li>
                            <li>Economics/ Home Science/ Indian Dance (Kathak)</li>
                          </ol>
                        </td>
                        <td className="p-4 sm:p-5 text-xs text-brand-muted font-medium">Accountancy / Painting/ Banking*</td>
                        <td className="p-4 sm:p-5 text-xs text-brand-muted font-medium">Psychology/ Applied Mathematics/ Physical Education / Artificial Intelligence /Mass Media</td>
                        <td className="p-4 sm:p-5 text-xs text-brand-muted font-medium">Food production/Painting/Music/Yoga/AI/Mass Media</td>
                      </tr>
                      <tr>
                        <td className={`p-4 sm:p-5 font-serif text-xs font-bold text-${theme.primary} bg-gray-50/50`}>STREAM 3* <span className="block text-[10px] text-brand-muted font-sans font-medium uppercase mt-0.5">Science</span></td>
                        <td className="p-4 sm:p-5 leading-relaxed text-xs">
                          <ol className="list-decimal pl-4 space-y-0.5">
                            <li>English</li>
                            <li>Physics</li>
                            <li>Chemistry</li>
                          </ol>
                        </td>
                        <td className="p-4 sm:p-5 text-xs text-brand-charcoal">
                          <div className="space-y-2">
                            <div>
                              <span className="font-extrabold text-brand-charcoal block">Option A:</span>
                              <span className="text-brand-muted font-medium">Biology</span>
                            </div>
                            <div className="border-t border-gray-200 pt-1">
                              <span className="font-extrabold text-brand-charcoal block">Option B:</span>
                              <span className="text-brand-muted font-medium">Mathematics</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 sm:p-5 text-xs text-brand-charcoal">
                          <div className="space-y-2">
                            <div>
                              <span className="text-[9.5px] uppercase tracking-wider font-extrabold text-brand-muted block">For Option A (Biology):</span>
                              <span className="text-brand-muted font-medium leading-normal">Computer Science / Psychology / Economics / Physical Education / Mathematics / Mass Media/ Artificial Intelligence</span>
                            </div>
                            <div className="border-t border-gray-200 pt-2">
                              <span className="text-[9.5px] uppercase tracking-wider font-extrabold text-brand-muted block">For Option B (Mathematics):</span>
                              <span className="text-brand-muted font-medium leading-normal">Computer Science / Psychology / Economics / Physical Education / Biology / Mass Media/Artificial Intelligence</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 sm:p-5 text-xs text-brand-muted font-medium">Food production/Painting/Music/Yoga/AI/Mass Media</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-150 text-[10px] text-brand-muted font-inter leading-relaxed space-y-1">
                  <p className="font-bold text-brand-charcoal">* Important Guidelines:</p>
                  <p>1. Banking* subject selection requires students to clear the pre-requisite assessment guidelines.</p>
                  <p>2. Sixth subject options are vocational courses designed to build hands-on skills in food production, painting, music, yoga, AI, or mass media.</p>
                </div>
              </div>

            </div>

          </div>
        ) : (
          // ========================================================
          // ── CAMBRIDGE LAYOUT (DLWS Greater Noida) ──
          // ========================================================
          <div className="space-y-16">
            
            {/* Intro Ethos Block */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="space-y-4 flex-1">
                <div className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}>
                  <Globe className="w-3.5 h-3.5" /> Authorised Cambridge school
                </div>
                <h4 className="font-serif text-2xl font-bold text-brand-charcoal">The World's Gold Standard for Education</h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                  We offer the globally recognised Cambridge Assessment International Education curriculum from Classes I–VIII, with higher grades being added progressively each year. Through enquiry-based learning and international benchmarks, students develop confidence, creativity, critical thinking, and a global outlook. Here, learners are not just prepared for examinations — they are prepared for the world beyond classrooms.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 text-[10px] sm:text-xs font-inter font-bold text-brand-charcoal">
                  {['Globally Recognised', 'Enquiry-Based Learning', 'Personalised Choices', 'Seamless Pathway'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full bg-${theme.accent}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-80 lg:w-[420px] rounded-2xl overflow-hidden aspect-video shadow-md shrink-0">
                <ImageWithLoader src="/campus/campus3.jpg" alt="Cambridge Classroom" loading="lazy" />
              </div>
            </div>

            {/* The Cambridge Pathway Steps */}
            <div className="space-y-8">
              <h4 className={`font-serif text-2xl font-bold text-${theme.primary} text-center`}>The Cambridge Pathway</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { stage: "Cambridge Primary", grades: "Classes I – V", focus: "Foundations in English, Mathematics, Science, and Global Perspectives.", desc: "Focuses on developing literacy, numeracy, and active inquiry in young learners." },
                  { stage: "Cambridge Lower Secondary", grades: "Classes VI – VIII", focus: "Deepening skills across core academic disciplines.", desc: "Prepares students for the first global benchmark: the Checkpoint." },
                  { stage: "Cambridge IGCSE*", grades: "Class IX Onwards", focus: "Broad, flexible subject choices with international qualifications.", desc: "A comprehensive two-year program with IGCSE board examinations at the end of Class X." },
                  { stage: "Cambridge AS & A Levels*", grades: "Classes XI – XII", focus: "Specialised pre-university pathways for global career readiness.", desc: "Deep study and flexibility, highly recognized by universities worldwide." }
                ].map((p, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-3 hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-${theme.primary}`}></div>
                    <div className="space-y-2">
                      <span className={`text-[9px] uppercase tracking-widest font-extrabold px-2.5 py-1 rounded-full bg-${theme.primary}/10 text-${theme.primary}`}>
                        {p.grades}
                      </span>
                      <h4 className={`font-serif text-base font-bold text-brand-charcoal mt-2`}>{p.stage}</h4>
                      <p className="text-[11px] text-brand-charcoal font-semibold leading-relaxed font-inter">{p.focus}</p>
                      <p className="text-[10px] text-brand-muted leading-relaxed font-inter font-medium">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[9.5px] text-brand-muted italic text-center">* Higher grades are being added progressively each year.</p>
            </div>

            {/* Subjects Offered Board */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-10 space-y-6">
              <div className="space-y-1">
                <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>IGCSE Options</span>
                <h3 className={`font-serif text-2xl font-bold text-${theme.primary}`}>Cambridge IGCSE Subjects Offered</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                  Our flexible subject combinations allow learners to personalise their academic journey based on their interests and future aspirations beginning in Class IX.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-2">
                {[
                  { grp: "Group 1: Languages", compulsory: "English as a First Language (Compulsory)", subjects: ["Hindi as a Second Language", "French as a Second Language", "German as a Second Language"] },
                  { grp: "Group 2: Humanities & Social Sciences", compulsory: "", subjects: ["Global Perspectives (Hallmark subject)", "History", "Geography", "Sociology"] },
                  { grp: "Group 3: Sciences", compulsory: "", subjects: ["Physics", "Chemistry", "Biology"] },
                  { grp: "Group 4: Mathematics", compulsory: "", subjects: ["Mathematics Core", "Mathematics Extended (Recommended for Science/Engg)"] },
                  { grp: "Group 5: Commerce & Technology", compulsory: "", subjects: ["Economics", "Business Studies", "Computer Science"] }
                ].map((group, idx) => (
                  <div key={idx} className="bg-gray-50 p-5 rounded-2xl border border-gray-150/50 space-y-3 flex flex-col justify-between">
                    <div>
                      <h5 className={`font-serif text-xs font-bold text-${theme.primary} border-b border-gray-200 pb-2 mb-2`}>{group.grp}</h5>
                      {group.compulsory && (
                        <p className="text-[10px] font-extrabold text-brand-charcoal bg-white border border-gray-100 p-2 rounded-lg mb-2 leading-relaxed">
                          {group.compulsory}
                        </p>
                      )}
                      <ul className="space-y-1.5 text-[10px] text-brand-muted font-inter font-semibold">
                        {group.subjects.map((sub, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5 leading-relaxed">
                            <span className={`w-1 h-1 rounded-full bg-${theme.accent} mt-1.5 shrink-0`}></span>
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Checkpoint Results Table */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
              
              {/* Left Col: Checkpoint description */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-md flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>Checkpoint Assessments</h4>
                  <p className="text-xs text-brand-muted leading-relaxed font-inter font-medium">
                    At the end of Classes V and VIII, students appear for the Cambridge Checkpoint tests. These papers are set, administered, and marked independently by Cambridge International in the UK, offering an unbiased measurement of student progress.
                  </p>
                  <div className="space-y-2">
                    <h5 className={`text-[10px] sm:text-xs font-bold text-brand-charcoal uppercase tracking-wider`}>Standardised Performance Bands</h5>
                    <div className="grid grid-cols-2 gap-2 text-[9px] sm:text-[10px] font-semibold text-brand-muted font-inter">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand-greenVibrant"></span> Outstanding</span>
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span> High (Above global)</span>
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> Good (Above global)</span>
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-400"></span> Aspiring (At global)</span>
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-400"></span> Basic (Developing)</span>
                    </div>
                    <p className="text-[9px] text-brand-muted mt-1.5 font-medium leading-relaxed">
                      * Reported on a 0 to 50 scale. Scores of 21 to 30 consistently correspond to the Good performance band.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Col: Table */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 shadow-md p-6 sm:p-8 space-y-4 overflow-x-auto">
                <h4 className={`font-serif text-sm font-bold text-${theme.primary}`}>Cambridge Lower Secondary Checkpoint Results</h4>
                <p className="text-[10px] text-brand-muted font-inter leading-relaxed">
                  Showing average scores of the last three years. Every single learner has scored consistently above the international average in all subjects.
                </p>
                
                <table className="w-full text-[11px] text-left border-collapse font-inter">
                  <thead>
                    <tr className="border-b border-gray-100 text-brand-charcoal font-bold">
                      <th className="py-2">Subject</th>
                      <th className="py-2">2021–22</th>
                      <th className="py-2">2022–23</th>
                      <th className="py-2">2023–24</th>
                    </tr>
                  </thead>
                  <tbody className="text-brand-muted font-medium">
                    <tr className="border-b border-gray-50">
                      <td className="py-2.5 font-semibold text-brand-charcoal">English</td>
                      <td className="py-2.5 font-bold text-brand-charcoal">36 / 50</td>
                      <td className="py-2.5 font-bold text-brand-charcoal">35 / 50</td>
                      <td className="py-2.5 font-bold text-brand-charcoal">34 / 50</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-2.5 font-semibold text-brand-charcoal">Mathematics</td>
                      <td className="py-2.5 font-bold text-brand-charcoal">47 / 50</td>
                      <td className="py-2.5 font-bold text-brand-charcoal">42 / 50</td>
                      <td className="py-2.5 font-bold text-brand-charcoal">44 / 50</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-semibold text-brand-charcoal">Science</td>
                      <td className="py-2.5 font-bold text-brand-charcoal">42 / 50</td>
                      <td className="py-2.5 font-bold text-brand-charcoal">41 / 50</td>
                      <td className="py-2.5 font-bold text-brand-charcoal">37 / 50</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-[9px] text-brand-muted font-inter leading-relaxed mt-1 text-center">
                  Results marked and benchmarked by Cambridge International, UK. Scores reported on the standardised 0–50 Cambridge Checkpoint scale.
                </div>
              </div>

            </div>

            {/* FAQs Accordion */}
            <div className="space-y-6 pt-4 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Got Questions?</span>
                <h3 className={`font-serif text-2xl font-bold text-${theme.primary}`}>Frequently Asked Questions</h3>
              </div>

              <div className="space-y-3">
                {[
                  {
                    q: "Is Cambridge Assessment International Education accepted in India?",
                    a: "Yes. Cambridge qualifications are fully recognized by the Association of Indian Universities (AIU) and accepted as equivalent to Class X and XII by CBSE, CISCE (ICSE/ISC), State Boards, and universities across India and abroad."
                  },
                  {
                    q: "Can Cambridge students prepare for competitive exams like JEE or NEET?",
                    a: "Absolutely. Cambridge Assessment International Education offers rigorous preparation that matches competitive exam syllabus. Early alignment of subject choices (Physics, Chemistry, Biology, Mathematics) in Class IX onwards allows smooth preparation for JEE, NEET, CUET, NDA, and other entrance exams."
                  },
                  {
                    q: "What is the Cambridge Checkpoint, and why does it matter?",
                    a: "Checkpoint is a diagnostic assessment conducted at the end of Classes V and VIII. These tests are set, marked, and evaluated independently by Cambridge UK, giving parents an honest, unbiased measure of their child's progress against global standards in English, Mathematics, and Science."
                  },
                  {
                    q: "How is teaching in a Cambridge classroom different from traditional boards?",
                    a: "Cambridge classroom focus is on 'how to think' rather than 'what to think'. It is enquiry-based and experiential. Students discuss, investigate, collaborate, fail before they succeed, reflect, and apply concepts to real-world performance instead of relying on rote learning."
                  },
                  {
                    q: "How many subjects does a student study in Cambridge IGCSE?",
                    a: "Typically, students opt for 7 to 9 subjects. This includes compulsory languages (English First Language and a Second Language), Mathematics, Sciences, and electives chosen from Humanities and Commerce/Technology groups."
                  },
                  {
                    q: "Can students transition back to CBSE or other boards later?",
                    a: "Yes. The Cambridge curriculum is highly compatible. Students can smoothly transition back to CBSE, ISC, State Boards, or choose to continue with Cambridge AS & A Levels for Class XI and XII."
                  },
                  {
                    q: "Is Cambridge valid for UPSC, Civil Services, or Government Jobs in India?",
                    a: "Yes. Cambridge qualifications are fully valid for UPSC, IAS/IPS, PCS, Defence exams (NDA, CDS), and all central or state government jobs, alongside a graduation degree."
                  },
                  {
                    q: "Where are the IGCSE board examinations conducted?",
                    a: "As an authorised Cambridge examination centre, all board examinations are conducted right here on our school campus under strict international standards and couriered to Cambridge UK for independent evaluation."
                  }
                ].map((faq, fIdx) => (
                  <details 
                    key={fIdx} 
                    className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden hover:shadow-md transition-shadow duration-300"
                  >
                    <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                      <h5 className="font-serif text-sm font-bold text-brand-charcoal pr-4">
                        {faq.q}
                      </h5>
                      <span className={`text-${theme.primary} shrink-0 transition-transform duration-300 group-open:rotate-180`}>
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </summary>
                    <p className="text-xs text-brand-muted leading-relaxed font-inter font-medium mt-3 pt-3 border-t border-gray-50">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  )
}
