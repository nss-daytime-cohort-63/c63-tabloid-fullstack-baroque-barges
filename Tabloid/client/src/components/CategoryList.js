import React, { useState, useEffect } from "react";
import { Category } from "./Category";

export const CategoryList = () => {
    const baseUrl = '/api/Category/'
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(baseUrl).then(res => (res.json())).then(categories => setCategories(categories))

    }
        , []
    )

    return (
        <div>
            {categories.map((category) => (<Category category={category} key={category.id} />))}
        </div>
    )
}

export default CategoryList