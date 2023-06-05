import { FormProps } from "../../types/FormProps"
import "./Form.css"

const Form = ({
  onSubmit,
  children,
  submitBtnText,
  submitBtnPos,
}: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="form">
      {children}
      <input
        type="submit"
        value={submitBtnText}
        className={`form__submit-btn btn-${submitBtnPos}`}
      />
    </form>
  )
}

export default Form
