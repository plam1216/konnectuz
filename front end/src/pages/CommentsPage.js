import React, { useState, useEffect} from 'react'
import Header from '../components/Header'

/////////////////////////
// '/comments/:userid/:postid' route
// CREATE comment on users' post
/////////////////////////

const CommentsPage = (props) => {
    // const [post, setPost] = useState(null);

    // // fetch data for current logged in user
    // const URL = `http://localhost:4000/post/${props.match.params.userid}/${props.match.params.postid}`;
    // const getPost = async () => {
    //     const response = await fetch(URL);
    //     const data = await response.json();
    //     // both data and user is showing in console
    //     setPost(data);
    //     // console.log('post', post)
    //     // console.log('data', data)
    // }

    // useEffect(() => { getPost() }, []);
 


    // this is working, creates a comment for the respective post
    const [comment, setComment] = useState({
        content: "",
    })

    const commentURL = `http://localhost:4000/comments/${props.match.params.userid}/${props.match.params.postid}`

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
            {/* {post.content } */}
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
