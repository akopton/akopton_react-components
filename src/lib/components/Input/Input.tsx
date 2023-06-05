import React, { useState } from "react"
import { InputProps } from "../../types/InputProps"
import "./Input.css"

const Input = ({
  id,
  type,
  name,
  placeholder,
  value,
  handleChange,
  error,
}: InputProps) => {
  // const [inputError, setInputError] = useState<string | undefined>(error)

  return (
    <div className="input-field">
      <div className="input-field__input-wrapper">
        <input
          id={id}
          className={error ? "input --error" : "input"}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        <label htmlFor={name} className="floating-placeholder">
          {placeholder}
        </label>
      </div>
      {error ? (
        <span className="input-field__error error-line">{error}</span>
      ) : (
        <span className="error-line"></span>
      )}
    </div>
  )
}
export default Input
