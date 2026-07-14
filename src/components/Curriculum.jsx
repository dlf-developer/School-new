import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { BookOpen, CheckCircle, Compass, Cpu, TrendingUp, HelpCircle, Users, BookOpenCheck } from 'lucide-react'
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

  const [activeTab, setActiveTab] = useState('primary')
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

  const tabs = [
    { id: 'primary', label: 'Primary School (Grades I-V)' },
    { id: 'middle', label: 'Middle School (Grades VI-VIII)' },
    { id: 'secondary', label: 'Secondary (Grades IX-X)' },
    { id: 'senior', label: 'Senior Secondary (Grades XI-XII)' }
  ]

  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      {/* Floating Light Accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full ambient-glow-1 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 space-y-12">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4">
          <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Comprehensive Curriculum</span>
          <h3 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-${theme.primary}`}>Academic Progression</h3>
          <div className={`w-12 h-[2px] bg-${theme.accent} mx-auto`}></div>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
            Aligned with CBSE Board &amp; Cambridge Board parameters to prepare students for national excellence and global standards.
          </p>
        </div>

        {/* Stats Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { val: "2200+", label: "Enrolled Students", desc: "Nurtured across progressive learning programs." },
            { val: "1:17", label: "Teacher Student Ratio", desc: "Ensuring personal attention &amp; mentor focus." },
            { val: "CBSE Board", label: "Foundation to Class XII", desc: "Fully aligned to CBSE &amp; NEP 2020 guidelines." },
            { val: "Cambridge Board", label: "Class I to Class VIII", desc: "Globally recognised International pathway." }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <span className={`font-serif text-2xl font-extrabold text-${theme.primary}`}>{stat.val}</span>
              <h4 className="text-[11px] font-bold text-brand-charcoal mt-1">{stat.label}</h4>
              <p className="text-[9px] text-brand-muted font-inter leading-relaxed mt-0.5">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* TAB SELECTOR HEADER */}
        <div className="flex items-center w-full overflow-x-auto no-scrollbar gap-2 sm:gap-4 pb-2 snap-x snap-mandatory">
          {tabs.map(tab => (
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
        <div id="curriculum-content" className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-gray-100 min-h-[350px] transition-all duration-500 relative">
          
          {/* Tab Panel: Primary */}
          <div 
            ref={el => panesRef.current['primary'] = el}
            id="tab-primary" 
            className={`tab-pane grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${activeTab === 'primary' ? 'active' : 'hidden'}`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}>
                <BookOpen className="w-3.5 h-3.5" /> Play-Way &amp; Experiential Core
              </div>
              <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Nurturing Wonder &amp; Curiosity</h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                Our primary program builds a solid foundation of sensory, linguistic, and analytical capacities. Aligned with NEP 2020 guidelines, we focus on building core competencies—critical thinking, creativity, and adaptability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className={`w-4 h-4 text-${theme.accent}`} /> Project-Based Experiential Learning</li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className={`w-4 h-4 text-${theme.accent}`} /> Computational Thinking &amp; AI (from Class III onwards)</li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className={`w-4 h-4 text-${theme.accent}`} /> DEAR (Drop Everything And Read) scheduled periods</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative group mt-4 lg:mt-0">
              <ImageWithLoader src="/campus/campus2.jpg" alt="DLF Primary School Students" loading="lazy" imgClassName="object-center" />
            </div>
          </div>

          {/* Tab Panel: Middle */}
          <div 
            ref={el => panesRef.current['middle'] = el}
            id="tab-middle" 
            className={`tab-pane grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${activeTab === 'middle' ? 'active' : 'hidden'}`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}>
                <Compass className="w-3.5 h-3.5" /> Kaushal Bodh (Skill Education)
              </div>
              <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Building Strong Cognitive Pathways</h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                Experiential learning through structured domains. Each middle schooler undergoes mandatory projects across multiple spheres to build design thinking, digital literacy, and collaboration.
              </p>
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <h5 className={`text-[10px] font-bold text-${theme.primary}`}>Life Forms</h5>
                  <p className="text-[8px] text-brand-muted mt-1 leading-normal font-inter">Biodiversity Register, Plant Nursery, Growing Microgreens</p>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <h5 className={`text-[10px] font-bold text-${theme.primary}`}>Machines &amp; Materials</h5>
                  <p className="text-[8px] text-brand-muted mt-1 leading-normal font-inter">3D Printing, Game Design, Home Automation, Maker Skills</p>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <h5 className={`text-[10px] font-bold text-${theme.primary}`}>Human Services</h5>
                  <p className="text-[8px] text-brand-muted mt-1 leading-normal font-inter">Family Health Books, Advertising, Culinary Skills, Baking</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative group mt-4 lg:mt-0">
              <ImageWithLoader src="/campus/campus3.jpg" alt="Middle School STEM &amp; Robotics Lab" loading="lazy" imgClassName="object-center" />
            </div>
          </div>

          {/* Tab Panel: Secondary */}
          <div 
            ref={el => panesRef.current['secondary'] = el}
            id="tab-secondary" 
            className={`tab-pane grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${activeTab === 'secondary' ? 'active' : 'hidden'}`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}>
                <Cpu className="w-3.5 h-3.5" /> Kaushal Vikas (Grades IX-X)
              </div>
              <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Excellence &amp; Conceptual Clarity</h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                Focused guidance aimed towards building critical thinking, application-based learning through inquiries, and real-world problem solving.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className={`w-4 h-4 text-${theme.accent}`} /> Life Forms — Rooftop Gardening &amp; Agriculture</li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className={`w-4 h-4 text-${theme.accent}`} /> Machine &amp; Material — Food Processing &amp; Tech</li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold"><CheckCircle className={`w-4 h-4 text-${theme.accent}`} /> Human Services — Healthcare &amp; Wellness Services</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative group mt-4 lg:mt-0">
              <ImageWithLoader src="/campus/campus4.jpg" alt="DLF Secondary School Classroom" loading="lazy" imgClassName="object-center" />
            </div>
          </div>

          {/* Tab Panel: Senior Secondary */}
          <div 
            ref={el => panesRef.current['senior'] = el}
            id="tab-senior" 
            className={`tab-pane grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${activeTab === 'senior' ? 'active' : 'hidden'}`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}>
                <TrendingUp className="w-3.5 h-3.5" /> Streams &amp; Career Preparation
              </div>
              <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Launching Future Pioneers</h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                We offer a wide range of academic choices in sync with the National Education Policy 2020. Students choose from 3 robust specialized pathways:
              </p>
              <div className="space-y-2.5 text-xs font-inter font-medium text-brand-muted">
                <p><strong className="text-brand-charcoal">Stream 1 (Humanities):</strong> English, Political Science, Economics, Painting, Mathematics, Psychology, Applied Math, Mass Media, AI</p>
                <p><strong className="text-brand-charcoal">Stream 2 (Commerce):</strong> English, Business Studies, Accountancy, Economics, Applied Math, Banking, Physical Education, Mass Media, AI</p>
                <p><strong className="text-brand-charcoal">Stream 3 (Science):</strong> English, Physics, Chemistry, Biology, Mathematics, Computer Science, Psychology, Economics, Mass Media, AI</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative group mt-4 lg:mt-0">
              <ImageWithLoader src="/campus/campus6.jpg" alt="DLF Senior Secondary Arts &amp; Performance" loading="lazy" imgClassName="object-center" />
            </div>
          </div>
        </div>

        {/* ── CAMBRIDGE INTERNATIONAL PATHWAY SECTION ── */}
        <div className="space-y-8 border-t border-gray-100 pt-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Global Standard Education</span>
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Cambridge International Pathway</h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter font-medium">
              We offer the globally recognised Cambridge Assessment International Education curriculum from Classes I–VIII, with higher grades added progressively.
            </p>
          </div>

          {/* Attributes / Why Cambridge */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Globally Recognised", desc: "Qualifications accepted by leading universities worldwide including Ivy League, Oxbridge, IITs, and top global institutions." },
              { title: "Enquiry-Based Learning", desc: "Rather than rote memorisation, students question, investigate, and apply knowledge to build critical thinking pathways." },
              { title: "Cambridge Learner Attributes", desc: "Developing student habits to habitually approach learning by being Confident, Responsible, Reflective, Innovative, and Engaged." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2 hover:shadow-md transition-shadow">
                <h4 className={`font-serif text-sm font-bold text-${theme.primary}`}>{item.title}</h4>
                <p className="text-[11px] text-brand-muted leading-relaxed font-inter font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Results & Academic Benchmarks */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
            
            {/* Left Col: Checkpoint description */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className={`font-serif text-lg font-bold text-${theme.primary}`}>Checkpoint Assessments</h4>
                <p className="text-xs text-brand-muted leading-relaxed font-inter font-medium">
                  At the end of Classes V and VIII, students appear for the internationally benchmarked Cambridge Checkpoint Assessments in English, Mathematics, and Science. Set, administered, and evaluated by Cambridge UK, they offer an unbiased global benchmark.
                </p>
                <div className={`p-4 rounded-2xl bg-${theme.primary}/5 border border-${theme.primary}/10 text-[10px] text-brand-muted font-inter leading-relaxed`}>
                  * Each learner receives a personalised Statement of Achievement from Cambridge UK, highlighting conceptual strengths and growth readiness.
                </div>
              </div>
            </div>

            {/* Right Col: Table */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 shadow-md p-6 sm:p-8 space-y-4 overflow-x-auto">
              <h4 className={`font-serif text-sm font-bold text-${theme.primary}`}>Cambridge Lower Secondary Checkpoint Results</h4>
              <p className="text-[10px] text-brand-muted font-inter">Showing DLF average scores of the last three years (Scores of 21 to 50 correspond to the Good &amp; Outstanding performance band).</p>
              
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
                    <td className="py-2.5">36 / 50</td>
                    <td className="py-2.5">35 / 50</td>
                    <td className="py-2.5">34 / 50</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-2.5 font-semibold text-brand-charcoal">Mathematics</td>
                    <td className="py-2.5">47 / 50</td>
                    <td className="py-2.5">42 / 50</td>
                    <td className="py-2.5">44 / 50</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-brand-charcoal">Science</td>
                    <td className="py-2.5">42 / 50</td>
                    <td className="py-2.5">41 / 50</td>
                    <td className="py-2.5">37 / 50</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
