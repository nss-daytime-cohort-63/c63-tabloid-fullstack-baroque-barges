
export const Comment = ({ comment }) => {


    return (
        <div>
            <h6>{comment.subject}</h6>
            <div>{comment.content}</div>
            <div>Made on: {comment.createDateTime}</div>
        </div>
    )
}