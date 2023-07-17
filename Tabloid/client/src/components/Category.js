import { useState } from "react";

export const Category = ({ category, setCategories }) => {
    const [categoryToEdit, setCategoryToEdit] = useState({
        id: category.id,
        name: ""
    })
    const [editMode, setEditMode] = useState(false)
    const baseUrl = '/api/Category/'
    const handleDelete = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete this category?")) {
            fetch(baseUrl + `${category.id}`, {
                method: "DELETE"
            }).then(res => res.json())
                .then(response => {
                    setCategories(response);
                })
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoryToEdit((category) => ({
            ...category,
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
            body: JSON.stringify(categoryToEdit)
        })
            .then(res => res.json())
            .then(response => {
                setCategories(response);
                setEditMode(false);
            })
            .catch(error => {
                console.error("Error updating category:", error);
            });
    }
    return (
        <div>
            {editMode ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Edit Category {category.name}:
                        <input
                            type="text"
                            name="name"
                            value={categoryToEdit.name}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </form>
            ) : (
                <p>
                    Name: {category.name}
                    <button onClick={() => setEditMode(true)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </p>
            )}
        </div>
    )
}