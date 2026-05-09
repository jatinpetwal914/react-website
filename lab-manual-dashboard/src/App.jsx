import { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import Home from './pages/Home'
import LabManual from './pages/LabManual'
import About from './pages/About'
import QuestionDetail from './pages/QuestionDetail'
import OutputView from './pages/OutputView'
import Navbar from './components/Navbar'

const particles = Array.from({ length: 22 })

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-darkBg">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
          className="h-14 w-14 rounded-full border-4 border-neonPurple border-t-neonCyan"
        />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-darkBg text-white">
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-1 w-full bg-white/10">
        <motion.div className="h-full origin-left bg-gradient-to-r from-neonPurple to-neonCyan" style={{ scaleX }} />
      </div>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {particles.map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-2 w-2 rounded-full bg-neonCyan/50"
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 11) % 100}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 5 + (index % 5), repeat: Infinity }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(154,77,255,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(0,209,255,0.25),transparent_35%)]" />
      </div>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-10 pt-24 md:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lab-manual" element={<LabManual />} />
          <Route path="/question/:id" element={<QuestionDetail />} />
          <Route path="/output/:id" element={<OutputView />} />
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={
              <div className="rounded-2xl border border-white/10 bg-glass p-8 text-center backdrop-blur-md">
                <p className="mb-4 text-xl font-semibold">Page not found</p>
                <NavLink
                  to="/"
                  className="inline-flex rounded-full border border-neonCyan/50 px-5 py-2 text-sm hover:bg-neonCyan/20"
                >
                  Go to Home
                </NavLink>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
