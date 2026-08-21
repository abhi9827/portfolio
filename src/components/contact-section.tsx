"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Mail, Copy, Check, ArrowUpRight, Clock, Sparkles, Terminal, FileText } from "lucide-react"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion()
  const [copied, setCopied] = useState(false)
  const [localTime, setLocalTime] = useState<string>("")
  const [isWorkingHour, setIsWorkingHour] = useState<boolean>(true)

  const email = "abhisheklamichhane00@gmail.com"
  const phone = "+977 9827226086"
  const linkedin = "https://linkedin.com/in/abhisheklamichhane"

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }
      const formatter = new Intl.DateTimeFormat([], options)
      const now = new Date()
      setLocalTime(formatter.format(now))

      // Check Kathmandu working hours (9 AM - 9 PM NPT)
      const nptHour = new Intl.DateTimeFormat([], {
        timeZone: "Asia/Kathmandu",
        hour: "numeric",
        hour12: false,
      }).format(now)
      const hourNum = parseInt(nptHour, 10)
      setIsWorkingHour(hourNum >= 9 && hourNum < 21)
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy", err)
    }
  }

  return (
    <section id="contact" className="py-36 relative bg-background overflow-hidden border-t border-border/50">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Availability Pill with live Kathmandu Clock */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full border border-border bg-surface/80 backdrop-blur-md shadow-xs mb-8"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-foreground">
            <span className="relative flex h-2 w-2">
              {!shouldReduceMotion && isWorkingHour && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              )}
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isWorkingHour ? "bg-emerald-500" : "bg-amber-500"}`} />
            </span>
            <span className="font-semibold">{isWorkingHour ? "AVAILABLE FOR HIGH-IMPACT ROLES" : "AVAILABLE • STANDBY"}</span>
          </div>

          <span className="text-border hidden sm:inline">•</span>

          <div className="flex items-center gap-1.5 font-mono text-xs text-muted">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span>KTM {localTime || "UTC+5:45"}</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-6">
            Let&apos;s build something <br />
            <span className="text-muted">worth shipping.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed">
            Whether you&apos;re architecting a high-concurrency mobile banking app or building native developer tools, I&apos;m always open to discussing compelling problems.
          </p>
        </motion.div>

        {/* Primary Interactive Action Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-12 w-full max-w-md"
        >
          <a
            href={`mailto:${email}`}
            className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-foreground text-background font-medium text-sm flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-md group"
            data-cursor-interactive="true"
          >
            <Mail className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>Send Direct Message</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto py-3.5 px-5 rounded-full border border-border bg-surface hover:bg-surface/80 text-foreground font-medium text-sm flex items-center justify-center gap-2 transition-all group cursor-pointer"
            data-cursor-interactive="true"
            aria-label="Copy email address"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center gap-1.5 text-emerald-500 font-mono text-xs"
                >
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center gap-1.5 text-muted group-hover:text-foreground text-xs font-mono"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* Quick Social & Document Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm font-medium text-muted"
        >
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors group px-3 py-1.5 rounded-lg hover:bg-surface"
            data-cursor-interactive="true"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://github.com/abhi9827"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors group px-3 py-1.5 rounded-lg hover:bg-surface"
            data-cursor-interactive="true"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={`tel:${phone}`}
            className="flex items-center gap-1.5 hover:text-foreground transition-colors group px-3 py-1.5 rounded-lg hover:bg-surface"
            data-cursor-interactive="true"
          >
            <span>{phone}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors group px-3 py-1.5 rounded-lg hover:bg-surface"
            data-cursor-interactive="true"
          >
            <FileText className="w-4 h-4" />
            <span>Resume / CV</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Technical Footer Telemetry Badge */}
        <div className="mt-16 pt-8 border-t border-border/40 w-full max-w-xl flex items-center justify-between font-mono text-[11px] text-muted">
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-accent" />
            <span>DISPATCH_CHANNEL: DIRECT</span>
          </span>
          <span className="flex items-center gap-1 text-emerald-500">
            <Sparkles className="w-3 h-3" />
            <span>SLA: &lt; 24H RESPONSE</span>
          </span>
        </div>
      </div>
    </section>
  )
}
