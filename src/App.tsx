import React, { useState } from "react"
import "./App.css"
import { Button, Form, Input, NavItem, NavList } from "./lib"
import { Modal } from "./lib"

function App() {
  const [login, setLogin] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errors, setErrors] = useState<{
    login?: string
    password?: string
  }>()
  const [loginConfirmed, setLoginConfirmed] = useState<boolean>(false)

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
    setErrors({ ...errors, password: undefined })
    setLoginConfirmed(false)
  }

  const handleLogin = (e: React.FormEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value)
    setErrors({ ...errors, login: undefined })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("siemk")

    if (!password)
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }))

    if (password && password !== "admin")
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is invalid",
      }))

    if (!login)
      setErrors((prevErrors) => ({ ...prevErrors, login: "Login is required" }))

    if (password && password === "admin") setLoginConfirmed(true)
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
        <Input
          id="login"
          type="text"
          name="login"
          value={login}
          handleChange={handleLogin}
          placeholder="login"
          error={errors?.login}
        />
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
