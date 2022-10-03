import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

// ###############
// '/login' route
// ###############

// ###########################
// TEST AFTER BACKEND IS SETUP
// ###########################

const LogInPage = (props) => {
  
  // useHistory is useNavigate in React 6
  // used to redirect
  let history = useHistory()

  const [login, setLogin] = useState({
    username: "",
    password: ""
  })

  const handleChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // check for user in MongoDB with the same username as which was submitted
    console.log('inputted login:', login)
    const validUser = props.dbUsers.find((user) => user.username === login.username)
    console.log('validUser found: ', validUser)
    // if username exists in MongoDB check if password exists, else alert username does not exist
    // if password exists, redirect to 'User' page, else alert password was incorrect
    if (validUser) {
      if (validUser.password === login.password) {
        // redirect to '/user/:id' if valid password
        history.push("/user/:id")
      } else {
        alert('password incorrect')
      }
    } else {
      alert('username does not exist')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={login.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default LogInPage