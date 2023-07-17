import React, { useState, useEffect } from "react";
import { Tag } from "./Tag";

export const TagList = () => {
    const baseUrl = '/api/Tag/'
    const [tags, setTags] = useState([])

    useEffect(() => {
        fetch(baseUrl).then(res => (res.json())).then(tags => setTags(tags))

    }, [])
    return (
        <div>
            {tags.map((tag) => (<Tag tag={tag} key={tag.id} />))}
        </div>)
}
export default TagList