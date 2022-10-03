import React, {useEffect} from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header'

// ###############
// '/signup' route
// ###############

const SignUpPage = (props) => {
  let history = useHistory()
  const [users, setUsers] = useState(null)

  // where User data is stored
  const URL = 'http://localhost:4000/user/'

  // grab and display data from MongoDB
  const getUsers = async () => {
      const response = await fetch(URL)
      const data = await response.json()

      setUsers(data)
  }

  // create a user using information from sign up form
  const createUser = async (user) => {
      // by default fetch GETs, change to POST to create
      await fetch(URL, {
          method: "POST",
          headers: {
              "Content-Type": "Application/json"
          },
          body: JSON.stringify(user)
      })
      getUsers()
  }

  useEffect(() => {
      getUsers()
  }, [])

  // sign up form initially set to empty values
  const [signUp, setSignUp] = useState({
    username: "",
    password: "",
    posts: [],
    image: ""
  })

  // handleChanges made to form when user types
  const handleChange = (event) => {
    // spread signUp object
    // reassign [key]:value pairs
    setSignUp({ ...signUp, [event.target.name]: event.target.value })
  }

  // creates the new user, resets state of signUp to empty, redirects to '/'
  const handleSubmit = (event) => {
    // stop page from refreshing
    event.preventDefault()

    // createUser method passed down from SignUpForm component
    // props.createUser(signUp)
    createUser(signUp)
    console.log('created user', signUp)
    console.log('everybody', users)
    // console.log('everybody', props.user)
    // reset signUp
    setSignUp({
      username: "",
      password: "",
      posts: [],
      image: ""
    })

    history.push("/")
  }

  return (
    <div>
      <Header/>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={signUp.username}
          name="username"
          onChange={handleChange}
          />
          <label>Password</label>
        <input
          type="text"
          value={signUp.password}
          name="password"
          onChange={handleChange}
          />
          <label>Profile Picture (URL)</label>
        <input
          type="text"
          value={signUp.image}
          name="image"
          onChange={handleChange}
        />

        <input type="submit" value="Create Profile"></input>
      </form>
    </div>
  )
}

export default SignUpPage