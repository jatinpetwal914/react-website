import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { name: 'Home', to: '/' },
  { name: 'Lab Manual', to: '/lab-manual' },
  { name: 'About', to: '/about' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-30 w-full border-b border-white/10 bg-black/35 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="text-sm font-semibold tracking-widest text-neonCyan md:text-base">
          FSWD LAB SHOWCASE
        </Link>
        <nav className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition ${
                  isActive ? 'bg-neonPurple/30 text-white shadow-purple' : 'text-slate-300 hover:bg-white/10'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <button className="rounded-lg border border-white/20 p-2 md:hidden" onClick={() => setOpen((prev) => !prev)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2 border-t border-white/10 bg-black/70 px-4 py-4 md:hidden"
        >
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-neonPurple/30 text-white' : 'text-slate-300'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </motion.nav>
      )}
    </header>
  )
}

export default Navbar
