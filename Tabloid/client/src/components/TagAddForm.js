import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addTag } from "../modules/tagManager";

export const TagAddForm = () => {
    const navigate = useNavigate();
    const [tagName, setTagName] = useState();

    const submitForm = (e) => {
        e.preventDefault();
        addTag({ name: tagName })
            .then(() => navigate("/tags"))
            .catch((err) => alert(`An error ocurred: ${err.message}`));
    }

    return (
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label for="tagText">Tag</Label>
                <Input
                    id="tagText"
                    type="textarea"
                    onChange={(e) => setTagName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Button>Save</Button>
            </FormGroup>
        </Form>
    )
}