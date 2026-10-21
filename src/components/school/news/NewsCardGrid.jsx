import React from 'react'
import { Calendar, Eye, Search, Newspaper } from 'lucide-react'

export default function NewsCardGrid({
  categories = [],
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  articles = [],
  onSelectArticle,
}) {
  return (
    <div id="media-coverage" className="space-y-8">
      {/* Category Pills & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-150 pb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-greenDeep text-white shadow-md'
                  : 'bg-white border border-gray-200 text-brand-charcoal hover:bg-gray-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search press articles..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-gold bg-white"
          />
        </div>
      </div>

      {/* Articles Grid */}
      {articles.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-gray-150 p-8 space-y-3">
          <Newspaper className="w-8 h-8 text-gray-300 mx-auto" />
          <h4 className="font-serif text-lg font-bold text-brand-charcoal">No press articles found</h4>
          <p className="text-xs text-brand-muted font-inter">Try adjusting your category filter or search terms.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectArticle(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-brand-gold text-brand-charcoal text-[9px] font-extrabold uppercase tracking-widest shadow-md">
                    {item.sourceBadge}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-brand-muted font-inter">
                    <span className="font-bold text-brand-charcoal">{item.source}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-brand-charcoal group-hover:text-brand-greenDeep transition-colors leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs text-brand-muted font-inter leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-brand-gold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" /> Read Full Press Release
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
