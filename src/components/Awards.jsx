import React, { useState, useMemo } from 'react'
import { Award, ShieldAlert, Sparkles, Trophy, Calendar, Search, SlidersHorizontal, BookOpen, ExternalLink, Image as ImageIcon } from 'lucide-react'
import ImageWithLoader from './ImageWithLoader'
import { useSiteData } from '../hooks/useSiteData'

// Redesigned timeline image frame & premium placeholder
const TimelineImage = ({ imageSrc, year }) => {
  if (imageSrc) {
    return (
      <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-brand-greenDeep bg-white shadow-md relative group flex-shrink-0">
        <ImageWithLoader 
          src={imageSrc} 
          alt={`DLF Accolades ${year}`} 
          imgClassName="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" 
          loading="lazy" 
        />
      </div>
    )
  }
  
  return (
    <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border-4 border-brand-greenDeep bg-gradient-to-br from-brand-greenDeep to-brand-greenVibrant flex flex-col items-center justify-center text-white shadow-md relative overflow-hidden group flex-shrink-0">
      {/* Decorative backdrop elements */}
      <div className="absolute inset-0 bg-noise-overlay opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full border border-white/10 pointer-events-none"></div>
      <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
      
      <Trophy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-brand-gold mb-1 animate-pulse" />
      <span className="text-[9px] sm:text-xs font-sans tracking-widest text-brand-goldlight uppercase font-extrabold">DLF Public</span>
      <span className="text-[8px] sm:text-[9px] font-sans tracking-wide text-white/70 uppercase">Accolades</span>
    </div>
  )
}

// Redesigned award text formatter to highlight core achievements
const renderAwardText = (item) => {
  const { award, by } = item
  const hasByInAward = by && award.toLowerCase().includes(by.toLowerCase())
  
  let primaryText = award
  let secondaryText = ''
  
  // Check for common separators: " – ", " — ", " - ", " by "
  const separators = [' – ', ' — ', ' - ', ' by ']
  for (const sep of separators) {
    if (award.includes(sep)) {
      const index = award.indexOf(sep)
      primaryText = award.substring(0, index)
      secondaryText = award.substring(index)
      break
    }
  }
  
  return (
    <span className="text-sm sm:text-base leading-relaxed text-brand-charcoal font-sans">
      <span className="font-extrabold text-brand-greenDeep">{primaryText}</span>
      {secondaryText && <span className="text-brand-muted font-normal text-xs sm:text-sm">{secondaryText}</span>}
      {by && !hasByInAward && (
        <span className="text-brand-muted font-normal text-xs sm:text-sm"> by {by}</span>
      )}
    </span>
  )
}

