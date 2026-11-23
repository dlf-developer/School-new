import React from 'react'
import { FileCheck, Printer } from 'lucide-react'

export default function AcademicGazetteModal({
  isOpen,
  onClose,
  currentSchool,
  resultsData = {},
  stats = [],
  isDLWS = false,
  colors = {},
}) {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  const toppersList = !isDLWS ? resultsData.classXII?.toppers : resultsData.classX?.toppers

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <FileCheck className={`w-6 h-6 ${colors.primaryText || 'text-brand-greenDeep'}`} />
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-charcoal">
                {currentSchool?.name} — Official Results Gazette
              </h3>
              <p className="text-xs text-brand-muted font-inter">
                {resultsData.affiliation || 'Board Examinations'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 text-xs font-inter text-brand-charcoal">
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-2">
            <div className="flex justify-between font-bold">
              <span>Overall Pass Percentage:</span>
              <span className="text-green-600">100% (Zero Compartments)</span>
            </div>
            <div className="flex justify-between">
              <span>Cohort Average Aggregate:</span>
              <span className="font-bold">{stats[3]?.value || '88.4%'}</span>
            </div>
            <div className="flex justify-between">
              <span>Highest Aggregate Score:</span>
              <span className="font-bold text-brand-gold">{stats[1]?.value || '98.8%'}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Students Scoring &gt;90%:</span>
              <span className="font-bold">{stats[2]?.value || '54%'}</span>
            </div>
          </div>

          {toppersList && toppersList.length > 0 && (
            <div className="space-y-2">
              <h5 className="font-serif font-bold text-sm text-brand-charcoal">Merit List Summary</h5>
              <ul className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
                {toppersList.map((t, idx) => (
                  <li key={idx} className="p-3 flex items-center justify-between hover:bg-gray-50">
                    <div>
                      <span className="font-bold block">{t.name}</span>
                      <span className="text-[10px] text-brand-muted">
                        {t.stream} &bull; {t.achievement}
                      </span>
                    </div>
                    <span className={`font-serif font-extrabold text-sm ${colors.primaryText || 'text-brand-greenDeep'}`}>
                      {t.score}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={handlePrint}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${
              colors.primaryBg || 'bg-brand-greenDeep'
            } text-white text-xs font-bold hover:${colors.vibrantBg || 'bg-brand-greenVibrant'} transition-colors cursor-pointer`}
          >
            <Printer className="w-4 h-4" />
            Print / Save PDF
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-charcoal text-xs font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
