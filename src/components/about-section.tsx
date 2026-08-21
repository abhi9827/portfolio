"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import SkillsSection from "./skills-section"
import { GraduationCap, Award, Users, TrendingUp } from "lucide-react"

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 md:gap-24 mb-24">
          
          {/* Large Editorial Headline */}
          <motion.div
            className="lg:w-1/2 lg:sticky lg:top-32"
            style={{ opacity }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-mono text-muted mb-4">
              <span>PROFILE &amp; BACKGROUND</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight">
              Flutter Developer delivering{" "}
              <span className="text-muted">secure, scalable banking &amp; enterprise systems.</span>
            </h2>

            {/* Quick Impact Metrics */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="p-4 rounded-xl bg-surface border border-border">
                <div className="flex items-center gap-1.5 text-xs text-muted font-mono mb-1">
                  <Users className="w-3.5 h-3.5 text-accent" />
                  <span>USER IMPACT</span>
                </div>
                <div className="text-2xl font-bold text-foreground">3M+ Users</div>
                <div className="text-xs text-muted mt-0.5">In Nepal&apos;s DFS Ecosystem</div>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border">
                <div className="flex items-center gap-1.5 text-xs text-muted font-mono mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-accent" />
                  <span>MARKET REACH</span>
                </div>
                <div className="text-2xl font-bold text-foreground">90% Share</div>
                <div className="text-xs text-muted mt-0.5">Banking Infrastructure</div>
              </div>
            </div>
          </motion.div>

          {/* Supporting details, expertise, and education */}
          <motion.div
            className="lg:w-1/2 flex flex-col gap-10"
            style={{ y }}
          >
              <p className="text-xl text-muted leading-relaxed">
                I am a Flutter Developer with 3 years of experience engineering secure fintech, digital banking, and enterprise cross-platform applications serving over 3 million users. My focus is on leveraging Flutter, Dart, and Riverpod to build reliable, high-performance mobile systems with Clean Architecture, hardware keystore security, and automated CI/CD release pipelines.
              </p>
              <p className="text-xl text-muted leading-relaxed mt-6">
                At F1Soft International, I build core mobile banking infrastructure powering 90% of financial institutions in Nepal. Across previous roles at Dynamic Technosoft and DV Excellus, I delivered Nepal&apos;s first IRD-approved accounting mobile companion and pioneered digital agri-loan platforms enabling collateral-free credit for over 1,000 farmers.
              </p>

            {/* Education & Credentials */}
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-4">
                Education &amp; Certifications
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-muted shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">Bachelor of Information Technology</h4>
                    <p className="text-sm text-muted">Texas College of Management and IT • 2019 — 2023</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-border/60">
                  <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-muted shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">Flutter Certification</h4>
                    <p className="text-sm text-muted">Mindrisers Consortium • 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* Skills Section integrated at the bottom of About */}
        <SkillsSection />
      </div>
    </section>
  )
}
