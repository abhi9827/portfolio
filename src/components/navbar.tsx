"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-md border-b border-border py-4"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter"
            data-cursor-interactive="true"
          >
            Abhishek Lamichhane
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-foreground transition-colors relative group"
                    data-cursor-interactive="true"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l border-border pl-6">
              <ThemeToggle />
              <Link
                href="/resume"
                className="text-sm font-medium px-4 py-2 bg-foreground text-background rounded-full hover:scale-105 transition-transform"
                data-cursor-interactive="true"
              >
                Resume
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-background/95 backdrop-blur-xl">
          <div className="flex justify-between items-center p-6 border-b border-border/50">
            <span className="text-xl font-bold tracking-tighter">A.L</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex-1 flex flex-col justify-center px-12 gap-8">
            {navLinks.map((link, i) => (
              <Link key={link.name} href={link.href} passHref legacyBehavior>
                <motion.a
                  className="text-4xl font-medium tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              </Link>
            ))}
            
            <Link href="/resume" passHref legacyBehavior>
              <motion.a
                className="text-2xl mt-8 flex items-center text-muted"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Download Resume →
              </motion.a>
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
