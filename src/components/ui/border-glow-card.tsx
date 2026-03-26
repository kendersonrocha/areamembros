import { useEffect, useRef, useState } from "react"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"
import { cn } from "@/lib/utils"

interface BorderGlowCardProps {
  children: React.ReactNode
  className?: string
  borderRadius?: number
  glowColor?: string
  glowSize?: number
}

export function BorderGlowCard({
  children,
  className,
  borderRadius = 12,
  glowColor = "rgba(139, 92, 246, 1.0)",
  glowSize = 150,
}: BorderGlowCardProps) {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const [isNearby, setIsNearby] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId: number | null = null
    
    const handleGlobalMouseMove = (e: MouseEvent) => {
      // Throttle com requestAnimationFrame para melhor performance
      if (rafId) return
      
      rafId = requestAnimationFrame(() => {
        if (!cardRef.current) {
          rafId = null
          return
        }
        
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        // Calcula a distância até o card (área de detecção reduzida para 80%)
        const extendedArea = glowSize * 0.8
        const isInExtendedArea = 
          x >= -extendedArea && 
          x <= rect.width + extendedArea &&
          y >= -extendedArea && 
          y <= rect.height + extendedArea
        
        if (isInExtendedArea) {
          mouseX.set(x)
          mouseY.set(y)
          setIsNearby(true)
        } else {
          setIsNearby(false)
        }
        
        rafId = null
      })
    }

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true })
    
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleGlobalMouseMove)
    }
  }, [mouseX, mouseY, glowSize])

  // Gradiente radial nítido e concentrado (como usecurling.com)
  const borderGlow = useMotionTemplate`
    radial-gradient(
      ${glowSize}px circle at ${mouseX}px ${mouseY}px,
      ${glowColor},
      transparent 40%
    )
  `

  return (
    <div
      ref={cardRef}
      className={cn("relative p-[2px]", className)}
      style={{ 
        borderRadius: `${borderRadius}px`,
      }}
    >
      {/* Background da borda base */}
      <div 
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: '#202020',
          zIndex: 0,
        }}
      />
      
      {/* Borda animada com glow - Efeito preciso como usecurling.com */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          background: borderGlow,
          zIndex: 1,
          opacity: isNearby ? 1 : 0,
          willChange: isNearby ? 'opacity, background' : 'auto',
        }}
      />
      
      {/* Conteúdo do card */}
      <div
        className="relative z-10 h-full rounded-[inherit]"
        style={{
          background: 'hsl(var(--background))',
        }}
      >
        {children}
      </div>
    </div>
  )
}

