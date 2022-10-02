import React from 'react'

const LogInForm = () => {
  // handleSubmit() {
    // event.preventDefault()
    // check if username and password is valid
  // }

  return (
    <div>
      <h1>Log In</h1>
      <form>
        <label>Username</label>
        <input type="text" name="username"></input>
        <label>Password</label>
        <input type="text" name="password"></input>
      </form>
    </div>
  )
}

export default LogInForm