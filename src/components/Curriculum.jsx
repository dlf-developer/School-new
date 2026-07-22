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
  const { schoolId, pathway } = useParams()
  const { schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]
  
  // Determine active pathway: default to 'cbse' for dlf-sahibabad, or use pathway param
  let activePathway = pathway ? pathway.toLowerCase() : null
  if (!activePathway) {
    activePathway = activeBranch === 'dlf-greater-noida' ? 'cambridge' : 'cbse'
  }
  
  const theme = currentSchool?.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27'
  }

  const [activeTab, setActiveTab] = useState(activePathway === 'cbse' ? 'skill-overview' : 'pathway')
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

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 space-y-12">
        
        {/* Pathway Switcher Pills */}
        <div className="flex justify-center items-center gap-3">
          <Link
            to={`/school/${activeBranch}/curriculum/cbse`}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
              activePathway === 'cbse'
                ? `bg-${theme.primary} text-white border-${theme.primary} shadow-md`
                : `bg-white text-brand-charcoal hover:bg-gray-50 border-gray-200`
            }`}
          >
            <BookOpen className="w-4 h-4" />
            CBSE Pathway
          </Link>
          <Link
            to={`/school/${activeBranch}/curriculum/cambridge`}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
              activePathway === 'cambridge'
                ? `bg-${theme.primary} text-white border-${theme.primary} shadow-md`
                : `bg-white text-brand-charcoal hover:bg-gray-50 border-gray-200`
            }`}
          >
            <Globe className="w-4 h-4" />
            Cambridge Pathway
          </Link>
        </div>

        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
            {activePathway === 'cbse' ? 'CBSE Affiliated Pathway' : 'Cambridge International School'}
          </span>
          <h3 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-${theme.primary}`}>
            {activePathway === 'cbse' ? 'Academic Progression & Skill Core' : 'The Cambridge Pathway'}
          </h3>
          <div className={`w-12 h-[2.5px] bg-${theme.accent} mx-auto`}></div>
          <div className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium text-left md:text-center space-y-3">
            {activePathway === 'cbse' ? (
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

        {activePathway === 'cbse' ? (
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
          // ── CAMBRIDGE LAYOUT (Cambridge Pathway) ──
          // ========================================================
          <div className="space-y-16">
            
            {/* Hero Ethos Block with Cambridge Logo */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 flex-1">
                <div className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}>
                  <Globe className="w-3.5 h-3.5" /> Authorised Cambridge International School
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal">The World's Gold Standard for Education</h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                  We also offer the globally recognised Cambridge Assessment International Education curriculum from Classes I–VIII, with higher grades being added progressively each year. Through enquiry-based learning and international benchmarks, students develop confidence, creativity, critical thinking, and a global outlook. Here, learners are not just prepared for examinations — they are prepared for the world beyond classrooms.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm shrink-0 flex items-center justify-center">
                <img src="/cambridge/image1.png" alt="Cambridge Assessment International Education - Cambridge International School" className="h-16 sm:h-20 object-contain" />
              </div>
            </div>

            {/* Why Parents Across the World Choose Cambridge? */}
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Global Excellence</span>
                <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Why Parents Across the World Choose Cambridge?</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Globally Recognised Qualifications", desc: "Recognised by top universities and educational institutions across India and 160+ countries worldwide." },
                  { title: "International Mindset", desc: "Develops global perspectives, cross-cultural understanding, and open-minded enquiry." },
                  { title: "Enquiry-Based Learning", desc: "Encourages students to ask questions, explore concepts deeply, and think critically." },
                  { title: "Personalised Subject Choices", desc: "Offers flexible subject combinations tailored to student interests, strengths, and career goals." },
                  { title: "International Benchmarking", desc: "Evaluated independently by Cambridge UK with transparent global standard performance." },
                  { title: "Future-Ready Skills", desc: "Builds problem-solving, collaboration, digital literacy, and research capabilities." },
                  { title: "Seamless Learning Pathway", desc: "Structured progression from Primary → Lower Secondary → IGCSE → AS & A Levels." },
                  { title: "Holistic Development", desc: "Focuses on developing confident, responsible, reflective, innovative, and engaged individuals." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-2">
                    <div className={`w-7 h-7 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center font-bold text-xs`}>
                      0{idx + 1}
                    </div>
                    <h5 className="font-serif text-xs sm:text-sm font-bold text-brand-charcoal">{item.title}</h5>
                    <p className="text-[11px] text-brand-muted leading-relaxed font-inter font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Cambridge Pathway at DLF Public School */}
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Academic Journey</span>
                <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>The Cambridge Pathway at DLF Public School</h4>
                <p className="text-xs sm:text-sm text-brand-muted font-medium">A seamless, progressive academic journey — Class I through A Levels</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { stage: "Cambridge Primary", grades: "Classes I – V", focus: "Foundations in literacy, numeracy, and inquiry", desc: "Focuses on developing literacy, numeracy, and active inquiry in young learners." },
                  { stage: "Cambridge Lower Secondary", grades: "Classes VI – VIII", focus: "Deepening skills across core disciplines", desc: "Prepares students for the first global benchmark: the Checkpoint." },
                  { stage: "Cambridge IGCSE*", grades: "Classes IX – X", focus: "Broad, flexible subject choices with global benchmarking", desc: "A comprehensive two-year program with IGCSE board examinations at the end of Class X." },
                  { stage: "Cambridge AS & A Levels*", grades: "Classes XI – XII", focus: "Specialised pathways for university and career readiness", desc: "Deep study and flexibility, highly recognized by universities worldwide." }
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
              <p className="text-[9.5px] text-brand-muted italic text-center">*Higher grades are being added progressively each year.</p>
            </div>

            {/* Worldwide Cambridge Network & Recognition */}
            <div className={`bg-gradient-to-br from-${theme.primary}/5 via-white to-brand-gold/5 rounded-3xl border border-gray-150 p-6 sm:p-10 space-y-6`}>
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Global Footprint</span>
                <h4 className={`font-serif text-2xl font-bold text-${theme.primary}`}>Worldwide Cambridge Network</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-inter font-medium text-brand-charcoal">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 space-y-1 shadow-sm">
                  <strong className={`block text-base font-serif font-bold text-${theme.primary}`}>2,500+ Schools</strong>
                  <p className="text-brand-muted text-[11px]">Cambridge Primary is taught in over 120 countries with over 130,000 Checkpoint entries annually.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 space-y-1 shadow-sm">
                  <strong className={`block text-base font-serif font-bold text-${theme.primary}`}>4,000+ Schools</strong>
                  <p className="text-brand-muted text-[11px]">Cambridge Lower Secondary is taught across nearly 140 countries globally.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 space-y-1 shadow-sm">
                  <strong className={`block text-base font-serif font-bold text-${theme.primary}`}>6,000+ Schools</strong>
                  <p className="text-brand-muted text-[11px]">Cambridge IGCSE is the world's most popular qualification for 14 to 16-year-olds in 150+ countries.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 space-y-1 shadow-sm">
                  <strong className={`block text-base font-serif font-bold text-${theme.primary}`}>50+ Countries</strong>
                  <p className="text-brand-muted text-[11px]">Cambridge O Level qualifications are taught worldwide in over 50 countries.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 space-y-1 shadow-sm">
                  <strong className={`block text-base font-serif font-bold text-${theme.primary}`}>130+ Countries</strong>
                  <p className="text-brand-muted text-[11px]">Cambridge AS & A Levels are taken by hundreds of thousands of students each year.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 space-y-1 shadow-sm">
                  <strong className={`block text-base font-serif font-bold text-${theme.primary}`}>2,350+ Universities</strong>
                  <p className="text-brand-muted text-[11px]">Recognised by higher education institutions in 90 countries worldwide.</p>
                </div>
              </div>
              <div className="text-center pt-2">
                <a href="https://www.cambridgeinternational.org/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-xs font-bold text-${theme.primary} hover:underline`}>
                  Visit Official Cambridge International Website <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Checkpoint Results Table */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-md flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Global Benchmarking</span>
                  <h4 className={`font-serif text-xl font-bold text-${theme.primary}`}>Cambridge Lower Secondary Checkpoint Results</h4>
                  <p className="text-xs text-brand-muted leading-relaxed font-inter font-medium">
                    At the end of Classes V and VIII, students appear for the internationally benchmarked Cambridge Checkpoint Assessments in English, Mathematics, and Science. These assessments are independently set, administered & evaluated by Cambridge UK, offering parents a transparent and authentic measure of student progress against global standards.
                  </p>
                  <p className="text-xs text-brand-muted leading-relaxed font-inter font-medium">
                    Below is the Checkpoint Result of the last three years showing that every single one of them has scored above the international average in all subjects (Checkpoint scores of 21 to 30 consistently correspond to the <strong className="text-brand-charcoal">Good</strong> performance band) at the Cambridge Assessment.
                  </p>
                </div>
                <p className="text-[10px] text-brand-muted italic border-t border-gray-100 pt-3">
                  *Each learner receives a personalised Statement of Achievement from Cambridge International, highlighting strengths, areas of growth, and readiness for future academic pathways.
                </p>
              </div>

              <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 shadow-md p-6 sm:p-8 space-y-4 overflow-x-auto">
                <h4 className={`font-serif text-sm font-bold text-${theme.primary}`}>3-Year Checkpoint Performance Trend</h4>
                <table className="w-full text-[11px] text-left border-collapse font-inter">
                  <thead>
                    <tr className="border-b border-gray-100 text-brand-charcoal font-bold bg-gray-50/50">
                      <th className="py-3 px-3">Subject</th>
                      <th className="py-3 px-3">2021–22</th>
                      <th className="py-3 px-3">2022–23</th>
                      <th className="py-3 px-3">2023–24</th>
                    </tr>
                  </thead>
                  <tbody className="text-brand-muted font-medium divide-y divide-gray-50">
                    <tr>
                      <td className="py-3 px-3 font-semibold text-brand-charcoal">English</td>
                      <td className="py-3 px-3 font-bold text-brand-charcoal">36/50</td>
                      <td className="py-3 px-3 font-bold text-brand-charcoal">35/50</td>
                      <td className="py-3 px-3 font-bold text-brand-charcoal">34/50</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-brand-charcoal">Mathematics</td>
                      <td className="py-3 px-3 font-bold text-brand-charcoal">47/50</td>
                      <td className="py-3 px-3 font-bold text-brand-charcoal">42/50</td>
                      <td className="py-3 px-3 font-bold text-brand-charcoal">44/50</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-brand-charcoal">Science</td>
                      <td className="py-3 px-3 font-bold text-brand-charcoal">42/50</td>
                      <td className="py-3 px-3 font-bold text-brand-charcoal">41/50</td>
                      <td className="py-3 px-3 font-bold text-brand-charcoal">37/50</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-[10px] text-brand-muted font-inter leading-relaxed text-center">
                  Results marked and benchmarked by Cambridge International, UK. Scores reported on the standardised 0–50 Cambridge Checkpoint scale.
                </div>
              </div>
            </div>

            {/* ASSET Exam Performance & Year-on-Year Growth Chart */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 sm:p-10 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>National Benchmarking</span>
                  <h4 className={`font-serif text-2xl font-bold text-${theme.primary}`}>ASSET Exam Performance & Year-on-Year Growth</h4>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                    Similarly, Cambridge Students year after year have also scored above the national benchmarking in ASSET Exam.
                  </p>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                    <strong className="text-brand-charcoal">ASSET</strong> is a skill-based diagnostic assessment that evaluates students' conceptual understanding and critical thinking in core subjects like English, Mathematics, Science, and Social Studies. Unlike conventional tests, it assesses logical reasoning and practical application rather than rote memorization.
                  </p>
                </div>
                <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-lg border border-gray-150 p-2 bg-gray-50">
                  <img 
                    src="/cambridge/image2.png" 
                    alt="Ei ASSET Management Year-on-Year Growth Maths - DLF Public School-IGCSE Ghaziabad" 
                    className="w-full h-auto rounded-xl object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Subjects Offered Board */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-10 space-y-6">
              <div className="space-y-1">
                <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>IGCSE Options</span>
                <h3 className={`font-serif text-2xl font-bold text-${theme.primary}`}>Subjects Offered — Cambridge IGCSE | Class IX Onwards</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                  Our flexible subject combinations allow learners to personalise their academic journey based on their interests, abilities, and future aspirations — whether in engineering, medicine, humanities, business, design, or emerging global careers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-2">
                {[
                  { grp: "Languages", compulsory: "English as a First Language (Compulsory)", subjects: ["Hindi", "French", "German"] },
                  { grp: "Humanities & Social Sciences", compulsory: "", subjects: ["Global Perspectives", "History", "Geography", "Sociology"] },
                  { grp: "Sciences", compulsory: "", subjects: ["Physics", "Chemistry", "Biology"] },
                  { grp: "Commerce & Technology", compulsory: "", subjects: ["Economics", "Business Studies", "Computer Science"] },
                  { grp: "Mathematics", compulsory: "", subjects: ["Mathematics Core", "Mathematics Extended"] }
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

            {/* FAQs Accordion (You Asked. We Answered.) */}
            <div className="space-y-6 pt-4 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Got Questions?</span>
                <h3 className={`font-serif text-2xl font-bold text-${theme.primary}`}>Frequently Asked Questions</h3>
                <p className="text-xs text-brand-muted font-medium">You Asked. We Answered.</p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    q: "1. Is Cambridge accepted in India?",
                    a: "Yes. Cambridge IGCSE is recognised by the Association of Indian Universities (AIU) and accepted by CBSE, ISC, State Boards, and universities across India and abroad."
                  },
                  {
                    q: "2. Can Cambridge students prepare for JEE or NEET?",
                    a: "Absolutely. Students can pursue JEE, NEET, CUET, UPSC, NDA, and other competitive examinations with the right subject choices and academic planning."
                  },
                  {
                    q: "3. What is the Cambridge Checkpoint?",
                    a: "Checkpoint is an internationally benchmarked assessment conducted in Classes V and VIII that evaluates student understanding in English, Mathematics, and Science."
                  },
                  {
                    q: "4. How is Cambridge different from traditional boards?",
                    a: "Cambridge focuses on conceptual understanding, application, research, analysis, discussion, and real-world problem-solving rather than rote learning."
                  },
                  {
                    q: "5. How many subjects does a student study in IGCSE?",
                    a: "Typically, students opt for 7–9 subjects, including core and elective choices tailored to their interests and future goals."
                  },
                  {
                    q: "6. Are Cambridge classrooms more interactive?",
                    a: "Yes. Students actively participate through discussions, presentations, experiments, collaborative projects, and inquiry-driven learning experiences."
                  },
                  {
                    q: "7. Can students shift to another board later?",
                    a: "Yes. Students can smoothly transition to CBSE, ISC, State Boards, or continue with Cambridge AS & A Levels."
                  },
                  {
                    q: "8. Is Cambridge suitable for students moving abroad?",
                    a: "Absolutely. Cambridge qualifications are internationally portable and recognised in over 160 countries worldwide."
                  },
                  {
                    q: "9. Are examinations conducted in school?",
                    a: "Yes. As an authorised Cambridge examination centre, all Cambridge examinations are conducted at our campus under international standards and protocols."
                  },
                  {
                    q: "10. What kind of learner does Cambridge develop?",
                    a: "Cambridge nurtures learners who are confident, responsible, reflective, innovative, and engaged — young people prepared not only for examinations, but for life itself."
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
