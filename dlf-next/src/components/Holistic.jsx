import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  Music, 
  Trophy, 
  Palette, 
  BookOpen, 
  Compass, 
  Award, 
  ArrowRight,
  ChevronRight
} from 'lucide-react'
import { useSiteData } from '../hooks/useSiteData'
import ImageWithLoader from './ImageWithLoader'

const holisticList = [
  {
    id: 'performing-arts',
    title: 'Performing Arts',
    desc: 'Vocal and instrumental learning models alongside Indian classical and Western dance curricula.',
    icon: Music
  },
  {
    id: 'sports-development',
    title: 'Sports Development',
    desc: 'Synthetic football turf, Olympic skating rink, twin swimming pools, and dedicated racquet courts.',
    icon: Trophy
  },
  {
    id: 'visual-arts',
    title: 'Visual Arts',
    desc: 'Sustaining fine arts, ceramics, clay modeling, and digital media illustration pathways.',
    icon: Palette
  },
  {
    id: 'scholastic',
    title: 'Scholastic',
    desc: 'Integrated science labs, THOTS analytical thinking, and central library of 20,000+ volumes.',
    icon: BookOpen
  },
  {
    id: 'school-excursions',
    title: 'School Excursions',
    desc: 'Heritage expeditions, Rashtrapati Bhavan visits, Himalayan adventure camps, and global tours.',
    icon: Compass
  },
  {
    id: 'student-achievements',
    title: 'Student Achievements',
    desc: 'National and international triumphs across competitive sports, Olympiads, and research patents.',
    icon: Award
  }
]

