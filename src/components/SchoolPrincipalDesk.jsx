import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import { ArrowLeft, Target, Lightbulb, Handshake, Globe2, Quote } from 'lucide-react'

export default function SchoolPrincipalDesk() {
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

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>A Message From</span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary}`}>From the Principal's Desk</h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter font-medium">
              Warm Namaste and a message of legacy, learning, and character from the Principal.
            </p>
          </div>
          <Link 
            to={`/school/${activeBranch}`}
            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:opacity-80 transition-opacity shrink-0`}
          >
            <ArrowLeft className="w-4 h-4" /> Back to School Home
          </Link>
        </div>

        {/* Quote Banner */}
        <div className="max-w-5xl mx-auto">
          <div className={`bg-${theme.primary}/5 border-l-4 border-${theme.primary} rounded-r-3xl p-8 sm:p-10 space-y-4 relative overflow-hidden shadow-sm`}>
            <div className="absolute right-4 bottom-2 text-gray-200/40 pointer-events-none">
              <Quote className="w-32 h-32 rotate-180" />
            </div>
            <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>{currentSchool?.principalDesk?.title || "From the Principal's Desk"}</h3>
            <blockquote className="font-serif italic text-base sm:text-xl text-brand-charcoal leading-relaxed relative z-10">
              {currentSchool?.principalDesk?.quote || '"Three decades. Thousands of learners. Countless dreams & Remarkable milestones. As we celebrate this significant milestone, we look back with gratitude at the trust reposed in us by generations of parents, students, educators, and well-wishers who have been an integral part of our journey."'}
            </blockquote>
            <div className="flex items-center gap-3 pt-2">
              <div className={`w-8 h-0.5 bg-${theme.accent}`}></div>
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-brand-muted">
                Principal — {currentSchool?.name}
              </span>
            </div>
          </div>
        </div>

        {/* Full Message Paragraphs */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Text Content */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-md p-8 sm:p-10 space-y-6 text-xs sm:text-sm text-brand-muted font-inter leading-relaxed font-medium">
            {currentSchool?.principalDesk?.paragraphs ? (
              currentSchool.principalDesk.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))
            ) : (
              <>
                <p>
                  We have always believed that education is not about producing successful students alone; it is about nurturing thinkers, innovators, creators, and compassionate citizens. It is about nurturing mindful human beings who recognise their moral obligation towards society and embrace social responsibility.
                </p>
                <p>
                  At the heart of our philosophy lies the belief that every child is unique and has the potential to become a success story—not by fitting into predefined moulds, but by discovering their own strengths, passions, and purpose. Some shine on stage, some in laboratories, some on sports fields, some through ideas, kindness, leadership, or quiet perseverance. Our role is not to place children into boxes, but to help them discover their own light.
                </p>
                <p>
                  We are also committed to creating an inclusive and nurturing environment where every learner feels seen, heard, valued, and inspired to discover their authentic potential. Our ethos of <strong className="text-brand-charcoal">"No Learner Left Behind"</strong> reflects our dedication to ensuring that each child advances with confidence and dignity.
                </p>
                <p>
                  Learning at DLF is not confined to textbooks or report cards. It unfolds through ideas debated passionately, experiments that fail before they succeed, performances that build confidence, community initiatives that nurture empathy, and experiences that teach children to collaborate, reflect, and grow. With a strong focus on future-ready skills, innovation, critical thinking, creativity, and values-driven education, we prepare learners not just for examinations, but for life beyond them.
                </p>
                <p>
                  At the heart of our holistic education philosophy is the whole child — intellectually awakened, emotionally secure, socially aware, and ethically grounded. We strive to create an environment where children feel seen, heard, encouraged, and inspired to ask questions, take initiative, embrace challenges, and become future-ready individuals with humane hearts.
                </p>
                <p>
                  Equally important is the partnership we share with parents, the first teachers in every child's life. When home and school walk together, children learn to walk confidently into the world.
                </p>
                <p>
                  The true legacy of a school is not measured by buildings or accolades, but by the lives its learners go on to shape. Today, our alumni are spread across the globe as innovators, leaders, creators, entrepreneurs, and socially conscious changemakers — carrying with them a little piece of DLF wherever they go. Their achievements remind us that empowered, compassionate thinkers do not simply succeed professionally; they leave a meaningful impact on the world around them.
                </p>
                <p>
                  As we celebrate three decades of learning and legacy, we continue to evolve with changing times while staying rooted in timeless values.
                </p>
                <p className={`font-bold text-${theme.primary} font-serif not-italic text-sm sm:text-base`}>
                  Because long after lessons are forgotten, it is character, compassion, and courage that truly endure.
                </p>
              </>
            )}
          </div>

          {/* Key Philosophy Cards Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            {[
              { Icon: Target,    title: 'No Learner Left Behind',      desc: 'Every child feels seen, heard, valued, and advances with confidence and dignity.' },
              { Icon: Lightbulb, title: 'Thinking Beyond Textbooks',    desc: 'Focus on future-ready skills, innovation, critical thinking, and values-driven education.' },
              { Icon: Handshake, title: 'Home + School Partnership',    desc: 'Equally vital collaboration with parents to raise confident citizens.' },
              { Icon: Globe2,    title: '30 Years of Legacy',           desc: 'Alumni as global changemakers, entrepreneurs, and socially conscious pioneers.' },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-3 hover:shadow-md transition-all duration-300">
                <span className={`inline-flex items-center justify-center h-10 w-10 rounded-xl bg-${theme.primary}/10 text-${theme.primary}`}>
                  <card.Icon size={20} strokeWidth={2} />
                </span>
                <h4 className={`font-serif text-sm font-bold text-${theme.primary} leading-snug`}>{card.title}</h4>
                <p className="text-[11px] text-brand-muted font-inter leading-relaxed font-medium">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}
