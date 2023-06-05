import { ReactElement } from "react"

export type FormProps = {
  onSubmit: (e: React.FormEvent) => void
  children?: ReactElement | ReactElement[]
  submitBtnText: string
  submitBtnPos?: "center" | "left" | "right"
}
