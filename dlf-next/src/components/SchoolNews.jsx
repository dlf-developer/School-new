import React, { useState } from 'react'
import { newsStats, newsCategories, newsArticles } from '../data/schools/dlps/newsData'
import NewsUnderProgress from './school/news/NewsUnderProgress'
import NewsHero from './school/news/NewsHero'
import NewsCardGrid from './school/news/NewsCardGrid'
import NewsArticleModal from './school/news/NewsArticleModal'

export default function SchoolNews() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Set to true to reveal all sections in the future
  const SHOW_FULL_CONTENT = false

  if (!SHOW_FULL_CONTENT) {
    return <NewsUnderProgress />
  }

  const filteredArticles = newsArticles.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-24 sm:pt-28 pb-20 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        {/* Hero Section & Stats */}
        <NewsHero />

        {/* Categories, Search, and Card Grid */}
        <NewsCardGrid
          categories={newsCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          articles={filteredArticles}
          onSelectArticle={setSelectedArticle}
        />
      </div>

      {/* Article Detail Modal */}
      <NewsArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </div>
  )
}
