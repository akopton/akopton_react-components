import { ReactElement } from "react"
import "./Modal.css"
import { ModalProps } from "../../types/ModalProps"

const Modal = ({
  children,
  closeModal,
  title,
  closeOnOutsideClick,
}: ModalProps) => {
  return (
    <div
      className="blur"
      onClick={() => {
        if (!closeOnOutsideClick) return
        closeModal()
      }}
    >
      <div className="modal-window">
        <button className="modal-window__close" onClick={closeModal}></button>
        {title && <h2 className="modal-window__title">{title}</h2>}
        <div className="modal-window__content">{children}</div>
      </div>
    </div>
  )
}

export default Modal
