import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { BookOpen, CheckCircle, Compass, Cpu, TrendingUp, HelpCircle, Users, BookOpenCheck, ChevronDown } from 'lucide-react'
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
              <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Nurturing Wonder &amp; Competency</h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                Our primary program is designed in accordance with the guidelines and recommendations of the National Education Policy (NEP) 2020. The focus extends beyond mastering content to building competencies that matter—critical thinking, problem-solving, creativity, and adaptability. 
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold">
                  <CheckCircle className={`w-4 h-4 text-${theme.accent} shrink-0`} /> 
                  <span>Balanced blend of knowledge, values, and real-world experiences.</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold">
                  <CheckCircle className={`w-4 h-4 text-${theme.accent} shrink-0`} /> 
                  <span>Computational Thinking &amp; AI (Class III onwards) to build digital fluency and logic.</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-charcoal font-semibold">
                  <CheckCircle className={`w-4 h-4 text-${theme.accent} shrink-0`} /> 
                  <span>DEAR (Drop Everything And Read) periods to inculcate a love for reading.</span>
                </li>
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
                Aligned with the NEP 2020 vision, DLF Public School integrates skill-based learning (Classes VI-VIII) through compulsory and choice-based experiential domains to prepare students for the 21st century.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <h5 className={`text-[10px] sm:text-xs font-bold text-${theme.primary} uppercase tracking-wider`}>Work with Life Forms (Compulsory)</h5>
                  <p className="text-[9px] sm:text-xs text-brand-charcoal mt-1 font-inter font-semibold">
                    Biodiversity Register, Plant Nursery, Keyhole Garden and Growing Microgreens.
                  </p>
                </div>
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <h5 className={`text-[10px] sm:text-xs font-bold text-${theme.primary} uppercase tracking-wider`}>Work with Machines &amp; Materials (Choice)</h5>
                  <p className="text-[9px] sm:text-xs text-brand-charcoal mt-1 font-inter font-semibold leading-relaxed">
                    3D Printing, Home Automation, AI Assistant, Game &amp; Animation Design, Maker Skills, Tie &amp; Dye, Handicrafts, Culinary Skills, Baking, Candle Making, Food Preservation.
                  </p>
                </div>
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <h5 className={`text-[10px] sm:text-xs font-bold text-${theme.primary} uppercase tracking-wider`}>Work with Human Services (Compulsory)</h5>
                  <p className="text-[9px] sm:text-xs text-brand-charcoal mt-1 font-inter font-semibold">
                    Healthy Mind and Healthy Body, Family Health Book, Creating Advertisements.
                  </p>
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
              <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Application-Based Specialization</h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                Focused guidance aimed towards building critical thinking, application-based learning through inquiries, collaboration, and real-world problem solving.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex gap-3 items-start bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <span className={`text-[10px] font-bold px-2 py-1 bg-${theme.primary}/10 text-${theme.primary} rounded`}>Life Form</span>
                  <p className="text-xs text-brand-charcoal font-semibold mt-0.5">Rooftop Gardening &amp; Agricultural Innovation</p>
                </div>
                <div className="flex gap-3 items-start bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <span className={`text-[10px] font-bold px-2 py-1 bg-${theme.primary}/10 text-${theme.primary} rounded`}>Machine &amp; Material</span>
                  <p className="text-xs text-brand-charcoal font-semibold mt-0.5">Food Processing &amp; Applied Technology</p>
                </div>
                <div className="flex gap-3 items-start bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <span className={`text-[10px] font-bold px-2 py-1 bg-${theme.primary}/10 text-${theme.primary} rounded`}>Human Services</span>
                  <p className="text-xs text-brand-charcoal font-semibold mt-0.5">Healthcare, Community Wellness, &amp; Services</p>
                </div>
              </div>
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
                We offer a wide range of academic choices in sync with the National Education Policy 2020. Students choose from 3 robust specialized pathways with flexible subject combinations:
              </p>
              
              <div className="space-y-3 text-xs font-inter leading-relaxed">
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-1">
                  <h5 className={`font-bold text-${theme.primary}`}>STREAM 1 — Humanities</h5>
                  <p className="text-brand-muted font-medium"><strong className="text-brand-charcoal">Compulsory:</strong> English, Political Science/Music, Economics/Home Science/Kathak</p>
                  <p className="text-brand-muted font-medium"><strong className="text-brand-charcoal">Electives:</strong> Painting / Mathematics / History / Banking*, Psychology / Applied Mathematics / Physical Education / Mass Media / AI</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-1">
                  <h5 className={`font-bold text-${theme.primary}`}>STREAM 2 — Commerce</h5>
                  <p className="text-brand-muted font-medium"><strong className="text-brand-charcoal">Compulsory:</strong> English, Business Studies/Music, Economics/Home Science/Kathak</p>
                  <p className="text-brand-muted font-medium"><strong className="text-brand-charcoal">Electives:</strong> Accountancy / Painting / Banking*, Psychology / Applied Mathematics / Physical Education / AI / Mass Media</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-1">
                  <h5 className={`font-bold text-${theme.primary}`}>STREAM 3 — Science</h5>
                  <p className="text-brand-muted font-medium"><strong className="text-brand-charcoal">Compulsory:</strong> English, Physics, Chemistry</p>
                  <p className="text-brand-muted font-medium"><strong className="text-brand-charcoal">Electives:</strong> Biology / Mathematics, and Computer Science / Psychology / Economics / Physical Education / Mass Media / AI</p>
                </div>
                <p className="text-[10px] text-brand-muted italic mt-1">* Sixth subject options: Food production, Painting, Music, Yoga, AI, or Mass Media.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative group mt-4 lg:mt-0">
              <ImageWithLoader src="/campus/campus6.jpg" alt="DLF Senior Secondary Arts &amp; Performance" loading="lazy" imgClassName="object-center" />
            </div>
          </div>
        </div>

        {/* ── CAMBRIDGE INTERNATIONAL PATHWAY SECTION ── */}
        <div className="space-y-12 border-t border-gray-100 pt-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Global Standard Education</span>
            <h3 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary}`}>The Cambridge Pathway</h3>
            <div className={`w-12 h-[2px] bg-${theme.accent} mx-auto`}></div>
            <p className="text-xs sm:text-sm text-brand-muted font-inter font-medium leading-relaxed">
              We are proud to be an authorised Cambridge school, offering the globally recognised Cambridge Assessment International Education pathway from Classes I–VIII, with higher grades added progressively.
            </p>
          </div>

          {/* Cambridge Pathway Progress Board */}
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
          <p className="text-[10px] text-brand-muted italic text-center -mt-4">* Higher grades are being added progressively each year.</p>

          {/* Why Cambridge Attributes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {[
              { title: "Globally Recognised Qualifications", desc: "Accepted by leading universities and employers worldwide — including the Ivy League, Oxbridge, IITs, and top institutions across the US, UK, and Asia." },
              { title: "Enquiry-Based Learning", desc: "Rather than rote memorisation, students are encouraged to question, investigate, plan, manage, and apply knowledge to build critical thinking." },
              { title: "Cambridge Learner Attributes", desc: "Nurturing qualities in learners to habitually approach learning by being Confident, Responsible, Reflective, Innovative, and Engaged." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <h4 className={`font-serif text-sm font-bold text-${theme.primary}`}>{item.title}</h4>
                <p className="text-xs text-brand-muted leading-relaxed font-inter font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Subjects Offered Board */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-10 space-y-6">
            <div className="space-y-2">
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

          {/* Results & Academic Benchmarks */}
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
                Showing DLF average scores of the last three years. Every single learner has scored consistently above the international average in all subjects.
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

      </div>
    </section>
  )
}

