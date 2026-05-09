import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'

function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid gap-4 md:grid-cols-3"
      >
        {[
          'Responsive design for mobile, tablet, desktop',
          'VS Code style sidebar and folder explorer',
          'Search, filter and open practical outputs instantly',
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
            {item}
          </div>
        ))}
      </motion.section>
      <div className="flex">
        <Link
          to="/lab-manual"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neonPurple to-neonCyan px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
        >
          Open Lab Dashboard <ArrowRight size={16} />
        </Link>
      </div>
      <div className="flex">
        <a
          href="https://github.com/jatinpetwal914/react-website"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 px-6 py-3 text-sm font-bold text-white transition hover:scale-105"
        >
          <strong>view code</strong>
        </a>
      </div>
      <div className="flex flex-wrap gap-3">
        {['HTML', 'CSS', 'JavaScript', 'React'].map((tech) => (
          <Link
            key={tech}
            to={`/lab-manual?tech=${encodeURIComponent(tech)}`}
            className="rounded-full border border-neonCyan/40 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-neonCyan hover:bg-neonCyan/15"
          >
            {tech}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
