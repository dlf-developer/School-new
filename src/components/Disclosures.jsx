import React from 'react'
import { useParams } from 'react-router-dom'
import { schoolsData } from '../data/schoolsData'
import { FileText, Download } from 'lucide-react'

export default function Disclosures() {
  const { schoolId } = useParams()
  const activeBranch = schoolId && schoolsData[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schoolsData[activeBranch]
  const theme = currentSchool.theme

  const documents = [
    { title: 'Affiliation Certificate', code: 'CBSE-AFF-2026' },
    { title: 'Trust / Registration Certificate', code: 'TRUST-REG-98' },
    { title: 'No Objection Certificate (NOC)', code: 'NOC-UP-GOVT' },
    { title: 'Recognition Certificate', code: 'RECOG-CERT-112' },
    { title: 'Building Safety Certificate', code: 'BLDG-SAFE-2025' },
    { title: 'Fire Safety Certificate', code: 'FIRE-SAFE-2026' },
    { title: 'Water & Sanitation Certificate', code: 'WATER-SAN-25' }
  ]

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        <div className="bg-white/85 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 sm:p-12 shadow-xl space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Compliance & Transparency</span>
          <h2 className={`font-serif text-4xl sm:text-5xl font-bold text-${theme.primary}`}>CBSE Mandated Disclosures</h2>
          <div className={`w-12 h-[2px] bg-${theme.accent} mx-auto`}></div>
          <p className="text-sm text-brand-muted leading-relaxed font-inter">
            Required statutory information and certificates corresponding to {currentSchool.name}.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-brand-greenDeep/5 shadow-xl overflow-hidden mt-8">
          <div className={`p-6 sm:p-8 bg-gradient-to-br from-${theme.primary} to-${theme.vibrant} text-white`}>
            <h3 className="font-serif text-xl font-bold">Mandatory Public Disclosure Documents</h3>
            <p className="text-xs text-white/80 mt-1">Select and download statutory compliance certificates in PDF format.</p>
          </div>
          <div className="divide-y divide-brand-greenDeep/5">
            {documents.map((doc) => (
              <div key={doc.code} className="flex items-center justify-between p-4 sm:p-6 hover:bg-brand-bg/40 transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className={`w-5 h-5 text-${theme.primary}`} />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal">{doc.title}</h4>
                    <p className="text-[10px] text-brand-muted uppercase tracking-wider mt-0.5">{doc.code}</p>
                  </div>
                </div>
                <button className={`p-2.5 rounded-xl border border-${theme.primary}/10 text-${theme.primary} hover:bg-${theme.primary} hover:text-white transition-all duration-300`}>
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
