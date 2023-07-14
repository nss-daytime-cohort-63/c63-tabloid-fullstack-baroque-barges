export const Post = ({ post }) => {
    return (
        <div>
            <div>{post.title}</div>
            <div>{post.content}</div>
            <img src={post.imageLocation} alt="image" />
            <div>{post.publishDateTime}</div>
            <div>{post.userProfile.displayName}</div>
        </div>
    )
}