import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Briefcase, Globe, Leaf, Users, ChevronRight, Sparkles, 
  Heart, Award, ShieldCheck, Zap, Quote, ExternalLink, GraduationCap, 
  MapPin, CheckCircle2, ArrowRight
} from 'lucide-react'

export default function WhatSetsUsApart({ isPreview = false }) {
  const statistics = [
    { value: '1 Ton+', label: 'Plastic Waste Diverted', desc: 'Diverted from Ghazipur landfills in just 229 days.', color: 'border-brand-greenDeep/10 text-brand-greenDeep' },
    { value: '$5,000', label: 'Top Global Startup Prize', desc: 'UK School Enterprise Challenge winner two years in a row.', color: 'border-brand-gold/10 text-brand-gold' },
    { value: '25+', label: 'Countries in Exchanges', desc: '16+ years of international cross-cultural exchange programs.', color: 'border-brand-purpleDeep/10 text-brand-purpleDeep' },
    { value: '200+', label: 'Daily Nutritious Meals', desc: 'Distributed with dignity via the Happy Fridge since 2019.', color: 'border-rose-500/10 text-rose-600' }
  ]

  return (
    <div className={`${isPreview ? 'py-12' : 'pt-28 pb-20'} min-h-screen text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden font-sans`}>
      
      {/* Ambient background glows matching index.css styles */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] ambient-glow-1 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] ambient-glow-2 rounded-full blur-3xl pointer-events-none" />

      <div className="w-[96%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Page Header (Housed inside a solid card) */}
        <div className="bg-white rounded-3xl border border-brand-masterDeep/5 p-8 sm:p-10 shadow-sm">
          {isPreview ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs uppercase tracking-widest font-extrabold text-brand-gold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" /> Distinctive Pillars of Excellence
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-masterDeep">
                  What Sets Us Apart
                </h1>
                <p className="text-sm sm:text-base text-brand-muted font-medium leading-relaxed">
                  We cultivate futuristic job creators, global citizens, and compassionate change-makers through real-world immersion and structural programs.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-brand-masterDeep/5 bg-brand-bg relative shadow-sm group">
                  <img 
                    src="/WMARS.jpeg" 
                    alt="WMARS Sustainability Award" 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest font-extrabold text-brand-gold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" /> Distinctive Pillars of Excellence
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-masterDeep">
                  What Sets Us Apart
                </h1>
                <p className="text-sm sm:text-base text-brand-muted max-w-2xl font-medium">
                  We cultivate futuristic job creators, global citizens, and compassionate change-makers through real-world immersion and structural programs.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Highlight Stats Dashboard (Each metric is its own card) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-masterDeep/5 hover:border-brand-greenDeep/20 shadow-sm hover:shadow-md flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="space-y-2">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-greenDeep group-hover:text-brand-greenVibrant transition-colors duration-500">
                  {stat.value}
                </span>
                <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">{stat.label}</h4>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed font-medium">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed Sections List */}
        <div className="space-y-12">

          {/* Section 1: Internships (Housed inside a single unified card) */}
          {!isPreview && (
            <div id="internships" className="scroll-mt-32 bg-white rounded-3xl border border-brand-masterDeep/5 p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 space-y-10">
            {/* Inner Header */}
            <div className="border-l-4 border-brand-greenDeep pl-6 space-y-3">
              <span className="text-xs font-bold text-brand-greenDeep uppercase tracking-widest flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" /> Professional Immersion
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-masterDeep">Internships & Corporate Training</h2>
              <p className="text-sm text-brand-muted max-w-3xl">
                Moving students from knowing to doing. Delfites aren’t just learning in classrooms—they are interning in boardrooms, hospitals, research institutes, and global innovation hubs.
              </p>
            </div>

            {/* Inner Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Text Area */}
              <div className="lg:col-span-7 space-y-6 text-brand-charcoal text-sm leading-relaxed font-medium">
                <p>
                  Careers are often treated as distant decisions—something to be figured out “later.” At DLF, we choose to shift that timeline. The need of the hour is to equip learners with real-world exposure, enabling them to acquire practical skills, professional awareness, and the confidence to navigate dynamic career landscapes.
                </p>
                <p>
                  Our Internship Programme is designed to move students from knowing to doing. Through thoughtfully curated placements across diverse domains, learners step into authentic professional environments—observing workflows, understanding industry expectations, and contributing meaningfully. It’s not a simulation; it’s early immersion into the world they aspire to be part of.
                </p>
                <p>
                  Beyond technical exposure, internships cultivate essential life competencies—communication, adaptability, problem-solving, professional etiquette, and collaboration. Students don’t just build résumés; they build perspective. Each experience sharpens self-awareness, helping them make informed, confident choices about their future pathways.
                </p>
                <p className="text-brand-greenDeep font-semibold border-l border-brand-greenDeep/30 pl-4 py-1.5 italic bg-brand-bg rounded-r-xl">
                  Through these experiences, students begin to hear their own calling. They discover what truly engages them, what challenges them, and what excites them enough to pursue further. Passion stops being abstract—it becomes actionable.
                </p>
                <p className="text-base text-brand-masterDeep font-serif">
                  Because when learners understand the world early, they don’t just choose careers—they begin to design journeys.
                </p>

                {/* Arsalan Alam Spotlight Card (Pops against parent white background) */}
                <div className="bg-brand-bg border border-brand-masterDeep/5 rounded-3xl p-6 md:p-8 relative overflow-hidden mt-8 shadow-sm group hover:border-brand-greenDeep/20 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-greenDeep/5 rounded-full blur-2xl pointer-events-none" />
                  <Quote className="absolute -top-4 -left-3 w-16 h-16 text-brand-greenDeep/5 pointer-events-none" />
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-greenDeep/10 flex items-center justify-center text-brand-greenDeep font-bold border border-brand-greenDeep/20">
                        AA
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-masterDeep uppercase tracking-wider">Alumni Spotlight: Arsalan Alam</h4>
                        <span className="text-[10px] text-brand-greenDeep font-semibold uppercase tracking-wider">PayPal Intern & Plaksha Scholar</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-charcoal italic leading-relaxed">
                      "As a Class XI student, he interned with PayPal, later joining the prestigious SPARC Summer Internship Program. Standing out among a highly competitive North American cohort, he earned a $10,000 research grant and went on to receive an offer from Plaksha University. His journey continues to inspire many of our learners to navigate their own paths with clarity, courage, and conviction."
                    </p>
                  </div>
                </div>
              </div>

              {/* Media Gallery Area */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-bold text-brand-muted uppercase tracking-widest block border-b border-brand-masterDeep/5 pb-2">
                  Internship Gallery (5 Images)
                </span>
                
                {/* Main Featured Image */}
                <div className="group overflow-hidden rounded-3xl border border-brand-masterDeep/5 bg-brand-bg relative aspect-video shadow-sm">
                  <img 
                    src="/images/what-sets-us-apart/gt-bharat-internship.jpg" 
                    alt="GT Bharat Boardroom" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">Commerce Placement</span>
                    <p className="text-xs text-gray-200 mt-1 font-medium leading-relaxed">
                      Class XI Commerce students interned at GT Bharat, a leading professional services firm, gaining hands-on exposure to corporate practices.
                    </p>
                  </div>
                </div>

                {/* Sub Grid of Images */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="group overflow-hidden rounded-2xl border border-brand-masterDeep/5 bg-brand-bg relative aspect-square shadow-sm">
                    <img 
                      src="/images/what-sets-us-apart/student-portrait.jpg" 
                      alt="Fortis Psychology Internship" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3">
                      <span className="text-[9px] font-bold text-brand-gold uppercase tracking-wider">Fortis Hospital</span>
                      <p className="text-[10px] text-gray-300 mt-0.5 leading-snug">
                        Class XI Psychology students intern annually, exploring patient care.
                      </p>
                    </div>
                  </div>

                  <div className="group overflow-hidden rounded-2xl border border-brand-masterDeep/5 bg-brand-bg relative aspect-square shadow-sm">
                    <img 
                      src="/images/what-sets-us-apart/iit-delhi-visit.jpg" 
                      alt="IIT Delhi visit" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3">
                      <span className="text-[9px] font-bold text-brand-gold uppercase tracking-wider">IIT Delhi</span>
                      <p className="text-[10px] text-gray-300 mt-0.5 leading-snug">
                        Class IX students studying active research and tech ecosystems.
                      </p>
                    </div>
                  </div>

                  <div className="group overflow-hidden rounded-2xl border border-brand-masterDeep/5 bg-brand-bg relative aspect-square shadow-sm">
                    <img 
                      src="/images/what-sets-us-apart/kruu-summit-certificate.jpg" 
                      alt="KRUU Summit" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3">
                      <span className="text-[9px] font-bold text-brand-gold uppercase tracking-wider">KRUU Summit</span>
                      <p className="text-[10px] text-gray-300 mt-0.5 leading-snug">
                        Class XI learners reimagining ideas alongside Devdutt Pattanaik in Coimbatore.
                      </p>
                    </div>
                  </div>

                  <div className="group overflow-hidden rounded-2xl border border-brand-masterDeep/5 bg-brand-bg relative aspect-square shadow-sm">
                    <img 
                      src="/images/what-sets-us-apart/consumer-india-internship.jpg" 
                      alt="Consumer India" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3">
                      <span className="text-[9px] font-bold text-brand-gold uppercase tracking-wider">TOI & Consumer India</span>
                      <p className="text-[10px] text-gray-300 mt-0.5 leading-snug">
                        Early corporate communications, journalism and research programs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}

          {/* Section 2: Global Exchange (Housed inside a single unified card) */}
          {!isPreview && (
            <div id="global-exchange" className="scroll-mt-32 bg-white rounded-3xl border border-brand-masterDeep/5 p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 space-y-10">
              {/* Inner Header */}
              <div className="border-l-4 border-brand-purpleDeep pl-6 space-y-3">
                <span className="text-xs font-bold text-brand-purpleDeep uppercase tracking-widest flex items-center gap-1.5">
                  <Globe className="w-4 h-4" /> Global Connections
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-masterDeep">Global Cross-Cultural Exchange</h2>
                <p className="text-sm text-brand-muted max-w-3xl">
                  Promoting peace education, international cross-cultural understanding, and UN SDG integrations over the past 16 years with 25+ countries.
                </p>
              </div>

              {/* Inner Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Image Column */}
                <div className="lg:col-span-5 space-y-4 order-last lg:order-first">
                  <div className="group overflow-hidden rounded-3xl border border-brand-masterDeep/5 bg-brand-bg relative aspect-[4/3] shadow-sm">
                    <img 
                      src="/images/what-sets-us-apart/global-exchange-group.jpg" 
                      alt="Global Exchange Gathering" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-5">
                      <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">Rooted & Global</span>
                      <p className="text-xs text-gray-200 mt-1 font-medium leading-relaxed">
                        We were honoured to welcome/interact with students and teachers from across the world, continuing our long-standing tradition of global exchange.
                      </p>
                    </div>
                  </div>

                  <div className="bg-brand-purpleDeep/5 border border-brand-purpleDeep/10 rounded-2xl p-5 text-xs text-brand-purpleDeep font-semibold flex gap-3 items-center shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-purpleVibrant shrink-0" />
                    <p>
                      Russian Wheel of Friendship: Welcomed student and teacher delegations from Cheboksary, Russia, continuing our collaborations.
                    </p>
                  </div>
                </div>

                {/* Text & Spotlights Column */}
                <div className="lg:col-span-7 space-y-6 text-brand-charcoal text-sm leading-relaxed font-medium">
                  <p>
                    At DLF, we believe you can be rooted and global—at once. Over the past 16 years, we have fostered enriching Cross-Cultural Exchanges with 25+ countries, including Japan, Germany, Finland, Russia, the Philippines and Italy. Through Cross Cultural Exchange Program and UN SDG-aligned projects, our students think across borders while staying anchored to their values.
                  </p>
                  <p>
                    It fosters peace education, nurtures empathy, encourages students to look beyond borders, embrace cultural differences, and build bridges of understanding and harmony across the world.
                  </p>
                  <p>
                    Recently, the school hosted a U.S. exchange student, <strong className="text-brand-masterDeep">Jacqueline Rose</strong>, for a year, while Delfites <strong className="text-brand-masterDeep">Anwesha Sharma (XII)</strong> and <strong className="text-brand-masterDeep">Kritika Shukla (XI)</strong> travelled to Brazil and Germany respectively under sponsored exchange programs. In the current session, we are hosting a student from Italy for the academic year.
                  </p>

                  {/* Sub-profiles of Scholars (styled in brand-bg against white card parent) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {/* Brazil Scholar */}
                    <div className="bg-brand-bg/50 border border-brand-masterDeep/5 rounded-2xl p-4 space-y-3.5 hover:border-brand-purpleDeep/20 shadow-sm transition-colors duration-300">
                      <div className="flex gap-2.5">
                        <div className="w-14 h-14 rounded-xl overflow-hidden border border-brand-masterDeep/5 shrink-0 bg-white">
                          <img 
                            src="/images/what-sets-us-apart/brazil-afs-flag.png" 
                            alt="Anwesha Sharma flag" 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-brand-masterDeep uppercase tracking-wider">Anwesha Sharma</h4>
                          <span className="text-[9px] text-brand-purpleDeep uppercase tracking-wider font-semibold">Brazil Exchange (Grade XII)</span>
                        </div>
                      </div>
                      <div className="aspect-[1.8/1] overflow-hidden rounded-xl border border-brand-masterDeep/5 relative group shadow-sm">
                        <img 
                          src="/images/what-sets-us-apart/brazil-presentation.png" 
                          alt="Anwesha Presentation" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-[10px] text-brand-muted leading-normal">
                        Anwesha presenting and engaging with local learners in Brazil, building global bridges.
                      </p>
                    </div>

                    {/* Germany Scholar */}
                    <div className="bg-brand-bg/50 border border-brand-masterDeep/5 rounded-2xl p-4 space-y-3.5 hover:border-brand-purpleDeep/20 shadow-sm transition-colors duration-300">
                      <div className="flex gap-2.5">
                        <div className="w-14 h-14 rounded-xl overflow-hidden border border-brand-masterDeep/5 shrink-0 bg-white">
                          <img 
                            src="/images/what-sets-us-apart/kritika-germany-portrait.jpg" 
                            alt="Kritika Shukla" 
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-brand-masterDeep uppercase tracking-wider">Kritika Shukla</h4>
                          <span className="text-[9px] text-brand-purpleDeep uppercase tracking-wider font-semibold">Germany Exchange (Grade XI)</span>
                        </div>
                      </div>
                      <div className="aspect-[1.8/1] overflow-hidden rounded-xl border border-brand-masterDeep/5 relative group shadow-sm">
                        <img 
                          src="/images/what-sets-us-apart/germany-group.jpg" 
                          alt="Germany Group" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-[10px] text-brand-muted leading-normal">
                        Kritika together with international scholars studying intercultural harmony in Germany.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isPreview && (
            <>
              {/* Section 3: Zero Waste to Landfill (Housed inside a single unified card) */}
              <div id="zero-waste" className="scroll-mt-32 bg-white rounded-3xl border border-brand-masterDeep/5 p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 space-y-10">
            {/* Inner Header */}
            <div className="border-l-4 border-brand-greenDeep pl-6 space-y-3">
              <span className="text-xs font-bold text-brand-greenDeep uppercase tracking-widest flex items-center gap-1.5">
                <Leaf className="w-4 h-4" /> Ecological Stewardship
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-masterDeep">Zero Waste to Landfill Initiative</h2>
              <p className="text-sm text-brand-muted max-w-3xl">
                Transforming Delfites from "dependent beneficiaries" into "dependable agents of change" by sorting and diverting waste at source, 7km from the Ghazipur landfill.
              </p>
            </div>

            {/* Warning Callout Box for Landfill context */}
            <div className="bg-amber-500/5 border border-brand-gold/25 rounded-3xl p-6 flex flex-col md:flex-row gap-5 items-start relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" />
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center shrink-0 text-brand-gold font-bold">
                !
              </div>
              <div className="space-y-1.5 font-medium">
                <h4 className="text-sm font-bold text-brand-masterDeep uppercase tracking-wider">The Ecological Crisis: Ghazipur Landfill</h4>
                <p className="text-xs text-brand-charcoal leading-relaxed">
                  Located just 7 km from DLF Public School, the Ghazipur landfill is a towering environmental hazard. Surpassing the height of the Qutub Minar, this mountain of waste steadily emits methane—a greenhouse gas over 80 times more harmful than CO₂ in the short-term—periodically pushing local AQI levels above 400.
                </p>
              </div>
            </div>

            {/* Content Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Text content */}
              <div className="lg:col-span-7 space-y-6 text-brand-charcoal text-sm leading-relaxed font-medium">
                <p>
                  In direct response, the school implemented a bold Zero-Waste to landfill action plan. With waste segregation at source embedded in daily school life—from Kindergarten to Grade XII—students and staff sort plastic, paper, e-waste, and wet waste at source, at classroom level.
                </p>
                <p>
                  Plastic and paper waste is sent for recycling. E-waste is sent for refurbishment, while wet waste is composted — ensuring minimal contribution to landfills and methane release. One of the outcomes has been a noticeable shift in the mindset of Delfites — transforming them from ‘dependent beneficiaries’ into ‘dependable agents of change.’
                </p>

                {/* Progress Stats Block (Styled in brand-bg background) */}
                <div className="bg-brand-bg/60 rounded-3xl border border-brand-masterDeep/5 shadow-sm p-6 space-y-4">
                  <h4 className="text-xs font-bold text-brand-masterDeep uppercase tracking-wider flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-brand-greenDeep" /> Cumulative Diversion Impact (Since Dec 2024)
                  </h4>
                  <div className="space-y-3.5">
                    {/* Paper */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-brand-charcoal">
                        <span>Paper Waste Responsibly Recycled</span>
                        <span className="text-brand-greenDeep">2,414 kg</span>
                      </div>
                      <div className="h-1.5 bg-white rounded-full overflow-hidden border border-brand-masterDeep/5">
                        <div className="h-full bg-brand-greenDeep rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>

                    {/* Plastic */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-brand-charcoal">
                        <span>Plastic Waste Diverted</span>
                        <span className="text-brand-greenDeep">556 kg</span>
                      </div>
                      <div className="h-1.5 bg-white rounded-full overflow-hidden border border-brand-masterDeep/5">
                        <div className="h-full bg-brand-greenDeep rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>

                    {/* E-Waste */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-brand-charcoal">
                        <span>E-Waste Collected & Refurbished</span>
                        <span className="text-brand-greenDeep">217 kg</span>
                      </div>
                      <div className="h-1.5 bg-white rounded-full overflow-hidden border border-brand-masterDeep/5">
                        <div className="h-full bg-brand-greenDeep rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] text-brand-muted leading-normal border-t border-brand-masterDeep/10 pt-3">
                    Every month, the DLF community consistently diverts: <strong className="text-brand-charcoal">100 kg plastic, 300 kg paper, 40 kg e-waste, 60 kg metal scrap</strong>, and <strong className="text-brand-charcoal">30 kg wet waste</strong>.
                  </div>
                </div>

                {/* Highlight banner */}
                <div className="bg-brand-greenDeep/5 border border-brand-greenDeep/10 rounded-2xl p-5 text-xs text-brand-greenDeep font-semibold flex items-center gap-3 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand-greenDeep shrink-0" />
                  <p>
                    NCR FIRST: DLF Public School became the first school in Delhi-NCR to collect and divert over one ton (1,000 kg) of plastic waste from Ghazipur landfills in just 229 days.
                  </p>
                </div>
              </div>

              {/* Certificates / Recognition Column */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-bold text-brand-muted uppercase tracking-widest block border-b border-brand-masterDeep/5 pb-2">
                  Institutional Recognitions
                </span>
                
                {/* WMARS Certificate */}
                <div className="group rounded-3xl border border-brand-masterDeep/5 bg-brand-bg/30 overflow-hidden shadow-sm hover:shadow-md relative transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-brand-bg flex items-center justify-center">
                    <img 
                      src="/WMARS.jpeg" 
                      alt="WMARS Award Certificate" 
                      className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 border-t border-brand-masterDeep/5 bg-white">
                    <h4 className="text-xs font-bold text-brand-masterDeep uppercase tracking-wider">WMARS Recognition</h4>
                    <p className="text-[10px] text-brand-muted mt-1 font-medium leading-relaxed">
                      Waste Management and Recycling Society honored the school for consistent monthly collection and diversion efforts.
                    </p>
                  </div>
                </div>

                {/* Superstar Award */}
                <div className="group rounded-3xl border border-brand-masterDeep/5 bg-brand-bg/30 overflow-hidden shadow-sm hover:shadow-md relative transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-brand-bg flex items-center justify-center">
                    <img 
                      src="/Sustainability Superstar Award.jpg" 
                      alt="Sustainability Superstar Award Certificate" 
                      className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 border-t border-brand-masterDeep/5 bg-white">
                    <h4 className="text-xs font-bold text-brand-masterDeep uppercase tracking-wider">Sustainability Superstar Award</h4>
                    <p className="text-[10px] text-brand-muted mt-1 font-medium leading-relaxed">
                      Presented to the school for two consecutive years for active environmental leadership and curriculum integration.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
            </>
          )}

          {/* Section 4: Money Plant (Housed inside a single unified card) */}
          <div id="money-plant" className="scroll-mt-32 bg-white rounded-3xl border border-brand-masterDeep/5 p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 space-y-10">
            {/* Inner Header */}
            <div className="border-l-4 border-brand-gold pl-6 space-y-3">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest flex items-center gap-1.5">
                <Zap className="w-4 h-4" /> Entrepreneurial Spirit
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-masterDeep">DLF Enterprise – Money Plant</h2>
              <p className="text-sm text-brand-muted max-w-3xl">
                Sowing enterprise and developing business acumen. Nurturing students to become job creators rather than job seekers.
              </p>
            </div>

            {/* Inner Content Block */}
            <div className="bg-gradient-to-br from-brand-gold/5 via-brand-bg to-brand-bg border border-brand-gold/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Stats Badge */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white border border-brand-gold/25 rounded-2xl text-center space-y-3 shadow-sm">
                  <Award className="w-12 h-12 text-brand-gold" />
                  <div className="space-y-1">
                    <span className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-masterDeep">1,500+</span>
                    <h5 className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">Student Entrepreneurs</h5>
                  </div>
                  <p className="text-[10px] text-brand-muted font-medium">Active ventures across Grades VI to XI developing financial literacy.</p>
                </div>

                {/* Narrative */}
                <div className="lg:col-span-8 space-y-6 text-brand-charcoal text-sm leading-relaxed font-medium">
                  <p>
                    Through our robust flagship student start-up programme <strong className="text-brand-masterDeep">‘Money Plant’</strong>, over 1,500 students from Grades 6 to 11 develop financial literacy and entrepreneurial skills.
                  </p>
                  <p>
                    Our student ventures have won the prestigious <strong className="text-brand-masterDeep">Top Global Prize of $5,000</strong> and the <strong className="text-brand-masterDeep">Best Business Development Award of $2,000</strong> under the School Enterprise Challenge - Teach a man to Fish (UK) — <strong className="text-brand-masterDeep">two years in a row.</strong>
                  </p>
                  <p className="text-brand-gold/90 font-semibold text-base font-serif italic">
                    "Delfites are cultivated to be the job creators rather than the job seekers. This is not coincidence—it is the outcome of a deliberate culture where excellence in every dimension is nurtured, celebrated, and scaled."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {!isPreview && (
            <>
              {/* Section 5: Student Social Responsibility (Housed inside a single unified card) */}
              <div id="social-responsibility" className="scroll-mt-32 bg-white rounded-3xl border border-brand-masterDeep/5 p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 space-y-10">
            {/* Inner Header */}
            <div className="border-l-4 border-brand-greenDeep pl-6 space-y-3">
              <span className="text-xs font-bold text-brand-greenDeep uppercase tracking-widest flex items-center gap-1.5">
                <Heart className="w-4 h-4" /> Social Compassion
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-masterDeep">Student Social Responsibility</h2>
              <p className="text-sm text-brand-muted max-w-3xl">
                We believe that giving back to society is as important as taking from it. SSR is intentionally woven into our daily learning ecosystem, emphasizing the dignity of the receiver.
              </p>
            </div>

            {/* Inner Content Block */}
            <div className="space-y-8 text-brand-charcoal text-sm leading-relaxed font-medium">
              <p className="max-w-4xl text-brand-muted text-base font-medium">
                Student Social Responsibility is not an occasional activity at DLF—it is embedded into the very fabric of our learning ecosystem. Delfites actively engage with real-world concerns—environmental sustainability, community welfare, inclusivity, and social equity—through structured programmes and hands-on initiatives. Whether it is leading cleanliness drives, contributing to waste management projects, working with under-resourced communities, or advocating for meaningful causes, Delfites learn that impact begins with intent and grows through action.
              </p>

              {/* SSR Sub-modules Grid (Styled with POP bg-brand-bg background against parent card) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                
                {/* Happy Fridge */}
                <div className="bg-brand-bg/70 border border-brand-masterDeep/5 hover:border-brand-greenDeep/20 rounded-3xl p-6 sm:p-8 space-y-4 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
                  <div className="space-y-3">
                    <span className="text-[9px] uppercase tracking-widest font-extrabold bg-brand-greenDeep/5 text-brand-greenDeep px-3 py-1 rounded-full w-max block border border-brand-greenDeep/10 bg-white">
                      Happy Fridge (Est. 2019)
                    </span>
                    <h3 className="font-serif text-lg font-bold text-brand-masterDeep">Replenished Daily</h3>
                    <p className="text-xs text-brand-muted leading-relaxed font-medium">
                      A refrigerator placed outside the school gate. Replenished daily with 200 packets of home-cooked, nutritious food prepared by Delfites.
                    </p>
                  </div>
                  <p className="text-[11px] text-brand-greenDeep italic font-semibold border-t border-brand-masterDeep/5 pt-3 group-hover:text-brand-greenVibrant transition-colors">
                    "No labels. No eligibility checks. Anyone in need can take a meal with dignity intact."
                  </p>
                </div>

                {/* Sneh Bhoj */}
                <div className="bg-brand-bg/70 border border-brand-masterDeep/5 hover:border-brand-greenDeep/20 rounded-3xl p-6 sm:p-8 space-y-4 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
                  <div className="space-y-3">
                    <span className="text-[9px] uppercase tracking-widest font-extrabold bg-brand-greenDeep/5 text-brand-greenDeep px-3 py-1 rounded-full w-max block border border-brand-greenDeep/10 bg-white">
                      Sneh Bhoj
                    </span>
                    <h3 className="font-serif text-lg font-bold text-brand-masterDeep">Community Lunch</h3>
                    <p className="text-xs text-brand-muted leading-relaxed font-medium">
                      Hosted every Foundation Day. Students, teachers, and staff prepare and share a meal. Peeling, chopping, and cooking breaks hierarchies, cultivates dignity of labor, and fosters absolute equality.
                    </p>
                  </div>
                  <p className="text-[11px] text-brand-greenDeep italic font-semibold border-t border-brand-masterDeep/5 pt-3 group-hover:text-brand-greenVibrant transition-colors">
                    "Cultivating dignity of labor and nurturing compassion through the simple act of preparing meals."
                  </p>
                </div>

                {/* Goonj */}
                <div className="bg-brand-bg/70 border border-brand-masterDeep/5 hover:border-brand-greenDeep/20 rounded-3xl p-6 sm:p-8 space-y-4 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
                  <div className="space-y-3">
                    <span className="text-[9px] uppercase tracking-widest font-extrabold bg-brand-greenDeep/5 text-brand-greenDeep px-3 py-1 rounded-full w-max block border border-brand-greenDeep/10 bg-white">
                      Goonj Partnership
                    </span>
                    <h3 className="font-serif text-lg font-bold text-brand-masterDeep">18 Years of Collaboration</h3>
                    <p className="text-xs text-brand-muted leading-relaxed font-medium">
                      Working with the NGO Goonj to wholeheartedly contribute unused and pre-loved items to the underprivileged, keeping the dignity of the receiver at the core of all collections.
                    </p>
                  </div>
                  <p className="text-[11px] text-brand-greenDeep italic font-semibold border-t border-brand-masterDeep/5 pt-3 group-hover:text-brand-greenVibrant transition-colors">
                    "One man's waste can be another man's treasure. Giving with dignity is at our core."
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Section 6: Character Building (Unified solid card container) */}
          <div id="character" className="scroll-mt-32 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent rounded-3xl blur-2xl pointer-events-none" />
            
            <div className="bg-white border border-brand-masterDeep/5 rounded-3xl p-8 sm:p-12 space-y-6 text-center max-w-4xl mx-auto shadow-sm hover:shadow-md transition-all duration-300 relative z-10 animate-fade-in">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Integrity & Responsibility
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-masterDeep">
                Emphasis on Character Building
              </h2>
              
              <div className="bg-brand-bg/50 border border-brand-greenDeep/10 rounded-2xl p-6 relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-brand-greenDeep/5" />
                <p className="text-brand-greenDeep font-serif text-lg sm:text-xl md:text-2xl font-bold max-w-3xl mx-auto leading-relaxed italic">
                  "Character is not an adjunct to education—it is its very foundation. We believe that true success is defined not just by what students achieve, but by who they become in the process."
                </p>
              </div>
              
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed max-w-2xl mx-auto font-medium">
                Character building at DLF is intentionally woven into everyday learning. Through value-integrated lessons, reflective practices, and meaningful engagements, Delfites are guided to develop integrity, empathy, resilience, and a strong sense of responsibility. Whether it is through collaborative projects, community outreach, leadership opportunities, or classroom discussions, students are encouraged to make ethical choices and stand by them.
              </p>
            </div>
          </div>
            </>
          )}

          {isPreview && (
            <div className="text-center pt-6 pb-2">
              <Link 
                to="/what-sets-us-apart" 
                className="inline-flex items-center gap-3 bg-brand-masterDeep hover:bg-brand-masterVibrant text-white px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-xl shadow-brand-masterDeep/20 hover:scale-105"
              >
                <span>View More Pillars & What Sets Us Apart</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

        </div>

        {/* Group Brochure Banner */}
        <div className="bg-gradient-to-r from-brand-greenDeep/5 via-white to-white border border-brand-greenDeep/15 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-sm font-bold text-brand-masterDeep uppercase tracking-wider">Interested in our Educational Philosophy?</h4>
            <p className="text-xs text-brand-muted font-medium">
              We compile curated guides, educational papers, and research articles on student enterprise and peace education. Reach out for copies of our published reports and brochures.
            </p>
          </div>
          <a 
            href="mailto:info@dlfps.com"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-brand-greenDeep hover:bg-brand-greenVibrant transition-colors duration-300 px-5 py-3 rounded-full shrink-0 font-inter cursor-pointer shadow-sm"
          >
            Request Information Brochure <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  )
}
