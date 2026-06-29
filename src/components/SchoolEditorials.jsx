import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import { BookOpen, Calendar, User, ArrowLeft, ArrowRight, X, Heart } from 'lucide-react'

export default function SchoolEditorials() {
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

  const [activeArticle, setActiveArticle] = useState(null) // selected article for modal reading

  const articles = [
    {
      id: 'art-1',
      title: 'A Thinking School with a Soul: The Philosophy of Learning How to Think',
      author: 'Dr. Mrignaini (Executive Director)',
      date: 'June 20, 2026',
      readTime: '5 min read',
      summary: 'In an era dominated by rapid computational logic and AI frameworks, teaching children how to construct critical questions is far more critical than teaching them facts. Explore the pedagogical core behind our Thinking School model.',
      quote: 'We teach children how to build questions, not memorize answers. The courage to ask is the true root of capability.',
      body: `Traditional schooling models have historically focused on the retrieval of information. Standard exams reward memory retention rather than conceptual creativity. Yet, the challenges of the 2020s and beyond demand an entirely different capability. As global systems face ecological, economic, and technological disruptions, the absolute priority of modern education must be to construct independent, self-governing minds.

      At DLF Schools, our benchmark is simple: 'A Thinking School with a Soul.' This means we integrate logical analysis, STEM reasoning, and design thinking directly alongside values, character, and social responsibility. Our students are not passive recipients of curriculum notes; they are active creators who question guidelines, analyze local resources, and manage actual zero-waste recycling plants on campus.

      By offering this experiential foundation, we ensure that our graduates possess both the outstanding intellectual rigor required for global universities, and the compassionate, generous hearts necessary to champion an eco-friendly tomorrow.`
    },
    {
      id: 'art-2',
      title: 'Zero Waste to Landfill: Cultivating Ecological Stewards in Action',
      author: 'School Editorial Board',
      date: 'May 12, 2026',
      readTime: '4 min read',
      summary: 'DLF schools have eliminated standard school dumpster models. Read how our on-campus paper recycling plants and student compost marshals translate abstract environmental science into measurable local milestones.',
      quote: 'Sustainability is not a topic in a science textbook; it is a physical commitment that shapes daily choices.',
      body: `Walk through any typical school, and you will notice bins overflowing with plastic wraps, paper notes, and lunch waste. Every year, educational institutions generate tons of carbon footprint that goes straight to local municipal dumpsters. We decided that this standard model was unacceptable.

      Through our Student Social Responsibility (SSR) framework, we established the Zero Waste to Landfill initiative. Every ounce of paper waste is routed directly to our on-campus paper recycling unit, where student marshals oversee its transformation into fresh art boards. Organic food waste from canteens is composted on-site and returned back to nourish our campus trees.

      By making sustainability a physical, daily action, we teach students that conservation is not a chapter to memorize for examinations, but a life practice that defines civilized global citizenship.`
    },
    {
      id: 'art-3',
      title: 'The Sibling Bond and Community: Bridging Generation Gaps',
      author: 'Ms. Seema Jerath (Principal)',
      date: 'April 05, 2026',
      readTime: '6 min read',
      summary: 'Education must build connection. Our unique peer mentoring and community tutoring initiatives encourage older students to guide younger peers, shaping a collaborative, compassionate legacy.',
      quote: 'When an older sibling or peer guides a younger student, the learning goes deeper than any lecture.',
      body: `In typical co-educational environments, junior and senior classes are strictly separated by architectural segments and schedules. Older students rarely interact with primary grade blocks. We believe this compartmentalization misses a rich educational opportunity.

      Our Peer Mentoring program pairs senior secondary students with primary block groups. Senior students assist younger peers in coding bootcamps, theatre scripts, and social service drives. The results have been outstanding: younger children develop secure learning loops, while senior students build vital emotional leadership, empathy, and communication skills.

      This community-building model ensures that DLF Schools operate not just as academic units, but as supportive tribal ecosystems where learning flows naturally between generations.`
    }
  ]

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Publications & Ethos</span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary}`}>DLF Editorials</h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter">
              Thought leadership, student-led articles, and statements from our mentors.
            </p>
          </div>
          <Link 
            to={`/school/${activeBranch}`}
            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:opacity-80 transition-opacity shrink-0`}
          >
            <ArrowLeft className="w-4 h-4" /> Back to School Home
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {articles.map(art => (
            <div 
              key={art.id} 
              className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-${theme.primary}`}></div>
              
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between text-[10px] text-brand-muted font-semibold font-inter">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {art.date}</span>
                  <span>{art.readTime}</span>
                </div>
                
                <h3 className="font-serif text-lg font-bold text-brand-charcoal leading-snug group-hover:text-brand-gold transition-colors duration-300">
                  {art.title}
                </h3>
                
                <p className="text-xs text-brand-muted leading-relaxed font-inter font-medium line-clamp-4">
                  {art.summary}
                </p>
              </div>

              <div className="p-6 sm:p-8 border-t border-gray-50 bg-gray-50/50 flex justify-between items-center">
                <span className="text-[10px] font-bold text-brand-charcoal truncate font-inter max-w-[150px]">{art.author}</span>
                <button 
                  onClick={() => setActiveArticle(art)}
                  className={`text-xs font-bold text-${theme.primary} hover:text-${theme.vibrant} flex items-center gap-1 transition-colors uppercase tracking-wider cursor-pointer`}
                >
                  Read Post <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reader Modal Overlay */}
      {activeArticle && (
        <div className="fixed inset-0 bg-brand-charcoal/65 backdrop-blur-sm z-[99999] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl relative border border-gray-150/15">
            
            {/* Modal Header */}
            <div className={`p-6 sm:p-8 bg-gradient-to-br from-${theme.primary} to-${theme.vibrant} text-white flex justify-between items-start gap-4 sticky top-0 z-20`}>
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-wider text-white/80">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {activeArticle.date}</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                  {activeArticle.title}
                </h3>
                <p className="text-xs text-white/90 font-inter flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Author: {activeArticle.author}</p>
              </div>
              <button 
                onClick={() => setActiveArticle(null)}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close reader"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 sm:p-10 space-y-6">
              
              {/* Featured Quote */}
              <blockquote className={`border-l-4 border-${theme.accent} pl-6 py-2 font-serif italic text-base sm:text-lg text-brand-charcoal bg-gray-50/50 rounded-r-2xl pr-4`}>
                "{activeArticle.quote}"
              </blockquote>

              {/* Main Text */}
              <div className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium space-y-4 whitespace-pre-line">
                {activeArticle.body}
              </div>

              {/* Modal Footer signature */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-brand-muted font-inter">
                <span className="font-semibold">DLF Schools Editorial Board</span>
                <span className="flex items-center gap-1 font-semibold text-brand-gold"><Heart className="w-4 h-4 fill-brand-gold text-brand-gold" /> Inspiring Minds</span>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  )
}
