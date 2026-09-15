import React, { useState, useEffect } from 'react'
import { useSiteData } from '../../hooks/useSiteData'
import FieldEditor from '../components/FieldEditor'
import CardRepeater from '../components/CardRepeater'
import SaveBar from '../components/SaveBar'
import { Columns } from 'lucide-react'

export default function PillarsEditor() {
  const { global, saveGlobal, resetGlobal } = useSiteData()
  const [pillarsData, setPillarsData] = useState(global.pillars)
  const [isDirty, setIsDirty] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setPillarsData(global.pillars)
    setIsDirty(false)
  }, [global.pillars])

  const handleFieldChange = (field, value) => {
    setPillarsData(prev => ({ ...prev, [field]: value }))
    setIsDirty(true)
  }

  const handleUpdateCards = (updatedCards) => {
    setPillarsData(prev => ({ ...prev, cards: updatedCards }))
    setIsDirty(true)
  }

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      saveGlobal('pillars', pillarsData)
      setIsSaving(false)
      setIsDirty(false)
    }, 400)
  }

  const handleReset = () => {
    if (confirm('Reset Pillars section defaults?')) {
      resetGlobal('pillars')
      setPillarsData(global.pillars)
      setIsDirty(false)
    }
  }

  return (
    <div className="space-y-6 pb-28">
      <div className="flex items-center justify-between pb-4 border-b border-gray-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Columns className="h-5 w-5 text-brand-gold" />
            Educational Pillars Editor
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Edit the "What Sets Us Apart" pillars section showing core values and methodologies.
          </p>
        </div>
      </div>

      {/* Header Fields */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-4">
        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2">Section Header Content</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldEditor
            label="Section Label"
            value={pillarsData?.sectionLabel}
            onChange={(val) => handleFieldChange('sectionLabel', val)}
            placeholder="e.g. WHAT SETS US APART"
            description="Small uppercase label above title"
          />
          <FieldEditor
            label="Section Title"
            value={pillarsData?.sectionTitle}
            onChange={(val) => handleFieldChange('sectionTitle', val)}
            placeholder="e.g. The Pillars of DLF Education"
            description="Main headings text"
          />
        </div>
        <FieldEditor
          label="Section Subtitle"
          type="textarea"
          value={pillarsData?.sectionSubtitle}
          onChange={(val) => handleFieldChange('sectionSubtitle', val)}
          placeholder="Enter a brief intro about the pillars..."
          description="Description text block under headings"
          rows={3}
        />
      </div>

      {/* Cards Repeater */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <CardRepeater
          items={pillarsData?.cards || []}
          onUpdate={handleUpdateCards}
          itemName="Pillar Card"
          newItemTemplate={{ icon: 'Brain', title: 'New Pillar', desc: 'Pillar description details...' }}
          renderItemForm={(item, index, updateField) => (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FieldEditor
                  label="Card Icon Name"
                  value={item.icon}
                  onChange={(val) => updateField('icon', val)}
                  placeholder="e.g. Brain, Heart, Globe"
                  description="Lucide icon string"
                  className="md:col-span-1"
                />
                <FieldEditor
                  label="Card Title"
                  value={item.title}
                  onChange={(val) => updateField('title', val)}
                  placeholder="e.g. Value Education"
                  description="Title of pillar card"
                  className="md:col-span-2"
                />
              </div>
              <FieldEditor
                label="Card Description"
                type="textarea"
                value={item.desc}
                onChange={(val) => updateField('desc', val)}
                placeholder="Write pillar description details..."
                description="Long description inside card"
                rows={3}
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
