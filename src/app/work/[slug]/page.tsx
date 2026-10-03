import { projects } from "@/data/projects"
import { ArrowLeft, CheckCircle2, Shield, Sparkles, Layers, ArrowUpRight, Terminal, BookOpen, Smartphone } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import AdBanner from "@/components/AdBanner"

import { Metadata } from "next"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    return {
      title: "Project Not Found | Abhishek Lamichhane",
    }
  }

  return {
    title: `${project.title} | Abhishek Lamichhane`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Abhishek Lamichhane`,
      description: project.description,
      url: `https://abhisheklamichhane.me/work/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Abhishek Lamichhane`,
      description: project.description,
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  const isContactPicker = project.slug === "advanced-native-contact-picker"

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

        {/* AdBanner placement 1 */}
        <div className="py-6">
          <AdBanner dataAdSlot="1000000001" dataAdFormat="auto" dataFullWidthResponsive={true} />
        </div>

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

        {/* AdBanner placement 2 */}
        <div className="py-8">
          <AdBanner dataAdSlot="1000000002" dataAdFormat="auto" dataFullWidthResponsive={true} />
        </div>

        {/* Project Technical Highlights Banner */}
        <div className="p-8 rounded-2xl bg-surface border border-border mb-16 shadow-xs">
          <div className="flex items-center gap-2 text-sm font-mono text-foreground font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>CORE ARCHITECTURAL FEATURES &amp; CAPABILITIES</span>
          </div>

          <ul className="flex flex-col gap-3.5">
            {project.highlights?.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AdBanner placement 3 */}
        <div className="py-8">
          <AdBanner dataAdSlot="1000000003" dataAdFormat="auto" dataFullWidthResponsive={true} />
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

        {/* AdBanner placement 4 */}
        <div className="py-8">
          <AdBanner dataAdSlot="1000000004" dataAdFormat="auto" dataFullWidthResponsive={true} />
        </div>

        {/* Specialized Section for advanced_native_contact_picker */}
        {isContactPicker && (
          <div className="flex flex-col gap-12 my-12 pt-8 border-t border-border">
            
            {/* Quick Install & Usage */}
            <div className="p-6 md:p-8 rounded-2xl bg-surface border border-border font-mono">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground mb-4 uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-emerald-500" />
                <span>Quick Start (Dart / Flutter)</span>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border text-xs text-foreground/90 overflow-x-auto leading-relaxed">
                <p className="text-muted mb-2">{"// 1. Add dependency to pubspec.yaml"}</p>
                <p className="text-emerald-500 font-bold mb-4">dependencies:<br />&nbsp;&nbsp;advanced_native_contact_picker: ^latest_version</p>

                <p className="text-muted mb-2">{"// 2. Zero-permission contact selection"}</p>
                <p className="text-foreground">
                  <span className="text-accent font-bold">final</span> List&lt;NativeContact&gt; contacts = <span className="text-accent font-bold">await</span> NativeContactPicker.pickContact(<br />
                  &nbsp;&nbsp;allowMultiple: <span className="text-emerald-500">true</span>,<br />
                  &nbsp;&nbsp;includeEmail: <span className="text-emerald-500">true</span>,<br />
                  );
                </p>
              </div>
            </div>

            {/* Architecture Highlights & Parameter Specs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-surface border border-border">
                <div className="flex items-center gap-2 text-foreground font-semibold mb-3">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span>Zero Manifest Permissions</span>
                </div>
                <p className="text-sm text-muted leading-relaxed m-0">
                  Operates using native system picker flows (<code className="text-xs bg-background px-1.5 py-0.5 rounded border border-border text-foreground">CNContactPickerViewController</code> on iOS and <code className="text-xs bg-background px-1.5 py-0.5 rounded border border-border text-foreground">ACTION_PICK</code> / API 37+ Contact Picker on Android), granting temporary user-selected read access without requiring broad <code className="text-xs bg-background px-1.5 py-0.5 rounded border border-border text-foreground">READ_CONTACTS</code> permissions.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-surface border border-border">
                <div className="flex items-center gap-2 text-foreground font-semibold mb-3">
                  <Smartphone className="w-4 h-4 text-emerald-500" />
                  <span>Native ActionSheet (iOS)</span>
                </div>
                <p className="text-sm text-muted leading-relaxed m-0">
                  When a selected contact has multiple telephone numbers or email addresses, iOS automatically presents a native action sheet bottom sheet so the user can choose the exact entry with zero custom UI overhead.
                </p>
              </div>
            </div>

            {/* Strongly Typed Data Structure */}
            <div className="p-6 rounded-xl bg-surface border border-border font-mono text-xs">
              <div className="flex items-center gap-2 text-foreground font-semibold mb-4 text-sm font-sans">
                <BookOpen className="w-4 h-4 text-accent" />
                <span>Strongly-Typed Models</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-background border border-border">
                  <div className="text-emerald-500 font-bold mb-1">NativeContact</div>
                  <ul className="text-muted space-y-1">
                    <li>• <span className="text-foreground">lookupKey</span>: String (Unique ID)</li>
                    <li>• <span className="text-foreground">name</span>: String (Full name)</li>
                    <li>• <span className="text-foreground">phones</span>: List&lt;LabeledValue&gt;</li>
                    <li>• <span className="text-foreground">emails</span>: List&lt;LabeledValue&gt;</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-lg bg-background border border-border">
                  <div className="text-emerald-500 font-bold mb-1">LabeledValue</div>
                  <ul className="text-muted space-y-1">
                    <li>• <span className="text-foreground">label</span>: String (e.g., &quot;mobile&quot;, &quot;work&quot;)</li>
                    <li>• <span className="text-foreground">value</span>: String (Phone / Email)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Deep Dive Section for other projects */}
        {!isContactPicker && (
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
          </article>
        )}

        {/* AdBanner placement 5 */}
        <div className="py-8">
          <AdBanner dataAdSlot="1000000005" dataAdFormat="auto" dataFullWidthResponsive={true} />
        </div>

        {/* Action Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-12 border-t border-border mt-12">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:scale-105 transition-all no-underline"
            data-cursor-interactive="true"
          >
            <span>Back to Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {isContactPicker && (
            <a
              href="https://pub.dev/packages/advanced_native_contact_picker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface text-foreground font-mono text-sm hover:border-accent transition-all no-underline shadow-xs"
              data-cursor-interactive="true"
            >
              <span>View package on pub.dev</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </main>
  )
}
