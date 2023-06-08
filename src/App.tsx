import React, { useState } from "react"
import "./App.css"
import { Button, Dropdown, Form, Input, NavItem, NavList } from "./lib"
import { Modal } from "./lib"

function App() {
  const dropdownData = [
    "element 1",
    "element 2",
    "element 3",
    "element 4",
    "element 5",
  ]
  const [dropdownSelectedItem, setDropdownSelectedItem] = useState<string>("")
  const objectArray = [
    { name: "element 1" },
    { name: "element 2" },
    { name: "element 3" },
    { name: "element 4" },
  ]

  const handleSelect = (el: string) => {
    setDropdownSelectedItem(el)
  }

  const handleClick = () => {
    objectArray.forEach((el) => {
      if (el.name === dropdownSelectedItem) {
        console.log("yes", el)
      }
    })
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Dropdown
        data={dropdownData}
        onSelect={handleSelect}
        selectedItem={dropdownSelectedItem}
        placeholder="Wybierz z listy..."
        expandIcon={<div>v</div>}
      />
      <Button type="button" label={"wyślij"} handleClick={handleClick} />
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
