import React from 'react'
import { useParams } from 'react-router-dom'
import { Trophy, Award, Star, CheckCircle2, TrendingUp, Sparkles, GraduationCap } from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'

export default function CbseResults({ isEmbedded = false }) {
  const { schoolId } = useParams()
  const { schools } = useSiteData()

  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]
  const isDLWS = activeBranch === 'dlf-greater-noida'

  const theme = currentSchool?.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27'
  }

  const resultsData = isDLWS
    ? {
        session: 'Session 2024-25',
        passPercentage12: '100%',
        passPercentage10: '100%',
        highestScore12: '97.6%',
        highestScore10: '98.2%',
        distinctions: '90%+',
        avgScore: '86.4%',
        toppers: [
          { name: 'Aadya Sharma', grade: 'Class XII (Science)', score: '97.6%', feat: 'District Stream Rank #1' },
          { name: 'Rohan Gupta', grade: 'Class XII (Commerce)', score: '96.8%', feat: '100/100 in Accountancy' },
          { name: 'Sneha Verma', grade: 'Class X', score: '98.2%', feat: '100/100 in Mathematics' },
          { name: 'Kavya Singh', grade: 'Class X', score: '98.4%', feat: '100/100 in Science' }
        ]
      }
    : {
        session: 'Session 2024-25',
        passPercentage12: '100%',
        passPercentage10: '100%',
        highestScore12: '98.4%',
        highestScore10: '98.8%',
        distinctions: '94%+',
        avgScore: '88.2%',
        toppers: [
          { name: 'Ananya Rastogi', grade: 'Class XII (Science)', score: '98.4%', feat: 'Perfect 100 in Physics & Chem' },
          { name: 'Devansh Agarwal', grade: 'Class XII (Commerce)', score: '97.8%', feat: '100/100 in Economics' },
          { name: 'Prisha Kapoor', grade: 'Class XII (Humanities)', score: '98.0%', feat: '100/100 in Psychology' },
          { name: 'Arjun Mehta', grade: 'Class X', score: '98.8%', feat: 'Perfect 100 in Maths & Science' }
        ]
      }

  return (
    <section id="cbse-results" className={`${isEmbedded ? 'py-6' : 'py-16 sm:py-20 bg-white'} text-brand-charcoal`}>
      <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 text-brand-gold font-extrabold text-[11px] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Academic Excellence Record
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-${theme.primary}`}>
            Last Year's CBSE Results
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed max-w-2xl mx-auto font-medium">
            Celebrating the stellar academic performance of our students in CBSE Class X &amp; XII Board Examinations ({resultsData.session}).
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 text-center space-y-2 hover:shadow-md transition-all">
            <div className={`w-12 h-12 mx-auto rounded-2xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center`}>
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <p className={`text-3xl sm:text-4xl font-extrabold text-${theme.primary} font-serif`}>
              {resultsData.passPercentage12}
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">Class XII Pass Rate</h4>
            <p className="text-[11px] text-brand-muted font-inter">100% First Division Pass Record</p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 text-center space-y-2 hover:shadow-md transition-all">
            <div className={`w-12 h-12 mx-auto rounded-2xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center`}>
              <GraduationCap className="w-6 h-6" />
            </div>
            <p className={`text-3xl sm:text-4xl font-extrabold text-${theme.primary} font-serif`}>
              {resultsData.passPercentage10}
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">Class X Pass Rate</h4>
            <p className="text-[11px] text-brand-muted font-inter">Continuous Unbeaten 100% Record</p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 text-center space-y-2 hover:shadow-md transition-all">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Trophy className="w-6 h-6" />
            </div>
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-700 font-serif">
              {resultsData.highestScore10}
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">School Top Aggregate</h4>
            <p className="text-[11px] text-brand-muted font-inter">Highest Grade X Marks</p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 text-center space-y-2 hover:shadow-md transition-all">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Star className="w-6 h-6" />
            </div>
            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-700 font-serif">
              {resultsData.distinctions}
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">Distinction Rate</h4>
            <p className="text-[11px] text-brand-muted font-inter">Students scoring distinction in all subjects</p>
          </div>
        </div>

        {/* Toppers Cards Grid */}
        <div className="space-y-4">
          <h3 className={`font-serif text-xl sm:text-2xl font-bold text-center text-${theme.primary}`}>
            Board Stream Toppers &amp; High Achievers
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {resultsData.toppers.map((topper, i) => (
              <div key={i} className="bg-white border border-gray-150 rounded-2xl p-5 space-y-3 shadow-sm hover:border-brand-gold/50 transition-all relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-${theme.primary}/10 text-${theme.primary} uppercase tracking-wider`}>
                    Rank #{i + 1}
                  </span>
                  <Award className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal">{topper.name}</h4>
                  <p className="text-xs text-brand-muted font-inter">{topper.grade}</p>
                </div>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className={`text-xl font-extrabold text-${theme.primary} font-serif`}>{topper.score}</span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {topper.feat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
