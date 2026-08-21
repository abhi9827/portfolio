"use client"

import { motion } from "framer-motion"
import { skillCategories } from "@/data/skills"

export default function SkillsSection() {
  return (
    <div className="mt-24 pt-24 border-t border-border/50">
      <h3 className="text-3xl font-medium mb-16 tracking-tight text-foreground">
        Technical Arsenal
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h4 className="text-sm font-semibold tracking-widest text-muted uppercase mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-border"></span>
              {category.title}
            </h4>
            <div className="flex flex-col gap-4">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="group relative flex flex-col"
                  data-cursor-interactive="true"
                >
                  <span className="text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden translate-y-2 group-hover:translate-y-0">
                    {skill.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
