import React, { useState, useEffect } from 'react'
import { useSiteData } from '../../hooks/useSiteData'
import FieldEditor from '../components/FieldEditor'
import CardRepeater from '../components/CardRepeater'
import ImageUrlPicker from '../components/ImageUrlPicker'
import SaveBar from '../components/SaveBar'
import { Target, FileText } from 'lucide-react'

export default function VisionMissionEditor() {
  const { global, saveGlobal, resetGlobal } = useSiteData()
  const [vmData, setVmData] = useState(global.visionMission)
  const [isDirty, setIsDirty] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setVmData(global.visionMission)
    setIsDirty(false)
  }, [global.visionMission])

  const handleFieldChange = (field, value) => {
    setVmData(prev => ({ ...prev, [field]: value }))
    setIsDirty(true)
  }

  const handleNestedFieldChange = (parent, field, value) => {
    setVmData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }))
    setIsDirty(true)
  }

  const handleUpdatePublications = (updatedPubs) => {
    setVmData(prev => ({ ...prev, publications: updatedPubs }))
    setIsDirty(true)
  }

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      saveGlobal('visionMission', vmData)
      setIsSaving(false)
      setIsDirty(false)
    }, 400)
  }

  const handleReset = () => {
    if (confirm('Reset Vision & Mission defaults?')) {
      resetGlobal('visionMission')
      setVmData(global.visionMission)
      setIsDirty(false)
    }
  }

  return (
    <div className="space-y-6 pb-28">
      <div className="flex items-center justify-between pb-4 border-b border-gray-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Target className="h-5 w-5 text-brand-gold" />
            Vision & Mission Editor
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Manage the titles, vision quotes, mission text statements, gallery image, and publication documents.
          </p>
        </div>
      </div>

      {/* Hero Header Content */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-4">
        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2">Page Header Content</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FieldEditor
            label="Hero Label"
            value={vmData?.heroLabel}
            onChange={(val) => handleFieldChange('heroLabel', val)}
            placeholder="e.g. Our Foundation"
          />
          <FieldEditor
            label="Hero Title"
            value={vmData?.heroTitle}
            onChange={(val) => handleFieldChange('heroTitle', val)}
            placeholder="e.g. Vision & Mission"
            className="md:col-span-2"
          />
        </div>
        <FieldEditor
          label="Hero Subtitle"
          type="textarea"
          value={vmData?.heroSubtitle}
          onChange={(val) => handleFieldChange('heroSubtitle', val)}
          placeholder="Brief intro description..."
          rows={2}
        />
      </div>

      {/* Vision and Mission Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vision Editor */}
        <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-4">
          <h3 className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2">Vision Statements</h3>
          <FieldEditor
            label="Vision Card Title"
            value={vmData?.vision?.title}
            onChange={(val) => handleNestedFieldChange('vision', 'title', val)}
            placeholder="e.g. Our Vision"
          />
          <FieldEditor
            label="Vision Statement Quote"
            type="textarea"
            value={vmData?.vision?.quote}
            onChange={(val) => handleNestedFieldChange('vision', 'quote', val)}
            placeholder="Vision statement details..."
            rows={4}
          />
          <FieldEditor
            label="Vision Accent Badge"
            value={vmData?.vision?.badge}
            onChange={(val) => handleNestedFieldChange('vision', 'badge', val)}
            placeholder="e.g. Global Leadership & Citizenship"
          />
        </div>

        {/* Mission Editor */}
        <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-4">
          <h3 className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2">Mission Statements</h3>
          <FieldEditor
            label="Mission Card Title"
            value={vmData?.mission?.title}
            onChange={(val) => handleNestedFieldChange('mission', 'title', val)}
            placeholder="e.g. Our Mission"
          />
          <FieldEditor
            label="Mission Statement Text"
            type="textarea"
            value={vmData?.mission?.text}
            onChange={(val) => handleNestedFieldChange('mission', 'text', val)}
            placeholder="Mission statement details..."
            rows={4}
          />
          <FieldEditor
            label="Mission Accent Badge"
            value={vmData?.mission?.badge}
            onChange={(val) => handleNestedFieldChange('mission', 'badge', val)}
            placeholder="e.g. Self Discovery & Cultural Heritage"
          />
        </div>
      </div>

      {/* Gallery Image */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2">Feature Media Image</h3>
          <ImageUrlPicker
            label="Gallery Image URL"
            value={vmData?.galleryImage}
            onChange={(val) => handleFieldChange('galleryImage', val)}
            description="Main feature image for Vision page"
          />
        </div>
        <div className="flex flex-col justify-end">
          <FieldEditor
            label="Image Caption Description"
            type="textarea"
            value={vmData?.galleryCaption}
            onChange={(val) => handleFieldChange('galleryCaption', val)}
            placeholder="e.g. Cultivating inquiry and mutual collaboration..."
            description="Text shown underneath main image"
            rows={3}
          />
        </div>
      </div>

      {/* Publications / Documents */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <CardRepeater
          items={vmData?.publications || []}
          onUpdate={handleUpdatePublications}
          title="Publications & Documents"
          itemName="Publication"
          newItemTemplate={{ title: 'Document Title', subtitle: 'PDF Document', desc: 'Detailed description of the document...', url: '/document.pdf', icon: 'FileText' }}
          renderItemForm={(item, index, updateField) => (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FieldEditor
                  label="Document Title"
                  value={item.title}
                  onChange={(val) => updateField('title', val)}
                  placeholder="e.g. Alumni Connect - 2nd Edition"
                />
                <FieldEditor
                  label="Document Subtitle"
                  value={item.subtitle}
                  onChange={(val) => updateField('subtitle', val)}
                  placeholder="e.g. PDF Document"
                />
                <FieldEditor
                  label="Icon Representative"
                  value={item.icon || 'FileText'}
                  onChange={(val) => updateField('icon', val)}
                  placeholder="e.g. FileText, Users, Award"
                  description="Lucide icon name string"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FieldEditor
                  label="File URL/Path"
                  value={item.url}
                  onChange={(val) => updateField('url', val)}
                  placeholder="e.g. /Alumni_Connect.pdf or https://..."
                  description="Local path (starts with /) or absolute web link"
                />
                <FieldEditor
                  label="Document Description"
                  type="textarea"
                  value={item.desc}
                  onChange={(val) => updateField('desc', val)}
                  placeholder="Write a brief overview of document contents..."
                  rows={2.5}
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
