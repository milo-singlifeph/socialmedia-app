import React, { useState } from "react";

const AddPostForm = (props) => {

    const [textarea, setTextarea] = useState("");

    let getPost = (e) => {
        let newPost = e.target.value;
        setTextarea(newPost);
    }

    let addPostHandler = () => {
        let newPost = {
            user: props.user._id,
            body: textarea
        }
        props.addPost(newPost)
    }

    return(
        <div id="post-form">
            <textarea id="post-here" rows="5" cols="40" onChange={getPost}/>
            <button onClick={addPostHandler}>Post</button>
        </div>
    )

}

export default AddPostForm;