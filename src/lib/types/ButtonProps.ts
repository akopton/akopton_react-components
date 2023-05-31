import React, {
  ReactElement,
  ReactNode,
} from "react"
import ts, {
  JsxElement,
} from "typescript"

export type ButtonProps = {
  id?: string
  style?: string
  type:
    | "button"
    | "submit"
    | "reset"
    | undefined
  name?: string
  label: ReactElement | string
  handleClick: () => void
  cssStyles?: {}
}
