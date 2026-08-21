"use client"

import { ProjectCard } from "./project-card"

import { projects } from "@/data/projects"

export default function WorkSection() {
  return (
    <section id="work" className="py-32 relative bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-medium mb-24 tracking-tight text-foreground">
          Selected Work
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
