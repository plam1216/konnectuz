import React from 'react'
import Header from '../components/Header'

// ###############
// '/feed' route
// ###############

// ###########################
// CURRENTLY USING TEST DATA
// TEST AFTER BACKEND IS SETUP
// ###########################

const Feed = () => {
    //  MOCK DATA
    let users = [
        {
            _id: '1',
            username: 'user1',
            password: '1',
            posts: [{
                content: 'con1',
                image: 'conimg',
                comments: [{
                    content: 'u1 comment 2'
                }, {
                    content: 'u1 comment 2'
                }]
            }],
            image: '1'
        },
        {
            _id: '2',
            username: 'user2',
            password: '2',
            posts: [{
                content: 'con2',
                image: 'con2img',
                comments: [{
                    content: 'u2 first comment'
                }, {
                    content: 'u2 second comment'
                }]
            }],
            image: '2'
        },
    ]

    let allPosts = users.map((user) => {
        return (
            <div className="post" key={user._id}>
                <h3>{user.username}</h3>
                {user.posts.map((post) => {
                    return (
                        <div className="postContent" key={post.content}>
                            {post.content} <br />
                            {post.image}
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
        )
    })

    return (
        <div>
            <Header />
            <h1>Feed Page (Show Everyones Posts)</h1>
            {allPosts}
        </div>
    )
}

export default Feed