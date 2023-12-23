import { type Code } from '~/lib/sanity.queries'

import CodeOutput from '../CodeOutput/CodeOutput'

export default function CodeCard({ code }: { code: Code }) {
  console.log('codeCard', code)
  return (
    <div className="card">
      <CodeOutput code={code} />
    </div>
  )
}
