import { projects } from "@/data/projects"
import { ArrowLeft, CheckCircle2, Shield, Sparkles, Layers, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-12 text-sm font-medium"
          data-cursor-interactive="true"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-widest text-accent uppercase bg-surface border border-border">
              {project.category}
            </span>
            {project.metrics && (
              <span className="px-3 py-1 rounded-full text-xs font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20">
                {project.metrics}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-muted leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Project Technical Highlights Banner */}
        <div className="p-8 rounded-2xl bg-surface border border-border mb-16 shadow-xs">
          <div className="flex items-center gap-2 text-sm font-mono text-foreground font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>CORE ARCHITECTURAL DELIVERABLES &amp; IMPACT</span>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights?.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Grid */}
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
            Technologies &amp; Architecture Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-surface border border-border text-sm font-mono text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Deep Dive Section */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <hr className="border-border my-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="p-6 rounded-xl bg-surface border border-border">
              <div className="flex items-center gap-2 text-foreground font-semibold mb-3">
                <Shield className="w-4 h-4 text-accent" />
                <span>Security &amp; Resilience</span>
              </div>
              <p className="text-sm text-muted leading-relaxed m-0">
                Engineered with strict zero-trust security standards, biometric authentication, device binding, and encrypted local storage to safeguard sensitive financial and corporate workflows.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-border">
              <div className="flex items-center gap-2 text-foreground font-semibold mb-3">
                <Layers className="w-4 h-4 text-accent" />
                <span>Clean Architecture</span>
              </div>
              <p className="text-sm text-muted leading-relaxed m-0">
                Separated domain, data, and presentation layers using reactive state management (Riverpod/BLoC), ensuring maximum testability, modularity, and rapid feature development.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-12 border-t border-border mt-12">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:scale-105 transition-all no-underline"
              data-cursor-interactive="true"
            >
              <span>Discuss Similar Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
