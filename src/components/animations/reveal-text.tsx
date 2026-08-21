"use client"

import { motion, Variants } from "framer-motion"
import { useMemo } from "react"

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
}

export function RevealText({ text, className = "", delay = 0 }: RevealTextProps) {
  // Split the text into words while keeping spaces
  const words = useMemo(() => {
    return text.split(" ").map((word, i, arr) => (
      <span key={i} className="inline-block">
        {word}
        {i !== arr.length - 1 && "\u00A0"}
      </span>
    ))
  }, [text])

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (customDelay: number = 0) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: customDelay },
    }),
  }

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Cinematic custom ease
      },
    },
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
