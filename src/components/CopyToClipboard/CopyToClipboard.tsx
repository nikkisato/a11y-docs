import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import React, { useState } from 'react'
import TaskIcon from '@mui/icons-material/Task'

import styles from './CopyToClipboard.module.css'

export default function CopyToClipboardButton({ code }) {
  const [copySuccess, setCopySuccess] = useState(false)

  const copyToClipboard = () => {
    const textField = document.createElement('textarea')
    textField.innerText = code

    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    document.body.removeChild(textField)

    setCopySuccess(true)

    setTimeout(() => setCopySuccess(false), 5000)
  }

  return (
    <div>
      {!copySuccess && (
        <button className={styles.copy} onClick={copyToClipboard}>
          <ContentCopyIcon />
          <span>Copy Code</span>
        </button>
      )}
      {copySuccess && (
        <div className={styles.copied}>
          <TaskIcon />
          <span>Copied!</span>
        </div>
      )}
    </div>
  )
}
