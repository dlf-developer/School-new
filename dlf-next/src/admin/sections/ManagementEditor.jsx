import React, { useState, useEffect } from 'react'
import { useSiteData } from '../../hooks/useSiteData'
import FieldEditor from '../components/FieldEditor'
import CardRepeater from '../components/CardRepeater'
import SaveBar from '../components/SaveBar'
import { Users2, AlertCircle } from 'lucide-react'

export default function ManagementEditor() {
  const { global, saveGlobal, resetGlobal } = useSiteData()
  const [managementData, setManagementData] = useState(global.management)
  const [isDirty, setIsDirty] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setManagementData(global.management)
    setIsDirty(false)
  }, [global.management])

  const handleUpdateLeaders = (updatedLeaders) => {
    setManagementData(prev => ({ ...prev, leaders: updatedLeaders }))
    setIsDirty(true)
  }

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      saveGlobal('management', managementData)
      setIsSaving(false)
      setIsDirty(false)
    }, 400)
  }

  const handleReset = () => {
    if (confirm('Reset Management Team defaults?')) {
      resetGlobal('management')
      setManagementData(global.management)
      setIsDirty(false)
    }
  }

  return (
    <div className="space-y-6 pb-28">
      <div className="flex items-center justify-between pb-4 border-b border-gray-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Users2 className="h-5 w-5 text-brand-gold" />
            Management Team Editor
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Edit the profiles, bio statements, and highlight accolades for the school's leadership team.
          </p>
        </div>
      </div>

      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-6">
        <div className="bg-yellow-500/5 border border-yellow-500/20 text-yellow-400/90 rounded-lg p-4 text-xs flex gap-2">
          <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-1">Highlights Guidelines</p>
            <p>Input each leader's accomplishments and key accolades **one per line**. These will display as key bullets in their dashboard profile.</p>
          </div>
        </div>

        <CardRepeater
          items={managementData?.leaders || []}
          onUpdate={handleUpdateLeaders}
          itemName="Leader Profile"
          newItemTemplate={{ name: 'Leader Name', role: 'Executive Member', badge: 'Leadership', bio: 'Bio statement...', highlights: ['First accomplishment', 'Second key milestone'], icon: 'Brain' }}
          renderItemForm={(item, index, updateField) => (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <FieldEditor
                  label="Leader Name"
                  value={item.name}
                  onChange={(val) => updateField('name', val)}
                  placeholder="e.g. Executive Director"
                  className="md:col-span-1"
                />
                <FieldEditor
                  label="Official Designation"
                  value={item.role}
                  onChange={(val) => updateField('role', val)}
                  placeholder="e.g. Executive Director"
                  className="md:col-span-1"
                />
                <FieldEditor
                  label="Context Badge"
                  value={item.badge}
                  onChange={(val) => updateField('badge', val)}
                  placeholder="e.g. Founder, Chairperson"
                  description="Top badge text label"
                  className="md:col-span-1"
                />
                <FieldEditor
                  label="Design Icon Name"
                  value={item.icon}
                  onChange={(val) => updateField('icon', val)}
                  placeholder="e.g. Brain, Award, Shield"
                  description="Lucide icon string"
                  className="md:col-span-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FieldEditor
                  label="Bio Statement (Long Text)"
                  type="textarea"
                  value={item.bio}
                  onChange={(val) => updateField('bio', val)}
                  placeholder="Enter detailed leadership profile bio..."
                  rows={6}
                />
                <FieldEditor
                  label="Key Highlights (One per line)"
                  type="textarea"
                  value={Array.isArray(item.highlights) ? item.highlights.join('\n') : ''}
                  onChange={(val) => {
                    const lines = val.split('\n').filter(line => line.trim() !== '')
                    updateField('highlights', lines)
                  }}
                  placeholder="e.g.&#10;Recieved National Award 2024&#10;30+ Years Experience in Education"
                  description="Accomplishment bullet points"
                  rows={6}
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
