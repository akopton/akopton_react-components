import React, { useState } from "react"
import "./App.css"
import { Button, Input, NavItem, NavList } from "./lib"
import { Modal } from "./lib"

const DivComponent = () => {
  return <div>siemka</div>
}

function App() {
  const [value, setValue] = useState<string>()
  const [errors, setErrors] = useState<{ password: string | undefined }>()

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    setErrors({ ...errors, password: undefined })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value) {
      setErrors({ ...errors, password: "this field is invalid" })
    }
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
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="login"
          value={value}
          handleChange={handleChange}
          error={errors?.password}
        />
      </form>
    </div>
  )
}

export default App

{
  /* 
  <NavList>
        <NavItem text="dsadsadasdsa" handleClick={handleClick} />
        <NavItem text="dsadsadasdsa" handleClick={handleClick} />
        <NavItem text="dsadsadasdsa" handleClick={handleClick} />
        <NavItem text="dsadsadasdsa" handleClick={handleClick} />
        <NavItem text="dsadsadasdsa" handleClick={handleClick} />
      </NavList>
  <Button
        id="btn1"
        label={"send dudes"}
        type="button"
        handleClick={handleClick}
      />
      {showModal && <Modal closeModal={closeModal} title="" />} */
}
