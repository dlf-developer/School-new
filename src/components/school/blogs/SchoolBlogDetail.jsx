import React, { useState, useEffect, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Check,
  Bookmark,
  ChevronRight,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Phone,
  FileText,
  Video,
  List,
} from 'lucide-react'
import {
  getBlogBySlug,
  getRelatedBlogs,
  getSchoolBlogs,
} from '../../../data/schools/blogsData.js'
import { useSiteData } from '../../../hooks/useSiteData'

export default function SchoolBlogDetail() {
  const { schoolId, slug } = useParams()
  const navigate = useNavigate()
  const { schools } = useSiteData()
  const currentSchool = schools[schoolId] || {}
  const theme = currentSchool.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27',
  }

  const isDLWS = schoolId === 'dlf-greater-noida'
  const schoolName = currentSchool.name || (isDLWS ? 'DLF World School' : 'DLF Public School')
  const locationName = isDLWS ? 'Greater Noida' : 'Sahibabad, Ghaziabad'

  // Fetch current article
  const blog = useMemo(() => getBlogBySlug(schoolId, slug), [schoolId, slug])
  const relatedBlogs = useMemo(
    () => (blog ? getRelatedBlogs(schoolId, blog.slug, 3) : []),
    [schoolId, blog]
  )

  // Reading progress percentage
  const [scrollProgress, setScrollProgress] = useState(0)
  const [copied, setCopied] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      if (total > 0) {
        const current = (window.scrollY / total) * 100
        setScrollProgress(Math.min(100, Math.max(0, current)))
      }

      // Track active heading for TOC
      if (blog && blog.headings && blog.headings.length > 0) {
        for (const h of blog.headings) {
          const target = document.getElementById(h.id)
          if (target) {
            const rect = target.getBoundingClientRect()
            if (rect.top <= 160 && rect.bottom >= 0) {
              setActiveSection(h.id)
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [blog])

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  // Share link handler
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  // Handle smooth scroll to heading
  const scrollToHeading = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const topOffset = 100
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setActiveSection(id)
    }
  }

  // If blog is not found
  if (!blog) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="text-center bg-white p-10 rounded-3xl border border-gray-150 max-w-lg shadow-lg space-y-4">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto" />
          <h2 className="font-serif text-2xl font-bold text-brand-charcoal">
            Article Not Found
          </h2>
          <p className="text-sm text-brand-muted font-inter">
            The article you are looking for does not exist or may have been relocated.
          </p>
          <Link
            to={`/school/${schoolId}/blogs`}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-${theme.primary} text-white text-xs font-bold uppercase tracking-wider hover:opacity-90`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Blogs</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative pt-24 pb-24 bg-brand-bg min-h-screen text-brand-charcoal selection:bg-brand-gold/30 font-sans">
      {/* Scroll Reading Progress Bar Fixed at Viewport Top */}
      <div className="fixed top-0 left-0 w-full z-[9999] h-[3.5px] bg-gray-100 pointer-events-none">
        <div
          className={`h-full transition-[width] duration-100 ease-out ${
            isDLWS
              ? 'bg-gradient-to-r from-purple-700 via-indigo-600 to-amber-500'
              : 'bg-gradient-to-r from-emerald-700 via-green-600 to-amber-500'
          }`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="w-[96%] max-w-[1400px] mx-auto px-4 md:px-8 space-y-10">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-gray-200/60 pb-4">
          <div className="flex items-center gap-2 text-xs text-brand-muted font-inter flex-wrap">
            <Link
              to={`/school/${schoolId}`}
              className="hover:text-brand-gold transition-colors font-semibold"
            >
              {schoolName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link
              to={`/school/${schoolId}/blogs`}
              className="hover:text-brand-gold transition-colors font-semibold"
            >
              Blogs &amp; Insights
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-brand-charcoal font-bold truncate max-w-xs sm:max-w-md">
              {blog.title}
            </span>
          </div>

          <Link
            to={`/school/${schoolId}/blogs`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-muted hover:text-brand-gold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header Container */}
        <header className="space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-gray-500 font-inter flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-gold" />
              {blog.date}
            </span>
            <span className="text-xs text-gray-400 font-inter">&bull;</span>
            <span className="text-xs text-gray-500 font-inter flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-gold" />
              {blog.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-brand-charcoal leading-[1.2] tracking-tight">
            {blog.title}
          </h1>

          {/* Author & Share Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-white ${
                  isDLWS ? 'bg-brand-purpleDeep' : 'bg-brand-greenDeep'
                }`}
              >
                DLF
              </div>
              <div>
                <p className="text-xs font-bold text-brand-charcoal">{blog.author}</p>
                <p className="text-[11px] text-gray-500 font-inter">
                  Institutional Research &bull; {locationName}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-brand-gold text-xs font-bold uppercase tracking-wider text-brand-charcoal transition-all shadow-sm cursor-pointer"
                title="Copy Article Link"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-600">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Share Article</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Featured Hero Banner Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-150 bg-gray-100 max-h-[500px] relative">
          <img
            src={blog.image || (isDLWS ? '/dlws.jpeg' : '/DJI_0044.JPG')}
            alt={blog.title}
            className="w-full h-full object-cover max-h-[500px]"
          />
        </div>

        {/* Two-Column Editorial Reading Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Sticky Sidebar (Table of Contents + Campus Quick CTAs) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 order-2 lg:order-1">
            {/* Table of Contents Box */}
            {blog.headings && blog.headings.length > 0 && (
              <div className="bg-white rounded-3xl border border-gray-150 p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                  <List className="w-4 h-4 text-brand-gold" />
                  <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-charcoal">
                    In This Article
                  </h3>
                </div>

                <nav className="space-y-1.5 text-xs font-inter max-h-80 overflow-y-auto no-scrollbar pr-1">
                  {blog.headings.map((heading, idx) => {
                    const isActive = activeSection === heading.id
                    return (
                      <button
                        key={idx}
                        onClick={() => scrollToHeading(heading.id)}
                        className={`text-left w-full py-1.5 px-3 rounded-lg transition-all text-xs font-medium cursor-pointer block truncate ${
                          isActive
                            ? `bg-${theme.primary}/10 text-${theme.primary} font-bold border-l-2 border-${theme.primary}`
                            : 'text-gray-600 hover:text-brand-gold hover:bg-gray-50'
                        }`}
                        title={heading.text}
                      >
                        {heading.text}
                      </button>
                    )
                  })}
                </nav>
              </div>
            )}

            {/* School Campus Quick Information Card */}
            <div
              className={`rounded-3xl p-6 text-white ${
                isDLWS
                  ? 'bg-gradient-to-br from-[#291845] to-[#463676]'
                  : 'bg-gradient-to-br from-[#123624] to-[#2B5126]'
              } shadow-md space-y-4 border border-white/10`}
            >
              <div className="flex items-center gap-2.5">
                <h4 className="font-serif text-base font-bold">
                  {schoolName}
                </h4>
              </div>

              <p className="text-xs text-white/80 leading-relaxed font-inter">
                Looking for progressive, futuristic education for your child? Discover our child-centric learning ecosystems.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-semibold font-inter">
                <Link
                  to={`/school/${schoolId}/admissions`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-white"
                >
                  <span>Admissions Open 2026-27</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                </Link>

                <Link
                  to={`/school/${schoolId}/virtual-tour`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-white"
                >
                  <span>Explore Campus Virtual Tour</span>
                  <Video className="w-3.5 h-3.5 text-brand-gold" />
                </Link>

                <Link
                  to={`/school/${schoolId}/campus`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-white"
                >
                  <span>World-Class Infrastructure</span>
                  <FileText className="w-3.5 h-3.5 text-brand-gold" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Main Article Body */}
          <article className="lg:col-span-8 bg-white rounded-3xl border border-gray-150 p-6 sm:p-10 lg:p-12 shadow-sm space-y-8 order-1 lg:order-2">
            {/* Lead Excerpt Summary Block */}
            {blog.excerpt && (
              <div
                className={`p-6 rounded-2xl border-l-4 ${
                  isDLWS ? 'border-brand-purpleDeep bg-purple-50/40' : 'border-brand-greenDeep bg-green-50/40'
                } space-y-2`}
              >
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold block font-inter">
                  Executive Summary
                </span>
                <p className="text-brand-charcoal text-base sm:text-lg italic font-serif leading-relaxed">
                  "{blog.excerpt}"
                </p>
              </div>
            )}

            {/* Extended HTML Content Rendering */}
            <div
              className="article-rich-content text-brand-charcoal/90 font-inter text-base sm:text-[17px] leading-[1.8] space-y-6"
              dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
            />

            {/* Article Footer & Official Citation Badge */}
            <div className="pt-8 border-t border-gray-150 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-150 text-xs text-brand-muted font-inter">
                <div>
                  <span className="font-bold text-brand-charcoal block">
                    Campus Publication Archive
                  </span>
                  <span>Published by {schoolName} Academic &bull; {locationName}</span>
                </div>
                {blog.originalUrl && (
                  <a
                    href={blog.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-gold hover:underline font-bold shrink-0"
                  >
                    <span>View Original Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        </div>

        {/* Related Articles Section */}
        {relatedBlogs.length > 0 && (
          <section className="space-y-6 pt-10 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">
                  Continue Reading
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal">
                  More Articles from {schoolName}
                </h3>
              </div>

              <Link
                to={`/school/${schoolId}/blogs`}
                className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:text-brand-gold transition-colors`}
              >
                <span>View All {schoolName} Articles</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((item) => (
                <Link
                  key={item.id}
                  to={`/school/${schoolId}/blogs/${item.slug}`}
                  className="group bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={item.image || (isDLWS ? '/dlws.jpeg' : '/DJI_0044.JPG')}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-serif text-base font-bold text-brand-charcoal group-hover:text-brand-gold transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-brand-muted line-clamp-2 font-inter leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                      <span>{item.date}</span>
                      <span className="font-bold text-brand-charcoal flex items-center gap-1 group-hover:text-brand-gold transition-colors">
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

