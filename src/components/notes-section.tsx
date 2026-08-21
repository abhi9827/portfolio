"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { notes } from "@/data/notes"

export default function NotesSection() {
  return (
    <section id="notes" className="py-32 relative bg-surface">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-16">
          Notes & Writing
        </h2>

        <div className="flex flex-col border-t border-border">
          {notes.map((note, idx) => (
            <motion.a
              key={note.title}
              href={note.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group py-8 flex flex-col md:flex-row md:items-center justify-between border-b border-border hover:bg-accent/5 transition-colors -mx-6 px-6 md:-mx-12 md:px-12"
              data-cursor-interactive="true"
            >
              <div className="flex-1">
                <div className="text-sm font-medium text-accent mb-2">{note.date}</div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {note.title}
                </h3>
                <div className="text-muted">{note.readTime}</div>
              </div>
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors relative overflow-hidden">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-300 absolute" />
                <ArrowUpRight className="w-5 h-5 -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 absolute" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
