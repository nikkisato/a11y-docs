import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import Heading from '../Heading/Heading'

export default function CodeOutput({ code }) {
  console.log('CODE OUTPUT', code)

  switch (code) {
    case 'css':
      return (
        <>
          <Heading headingType="h4" text="CSS" />
          <SyntaxHighlighter language="css" style={dracula}>
            {code.css}
          </SyntaxHighlighter>
        </>
      )
    case 'html':
      return (
        <>
          <Heading headingType="h4" text="HTML" />
          <SyntaxHighlighter language="html" style={dracula}>
            {code.html}
          </SyntaxHighlighter>
        </>
      )
    case 'javascript':
      return (
        <>
          <Heading headingType="h4" text="Javascript" />
          <SyntaxHighlighter language="javascript" style={dracula}>
            {code.javascript}
          </SyntaxHighlighter>
        </>
      )
    case 'typescript':
      return (
        <>
          <Heading headingType="h4" text="Typescript" />
          <SyntaxHighlighter language="typescript" style={dracula}>
            {code.typescript}
          </SyntaxHighlighter>
        </>
      )
    case 'liquid':
      return (
        <>
          <Heading headingType="h4" text="Liquid" />
          <SyntaxHighlighter language="liquid" style={dracula}>
            {code}
          </SyntaxHighlighter>
        </>
      )
  }
}
