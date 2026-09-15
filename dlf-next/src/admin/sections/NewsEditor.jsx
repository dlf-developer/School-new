import React, { useState, useEffect } from 'react'
import { useSiteData } from '../../hooks/useSiteData'
import FieldEditor from '../components/FieldEditor'
import CardRepeater from '../components/CardRepeater'
import SaveBar from '../components/SaveBar'
import { Newspaper, AlertCircle } from 'lucide-react'

export default function NewsEditor() {
  const { global, saveGlobal, resetGlobal } = useSiteData()
  const [newsData, setNewsData] = useState(global.news || {
    sectionLabel: 'Press Room',
    sectionTitle: 'DLF in the News',
    sectionSubtitle: 'Media coverage, national rankings, and institutional recognitions.',
    articles: []
  })
  const [isDirty, setIsDirty] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // Sync state if global data changes
  useEffect(() => {
    if (global.news) {
      setNewsData(global.news)
      setIsDirty(false)
    }
  }, [global.news])

  const handleFieldChange = (key, value) => {
    setNewsData(prev => ({ ...prev, [key]: value }))
    setIsDirty(true)
  }

  const handleUpdateArticles = (updatedArticles) => {
    setNewsData(prev => ({ ...prev, articles: updatedArticles }))
    setIsDirty(true)
  }

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      saveGlobal('news', newsData)
      setIsSaving(false)
      setIsDirty(false)
    }, 400)
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset this section to the siteData.js defaults? Any local changes will be lost.')) {
      resetGlobal('news')
      if (global.news) {
        setNewsData(global.news)
      }
      setIsDirty(false)
    }
  }

  return (
    <div className="space-y-6 pb-28">
      <div className="flex items-center justify-between pb-4 border-b border-gray-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Newspaper className="h-5 w-5 text-brand-gold" />
            DLF in the News Editor
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Manage press room media coverage, national school rankings, and articles for the News page.
          </p>
        </div>
      </div>

      {/* Header Fields */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-6">
        <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-wider">Section Header</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldEditor
            label="Section Label"
            value={newsData.sectionLabel}
            onChange={(val) => handleFieldChange('sectionLabel', val)}
            placeholder="e.g. Press Room"
            description="Small gold badge text"
          />
          <FieldEditor
            label="Section Title"
            value={newsData.sectionTitle}
            onChange={(val) => handleFieldChange('sectionTitle', val)}
            placeholder="e.g. DLF in the News"
            description="Main category header text"
          />
          <FieldEditor
            label="Section Subtitle"
            value={newsData.sectionSubtitle}
            onChange={(val) => handleFieldChange('sectionSubtitle', val)}
            type="textarea"
            placeholder="Enter section description..."
            description="Paragraph text below header"
            className="md:col-span-2"
          />
        </div>
      </div>

      {/* Articles Repeater */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-wider">News Articles & Press Highlights</h3>
        </div>

        <CardRepeater
          items={newsData.articles || []}
          onUpdate={handleUpdateArticles}
          itemName="News Article"
          newItemTemplate={{ source: 'Media Outlet Name', title: 'Article Title Here', desc: 'Short summary or description of the media coverage.' }}
          renderItemForm={(article, index, updateField) => (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FieldEditor
                  label="Media Source / Label"
                  value={article.source}
                  onChange={(val) => updateField('source', val)}
                  placeholder="e.g. Times of India, EducationWorld"
                  description="Publisher source or award category"
                />
                <FieldEditor
                  label="Article Title"
                  value={article.title}
                  onChange={(val) => updateField('title', val)}
                  placeholder="e.g. Ranked #1 Co-Ed School"
                  description="Main headline of the article"
                />
              </div>
              <FieldEditor
                label="Article Summary / Description"
                value={article.desc}
                onChange={(val) => updateField('desc', val)}
                type="textarea"
                placeholder="Enter article synopsis..."
                description="Short summary of the media coverage details"
              />
            </div>
          )}
        />
      </div>

      <SaveBar
        onSave={handleSave}
        onReset={handleReset}
        isDirty={isDirty}
        isSaving={isSaving}
      />
    </div>
  )
}
