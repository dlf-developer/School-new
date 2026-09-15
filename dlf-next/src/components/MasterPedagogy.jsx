import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, CheckCircle2, ArrowRight, Puzzle, Cpu, Award } from 'lucide-react'

export default function MasterPedagogy() {
  const [activeTab, setActiveTab] = useState('early-years')

  const stages = [
    {
      id: 'early-years',
      title: 'Early Years',
      label: 'Foundational Stage',
      Icon: Sparkles,
      image: '/pedagogy/early-years/7C1A1724.jpg',
      imageCaption: 'Discovery Den, Toy-Based & Experiential Play',
      summary: 'Aligned with NEP 2020 & NCF-FS, our Foundation Stage pedagogy is child-centric, play-based, inclusive, and experiential. Learning is designed around exploration, imagination, and joyful discovery, nurturing language, socio-emotional wellbeing, and foundational literacy in a safe, caring space.',
      pillars: [
        {
          title: "Play as the Medium",
          desc: "Free and structured inquiry, sensory corners, and exploratory games laying the foundation of joyful learning."
        },
        {
          title: "Storytelling Pedagogy",
          desc: "Stories, puppetry, role-play, and conversations strengthening imagination, listening, and expression."
        },
        {
          title: "Toy-Based Discovery",
          desc: "Hands-on exploration trays, building kits, and tactile activities enhancing cognitive and motor development."
        }
      ]
    },
    {
      id: 'primary-years',
      title: 'Primary Years',
      label: 'Primary Stage',
      Icon: Puzzle,
      image: '/pedagogy/primary-years/7C1A1819.jpg',
      imageCaption: 'THOTS Lab & Higher-Order Thinking Inquiry',
      summary: 'The Primary Years mark the transition from guided exploration to structured inquiry and independent thinking. Through collaborative projects, higher-order thinking (THOTS) labs, and hands-on discovery, learners build deep conceptual clarity, creativity, and problem-solving skills.',
      pillars: [
        {
          title: "Inquiry & THOTS Labs",
          desc: "Higher Order Thinking Skills (THOTS) lab nurturing active investigation and structured questioning."
        },
        {
          title: "Competency-Based Learning",
          desc: "Development of core skills and conceptual understanding applied in authentic, relatable contexts."
        },
        {
          title: "Art & Sports Integration",
          desc: "Creative expression through music, drama, visual arts, and athletic movement woven into daily learning."
        }
      ]
    },
    {
      id: 'middle-years',
      title: 'Middle Years',
      label: 'Middle Stage',
      Icon: Cpu,
      image: '/pedagogy/middle-years/7C1A1782.jpg',
      imageCaption: 'Problem-Based Projects & Science Laboratories',
      summary: 'Middle Years foster rigorous intellectual exploration, scientific inquiry, robotics, and social innovation. Students tackle real-world sustainability challenges, flipped classrooms, and design-thinking problem solving, connecting academic learning with meaningful societal impact.',
      pillars: [
        {
          title: "Problem-Based Learning",
          desc: "Real-world challenges in waste management, conservation, and prototyping innovative student solutions."
        },
        {
          title: "Flipped Classroom Model",
          desc: "Pre-class digital exploration freeing classroom time for discussions, debate, and deeper collaboration."
        },
        {
          title: "Life & Machine Domains",
          desc: "Hands-on exposure to Machines & Materials, coding, robotics, and community service projects."
        }
      ]
    },
    {
      id: 'senior-years',
      title: 'Senior Years',
      label: 'Secondary Stage',
      Icon: Award,
      image: '/pedagogy/senior-years/7C1A2005.jpg',
      imageCaption: 'Multidisciplinary Research & Scholastic Leadership',
      summary: 'The Secondary Stage delivers multidisciplinary academic rigor and future readiness. Students explore flexible combinations integrating Artificial Intelligence, Design Thinking, and Entrepreneurship, developing the leadership, critical thinking, and ethics needed for global excellence.',
      pillars: [
        {
          title: "Multidisciplinary Flexibility",
          desc: "Freedom to combine diverse subjects across sciences, humanities, design, and computational streams."
        },
        {
          title: "Case-Based & PBL Rigour",
          desc: "Analyzing contemporary global challenges and authentic scenarios to build critical decision-making."
        },
        {
          title: "Future-Ready Domains",
          desc: "Integrated Artificial Intelligence, Financial Literacy, Entrepreneurship, and digital citizenship."
        }
      ]
    }
  ]

  const currentStage = stages.find(s => s.id === activeTab) || stages[0]

  return (
    <div className="py-10 text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] ambient-glow-1 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] ambient-glow-2 rounded-full blur-3xl pointer-events-none" />

      <div className="w-[96%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        {/* Main Solid Card */}
        <div className="bg-white rounded-3xl border border-brand-masterDeep/5 p-8 sm:p-10 shadow-sm space-y-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-gold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
                Nurturing Learning Pathways
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-masterDeep">
                Our Pedagogy
              </h2>
            </div>

            {/* 4 Stage Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {stages.map(stage => {
                const Icon = stage.Icon
                const isActive = activeTab === stage.id
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveTab(stage.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-brand-greenDeep text-white border-brand-greenDeep shadow-sm scale-102'
                        : 'bg-gray-50 text-brand-charcoal hover:bg-gray-100 border-gray-200'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-gold' : 'text-brand-muted'}`} />
                    <span>{stage.title}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Stage Overview + Stage Picture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Stage Summary (4-5 lines) + 3 Pointer Cards */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-2 bg-brand-greenDeep/5 text-brand-greenDeep px-3 py-1 rounded-full text-xs font-bold font-sans">
                  <currentStage.Icon className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{currentStage.label}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-masterDeep">
                  {currentStage.title} — <span className="text-brand-charcoal font-normal">{currentStage.label}</span>
                </h3>
                <p className="text-sm sm:text-base text-brand-muted font-medium leading-relaxed">
                  {currentStage.summary}
                </p>
              </div>

              {/* 3 Reference Pointer Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                {currentStage.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="bg-brand-bg/40 rounded-2xl border border-brand-masterDeep/5 p-4 space-y-2 hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <h4 className="font-serif text-xs sm:text-sm font-bold text-brand-masterDeep group-hover:text-brand-greenDeep transition-colors">
                          {pillar.title}
                        </h4>
                        <p className="text-[11px] text-brand-muted leading-relaxed font-sans font-medium">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage Photo Visual From Respective Section */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden aspect-[16/11] border border-brand-masterDeep/5 bg-brand-bg relative shadow-sm group">
                <img
                  src={currentStage.image}
                  alt={currentStage.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Floating CTA Button Outside the Section Card */}
        <div className="text-center pt-4 pb-2">
          <Link
            to="/pedagogy"
            className="inline-flex items-center gap-3 bg-brand-masterDeep hover:bg-brand-masterVibrant text-white px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-xl shadow-brand-masterDeep/20 hover:scale-105"
          >
            <span>View More About Our Pedagogy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
