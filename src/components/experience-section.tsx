"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import { experience } from "@/data/experience"
import { CheckCircle2 } from "lucide-react"

export default function ExperienceSection() {
  const containerRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  return (
    <section id="experience" ref={containerRef} className="py-32 relative bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-mono font-semibold tracking-widest text-accent uppercase mb-3">
            Career Timeline
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted">
            3+ years architecting high-scale fintech systems, banking infrastructure, and enterprise mobile solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line Background */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />
          
          {/* Vertical Line Foreground (Animated) */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-foreground transform md:-translate-x-1/2 origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-20">
            {experience.map((item) => (
              <div
                key={item.company}
                className="relative flex flex-col md:flex-row items-start md:justify-between w-full"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-background border-2 border-foreground rounded-full transform -translate-x-1.5 md:-translate-x-2 mt-1.5 z-10" />

                {/* Left Side: Role, Company, and Period */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full md:w-[44%] pl-8 md:pl-0 text-left md:text-right"
                >
                  <span className="inline-block text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-surface border border-border text-accent mb-3">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground tracking-tight">{item.role}</h3>
                  <h4 className="text-lg text-muted font-medium mt-0.5 mb-3">{item.company}</h4>
                  <p className="text-sm text-muted leading-relaxed hidden md:block">
                    {item.description}
                  </p>
                </motion.div>

                {/* Right Side: Highlights & Focus Badges */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  className="w-full md:w-[44%] pl-8 md:pl-0 mt-4 md:mt-0"
                >
                  <p className="text-sm text-muted leading-relaxed mb-4 md:hidden">
                    {item.description}
                  </p>

                  <ul className="flex flex-col gap-2.5 mb-6">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/90 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {item.focus.map((focusItem) => (
                      <span
                        key={focusItem}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-background border border-border text-muted"
                      >
                        {focusItem}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
