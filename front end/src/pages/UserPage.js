import React from 'react'
import Header from '../components/Header'

// #####################################
// redirected here after succesful login
// shows user._id posts
// #####################################

const UserHome = () => {
  return (
    <div>
      <Header />
      <h1>This is the user_id's Page</h1>
      {/* <Posts/> */}
    </div>
  )
}

export default UserHome