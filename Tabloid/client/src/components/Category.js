import { useNavigate } from "react-router-dom";

export const Category = ({ category, setCategories }) => {
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
    return (
        <div>
            <p>Name: {category.name}  <button onClick={handleDelete}>Delete</button></p>
        </div>
    )
}