import { NavLink as RRNavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export const Post = ({ post }) => {

    const navigate = useNavigate()

    return (
        <div>
            <h4>{post.title}</h4>
            <div>Read Time: {post.estimatedReadTime} {post.estimatedReadTime === 1 ? 'minute' : 'minutes'}</div>
            <div>{post.content}</div>
            <img src={post.imageLocation} alt="image" />
            <div>{post.publishDateTime}</div>
            <div>{post.userProfile.displayName}</div>
            <button onClick={() => navigate(`/index/details/${post.id}`)}>Post Details</button>
        </div>
    )
}