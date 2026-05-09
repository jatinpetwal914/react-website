import { Search } from 'lucide-react'

function SearchBar({ value, onChange }) {
  return (
    <label className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
      <Search size={18} className="text-neonCyan" />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by question title..."
        className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
      />
    </label>
  )
}

export default SearchBar
