import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import { Award, ArrowLeft, BookOpen, Clock, GraduationCap, CheckCircle2 } from 'lucide-react'

export default function SchoolLeadership() {
  const { schoolId } = useParams()
  const { schools } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch] || {}
  const isDLWS = activeBranch === 'dlf-greater-noida'

  const theme = currentSchool?.theme || {
    primary: isDLWS ? 'brand-purpleDeep' : 'brand-greenDeep',
    vibrant: isDLWS ? 'brand-purpleVibrant' : 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27',
  }

  return (
    <div className="pt-28 pb-20 min-h-screen text-brand-charcoal selection:bg-brand-gold/30 font-sans">
      <div className="w-[94%] max-w-[1360px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
              {currentSchool?.name || 'School'} Governance
            </span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary}`}>
              Leadership &amp; Faculty Excellence
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter font-medium">
              Guided by distinguished educational pioneers and powered by rigorous, continuous teacher training.
            </p>
          </div>
          <Link
            to={`/school/${activeBranch}`}
            className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:opacity-80 transition-opacity shrink-0`}
          >
            <ArrowLeft className="w-4 h-4" /> Back to School Home
          </Link>
        </div>

        {/* ── SECTION 1: PRINCIPAL CREDENTIALS SPOTLIGHT ── */}
        {!isDLWS ? (
          /* DLPS Sahibabad Principal: Dr. Seema Jerath */
          <div className="bg-white rounded-3xl border-2 border-brand-gold/30 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative">
            <div className={`absolute top-0 left-0 w-full h-1.5 lg:w-2 lg:h-full bg-${theme.primary}`} />

            {/* Left Column: Photo & Key Badges */}
            <div className="p-6 sm:p-8 lg:p-10 lg:col-span-5 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-150 bg-gradient-to-b from-gray-50/80 to-white">
              <div className="relative group mb-6 w-full max-w-[280px] sm:max-w-[340px]">
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-gold/40">
                  <img
                    src="/images/seema-jerath.jpg"
                    alt="Dr. Seema Jerath - Principal, DLF Public School"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-brand-charcoal text-brand-gold text-[10px] sm:text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xl border border-brand-gold/40 whitespace-nowrap flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-brand-gold" />
                  <span>National Awardee Principal</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-black text-brand-charcoal text-center mt-3">
                Dr. Seema Jerath
              </h3>
              <p className={`text-xs sm:text-sm font-bold text-${theme.vibrant} text-center mt-0.5 font-inter`}>
                Principal, DLF Public School
              </p>
              <p className="text-[11px] sm:text-xs text-brand-muted text-center mt-1 font-inter">
                Educationist &bull; Author &bull; Institutional Architect
              </p>
            </div>

            {/* Right Column: Verified Credentials & Highlights */}
            <div className="p-6 sm:p-8 lg:p-10 lg:col-span-7 space-y-6">
              {/* 3 Core Highlight Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-amber-50/60 border border-brand-gold/30 p-3.5 rounded-2xl text-center space-y-1">
                  <Clock className="w-5 h-5 text-brand-gold mx-auto" />
                  <span className="font-serif text-base font-bold text-brand-charcoal block">39 Years</span>
                  <p className="text-[11px] text-brand-muted font-medium">in education, 30 of them at DLF Public School</p>
                </div>

                <div className="bg-amber-50/60 border border-brand-gold/30 p-3.5 rounded-2xl text-center space-y-1">
                  <Award className="w-5 h-5 text-brand-gold mx-auto" />
                  <span className="font-serif text-base font-bold text-brand-charcoal block">National Award</span>
                  <p className="text-[11px] text-brand-muted font-medium">to Teachers, from the President of India</p>
                </div>

                <div className="bg-amber-50/60 border border-brand-gold/30 p-3.5 rounded-2xl text-center space-y-1">
                  <BookOpen className="w-5 h-5 text-brand-gold mx-auto" />
                  <span className="font-serif text-base font-bold text-brand-charcoal block">Author of 30+ Books</span>
                  <p className="text-[11px] text-brand-muted font-medium">for teachers, students and parents</p>
                </div>
              </div>

              {/* Leadership Bio */}
              <div className="space-y-2">
                <h4 className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant} font-inter`}>
                  Leadership Vision
                </h4>
                <p className="text-xs sm:text-sm text-brand-charcoal/85 leading-relaxed font-inter font-medium">
                  A distinguished visionary educator with nearly four decades of transformative pedagogical leadership. 
                  Under Dr. Seema Jerath's stewardship, DLF Public School has emerged as a nationally revered institution 
                  that balances rigorous scholastic achievement with deep moral grounding, pioneering the celebrated 
                  'School with a Soul' ethos and embedding holistic thinking across every grade level.
                </p>
              </div>

              {/* Key Milestones & Accolades */}
              <div className="space-y-3 pt-1">
                <h4 className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant} font-inter`}>
                  Key Milestones &amp; Contributions
                </h4>
                <ul className="space-y-2.5 text-xs text-brand-charcoal font-inter leading-relaxed">
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>Conferred the prestigious <strong>National Award to Teachers</strong> by the Hon'ble President of India in recognition of exemplary service to education.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>Author of <strong>30+ seminal books</strong> and curricular guides focusing on experiential learning, teacher empowerment, and mental well-being.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>Spearheaded international school collaboration programs and research-led teacher developmental methodologies across North India.</span>
                  </li>
                </ul>

                {/* Direct Link to Principal Desk Letter */}
                <div className="pt-2">
                  <Link
                    to={`/school/${activeBranch}/principal-desk`}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-${theme.primary} text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm`}
                  >
                    <span>Read Message From Principal's Desk</span>
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* DLWS Greater Noida Leadership */
          <div className="bg-white rounded-3xl border-2 border-brand-purpleDeep/25 shadow-xl overflow-hidden p-8 lg:p-10 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-purpleVibrant">
                Academic Direction
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-brand-purpleDeep">
                DLF World School Leadership &amp; Mentors
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium max-w-3xl">
                Led by forward-looking academic visionaries who combine global curriculum standards with progressive child-centric development.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-purple-50/40 p-6 rounded-2xl border border-purple-100 space-y-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-purpleVibrant px-3 py-1 rounded-full bg-brand-purpleDeep/10 inline-block">
                  Institutional Governance
                </span>
                <h4 className="font-serif text-xl font-bold text-brand-charcoal">Design Thinking &amp; STEM Leadership</h4>
                <p className="text-xs text-brand-muted leading-relaxed font-inter">
                  Directing Greater Noida's premier technology-enabled campus with high-end robotics laboratories, experiential maker spaces, and student-first learning.
                </p>
              </div>
              <div className="bg-purple-50/40 p-6 rounded-2xl border border-purple-100 space-y-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-purpleVibrant px-3 py-1 rounded-full bg-brand-purpleDeep/10 inline-block">
                  Pedagogical Mastery
                </span>
                <h4 className="font-serif text-xl font-bold text-brand-charcoal">Global Curriculum Mentorship</h4>
                <p className="text-xs text-brand-muted leading-relaxed font-inter">
                  Educators trained under international pedagogical frameworks, instilling analytical reasoning, sustainability stewardship, and multi-disciplinary mastery.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── SECTION 2: 160 HRS TEACHER TRAINING BENCHMARK (Item 2) ── */}
        <div className="bg-gradient-to-br from-white via-amber-50/30 to-white rounded-3xl border border-gray-150 shadow-lg p-6 sm:p-8 lg:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-gold/20 text-brand-charcoal text-[11px] font-extrabold uppercase tracking-widest border border-brand-gold/30">
                <GraduationCap className="w-3.5 h-3.5 text-brand-gold" />
                <span>Institutional Training Benchmark</span>
              </div>
              <h3 className={`font-serif text-2xl sm:text-3xl font-black text-${theme.primary}`}>
                160 hrs of training for every teacher, every year. CBSE asks for 50.
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed font-medium">
                Our relentless focus on Continuous Professional Development (CPD) ensures our educators are constantly upskilled in pedagogy, neuroscience, and student emotional health.
              </p>
            </div>
          </div>

          {/* Visual Benchmark Comparison Bars */}
          <div className="space-y-6 pt-2 max-w-4xl">
            {/* Our Teachers Bar (160 Hours) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                <span className="text-brand-charcoal flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full bg-${theme.primary}`} />
                  <strong>Our Teachers ({currentSchool?.name || 'DLF School'})</strong>
                </span>
                <span className={`text-${theme.primary} font-serif font-black text-base sm:text-lg`}>
                  160 Hours / Year &bull; <span className="text-xs font-sans text-brand-gold font-bold">320% of Benchmark</span>
                </span>
              </div>
              <div className="w-full h-7 bg-gray-150 rounded-full overflow-hidden p-1 shadow-inner">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r from-${theme.primary} to-${theme.vibrant} shadow-md transition-all duration-1000 flex items-center justify-end pr-3`}
                  style={{ width: '100%' }}
                >
                  <span className="text-[10px] font-black text-white uppercase tracking-wider hidden sm:inline">
                    160 hrs annual training completed
                  </span>
                </div>
              </div>
            </div>

            {/* CBSE Baseline Bar (50 Hours) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                <span className="text-brand-muted flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-700" />
                  <span>CBSE Statutory Requirement</span>
                </span>
                <span className="text-emerald-800 font-serif font-black text-base">
                  50 Hours / Year &bull; <span className="text-xs font-sans text-gray-500 font-semibold">Standard Baseline</span>
                </span>
              </div>
              <div className="w-full h-7 bg-gray-150 rounded-full overflow-hidden p-1 shadow-inner">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-sm flex items-center justify-end pr-3"
                  style={{ width: '31.25%' }}
                >
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider hidden sm:inline">
                    50 hrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 3: COORDINATORS & HODs 4-STAT GRID (Item 2) ── */}
        <div className="space-y-4">
          <div className="space-y-1">
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
              Academic Leadership Backbone
            </span>
            <h3 className={`font-serif text-2xl font-black text-${theme.primary}`}>
              Coordinators &amp; Heads of Department
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter font-medium">
              A leadership cohort rooted in institutional wisdom, pedagogical depth, and continuous innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-shadow text-center space-y-1.5">
              <span className={`font-serif text-3xl sm:text-4xl font-black text-${theme.primary} block`}>
                24+ Yrs
              </span>
              <h5 className="font-bold text-xs uppercase tracking-wider text-brand-charcoal">
                Experience on Average
              </h5>
              <p className="text-[11px] text-brand-muted font-inter leading-relaxed">
                Foundational expertise across CBSE pedagogy, curriculum design, and student pastoral care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-shadow text-center space-y-1.5">
              <span className="font-serif text-3xl sm:text-4xl font-black text-brand-gold block">
                14 Yrs
              </span>
              <h5 className="font-bold text-xs uppercase tracking-wider text-brand-charcoal">
                Tenure with DLPS
              </h5>
              <p className="text-[11px] text-brand-muted font-inter leading-relaxed">
                Deep institutional loyalty ensuring absolute continuity and preservation of school culture.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-shadow text-center space-y-1.5">
              <span className={`font-serif text-3xl sm:text-4xl font-black text-${theme.vibrant} block`}>
                570
              </span>
              <h5 className="font-bold text-xs uppercase tracking-wider text-brand-charcoal">
                Workshops Each
              </h5>
              <p className="text-[11px] text-brand-muted font-inter leading-relaxed">
                Individual professional masterclasses, international seminars, and pedagogical workshops completed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-shadow text-center space-y-1.5">
              <span className="font-serif text-3xl sm:text-4xl font-black text-brand-charcoal block">
                5,000+
              </span>
              <h5 className="font-bold text-xs uppercase tracking-wider text-brand-charcoal">
                Workshops Together
              </h5>
              <p className="text-[11px] text-brand-muted font-inter leading-relaxed">
                Collective institutional training sessions attended by our academic coordinator team over the years.
              </p>
            </div>
          </div>
        </div>

        {/* ── SECTION 4: STAFF PHOTO SHOWCASE CARD ── */}
        <div className="bg-white rounded-3xl border border-gray-150 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-6 h-64 sm:h-80 md:h-full relative overflow-hidden bg-gray-100">
            <img
              src="/images/home-assembly.jpg"
              alt="DLF Public School Staff and Faculty Assembly"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                Our Educators in Action &bull; DLPS Assembly Hall
              </span>
            </div>
          </div>

          <div className="md:col-span-6 p-6 sm:p-8 lg:p-10 space-y-4">
            <div className="space-y-1">
              <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
                The Faculty Body
              </span>
              <h4 className={`font-serif text-2xl sm:text-3xl font-black text-${theme.primary}`}>
                Sculpting Thinkers, Every Single Day
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-brand-charcoal/85 font-inter leading-relaxed font-medium">
              Behind every board topper, international podium finisher, and self-directed learner is a teacher who refused to let rote memorization replace genuine curiosity. Our faculty members undergo regular micro-teaching evaluations, lesson study circles, and curriculum review audits.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs font-bold text-brand-charcoal">
                100% Post-Graduate / Certified Educators
              </div>
              <div className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs font-bold text-brand-charcoal">
                1:15 Student-Teacher Mentorship Ratio
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
