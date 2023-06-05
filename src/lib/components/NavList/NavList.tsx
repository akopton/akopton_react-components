import { ReactElement } from "react"
import { NavListProps } from "../../types/NavListProps"
import "./NavList.css"

const NavList = ({ children, direction }: NavListProps) => {
  return (
    <ul
      className={
        direction === "column" ? "nav-list --column" : "nav-list"
      }
    >
      {children}
    </ul>
  )
}

export default NavList
