import React from "react";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";

function Settings(props) {
    let current = JSON.parse(localStorage.getItem("currentUser"))
    let history = useHistory();

    const URL = `http://localhost:4000/user/${current._id}`
    async function deleteUser() {
        await fetch(URL,{method: 'DELETE'})
    }
        function confirmDelete() {
                if(window.confirm('are you sure you want to delete your account')) {handleSubmit()}
        }

    const handleSubmit = () => {
        localStorage.clear();
        deleteUser();
        history.push("/feed")
    }
    return (
        <div className="settings">
            <Header />
            <button onClick={confirmDelete}>Delete Account</button>
            
          
        </div>
    )
}


export default Settings 