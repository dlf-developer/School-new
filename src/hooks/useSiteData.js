/**
 * useSiteData.js — DLF Schools Data Bridge
 *
 * This hook is the ONLY way components should access dynamic content.
 *
 * How it works:
 *  1. Loads the default data from siteData.js (the static baseline).
 *  2. Checks localStorage for any admin overrides (saved by the admin panel).
 *  3. Deep-merges overrides on top of defaults and returns the result.
 *  4. Exposes a `saveSection(sectionKey, data)` function for the admin panel
 *     to write changes back to localStorage.
 *  5. Exposes a `resetSection(sectionKey)` function to clear admin overrides.
 *
 * Usage in any component:
 *   import { useSiteData } from '../hooks/useSiteData'
 *   const { global, schools, save, reset } = useSiteData()
 *   const tickers = global.ticker.items
 *   const school  = schools['dlf-sahibabad']
 *
 * Usage in admin panel:
 *   const { global, save, reset } = useSiteData()
 *   save('ticker', { items: [...updatedItems] })
 */

import { useState, useCallback } from 'react'
import { schoolsData as defaultSchools, globalData as defaultGlobal } from '../data/siteData'

const STORAGE_KEY_GLOBAL  = 'dlf_admin_global'
const STORAGE_KEY_SCHOOLS = 'dlf_admin_schools'

// Deep merge: target is the default, source is the override
function deepMerge(target, source) {
  if (!source || typeof source !== 'object') return target
  const result = { ...target }
  for (const key of Object.keys(source)) {
    if (
      source[key] !== null &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      result[key] = deepMerge(target[key] || {}, source[key])
    } else {
      result[key] = source[key]
    }
  }
  return result
}

function loadFromStorage(key, defaults) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return defaults
    const parsed = JSON.parse(raw)
    return deepMerge(defaults, parsed)
  } catch {
    return defaults
  }
}

export function useSiteData() {
  const [globalData, setGlobalData] = useState(() =>
    loadFromStorage(STORAGE_KEY_GLOBAL, defaultGlobal)
  )
  const [schools, setSchools] = useState(() =>
    loadFromStorage(STORAGE_KEY_SCHOOLS, defaultSchools)
  )

  /**
   * Save a global section override to localStorage and update state.
   * @param {string} sectionKey - e.g. 'ticker', 'stats', 'testimonials'
   * @param {object} data - the updated section data
   */
  const saveGlobalSection = useCallback((sectionKey, data) => {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_GLOBAL) || '{}')
    const updated = { ...existing, [sectionKey]: data }
    localStorage.setItem(STORAGE_KEY_GLOBAL, JSON.stringify(updated))
    setGlobalData(prev => ({ ...prev, [sectionKey]: data }))
  }, [])

  /**
   * Save a school-specific section override.
   * @param {string} schoolId - e.g. 'dlf-sahibabad'
   * @param {string} sectionKey - e.g. 'hero', 'admissions'
   * @param {object} data - updated section
   */
  const saveSchoolSection = useCallback((schoolId, sectionKey, data) => {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_SCHOOLS) || '{}')
    const updatedSchool = { ...(existing[schoolId] || {}), [sectionKey]: data }
    const updated = { ...existing, [schoolId]: updatedSchool }
    localStorage.setItem(STORAGE_KEY_SCHOOLS, JSON.stringify(updated))
    setSchools(prev => ({
      ...prev,
      [schoolId]: { ...prev[schoolId], [sectionKey]: data }
    }))
  }, [])

  /**
   * Reset a global section to its siteData.js defaults.
   */
  const resetGlobalSection = useCallback((sectionKey) => {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_GLOBAL) || '{}')
    delete existing[sectionKey]
    localStorage.setItem(STORAGE_KEY_GLOBAL, JSON.stringify(existing))
    setGlobalData(prev => ({ ...prev, [sectionKey]: defaultGlobal[sectionKey] }))
  }, [])

  /**
   * Reset a school section to its siteData.js defaults.
   */
  const resetSchoolSection = useCallback((schoolId, sectionKey) => {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_SCHOOLS) || '{}')
    if (existing[schoolId]) {
      delete existing[schoolId][sectionKey]
      localStorage.setItem(STORAGE_KEY_SCHOOLS, JSON.stringify(existing))
    }
    setSchools(prev => ({
      ...prev,
      [schoolId]: { ...prev[schoolId], [sectionKey]: defaultSchools[schoolId]?.[sectionKey] }
    }))
  }, [])

  /**
   * Reset ALL admin overrides — restore everything to siteData.js defaults.
   */
  const resetAll = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY_GLOBAL)
    localStorage.removeItem(STORAGE_KEY_SCHOOLS)
    setGlobalData(defaultGlobal)
    setSchools(defaultSchools)
  }, [])

  return {
    global: globalData,
    schools,
    saveGlobal: saveGlobalSection,
    saveSchool: saveSchoolSection,
    resetGlobal: resetGlobalSection,
    resetSchool: resetSchoolSection,
    resetAll
  }
}
