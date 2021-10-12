import React from 'react'
import ReactDom from 'react-dom'
import './Modal.scss'

const Modal = ({
    opened,
    children,
    onClose
}) => {
    const cardOnClick = e => {
    e.stopPropagation()
    }
    return opened
    ? ReactDom.createPortal(
        <div
          className="modal"
          onClick={onClose}
        >
            <div className="modal__content" onClick={cardOnClick}>
              {children}
            </div>
        </div>,
        document.getElementById('portal'),
      )
    : null
}

export {Modal}
