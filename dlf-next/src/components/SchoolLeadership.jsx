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

      </div>
    </div>
  )
}
