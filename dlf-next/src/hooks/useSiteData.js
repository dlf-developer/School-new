'use client'

/**
 * useSiteData.js — Next.js Dynamic Backend Data Bridge
 * 
 * Fetches dynamic CMS data from MongoDB API endpoints:
 *   - /api/sections (global sections)
 *   - /api/schools (branch schools)
 * 
 * Updates are sent directly to the database via PUT requests.
 */

import { useState, useEffect, useCallback } from 'react'
import { schoolsData as defaultSchools, globalData as defaultGlobal } from '../data/siteData'

export function useSiteData() {
  const [globalData, setGlobalData] = useState(defaultGlobal)
  const [schools, setSchools] = useState(defaultSchools)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch live dynamic data from MongoDB API
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      const [secRes, schRes] = await Promise.all([
        fetch('/api/sections', { cache: 'no-store' }),
        fetch('/api/schools', { cache: 'no-store' }),
      ])

      if (secRes.ok) {
        const secJson = await secRes.json()
        if (secJson?.data) {
          setGlobalData(prev => ({ ...prev, ...secJson.data }))
        }
      }

      if (schRes.ok) {
        const schJson = await schRes.json()
        if (schJson?.data) {
          setSchools(prev => ({ ...prev, ...schJson.data }))
        }
      }
    } catch (err) {
      console.warn('Could not fetch from backend API, using cached/static data:', err)
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  /**
   * Save a global section directly to MongoDB via API
   */
  const saveGlobalSection = useCallback(async (sectionKey, data) => {
    // Optimistic UI update
    setGlobalData(prev => ({ ...prev, [sectionKey]: data }))

    try {
      const res = await fetch(`/api/sections/${sectionKey}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      })

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData.error || 'Failed to save section to database')
      }

      const result = await res.json()
      return result
    } catch (err) {
      console.error(`Error saving section ${sectionKey}:`, err)
      throw err
    }
  }, [])

  /**
   * Save a school-specific section directly to MongoDB via API
   */
  const saveSchoolSection = useCallback(async (schoolId, sectionKey, data) => {
    const currentSchool = schools[schoolId] || defaultSchools[schoolId] || {}
    const updatedSchoolData = { ...currentSchool, [sectionKey]: data }

    // Optimistic UI update
    setSchools(prev => ({
      ...prev,
      [schoolId]: updatedSchoolData,
    }))

    try {
      const res = await fetch(`/api/schools/${schoolId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: updatedSchoolData }),
      })

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData.error || 'Failed to save school to database')
      }

      const result = await res.json()
      return result
    } catch (err) {
      console.error(`Error saving school ${schoolId}:`, err)
      throw err
    }
  }, [schools])

  /**
   * Reset a section to baseline defaults
   */
  const resetGlobalSection = useCallback(async (sectionKey) => {
    const defaultData = defaultGlobal[sectionKey]
    if (defaultData !== undefined) {
      await saveGlobalSection(sectionKey, defaultData)
    }
  }, [saveGlobalSection])

  const resetSchoolSection = useCallback(async (schoolId, sectionKey) => {
    const defaultSchool = defaultSchools[schoolId]
    if (defaultSchool && defaultSchool[sectionKey] !== undefined) {
      await saveSchoolSection(schoolId, sectionKey, defaultSchool[sectionKey])
    }
  }, [saveSchoolSection])

  return {
    global: globalData,
    globalData,
    schools,
    isLoading,
    error,
    refresh: fetchData,
    saveGlobalSection,
    saveSchoolSection,
    resetGlobalSection,
    resetSchoolSection,
    saveGlobal: saveGlobalSection,
    saveSchool: saveSchoolSection,
    resetGlobal: resetGlobalSection,
    resetSchool: resetSchoolSection,
    save: saveGlobalSection,
    reset: resetGlobalSection,
  }
}

