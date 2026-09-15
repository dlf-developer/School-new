import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { schoolsData } from '../data/schoolsData'

export default function InteractiveBackground() {
  const canvasRef = useRef(null)
  const location = useLocation()

  // Detect active school route in render to pass to animation refs
  const match = location.pathname.match(/^\/school\/([^/]+)/)
  const schoolId = match && schoolsData[match[1]] ? match[1] : null

  // Maintain refs for active school to dynamically shift colors inside the loop without resetting positions
  const schoolIdRef = useRef(schoolId)
  
  useEffect(() => {
    schoolIdRef.current = schoolId
  }, [schoolId])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = window.innerWidth
    let height = window.innerHeight

    // Mouse state tracking
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
      lastX: width / 2,
      lastY: height / 2,
      speed: 0,
      radius: 120
    }

    // Scroll state tracking
    const scroll = {
      y: window.scrollY,
      targetY: window.scrollY,
      lastY: window.scrollY
    }

    let sparks = []

    // High DPI Canvas Scaling setup
    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse movement listeners
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      mouse.active = true
      
      const dx = mouse.targetX - mouse.lastX
      const dy = mouse.targetY - mouse.lastY
      mouse.speed = Math.sqrt(dx * dx + dy * dy)
      
      mouse.lastX = mouse.targetX
      mouse.lastY = mouse.targetY
    }

    const handleMouseLeave = () => {
      mouse.active = false
      mouse.speed = 0
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    const handleScroll = () => {
      scroll.targetY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Organic blobs
    const blobs = [
      {
        baseX: width * 0.2,
        baseY: height * 0.3,
        x: width * 0.2,
        y: height * 0.3,
        radius: Math.min(width, height) * 0.4,
        baseColor: { r: 43, g: 81, b: 38 }, // Deep Green
        colorStr: 'rgba(43, 81, 38, 0.16)',
        speedX: 0.0004,
        speedY: 0.0005,
        phiX: 0,
        phiY: Math.PI / 4,
        parallax: 0.15
      },
      {
        baseX: width * 0.8,
        baseY: height * 0.6,
        x: width * 0.8,
        y: height * 0.6,
        radius: Math.min(width, height) * 0.45,
        baseColor: { r: 197, g: 155, b: 39 }, // Brand Gold (second blob)
        colorStr: 'rgba(197, 155, 39, 0.10)',
        speedX: 0.0003,
        speedY: 0.0004,
        phiX: Math.PI / 2,
        phiY: 0,
        parallax: 0.2
      },
      {
        baseX: width * 0.4,
        baseY: height * 0.8,
        x: width * 0.4,
        y: height * 0.8,
        radius: Math.min(width, height) * 0.35,
        baseColor: { r: 197, g: 155, b: 39 }, // Brand Gold
        colorStr: 'rgba(197, 155, 39, 0.14)',
        speedX: 0.0005,
        speedY: 0.0003,
        phiX: Math.PI,
        phiY: Math.PI / 3,
        parallax: 0.1
      }
    ]

    const gridSpacing = 40
    let time = 0
    const nodeSparkCooldowns = {}

    // Interpolation utility for smooth transitions
    const lerpVal = (start, end, amt) => (1 - amt) * start + amt * end

    const spawnSparks = (x, y, count = 4, activeId) => {
      // Pick colors based on active branch
      const goldColors = [
        'rgba(197, 155, 39, 0.85)',
        'rgba(230, 184, 60, 0.9)',
        'rgba(255, 220, 100, 0.9)'
      ]
      const greenColors = [
        'rgba(43, 81, 38, 0.85)',
        'rgba(0, 158, 73, 0.85)',
        'rgba(100, 220, 140, 0.9)'
      ]
      const purpleColors = [
        'rgba(70, 54, 118, 0.85)',
        'rgba(94, 44, 132, 0.85)',
        'rgba(180, 120, 220, 0.9)'
      ]

      let colors = [...goldColors]
      if (activeId === 'dlf-sahibabad') {
        colors = [...goldColors, ...greenColors]
      } else if (activeId === 'dlf-greater-noida') {
        colors = [...goldColors, ...greenColors]
      }

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = 0.5 + Math.random() * 2.2
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4,
          size: 1 + Math.random() * 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1.0,
          decay: 0.02 + Math.random() * 0.025
        })
      }
    }

    // Dynamic state trackers inside the loop
    const dynamicState = {
      // Target opacities for blobs based on active school branch
      greenBlobTargetOpacity: 0.16,
      goldBlob2TargetOpacity: 0.10,
      goldBlobTargetOpacity: 0.14,
      
      // Interpolated values
      greenBlobOpacity: 0.16,
      goldBlob2Opacity: 0.10,
      goldBlobOpacity: 0.14,

      // Grid line base color configuration
      lineColor: { r: 43, g: 81, b: 38 } // default green
    }

    const animate = () => {
      time += 1

      const activeId = schoolIdRef.current

      // 1. Dynamic Theme Shifting Calculations
      let colorGreen = '43, 81, 38'
      let colorGold2 = '197, 155, 39'

      // Set targets depending on which school is active
      if (activeId === 'dlf-sahibabad') {
        dynamicState.greenBlobTargetOpacity = 0.22 // Boost Green
        dynamicState.goldBlob2TargetOpacity = 0.06 // Dim Gold2
        dynamicState.goldBlobTargetOpacity = 0.16   // Keep Gold active
        
        // Lerp grid line color to green
        dynamicState.lineColor.r = lerpVal(dynamicState.lineColor.r, 43, 0.05)
        dynamicState.lineColor.g = lerpVal(dynamicState.lineColor.g, 81, 0.05)
        dynamicState.lineColor.b = lerpVal(dynamicState.lineColor.b, 38, 0.05)
      } else if (activeId === 'dlf-greater-noida') {
        dynamicState.greenBlobTargetOpacity = 0.12 // Moderate Green
        dynamicState.goldBlob2TargetOpacity = 0.18 // Boost Gold2
        dynamicState.goldBlobTargetOpacity = 0.16   // Keep Gold active
        
        // Lerp grid line color to gold
        dynamicState.lineColor.r = lerpVal(dynamicState.lineColor.r, 197, 0.05)
        dynamicState.lineColor.g = lerpVal(dynamicState.lineColor.g, 155, 0.05)
        dynamicState.lineColor.b = lerpVal(dynamicState.lineColor.b, 39, 0.05)
      } else {
        // Portal level / common pages: Green & Gold master theme
        dynamicState.greenBlobTargetOpacity = 0.18 // Boost Green
        dynamicState.goldBlob2TargetOpacity = 0.14 // Active Gold2
        dynamicState.goldBlobTargetOpacity = 0.12   // Keep Gold active
        
        // On master page: deep green grid lines
        colorGreen = '43, 81, 38'
        colorGold2 = '197, 155, 39'

        // Lerp grid line color to soft green
        dynamicState.lineColor.r = lerpVal(dynamicState.lineColor.r, 43, 0.05)
        dynamicState.lineColor.g = lerpVal(dynamicState.lineColor.g, 81, 0.05)
        dynamicState.lineColor.b = lerpVal(dynamicState.lineColor.b, 38, 0.05)
      }

      // Smoothly lerp the actual opacity values
      dynamicState.greenBlobOpacity = lerpVal(dynamicState.greenBlobOpacity, dynamicState.greenBlobTargetOpacity, 0.03)
      dynamicState.goldBlob2Opacity = lerpVal(dynamicState.goldBlob2Opacity, dynamicState.goldBlob2TargetOpacity, 0.03)
      dynamicState.goldBlobOpacity = lerpVal(dynamicState.goldBlobOpacity, dynamicState.goldBlobTargetOpacity, 0.03)

      // Apply dynamic colors to blobs object
      blobs[0].colorStr = `rgba(${colorGreen}, ${dynamicState.greenBlobOpacity})`
      blobs[1].colorStr = `rgba(${colorGold2}, ${dynamicState.goldBlob2Opacity})`
      blobs[2].colorStr = `rgba(197, 155, 39, ${dynamicState.goldBlobOpacity})`

      // 2. Update Scroll & Mouse
      scroll.y += (scroll.targetY - scroll.y) * 0.1
      
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12
        mouse.y += (mouse.targetY - mouse.y) * 0.12
      } else {
        mouse.x += (width / 2 - mouse.x) * 0.02
        mouse.y += (height / 2 - mouse.y) * 0.02
        mouse.speed *= 0.9
      }

      // Clear Canvas
      ctx.clearRect(0, 0, width, height)

      // 3. Draw Brand Color Blobs
      ctx.globalCompositeOperation = 'multiply'
      blobs.forEach((blob) => {
        const driftX = Math.sin(time * blob.speedX + blob.phiX) * 60
        const driftY = Math.cos(time * blob.speedY + blob.phiY) * 60
        const scrollOffset = -scroll.y * blob.parallax

        blob.x = Math.max(0, Math.min(width, blob.baseX + driftX))
        blob.y = blob.baseY + driftY + scrollOffset

        const grad = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        )
        grad.addColorStop(0, blob.colorStr)
        grad.addColorStop(1, 'rgba(250, 248, 245, 0)')

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalCompositeOperation = 'source-over'

      // 4. Generate & Draw Grid Squares
      const cols = Math.ceil(width / gridSpacing) + 2
      const rows = Math.ceil(height / gridSpacing) + 2
      const grid = []

      for (let r = 0; r < rows; r++) {
        grid[r] = []
        for (let c = 0; c < cols; c++) {
          const x = (c - 1) * gridSpacing
          const y = (r - 1) * gridSpacing - (scroll.y * 0.05) % gridSpacing
          grid[r][c] = { x, y }
        }
      }

      // Draw Grid Lines (with reactive color values)
      ctx.lineWidth = 0.75
      const lineR = Math.round(dynamicState.lineColor.r)
      const lineG = Math.round(dynamicState.lineColor.g)
      const lineB = Math.round(dynamicState.lineColor.b)
      ctx.strokeStyle = `rgba(${lineR}, ${lineG}, ${lineB}, 0.12)`

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const node = grid[r][c]

          if (c < cols - 1) {
            const rightNode = grid[r][c + 1]
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(rightNode.x, rightNode.y)
            ctx.stroke()
          }

          if (r < rows - 1) {
            const downNode = grid[r + 1][c]
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(downNode.x, downNode.y)
            ctx.stroke()
          }
        }
      }

      // 5. Sparkling Coordinates (Grid Intersections)
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const node = grid[r][c]

          const dx = node.x - mouse.x
          const dy = node.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          const twinkleSpeed = 0.04
          const wave = Math.sin(time * twinkleSpeed + c * 0.8 + r * 1.2)
          let alpha = 0.12 + wave * 0.08
          let starSize = 1.8

          const inRange = dist < mouse.radius
          if (mouse.active && inRange) {
            const intensity = (1 - dist / mouse.radius) ** 1.5
            alpha = Math.max(alpha, intensity * 0.85)
            starSize = starSize + intensity * 3.5

            if (dist < 28 && mouse.speed > 1.5) {
              const cooldownKey = `${c},${r}`
              const lastSparked = nodeSparkCooldowns[cooldownKey] || 0
              if (time - lastSparked > 12) {
                spawnSparks(node.x, node.y, 3 + Math.floor(Math.random() * 3), activeId)
                nodeSparkCooldowns[cooldownKey] = time
              }
            }
          }

          if (alpha > 0.02) {
            // Stars sparkle in matching branch highlights
            if (activeId === 'dlf-greater-noida') {
              ctx.strokeStyle = `rgba(197, 155, 39, ${alpha})` // gold star
            } else {
              ctx.strokeStyle = `rgba(197, 155, 39, ${alpha})` // gold star
            }
            
            ctx.lineWidth = 1.0
            
            ctx.beginPath()
            ctx.moveTo(node.x - starSize, node.y)
            ctx.lineTo(node.x + starSize, node.y)
            ctx.stroke()

            ctx.beginPath()
            ctx.moveTo(node.x, node.y - starSize)
            ctx.lineTo(node.x, node.y + starSize)
            ctx.stroke()

            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
            ctx.beginPath()
            ctx.arc(node.x, node.y, Math.max(0.6, starSize * 0.3), 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      // 6. Update & Draw Spark Particles
      sparks = sparks.filter((spark) => {
        spark.x += spark.vx
        spark.y += spark.vy
        
        spark.vx *= 0.95
        spark.vy *= 0.95
        spark.life -= spark.decay

        if (spark.life <= 0) return false

        ctx.strokeStyle = spark.color
        ctx.lineWidth = spark.size
        ctx.globalAlpha = spark.life
        
        ctx.beginPath()
        ctx.moveTo(spark.x, spark.y)
        ctx.lineTo(spark.x - spark.vx * 1.5, spark.y - spark.vy * 1.5)
        ctx.stroke()

        ctx.globalAlpha = 1.0
        return true
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
      style={{ mixBlendMode: 'multiply' }}
    />
  )
}
