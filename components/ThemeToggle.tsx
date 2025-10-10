"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme) {
      setIsDark(theme === "dark")
      document.documentElement.classList.toggle("dark", theme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
    document.documentElement.classList.toggle("dark", newTheme)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  )
}
