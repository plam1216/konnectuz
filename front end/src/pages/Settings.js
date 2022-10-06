import React from "react";
import Header from "../components/Header";

function Settings(props) {
    let current = JSON.parse(localStorage.getItem("currentUser"))

        const URL = `http://localhost:4000/user`
    async function deleteUser(id) {
        await fetch(URL + id,{method: 'DELETE'})
    }
    return (
        <div className="settings">
            <Header />
            <button onClick={deleteUser}>Delete Account</button>
          
        </div>
    )
}


export default Settings 