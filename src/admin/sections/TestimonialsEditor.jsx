import React, { useState, useEffect } from 'react'
import { useSiteData } from '../../hooks/useSiteData'
import FieldEditor from '../components/FieldEditor'
import CardRepeater from '../components/CardRepeater'
import SaveBar from '../components/SaveBar'
import { MessageSquareQuote } from 'lucide-react'

export default function TestimonialsEditor() {
  const { global, saveGlobal, resetGlobal } = useSiteData()
  const [testimonialsData, setTestimonialsData] = useState(global.testimonials)
  const [isDirty, setIsDirty] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setTestimonialsData(global.testimonials)
    setIsDirty(false)
  }, [global.testimonials])

  const handleFieldChange = (field, value) => {
    setTestimonialsData(prev => ({ ...prev, [field]: value }))
    setIsDirty(true)
  }

  const handleUpdateCards = (updatedCards) => {
    setTestimonialsData(prev => ({ ...prev, cards: updatedCards }))
    setIsDirty(true)
  }

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      saveGlobal('testimonials', testimonialsData)
      setIsSaving(false)
      setIsDirty(false)
    }, 400)
  }

  const handleReset = () => {
    if (confirm('Reset Testimonials section defaults?')) {
      resetGlobal('testimonials')
      setTestimonialsData(global.testimonials)
      setIsDirty(false)
    }
  }

  return (
    <div className="space-y-6 pb-28">
      <div className="flex items-center justify-between pb-4 border-b border-gray-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <MessageSquareQuote className="h-5 w-5 text-brand-gold" />
            Testimonials Editor
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Manage student, parent, or alumni testimonial cards displayed on the homepage.
          </p>
        </div>
      </div>

      {/* Header Fields */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-4">
        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2">Section Header</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldEditor
            label="Section Label"
            value={testimonialsData?.sectionLabel}
            onChange={(val) => handleFieldChange('sectionLabel', val)}
            placeholder="e.g. TESTIMONIALS"
          />
          <FieldEditor
            label="Section Title"
            value={testimonialsData?.sectionTitle}
            onChange={(val) => handleFieldChange('sectionTitle', val)}
            placeholder="e.g. Voices of the DLF Family"
          />
        </div>
      </div>

      {/* Cards Repeater */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <CardRepeater
          items={testimonialsData?.cards || []}
          onUpdate={handleUpdateCards}
          itemName="Testimonial Card"
          newItemTemplate={{ quote: 'New testimonial quote content...', name: 'Author Name', role: 'Parent of Class V Student', initials: 'AN' }}
          renderItemForm={(item, index, updateField) => (
            <div className="space-y-4">
              <FieldEditor
                label="Quote Content"
                type="textarea"
                value={item.quote}
                onChange={(val) => updateField('quote', val)}
                placeholder="Write the quote text here..."
                rows={3}
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FieldEditor
                  label="Author Name"
                  value={item.name}
                  onChange={(val) => updateField('name', val)}
                  placeholder="e.g. Dr. Rajesh Sen"
                />
                <FieldEditor
                  label="Author Role / Subtitle"
                  value={item.role}
                  onChange={(val) => updateField('role', val)}
                  placeholder="e.g. Alumni (2018 Batch)"
                />
                <FieldEditor
                  label="Initials Avatar"
                  value={item.initials}
                  onChange={(val) => updateField('initials', val)}
                  placeholder="e.g. RS"
                  description="2-letter thumbnail representation"
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
