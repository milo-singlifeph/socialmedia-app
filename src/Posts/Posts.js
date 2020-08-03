import React, { useContext } from "react";
import Post from "./Post";
import MyContext from "../MyContext";

const Posts = () => {

    const {posts} = useContext(MyContext);

    let currentPosts = posts.map(post => {
        return(
            <Post
                key={post._id}
                post={post}
            />
        )
    })

    return(
        <div id="posts">
            <h2>Posts</h2>
            {currentPosts}
        </div>
    )

}

export default Posts;