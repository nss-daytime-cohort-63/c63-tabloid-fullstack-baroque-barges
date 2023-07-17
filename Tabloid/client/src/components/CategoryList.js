import React, { useState, useEffect } from "react";
import { Category } from "./Category";

export const CategoryList = () => {
    const baseUrl = '/api/Category/'
    const [categories, setCategories] = useState([])
    const [newCategory, setNewCategory] = useState({
        Name: ""
    })

    useEffect(() => {
        fetch(baseUrl).then(res => (res.json())).then(categories => setCategories(categories))

    }
        , []
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCategory((newCategory) => ({
            ...newCategory,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCategory)
        })
            .then(res => res.json())
            .then(response => {
                setCategories(response);
                setNewCategory({ Name: "" });
            })
            .catch(error => {
                console.error("Error adding category:", error);
            });
    }


    return (
        <div>
            {categories.map((category) => (<Category category={category} key={category.id} />))}
            <form onSubmit={handleSubmit}>
                <label>
                    Add New Category:
                    <input
                        type="text"
                        name="Name"
                        value={newCategory.Name}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default CategoryList