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
        const repsonse = await fetch(URL);
        const data = await repsonse.json();
        setUser(data);
        console.log(data)
    }

    useEffect(() => { getUser() }, []);

    // //  MOCK DATA
    // let users = [
    //     {
    //         _id: '1',
    //         username: 'user1',
    //         password: '1',
    //         posts: [{
    //             content: 'con1',
    //             image: 'conimg',
    //             comments: [{
    //                 content: 'u1 comment 2'
    //             }, {
    //                 content: 'u1 comment 2'
    //             }]
    //         }],
    //         image: '1'
    //     },
    //     {
    //         _id: '2',
    //         username: 'user2',
    //         password: '2',
    //         posts: [{
    //             content: 'con2',
    //             image: 'con2img',
    //             comments: [{
    //                 content: 'u2 first comment'
    //             }, {
    //                 content: 'u2 second comment'
    //             }]
    //         }],
    //         image: '2'
    //     },
    // ]

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
                <div className="create-post">
                    <form>
                        <label>say something</label>
                        <textarea style={{display: 'block', margin: 'auto'}}></textarea>
                    </form>
                </div>
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