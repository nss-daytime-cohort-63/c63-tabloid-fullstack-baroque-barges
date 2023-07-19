import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Comment } from "./Comment"
import { CommentForm } from "./CommentForm"
export const PostDetails = () => {
    const { postId } = useParams();
    const baseUrl = `/api/Post/`
    const [postDetails, setPostDetails] = useState()
    const [addCommentMode, setAddCommentMode] = useState(false)

    useEffect(() => {
        fetch(baseUrl + postId).then(res => (res.json())).then(postDetails => setPostDetails(postDetails))

    }
        , []
    )
    return (
        <div>
            <h4>{postDetails?.title}</h4>
            <div>{postDetails?.content}</div>
            <img src={postDetails?.imageLocation} alt="image" />
            <div>{postDetails?.publishDateTime}</div>
            <div>{postDetails?.userProfile.displayName}</div>
            <h5>Comments:</h5>
            <div>
                {postDetails?.comments.map((comment) => (<Comment comment={comment} key={comment.id} />))}
            </div>
            <button onClick={() => setAddCommentMode(true)}>Add Comment</button>
            {addCommentMode ? <CommentForm postId={postId} setAddCommentMode={setAddCommentMode} /> : ""}
        </div>
    )
}