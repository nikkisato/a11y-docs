import { type Code } from '~/lib/sanity.queries'

export default function CodeCard({ code }: { code: Code }) {
  console.log('codeBOB', code.css)
  return (
    <div className="card">
      <h3>{code.title}</h3>
      {/* <div>{code.css}</div> */}
    </div>
  )
}
