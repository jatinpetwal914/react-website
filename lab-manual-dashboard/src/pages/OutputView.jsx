import { useParams } from 'react-router-dom'
import { getQuestionById } from '../data/questions'

function OutputView() {
  const { id } = useParams()
  const question = getQuestionById(id)

  if (!question) {
    return <div className="p-8 text-white">Output not found.</div>
  }

  return (
    <div className="h-screen w-full bg-black">
      <iframe
        title={`${question.title} output`}
        srcDoc={question.outputHtml}
        className="h-full w-full border-0"
        sandbox="allow-scripts allow-forms allow-popups"
      />
    </div>
  )
}

export default OutputView
