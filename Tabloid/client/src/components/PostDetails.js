import React, { useState, useEffect } from "react";

export const PostDetails = () => {
    const baseUrl = '/api/Post/PostDetails/'
    const [postDetails, setPostDetails] = useState([])

    useEffect(() => {
        fetch(baseUrl).then(res => (res.json())).then(postDetails => setPostDetails(postDetails))

    }
        , []
    )
    return (
        <div>
            <div>{postDetails.title}</div>
            <div>{postDetails.content}</div>
            <img src={postDetails.imageLocation} alt="image" />
            <div>{postDetails.publishDateTime}</div>

        </div>
    )
}