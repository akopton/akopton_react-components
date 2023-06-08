import { ReactElement } from "react"

export type DropdownProps = {
  data: any[]
  onSelect: (el: string) => void
  selectedItem: string
  expandIcon?: ReactElement
  placeholder: string
}
