import React from "react"
import "./App.css"
import { Button } from "./lib"

function App() {
  const handleClick = () => {
    console.log("elo")
  }
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent:
          "center",
      }}
    >
      <Button
        id='btn1'
        label='send dudes'
        type='button'
        handleClick={
          handleClick
        }
      />
    </div>
  )
}

export default App
