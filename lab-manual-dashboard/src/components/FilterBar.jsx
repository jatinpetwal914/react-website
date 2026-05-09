import { motion } from 'framer-motion'

function FilterBar({ activeFilter, onFilterChange, filters }) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(filter)}
          className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
            activeFilter === filter
              ? 'bg-neonPurple/40 text-white shadow-purple'
              : 'border border-white/15 bg-white/5 text-slate-200 hover:border-neonCyan/50'
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  )
}

export default FilterBar
