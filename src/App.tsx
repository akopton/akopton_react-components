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
      <form onSubmit={handleSubmit} autoComplete="off">
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
          success={loginConfirmed}
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
