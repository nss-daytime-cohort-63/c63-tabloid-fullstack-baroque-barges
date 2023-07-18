export const MyPost = ({ myPost }) => {
    return (
        <div>
            <div>{myPost.title}</div>
            <div>{myPost.content}</div>
            <img src={myPost.imageLocation} alt="image" />
            <div>{myPost.publishDateTime}</div>
            <div>{myPost.userProfile.displayName}</div>
        </div>
    )
}