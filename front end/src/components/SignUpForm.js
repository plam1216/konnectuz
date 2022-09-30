import React from 'react'

const SignUpForm = (props) => {
    // handleSubmit()
  return (
    <form>
        <input type="text" placeholder="Username"></input>
        <input type="text" placeholder="Password"></input>
        <input type="text" placeholder="Profile Picture"></input>
        <input type="submit" value="submit"></input>
    </form>
  )
}

export default SignUpForm