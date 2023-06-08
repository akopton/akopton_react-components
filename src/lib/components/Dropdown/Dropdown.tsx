import { useState } from "react"
import { DropdownProps } from "../../types/DropdownProps"
import "./Dropdown.css"

const Dropdown = ({
  data,
  selectedItem,
  onSelect,
  expandIcon,
  placeholder,
}: DropdownProps) => {
  const [showContent, setShowContent] = useState<boolean>(false)

  const Item = ({ el }: { el: string }) => {
    return (
      <li>
        <button
          onClick={() => {
            onSelect(el)
            setShowContent(false)
          }}
          className={selectedItem === el ? "item --selected" : "item"}
        >
          {el}
        </button>
      </li>
    )
  }

  return (
    <div className="dropdown-wrapper">
      <div className="dropdown">
        <button
          onClick={() => setShowContent((prevState) => !prevState)}
          className="dropdown__selected-item"
          style={{ justifyContent: expandIcon ? "space-between" : "center" }}
        >
          {selectedItem ? selectedItem : placeholder}
          {expandIcon ? (
            <div className={showContent ? "icon --opened" : "icon"}>
              {expandIcon}
            </div>
          ) : null}
        </button>
        {showContent && (
          <ul className="dropdown__list">
            {data.map((el, id) => {
              return typeof el === "object" ? (
                <Item el={el.name} key={id} />
              ) : (
                <Item el={el} key={id} />
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dropdown
