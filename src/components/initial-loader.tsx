"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Only show loader for a very short duration to feel premium but fast
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200) // 1.2 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-4xl font-semibold tracking-[0.2em] uppercase text-foreground ml-[0.2em]"
            >
              Abhishek Lamichhane
            </motion.h1>
          </div>
          
          {/* Subtle progress indicator */}
          <div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-foreground/20 overflow-hidden"
          >
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-full h-full bg-foreground origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
