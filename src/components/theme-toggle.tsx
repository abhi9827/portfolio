"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useSyncExternalStore } from "react"
import { motion, useReducedMotion } from "framer-motion"

// Safe client-side subscription for Next.js hydration without useEffect setState cascade
const subscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const shouldReduceMotion = useReducedMotion()

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  const currentTheme = resolvedTheme || theme || "dark"
  const isDark = currentTheme === "dark"

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = isDark ? "light" : "dark"

    // Check if View Transition API is supported and user hasn't requested reduced motion
    const doc = document as unknown as {
      startViewTransition?: (callback: () => void) => {
        ready: Promise<void>
      }
    }

    if (!doc.startViewTransition || shouldReduceMotion) {
      setTheme(nextTheme)
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    const right = window.innerWidth - x
    const bottom = window.innerHeight - y
    const maxRadius = Math.hypot(Math.max(x, right), Math.max(y, bottom))

    const transition = doc.startViewTransition(() => {
      setTheme(nextTheme)
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${maxRadius}px at ${x}px ${y}px)`,
      ]

      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 450,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: isDark
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        }
      )
    })
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-9 h-9 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors text-foreground focus:outline-hidden"
      data-cursor-interactive="true"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        key="theme-icon"
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90,
        }}
        transition={{ duration: 0.2, type: "spring", stiffness: 220, damping: 20 }}
        className="absolute"
      >
        <Moon className="w-4 h-4 text-foreground" />
      </motion.div>
      <motion.div
        key="sun-icon"
        initial={false}
        animate={{
          scale: !isDark ? 1 : 0,
          opacity: !isDark ? 1 : 0,
          rotate: !isDark ? 0 : 90,
        }}
        transition={{ duration: 0.2, type: "spring", stiffness: 220, damping: 20 }}
        className="absolute"
      >
        <Sun className="w-4 h-4 text-foreground" />
      </motion.div>
    </button>
  )
}
