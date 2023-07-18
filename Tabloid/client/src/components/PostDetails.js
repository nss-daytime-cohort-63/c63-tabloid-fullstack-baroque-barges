import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
export const PostDetails = () => {
    const { postId } = useParams();
    const baseUrl = `/api/Post/`
    const [postDetails, setPostDetails] = useState()

    useEffect(() => {
        fetch(baseUrl + postId).then(res => (res.json())).then(postDetails => setPostDetails(postDetails))

    }
        , []
    )
    return (
        <div>
            <div>{postDetails?.title}</div>
            <div>{postDetails?.content}</div>
            <img src={postDetails?.imageLocation} alt="image" />
            <div>{postDetails?.publishDateTime}</div>
            <div>{postDetails?.userProfile.displayName}</div>

        </div>
    )
}