import { useState } from 'react';

export const Tag = ({ tag, setTags }) => {
    const [tagToEdit, setTagToEdit] = useState({ id: tag.id, name: "" })
    const [editMode, setEditMode] = useState(false)
    const baseUrl = '/api/Tag/'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTagToEdit((tag) => ({
            ...tag,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(baseUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tagToEdit)
        })
            .then(res => res.json())
            .then(r => {
                setTags(r);
                setEditMode(false);
            })
            .catch(error => {
                console.error("Error updating !tag!:", error);
            });
    }
    return (
        <div>
            {editMode ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Edit !Tag! {tag.name}:
                        <input
                            type="text"
                            name="name"
                            value={tagToEdit.name}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </form>
            ) : (
                <p>
                    !Tag! = {tag.name}
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </p>
            )}
        </div>
    )

}