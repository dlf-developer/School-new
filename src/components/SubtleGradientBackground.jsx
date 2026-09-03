import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * SubtleGradientBackground
 * 
 * An elegant ambient background component that creates a soft, living, and visible
 * yet non-intrusive gradient atmosphere across the site.
 * 
 * Uniquely customized for each school instance:
 * - DLPS Sahibabad: Deep emerald green, vibrant sage & warm champagne gold
 * - DLWS Greater Noida: Royal purple, orchid violet & radiant sunset gold
 * - Darbari Lal Foundation: Slate navy, heritage gold & soft forest green
 */
export default function SubtleGradientBackground({
  instance = 'auto',
  className = '',
  fixed = true
}) {
  const location = useLocation()

  // 1. Resolve instance (auto-detect from route or prop)
  const resolvedInstance = useMemo(() => {
    if (instance !== 'auto') return instance

    const path = location.pathname
    if (path.includes('dlf-greater-noida')) return 'dlf-greater-noida'
    if (path.includes('dlf-sahibabad')) return 'dlf-sahibabad'
    return 'group'
  }, [instance, location.pathname])

  // 2. Curate clearly visible, refined gradients per instance
  const themeConfig = useMemo(() => {
    switch (resolvedInstance) {
      case 'dlf-greater-noida':
        // Royal Purple & Sunset Gold theme for Greater Noida
        return {
          meshGradient: `
            radial-gradient(at 95% 5%, rgba(70, 54, 118, 0.18) 0px, transparent 55%),
            radial-gradient(at 5% 35%, rgba(197, 155, 39, 0.15) 0px, transparent 50%),
            radial-gradient(at 85% 75%, rgba(94, 44, 132, 0.14) 0px, transparent 55%),
            radial-gradient(at 15% 90%, rgba(70, 54, 118, 0.14) 0px, transparent 50%)
          `,
          blob1: 'bg-[#463676]/20', // Royal Purple
          blob2: 'bg-[#5E2C84]/16', // Orchid Violet
          blob3: 'bg-[#C59B27]/18', // Warm Gold
        }
      case 'dlf-sahibabad':
        // Deep Green & Champagne Gold theme for Sahibabad
        return {
          meshGradient: `
            radial-gradient(at 5% 5%, rgba(43, 81, 38, 0.18) 0px, transparent 55%),
            radial-gradient(at 95% 30%, rgba(197, 155, 39, 0.16) 0px, transparent 50%),
            radial-gradient(at 10% 75%, rgba(0, 158, 73, 0.14) 0px, transparent 50%),
            radial-gradient(at 85% 90%, rgba(43, 81, 38, 0.15) 0px, transparent 55%)
          `,
          blob1: 'bg-[#2B5126]/20', // Deep Forest Green
          blob2: 'bg-[#009E49]/15', // Vibrant Sage Green
          blob3: 'bg-[#C59B27]/18', // Champagne Gold
        }
      case 'group':
      default:
        // Slate & Heritage Gold theme for Master Darbari Lal Foundation site
        return {
          meshGradient: `
            radial-gradient(at 50% 0%, rgba(197, 155, 39, 0.17) 0px, transparent 60%),
            radial-gradient(at 8% 40%, rgba(15, 23, 42, 0.12) 0px, transparent 50%),
            radial-gradient(at 92% 65%, rgba(43, 81, 38, 0.13) 0px, transparent 50%),
            radial-gradient(at 50% 95%, rgba(197, 155, 39, 0.14) 0px, transparent 55%)
          `,
          blob1: 'bg-[#C59B27]/18', // Heritage Gold
          blob2: 'bg-[#0F172A]/14', // Deep Slate
          blob3: 'bg-[#2B5126]/14', // Subtle Forest Accent
        }
    }
  }, [resolvedInstance])

  return (
    <div 
      aria-hidden="true"
      className={`${fixed ? 'fixed' : 'absolute'} inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      {/* 1. Base Multi-Point Mesh Gradient Wash */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-in-out" 
        style={{ backgroundImage: themeConfig.meshGradient }} 
      />

      {/* 2. Floating Organic Ambient Blobs */}
      {/* Blob 1: Top Floating Ambient Orb */}
      <div 
        className={`absolute rounded-full blur-[110px] transform-gpu ${themeConfig.blob1} -top-24 -left-24 w-[38rem] h-[38rem]`}
        style={{ animation: 'floatSlow 20s ease-in-out infinite alternate' }}
      />

      {/* Blob 2: Mid-Right Floating Ambient Orb */}
      <div 
        className={`absolute rounded-full blur-[120px] transform-gpu ${themeConfig.blob2} top-1/3 -right-32 w-[36rem] h-[36rem]`}
        style={{ animation: 'floatSlow 24s ease-in-out infinite alternate-reverse' }}
      />

      {/* Blob 3: Bottom Floating Accent Orb */}
      <div 
        className={`absolute rounded-full blur-[100px] transform-gpu ${themeConfig.blob3} -bottom-24 left-1/4 w-[34rem] h-[34rem]`}
        style={{ animation: 'floatSlow 18s ease-in-out infinite alternate' }}
      />

      {/* 3. Subtle Editorial Dot Grain Texture */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
    </div>
  )
}
