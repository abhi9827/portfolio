"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion"
import { GitCommit, Sparkles, Terminal, Shield, Layers, Cpu, Server, Smartphone, CheckCircle } from "lucide-react"

interface Milestone {
  id: string
  title: string
  category: string
  period: string
  description: string
  skills: string[]
  icon: React.ElementType
}

const milestones: Milestone[] = [
  {
    id: "flutter",
    title: "Flutter & Multiplatform Core",
    category: "Foundation",
    period: "2021 — 2023",
    description: "Deep mastery of the Dart VM, Skia/Impeller rendering pipeline, and high-performance custom RenderObjects.",
    skills: ["Dart AOT", "Widget Tree Lifecycle", "Custom Painters", "60 FPS Animation"],
    icon: Smartphone,
  },
  {
    id: "mobile-native",
    title: "Native Platform Bridging",
    category: "Systems",
    period: "2022 — 2024",
    description: "Bridging asynchronous MethodChannels, native iOS (Swift) & Android (Kotlin) integrations, and hardware sensor SDKs.",
    skills: ["Kotlin / JNI", "Swift / Obj-C", "BinaryMessenger", "Hardware APIs"],
    icon: Terminal,
  },
  {
    id: "fintech",
    title: "Production Fintech & Security",
    category: "Domain Specialization",
    period: "2023 — Present",
    description: "Architecting zero-trust banking applications, cryptographic payload signing, biometric keystores, and offline-first transaction queues.",
    skills: ["AES-256 / Keystore", "Khalti Gateway", "FLAG_SECURE", "Zero-Trust Architecture"],
    icon: Shield,
  },
  {
    id: "architecture",
    title: "Scalable Clean Architecture",
    category: "Engineering Leadership",
    period: "2024 — Present",
    description: "Modular feature-first package monorepos, BLoC state machines, dependency injection containers, and strict domain boundaries.",
    skills: ["Clean Architecture", "BLoC Pattern", "Freezed / DTOs", "Repository Pattern"],
    icon: Layers,
  },
  {
    id: "tooling",
    title: "Developer Tooling & Automation",
    category: "Productivity",
    period: "2024 — Present",
    description: "Building internal CLI tools, automated boilerplate code generators, and fast CI/CD build matrix orchestration.",
    skills: ["CLI Development", "Codegen Pipelines", "GitHub Actions", "Fastlane"],
    icon: GitCommit,
  },
  {
    id: "ai-systems",
    title: "Edge AI & Smart Experiences",
    category: "Emerging Direction",
    period: "2025 — Future",
    description: "Integrating on-device machine learning models, local embeddings, and intelligent financial insight agents directly in mobile apps.",
    skills: ["On-Device Models", "LLM Tooling", "Context Pipelines", "Intelligent UX"],
    icon: Cpu,
  },
  {
    id: "backend",
    title: "Distributed Backend & Cloud",
    category: "Full Lifecycle",
    period: "2025 — Future",
    description: "Extending mobile expertise into robust cloud services, high-throughput gRPC streaming, and resilient distributed backends.",
    skills: ["Go / Node.js", "gRPC / Protobuf", "PostgreSQL", "Redis Caching"],
    icon: Server,
  },
]

export default function JourneySection() {
  const containerRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [selectedId, setSelectedId] = useState<string>("fintech")

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 80,
  })

  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1])

  return (
    <section ref={containerRef} id="direction" className="py-32 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-mono text-muted mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>EVOLUTION &amp; TRAJECTORY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
            Current Direction
          </h2>
          <p className="text-lg text-muted">
            From foundational mobile rendering to zero-trust fintech architectures, developer tooling, and intelligent edge systems.
          </p>
        </div>

        {/* Interactive Circuit Topology */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Circuit Trace */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-border transform md:-translate-x-1/2 z-0" />
          
          {!shouldReduceMotion && (
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-foreground transform md:-translate-x-1/2 z-0"
            />
          )}

          {/* Milestone Nodes */}
          <div className="flex flex-col gap-10 md:gap-14 relative z-10">
            {milestones.map((item, index) => {
              const isSelected = selectedId === item.id
              const isEven = index % 2 === 0

              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-6 md:gap-12 pl-14 md:pl-0`}
                >
                  {/* Timeline Node Bead */}
                  <div
                    onClick={() => setSelectedId(item.id)}
                    className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center cursor-pointer bg-background ${
                      isSelected
                        ? "border-foreground scale-110 shadow-md text-foreground"
                        : "border-border text-muted hover:border-muted-foreground hover:scale-105"
                    }`}
                    data-cursor-interactive="true"
                  >
                    <item.icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Card Content */}
                  <motion.div
                    onClick={() => setSelectedId(item.id)}
                    className={`w-full md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-surface border-foreground shadow-lg ring-1 ring-foreground/20"
                        : "bg-surface/50 border-border hover:border-border/80 hover:bg-surface"
                    }`}
                    data-cursor-interactive="true"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-accent">
                        {item.category}
                      </span>
                      <span className="text-xs font-mono text-muted">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-foreground mb-2 flex items-center gap-2">
                      <span>{item.title}</span>
                      {isSelected && (
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      )}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md transition-colors ${
                            isSelected
                              ? "bg-foreground/10 text-foreground border border-foreground/20"
                              : "bg-background border border-border text-muted"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Empty space for opposite column on desktop */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
