"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

interface ProjectProps {
  slug: string
  title: string
  category: string
  description: string
  technologies?: string[]
}

export function ProjectCard({ project, index }: { project: ProjectProps, index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const hoverX = useSpring(mouseX, springConfig)
  const hoverY = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const xOffset = useTransform(hoverX, [-200, 200], [-10, 10])
  const yOffset = useTransform(hoverY, [-200, 200], [-10, 10])
  const glareX = useTransform(hoverX, [-200, 200], ["0%", "100%"])
  const glareY = useTransform(hoverY, [-200, 200], ["0%", "100%"])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        href={`/work/${project.slug}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group block relative overflow-hidden rounded-2xl bg-card border border-border transition-colors hover:border-accent p-8 md:p-12"
        data-cursor-interactive="true"
      >
        <motion.div
          style={{ x: xOffset, y: yOffset }}
          className="relative z-10 flex flex-col h-full justify-between gap-12"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted tracking-widest uppercase mb-4">
                {project.category}
              </p>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
                {project.title}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:border-foreground group-hover:text-background">
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              {project.description}
            </p>

            {project.technologies && (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-xs font-medium px-3 py-1 bg-surface border border-border rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Dynamic Glare Effect */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, var(--color-accent-muted) 0%, transparent 60%)`,
            mixBlendMode: "overlay"
          }}
        />
      </Link>
    </motion.div>
  )
}
