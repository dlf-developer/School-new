import React, { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  BookOpen,
  Search,
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Filter,
  X,
  FileText,
  GraduationCap,
  Layers,
} from 'lucide-react'
import { getSchoolBlogs, getSchoolCategories } from '../../../data/schools/blogsData.js'
import { useSiteData } from '../../../hooks/useSiteData'

export default function SchoolBlogListing() {
  const { schoolId } = useParams()
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

  // Load branch-isolated blogs and categories
  const allBlogs = useMemo(() => getSchoolBlogs(schoolId), [schoolId])
  const categories = useMemo(() => getSchoolCategories(schoolId), [schoolId])

  const [activeCategory, setActiveCategory] = useState('All Insights')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return allBlogs.filter((blog) => {
      const matchesCat =
        activeCategory === 'All Insights' || blog.category === activeCategory
      const query = searchQuery.trim().toLowerCase()
      const matchesSearch =
        !query ||
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        (blog.plainText && blog.plainText.toLowerCase().includes(query)) ||
        (blog.category && blog.category.toLowerCase().includes(query))
      return matchesCat && matchesSearch
    })
  }, [allBlogs, activeCategory, searchQuery])

  // Reset page when filter changes
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setCurrentPage(1)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  // Pagination calculation
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage)
  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredBlogs.slice(start, start + itemsPerPage)
  }, [filteredBlogs, currentPage, itemsPerPage])

  // Spotlight blog (top article on first page of unfiltered view)
  const spotlightBlog =
    activeCategory === 'All Insights' && !searchQuery && currentPage === 1
      ? allBlogs[0]
      : null

  // Grid items excluding spotlight if spotlight is shown
  const displayGridBlogs = spotlightBlog
    ? paginatedBlogs.filter((b) => b.slug !== spotlightBlog.slug)
    : paginatedBlogs

  return (
    <div className="pt-24 pb-20 bg-brand-bg min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        {/* Breadcrumb & Clean Page Header */}
        <div className="space-y-4 pt-4 border-b border-gray-200 pb-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-brand-muted font-medium"
          >
            <Link
              to={`/school/${schoolId}`}
              className="hover:text-brand-gold transition-colors flex items-center gap-1"
            >
              <span>{schoolName}</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-brand-charcoal font-bold">Blogs</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
                Official Campus Insights &bull; {locationName}
              </span>
              <h1 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary} tracking-tight mt-1`}>
                {schoolName} Blogs
              </h1>
              <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter">
                {isDLWS
                  ? 'Educational perspectives, parenting guides, and official stories from DLF World School Greater Noida.'
                  : 'Educational perspectives, parenting guides, and official stories from DLF Public School Sahibabad.'}
              </p>
            </div>
            <Link
              to={`/school/${schoolId}`}
              className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:text-brand-gold transition-colors shrink-0`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to School Home</span>
            </Link>
          </div>
        </div>

        {/* Filter & Live Search Bar Strip */}
        <div className="bg-white rounded-3xl border border-gray-150 p-6 shadow-sm space-y-5">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-xl">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search articles by title, topic, curriculum, or keywords..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold bg-gray-50/50 transition-all font-inter"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Total Results Counter */}
            <div className="text-xs text-brand-muted font-inter flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span>
                Showing <strong className="text-brand-charcoal">{filteredBlogs.length}</strong>{' '}
                articles {activeCategory !== 'All Insights' && `in ${activeCategory}`}
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 pt-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1 shrink-0 pr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Categories:</span>
            </span>
            {categories.map((cat) => {
              const count =
                cat === 'All Insights'
                  ? allBlogs.length
                  : allBlogs.filter((b) => b.category === cat).length
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? `bg-${theme.primary} text-white shadow-md scale-102`
                      : 'bg-gray-100 hover:bg-gray-200 text-brand-charcoal'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-white text-gray-600 border border-gray-200'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Featured Spotlight Article (Shown when unfiltered on Page 1) */}
        {spotlightBlog && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">
                Featured Article Spotlight
              </span>
            </div>

            <Link
              to={`/school/${schoolId}/blogs/${spotlightBlog.slug}`}
              className="group block bg-white rounded-3xl border border-gray-150 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 h-64 sm:h-80 lg:h-auto overflow-hidden relative bg-gray-100">
                  <img
                    src={spotlightBlog.image || (isDLWS ? '/dlws.jpeg' : '/DJI_0044.JPG')}
                    alt={spotlightBlog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                </div>

                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-inter">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                        {spotlightBlog.date}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-gold" />
                        {spotlightBlog.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal group-hover:text-brand-gold transition-colors leading-snug">
                      {spotlightBlog.title}
                    </h2>

                    <p className="text-brand-muted text-sm sm:text-base leading-relaxed line-clamp-3 font-inter">
                      {spotlightBlog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500">
                      By {spotlightBlog.author}
                    </span>
                    <span
                      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-${theme.primary} group-hover:translate-x-1 transition-transform`}
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4 text-brand-gold" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Blog Cards Grid */}
        <div className="space-y-8">
          {displayGridBlogs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-150 p-8 space-y-4">
              <FileText className="w-12 h-12 text-gray-300 mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
                No articles found
              </h3>
              <p className="text-sm text-brand-muted font-inter max-w-md mx-auto">
                No blog posts match your current search query "{searchQuery}" or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('All Insights')
                }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-${theme.primary} text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all`}
              >
                <span>Clear All Filters</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayGridBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/school/${schoolId}/blogs/${blog.slug}`}
                  className="group flex flex-col bg-white rounded-3xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Article Thumbnail */}
                  <div className="aspect-[16/10] overflow-hidden relative bg-gray-100">
                    <img
                      src={blog.image || (isDLWS ? '/dlws.jpeg' : '/DJI_0044.JPG')}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-[11px] text-gray-500 font-inter">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-brand-gold" />
                          {blog.date}
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-brand-gold" />
                          {blog.readTime}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal group-hover:text-brand-gold transition-colors leading-snug line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-brand-muted text-xs sm:text-sm leading-relaxed line-clamp-3 font-inter">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] text-gray-400 font-medium truncate max-w-[150px]">
                        {blog.author}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-bold text-${theme.primary} group-hover:text-brand-gold transition-colors`}
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-8">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-bold uppercase tracking-wider text-brand-charcoal bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-all cursor-pointer"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    currentPage === page
                      ? `bg-${theme.primary} text-white shadow-md scale-105`
                      : 'bg-white border border-gray-200 text-brand-charcoal hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-bold uppercase tracking-wider text-brand-charcoal bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-all cursor-pointer"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

