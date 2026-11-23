import React, { useState, useEffect } from 'react'
import { useSiteData } from '../../hooks/useSiteData'
import FieldEditor from '../components/FieldEditor'
import CardRepeater from '../components/CardRepeater'
import ImageUrlPicker from '../components/ImageUrlPicker'
import SaveBar from '../components/SaveBar'
import { Brain, Image as ImageIcon } from 'lucide-react'

export default function ThinkingSchoolEditor() {
  const { global, saveGlobal, resetGlobal } = useSiteData()
  const [thinkingData, setThinkingData] = useState(global.thinkingSchool)
  const [isDirty, setIsDirty] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setThinkingData(global.thinkingSchool)
    setIsDirty(false)
  }, [global.thinkingSchool])

  const handleFieldChange = (field, value) => {
    setThinkingData(prev => ({ ...prev, [field]: value }))
    setIsDirty(true)
  }

  const handleUpdatePillars = (updatedPillars) => {
    setThinkingData(prev => ({ ...prev, pillars: updatedPillars }))
    setIsDirty(true)
  }

  const handleUpdateGallery = (updatedGallery) => {
    setThinkingData(prev => ({ ...prev, gallery: updatedGallery }))
    setIsDirty(true)
  }

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      saveGlobal('thinkingSchool', thinkingData)
      setIsSaving(false)
      setIsDirty(false)
    }, 400)
  }

  const handleReset = () => {
    if (confirm('Reset Thinking School section defaults?')) {
      resetGlobal('thinkingSchool')
      setThinkingData(global.thinkingSchool)
      setIsDirty(false)
    }
  }

  return (
    <div className="space-y-6 pb-28">
      <div className="flex items-center justify-between pb-4 border-b border-gray-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Brain className="h-5 w-5 text-brand-gold" />
            Thinking School Editor
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Manage the content, pedagogical pillars, and photo gallery for the "Thinking School" section.
          </p>
        </div>
      </div>

      {/* Hero Content Section */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-4">
        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2">Introductory Header Content</h3>
        <FieldEditor
          label="Hero Title"
          value={thinkingData?.heroTitle}
          onChange={(val) => handleFieldChange('heroTitle', val)}
          placeholder="e.g. A Thinking School"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldEditor
            label="Hero Quote Callout"
            type="textarea"
            value={thinkingData?.heroQuote}
            onChange={(val) => handleFieldChange('heroQuote', val)}
            placeholder="Quote or catchphrase..."
            rows={3}
          />
          <FieldEditor
            label="Hero Intro Text"
            type="textarea"
            value={thinkingData?.heroIntro}
            onChange={(val) => handleFieldChange('heroIntro', val)}
            placeholder="Introduction description paragraph..."
            rows={3}
          />
        </div>
      </div>

      {/* Pillars Section */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <CardRepeater
          items={thinkingData?.pillars || []}
          onUpdate={handleUpdatePillars}
          title="Pedagogical Pillars"
          itemName="Pillar"
          newItemTemplate={{ title: 'New Pillar Title', desc: 'Pillar description detail text...' }}
          renderItemForm={(item, index, updateField) => (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FieldEditor
                label="Pillar Title"
                value={item.title}
                onChange={(val) => updateField('title', val)}
                placeholder="e.g. Critical Thinking"
                className="md:col-span-1"
              />
              <FieldEditor
                label="Description"
                type="textarea"
                value={item.desc}
                onChange={(val) => updateField('desc', val)}
                placeholder="Write description content..."
                rows={2}
                className="md:col-span-2"
              />
            </div>
          )}
        />
      </div>

      {/* Gallery Section */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <CardRepeater
          items={thinkingData?.gallery || []}
          onUpdate={handleUpdateGallery}
          title="Photo Gallery Grid"
          itemName="Gallery Image"
          newItemTemplate={{ src: '/images/thinking-default.jpg', title: 'Gallery Photo Title' }}
          renderItemForm={(item, index, updateField) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ImageUrlPicker
                label="Image URL/Path"
                value={item.src}
                onChange={(val) => updateField('src', val)}
                description="Relative image path (e.g. /images/img.jpg)"
              />
              <FieldEditor
                label="Image Title Caption"
                value={item.title}
                onChange={(val) => updateField('title', val)}
                placeholder="e.g. Creative Class Activities"
                description="Caption visible on image hover"
              />
            </div>
          )}
        />
      </div>

      {/* Closing Summary Section */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-4">
        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2">Closing Section Details</h3>
        <FieldEditor
          label="Closing Section Title"
          value={thinkingData?.closingTitle}
          onChange={(val) => handleFieldChange('closingTitle', val)}
          placeholder="e.g. Preparing Future Leaders"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldEditor
            label="Closing Body Text"
            type="textarea"
            value={thinkingData?.closingText}
            onChange={(val) => handleFieldChange('closingText', val)}
            placeholder="Closing summary description details..."
            rows={4}
          />
          <FieldEditor
            label="Closing Highlight Quote"
            type="textarea"
            value={thinkingData?.closingQuote}
            onChange={(val) => handleFieldChange('closingQuote', val)}
            placeholder="Signature highlight citation quote..."
            rows={4}
          />
        </div>
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
