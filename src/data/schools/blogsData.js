// Unified Blog Data Gateway with Strict Branch Isolation
import { dlf_greater_noida_blogs, dlf_greater_noida_categories } from './dlws/blogsData.js'
import { dlf_sahibabad_blogs, dlf_sahibabad_categories } from './dlps/blogsData.js'

export const schoolBlogsMap = {
  'dlf-greater-noida': dlf_greater_noida_blogs,
  'dlf-sahibabad': dlf_sahibabad_blogs,
}

export const schoolCategoriesMap = {
  'dlf-greater-noida': dlf_greater_noida_categories,
  'dlf-sahibabad': dlf_sahibabad_categories,
}

/**
 * Returns strictly isolated blogs for a school branch
 */
export function getSchoolBlogs(schoolId) {
  return schoolBlogsMap[schoolId] || []
}

/**
 * Returns strictly isolated categories for a school branch
 */
export function getSchoolCategories(schoolId) {
  return schoolCategoriesMap[schoolId] || ['All Insights']
}

/**
 * Retrieves a single blog by slug for a specific school
 */
export function getBlogBySlug(schoolId, slug) {
  const blogs = getSchoolBlogs(schoolId)
  return blogs.find((b) => b.slug === slug || b.id === slug) || null
}

/**
 * Retrieves related blogs within the same branch
 */
export function getRelatedBlogs(schoolId, currentSlug, limit = 3) {
  const blogs = getSchoolBlogs(schoolId)
  const current = blogs.find((b) => b.slug === currentSlug)
  if (!current) return blogs.slice(0, limit)
  
  // Prefer same category first, then others
  const sameCat = blogs.filter((b) => b.slug !== currentSlug && b.category === current.category)
  const otherCat = blogs.filter((b) => b.slug !== currentSlug && b.category !== current.category)
  return [...sameCat, ...otherCat].slice(0, limit)
}

/**
 * Retrieves the featured / highlight blog for a branch
 */
export function getFeaturedBlog(schoolId) {
  const blogs = getSchoolBlogs(schoolId)
  return blogs[0] || null
}
