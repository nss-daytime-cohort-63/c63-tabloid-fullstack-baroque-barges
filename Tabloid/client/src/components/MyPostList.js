import React, { useState, useEffect } from "react";
import { Post } from "./Post";

export const MyPostList = () => {
    const baseUrl = '/api/Post/'
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(baseUrl).then(res => (res.json())).then(posts => setPosts(posts))

    }
        , []
    )

    return (
        <div>
            {posts.map((post) => (<Post post={post} key={post.id} />))}
        </div>
    )
}

export default PostList