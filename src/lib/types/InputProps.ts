import { ReactElement } from "react"

export type InputProps = {
  type: string
  name: string
  value?: string
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void
  error?: string
  successIcon?: ReactElement
  errorIcon?: ReactElement
}
