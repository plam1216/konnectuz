import React from 'react'
import { Route } from 'react-router-dom'

// ###########################
// TEST AFTER BACKEND IS SETUP
// ###########################

const LogInForm = () => {

  // where User data is stored
  // route should be to wherever API data is
  const URL = 'http://localhost:4000'

  const [dbUsers, setUser] = useState(null)

  // grab users from MongoDB
  const getUsers = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setUser(data)
  }

  // every time the page renders, it will getUsers()
  useEffect(() => {
    getUsers()
  }, [])

  return (
      <Route
        path="/login"
        render={(rp) => (
          <LogInPage
          // pass down users so we can later verify if they exist
            dbUsers={dbUsers}
            {...rp}
          />
        )}
      />
  )


}

export default LogInForm