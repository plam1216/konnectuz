import React from "react";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";

function Settings(props) {
    let current = JSON.parse(localStorage.getItem("currentUser"))
    let history = useHistory();

    const URL = `http://localhost:4000/user/`
    async function deleteUser() {
        await fetch(URL,{method: 'DELETE'})
    }
    
    const handleSubmit = () => {
        localStorage.clear();
        deleteUser();
        history.push("/")
    }

    return (
        <div className="settings">
            <Header />
            <button onClick={handleSubmit}>Delete Account</button>
          
        </div>
    )
}


export default Settings 