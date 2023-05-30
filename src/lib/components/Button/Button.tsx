import React from "react"
import "./Button.css"
import { ButtonProps } from "../../types/ButtonProps"

const Button = ({
  id,
  style,
  type,
  name,
  label,
  handleClick,
  cssStyles,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={`btn btn--${style}`}
      name={name}
      type={type}
      onClick={handleClick}
      style={cssStyles}
    >
      {label}
    </button>
  )
}

export default Button
