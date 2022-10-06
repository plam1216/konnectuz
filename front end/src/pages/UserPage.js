import React from 'react'
import Header from '../components/Header'
import CreatePost from '../components/CreatePost';
import { useEffect, useState } from 'react';

/////////////////////////////////////////
// '/user/:id' route
// SHOW currently logged in user's posts
/////////////////////////////////////////

const UserPage = (props) => {
    if (localStorage.getItem("currentUser")) {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"))
        if (currentUser._id === props.match.params.userid) {
            console.log("YOU ARE THE USER!!!!!")
        }
    }

    const [user, setUser] = useState(null);

    const URL = `http://localhost:4000/user/${props.match.params.userid}/`;
    const getUser = async () => {
        const repsonse = await fetch(URL);
        const data = await repsonse.json();
        // both data and user is showing in console
        setUser(data);
    }

    useEffect(() => { getUser() }, []);


    let loaded = () => {
        let allPosts =
            <div className="row justify-content-md-center">
                <div className="col col-lg-7" style={{ padding: 0 }}>

                    {user.posts.map((post) => {
                        return (
                            <div className="ind-post" key={user.id}>
                                <div className="user-info">
                                    <img src={user.image} alt=""></img>
                                    <h5 style={{ fontWeight: 700 }}>{user.username}</h5>
                                    <div></div>
                                </div>
                                <div className="postContent" key={post.content}>
                                    <p id="post-text" style={{ margin: 0 }}>
                                        {post.content}
                                    </p>
                                    <img id="post-img" src={post.image} alt="" />

                                    <div id="comments">
                                        <h5 id="comment-header" style={{ fontWeight: 700, display: 'flex', justifyContent: 'center', padding: 5 }}>
                                            {/* <Link to={`/post/${user.id}/${post._id}`}> */}
                                            COMMENTS
                                            {/* </Link> */}
                                        </h5>

                                        {post.comments.map((comment) => {
                                            return (
                                                <div className="comment-container">
                                                    <div className="comment" key={comment.content}>
                                                        {comment.content}
                                                    </div>
                                                    <div className="createdAt">

                                                        {comment.createdAt}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                                )
                        })}
                </div>
            </div>
        return (
            <div>
                <Header />
                <CreatePost getUser={getUser} />
                {allPosts}
            </div>
        )
    }
    let loading = () => {
        return (
            <div>
                <h1>Loading...</h1>
                <Header />
                <CreatePost getUser={getUser} />
            </div>
        )
    }
    return user ? loaded() : loading();
}

export default UserPage