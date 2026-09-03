import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Newspaper, 
  Award, 
  Calendar, 
  ExternalLink, 
  FileText, 
  Download, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Eye, 
  Share2, 
  Bookmark, 
  X,
  Mail,
  Phone,
  Radio,
  Tv
} from 'lucide-react'

export default function SchoolNews() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const newsStats = [
    { value: '#1 Ranked', label: 'School in Ghaziabad (Times Survey)', icon: Award },
    { value: 'Top 100', label: 'Co-Ed Day Schools in India', icon: Sparkles },
    { value: '5+ National', label: 'Innovation & Eco Awards', icon: Award },
    { value: '50+ Features', label: 'National & Regional Press Coverage', icon: Newspaper },
  ]

  const categories = [
    { id: 'all', label: 'All Media Coverage' },
    { id: 'rankings', label: 'National Rankings' },
    { id: 'stem', label: 'STEM & Innovation' },
    { id: 'sustainability', label: 'Sustainability & Eco' },
    { id: 'sports', label: 'Sports & Cultural' },
  ]

  const newsArticles = [
    {
      id: 'news-1',
      title: 'Times School Rankings 2026: DLF Public School Ranked #1 in Ghaziabad for Academic Excellence',
      source: 'The Times of India',
      sourceBadge: 'Times School Survey',
      date: 'January 2026',
      category: 'rankings',
      image: '/C Fore Ranking.jpg',
      excerpt: 'DLF Public School, Sahibabad has secured the top rank in Ghaziabad in the annual Times School Survey, evaluated across academic rigour, individual attention, co-curricular infrastructure, and futuristic pedagogy.',
      fullText: `In the comprehensive Times School Survey 2026, DLF Public School (DLPS), Sahibabad emerged as the undisputed Number 1 School in Ghaziabad. The institutional audit comprehensively assessed over 150 schools across Delhi-NCR based on rigorous benchmarks including CBSE academic outcomes, experiential learning practices, faculty qualifications, sports infrastructure, mental wellness systems, and global citizenship curricula.

Principal Dr. Seema Jerath remarked: "This recognition reflects our 30-year steadfast commitment to sculpting thinkers rather than rote memorizers. We dedicate this achievement to our passionate educators, resilient learners, and deeply supportive parent partners."`,
      tags: ['Times Ranking', '#1 In Ghaziabad', 'Academic Excellence'],
      externalLink: 'https://timesofindia.indiatimes.com'
    },
    {
      id: 'news-2',
      title: 'DLF Young Innovators Triumph at CSIR National Innovation Hackathon 2024–25',
      source: 'The Hindu Education',
      sourceBadge: 'National STEM Spotlight',
      date: 'November 2025',
      category: 'stem',
      image: '/achievements/CSIR 2024 -1.jpeg',
      excerpt: 'Students of DLF Public School were conferred the prestigious CSIR Innovation Award for School Children for their automated sustainable tech project, presented by Union Ministers in New Delhi.',
      fullText: `The Council of Scientific and Industrial Research (CSIR), Ministry of Science and Technology, Government of India, presented its prestigious CSIR Innovation Award to students of DLF Public School. The students designed an automated water conservation and energy recapture mechanism tested under rigorous laboratory simulations.

The jury singled out DLF learners for their scientific temperament, design-thinking approach, and ability to formulate scalable answers to community environmental challenges. The school received a national citation, commemorative memento, and research grant.`,
      tags: ['CSIR National Award', 'Youth Innovation', 'STEM'],
      externalLink: 'https://www.csir.res.in'
    },
    {
      id: 'news-3',
      title: 'EducationWorld India School Rankings: DLF Schools Named in National Top 100 Progressive Schools',
      source: 'EducationWorld India',
      sourceBadge: 'National Education Survey',
      date: 'October 2025',
      category: 'rankings',
      image: '/images/home-hero.jpg',
      excerpt: 'Recognized for pedagogical innovation, teacher development, and inclusive value systems, DLF Group of Schools earned high honors among India’s top progressive co-ed institutions.',
      fullText: `In the EducationWorld India School Rankings (EWISR) — the world’s most extensive survey of primary-secondary schools — DLF Public School maintained its standing within the coveted National Top 100 Co-Ed Day Schools of India.

Over 14 parameters of educational excellence were evaluated by a sample respondent database of over 12,000 educators, parents, and senior education leaders. DLF schools scored exceptionally high in "Competence of Faculty", "Value for Money", and "Life Skills & Leadership Education".`,
      tags: ['EducationWorld', 'Top 100 Schools', 'Pan-India Ranking'],
      externalLink: 'https://www.educationworld.in'
    },
    {
      id: 'news-4',
      title: 'Wipro Earthian Award for Sustainability: DLF Conferred Consecutive Zero-Waste Stewardship Honor',
      source: 'Hindustan Times',
      sourceBadge: 'Environmental Leadership',
      date: 'December 2025',
      category: 'sustainability',
      image: '/Wipro Earthian Award for Sustainability.jpeg',
      excerpt: 'Honoring exceptional community-driven environmental stewardship, zero-waste campus management, and biodiversity preservation initiatives lead by DLF eco-warriors.',
      fullText: `DLF Public School has once again been crowned a national winner of the prestigious Wipro Earthian Sustainability Award. The school’s student-led Green Brigade implemented an exhaustive campus-wide waste segregation audit, solar thermal energy harvesting, rainwater recharge wells, and native biodiversity conservation zones.

Wipro Chairman and jury members lauded the DLF school ecosystem for fostering genuine behavioral change rather than merely superficial compliance, making sustainability a lived habit for learners.`,
      tags: ['Wipro Earthian', 'Zero Waste Campus', 'UN SDG'],
      externalLink: 'https://wiproearthian.com'
    },
    {
      id: 'news-5',
      title: 'DLF World School Honored as Sustainability Superstar by Go Sharpener for Two Consecutive Years',
      source: 'India Today Education',
      sourceBadge: 'DLWS Greater Noida',
      date: 'February 2026',
      category: 'sustainability',
      image: '/Sustainability Superstar Award.jpg',
      excerpt: 'DLF World School, Greater Noida recognized for exemplary dedication to United Nations Sustainable Development Goals and climate literacy programs.',
      fullText: `At the National Sustainability Conclave in New Delhi, DLF World School Greater Noida was awarded the "Sustainability Superstar Award" for 2024 and 2025. Go Sharpener evaluated schools nationwide for active student engagement in community tree-plantation drives, e-waste recycling hubs, and student-published climate newsletters.

School Head Ruchi Jain remarked: "Our students understand that technology and environment are not in conflict; future-ready learners must design ethical solutions that safeguard the planet."`,
      tags: ['Go Sharpener', 'Sustainability Superstar', 'Greater Noida'],
      externalLink: 'https://indiatoday.in'
    },
    {
      id: 'news-6',
      title: 'University of Melbourne India Case Competition: DLF High Schoolers Win International Business Trophy',
      source: 'The Pioneer',
      sourceBadge: 'Global Case Competition',
      date: 'May 2025',
      category: 'stem',
      image: '/achievements/University of Melbourne India Case Competition 2025.jpg',
      excerpt: 'Competing against leading schools nationwide and across South Asia, DLF teams formulated analytical solutions for emerging market infrastructure resilience.',
      fullText: `A delegation of senior secondary commerce and economics scholars from DLF Public School emerged victorious at the University of Melbourne India Case Competition 2025. Facing multifaceted case simulations that mirrored real-world corporate mergers and ESG investment challenges, the DLF team received unanimous accolades from the Australian academic jury for their analytical sharpness and poise during live defense rounds.`,
      tags: ['Melbourne Competition', 'Economics', 'Case Study'],
      externalLink: 'https://unimelb.edu.au'
    },
    {
      id: 'news-7',
      title: 'Overall Rolling Trophy at Kalamanjusha: DLF World School Sweeps 36 Medals at KC International',
      source: 'Dainik Jagran / City Press',
      sourceBadge: 'Cultural & Academic Fest',
      date: 'September 2025',
      category: 'sports',
      image: '/dlws.jpeg',
      excerpt: 'DLF World School students clinched the Overall Champion Rolling Trophy at Kalamanjusha, securing Gold, Silver, and Bronze across 15 out of 17 artistic and literary categories.',
      fullText: `At the inter-school cultural and academic festival Kalamanjusha hosted by KC International School, DLF World School bagged the prestigious Overall Rolling Trophy. Over 36 students won top honors across debating, Sanskrit shloka recitation, digital art design, robotics, and classical dance competitions, highlighting the rich multi-disciplinary learning fabric of DLF schools.`,
      tags: ['Kalamanjusha', 'Rolling Trophy', '36 Medals'],
      externalLink: 'https://jagran.com'
    },
    {
      id: 'news-8',
      title: 'CBSE North Zone & National Championships: DLF Athletes Bag Gold in Yogasana & Lawn Tennis',
      source: 'Sportstar',
      sourceBadge: 'Sports Excellence',
      date: 'August 2025',
      category: 'sports',
      image: '/achievements/gold-yogasana.jpg',
      excerpt: 'DLF Public School athletes demonstrated supremacy at the CBSE North Zone and National Tournaments, clinching multiple gold medals and qualifying for Khelo India Games.',
      fullText: `Demonstrating sportsmanship of the highest calibre, DLF student-athletes dominated the CBSE North Zone-1 Championships in both Yogasana and Lawn Tennis. The school’s dedicated athletic infrastructure, professional turf fields, and national-level coaches have consistently nurtured state and national sports champions who maintain parallel academic distinction.`,
      tags: ['CBSE North Zone', 'Gold Medal', 'Yogasana & Tennis'],
      externalLink: 'https://sportstar.thehindu.com'
    },
  ]

  const filteredArticles = newsArticles.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Set to true to reveal all sections in the future
  const SHOW_FULL_CONTENT = false

  if (!SHOW_FULL_CONTENT) {
    return (
      <div className="pt-28 pb-20 min-h-[85vh] flex items-center justify-center text-brand-charcoal selection:bg-brand-gold/30">
        <div className="w-[96%] max-w-xl mx-auto px-4">
          <div className="bg-white rounded-3xl border border-gray-150 p-8 sm:p-12 shadow-xl text-center space-y-6 relative overflow-hidden">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-gold via-brand-greenDeep to-brand-gold"></div>

            <div className="w-16 h-16 rounded-3xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-brand-gold mx-auto shadow-sm">
              <Sparkles className="w-8 h-8 text-brand-gold animate-pulse" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/70 text-[10px] font-extrabold uppercase tracking-widest">
                <span>Under Progress</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-greenDeep">
                School in News &amp; Media Room
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed max-w-md mx-auto">
                Our press releases, newspaper coverage archives, and institutional accolades are currently being compiled. This section will be updated shortly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-150 text-xs text-brand-muted font-inter space-y-1">
              <p className="font-semibold text-brand-charcoal">Looking for press releases or media inquiries?</p>
              <p>Contact our Communications Desk at <a href="mailto:contactus@dlps.co.in" className="text-brand-greenDeep font-bold underline">contactus@dlps.co.in</a>.</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-greenDeep hover:bg-brand-greenVibrant text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm w-full sm:w-auto"
              >
                <span>Back to Home</span>
              </Link>
              <a
                href="mailto:contactus@dlps.co.in"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-colors w-full sm:w-auto"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 sm:pt-28 pb-20 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      
      {/* ── 1. HERO SECTION ── */}
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0e271a] via-[#143e29] to-[#0a1e14] text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-brand-gold/30">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-brand-gold/15 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-gold font-bold text-xs uppercase tracking-widest">
              <Newspaper className="w-3.5 h-3.5 text-brand-gold" />
              <span>Official Press Room &bull; Media Center</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              DLF in the <span className="italic text-brand-gold font-normal">News</span> &amp; Media Spotlight.
            </h1>

            <p className="text-white/85 text-sm sm:text-base md:text-lg font-inter leading-relaxed max-w-2xl font-medium">
              National rankings, prestigious awards, student scientific breakthroughs, and institutional milestones covered across leading national dailies and broadcast networks.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#media-coverage"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-gold hover:bg-brand-goldlight text-brand-charcoal font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer font-sans"
              >
                <Eye className="w-4 h-4" />
                <span>Explore Press Articles</span>
              </a>

              <a
                href="mailto:contactus@dlps.co.in"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/25 transition-all duration-300 backdrop-blur-md cursor-pointer font-sans"
              >
                <Mail className="w-4 h-4" />
                <span>Media &amp; PR Inquiries</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── 2. STATS BANNER ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {newsStats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-150 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-greenDeep/10 flex items-center justify-center text-brand-greenDeep shrink-0">
                  <Icon className="w-6 h-6 text-brand-greenDeep" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-greenDeep">{stat.value}</h3>
                  <p className="text-xs text-brand-muted font-inter font-semibold mt-0.5">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── 3. FEATURED COVER STORY ── */}
        <div className="bg-white rounded-3xl border border-brand-gold/40 p-6 sm:p-10 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative aspect-video sm:aspect-4/3 rounded-2xl overflow-hidden bg-gray-100 shadow-md">
            <img 
              src="/C Fore Ranking.jpg" 
              alt="Times of India & C-Fore Survey Ranking Certificate"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full bg-brand-gold text-brand-charcoal text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                Featured Cover Story
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-brand-muted font-inter">
              <span className="font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider">
                The Times of India
              </span>
              <span>&bull;</span>
              <span className="font-semibold">Times School Survey 2026</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brand-greenDeep leading-tight">
              Ranked #1 School in Ghaziabad for Academic Rigour &amp; Holistic Development
            </h2>

            <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed">
              DLF Public School, Sahibabad has once again been crowned Ghaziabad's Number One school in the annual Times School Survey. Evaluated across 14 rigorous academic and institutional metrics, DLPS stood first in academic innovation, faculty excellence, and student wellbeing.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedArticle(newsArticles[0])}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-greenDeep hover:bg-brand-greenVibrant text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                <span>Read Full Coverage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── 4. ARTICLES DIRECTORY & FILTERS ── */}
        <div id="media-coverage" className="space-y-8 pt-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-150 pb-6">
            <div className="space-y-1 max-w-xl">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-greenVibrant">Press Archives</span>
              <h3 className="font-serif text-3xl font-bold text-brand-greenDeep">Media Coverage &amp; Reports</h3>
              <p className="text-xs sm:text-sm text-brand-muted font-inter">
                Browse our verified news articles, awards coverage, and institutional features.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search headlines, source, topic..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs focus:outline-none focus:border-brand-greenDeep"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-brand-greenDeep text-white shadow-sm'
                    : 'bg-white hover:bg-gray-100 text-brand-charcoal border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white rounded-3xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="aspect-video w-full overflow-hidden bg-gray-100 relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand-charcoal shadow-sm">
                        {article.source}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-brand-muted font-inter">
                      <span className="font-semibold text-emerald-800 uppercase tracking-wider text-[10px]">
                        {article.sourceBadge}
                      </span>
                      <span>{article.date}</span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal group-hover:text-brand-greenDeep transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h4>

                    <p className="text-xs text-brand-muted font-inter leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {article.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-50 text-brand-charcoal border border-gray-150">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className="text-brand-greenDeep font-bold text-xs hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className="p-2 rounded-lg text-brand-muted hover:text-brand-greenDeep transition-colors"
                    aria-label="View Story"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ── 5. MEDIA INQUIRIES & PRESS KIT ── */}
        <div className="bg-gradient-to-br from-[#103020] via-[#143e29] to-[#0d2619] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-brand-gold/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-gold font-bold text-[10px] uppercase tracking-wider border border-white/20">
              <Tv className="w-3.5 h-3.5 text-brand-gold" />
              <span>Media Relations Bureau</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">Media Inquiries &amp; Press Access</h3>
            <p className="text-xs sm:text-sm text-white/80 font-inter leading-relaxed">
              For press inquiries, television interviews, documentary filming requests, or official high-resolution institutional assets, please reach out to our communications bureau.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0">
            <a
              href="mailto:contactus@dlps.co.in"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-goldlight text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer font-sans"
            >
              <Mail className="w-4 h-4" />
              <span>contactus@dlps.co.in</span>
            </a>
            <a
              href="tel:+911204183400"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/25 transition-colors cursor-pointer font-sans"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>+91-120-4183400</span>
            </a>
          </div>
        </div>

      </div>

      {/* ── PRESS ARTICLE MODAL ── */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8 space-y-6 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-gray-150 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {selectedArticle.source}
                  </span>
                  <span className="text-xs text-brand-muted font-inter">&bull; {selectedArticle.date}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-greenDeep leading-snug mt-1">
                  {selectedArticle.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-brand-charcoal flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Article Image Banner */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Text */}
            <div className="space-y-4 text-xs sm:text-sm text-brand-charcoal font-inter leading-relaxed">
              <p className="font-semibold text-brand-charcoal/90 text-sm bg-gray-50 p-4 rounded-xl border border-gray-150">
                {selectedArticle.excerpt}
              </p>

              <div className="space-y-3 whitespace-pre-line text-brand-muted">
                {selectedArticle.fullText}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-gray-150 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {selectedArticle.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-brand-charcoal">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
