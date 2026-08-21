"use client"

import { motion } from "framer-motion"
import { Code2, Sparkles } from "lucide-react"
import { labItems } from "@/data/lab"
import { LabInteractiveCard } from "./lab-interactive-card"

export default function LabSection() {
  return (
    <section id="lab" className="py-32 relative bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background text-xs font-mono text-muted mb-4">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>TESTBENCH &amp; NATIVE UTILITIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
              Engineering Lab
            </h2>
            <p className="text-xl text-muted">
              I don&apos;t just build apps. <br className="hidden md:block" />
              I build tools, native bridge plugins, and solve architecture problems.
            </p>
          </div>
          <a
            href="https://github.com/abhi9827"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors py-2 px-4 rounded-full border border-border bg-background"
            data-cursor-interactive="true"
          >
            <Code2 className="w-4 h-4" />
            View Open Source GitHub &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <LabInteractiveCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
