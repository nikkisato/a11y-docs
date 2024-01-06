import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  a11yDark,
  dracula,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import CopyToClipboardButton from '../CopyToClipboard/CopyToClipboard'
import Heading from '../Heading/Heading'
import styles from './CodeOutput.module.css'

export default function CodeOutput({ code }) {
  return (
    <>
      {code?.css && (
        <>
          <div className={styles.card}>
            <div className={styles.header}>
              <Heading headingType="h4" text="CSS" />
              <CopyToClipboardButton code={code.css.code} />
            </div>
            <SyntaxHighlighter
              lineProps={{
                style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
              }}
              language="css"
              style={a11yDark}
              wrapLines={true}
            >
              {code.css.code}
            </SyntaxHighlighter>
          </div>
        </>
      )}

      {code?.html && (
        <>
          <div className={styles.card}>
            <div className={styles.header}>
              <Heading headingType="h4" text="HTML" />
              <CopyToClipboardButton code={code.html.code} />
            </div>
            <SyntaxHighlighter
              lineProps={{
                style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
              }}
              language="html"
              style={a11yDark}
              wrapLines={true}
            >
              {code.html.code}
            </SyntaxHighlighter>
          </div>
        </>
      )}

      {code?.javascript && (
        <>
          <div className={styles.card}>
            <div className={styles.header}>
              <Heading headingType="h4" text="JavaScript" />
              <CopyToClipboardButton code={code.javascript.code} />
            </div>
            <SyntaxHighlighter
              lineProps={{
                style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
              }}
              language="javascript"
              style={a11yDark}
              wrapLines={true}
            >
              {code.javascript.code}
            </SyntaxHighlighter>
          </div>
        </>
      )}

      {code?.typescript && (
        <>
          <div className={styles.card}>
            <div className={styles.header}>
              <Heading headingType="h4" text="TypeScript" />
              <CopyToClipboardButton code={code.typescript.code} />
            </div>

            <SyntaxHighlighter
              lineProps={{
                style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
              }}
              language="typescript"
              style={a11yDark}
              wrapLines={true}
            >
              {code.typescript.code}
            </SyntaxHighlighter>
          </div>
        </>
      )}

      {code?.liquid && (
        <>
          <div className={styles.card}>
            <div className={styles.header}>
              <Heading headingType="h4" text="Liquid" />
              <CopyToClipboardButton code={code.liquid.code} />
            </div>
            <SyntaxHighlighter
              lineProps={{
                style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
              }}
              language="liquid"
              style={a11yDark}
              wrapLines={true}
            >
              {code.liquid.code}
            </SyntaxHighlighter>
          </div>
        </>
      )}
    </>
  )
}
