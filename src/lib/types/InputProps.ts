import { ReactElement } from "react"

export type InputProps = {
  id: string
  type: string
  name: string
  placeholder?: string
  value?: string
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void
  error?: string
  successIcon?: ReactElement
  errorIcon?: ReactElement
}
