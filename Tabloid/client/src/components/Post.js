export const Post = ({ post }) => {
    return (
        <div>
            <h4>{post.title}</h4>
            <div>Read Time: {post.estimatedReadTime} {post.estimatedReadTime === 1 ? 'minute' : 'minutes'}</div>
            <div>{post.content}</div>
            <img src={post.imageLocation} alt="image" />
            <div>{post.publishDateTime}</div>
            <div>{post.userProfile.displayName}</div>
        </div>
    )
}