import CloseIcon from '@mui/icons-material/Close'
import classNames from 'classnames'
import FocusTrap from 'focus-trap-react'

import styles from './Modal.module.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  console.log('Modal isOpen:', isOpen)

  const modalClass = classNames({
    [styles.open]: isOpen,
    [styles.modalContainer]: true,
  })

  let modalContent = ''

  return (
    <>
      {/* <FocusTrap active={isOpen}>
        <div className={modalClass}>
          {isOpen && (
            <button
              onClick={onClose}
              aria-label="Close Modal"
              className={classNames(styles.closeButton)}
            >
              <CloseIcon className="icon" />
            </button>
          )}
          {isOpen && <div className={styles.modalContent}>{modalContent}</div>}
        </div>
      </FocusTrap> */}
      <div className={styles.modalOverlay} />
    </>
  )
}
