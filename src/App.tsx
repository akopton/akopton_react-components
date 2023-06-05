import React, { useState } from "react"
import "./App.css"
import { Button, Dropdown, Form, Input, NavItem, NavList } from "./lib"
import { Modal } from "./lib"

function App() {
  const dropdownData = ["element 1", "element 2", "element 3", "element 4"]
  const [dropdownSelectedItem, setDropdownSelectedItem] = useState<string>("")
  const handleSelect = (el: string) => {
    setDropdownSelectedItem(el)
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
      <Dropdown
        data={dropdownData}
        onSelect={handleSelect}
        selectedItem={dropdownSelectedItem}
      />
    </div>
  )
}

export default App

{
  /* 

  <Form onSubmit={handleSubmit} submitBtnText={"Send"} submitBtnPos="right">
        <Input
          id="login"
          type="text"
          name="login"
          value={login}
          handleChange={handleLogin}
          placeholder="login"
          error={errors?.login}
        />
      </Form>
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
