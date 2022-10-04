import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header.js'

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

  const [users, setUsers] = useState(null)

  // where User data is stored
  const URL = 'http://localhost:4000/user/'

  // grab User data from MongoDB
  const getUsers = async () => {
    const response = await fetch(URL)
    const data = await response.json()

    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

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
    const validUser = users.find((user) => user.username === login.username)
    console.log('validUser found: ', validUser)
    // if username exists in MongoDB check if password exists, else alert username does not exist
    // if password exists, redirect to 'User' page, else alert password was incorrect
    if (validUser) {
      if (validUser.password === login.password) {
        // redirect to '/feed' if valid password
        history.push("/feed")
      } else {
        alert('password incorrect')
      }
    } else {
      alert('username does not exist')
    }
  }

  return (
    <main>
      <Header />
      <div id="login-content">
        <h1>Login Page</h1>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-md-center">
              <div className="col col-lg-4">
                <div>
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={login.username}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div>
                  <label className="form-label">Password</label>
                  <input
                    type="text"
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <input id="login-btn" type="submit" value="Login" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default LogInPage