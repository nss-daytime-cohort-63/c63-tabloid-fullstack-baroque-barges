import React, { useState, useEffect } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Tag } from "./Tag";
import { NavLink, Form } from "reactstrap";

export const TagList = () => {
    const baseUrl = '/api/Tag/'
    const [tags, setTags] = useState([])

    useEffect(() => {
        fetch(baseUrl).then(res => (res.json())).then(tags => setTags(tags))
    }, [])

    return (
        <div>
            <div>
                <h1>!Tags!</h1>
                <h2>if you make a tag it needs to have some !! on it</h2>
            </div>
            <div>
                <NavLink tag={RRNavLink} to="/tags/add">
                    <button >Add Tag</button>
                </NavLink>
            </div>
            <div>
                {tags.map((tag) => (<Tag tag={tag} key={tag.id} setTags={setTags} />))}
            </div>
            <div>
            </div>
        </div>
    );
};
