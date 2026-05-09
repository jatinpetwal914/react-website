import { useState } from 'react'
import { ChevronDown, Folder } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import QuestionCard from './QuestionCard'

function FolderSection({ section, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  if (!section.questions.length) return null

  return (
    <section id={section.folder} className="rounded-2xl border border-white/10 bg-glass p-4 backdrop-blur-md">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-xl px-2 py-2 text-left"
      >
        <span className="flex items-center gap-2 font-semibold text-white">
          <Folder size={18} className="text-neonCyan" />
          {section.folder}
        </span>
        <ChevronDown
          size={18}
          className={`text-neonCyan transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 grid gap-3 overflow-hidden md:grid-cols-2 xl:grid-cols-3"
          >
            {section.questions.map((question) => (
              <QuestionCard key={`${section.folder}-${question.number}-${question.title}`} question={question} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FolderSection
