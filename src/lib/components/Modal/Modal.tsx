import "./Modal.css"

const Modal = () => {
  return (
    <div className="blur">
      <div className="modal-window">
        <div className="modal-window__close"></div>
        <h2 className="modal-window__title">to jest modal</h2>
        <div className="modal-window__content">
          <ul>
            <li>opcja 1</li>
            <li>opcja 2</li>
            <li>opcja 3</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Modal
