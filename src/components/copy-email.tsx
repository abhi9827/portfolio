"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Copy, Check } from "lucide-react"

export default function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const email = "abhisheklamichhane00@gmail.com"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy", err)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 hidden md:block"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCopy}
        className="flex items-center gap-2 px-4 py-2 bg-surface/80 backdrop-blur-md border border-border rounded-full shadow-lg text-sm font-medium text-foreground hover:border-foreground transition-colors group"
        data-cursor-interactive="true"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-green-500"
            >
              <Check className="w-4 h-4" />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-muted group-hover:text-foreground transition-colors"
            >
              <Copy className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
        <span>{copied ? "Copied!" : "Copy Email"}</span>
      </motion.button>
    </motion.div>
  )
}
