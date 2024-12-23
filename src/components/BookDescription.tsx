import ReactMarkdown from 'react-markdown'

export function BookDescription({ description }: { description: string }) {
  return (
    <ReactMarkdown className="prose">
      {description}
    </ReactMarkdown>
  )
}
