import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import profileImage from '../assets/profile.png'

const words = ['HTML', 'CSS', 'JavaScript', 'React']

function Hero() {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = words[wordIndex]
        if (charIndex < current.length) {
          setText((prev) => prev + current[charIndex])
          setCharIndex((prev) => prev + 1)
          return
        }
        setTimeout(() => {
          setText('')
          setCharIndex(0)
          setWordIndex((prev) => (prev + 1) % words.length)
        }, 600)
      },
      charIndex < words[wordIndex].length ? 140 : 900,
    )
    return () => clearTimeout(timeout)
  }, [wordIndex, charIndex])

  return (
    <section className="grid gap-8 rounded-3xl border border-white/10 bg-glass p-6 backdrop-blur-md md:grid-cols-2 md:p-10">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-neonCyan/50 px-4 py-1 text-xs uppercase tracking-widest text-neonCyan">
          <Sparkles size={14} /> Full Stack Development Lab
        </span>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          JATIN PETWAL
          <span className="block bg-gradient-to-r from-neonPurple to-neonCyan bg-clip-text text-transparent">
            Lab Manual Showcase
          </span>
        </h1>
        <p className="text-slate-300">BTech CSE 3rd Year | 2023 - 2027 | DS-1</p>
        <p className="h-7 font-mono text-lg text-neonCyan">
          {text}
          <span className="animate-pulse">|</span>
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#manual" className="rounded-full bg-neonPurple px-6 py-2 text-sm font-semibold shadow-purple transition hover:scale-105">
            Explore Lab Manual
          </a>
          <a href="#about" className="rounded-full border border-neonCyan/60 px-6 py-2 text-sm font-semibold text-neonCyan transition hover:bg-neonCyan/20">
            About Subject
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative flex items-center justify-center"
      >
        <div className="absolute h-56 w-56 animate-pulse rounded-full bg-neonPurple/30 blur-3xl" />
        <img
          src={profileImage}
          alt="Student profile"
          className="relative z-10 h-56 w-56 rounded-full border-4 border-white/20 object-cover shadow-glow md:h-72 md:w-72"
        />
        <ArrowDown className="absolute -bottom-2 animate-bounce text-neonCyan" />
      </motion.div>
    </section>
  )
}

export default Hero
