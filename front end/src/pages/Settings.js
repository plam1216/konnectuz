import React from "react";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";

function Settings(props) {
    let current = JSON.parse(localStorage.getItem("currentUser"))
    let history = useHistory();

    const URL = `http://localhost:4000/user/${current._id}`
    async function deleteUser() {
        await fetch(URL, { method: 'DELETE' })
    }
    function confirmDelete() {
        if (window.confirm('are you sure you want to delete your account')) { handleSubmit() }
    }

    const handleSubmit = () => {
        localStorage.clear();
        deleteUser();
        history.push("/")
    }
    return (
        <div className="settings">
            <Header />
            < div className="delete-account">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-5 create-post-form">
                        <h2>Delete Account id: {current._id}</h2>
                        <button onClick={confirmDelete}>Delete</button>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Settings 