export default function Holistic() {
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

  const dlpsHolisticList = [
    {
      id: 'performing-arts',
      title: 'Performing Arts',
      desc: 'Vocal and instrumental learning models alongside Indian classical and Western dance curricula.',
      icon: Music
    },
    {
      id: 'sports-development',
      title: 'Sports Development',
      desc: 'Synthetic football turf, Olympic skating rink, twin swimming pools, and dedicated racquet courts.',
      icon: Trophy
    },
    {
      id: 'visual-arts',
      title: 'Visual Arts',
      desc: 'Sustaining fine arts, ceramics, clay modeling, and digital media illustration pathways.',
      icon: Palette
    },
    {
      id: 'scholastic',
      title: 'Scholastic',
      desc: 'Integrated science labs, THOTS analytical thinking, and central library of 20,000+ volumes.',
      icon: BookOpen
    },
    {
      id: 'school-excursions',
      title: 'School Excursions',
      desc: 'Heritage expeditions, Rashtrapati Bhavan visits, Himalayan adventure camps, and global tours.',
      icon: Compass
    },
    {
      id: 'student-achievements',
      title: 'Student Achievements',
      desc: 'National and international triumphs across competitive sports, Olympiads, and research patents.',
      icon: Award
    }
  ]

  const dlwsHolisticList = [
    {
      id: 'performing-arts',
      title: 'Performing Arts',
      desc: 'Music ateliers, expressive dance, and stagecraft development at Greater Noida campus.',
      icon: Music
    },
    {
      id: 'sports-development',
      title: 'Sports Development',
      desc: 'Dedicated basketball courts, cricket nets, lawn tennis arenas, and expansive athletic grounds.',
      icon: Trophy
    },
    {
      id: 'visual-arts',
      title: 'Visual Arts',
      desc: 'Fine arts, clay modeling studios, and digital design thinking suites.',
      icon: Palette
    },
    {
      id: 'scholastic',
      title: 'Scholastic',
      desc: 'Digital smart classrooms, STEM robotics clusters, and central knowledge repository.',
      icon: BookOpen
    },
    {
      id: 'school-excursions',
      title: 'School Excursions',
      desc: 'Experiential journeys, environmental study camps, and heritage learning tours.',
      icon: Compass
    },
    {
      id: 'student-achievements',
      title: 'Student Achievements',
      desc: 'Celebrating district championships, national Olympiad laurels, and talent honours.',
      icon: Award
    }
  ]

  const holisticList = isDLWS ? dlwsHolisticList : dlpsHolisticList

  return (
    <section id="holistic" className="py-12 sm:py-16 bg-transparent relative overflow-hidden text-brand-charcoal selection:bg-brand-gold/30 font-sans">
      {/* Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full ambient-glow-2 opacity-30"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full ambient-glow-1 opacity-25"></div>

      <div className="w-[96%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10 sm:mb-14">
          <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
            Expression &amp; Athleticism
          </span>
          <h3 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-${theme.primary}`}>
            Holistic Living &amp; Sports
          </h3>
          <div className={`w-12 h-[2.5px] bg-${theme.accent} mx-auto mt-2`}></div>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium pt-1">
            {isDLWS
              ? 'Nurturing future leaders through design thinking, world-class athletic facilities, and holistic learning spaces in Greater Noida.'
              : 'Nurturing emotional, kinesthetic, and creative intelligence with world-class performing spaces, Olympic-grade sports complexes, and rich experiential arenas.'
            }
          </p>
        </div>

        {/* 2-Column Layout: Left Featured Box + Right Full List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Large Featured Left Box */}
          <div className="lg:col-span-6 relative group overflow-hidden rounded-3xl aspect-[4/3] sm:aspect-[16/11] shadow-xl border border-gray-150 bg-brand-charcoal">
            <ImageWithLoader 
              src={isDLWS ? "/dlws.jpeg" : "/images/home-stem.jpg"} 
              alt={isDLWS ? "DLF World School Greater Noida Campus" : "STEM & Robotics Innovation Lab"} 
              imgClassName="group-hover:scale-105 transition-transform duration-[5s] object-cover w-full h-full" 
              loading="lazy" 
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-${theme.primary}/95 via-${theme.primary}/30 to-transparent z-10`}></div>
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 text-white space-y-1.5 sm:space-y-2 z-20">
              <span className={`bg-${theme.accent} text-brand-charcoal text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full inline-block`}>
                {isDLWS ? 'DLWS Campus Arenas' : 'Innovation & Holistic Arenas'}
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold">
                {isDLWS ? 'Design Thinking & Experiential Forges' : 'Cyber, Robotics & Experiential Forges'}
              </h4>
              <p className="text-[11px] sm:text-xs text-white/85 max-w-md font-inter leading-relaxed font-medium">
                {isDLWS
                  ? 'Digital maker spaces, modern laboratories, and sports grounds where DLWS students lead and thrive.'
                  : 'Hands-on robotics, AI prototyping, Olympic sports arenas, and creative studios — where Delfites explore and thrive beyond textbooks.'
                }
              </p>
            </div>
          </div>

          {/* Right Side Complete List of All 6 Categories */}
          <div className="lg:col-span-6 space-y-2.5 sm:space-y-3">
            {holisticList.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.id}
                  to={`/school/${activeBranch}/holistic-learning/${item.id}`}
                  className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-white hover:bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center shrink-0 group-hover:bg-${theme.primary} group-hover:text-white transition-colors duration-300`}>
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 pr-2">
                      <h4 className={`font-serif font-bold text-brand-charcoal group-hover:text-${theme.primary} text-xs sm:text-sm leading-snug transition-colors`}>
                        {item.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-brand-muted font-inter leading-relaxed mt-0.5 line-clamp-1 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-brand-charcoal group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              )
            })}
          </div>

        </div>

        {/* Bottom View More Redirect Button */}
        <div className="text-center pt-8 sm:pt-10">
          <Link
            to={`/school/${activeBranch}/holistic-learning`}
            className={`inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-charcoal text-white hover:bg-${theme.primary} transition-all duration-300 shadow-lg group cursor-pointer`}
          >
            <span>View Full Holistic Living &amp; Student Life</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}
