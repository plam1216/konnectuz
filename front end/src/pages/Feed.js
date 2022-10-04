import React from 'react'
import Header from '../components/Header'
import { useEffect, useState } from 'react';

/////////////////////////
// '/feed' route
// shows all users' posts
/////////////////////////

const Feed = () => {

    const [user, setUser] = useState(null);

    const URL = "http://localhost:4000/user/";
    const getUser = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setUser(data);
    }
    const [post, setPost] = useState({
        content: "",
        image: "",
        likes: [],
        comments: []
    })

    const postURL = "http://localhost:4000/post/633c758a546c9ecd181ba181"
    const createPost = async (post) => {
        await fetch(postURL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(post)
        })
    }

    useEffect(() => { getUser() }, []);

    const handleChange = (event) => {
        console.log('list of users', [...user])
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createPost(post)

        setPost({
            content: "",
            image: "",
            likes: [],
            comments: []
        })

        getUser()
        console.log('list of users after submit', [...user])
    }

    let loaded = () => {
        let allPosts = user.map((u) => {
            return (
                <div className="row justify-content-md-center">
                    <div className="post col col-lg-6" style={{ padding: 0 }} key={u._id}>
                        <div className="user-info">
                            <img className="pfp" src={u.pfp} alt={u.username} />
                            <h5>{u.username}</h5>
                            <div></div>
                        </div>
                        {u.posts.map((post) => {
                            return (
                                <div className="post-content" key={post.content}>
                                    <p id="post-text" style={{ margin: 0 }}>
                                        {post.content}
                                    </p>
                                    <img src={post.image} alt={post.content} />
                                    {post.comments.map((comment) => {
                                        return (
                                            <div className="comment" key={comment.content}>
                                                {comment.content}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        })
        return (
            <main id="feed-main">
                <Header />
                {/* <div className="container"> */}
                <h4 style={{ textAlign: 'center' }}>say something</h4>
                <div className="create-post">
                    <form onSubmit={handleSubmit}>
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-4">
                                <div>
                                    <label className="form-label">text</label>
                                    <input
                                        type="text"
                                        name="content"
                                        value={post.content}
                                        onChange={handleChange}
                                    />
                                    <label className="form-label">image</label>
                                    <p id="pfp-example" style={{ marginTop: 0, fontSize: '0.75rem' }}>
                                        (ex. https://imgur.com/FV8FVeW.jpg)
                                    </p>
                                    <input
                                        type="text"
                                        name="image"
                                        value={post.image}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="submit"
                                        value="Submit"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* </div> */}
                {allPosts}
            </main>
        )
    }
    let loading = () => {
        return (
            <div>
                <Header />
                <div className="create-post">
                    create post here
                </div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return user ? loaded() : loading();
}

export default Feed