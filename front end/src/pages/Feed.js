import React from 'react'
import Header from '../components/Header'
import CreatePost from '../components/CreatePost';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/////////////////////////
// '/feed' route
// SHOW all users' posts
/////////////////////////

const Feed = () => {
    const [user, setUser] = useState(null);

    // get all user data from MongoDB
    const URL = "http://localhost:4000/user/";
    const getUser = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => { getUser() }, []);

    // if there is data at the 'URL'
    let loaded = () => {
        // map through all the users and show all of their posts
        let allPosts = user.map((u) => {
            return (
                <div className="row justify-content-md-center">
                    <div className="col col-lg-6" style={{ padding: 0 }} key={u._id}>

                        {/* Map through individual user's 'posts' array */}
                        {u.posts.map((post) => {
                            return (
                                <div className='ind-post'>
                                    <Link to={`/user/${u.id}`}>
                                        {/* user's 'pfp' and 'username' */}
                                        <div className="user-info">
                                            <img className="pfp" src={u.pfp} alt={u.username} />
                                            <h5>{u.username}</h5>

                                            <div></div>
                                        </div>
                                    </Link>
                                    <div className="post-content" key={post.content}>
                                        <p id="post-text" style={{ margin: 0 }}>
                                            {post.content}
                                        </p>
                                        <img id="post-img" src={post.image}/>
                                        
                                        <div id="comments">
                                            <h5>COMMENTS</h5>
                                        {/* map through each post's 'comments' array */}
                                            {post.comments.map((comment) => {
                                                return (
                                                    <div className="comment" key={comment.content}>
                                                        {comment.content}
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
            )
        })

        return (
            <main id="feed-main">
                <Header />
                <CreatePost getUser={getUser} />
                {allPosts}
            </main>
        )
    }

    // if there are no posts yet show option to create a post
    let loading = () => {
        return (
            <div>
                <Header />
                <CreatePost getUser={getUser} />
            </div>
        )
    }
    return user ? loaded() : loading();
}

export default Feed
