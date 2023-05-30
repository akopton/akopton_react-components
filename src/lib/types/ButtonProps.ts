export type ButtonProps = {
  id?: string
  style?: string
  type:
    | "button"
    | "submit"
    | "reset"
    | undefined
  name?: string
  label: string
  handleClick: () => void
  cssStyles?: {}
}
