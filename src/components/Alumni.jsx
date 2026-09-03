import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, 
  GraduationCap, 
  Globe, 
  Award, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  FileText, 
  Download, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Briefcase, 
  HeartHandshake, 
  BookOpen, 
  Compass, 
  X
} from 'lucide-react'

export default function Alumni() {
  const [activeTab, setActiveTab] = useState('all')
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [selectedStory, setSelectedStory] = useState(null)
  const [registrationSubmitted, setRegistrationSubmitted] = useState(false)

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    passoutYear: '2020',
    branch: 'dlf-sahibabad',
    currentCompany: '',
    designation: '',
    cityCountry: '',
    linkedIn: '',
    mentorWillingness: true,
    message: ''
  })

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    setRegistrationSubmitted(true)
    setTimeout(() => {
      setRegistrationSubmitted(false)
      setIsRegisterModalOpen(false)
      setForm({
        fullName: '',
        email: '',
        phone: '',
        passoutYear: '2020',
        branch: 'dlf-sahibabad',
        currentCompany: '',
        designation: '',
        cityCountry: '',
        linkedIn: '',
        mentorWillingness: true,
        message: ''
      })
    }, 2500)
  }

  const alumniStats = [
    { value: '15,000+', label: 'Global Alumni Network', icon: Users },
    { value: '45+', label: 'Countries Represented', icon: Globe },
    { value: '30+', label: 'Graduating Batches', icon: GraduationCap },
    { value: '120+', label: 'Mentorship Sessions / Year', icon: HeartHandshake },
  ]

  const alumniSpotlights = [
    {
      id: 'alumni-1',
      name: 'Arsalan Alam',
      batch: 'Class of 2023',
      branch: 'DLF Public School, Sahibabad',
      category: 'tech',
      domain: 'AI & Deep Tech',
      currentRole: 'Founding Partner, TechScale AI',
      location: 'Bengaluru & San Francisco',
      quote: 'The culture of question-asking and independent thought at DLF gave me the courage to venture into uncharted domains. Mentors here don’t teach you what to think; they sculpt how you think.',
      achievements: 'Pioneered ethical AI frameworks for healthcare startups. Published 3 IEEE research papers during undergraduate study.',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 'alumni-2',
      name: 'Dr. Mehak Sharma',
      batch: 'Class of 2014',
      branch: 'DLF Public School, Sahibabad',
      category: 'medicine',
      domain: 'Medicine & Healthcare',
      currentRole: 'Cardiologist & Clinical Researcher, AIIMS New Delhi',
      location: 'New Delhi, India',
      quote: 'The rigorous scientific temperament built in DLF laboratories laid the groundwork for my career in medical research and cardiac sciences.',
      achievements: 'Gold Medalist in MBBS, recipient of ICMR Young Scientist Grant for pediatric cardiac interventions.',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 'alumni-3',
      name: 'Aditya Singhania, IAS',
      batch: 'Class of 2011',
      branch: 'DLF Public School, Sahibabad',
      category: 'civil-services',
      domain: 'Public Governance & Civil Services',
      currentRole: 'Assistant Secretary, Ministry of Finance, Govt of India',
      location: 'New Delhi, India',
      quote: 'DLF is where I learned empathy, civic responsibility, and the ethical conviction to serve our country with total integrity.',
      achievements: 'Secured All India Rank 18 in UPSC Civil Services Examination. Led digital land records modernization.',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 'alumni-4',
      name: 'Rhea Taneja',
      batch: 'Class of 2017',
      branch: 'DLF Public School, Sahibabad',
      category: 'design',
      domain: 'Product Design & HCI',
      currentRole: 'Lead Product Experience Designer, Stripe',
      location: 'San Francisco, USA',
      quote: 'DLF taught me to view design not as decoration, but as human-centered problem solving that elevates everyday life.',
      achievements: 'Stanford MS Graduate in Human-Computer Interaction; recipient of Red Dot Design Concept Award.',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 'alumni-5',
      name: 'Kunal Verma',
      batch: 'Class of 2012',
      branch: 'DLF Public School, Sahibabad',
      category: 'tech',
      domain: 'CleanTech & Sustainability',
      currentRole: 'Co-Founder & CTO, GreenLogix Solutions',
      location: 'London, United Kingdom',
      quote: 'DLF’s zero-waste ethos was not just a school campaign—it became my lifelong mission to build decarbonization software for global supply chains.',
      achievements: 'Featured in Forbes 30 Under 30 Europe; raised $18M in Series A funding for green enterprise software.',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 'alumni-6',
      name: 'Ananya Deshmukh',
      batch: 'Class of 2019',
      branch: 'DLF Public School, Sahibabad',
      category: 'academia',
      domain: 'Global Economics & Public Policy',
      currentRole: 'Rhodes Scholar & Doctoral Fellow, University of Oxford',
      location: 'Oxford, United Kingdom',
      quote: 'The debating society and inter-school Model UN delegations at DLF built my voice, intellectual rigor, and courage to challenge global policy orthodoxies.',
      achievements: 'Overall Champion at University of Melbourne International Case Competition; published author on emerging market fiscal resilience.',
      linkedIn: 'https://linkedin.com'
    },
  ]

  const categories = [
    { id: 'all', label: 'All Alumni' },
    { id: 'tech', label: 'Technology & AI' },
    { id: 'civil-services', label: 'Civil Services & Law' },
    { id: 'medicine', label: 'Medicine & Science' },
    { id: 'design', label: 'Design & Creative Arts' },
    { id: 'academia', label: 'Global Academia' },
  ]

  const filteredAlumni = activeTab === 'all' 
    ? alumniSpotlights 
    : alumniSpotlights.filter(item => item.category === activeTab)

  const flagshipPrograms = [
    {
      icon: Compass,
      title: 'Margdarshak Mentorship Series',
      desc: 'Our premier career navigation forum where distinguished alumni return to mentor Grades IX–XII through town halls, mock interviews, and university prep masterclasses.',
      tag: 'Year-Round Initiative'
    },
    {
      icon: Calendar,
      title: 'Annual Grand Homecoming & Gala',
      desc: 'Every December, hundreds of alumni gather on campus for the celebratory reunion, alumni vs faculty cricket and football showdowns, and the Distinguished Alumni Awards.',
      tag: 'December Annual Gala'
    },
    {
      icon: Globe,
      title: 'Global City Chapters',
      desc: 'Stay connected with local alumni chapters in Delhi-NCR, Bengaluru, Mumbai, London, San Francisco Bay Area, Singapore, and Toronto with regular networking meetups.',
      tag: '7 Active Chapters'
    },
    {
      icon: Briefcase,
      title: 'Startup & Internship Incubator',
      desc: 'Connecting high school senior students and young graduates with verified internship, research assistantship, and incubation opportunities at alumni-founded ventures.',
      tag: 'Career Accelerator'
    },
  ]

  // Set to true to reveal all sections in the future
  const SHOW_FULL_CONTENT = false

  if (!SHOW_FULL_CONTENT) {
    return (
      <div className="pt-28 pb-20 min-h-[85vh] flex items-center justify-center text-brand-charcoal selection:bg-brand-gold/30">
        <div className="w-[96%] max-w-xl mx-auto px-4">
          <div className="bg-white rounded-3xl border border-gray-150 p-8 sm:p-12 shadow-xl text-center space-y-6 relative overflow-hidden">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-gold via-brand-greenDeep to-brand-gold"></div>

            <div className="w-16 h-16 rounded-3xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-brand-gold mx-auto shadow-sm">
              <Sparkles className="w-8 h-8 text-brand-gold animate-pulse" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/70 text-[10px] font-extrabold uppercase tracking-widest">
                <span>Under Progress</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-greenDeep">
                Alumni Network Portal
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed max-w-md mx-auto">
                We are currently compiling our global alumni directory, mentorship initiatives, and reunion schedules. This portal will be launched shortly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-150 text-xs text-brand-muted font-inter space-y-1">
              <p className="font-semibold text-brand-charcoal">Are you an alumnus wishing to connect?</p>
              <p>Reach out directly to our Alumni Secretariat at <a href="mailto:alumni@dlfps.com" className="text-brand-greenDeep font-bold underline">alumni@dlfps.com</a>.</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-greenDeep hover:bg-brand-greenVibrant text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm w-full sm:w-auto"
              >
                <span>Back to Home</span>
              </Link>
              <a
                href="mailto:alumni@dlfps.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-colors w-full sm:w-auto"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Alumni Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 sm:pt-28 pb-20 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      
      {/* ── 1. HERO SECTION ── */}
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-greenDeep via-[#133f28] to-[#0c2819] text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-brand-gold/30">
          {/* Subtle decorative glow */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-brand-gold/15 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-gold font-bold text-xs uppercase tracking-widest">
              <Users className="w-3.5 h-3.5 text-brand-gold" />
              <span>DLF Alumni Association &bull; Worldwide Community</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              Connecting Generations of <span className="italic text-brand-gold font-normal">Pioneers</span> &amp; Thinkers.
            </h1>

            <p className="text-white/85 text-sm sm:text-base md:text-lg font-inter leading-relaxed max-w-2xl font-medium">
              Over three decades of graduating batches leading breakthroughs across medicine, public service, deep technology, creative arts, and global business in 45+ nations.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => setIsRegisterModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-gold hover:bg-brand-goldlight text-brand-charcoal font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
              >
                <Users className="w-4 h-4" />
                <span>Join Alumni Network</span>
              </button>

              <a
                href="/Alumni Connect 2nd Edition_cropped.pdf"
                download="Alumni Connect 2nd Edition.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/25 transition-all duration-300 backdrop-blur-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Alumni Connect (2nd Edition)</span>
              </a>

              <a
                href="#spotlights"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-white/90 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>View Wall of Fame &darr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── 2. QUICK STATS BANNER ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {alumniStats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-150 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-greenDeep/10 flex items-center justify-center text-brand-greenDeep shrink-0">
                  <Icon className="w-6 h-6 text-brand-greenDeep" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-greenDeep">{stat.value}</h3>
                  <p className="text-xs text-brand-muted font-inter font-semibold mt-0.5">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── 3. ALUMNI WALL OF FAME / SPOTLIGHTS ── */}
        <div id="spotlights" className="space-y-8 pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-150 pb-6">
            <div className="space-y-1 max-w-xl">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-greenVibrant">Wall of Fame</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-greenDeep">Distinguished Alumni Spotlights</h2>
              <p className="text-xs sm:text-sm text-brand-muted font-inter">
                Meet our alumni sculpting new frontiers and mentoring the next generation of DLF students.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === cat.id 
                      ? 'bg-brand-greenDeep text-white shadow-sm' 
                      : 'bg-white hover:bg-gray-100 text-brand-charcoal border border-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredAlumni.map((alumnus) => (
              <div 
                key={alumnus.id}
                className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {alumnus.domain}
                    </span>
                    <span className="text-[10px] font-bold text-brand-muted font-inter">
                      {alumnus.batch}
                    </span>
                  </div>

                  {/* Profile Header */}
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal group-hover:text-brand-greenDeep transition-colors">
                      {alumnus.name}
                    </h3>
                    <p className="text-xs font-bold text-brand-gold mt-1 font-inter flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{alumnus.currentRole}</span>
                    </p>
                    <p className="text-[11px] text-brand-muted font-inter mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-muted shrink-0" />
                      <span>{alumnus.location}</span>
                    </p>
                  </div>

                  {/* Quote Box */}
                  <div className="bg-gray-50/90 rounded-2xl p-4 border border-gray-150/70 relative">
                    <p className="text-xs text-brand-charcoal font-inter italic leading-relaxed">
                      "{alumnus.quote}"
                    </p>
                  </div>

                  {/* Key Milestone */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">Notable Milestone</span>
                    <p className="text-xs text-brand-charcoal/90 font-inter font-medium leading-relaxed">
                      {alumnus.achievements}
                    </p>
                  </div>
                </div>

                {/* Footer Branch Badge */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-brand-muted">
                  <span className="font-medium text-[10px] uppercase tracking-wider text-emerald-800 font-bold">
                    {alumnus.branch}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedStory(alumnus)}
                    className="text-brand-greenDeep font-bold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Read Story</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. FLAGSHIP ALUMNI PROGRAMS ── */}
        <div className="bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/30 rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-greenVibrant">Active Engagements</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-greenDeep">Alumni Programs &amp; Initiatives</h2>
            <p className="text-xs sm:text-sm text-brand-muted font-inter">
              Empowering our school-to-university transition through direct mentorship, reunions, and professional networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {flagshipPrograms.map((prog, idx) => {
              const Icon = prog.icon
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-greenDeep/10 flex items-center justify-center text-brand-greenDeep shrink-0">
                      <Icon className="w-5 h-5 text-brand-greenDeep" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                      {prog.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-charcoal">{prog.title}</h3>
                  <p className="text-xs text-brand-muted font-inter leading-relaxed">{prog.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── 5. PUBLICATIONS & ALUMNI PRIVILEGE CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Alumni Connect Magazine Card */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 font-bold text-[10px] uppercase tracking-wider border border-blue-200">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>Official Alumni Publication</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-greenDeep">Alumni Connect — 2nd Edition</h3>
              <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed">
                Featuring inspiring interviews, campus reflections, batch retrospectives, and career navigation pathways written by DLF alumni across the globe.
              </p>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-150 flex items-center gap-3">
                <FileText className="w-8 h-8 text-brand-gold shrink-0" />
                <div>
                  <h4 className="font-bold text-xs text-brand-charcoal">Alumni Connect Magazine (PDF)</h4>
                  <p className="text-[10px] text-brand-muted">Special Edition &bull; High Resolution Document</p>
                </div>
              </div>
            </div>

            <a
              href="/Alumni Connect 2nd Edition_cropped.pdf"
              download="Alumni Connect 2nd Edition.pdf"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-brand-greenDeep hover:bg-brand-greenVibrant text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Alumni Connect PDF</span>
            </a>
          </div>

          {/* Alumni Child Admission Privilege Card */}
          <div className="bg-gradient-to-br from-[#1a3c27] to-[#0f2418] text-white rounded-3xl border border-brand-gold/40 p-8 shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-brand-gold font-bold text-[10px] uppercase tracking-wider border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span>Legacy Privilege</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">20% Tuition Concession for Alumni Wards</h3>
              <p className="text-xs sm:text-sm text-white/85 font-inter leading-relaxed">
                Under the Darbari Lal Foundation legacy guidelines, verified alumni of DLF Public School who have spent at least 6 academic years or graduated Class XII receive an exclusive 20% tuition concession for their children.
              </p>
              <div className="space-y-2 text-xs text-white/90 font-inter pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Applicable across Pre-Primary to Grade XII</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Valid at DLF Public School &amp; DLF World School</span>
                </div>
              </div>
            </div>

            <Link
              to="/admission-enquiry"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-brand-gold hover:bg-brand-goldlight text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-all shadow-lg cursor-pointer font-sans"
            >
              <span>Apply for Ward Admission</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* ── 6. ALUMNI SECRETARIAT CONTACT ── */}
        <div className="bg-white rounded-3xl border border-gray-150 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-greenDeep">DLF Alumni Relations Secretariat</h4>
            <p className="text-xs sm:text-sm text-brand-muted font-inter">
              Planning a batch reunion or wish to conduct a masterclass? Connect directly with our alumni coordinators.
            </p>
            <p className="text-xs font-bold text-brand-charcoal font-inter pt-1">
              Dean of Alumni Relations &bull; Sector 2, Rajender Nagar, Sahibabad, Ghaziabad (U.P.)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a 
              href="mailto:alumni@dlfps.com" 
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-greenDeep hover:bg-brand-greenVibrant text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>alumni@dlfps.com</span>
            </a>
            <a 
              href="tel:+919871034444" 
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>+91-9871034444</span>
            </a>
          </div>
        </div>

      </div>

      {/* ── ALUMNI REGISTRATION MODAL DIALOG ── */}
      {isRegisterModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsRegisterModalOpen(false)}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-gray-150 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-[10px] uppercase tracking-wider border border-emerald-200">
                  <Users className="w-3 h-3 text-emerald-600" />
                  <span>Alumni Registry 2026</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-greenDeep mt-1">Register in Global Alumni Network</h3>
                <p className="text-xs text-brand-muted font-inter">
                  Keep your details updated to receive reunion invites, chapter updates, and mentorship opportunities.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsRegisterModalOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-brand-charcoal flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {registrationSubmitted ? (
              <div className="py-12 text-center space-y-3 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-brand-greenDeep">Welcome Back to the Alma Mater!</h4>
                <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto font-inter">
                  Your profile has been successfully registered in the DLF Global Alumni Network. Our secretariat will be in touch with upcoming batch reunion schedules.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-charcoal">Full Name *</label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      value={form.fullName}
                      onChange={handleFormChange}
                      placeholder="e.g. Rahul Verma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-greenDeep"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-charcoal">Email Address *</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={form.email}
                      onChange={handleFormChange}
                      placeholder="rahul.verma@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-greenDeep"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-charcoal">Passing Batch *</label>
                    <select
                      name="passoutYear"
                      value={form.passoutYear}
                      onChange={handleFormChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-greenDeep bg-white"
                    >
                      {Array.from({ length: 30 }, (_, i) => 2025 - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-charcoal">Campus *</label>
                    <select
                      name="branch"
                      value={form.branch}
                      onChange={handleFormChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-greenDeep bg-white"
                    >
                      <option value="dlf-sahibabad">DLF Public School (Sahibabad)</option>
                      <option value="dlf-greater-noida">DLF World School (Greater Noida)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-charcoal">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleFormChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-greenDeep"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-charcoal">Current Organization / University</label>
                    <input
                      type="text"
                      name="currentCompany"
                      value={form.currentCompany}
                      onChange={handleFormChange}
                      placeholder="e.g. Google / AIIMS / IIT Delhi"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-greenDeep"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-charcoal">Current Designation / Role</label>
                    <input
                      type="text"
                      name="designation"
                      value={form.designation}
                      onChange={handleFormChange}
                      placeholder="e.g. Senior Software Engineer"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-greenDeep"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-charcoal">Current City &amp; Country</label>
                    <input
                      type="text"
                      name="cityCountry"
                      value={form.cityCountry}
                      onChange={handleFormChange}
                      placeholder="e.g. London, UK / New Delhi"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-greenDeep"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-charcoal">LinkedIn Profile URL</label>
                    <input
                      type="url"
                      name="linkedIn"
                      value={form.linkedIn}
                      onChange={handleFormChange}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-greenDeep"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="mentorWillingness"
                      checked={form.mentorWillingness}
                      onChange={handleFormChange}
                      className="mt-0.5 rounded text-brand-greenDeep focus:ring-brand-greenDeep"
                    />
                    <span className="text-xs text-brand-charcoal font-inter leading-relaxed">
                      I am open to volunteering as an alumni speaker / mentor for current DLF students during Margdarshak career sessions.
                    </span>
                  </label>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-150">
                  <button
                    type="button"
                    onClick={() => setIsRegisterModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-brand-greenDeep hover:bg-brand-greenVibrant text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    Submit Alumni Registration
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ── ALUMNI STORY MODAL ── */}
      {selectedStory && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedStory(null)}
        >
          <div 
            className="relative max-w-lg w-full bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8 space-y-5 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-gray-150 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {selectedStory.domain}
                </span>
                <h3 className="font-serif text-2xl font-bold text-brand-greenDeep mt-2">{selectedStory.name}</h3>
                <p className="text-xs text-brand-gold font-bold font-inter">{selectedStory.currentRole}</p>
                <p className="text-[11px] text-brand-muted font-inter">{selectedStory.batch} &bull; {selectedStory.location}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-brand-charcoal flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-brand-charcoal/90 font-inter leading-relaxed">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-150 italic">
                "{selectedStory.quote}"
              </div>
              <div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-brand-charcoal mb-1">Key Impact &amp; Recognition</h5>
                <p className="text-xs text-brand-muted">{selectedStory.achievements}</p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="px-5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
