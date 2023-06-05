import { ReactElement } from "react"

export type ModalProps = {
  children?: ReactElement[]
  closeModal: () => void
  title?: string
}
