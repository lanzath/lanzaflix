import React from 'react'
import { FormContainer, FormLabel, TextArea } from './styles';

/**
 * Form fields component
 * @param {string} name from props.name
 * @param {object} value from props.value
 * @param {Event} onChange from props.onChange
 * @returns {Element} JSX
 */
function TextAreaField({ label, name, value, onChange }) {
    return (
        <FormContainer>
            <FormLabel>
                { label }:
                <TextArea
                    rows="10"
                    cols="50"
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </FormLabel>
        </FormContainer>
    );
}

export default TextAreaField;
