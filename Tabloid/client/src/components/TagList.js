import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { TagAddForm } from "./TagAddForm";
import { NavLink as RRNavLink } from "react-router-dom";
import { Tag } from "./Tag";
import { NavItem, NavLink, Form } from "reactstrap";


export const TagList = () => {
    const baseUrl = '/api/Tag/'
    const [tags, setTags] = useState([])

    useEffect(() => {
        fetch(baseUrl).then(res => (res.json())).then(tags => setTags(tags))

    }, [])
    return (
        <Form>
            <div>

                <NavLink tag={RRNavLink} to="/tags/add">
                    <button >Add Tag</button>
                </NavLink>

            </div>
            <div>
                {tags.map((tag) => (<Tag tag={tag} key={tag.id} />))}
            </div>
        </Form>
    );
};
