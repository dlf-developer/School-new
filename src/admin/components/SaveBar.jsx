import React from 'react'
import { Save, RotateCcw } from 'lucide-react'

export default function SaveBar({ onSave, onReset, isDirty = true, isSaving = false }) {
  return (
    <div className="fixed bottom-0 right-0 left-0 md:left-64 bg-[#0a0a0f]/80 backdrop-blur-md border-t border-brand-gold/20 py-4 px-6 flex items-center justify-between z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <div className="text-sm text-gray-400">
        {isDirty ? (
          <span className="flex items-center gap-2 text-brand-gold">
            <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse"></span>
            Unsaved changes detected
          </span>
        ) : (
          <span className="text-gray-500">All changes saved to session</span>
        )}
      </div>
      
      <div className="flex gap-4">
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 active:scale-95 transition-all text-sm font-medium"
          type="button"
        >
          <RotateCcw className="h-4 w-4" />
          Reset Section Defaults
        </button>
        
        <button
          onClick={onSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-brand-gold to-yellow-600 text-black font-semibold hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(197,155,39,0.3)] disabled:opacity-50 text-sm"
          type="button"
        >
          <Save className="h-4 w-4" />
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  )
}
