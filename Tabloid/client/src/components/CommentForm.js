import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const CommentForm = ({ postId, setAddCommentMode }) => {

    const [comment, setComment] = useState({
        postId: postId,
        userProfileId: 1,
        subject: "",
        content: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setComment((comment) => ({
            ...comment,
            [name]: value
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/api/Comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        }).then(() => {
            navigate("/");
        }
        )
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Subject:
                <input
                    type="text"
                    name="subject"
                    value={comment.subject}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Comment:
                <input
                    type="text"
                    name="content"
                    value={comment.content}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Save</button>
            <button onClick={() => setAddCommentMode(false)}>Cancel</button>
        </form>
    );
};
