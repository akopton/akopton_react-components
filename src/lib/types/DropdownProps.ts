import { ReactElement } from "react"

export type DropdownProps = {
  data: string[]
  onSelect: (el: string) => void
  selectedItem: string
  expandIcon?: ReactElement
  placeholder: string
}
