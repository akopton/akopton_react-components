import React, { useState } from "react"
import "./App.css"
import { Button } from "./lib"
import { Modal } from "./lib"

const DivComponent = () => {
  return <div>siemka</div>
}

function App() {
  const [showModal, setShowModal] = useState<boolean>(false)

  function handleClick() {
    setShowModal(true)
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
      <Button
        id="btn1"
        label={"send dudes"}
        type="button"
        handleClick={handleClick}
      />
      {showModal && <Modal />}
    </div>
  )
}

export default App
