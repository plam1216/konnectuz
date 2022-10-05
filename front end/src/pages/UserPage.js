import React from 'react'
import Header from '../components/Header'
import CreatePost from '../components/CreatePost';
import { useEffect, useState } from 'react';

// ###############
// '/feed' route
// ###############

// ###########################
// CURRENTLY USING TEST DATA
// TEST AFTER BACKEND IS SETUP
// ###########################

const UserPage = (props) => {

    const [ user, setUser ] = useState(null);

    const URL = `http://localhost:4000/user/${props.match.params.userid}/`;
    const getUser = async () => {
        const repsonse = await fetch(URL);
        const data = await repsonse.json();
      // both data and user is showing in console
        setUser(data);
    }

    useEffect(() => {getUser()}, []);


    let loaded = () => {
        let allPosts = 
                <div className="post" key={user.id}>
                  <img>{user.image}</img>
                    <h1>{user.username}</h1>
                    {user.posts.map((post) => {
                        return (
                            <div className="postContent" key={post.content}>
                               {post.image}
                                {post.content} <br />
                                
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
        return (
            <div>
            <Header />
            <CreatePost />
            {/* <h1>${user.username}/h1> */}
            {allPosts}
        </div>
        )
    }
    let loading = () => {
        return (
            <div>
            <h1>Loading...</h1>
            <Header />
            <CreatePost />
            </div>
        )
    }
    return user ? loaded() : loading();
}

export default UserPage