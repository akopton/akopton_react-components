import React, { useState } from "react"
import { InputProps } from "../../types/InputProps"
import "./Input.css"

const Input = ({ type, name, value, handleChange, error }: InputProps) => {
  // const [inputError, setInputError] = useState<string | undefined>(error)

  return (
    <div className="input__wrapper">
      <input
        className={error ? "input --error" : "input"}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {error && <span>{error}</span>}
    </div>
  )
}
export default Input
