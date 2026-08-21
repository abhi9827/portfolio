"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef, ReactNode, MouseEvent } from "react"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({ children, className = "", strength = 20 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    // Calculate distance from center, scale by strength
    mouseX.set(((e.clientX - centerX) / width) * strength)
    mouseY.set(((e.clientY - centerY) / height) * strength)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      style={{ x, y }}
      className={className}
      data-cursor-interactive="true"
    >
      {children}
    </motion.div>
  )
}
