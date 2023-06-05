import React, { useState } from "react"
import "./App.css"
import { Button, Input, NavItem, NavList } from "./lib"
import { Modal } from "./lib"

function App() {
  const [login, setLogin] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errors, setErrors] = useState<{
    login?: string
    password?: string
  }>()

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
    setErrors({ ...errors, password: undefined })
  }

  const handleLogin = (e: React.FormEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value)
    setErrors({ ...errors, login: undefined })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!password)
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }))
    if (!login)
      setErrors((prevErrors) => ({ ...prevErrors, login: "Login is required" }))
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
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        style={{ display: "flex", flexDirection: "column", gap: "50px" }}
      >
        <Input
          id="login"
          type="text"
          name="login"
          placeholder="Login"
          value={login}
          handleChange={handleLogin}
          error={errors?.login}
        />
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          handleChange={handlePassword}
          error={errors?.password}
        />
        <input type="submit" onClick={handleSubmit} />
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
