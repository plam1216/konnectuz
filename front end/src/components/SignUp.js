import React, { useEffect } from 'react'
import { useState } from 'react'
import { Route } from 'react-router'
import SignUpPage from '../pages/SignUpPage.js'

// ###########################
// TEST AFTER BACKEND IS SETUP
// ###########################

const SignUpForm = (props) => {


    const [user, setUser] = useState(null)

    // where User data is stored
    const URL = 'http://localhost:4000'

    // grab and display data from MongoDB
    const getUsers = async () => {
        const response = await fetch(URL)
        const data = await response.json()

        setUser(data)
    }

    // this method is going to be passed into SignUpPage
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

    return (
        <div>
            <Route path="/signup">
                <SignUpPage
                    user={user}
                    createUser={createUser}
                />
            </Route>
        </div >
    )
}

export default SignUpForm