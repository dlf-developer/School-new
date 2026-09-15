import React, { useState, useEffect } from 'react'
import { useSiteData } from '../../hooks/useSiteData'
import FieldEditor from '../components/FieldEditor'
import CardRepeater from '../components/CardRepeater'
import SaveBar from '../components/SaveBar'
import { BarChart3, AlertCircle } from 'lucide-react'

export default function StatsEditor() {
  const { global, saveGlobal, resetGlobal } = useSiteData()
  const [statsData, setStatsData] = useState(global.stats)
  const [isDirty, setIsDirty] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setStatsData(global.stats)
    setIsDirty(false)
  }, [global.stats])

  const handleUpdateCounters = (updatedCounters) => {
    setStatsData(prev => ({ ...prev, counters: updatedCounters }))
    setIsDirty(true)
  }

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      saveGlobal('stats', statsData)
      setIsSaving(false)
      setIsDirty(false)
    }, 400)
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset stats to defaults?')) {
      resetGlobal('stats')
      setStatsData(global.stats)
      setIsDirty(false)
    }
  }

  const colorOptions = [
    { label: 'Gold (Brand Default)', value: 'text-brand-gold' },
    { label: 'Green (Brand Default)', value: 'text-brand-greenDeep' },
    { label: 'Blue', value: 'text-blue-500' },
    { label: 'Purple', value: 'text-purple-500' },
    { label: 'Orange', value: 'text-orange-500' }
  ]

  return (
    <div className="space-y-6 pb-28">
      <div className="flex items-center justify-between pb-4 border-b border-gray-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-brand-gold" />
            Key Statistics Editor
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Edit the numbers and text displayed in the counting statistics section on school landing pages.
          </p>
        </div>
      </div>

      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-6">
        <div className="bg-yellow-500/5 border border-yellow-500/20 text-yellow-400/90 rounded-lg p-4 text-xs flex gap-2">
          <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-1">Layout Constraints</p>
            <p>For optimal visual balance, please maintain exactly **4 stats counters**. Adding too many might disrupt the horizontal grid alignment on desktop screens.</p>
          </div>
        </div>

        <CardRepeater
          items={statsData?.counters || []}
          onUpdate={handleUpdateCounters}
          itemName="Counter"
          newItemTemplate={{ target: 100, suffix: '+', label: 'New Metric', color: 'text-brand-gold' }}
          renderItemForm={(item, index, updateField) => (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FieldEditor
                label="Number Value"
                type="number"
                value={item.target}
                onChange={(val) => updateField('target', val)}
                placeholder="e.g. 28, 1000"
                description="Integer target for counter countup"
              />
              <FieldEditor
                label="Suffix"
                value={item.suffix}
                onChange={(val) => updateField('suffix', val)}
                placeholder="e.g. +, %, Yrs"
                description="Label directly following number"
              />
              <FieldEditor
                label="Label Description"
                value={item.label}
                onChange={(val) => updateField('label', val)}
                placeholder="e.g. Qualified Teachers"
                description="Description text underneath number"
              />
              <FieldEditor
                label="Text Accent Color"
                type="select"
                options={colorOptions}
                value={item.color}
                onChange={(val) => updateField('color', val)}
                description="Tailwind color styling for text"
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
