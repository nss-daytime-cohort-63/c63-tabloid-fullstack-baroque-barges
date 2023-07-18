import React, { useState, useEffect } from "react";
import { Post } from "./Post";

export const MyPostList = () => {
    const baseUrl = '/api/Post/GetMyPost'
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(baseUrl).then(res => (res.json())).then(posts => setPosts(posts))

    }
        , []
    )

    return (
        <div>
            {posts.map((myPost) => (<Post myPost={myPost} key={myPost.id} />))}
        </div>
    )
}

export default MyPostList