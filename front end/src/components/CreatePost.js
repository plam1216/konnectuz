import React from 'react'
import { useState } from 'react';

////////////////
// CREATE a post
////////////////

const CreatePost = ({ getUser }) => {
    const [post, setPost] = useState({
        content: "",
        image: "",
        likes: [],
        comments: []
    })

    // get data for a User's post
    const postURL = "http://localhost:4000/post/633c9ca25917c13ac081b5cf"

    const createPost = async (post) => {
        await fetch(postURL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(post)
        })
        getUser()
    }

    // handle changes made to form; updates current state of 'post'
    const handleChange = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    // handle form submission (create 'post' which will display in 'Feed')
    const handleSubmit = (event) => {
        // event.preventDefault()
        createPost(post)

        // reset 'post' state
        setPost({
            content: "",
            image: "",
            likes: [],
            comments: []
        })
    }

    // form to CREATE post
    return (
        < div className="create-post">
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-5 create-post-form">
                        <div>
                            <h3 style={{fontWeight: 700}}>What's New?</h3>

                            <div>

                                <label className="form-label create-post-labels">Message</label>
                                <input
                                    type="text"
                                    name="content"
                                    placeholder="Share Your Thoughts"
                                    maxLength={15}
                                    value={post.content}
                                    onChange={handleChange}
                                    className="form-control"
                                    style={{ margin: 0 }}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="form-label create-post-labels">Image</label>
                            <p id="pfp-example" style={{ marginBottom: 10, fontSize: '0.75rem' }}>
                                (ex. https://imgur.com/FV8FVeW.jpg)
                            </p>
                            <input
                                type="text"
                                name="image"
                                placeholder="Share an Image"
                                value={post.image}
                                onChange={handleChange}
                                className="form-control"
                                style={{ margin: 0 }}
                            />
                        </div>
                        <input
                            className="submit-btn"
                            type="submit"
                            value="Submit"
                        />
                    </div>
                </div>
            </form >
        </div >
    )
}

export default CreatePost