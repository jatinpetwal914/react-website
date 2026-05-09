import { motion } from 'framer-motion'
import { BookOpenText, GraduationCap, Layers2 } from 'lucide-react'

function About() {
  return (
    <section id="about" className="space-y-4">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-white/10 bg-glass p-6 backdrop-blur-md">
        <h2 className="mb-4 text-2xl font-semibold">About This Lab Manual Showcase</h2>
        <p className="text-sm text-slate-300">
          This project presents Full Stack Development Lab practicals in a professional dashboard style. It works as a launcher for your existing output files and excludes all PHP practicals as required.
        </p>
      </motion.div>
      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <GraduationCap className="mb-3 text-neonCyan" />
          <h3 className="mb-2 font-semibold">Student Info</h3>
          <p className="text-sm text-slate-300">Your Name<br />BTech CSE 3rd Year<br />2023 - 2027 | DS-1</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <BookOpenText className="mb-3 text-neonCyan" />
          <h3 className="mb-2 font-semibold">Subject Details</h3>
          <p className="text-sm text-slate-300">Full Stack Development Lab<br />Lab Manual Explorer<br />Output Launcher Dashboard</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <Layers2 className="mb-3 text-neonCyan" />
          <h3 className="mb-2 font-semibold">Technologies Used</h3>
          <p className="text-sm text-slate-300">React + Vite<br />React Router DOM<br />Tailwind CSS + Framer Motion</p>
        </article>
      </div>
    </section>
  )
}

export default About
