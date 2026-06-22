import React, { useState, useEffect } from 'react'
import { useSiteData } from '../../hooks/useSiteData'
import FieldEditor from '../components/FieldEditor'
import CardRepeater from '../components/CardRepeater'
import ImageUrlPicker from '../components/ImageUrlPicker'
import SaveBar from '../components/SaveBar'
import { Trophy, CalendarDays } from 'lucide-react'

export default function AwardsEditor() {
  const { global, saveGlobal, resetGlobal } = useSiteData()
  const [awardsData, setAwardsData] = useState(global.awards)
  const [isDirty, setIsDirty] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setAwardsData(global.awards)
    setIsDirty(false)
  }, [global.awards])

  const handleFieldChange = (field, value) => {
    setAwardsData(prev => ({ ...prev, [field]: value }))
    setIsDirty(true)
  }

  const handleUpdateHallOfFame = (updatedHof) => {
    setAwardsData(prev => ({ ...prev, hallOfFame: updatedHof }))
    setIsDirty(true)
  }

  const handleUpdateTimeline = (updatedTimeline) => {
    setAwardsData(prev => ({ ...prev, timeline: updatedTimeline }))
    setIsDirty(true)
  }

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      saveGlobal('awards', awardsData)
      setIsSaving(false)
      setIsDirty(false)
    }, 400)
  }

  const handleReset = () => {
    if (confirm('Reset Awards & Recognitions section defaults?')) {
      resetGlobal('awards')
      setAwardsData(global.awards)
      setIsDirty(false)
    }
  }

  // Get current categories as selector options (excluding 'All')
  const categoriesList = awardsData?.categories || []
  const catOptions = categoriesList
    .filter(cat => cat !== 'All')
    .map(cat => ({ label: cat, value: cat }))

  return (
    <div className="space-y-6 pb-28">
      <div className="flex items-center justify-between pb-4 border-b border-gray-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Trophy className="h-5 w-5 text-brand-gold" />
            Awards & Legacy Editor
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Manage page introductions, the primary Hall of Fame cards, and the historic awards timeline list.
          </p>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-4">
        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2">Intro Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldEditor
            label="Hero Title"
            value={awardsData?.heroTitle}
            onChange={(val) => handleFieldChange('heroTitle', val)}
            placeholder="e.g. School Awards & Recognition"
          />
          <FieldEditor
            label="Awards Categories (Comma Separated)"
            value={categoriesList.join(', ')}
            onChange={(val) => {
              const list = val.split(',').map(s => s.trim()).filter(s => s !== '')
              // Ensure 'All' is always at start
              if (!list.includes('All')) {
                list.unshift('All')
              }
              handleFieldChange('categories', list)
            }}
            placeholder="All, Ranking, Academic, Sustainability..."
            description="Used for timelines filter tags"
          />
        </div>
        <FieldEditor
          label="Hero Subtitle / Description"
          type="textarea"
          value={awardsData?.heroSubtitle}
          onChange={(val) => handleFieldChange('heroSubtitle', val)}
          placeholder="Brief intro details..."
          rows={2}
        />
      </div>

      {/* Hall of Fame Featured Awards */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <CardRepeater
          items={awardsData?.hallOfFame || []}
          onUpdate={handleUpdateHallOfFame}
          title="Hall of Fame Featured Cards"
          itemName="Hall of Fame Card"
          newItemTemplate={{ title: 'Award Title', by: 'Awarding Body', img: '/RIDS.JPG', year: '2025-26', desc: 'Brief description details of the achievement...' }}
          renderItemForm={(item, index, updateField) => (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FieldEditor
                  label="Award Title Name"
                  value={item.title}
                  onChange={(val) => updateField('title', val)}
                  placeholder="e.g. Wipro Earthian Sustainability Award"
                />
                <FieldEditor
                  label="Awarding Organization"
                  value={item.by}
                  onChange={(val) => updateField('by', val)}
                  placeholder="e.g. Wipro Foundation / CSE"
                />
                <FieldEditor
                  label="Award Year"
                  value={item.year}
                  onChange={(val) => updateField('year', val)}
                  placeholder="e.g. 2025-26"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ImageUrlPicker
                  label="Award Certificate/Photo URL"
                  value={item.img}
                  onChange={(val) => updateField('img', val)}
                  description="Upload file path or enter web image URL"
                />
                <FieldEditor
                  label="Award Short Summary"
                  type="textarea"
                  value={item.desc}
                  onChange={(val) => updateField('desc', val)}
                  placeholder="Write a brief overview of why this award is significant..."
                  rows={4}
                />
              </div>
            </div>
          )}
        />
      </div>

      {/* Historic Timeline List */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <CardRepeater
          items={awardsData?.timeline || []}
          onUpdate={handleUpdateTimeline}
          title="Historic Timeline Database"
          itemName="Timeline Award Row"
          newItemTemplate={{ year: '2025-26', award: 'Award title...', by: 'Awarding organization...', cat: 'Academic' }}
          renderItemForm={(item, index, updateField) => (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FieldEditor
                label="Timeline Year"
                value={item.year}
                onChange={(val) => updateField('year', val)}
                placeholder="e.g. 2025-26"
                className="md:col-span-1"
              />
              <FieldEditor
                label="Award Title"
                value={item.award}
                onChange={(val) => updateField('award', val)}
                placeholder="e.g. ET Tech X School Excellence Award"
                className="md:col-span-2"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-1">
                <FieldEditor
                  label="Presented By"
                  value={item.by}
                  onChange={(val) => updateField('by', val)}
                  placeholder="e.g. Brainfeed"
                />
                <FieldEditor
                  label="Filter Category"
                  type="select"
                  options={catOptions}
                  value={item.cat}
                  onChange={(val) => updateField('cat', val)}
                />
              </div>
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
