import { ReactElement } from "react"
import "./Modal.css"

const Modal = ({
  children,
  closeModal,
  title,
}: {
  children?: ReactElement[]
  closeModal: () => void
  title?: string
}) => {
  return (
    <div className="blur">
      <div className="modal-window">
        <button
          className="modal-window__close"
          onClick={closeModal}
        ></button>
        {title && <h2 className="modal-window__title">{title}</h2>}
        <div className="modal-window__content">{children}</div>
      </div>
    </div>
  )
}

export default Modal
