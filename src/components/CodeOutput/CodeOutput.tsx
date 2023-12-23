import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import Heading from '../Heading/Heading'

export default function CodeOutput({ code }) {
  console.log('codeOutput', code)

  return (
    <>
      {code?.css && (
        <>
          <Heading headingType="h4" text="CSS" />
          <SyntaxHighlighter language="css" style={dracula}>
            {code.css.code}
          </SyntaxHighlighter>
        </>
      )}

      {code?.html && (
        <>
          <Heading headingType="h4" text="HTML" />
          <SyntaxHighlighter language="html" style={dracula}>
            {code.html.code}
          </SyntaxHighlighter>
        </>
      )}

      {code?.javascript && (
        <>
          <Heading headingType="h4" text="JavaScript" />
          <SyntaxHighlighter language="javascript" style={dracula}>
            {code.javascript}
          </SyntaxHighlighter>
        </>
      )}

      {code?.typescript && (
        <>
          <Heading headingType="h4" text="TypeScript" />
          <SyntaxHighlighter language="typescript" style={dracula}>
            {code.typescript}
          </SyntaxHighlighter>
        </>
      )}

      {code?.liquid && (
        <>
          <Heading headingType="h4" text="Liquid" />
          <SyntaxHighlighter language="liquid" style={dracula}>
            {code.liquid}
          </SyntaxHighlighter>
        </>
      )}
    </>
  )
}
