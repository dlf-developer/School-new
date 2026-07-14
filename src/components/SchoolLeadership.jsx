import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import { Award, Shield, Sprout, ArrowLeft, ChevronRight, User, Target, Lightbulb, Handshake, Globe2 } from 'lucide-react'

// Map string icon names to Lucide icons
const iconMap = {
  Sprout: Sprout,
  Shield: Shield,
  Award: Award,
  User: User
}

export default function SchoolLeadership() {
  const { schoolId } = useParams()
  const { schools, global } = useSiteData()
  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]
  
  const theme = currentSchool?.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27'
  }

  // Retrieve management leaders from global config
  const rawLeaders = global?.management?.leaders || []
  
  const leaders = rawLeaders.map(leader => {
    let specificRole = leader.role
    if (activeBranch === 'dlf-greater-noida' && leader.id === 'mgmt-2') {
      specificRole = 'Group Executive Director | Educationist & Polymer Scientist'
    }
    return {
      ...leader,
      role: specificRole
    }
  })

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>School Governance</span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary}`}>Profiles in Leadership</h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter font-medium">
              Meet the visionary educators leading {currentSchool.name} towards academic excellence.
            </p>
          </div>
          <Link 
            to={`/school/${activeBranch}`}
            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:opacity-80 transition-opacity shrink-0`}
          >
            <ArrowLeft className="w-4 h-4" /> Back to School Home
          </Link>
        </div>

        {/* Leadership Cards Stack */}
        <div className="space-y-12 max-w-5xl mx-auto pt-4">
          {leaders.map((leader) => {
            const LeaderIcon = iconMap[leader.icon] || User
            return (
              <div 
                key={leader.id} 
                className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 hover:shadow-2xl transition-shadow duration-300 relative group"
              >
                {/* Visual Accent */}
                <div className={`absolute top-0 left-0 w-full h-1.5 md:w-2 md:h-full bg-${theme.primary}`}></div>

                {/* Left Visual Column */}
                <div className="p-8 md:p-10 md:col-span-4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 bg-gray-50/50">
                  <div className={`w-20 h-20 rounded-2xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center mb-4 shadow-sm`}>
                    <LeaderIcon className="w-10 h-10" />
                  </div>
                  <span className={`text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full bg-${theme.primary}/10 text-${theme.primary} mb-2`}>
                    {leader.badge}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal text-center leading-tight">
                    {leader.name}
                  </h3>
                  <p className="text-[10px] text-brand-muted text-center mt-1 leading-normal font-semibold font-inter">
                    {leader.role}
                  </p>
                </div>

                {/* Right Description Column */}
                <div className="p-8 md:p-10 md:col-span-8 space-y-6">
                  <div className="space-y-2">
                    <h4 className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant} font-inter`}>Leadership Profile</h4>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant} font-inter`}>Key Milestones & Accolades</h4>
                    <ul className="space-y-2 text-xs text-brand-charcoal font-inter leading-relaxed">
                      {leader.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <ChevronRight className={`w-3.5 h-3.5 text-${theme.accent} shrink-0 mt-0.5`} />
                          <span className="font-semibold">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {/* ── Principal's Desk Section ── */}
        <div className="max-w-5xl mx-auto space-y-8 border-t border-gray-100 pt-12">
          <div>
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>A Message From</span>
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary} mt-1`}>From the Principal's Desk</h3>
          </div>

          {/* Quote Banner */}
          <div className={`bg-${theme.primary}/5 border-l-4 border-${theme.primary} rounded-r-2xl p-6 sm:p-8 space-y-3`}>
            <blockquote className="font-serif italic text-base sm:text-lg text-brand-charcoal leading-relaxed">
              "Three decades. Thousands of learners. Countless dreams &amp; Remarkable milestones. We have always believed that education is not about producing successful students alone; it is about nurturing thinkers, innovators, creators, and compassionate citizens."
            </blockquote>
            <div className="flex items-center gap-3 pt-2">
              <div className={`w-8 h-0.5 bg-${theme.accent}`}></div>
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-brand-muted">Principal, {currentSchool?.name}</span>
            </div>
          </div>

          {/* Full Message Paragraphs */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-8 sm:p-10 space-y-5 text-xs sm:text-sm text-brand-muted font-inter leading-relaxed font-medium">
            <p>
              At the heart of our philosophy lies the belief that every child is unique and has the potential to become a success story — not by fitting into predefined moulds, but by discovering their own strengths, passions, and purpose. Some shine on stage, some in laboratories, some on sports fields, some through ideas, kindness, leadership, or quiet perseverance. Our role is not to place children into boxes, but to help them discover their own light.
            </p>
            <p>
              We are also committed to creating an inclusive and nurturing environment where every learner feels seen, heard, valued, and inspired to discover their authentic potential. Our ethos of <strong className="text-brand-charcoal">"No Learner Left Behind"</strong> reflects our dedication to ensuring that each child advances with confidence and dignity.
            </p>
            <p>
              Learning at DLF is not confined to textbooks or report cards. It unfolds through ideas debated passionately, experiments that fail before they succeed, performances that build confidence, community initiatives that nurture empathy, and experiences that teach children to collaborate, reflect, and grow. With a strong focus on future-ready skills, innovation, critical thinking, creativity, and values-driven education, we prepare learners not just for examinations, but for life beyond them.
            </p>
            <p>
              Equally important is the partnership we share with parents, the first teachers in every child's life. When home and school walk together, children learn to walk confidently into the world.
            </p>
            <p>
              The true legacy of a school is not measured by buildings or accolades, but by the lives its learners go on to shape. Today, our alumni are spread across the globe as innovators, leaders, creators, entrepreneurs, and socially conscious changemakers — carrying with them a little piece of DLF wherever they go.
            </p>
            <p className={`font-bold text-${theme.primary} font-serif not-italic text-sm`}>
              Because long after lessons are forgotten, it is character, compassion, and courage that truly endure.
            </p>
          </div>

          {/* Key Philosophy Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { Icon: Target,    title: 'No Learner Left Behind',      desc: 'Every child advances with confidence and dignity.' },
              { Icon: Lightbulb, title: 'Thinking Beyond Textbooks',    desc: 'Innovation, critical thinking, and life skills first.' },
              { Icon: Handshake, title: 'Home + School Partnership',    desc: 'Parents as the first and most vital teachers.' },
              { Icon: Globe2,    title: '30 Years of Legacy',           desc: 'Alumni as global changemakers and innovators.' },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-2 text-center hover:shadow-md transition-shadow">
                <span className={`inline-flex items-center justify-center h-9 w-9 rounded-full bg-${theme.primary}/10 text-${theme.primary} mx-auto`}>
                  <card.Icon size={18} strokeWidth={1.75} />
                </span>
                <h4 className={`font-serif text-xs font-bold text-${theme.primary} leading-snug`}>{card.title}</h4>
                <p className="text-[10px] text-brand-muted font-inter leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
