import React from 'react'
import { useParams } from 'react-router-dom'
import { Trophy, Award, Star, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'

export default function CbseResults() {
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

  const primaryColor = theme.primary
  const vibrantColor = theme.vibrant
  const schoolName = currentSchool?.name || 'DLF School'

  const dlpsTopScorers = [
    {
      name: "Aadya Singh",
      score: "98.8%",
      stream: "Class XII — Science",
      achievement: "School Topper & AIR 14",
      image: "/achievements/Aadya Singh.jpg"
    },
    {
      name: "Misha Joshi",
      score: "98.4%",
      stream: "Class XII — Science",
      achievement: "100/100 Physics & Math",
      image: "/achievements/Misha Joshi.jpg"
    },
    {
      name: "Neal Singroha",
      score: "97.8%",
      stream: "Class XII — Commerce",
      achievement: "100/100 Accountancy",
      image: "/achievements/Neal Singroha.jpg"
    },
    {
      name: "Anirudh M.M.",
      score: "98.6%",
      stream: "Class X — All Subjects",
      achievement: "Class X School Topper",
      image: "/achievements/Anirudh MM.jpeg"
    },
  ]

  const dlwsTopScorers = [
    {
      name: "Aarav Sharma",
      score: "97.4%",
      stream: "Class X — All Subjects",
      achievement: "Class X School Topper",
      image: "/baby_boy.jpg"
    },
    {
      name: "Diya Patel",
      score: "96.8%",
      stream: "Class X — Science & Math",
      achievement: "Subject Distinction 100/100",
      image: "/baby_girl.jpeg"
    },
    {
      name: "Kabir Verma",
      score: "96.2%",
      stream: "Class X — Social & Lang",
      achievement: "Merit Scholar Award",
      image: "/campus/campus3.jpg"
    },
    {
      name: "Rhea Gupta",
      score: "95.8%",
      stream: "Class X — All Subjects",
      achievement: "Academic Excellence",
      image: "/campus/campus2.jpg"
    },
  ]

  const topScorers = isDLWS ? dlwsTopScorers : dlpsTopScorers

  const dlpsStats = [
    { value: "100%", label: "Pass Percentage", sub: "Class X & XII Board Exams" },
    { value: "98.8%", label: "Highest Percentage", sub: "Class XII Board Result 2025" },
    { value: "54%", label: "Scored 90%+ Marks", sub: "Across all streams" },
    { value: "88.4%", label: "Average Aggregate", sub: "School Class Average" },
  ]

  const dlwsStats = [
    { value: "100%", label: "Pass Percentage", sub: "Class X Board Examinations" },
    { value: "97.4%", label: "Highest Percentage", sub: "Class X Board Result 2025" },
    { value: "48%", label: "Scored 90%+ Marks", sub: "Across all sections" },
    { value: "86.8%", label: "Average Aggregate", sub: "School Class Average" },
  ]

  const stats = isDLWS ? dlwsStats : dlpsStats

  return (
    <div className="py-10 text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden font-sans">
      <div className="w-[96%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <section className="bg-white rounded-3xl border border-brand-greenDeep/5 shadow-sm p-8 sm:p-10 space-y-10">
          {/* Header */}
          <div className="border-b border-gray-100 pb-6">
            <div>
              <span className={`text-xs uppercase font-extrabold tracking-widest text-${vibrantColor}`}>
                Academic Benchmark
              </span>
              <h3 className={`font-serif text-2xl sm:text-4xl font-bold text-${primaryColor} mt-1`}>
                Last Year's CBSE Board Results
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted font-inter mt-1 font-medium">
                Outstanding academic performance of {schoolName} students in the CBSE Class X &amp; XII Board Examinations.
              </p>
            </div>
          </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, idx) => (
          <div key={idx} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center space-y-1">
            <span className={`font-serif text-2xl sm:text-3xl font-extrabold text-${primaryColor}`}>
              {s.value}
            </span>
            <h4 className="text-xs font-bold text-brand-charcoal">{s.label}</h4>
            <p className="text-[10px] text-brand-muted font-inter">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Top Scorers Cards with Student Images */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className={`text-xs uppercase tracking-widest font-extrabold text-${vibrantColor} font-inter flex items-center gap-2`}>
            <Star className="w-4 h-4 text-brand-gold fill-brand-gold" /> Class X &amp; XII Toppers Showcase
          </h4>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">
            Board Achievers
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topScorers.map((scorer, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-3xl border border-gray-150 p-4 space-y-4 relative overflow-hidden group hover:shadow-xl hover:bg-white hover:border-gray-200 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Student Image Banner with Score Badge */}
              <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden relative bg-gray-200 shadow-inner">
                <img
                  src={scorer.image}
                  alt={scorer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                
                {/* Score Tag Top Right */}
                <div className="absolute top-3 right-3 bg-brand-gold text-brand-charcoal text-xs font-black font-serif px-3 py-1 rounded-full shadow-lg">
                  {scorer.score}
                </div>

                {/* Name Overlay at Bottom of Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-gold bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/20">
                    {scorer.stream}
                  </span>
                  <h5 className="font-serif text-base font-bold drop-shadow-sm mt-1 leading-tight">{scorer.name}</h5>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-brand-charcoal">
                  <Award className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>{scorer.achievement}</span>
                </div>
                <p className="text-[10px] text-brand-muted font-inter leading-relaxed">
                  Demonstrated stellar academic perseverance and subject mastery in national board exams.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
    </div>
  )
}
