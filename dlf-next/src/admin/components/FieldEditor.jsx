import React from 'react'

export default function FieldEditor({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  options = [], // For type === 'select'
  rows = 4, // For type === 'textarea'
  className = '',
  description = ''
}) {
  const baseInputClass = "w-full bg-[#12121a]/90 text-white border border-gray-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/40 transition-all placeholder-gray-600"

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-xs font-semibold text-gray-300 tracking-wider uppercase">
          {label}
        </label>
      )}
      {description && (
        <span className="text-xs text-gray-500 mb-1">{description}</span>
      )}

      {type === 'textarea' ? (
        <textarea
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={baseInputClass}
        />
      ) : type === 'select' ? (
        <select
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClass}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#12121a] text-white">
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === 'number' ? (
        <input
          type="number"
          value={value === undefined || value === null ? '' : value}
          onChange={(e) => {
            const val = e.target.value
            onChange(val === '' ? 0 : Number(val))
          }}
          placeholder={placeholder}
          className={baseInputClass}
        />
      ) : (
        <input
          type={type}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={baseInputClass}
        />
      )}
    </div>
  )
}
