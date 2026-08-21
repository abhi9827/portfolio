"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Monitor, Moon, Sun, Briefcase, User, Mail, FileText, Code2, ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

type Command = {
  id: string
  title: string
  icon: React.ElementType
  action: () => void
  section: string
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const { setTheme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const commands: Command[] = [
    { id: "home", title: "Home", icon: User, action: () => router.push("/#"), section: "Navigation" },
    { id: "work", title: "Projects", icon: Briefcase, action: () => router.push("/#work"), section: "Navigation" },
    { id: "lab", title: "Engineering Lab", icon: Code2, action: () => router.push("/#lab"), section: "Navigation" },
    { id: "contact", title: "Contact", icon: Mail, action: () => router.push("/#contact"), section: "Navigation" },
    { id: "resume", title: "View Resume / CV", icon: FileText, action: () => window.open("/resume", "_blank"), section: "Links" },
    { 
      id: "theme-light", 
      title: "Change Theme to Light", 
      icon: Sun, 
      action: () => setTheme("light"), 
      section: "Settings" 
    },
    { 
      id: "theme-dark", 
      title: "Change Theme to Dark", 
      icon: Moon, 
      action: () => setTheme("dark"), 
      section: "Settings" 
    },
    { 
      id: "theme-system", 
      title: "Change Theme to System", 
      icon: Monitor, 
      action: () => setTheme("system"), 
      section: "Settings" 
    },
    { 
      id: "hire", 
      title: "> init_contract --type=full_time", 
      icon: ArrowRight, 
      action: () => {
        alert("Contract initialized. Let's talk! Redirecting to contact...")
        router.push("/#contact")
        setIsOpen(false)
      }, 
      section: "System" 
    },
  ]

  const filteredCommands = search === "" 
    ? commands 
    : commands.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))

  const sections = Array.from(new Set(filteredCommands.map(c => c.section)))

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[150] bg-background/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[20%] left-1/2 w-full max-w-xl z-[151] px-4"
          >
            <div className="bg-surface border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[60vh]">
              <div className="flex items-center px-4 py-3 border-b border-border gap-3">
                <Search className="w-5 h-5 text-muted" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted"
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 bg-background border border-border rounded text-xs font-medium text-muted">
                  ESC
                </kbd>
              </div>

              <div className="overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="p-8 text-center text-muted">
                    No results found.
                  </div>
                ) : (
                  sections.map(section => (
                    <div key={section} className="mb-4 last:mb-0">
                      <div className="px-2 py-1 text-xs font-semibold text-muted uppercase tracking-wider mb-1">
                        {section}
                      </div>
                      <div className="flex flex-col gap-1">
                        {filteredCommands
                          .filter(c => c.section === section)
                          .map((command) => (
                            <button
                              key={command.id}
                              onClick={() => {
                                command.action()
                                if (command.id !== "hire") setIsOpen(false)
                              }}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left hover:bg-background hover:text-accent transition-colors group"
                            >
                              <command.icon className="w-4 h-4 text-muted group-hover:text-accent" />
                              <span className="text-sm font-medium">{command.title}</span>
                            </button>
                          ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
