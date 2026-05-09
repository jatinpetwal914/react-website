import { Link, useParams } from 'react-router-dom'
import { ExternalLink, FolderCode } from 'lucide-react'
import { getQuestionById } from '../data/questions'

function QuestionDetail() {
  const { id } = useParams()
  const question = getQuestionById(id)

  if (!question) {
    return <div className="rounded-2xl border border-white/10 bg-glass p-6">Question not found.</div>
  }

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-white/10 bg-glass p-5">
        <p className="text-xs uppercase tracking-widest text-neonCyan">{question.tech}</p>
        <h2 className="mt-2 text-2xl font-semibold">
          Question {question.number}: {question.title}
        </h2>
        <p className="mt-2 text-sm text-slate-300">Folder: {question.folder}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => window.open(`/output/${question.id}`, '_blank')}
            className="inline-flex items-center gap-2 rounded-full border border-neonCyan/50 px-4 py-2 text-sm text-neonCyan hover:bg-neonCyan/15"
          >
            Open Output <ExternalLink size={15} />
          </button>
          <Link to="/lab-manual" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 hover:bg-white/10">
            Back to Lab Manual <FolderCode size={15} />
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#0c1224] p-4">
        <p className="mb-3 text-sm font-semibold text-neonCyan">Question Code</p>
        <pre className="overflow-x-auto rounded-xl bg-black/40 p-4 text-xs text-slate-200">
          <code>{question.code}</code>
        </pre>
      </div>
    </section>
  )
}

export default QuestionDetail
