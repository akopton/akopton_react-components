import { NavItemProps } from "../../types/NavItemProps"
import "./NavItem.css"

const NavItem = ({ text, handleClick }: NavItemProps) => {
  return (
    <li className="nav-item__wrapper">
      <button className="nav-item" onClick={handleClick}>
        {text}
      </button>
    </li>
  )
}

export default NavItem
