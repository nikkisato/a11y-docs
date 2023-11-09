import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import Heading from '../Heading/Heading'

export default function CodeOutput({ code }) {
  const { css, html, javascript, typescript, liquid } = code

  return (
    <>
      {css && (
        <>
          <Heading headingType="h4" text="CSS" />
          <SyntaxHighlighter language="css" style={dracula}>
            {css.code}
          </SyntaxHighlighter>
        </>
      )}

      {html && (
        <>
          <Heading headingType="h4" text="HTML" />
          <SyntaxHighlighter language="html" style={dracula}>
            {html.code}
          </SyntaxHighlighter>
        </>
      )}

      {javascript && (
        <>
          <Heading headingType="h4" text="JavaScript" />
          <SyntaxHighlighter language="javascript" style={dracula}>
            {javascript}
          </SyntaxHighlighter>
        </>
      )}

      {typescript && (
        <>
          <Heading headingType="h4" text="TypeScript" />
          <SyntaxHighlighter language="typescript" style={dracula}>
            {typescript}
          </SyntaxHighlighter>
        </>
      )}

      {liquid && (
        <>
          <Heading headingType="h4" text="Liquid" />
          <SyntaxHighlighter language="liquid" style={dracula}>
            {liquid}
          </SyntaxHighlighter>
        </>
      )}
    </>
  )
}
