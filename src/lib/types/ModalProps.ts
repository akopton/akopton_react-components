import { ReactElement } from "react"

export type ModalProps = {
  children?: ReactElement | ReactElement[]
  closeModal: () => void
  title?: string
  closeOnOutsideClick?: boolean
}
