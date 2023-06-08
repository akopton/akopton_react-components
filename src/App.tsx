import React, { useState } from "react"
import "./App.css"
import { Button, Dropdown, Form, Input, NavItem, NavList } from "./lib"
import { Modal } from "./lib"

function App() {
  const dropdownData = ["element 1", "element 2", "element 3", "element 4"]
  const [dropdownSelectedItem, setDropdownSelectedItem] = useState<string>("")
  const [showModal, setShowModal] = useState<boolean>(false)
  const [login, setLogin] = useState<string>("")
  const errors = {
    login: "",
    password: "",
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleSelect = (el: string) => {
    setDropdownSelectedItem(el)
  }

  const handleSubmit = () => {}
  const handleLogin = () => {}
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
        type="button"
        label="open modal"
        handleClick={() => setShowModal(true)}
      />
      {showModal && (
        <Modal closeModal={closeModal} title="Formularz">
          <Form
            onSubmit={handleSubmit}
            submitBtnText={"Send"}
            submitBtnPos="right"
          >
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
        </Modal>
      )}
      {/* <Dropdown
        data={dropdownData}
        onSelect={handleSelect}
        selectedItem={dropdownSelectedItem}
        placeholder="Wybierz z listy..."
        expandIcon={<div>v</div>}
      /> */}
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
