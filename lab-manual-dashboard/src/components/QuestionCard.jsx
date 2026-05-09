import { motion } from 'framer-motion'
import { ExternalLink, FileCode2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const techColor = {
  HTML: 'bg-orange-500/20 text-orange-200 border-orange-400/50',
  CSS: 'bg-blue-500/20 text-blue-200 border-blue-400/50',
  JavaScript: 'bg-yellow-500/20 text-yellow-100 border-yellow-400/50',
  React: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/50',
}

function QuestionCard({ question }) {
  const openOutput = () => {
    window.open(question.path, '_blank')
  }

  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -4 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:shadow-glow"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <FileCode2 size={16} className="text-neonCyan" />
          <span>Question {question.number}</span>
        </div>
        <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${techColor[question.tech]}`}>
          {question.tech}
        </span>
      </div>
      <h4 className="mb-4 text-sm text-slate-200">{question.title}</h4>
      <div className="flex flex-wrap gap-2">
        <Link
          to={`/question/${question.id}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
        >
          View Code
        </Link>
        <button
          onClick={openOutput}
          className="inline-flex items-center gap-2 rounded-full border border-neonCyan/50 px-4 py-2 text-xs font-semibold text-neonCyan transition hover:bg-neonCyan/20"
        >
          Open Output <ExternalLink size={14} />
        </button>
      </div>
    </motion.article>
  )
}

export default QuestionCard
