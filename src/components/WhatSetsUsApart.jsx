import React from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, Globe, Leaf, Users, ChevronRight, Sparkles, ArrowLeft, Heart, Award, ShieldCheck, Zap } from 'lucide-react'

export default function WhatSetsUsApart() {
  const statistics = [
    { value: '1 Ton+', label: 'Plastic Waste Diverted', desc: 'From Ghazipur landfills in just 229 days, NCR benchmark.' },
    { value: '$5,000', label: 'Top Global Startup Prize', desc: 'UK School Enterprise Challenge winner two years in a row.' },
    { value: '25+', label: 'Countries in Global Exchanges', desc: '16+ years of international cross-cultural exchange programs.' },
    { value: '200+', label: 'Nutritious Meals Daily', desc: 'Distributed with dignity via the Happy Fridge since 2019.' }
  ]

  const pillars = [
    {
      id: 'internships',
      title: 'Internships & Corporate Training',
      subtitle: 'Building Capability & Career Navigation',
      intro: 'Through our structured professional internship pathways, students hear their own calling. Passion stops being abstract—it becomes actionable. Delfites gain early exposure to corporate practices, clinical psychology, and advanced research labs, steering them from being mere job seekers to futuristic job creators.',
      features: [
        'Corporate Internships: Class XI Commerce students intern at Grant Thornton (GT Bharat) to gain real-world financial advisory and business analytics exposure.',
        'Clinical Psychology: Class XI Psychology students intern annually at Fortis Hospital to explore therapeutic counseling and patient care practices.',
        'Science & Tech Research: Class IX students visit IIT Delhi to study active innovation, research, and high-performance technology ecosystems.',
        'Media & Journalism: Class VIII students participate in the Times of India (TOI) Summer Journalism Program to study communications, writing, and editorial designs.'
      ],
      caseStudy: {
        title: 'Alumni Spotlight: Arsalan Alam',
        desc: 'As a Class XI student, Arsalan interned with PayPal, later joining the prestigious SPARC Summer Internship Program. He earned a $10,000 research grant and went on to study at Plaksha University, showing how early professional exposure empowers students to design their own journeys.'
      },
      icon: Briefcase,
      color: 'from-emerald-50 to-teal-50/50 text-emerald-800 border-emerald-500/10',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      id: 'global-exchange',
      title: 'Global Cross-Cultural Exchange',
      subtitle: 'Rooted and Global — Nurturing Peace Education',
      intro: 'Over the past 16 years, we have promoted peace education and international cross-cultural exchange. We believe students can be rooted in Indian values and global at once. Students look beyond borders, embrace cultural differences, and build bridges of understanding across 25+ countries, including Japan, Germany, Finland, Russia, the Philippines, and Italy.',
      features: [
        'Long-term Exchanges: Hosted US exchange student Jacqueline Rose for a full academic year, and hosting an exchange student from Italy for the current academic session.',
        'Outbound Scholars: Delfites Anwesha Sharma (XII) and Kritika Shukla (XI) traveled to Brazil and Germany respectively on sponsored exchange programs.',
        'Russian Wheel of Friendship: Welcomed a delegation of students and teachers from Cheboksary, Russia, continuing our long-standing cross-cultural collaborations.',
        'UN SDG Integration: Projects aligned directly with United Nations SDGs, promoting cross-border research on environment, peace, and citizenship.'
      ],
      icon: Globe,
      color: 'from-blue-50 to-indigo-50/50 text-blue-800 border-blue-500/10',
      badgeColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'zero-waste',
      title: 'Zero Waste to Landfill & Money Plant Startup',
      subtitle: 'Leading the Ecological Movement & Sowing Enterprise',
      intro: 'Located just 7 kms. from our school, the Ghazipur landfill has loomed as a towering environmental hazard, emitting harmful methane and pushing AQI levels above 400. In response, DLF Public School implemented a bold Zero-Waste to landfill action plan, turning Delfites from "dependent beneficiaries" into "dependable agents of change".',
      features: [
        'Waste Segregation at Source: Students from Kindergarten to Grade XII segregate paper, plastic, e-waste, and wet waste at the classroom level daily.',
        'Consistently Diverted Monthly: Diverting approximately 100 kg plastic, 300 kg paper, 40 kg e-waste, 60 kg metal scrap, and 30 kg wet waste every month.',
        'First in Delhi-NCR: Recognized as the first school in the NCR region to collect and divert over 1 ton (1,000 kg) of plastic waste from Ghazipur landfills in just 229 days.',
        'Cumulative Impact: Since December 2024, our community has responsibly collected and recycled 556 kg plastic, 217 kg e-waste, and 2,414 kg paper waste.',
        'Teach a Man to Fish (UK): Under our Money Plant startup program, 1,500+ students from Grade VI to XI develop financial literacy. Won the Top Global Prize of $5,000 and the Best Business Development Award of $2,000 two years in a row.'
      ],
      accolades: [
        'Sustainability Superstar Award: Conferred to the school for two consecutive years.',
        'WMARS Recognition: Honored by the Waste Management and Recycling Society for consistent monthly waste diversion.'
      ],
      icon: Leaf,
      color: 'from-green-50 to-emerald-50/50 text-green-800 border-green-500/10',
      badgeColor: 'bg-green-100 text-green-800'
    },
    {
      id: 'social-responsibility',
      title: 'Student Social Responsibility & Character Building',
      subtitle: 'Empathy, Equality & Dignity of the Receiver',
      intro: 'Character is not an adjunct to education—it is its very foundation. We believe that true success is defined not just by what students achieve, but by who they become in the process. Student Social Responsibility is intentionally woven into our daily learning ecosystem, emphasizing the dignity of the receiver.',
      features: [
        'Happy Fridge (Est. 2019): A simple refrigerator placed outside the school gate to ensure no one goes to bed hungry. Replenished daily with 200 packets of home-cooked, nutritious meals by Delfites. No eligibility checks, no labels—anyone in need can take a meal with dignity intact.',
        'Sneh Bhoj: A community lunch hosted every year on Foundation Day. Students, teachers, and staff prepare and share a meal. Engaging in peeling, chopping, and cooking breaks hierarchies, cultivates dignity of labor, and fosters absolute equality.',
        'Goonj Partnership (18 Years): Working with the NGO Goonj to wholeheartedly contribute unused and pre-loved items to the underprivileged, keeping the dignity of the receiver at the core of all collections.',
        'Character Building: Everyday value-integrated lessons, reflective practices, and ethical decision-making opportunities to build resilient, compassionate global citizens.'
      ],
      icon: Users,
      color: 'from-amber-50 to-orange-50/50 text-amber-800 border-amber-500/10',
      badgeColor: 'bg-amber-100 text-amber-800'
    }
  ]

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-masterVibrant flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Distinctive Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-masterDeep">What Sets Us Apart</h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter font-medium">
              Discover the core ecological, entrepreneurial, and compassionate programs defining our schools.
            </p>
          </div>
          <Link 
            to="/" 
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-masterDeep hover:opacity-80 transition-opacity shrink-0 font-inter"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Group Portal
          </Link>
        </div>

        {/* Highlight Stats Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 text-center">
          {statistics.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md space-y-2 hover:shadow-lg transition-all duration-300">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-masterDeep">{stat.value}</span>
              <h4 className="text-xs font-extrabold text-brand-charcoal leading-tight uppercase tracking-wider">{stat.label}</h4>
              <p className="text-[10px] text-brand-muted leading-relaxed font-inter font-medium">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed Sections List */}
        <div className="space-y-12 max-w-5xl mx-auto pt-6">
          {pillars.map((pillar) => {
            const PillarIcon = pillar.icon
            return (
              <div 
                key={pillar.id}
                id={pillar.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 hover:shadow-2xl transition-shadow duration-500 relative group scroll-mt-32"
              >
                {/* Accent line on left */}
                <div className={`absolute top-0 left-0 w-full h-1.5 md:w-2 md:h-full bg-gradient-to-b ${pillar.id === 'internships' ? 'from-emerald-500 to-teal-500' : pillar.id === 'global-exchange' ? 'from-blue-500 to-indigo-500' : pillar.id === 'zero-waste' ? 'from-green-500 to-emerald-500' : 'from-amber-500 to-orange-500'}`}></div>
                
                {/* Left Column: Icon and Headings */}
                <div className={`p-8 md:p-10 md:col-span-4 flex flex-col justify-start md:pt-12 bg-gradient-to-br ${pillar.color} border-b md:border-b-0 md:border-r border-gray-100/50`}>
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm">
                    <PillarIcon className="w-6 h-6" />
                  </div>
                  <span className={`text-[9px] uppercase tracking-widest font-extrabold mb-1 font-inter ${pillar.badgeColor} px-2.5 py-0.5 rounded-full w-max`}>
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal leading-tight mt-2">
                    {pillar.title}
                  </h3>
                </div>

                {/* Right Column: Bio & Features List */}
                <div className="p-8 md:p-10 md:col-span-8 space-y-6">
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                    {pillar.intro}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] uppercase font-bold text-brand-masterVibrant tracking-widest block font-inter">Key Milestones & Structured Programs</span>
                    <div className="space-y-3.5">
                      {pillar.features.map((feat, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <div className="w-5 h-5 rounded-full bg-brand-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                            <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                          </div>
                          <span className="text-xs font-semibold text-brand-charcoal font-inter leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Optional Case Study or Awards Block */}
                  {pillar.caseStudy && (
                    <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-5 space-y-2 mt-4 font-inter text-xs relative group-hover:bg-white transition-colors duration-300">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-brand-gold" />
                        <h4 className="font-bold text-brand-charcoal uppercase tracking-wider text-[10px]">{pillar.caseStudy.title}</h4>
                      </div>
                      <p className="text-brand-muted leading-relaxed font-medium pl-6">
                        {pillar.caseStudy.desc}
                      </p>
                    </div>
                  )}

                  {pillar.accolades && (
                    <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-5 space-y-3.5 mt-4 font-inter text-xs relative group-hover:bg-white transition-colors duration-300">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-brand-gold" />
                        <h4 className="font-bold text-brand-charcoal uppercase tracking-wider text-[10px]">Institutional Recognitions</h4>
                      </div>
                      <div className="space-y-2 pl-6 text-brand-muted font-medium">
                        {pillar.accolades.map((acc, aIdx) => (
                          <p key={aIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0"></span> {acc}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