export default function Awards() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const { global } = useSiteData()
  const awardsStore = global.awards || {}

  // Top Hall of Fame items — from siteData
  const hallOfFame = awardsStore.hallOfFame || []
  const awardsData = awardsStore.timeline || []
  const categories = awardsStore.categories || ['All']

  // Legacy hardcoded data (kept below but NOT used in render)
  const _legacyHallOfFame = [

    {
      title: 'International Dimension in Schools (2025-2028)',
      by: 'British Council',
      img: '/RIDS.JPG',
      year: '2025-26',
      desc: 'Awarded for outstanding integration of international learning experiences and global citizenship in the curriculum.'
    },
    {
      title: 'Wipro Earthian Award for Sustainability',
      by: 'Wipro',
      img: '/Wipro Earthian Award for Sustainability.jpeg',
      year: '2025-26',
      desc: 'National recognition for institutional leadership and student initiatives in ecological conservation.'
    },
    {
      title: 'Go Sharpener Sustainability Superstar',
      by: 'Go Sharpener',
      img: '/Sustainability Superstar Award.jpg',
      year: '2025-26',
      desc: 'Recognized for consecutive years of outstanding contributions to environment conservation and climate action.'
    },
    {
      title: 'First Plastic Neutral School in Delhi-NCR',
      by: 'WMARS',
      img: '/WMARS.jpeg',
      year: '2024-25',
      desc: 'Pioneering environmental milestone awarded by the Waste Management and Recycling Society.'
    },
    {
      title: 'Top 2 Day Co-Ed School in Ghaziabad',
      by: 'Education World',
      img: '/Consistently number 2.jpeg',
      year: '2025-26',
      desc: 'Consistently ranked among the city\'s absolute best day co-ed schools for decades.'
    },
    {
      title: 'Top Rankings for Leadership & Academic Rigour',
      by: 'CFORE',
      img: '/C Fore Ranking.jpg',
      year: '2025-26',
      desc: 'Ranked #5 in India for Leadership & Governance and #8 in India for Academic Rigour.'
    },
    {
      title: 'Skill Builder Silver Award Certificate',
      by: 'Go Sharpener',
      img: '/the Silver Award.jpeg',
      year: '2024-25',
      desc: 'Conferred for outstanding success and leadership in student-led skill acquisition programs.'
    },
    {
      title: 'Skill Builder Institutional Merit Certificate',
      by: 'Go Sharpener',
      img: '/Skillbuilder Certificate.jpeg',
      year: '2024-25',
      desc: 'Recognizing excellence in collaborative design thinking, innovation, and sustainability.'
    }
  ]

  // Full database — kept for reference but NOT used; data comes from useSiteData()
  const _legacyTimeline = [
    // 2025-26
    { year: '2025-26', award: 'Recognition of International Dimension in Schools (2025-2028)', by: 'British Council', cat: 'International' },
    { year: '2025-26', award: 'Wipro Earthian Award for Sustainability', by: 'Wipro', cat: 'Sustainability' },
    { year: '2025-26', award: 'Ranked in Top 2 Schools in Ghaziabad – Education World India School Survey 2025–26', by: 'Education World', cat: 'Ranking' },
    { year: '2025-26', award: 'Amongst the Top 2 schools of Ghaziabad (for decades), #5 in India for Leadership & Governance, #8 in Academic Rigour, Top 42 Best Day Co-Ed Schools in India', by: 'CFORE', cat: 'Ranking' },
    { year: '2025-26', award: 'Go Sharpener Sustainability Superstar (For two Consecutive Years)', by: 'Go Sharpener', cat: 'Sustainability' },
    
    // 2024-25
    { year: '2024-25', award: 'First Plastic Neutral School in Delhi-NCR', by: 'WMARS (Waste Management and Recycling Society)', cat: 'Sustainability' },
    { year: '2024-25', award: 'Go Sharpener Sustainability Superstar', by: 'Go Sharpener', cat: 'Sustainability' },

    // 2023-24
    { year: '2023-24', award: 'ET Tech X School Excellence Award', by: 'Brainfeed', cat: 'Academic' },
    { year: '2023-24', award: 'Ranked in Top 2 Schools in Ghaziabad – Education World India School Survey 2023–24', by: 'Education World', cat: 'Ranking' },

    // 2022-23
    { year: '2022-23', award: 'School Excellence Recognition', by: 'National Forums', cat: 'Academic' },

    // 2020-21
    { year: '2020-21', award: 'Brainfeed School Excellence Award – Prominent Category', by: 'Brainfeed', cat: 'Academic' },

    // 2019-20
    { year: '2019-20', award: 'Ranked Among the Top 2 Schools of the City', by: 'Education World India School Rankings', cat: 'Ranking' },

    // 2018-19
    { year: '2018-19', award: 'British Council International School Award (consecutively for the third term)', by: 'British Council', cat: 'International' },
    { year: '2018-19', award: 'Top 3 School of the City', by: 'Education World School Rankings by C Fore survey', cat: 'Ranking' },
    { year: '2018-19', award: 'Roll of Honour Award for outstanding class X and XII board result', by: 'National Telecom Academy', cat: 'Academic' },

    // 2017-18
    { year: '2017-18', award: '1st Rank Across India in ‘Leadership & Management Quality’', by: 'Education World School Rankings by C-Fore', cat: 'Ranking' },
    { year: '2017-18', award: 'Best Infrastructure & Best ICT Implementation in India', by: 'Brainfeed School Excellence Awards', cat: 'Academic' },
    { year: '2017-18', award: 'Top 3 Schools of India', by: 'Digital Learning, Asia’s Premier education magazine', cat: 'Ranking' },
    { year: '2017-18', award: 'The School Leadership Award for Principal Seema Jerath', by: 'Awarded by Mr. N. Narayan Murthy, founder of Infosys', cat: 'Academic' },
    { year: '2017-18', award: 'Microsoft Entrepreneurship & Innovation Challenge across India - for self-sufficient hospital bed design', by: 'Microsoft', cat: 'Innovation' },
    { year: '2017-18', award: '3rd Prize at the INSPIRE Awards for Automated Pendulum Pump', by: 'INSPIRE Awards', cat: 'Innovation' },

    // 2016-17
    { year: '2016-17', award: 'Best Website / Design, Best academic pedagogy & Alumni Relations', by: 'Parakh Awards', cat: 'Academic' },
    { year: '2016-17', award: 'Jury Special Mention Award – Disney friends for change, conserving green spaces for revamping Ekta Park', by: 'Disney / WMARS', cat: 'Sustainability' },

    // 2015-16
    { year: '2015-16', award: 'British Council International School Award', by: 'British Council', cat: 'International' },
    { year: '2015-16', award: 'Ranked No. 1 across India for ‘Individual Attention to students’', by: 'Merit awards by EducationToday.co.in', cat: 'Ranking' },
    { year: '2015-16', award: 'Asia’s Top 100 Best & Fastest Growing Educational Institutes', by: 'WCRC by IBRANDA 360', cat: 'Ranking' },
    { year: '2015-16', award: 'Awarded ‘Atal Tinkering Laboratories’ for Research', by: 'Niti Aayog, Govt. of India', cat: 'Innovation' },

    // 2014-15
    { year: '2014-15', award: 'Ranked No.1 across Ghaziabad City', by: 'Times of India School Survey', cat: 'Ranking' },
    { year: '2014-15', award: 'Awarded the Delhi Gaurav Samman for Education', by: 'Delhi State Committee', cat: 'Academic' },

    // 2013-14
    { year: '2013-14', award: 'Top 10 Most Respected Schools in India', by: 'Education World C Fore Survey', cat: 'Ranking' },
    { year: '2013-14', award: 'Top 3 schools of Ghaziabad', by: 'Hindustan Times C Fore Survey', cat: 'Ranking' },
    { year: '2013-14', award: 'Business Development prize of $2000', by: 'UK based Teach a Man to Fish Enterprise', cat: 'Academic' },
    { year: '2013-14', award: 'International School Award (2nd time in a row)', by: 'University of Cambridge', cat: 'International' },

    // 2012-13
    { year: '2012-13', award: 'Top Global Award of $5000', by: 'School Enterprise challenge, UK', cat: 'Academic' },
    { year: '2012-13', award: 'CSIR Innovation Award of Rs 50000 – Students topped at all India Level', by: 'CSIR, Govt. of India', cat: 'Innovation' },
    { year: '2012-13', award: 'Tony Blair Face to Faith Outstanding School Award', by: 'Tony Blair Faith Foundation, UK', cat: 'International' },
    { year: '2012-13', award: 'International School Award', by: 'University of Cambridge, UK', cat: 'International' },
    { year: '2012-13', award: 'National Award to Teachers by the Hon’ble President of India Mr. Pranab Mukherjee', by: 'President of India', cat: 'Academic' },
    { year: '2012-13', award: 'Lokman Lal Excellence Award for Lifetime Achievement in Education', by: 'Lokmanilal Foundation', cat: 'Academic' },
    { year: '2012-13', award: 'Dr. Radha Krishnan Excellence Award', by: 'Pratibha Jagran Samiti', cat: 'Academic' },
    { year: '2012-13', award: 'Global Teacher Accreditation Award', by: 'Cambridge', cat: 'Academic' },

    // 2011-12
    { year: '2011-12', award: 'British Council International School Award', by: 'British Council', cat: 'International' },
    { year: '2011-12', award: 'Top 10 Most Respected Schools in India', by: 'Education World C Fore Survey', cat: 'Ranking' },

    // 2010-11
    { year: '2010-11', award: 'Hindustan Pratibha Samman for Best CBSE Board Class X and XII Result in Delhi-NCR', by: 'Hindustan Media', cat: 'Academic' },
    { year: '2010-11', award: 'Top 3 Schools in Ghaziabad Region', by: 'C Fore School Survey', cat: 'Ranking' },
    { year: '2010-11', award: 'Hindustan Times C-Fore School Survey Award', by: 'Hindustan Times', cat: 'Ranking' },

    // 2005-09
    { year: '2005-09', award: 'Best School in Ghaziabad – Rashtriya Shiksha Shiromani Award', by: 'All India Achievers Conference', cat: 'Academic' },
    { year: '2005-09', award: 'Top 3 School in the Ghaziabad Region', by: 'Hindustan Times C-Fore School Survey Award', cat: 'Ranking' },
    { year: '2005-09', award: 'South East Asia Yoga Cup for Consecutive Three Years (2007-09)', by: 'SE Asia Yoga Council', cat: 'Sports' },
    { year: '2005-09', award: 'Yoga World cup for India for Consecutive Five Years from 2005-09', by: 'World Yoga Federation', cat: 'Sports' }
  ] // _legacyHallOfFame — not used; data comes from useSiteData()

  // Filter and search logic
  const filteredAwards = useMemo(() => {
    return awardsData.filter(item => {
      const matchesSearch = item.award.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            (item.by && item.by.toLowerCase().includes(searchTerm.toLowerCase())) ||
                            item.year.includes(searchTerm)
      const matchesCategory = activeCategory === 'All' || item.cat === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, activeCategory])

  const AWARD_IMAGES = [
    '/RIDS.JPG',
    '/Wipro Earthian Award for Sustainability.jpeg',
    '/Sustainability Superstar Award.jpg',
    '/WMARS.jpeg',
    '/Consistently number 2.jpeg',
    '/C Fore Ranking.jpg',
    '/the Silver Award.jpeg',
    '/Skillbuilder Certificate.jpeg',
  ]

  // Group filtered awards by year and ensure each picture is used ONLY ONCE (no repeats)
  const groupedAwards = useMemo(() => {
    const groups = {}
    filteredAwards.forEach(item => {
      if (!groups[item.year]) {
        groups[item.year] = {
          year: item.year,
          items: [],
          img: null
        }
      }
      groups[item.year].items.push(item)
      if (item.img && !groups[item.year].img) {
        groups[item.year].img = item.img
      }
    })
    
    const sorted = Object.values(groups).sort((a, b) => b.year.localeCompare(a.year))
    const usedImages = new Set()
    
    // First pass: track explicitly defined unique images
    sorted.forEach(g => {
      if (g.img && !usedImages.has(g.img)) {
        usedImages.add(g.img)
      } else {
        g.img = null
      }
    })
    
    // Second pass: fill empty timeline slots with unused images strictly once
    let imgIdx = 0
    return sorted.map(group => {
      if (group.img) return group
      
      while (imgIdx < AWARD_IMAGES.length && usedImages.has(AWARD_IMAGES[imgIdx])) {
        imgIdx++
      }
      
      let assignedImg = null
      if (imgIdx < AWARD_IMAGES.length) {
        assignedImg = AWARD_IMAGES[imgIdx]
        usedImages.add(assignedImg)
        imgIdx++
      }
      
      return {
        ...group,
        img: assignedImg
      }
    })
  }, [filteredAwards])

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden">
      
      {/* Background glows */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] ambient-glow-2 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-1/4 w-[450px] h-[450px] ambient-glow-1 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-20 relative z-10">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-gold">A Heritage of Excellence</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-masterDeep leading-tight">
            School Achievements & Awards
          </h1>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-base text-brand-muted leading-relaxed font-sans max-w-2xl mx-auto">
            Our group's continuous pursuit of excellence is validated by prominent rankings, ecological accolades, and national recognition.
          </p>
        </div>

        {/* Interactive Timeline / List of Achievements */}
        <section className="space-y-8 max-w-5xl mx-auto pt-4">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-masterDeep text-center lg:text-left">
              Historical Timeline
            </h2>
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white border border-brand-masterDeep/5 p-4 rounded-2xl shadow-sm">
              
              {/* Category selector */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-full pb-2 lg:pb-0 w-full lg:w-auto">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                      activeCategory === cat
                        ? 'bg-brand-masterDeep text-white'
                        : 'bg-brand-bg text-brand-muted hover:bg-brand-masterDeep/5 hover:text-brand-masterDeep'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search bar */}
              <div className="relative w-full lg:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted" />
                <input
                  type="text"
                  placeholder="Search achievements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-brand-bg rounded-xl border border-transparent focus:border-brand-gold/30 focus:bg-white text-xs font-semibold focus:outline-none transition-all"
                />
              </div>

            </div>
          </div>

          {/* Timeline Stack */}
          {groupedAwards.length > 0 ? (
            <div className="relative space-y-12 md:space-y-0 py-8">
              
              {/* Desktop timeline (alternating grid) */}
              <div className="hidden md:flex flex-col gap-0 relative">
                {/* Central background line to anchor all floating blocks */}
                <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-brand-greenDeep/10 -z-10 pointer-events-none"></div>

                {groupedAwards.map((group, idx) => {
                  const isEven = idx % 2 === 0
                  return (
                    <div key={group.year} className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-8 relative">
                      
                      {/* Left Column */}
                      {isEven ? (
                        <div className="flex items-center justify-end gap-6 w-full">
                          <TimelineImage imageSrc={group.img} year={group.year} />
                          {/* Horizontal connector line */}
                          <div className="h-[3px] bg-brand-greenDeep/20 w-12 flex-shrink-0 relative hidden lg:block">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-brand-greenDeep"></div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-end w-full pr-8 md:pr-12">
                          <ul className="space-y-4 w-full max-w-xl text-left">
                            {group.items.map((item, idx) => (
                              <li key={idx} className="pb-3.5 border-b border-brand-greenDeep/10 last:border-b-0 flex items-start gap-3.5">
                                <span className="w-1.5 h-1.5 rounded-full border-2 border-brand-greenDeep mt-[7px] flex-shrink-0 bg-white"></span>
                                <div className="flex-1">
                                  {renderAwardText(item)}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Middle Column (Vertical Year Spine) */}
                      <div className="flex justify-center relative px-2">
                        <div className="flex items-center justify-center bg-brand-greenDeep text-white font-sans font-bold text-sm uppercase tracking-widest rounded-lg shadow-md w-14 h-36 relative select-none z-10 transition-transform duration-300 hover:scale-103">
                          <span className="rotate-90 whitespace-nowrap tracking-wider">{group.year}</span>
                          
                          {/* Triangle pointer notch pointing to the text side */}
                          {isEven ? (
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-brand-greenDeep"></div>
                          ) : (
                            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-brand-greenDeep"></div>
                          )}
                        </div>
                      </div>

                      {/* Right Column */}
                      {isEven ? (
                        <div className="flex justify-start w-full pl-8 md:pl-12">
                          <ul className="space-y-4 w-full max-w-xl text-left">
                            {group.items.map((item, idx) => (
                              <li key={idx} className="pb-3.5 border-b border-brand-greenDeep/10 last:border-b-0 flex items-start gap-3.5">
                                <span className="w-1.5 h-1.5 rounded-full border-2 border-brand-greenDeep mt-[7px] flex-shrink-0 bg-white"></span>
                                <div className="flex-1">
                                  {renderAwardText(item)}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="flex items-center justify-start gap-6 w-full">
                          {/* Horizontal connector line */}
                          <div className="h-[3px] bg-brand-greenDeep/20 w-12 flex-shrink-0 relative hidden lg:block">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-brand-greenDeep"></div>
                          </div>
                          <TimelineImage imageSrc={group.img} year={group.year} />
                        </div>
                      )}

                    </div>
                  )
                })}
              </div>

              {/* Mobile / Tablet timeline (stacked layout) */}
              <div className="md:hidden space-y-12 pl-2 border-l-2 border-brand-greenDeep/20 ml-4 relative">
                {groupedAwards.map((group, idx) => (
                  <div key={group.year} className="relative pl-6 space-y-5">
                    {/* Small bullet node on the vertical line */}
                    <div className="absolute -left-[6px] top-[14px] w-3 h-3 rounded-full bg-brand-greenDeep border-2 border-white z-10 shadow-sm"></div>
                    
                    {/* Year badge */}
                    <div className="inline-flex items-center justify-center bg-brand-greenDeep text-white font-sans font-bold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-md shadow-sm">
                      {group.year}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                      {/* Image Frame */}
                      <div className="flex-shrink-0">
                        <TimelineImage imageSrc={group.img} year={group.year} />
                      </div>

                      {/* Awards list */}
                      <ul className="space-y-3.5 w-full flex-1">
                        {group.items.map((item, idx) => (
                          <li key={idx} className="pb-3 border-b border-brand-greenDeep/10 last:border-b-0 flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full border-2 border-brand-greenDeep mt-1.5 flex-shrink-0 bg-white"></span>
                            <div className="flex-1">
                              {renderAwardText(item)}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-brand-masterDeep/5 rounded-3xl shadow-sm space-y-3">
              <ImageIcon className="w-12 h-12 text-brand-muted mx-auto" />
              <h3 className="font-serif text-lg font-bold text-brand-masterDeep">No Achievements Found</h3>
              <p className="text-xs text-brand-muted max-w-xs mx-auto">
                No awards match your current search queries or filters. Try adjusting your query parameters.
              </p>
            </div>
          )}
        </section>

      </div>
    </div>
  )
}
