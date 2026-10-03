"use client"

import { motion, Variants } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { RevealText } from "./animations/reveal-text"
import { useRef } from "react"
import { HeroPortrait } from "./hero-portrait"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8, // Wait for the RevealText to finish its main part
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)


  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Typography and Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div 
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold text-muted tracking-widest uppercase">
                  Software Engineerr
                </span>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.95] mb-6 select-none">
              <RevealText text="ABHISHEK" delay={0.2} className="block text-foreground" />
              <RevealText text="LAMICHHANE" delay={0.4} className="block text-muted" />
            </h1>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl font-medium text-foreground mb-6"
              >
                Flutter Developer &amp; Mobile Software Engineer
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-muted max-w-xl mb-12 leading-relaxed"
              >
                3 years of experience architecting secure fintech and cross-platform mobile applications, impacting over 3 million users across Nepal&apos;s digital banking ecosystem.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 md:gap-6">
                <a
                  href="#work"
                  className="group flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-all duration-300"
                  data-cursor-interactive="true"
                >
                  EXPLORE WORK
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/resume"
                  className="group flex items-center gap-2 px-8 py-4 border border-border bg-transparent text-foreground rounded-full font-medium hover:bg-accent/5 transition-all duration-300"
                  data-cursor-interactive="true"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                  VIEW / DOWNLOAD CV
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: Cinematic & Interactive Architecture Portrait */}
          <div className="lg:col-span-5 relative hidden md:block">
            <HeroPortrait />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll to Explore</span>
        <div className="w-[1px] h-8 bg-border relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-foreground"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
