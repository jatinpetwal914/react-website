import htmlQuestions from '../questions/html/questions'
import cssQuestions from '../questions/css/questions'
import jsQuestions from '../questions/javascript/questions'
import reactQuestions from '../questions/react/questions'

const folderOrder = ['04 Feb', '06 April', '11 Feb', '13 April', '13 Feb', '18 Feb', '18 March', '19 Feb', '21 Feb', '22 Feb', '24 April']

const allQuestions = [...htmlQuestions, ...cssQuestions, ...jsQuestions, ...reactQuestions].map((question) => ({
  ...question,
  path: `/output/${question.id}`,
}))

export const questionFolders = folderOrder.map((folder) => ({
  folder,
  questions: allQuestions.filter((question) => question.folder === folder),
}))

export const techFilters = ['All', 'HTML', 'CSS', 'JavaScript', 'React']

const shellDoc = (title, styleBlock, content, scriptBlock) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <style>
    body { font-family: Segoe UI, Arial, sans-serif; background:#0b1020; color:#eef3ff; padding:20px; }
    .card { background:#10182e; padding:16px; border-radius:12px; border:1px solid #24345f; }
    button,input,select,textarea { margin:4px 0; padding:8px; border-radius:8px; border:1px solid #2f477d; background:#0f1730; color:#fff; }
    ${styleBlock || ''}
  </style>
</head>
<body>
  <div class="card">${content}</div>
  ${scriptBlock ? `<script>${scriptBlock}</script>` : ''}
</body>
</html>`

export const getQuestionById = (id) => {
  const question = allQuestions.find((item) => item.id === id)
  if (!question) return null

  const fallbackBody = `<h2>${question.title}</h2><pre>${question.code.replace(/</g, '&lt;')}</pre>`
  const hasFullHtml = typeof question.outputHtml === 'string' && question.outputHtml.trim().toLowerCase().startsWith('<!doctype')
  const outputHtml = hasFullHtml
    ? question.outputHtml
    : shellDoc(
        question.title,
        question.tech === 'CSS' ? question.code : '',
        question.outputHtml || (question.tech === 'HTML' ? question.code : fallbackBody),
        question.tech === 'JavaScript' ? question.code : '',
      )

  return {
    ...question,
    outputHtml,
  }
}
