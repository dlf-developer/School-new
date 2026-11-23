import React, { useState, useEffect } from 'react'
import { useSiteData } from '../../hooks/useSiteData'
import FieldEditor from '../components/FieldEditor'
import CardRepeater from '../components/CardRepeater'
import ImageUrlPicker from '../components/ImageUrlPicker'
import SaveBar from '../components/SaveBar'
import { Handshake, Film } from 'lucide-react'

export default function ParentPartnersEditor() {
  const { global, saveGlobal, resetGlobal } = useSiteData()
  const [parentData, setParentData] = useState(global.parentPartners)
  const [isDirty, setIsDirty] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setParentData(global.parentPartners)
    setIsDirty(false)
  }, [global.parentPartners])

  const handleFieldChange = (field, value) => {
    setParentData(prev => ({ ...prev, [field]: value }))
    setIsDirty(true)
  }

  const handleUpdatePlaylist = (updatedPlaylist) => {
    setParentData(prev => ({ ...prev, playlist: updatedPlaylist }))
    setIsDirty(true)
  }

  const handleUpdateInitiatives = (updatedInits) => {
    setParentData(prev => ({ ...prev, initiatives: updatedInits }))
    setIsDirty(true)
  }

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      saveGlobal('parentPartners', parentData)
      setIsSaving(false)
      setIsDirty(false)
    }, 400)
  }

  const handleReset = () => {
    if (confirm('Reset Parent Partners section defaults?')) {
      resetGlobal('parentPartners')
      setParentData(global.parentPartners)
      setIsDirty(false)
    }
  }

  return (
    <div className="space-y-6 pb-28">
      <div className="flex items-center justify-between pb-4 border-b border-gray-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Handshake className="h-5 w-5 text-brand-gold" />
            Parents as Partners Editor
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Manage page introductions, video playlists, and parent-school initiatives.
          </p>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-4">
        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2">Intro Content</h3>
        <FieldEditor
          label="Hero Title"
          value={parentData?.heroTitle}
          onChange={(val) => handleFieldChange('heroTitle', val)}
          placeholder="e.g. Parents as Partners"
        />
        <FieldEditor
          label="Hero Subtitle / Description"
          type="textarea"
          value={parentData?.heroSubtitle}
          onChange={(val) => handleFieldChange('heroSubtitle', val)}
          placeholder="Brief intro details..."
          rows={3}
        />
      </div>

      {/* Video Playlist */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <CardRepeater
          items={parentData?.playlist || []}
          onUpdate={handleUpdatePlaylist}
          title="Video Gallery Playlist"
          itemName="Video Entry"
          newItemTemplate={{ title: 'New Video Title', filename: '/video.mp4', desc: 'Short video description...' }}
          renderItemForm={(item, index, updateField) => (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FieldEditor
                  label="Video Display Title"
                  value={item.title}
                  onChange={(val) => updateField('title', val)}
                  placeholder="e.g. Cambridge Day Celebration"
                />
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-300 tracking-wider uppercase flex items-center gap-1.5">
                    <Film className="h-3.5 w-3.5 text-brand-gold" />
                    Video Filename/URL
                  </label>
                  <input
                    type="text"
                    value={item.filename || ''}
                    onChange={(e) => updateField('filename', e.target.value)}
                    placeholder="e.g. /Cambridge Day.mp4"
                    className="w-full bg-[#12121a]/90 text-white border border-gray-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/40 transition-all placeholder-gray-600"
                  />
                  <span className="text-[10px] text-gray-500">Relative name in public folder starting with /</span>
                </div>
              </div>
              <FieldEditor
                label="Video Description"
                type="textarea"
                value={item.desc}
                onChange={(val) => updateField('desc', val)}
                placeholder="Brief description of video..."
                rows={2}
              />
            </div>
          )}
        />
      </div>

      {/* Initiatives */}
      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <CardRepeater
          items={parentData?.initiatives || []}
          onUpdate={handleUpdateInitiatives}
          title="Parent-School Initiatives"
          itemName="Initiative"
          newItemTemplate={{ title: 'New Initiative', icon: 'Calendar', desc: 'Initiative details description...', img: '/7C1A1951-Enhanced-NR.jpg', caption: 'Image caption info...' }}
          renderItemForm={(item, index, updateField) => (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FieldEditor
                  label="Initiative Title"
                  value={item.title}
                  onChange={(val) => updateField('title', val)}
                  placeholder="e.g. Meet & Greet Sessions"
                />
                <FieldEditor
                  label="Icon Name"
                  value={item.icon || 'Calendar'}
                  onChange={(val) => updateField('icon', val)}
                  placeholder="e.g. Calendar, Heart, Users"
                  description="Lucide icon string"
                />
                <ImageUrlPicker
                  label="Initiative Photo URL"
                  value={item.img}
                  onChange={(val) => updateField('img', val)}
                  description="Photo representing the initiative"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FieldEditor
                  label="Initiative Details Description"
                  type="textarea"
                  value={item.desc}
                  onChange={(val) => updateField('desc', val)}
                  placeholder="Write long description of initiative..."
                  rows={4}
                />
                <FieldEditor
                  label="Photo Caption Text"
                  type="textarea"
                  value={item.caption}
                  onChange={(val) => updateField('caption', val)}
                  placeholder="Write caption explaining the photo..."
                  rows={4}
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
