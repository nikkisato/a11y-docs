import { type Code } from '~/lib/sanity.queries'

export default function CodeCard({ code }: { code: Code }) {
  return <div className="card">{code.title}</div>
}
