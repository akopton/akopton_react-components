import React, { useState } from "react"
import "./App.css"
import { Button, NavItem, NavList } from "./lib"
import { Modal } from "./lib"

const DivComponent = () => {
  return <div>siemka</div>
}

function App() {
  const [showModal, setShowModal] = useState<boolean>(false)

  function handleClick() {
    console.log("eloooo")
  }

  function closeModal() {
    setShowModal(false)
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NavList>
        <NavItem text="dsadsadasdsa" handleClick={handleClick} />
        <NavItem text="dsadsadasdsa" handleClick={handleClick} />
        <NavItem text="dsadsadasdsa" handleClick={handleClick} />
        <NavItem text="dsadsadasdsa" handleClick={handleClick} />
        <NavItem text="dsadsadasdsa" handleClick={handleClick} />
      </NavList>
    </div>
  )
}

export default App

{
  /* <Button
        id="btn1"
        label={"send dudes"}
        type="button"
        handleClick={handleClick}
      />
      {showModal && <Modal closeModal={closeModal} title="" />} */
}
