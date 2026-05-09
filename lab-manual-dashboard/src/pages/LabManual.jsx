import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import FolderSection from '../components/FolderSection'
import { questionFolders, techFilters } from '../data/questions'

function LabManual() {
  const [searchParams] = useSearchParams()
  const initialFilter = techFilters.includes(searchParams.get('tech')) ? searchParams.get('tech') : 'All'
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState(initialFilter)
  const [activeFolder, setActiveFolder] = useState(questionFolders[0]?.folder || '')

  const filteredFolders = useMemo(
    () =>
      questionFolders.map((folder) => ({
        ...folder,
        questions: folder.questions.filter((question) => {
          const techMatch = activeFilter === 'All' || question.tech === activeFilter
          const searchMatch = question.title.toLowerCase().includes(search.toLowerCase())
          return techMatch && searchMatch
        }),
      })),
    [activeFilter, search],
  )

  const visibleFolders = filteredFolders.filter((folder) => folder.questions.length > 0)
  const totalVisible = visibleFolders.reduce((sum, folder) => sum + folder.questions.length, 0)

  return (
    <section id="manual" className="grid gap-4 md:grid-cols-[300px_1fr]">
      <Sidebar folders={visibleFolders} activeFolder={activeFolder} setActiveFolder={setActiveFolder} />
      <div className="space-y-4">
        <div className="rounded-2xl border border-white/10 bg-glass p-4 backdrop-blur-md">
          <div className="mb-4 grid gap-3 lg:grid-cols-[1fr_auto]">
            <SearchBar value={search} onChange={setSearch} />
            <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} filters={techFilters} />
          </div>
          <p className="text-xs text-slate-300">Showing {totalVisible} practical questions (PHP excluded).</p>
        </div>
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
          <div className="space-y-4">
            {visibleFolders.map((folder, index) => (
              <motion.div
                key={folder.folder}
                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
              >
                <FolderSection section={folder} defaultOpen={index === 0} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LabManual
