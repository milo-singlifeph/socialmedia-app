import React from "react";

const Post = (props) => {

    return(
        <div id="post">
            <div>{props.post.user.username}: <div id="post-body">{props.post.body}</div></div>
        </div>
    )

}

export default Post;