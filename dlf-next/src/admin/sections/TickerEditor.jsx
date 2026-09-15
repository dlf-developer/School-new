import React, { useState, useEffect } from 'react'
import { useSiteData } from '../../hooks/useSiteData'
import FieldEditor from '../components/FieldEditor'
import CardRepeater from '../components/CardRepeater'
import SaveBar from '../components/SaveBar'
import { Megaphone, AlertCircle } from 'lucide-react'

export default function TickerEditor() {
  const { global, saveGlobal, resetGlobal } = useSiteData()
  const [tickerData, setTickerData] = useState(global.ticker)
  const [isDirty, setIsDirty] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // Sync state if global data changes
  useEffect(() => {
    setTickerData(global.ticker)
    setIsDirty(false)
  }, [global.ticker])

  const handleUpdateItems = (updatedItems) => {
    setTickerData(prev => ({ ...prev, items: updatedItems }))
    setIsDirty(true)
  }

  const handleSave = () => {
    setIsSaving(true)
    // Simulate premium dashboard delay
    setTimeout(() => {
      saveGlobal('ticker', tickerData)
      setIsSaving(false)
      setIsDirty(false)
    }, 400)
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset this section to the siteData.js defaults? Any local changes will be lost.')) {
      resetGlobal('ticker')
      setTickerData(global.ticker)
      setIsDirty(false)
    }
  }

  return (
    <div className="space-y-6 pb-28">
      <div className="flex items-center justify-between pb-4 border-b border-gray-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Megaphone className="h-5 w-5 text-brand-gold" />
            Announcement Ticker Editor
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Manage the scrolling marquee text items displayed at the top of school portal pages.
          </p>
        </div>
      </div>

      <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-6">
        <div className="bg-yellow-500/5 border border-yellow-500/20 text-yellow-400/90 rounded-lg p-4 text-xs flex gap-2">
          <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-1">How it Displays</p>
            <p>The items scroll continuously in a loop. You can use standard Lucide icon names like <code className="text-white bg-black/40 px-1 py-0.5 rounded">Award</code>, <code className="text-white bg-black/40 px-1 py-0.5 rounded">Sparkles</code>, <code className="text-white bg-black/40 px-1 py-0.5 rounded">Brain</code>, or <code className="text-white bg-black/40 px-1 py-0.5 rounded">Globe</code>.</p>
          </div>
        </div>

        <CardRepeater
          items={tickerData?.items || []}
          onUpdate={handleUpdateItems}
          itemName="Ticker Item"
          newItemTemplate={{ icon: 'Award', text: 'New achievement announced!' }}
          renderItemForm={(item, index, updateField) => (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FieldEditor
                label="Icon Name"
                value={item.icon}
                onChange={(val) => updateField('icon', val)}
                placeholder="e.g. Award, Leaf, Star"
                description="Lucide icon name string"
                className="md:col-span-1"
              />
              <FieldEditor
                label="Ticker Text"
                value={item.text}
                onChange={(val) => updateField('text', val)}
                placeholder="Enter alert or announcement text..."
                description="Message text scrolling in marquee"
                className="md:col-span-3"
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
