import React from 'react'
import { useState } from 'react'

// Page Containing SignUp Form
// Handles Submission by getting 'createUser' prop passed down from SignUpForm

// ###############
// '/signup' route
// ###############

// ###########################
// TEST AFTER BACKEND IS SETUP
// ###########################

const SignUpPage = (props) => {
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
    // console.log(signUp)
    setSignUp({ ...signUp, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    // stop page from refreshing
    event.preventDefault()

    // createUser method passed down from SignUpForm component
    // props.createUser(signUp)
    console.log('created user', signUp)
    // reset signUp
    setSignUp({
      username: "",
      password: "",
      posts: "",
      image: ""
    })
  }

  return (
    <div>
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