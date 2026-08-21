"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Cpu, Layers, Activity, Smartphone, CheckCircle2 } from "lucide-react"

type ViewMode = "portrait" | "telemetry" | "stack"

interface ArchitectureLayer {
  id: string
  title: string
  subtitle: string
  tech: string[]
  color: string
}

const architectureLayers: ArchitectureLayer[] = [
  {
    id: "ui",
    title: "Presentation Layer",
    subtitle: "Declarative UI, Custom RenderObjects & Canvas Animations",
    tech: ["Flutter / Dart", "Skia / Impeller", "BLoC State", "60 FPS"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "bridge",
    title: "Native Platform Bridge",
    subtitle: "Bidirectional MethodChannels, EventChannels & C++ FFI",
    tech: ["Kotlin / Android", "Swift / iOS", "JNI / FFI", "Hardware APIs"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "core",
    title: "Core Domain & Security",
    subtitle: "Clean Architecture, Offline Cache & Cryptographic Engines",
    tech: ["AES-256 / Biometrics", "Isolates / Concurrency", "Repository Pattern", "REST / gRPC"],
    color: "from-purple-500/20 to-indigo-500/20",
  },
]

export function HeroPortrait() {
  const cardRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [viewMode, setViewMode] = useState<ViewMode>("portrait")
  const [activeLayer, setActiveLayer] = useState<number>(0)
  const [fps, setFps] = useState(60)

  // Cursor tracking for subtle holographic depth
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 120 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8])
  const glareX = useTransform(smoothX, [-0.5, 0.5], ["10%", "90%"])
  const glareY = useTransform(smoothY, [-0.5, 0.5], ["10%", "90%"])

  // Subtle real-time FPS counter to mimic live mobile engine telemetry
  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let animId: number

    const updateFps = () => {
      frameCount++
      const now = performance.now()
      if (now - lastTime >= 1000) {
        const measured = Math.round((frameCount * 1000) / (now - lastTime))
        setFps(Math.min(60, Math.max(58, measured)))
        frameCount = 0
        lastTime = now
      }
      animId = requestAnimationFrame(updateFps)
    }

    animId = requestAnimationFrame(updateFps)
    return () => cancelAnimationFrame(animId)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Mode Switcher Pill */}
      <div className="flex items-center justify-between gap-1 mb-3 px-3 py-1.5 bg-surface/80 backdrop-blur-md border border-border rounded-full text-xs">
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
          <Smartphone className="w-3.5 h-3.5 text-accent" />
          <span>ENGINE_INSPECTOR</span>
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setViewMode("portrait")}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${viewMode === "portrait"
                ? "bg-foreground text-background shadow-xs"
                : "text-muted hover:text-foreground"
              }`}
            data-cursor-interactive="true"
          >
            Portrait
          </button>
          <button
            onClick={() => setViewMode("telemetry")}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 ${viewMode === "telemetry"
                ? "bg-foreground text-background shadow-xs"
                : "text-muted hover:text-foreground"
              }`}
            data-cursor-interactive="true"
          >
            <Activity className="w-3 h-3" />
            HUD
          </button>
          <button
            onClick={() => setViewMode("stack")}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 ${viewMode === "stack"
                ? "bg-foreground text-background shadow-xs"
                : "text-muted hover:text-foreground"
              }`}
            data-cursor-interactive="true"
          >
            <Layers className="w-3 h-3" />
            Arch
          </button>
        </div>
      </div>

      {/* Main Card Container */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={shouldReduceMotion ? {} : { rotateX, rotateY, transformPerspective: 1000 }}
        className="relative aspect-[4/5] w-full rounded-2xl bg-card border border-border overflow-hidden shadow-xl select-none"
      >
        {/* VIEW 1: Standard Portrait with subtle ambient layers */}
        <AnimatePresence mode="wait">
          {viewMode === "portrait" && (
            <motion.div
              key="portrait"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              {/* Background Technical Grid */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 z-0" />

              {/* Soft Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/20 blur-[70px] rounded-full z-0 pointer-events-none" />

              {/* Portrait Image */}
              <div className="absolute inset-0 z-10 overflow-hidden [mask-image:linear-gradient(180deg,white_80%,transparent_100%)]">
                <Image
                  src="/images/profile-headshot.jpg"
                  alt="Abhishek Lamichhane — Flutter Developer"
                  fill
                  className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Subtle Status Tag at bottom left */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-background/85 backdrop-blur-md border border-border rounded-full text-[11px] font-mono text-muted shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-foreground font-semibold">F1Soft</span>
                <span className="text-border">•</span>
                <span>Riverpod / Clean Arch</span>
              </div>
            </motion.div>
          )}

          {/* VIEW 2: Real-Time Mobile Engine HUD Telemetry */}
          {viewMode === "telemetry" && (
            <motion.div
              key="telemetry"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 p-6 flex flex-col justify-between z-20 bg-background/90 backdrop-blur-md font-mono"
            >
              {/* HUD Header */}
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <Cpu className="w-4 h-4 text-emerald-500" />
                  <span>DART RUNTIME TELEMETRY</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-sm bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  LIVE_PROFILE
                </span>
              </div>

              {/* Live Metric Grid */}
              <div className="grid grid-cols-2 gap-3 my-auto text-xs">
                <div className="p-3 rounded-lg bg-surface border border-border">
                  <div className="text-[10px] text-muted uppercase tracking-wider mb-1">Renderer</div>
                  <div className="font-bold text-foreground">Impeller 3.x</div>
                  <div className="text-[10px] text-emerald-500 mt-1 flex items-center gap-1">
                    <span>{fps} FPS</span>
                    <span className="text-muted">(16.6ms)</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-surface border border-border">
                  <div className="text-[10px] text-muted uppercase tracking-wider mb-1">Bridge Latency</div>
                  <div className="font-bold text-foreground">MethodChannel</div>
                  <div className="text-[10px] text-emerald-500 mt-1">~0.42ms / call</div>
                </div>

                <div className="p-3 rounded-lg bg-surface border border-border">
                  <div className="text-[10px] text-muted uppercase tracking-wider mb-1">Heap Allocation</div>
                  <div className="font-bold text-foreground">18.4 MB</div>
                  <div className="text-[10px] text-muted mt-1">Zero leaks detected</div>
                </div>

                <div className="p-3 rounded-lg bg-surface border border-border">
                  <div className="text-[10px] text-muted uppercase tracking-wider mb-1">Architecture</div>
                  <div className="font-bold text-foreground">Clean / Feature</div>
                  <div className="text-[10px] text-emerald-500 mt-1">Riverpod + Clean Arch</div>
                </div>
              </div>

              {/* Code signature terminal line */}
              <div className="pt-3 border-t border-border text-[11px] text-muted">
                <p className="truncate">
                  <span className="text-accent">&gt;</span> NativeBridge.bind(BinaryMessenger) :: <span className="text-emerald-500">READY</span>
                </p>
              </div>
            </motion.div>
          )}

          {/* VIEW 3: 3D Layer Stack Architecture */}
          {viewMode === "stack" && (
            <motion.div
              key="stack"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 p-5 flex flex-col justify-between z-20 bg-background/95 backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-border">
                  <span className="text-xs font-semibold tracking-wider uppercase text-muted">
                    Mobile System Anatomy
                  </span>
                  <span className="text-[10px] font-mono text-muted">3-TIER</span>
                </div>

                {/* Layer Selector Chips */}
                <div className="flex flex-col gap-2.5">
                  {architectureLayers.map((layer, idx) => {
                    const isSelected = activeLayer === idx
                    return (
                      <button
                        key={layer.id}
                        onClick={() => setActiveLayer(idx)}
                        className={`w-full text-left p-3 rounded-xl border transition-all ${isSelected
                            ? "bg-surface border-foreground shadow-xs"
                            : "bg-surface/40 border-border hover:border-border/80 opacity-70"
                          }`}
                        data-cursor-interactive="true"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-foreground">
                            {layer.title}
                          </span>
                          {isSelected && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-foreground" />
                          )}
                        </div>
                        <p className="text-[11px] text-muted mt-1 leading-snug">
                          {layer.subtitle}
                        </p>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Active Layer Tech Badges */}
              <div className="pt-3 border-t border-border">
                <div className="text-[10px] font-mono uppercase text-muted mb-2">Technologies & Patterns:</div>
                <div className="flex flex-wrap gap-1.5">
                  {architectureLayers[activeLayer].tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 bg-surface border border-border rounded-md text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Light/Glare overlay */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300 z-30"
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.12) 0%, transparent 60%)`,
              mixBlendMode: "overlay",
            }}
          />
        )}
      </motion.div>
    </div>
  )
}
