import React, { useState } from 'react'
import Header from '../components/Header'

/////////////////////////
// '/comments/:userid/:postid' route
// CREATE comment on users' post
/////////////////////////

const CommentsPage = () => {
    // use localStorage to fix URL
    const [comment, setComment] = useState({
        content: "",
    })

    const commentURL = "http://localhost:4000/comments/633c758a546c9ecd181ba181/633c78af74d53375779d3fda"

    const createComment = async (comment) => {
        await fetch(commentURL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(comment)
        })
    }


    const handleChange = (event) => {
        console.log(event.target.value)
        setComment({ ...comment, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        createComment(comment)

        setComment({
            content: ""
        })
    }
    return (
        <div>
            <Header />
            Post on left side, comments and form on right side?
            <h4>Comment</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="content"
                    value={comment.content}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    )
}

export default CommentsPage