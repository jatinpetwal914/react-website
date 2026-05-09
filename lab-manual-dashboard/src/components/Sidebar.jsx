import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, FolderTree, Menu } from 'lucide-react'

function Sidebar({ folders, activeFolder, setActiveFolder }) {
  const [open, setOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(() =>
    Object.fromEntries(folders.map((folder) => [folder.folder, false])),
  )

  const folderCounts = useMemo(
    () => Object.fromEntries(folders.map((folder) => [folder.folder, folder.questions.length])),
    [folders],
  )

  const toggleFolder = (name) => {
    setCollapsed((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <>
      <button
        className="mb-3 flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Menu size={16} /> Explorer
      </button>
      <aside
        className={`${
          open ? 'block' : 'hidden'
        } rounded-2xl border border-white/10 bg-glass p-4 backdrop-blur-md md:sticky md:top-24 md:block md:h-[calc(100vh-8rem)] md:overflow-y-auto`}
      >
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300">
          <FolderTree size={14} className="text-neonCyan" /> Lab Explorer
        </p>
        <div className="space-y-2">
          {folders.map((folder) => (
            <div key={folder.folder} className="rounded-xl border border-white/10 bg-black/20 p-2">
              <button
                onClick={() => toggleFolder(folder.folder)}
                className="flex w-full items-center justify-between text-xs text-slate-200"
              >
                <span>{folder.folder}</span>
                {collapsed[folder.folder] ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
              </button>
              {!collapsed[folder.folder] && (
                <motion.button
                  whileHover={{ x: 3 }}
                  onClick={() => {
                    setActiveFolder(folder.folder)
                    document.getElementById(folder.folder)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    setOpen(false)
                  }}
                  className={`mt-2 w-full rounded-lg px-2 py-2 text-left text-xs transition ${
                    activeFolder === folder.folder ? 'bg-neonPurple/35 text-white' : 'bg-white/5 text-slate-300'
                  }`}
                >
                  Open {folder.folder} ({folderCounts[folder.folder]})
                </motion.button>
              )}
            </div>
          ))}
        </div>
      </aside>
    </>
  )
}

export default Sidebar
