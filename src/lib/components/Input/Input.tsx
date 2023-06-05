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
  success,
  successIcon,
  errorIcon,
  styles,
}: InputProps) => {
  return (
    <div className="input-field">
      <div className="input-field__input-wrapper">
        <input
          id={id}
          className={
            error ? "input --error" : success ? "input --success" : "input"
          }
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          style={styles}
        />
        <label htmlFor={name} className="floating-placeholder">
          {placeholder}
        </label>
        {success && <div className="success-icon">{successIcon}</div>}
        {error && <div className="error-icon">{errorIcon}</div>}
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
